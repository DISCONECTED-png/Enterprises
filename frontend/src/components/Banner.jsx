import React, { useEffect, useState } from 'react';
import ban1 from "../assets/ban1.jpeg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/ban3.jpg";
import ban4 from "../assets/ban4.jpg";

const Banner = () => {
  const images = [ban1, ban2, ban3, ban4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-xl">

      {/* Background images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

      {/* Foreground content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wide opacity-0 animate-fade-up">
    Welcome to Suraj Enterprises
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md opacity-0 animate-fade-up animate-delay-300">
    India's Trusted Industrial Blower & Heating System Manufacturer
  </p>
  <a
    href="#contact"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md opacity-0 animate-fade-up animate-delay-500"
  >
    Get in Touch
  </a>
</div>


      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border-2 transition duration-300 ${
              currentSlide === index
                ? "bg-blue-600 border-blue-600"
                : "bg-gray-300 border-gray-300 hover:bg-blue-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
