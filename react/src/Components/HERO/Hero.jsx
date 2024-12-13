import React from "react";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className="w-full border bg-cover bg-center border-indigo-600 bg-[url('/images/Hero.png')] h-[250px] sm:h-[300px]  sm:bg-cover  flex items-center  px-6 md:bg-cover md:h-[550px] md:flex md:items-center md:w-full lg:h-[730px] bg-no-repeat  lg:flex lg:items-center ">
      <div className="fixed top-0 left-0 right-0">
        <Nav />
      </div>
      <div className=" border border-indigo-600 gap-2 lg:gap-8 md:gap-5 sm:gap-3 flex flex-col justify-center relative w-[150px] sm:w-[370px] md:w-[430px] lg:w-[670px] lg:mx-16">
        <img className="" src="/images/Dead.png" alt="" />
        <p className="text-white text-[8px] lg:w-[580px] lg:text-lg md:text-base md:w-[400px]">
          Em Dead by Daylight, persiga, corte e sacrifique sua presa como um
          assassino monstruoso ou junte-se a uma equipe de quatro sobreviventes
          astutos trabalhando juntos para escaparke.
        </p>
      </div>
    </div>
  );
};

export default Hero;
