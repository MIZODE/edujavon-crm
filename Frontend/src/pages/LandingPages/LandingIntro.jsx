import React, { useState, useEffect } from "react";

export default function LandingIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/Landing page/books1.jpg",
    "/Landing page/bookl.jfif",
    "/Landing page/shelf.jpg",
  ];

  // Avtomatik slider - har 3 sekundda o'zgaradi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sekund

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div
        id="custom-controls-gallery"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-[500px] overflow-hidden md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                className="absolute block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
