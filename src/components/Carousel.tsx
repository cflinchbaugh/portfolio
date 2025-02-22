import { Children, useState, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
};

export const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const getSlideStyle = (index: number) => {
    if (index === currentIndex) {
      return {
        transform: "translateZ(0) scale(1)",
        opacity: 1,
        zIndex: 2,
      };
    } else if (index === (currentIndex + 1) % totalSlides) {
      return {
        transform:
          "translateX(-30%) translateY(10%) translateZ(-200px) scale(0.8)",
        opacity: 0.7,
        zIndex: 1,
      };
    } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
      return {
        transform:
          "translateX(30%) translateY(-10%) translateZ(-400px) scale(0.6)",
        opacity: 0.5,
        zIndex: 0,
      };
    } else {
      return { display: "none" }; // Hide other slides
    }
  };

  return (
    <div className="relative w-full max-w-[800px] overflow-hidden mx-auto perspective-[1200px] h-[90vh] flex items-center">
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded z-10"
      >
        ‹
      </button>

      {/* Slides Container */}
      <div className="relative flex justify-center items-center w-full h-[300px]">
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="absolute w-[90%] md:w-[70%] max-w-[500px] flex items-center justify-center bg-white rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
            style={getSlideStyle(index)}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded z-10"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
