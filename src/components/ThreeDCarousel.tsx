import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/alex-knight-wfwUpfVqrKU-unsplash.jpg",
    alt: "Tokyo back alley",
  },
  {
    src: "/images/erik-eastman-4HG5hlhmZg8-unsplash.jpg",
    alt: "Tokyo crossing",
  },
  {
    src: "/images/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
    alt: "Tokyo Akihabara",
  },
  {
    src: "/images/louie-martinez-IocJwyqRv3M-unsplash.jpg",
    alt: "Tokyo Tower",
  },
  { src: "/images/c-m-DEQa7uZFRbw-unsplash.jpg", alt: "Akihabara Gashapon" },
  { src: "/images/susann-schuster-RpuqBx9o6DY-unsplash.jpg", alt: "Neko" },
  {
    src: "/images/yoav-aziz-tKCd-IWc4gI-unsplash.jpg",
    alt: "Tokyo storefronts with Yakitori lantern",
  },
  { src: "/images/luca-florio-BbdT0qTld90-unsplash.jpg", alt: "Tokyo Tower" },
];

const ThreeDCarousel = () => {
  const [quantity] = useState(images.length);

  useEffect(() => {
    document.documentElement.style.setProperty("--quantity", `${quantity}`);
  }, [quantity]);

  return (
    <div className="w-full h-screen text-center overflow-hidden relative banner">
      <div
        className="slider"
        style={{ "--quantity": quantity } as React.CSSProperties}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="content">
        <h1 data-content="3D Carousel">3D Carousel</h1>
        <div className="author">
          <h2>Pure CSS</h2>
          <p>
            <a href="https://cflinchbaugh.github.io/portfolio/">
              Chris' Portfolio
            </a>
          </p>
        </div>

        <div className="model-3d-centered"></div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
