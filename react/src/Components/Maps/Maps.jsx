import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Maps = () => {
  const slides = [
    {
      id: 1,
      image: "/images/map-1.png",
      caption: "Raccoon City",
    },
    {
      id: 2,
      image: "/images/map-2.png",
      caption: "Ormond",
    },
    {
      id: 3,
      image: "/images/map-3.png",
      caption: "Léry Memorial Institute",
    },
    {
      id: 4,
      image: "/images/map-4.png",
      caption: "Autohaven Junkyard",
    },
    {
      id: 5,
      image: "/images/map-5.png",
      caption: "Backwater Swamp",
    },
    {
      id: 6,
      image: "/images/map-6.png",
      caption: "Crotus prenn hospice",
    },
    {
      id: 7,
      image: "/images/map-7.png",
      caption: "Forest shelter",
    },
    {
      id: 8,
      image: "/images/map-8.png",
      caption: "gideon meat packaging factory",
    },
    {
      id: 9,
      image: "/images/map-9.png",
      caption: "Springhood",
    },
  ];
  return (
    <div className="bg-[#090d15] relative text-white py-16 flex flex-col items-center">
      <h1 className="md:text-4xl text-2xl mb-8">
        Explore mais de 15 mapas de arrepiar
      </h1>

      <div className=" w-full px-9 sm:w-full">
        <Slide
          duration={2000}
          transitionDuration={1000}
          infinite
          arrows
          autoplay
          
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />

              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 text-sm sm:texl-lg font-semibold rounded">
                {slide.caption}
              </p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Maps;
