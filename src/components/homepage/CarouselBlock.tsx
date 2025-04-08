import { useEffect, useState } from "react";
import carouselImage from "../../assets/banner.webp";

const CarouselBlock = () => {
  const slides = [
    {
      id: 1,
      imageUrl: carouselImage,
      caption: "Slide 1",
    },
    {
      id: 2,
      imageUrl: carouselImage,
      caption: "Slide 2",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change the slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img
                src={slide.imageUrl}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselBlock;
