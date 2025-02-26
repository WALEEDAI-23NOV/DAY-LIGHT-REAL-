import React from "react";
import Nav from "../../../Components/Nav/Nav";

const ChrachtersHero = () => {
  return (
    <div className="bg-[url('/images/Charachters-hero.png')] relative bg-center bg-no-repeat w-full min-h-screen grid grid-cols-1 sm:grid-cols-2">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>

      {/* Shadow Image */}
      <img
        className="w-full self-end absolute bottom-0"
        src="/images/shadow.png"
        alt=""
      />

      {/* Left Column */}
      <div className="flex flex-col gap-4 md:gap-8 border justify-center items-center sm:items-start px-6 md:px-12 h-full">
        <h1 className="text-white pt-8 text-5xl sm:text-6xl lg:text-7xl font-semibold text-center sm:text-left">
          Escolha seu lado
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
          <button className="bg-[#80080A] hover:bg-red-600 text-white font-semibold py-3 px-10 lg:py-4 lg:px-14">
            Assassino
          </button>
          <button className="bg-transparent border border-gray-500 hover:bg-gray-700 text-white font-semibold py-3 px-10 lg:py-4 lg:px-10">
            Sobrevivente
          </button>
        </div>

        {/* Search Input Field */}
        <div className="flex items-center border rounded w-full max-w-[390px] px-4 py-2 md:mt-4">
          <input
            type="text"
            placeholder="Pesquise personagens"
            className="flex-1 bg-transparent focus:outline-none"
          />
          <img
            className="w-5 h-5 ml-2 cursor-pointer"
            src="/images/MagnifyingGlass.png"
            alt="Search Icon"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center border items-center h-full">
        <img
          src="/images/Hero-charachters.png"
          alt=""
          className="max-w-full h-auto "
        />
      </div>
    </div>
  );
};

export default ChrachtersHero;
