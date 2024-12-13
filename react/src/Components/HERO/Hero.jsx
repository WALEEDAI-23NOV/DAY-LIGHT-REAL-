import React from "react";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className="w-full border bg-cover bg-center justify-center items-end sm:items-center sm:flex sm:justify-start sm:px-8 md:px-10 border-indigo-600 md:bg-[url('/images/Hero.png')] bg-[url('/images/Mobile.png')]  h-[100vh] sm:h-[100vh]  sm:bg-cover sm:bg-center  flex   px-4 md:bg-cover md:h-[550px]  md:w-full lg:h-[730px] bg-no-repeat  lg:flex lg:items-center ">
      <div className="fixed top-0 left-0 right-0">
        <Nav />
      </div>
      <div className=" border  border-indigo-600 gap-2 lg:gap-8 md:gap-0 sm:gap-3 flex flex-col justify-center relative  w-[400px] sm:w-[450px] md:w-[530px] lg:w-[670px] ">
        <img className="" src="/images/Dead.png" alt="" />
        <p className="text-white text-[13px] lg:w-[580px] lg:text-lg md:text-base md:w-[500px]">
          Em Dead by Daylight, persiga, corte e sacrifique sua presa como um
          assassino monstruoso ou junte-se a uma equipe de quatro sobreviventes
          astutos trabalhando juntos para escapar.
        </p>
      </div>
    </div>
  );
};

export default Hero;
