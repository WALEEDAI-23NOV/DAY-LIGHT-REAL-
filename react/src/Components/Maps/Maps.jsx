import React from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Maps = () => {
  const slides = [
    {
      id: 1,
      image: "/images/map-1.png", 
      caption: "Raccoon City",
    },
   
  ];
  return (
    <div className="bg-black text-white sm:py-16 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Explore mais de 15 mapas de arrepiar</h1>
      
      <div className="w-full max-w-4xl">
        <Slide
          duration={3000}
          transitionDuration={500}
          infinite
          arrows
          autoplay
          indicators={(index) => (
            <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
          )}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />

              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 text-lg font-semibold rounded">
                {slide.caption}
              </p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default Maps