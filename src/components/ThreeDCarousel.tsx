import { useEffect, useState } from "react";

const images = [
  {
    src: "/fintech-600.avif",
    alt: "Tokyo back alley",
  },
  {
    src: "/fintech-600.avif",
    alt: "Tokyo crossing",
  },
  {
    src: "/fintech-600.avif",
    alt: "Tokyo Akihabara",
  },
  {
    src: "/fintech-600.avif",
    alt: "Tokyo Tower",
  },
  {
    src: "/fintech-600.avif",
    alt: "Akihabara Gashapon",
  },
  {
    src: "/fintech-600.avif",
    alt: "Neko",
  },
  {
    src: "/fintech-600.avif",
    alt: "Tokyo storefronts with Yakitori lantern",
  },
  {
    src: "/fintech-600.avif",
    alt: "Tokyo Tower",
  },
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
