import { css } from "@emotion/css";
import { Children, useState, ReactNode } from "react";
import { theme } from "../theme";

interface CarouselProps {
  children: ReactNode;
}

const containerStyle = css`
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: auto;
  perspective: 1200px; /* Enables 3D perspective */
  height: 90vh;
  align-content: center;
`;

const trackStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 300px; /* Adjust based on content */
`;

const slideStyle = (
  index: number,
  currentIndex: number,
  totalSlides: number
) => css`
  position: absolute;
  width: 90%;
  ${theme.mq.md} {
    width: 70%;
  }
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  ${index === currentIndex
    ? `
      transform: translateZ(0) scale(1); /* Active */
      opacity: 1;
      z-index: 2;
    `
    : index === (currentIndex + 1) % totalSlides
    ? `
      transform: translateX(-30%) translateY(10%) translateZ(-200px) scale(0.8); /* Next */
      opacity: 0.7;
      z-index: 1;
    `
    : index === (currentIndex - 1 + totalSlides) % totalSlides
    ? `
      transform: translateX(30%) translateY(-10%) translateZ(-400px) scale(0.6); /* Previous */
      opacity: 0.5;
      z-index: 0;
    `
    : `
      display: none; /* Hide all other slides */
    `}
`;

const buttonStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 3;
`;

const prevButtonStyle = css`
  ${buttonStyle}
  left: 10px;
`;

const nextButtonStyle = css`
  ${buttonStyle}
  right: 10px;
`;

export const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={containerStyle}>
      <button onClick={prevSlide} className={prevButtonStyle}>
        ‹
      </button>

      <div className={trackStyle}>
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className={slideStyle(index, currentIndex, totalSlides)}
          >
            {child}
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className={nextButtonStyle}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
