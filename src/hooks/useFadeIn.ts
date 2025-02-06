import { useEffect } from "react";

const useFadeIn = (
  fadeInClass = "fade-in",
  threshold = 0.3,
  visibleClass = "fade-in-visible"
) => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(`.${fadeInClass}`);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold, // Trigger when ${threshold}% of the element is visible
      }
    );

    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up observer
    return () => {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [fadeInClass, threshold, visibleClass]);
};

export default useFadeIn;
