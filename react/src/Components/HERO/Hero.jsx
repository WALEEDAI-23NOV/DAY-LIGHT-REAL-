import React from "react";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className="w-full   bg-cover bg-center z-0  items-end sm:items-end  sm:flex justify-center md:items-center md:justify-start  md:bg-[url('/images/Hero.png')] bg-[url('/images/Mobile.png')]  h-[100vh] sm:h-[100vh]  sm:bg-cover sm:bg-center  flex  md:bg-cover md:h-[550px]  md:w-full lg:h-[730px] bg-no-repeat  lg:flex lg:items-center ">
      <div className="bg-[url('/images/Background.png')] lg:mx-0 my-0 w-full bg-cover bg-center z-0  items-end sm:items-end  sm:flex justify-center md:items-center md:justify-start  sm:px-8 md:px-10   h-[100vh] sm:h-[100vh]  sm:bg-cover sm:bg-center  flex  md:bg-cover md:h-[550px]  md:w-full lg:h-[730px] bg-no-repeat  lg:flex lg:items-center">
        <div className="fixed top-0 left-0 right-0">
          <Nav />
        </div>
        <div className="  bottom-4   gap-3 lg:gap-8 md:gap-5 sm:gap-3 sm:bottom-6 flex flex-col justify-center md:flex md:mt-36  relative  w-[350px] sm:w-[430px] md:w-[530px] lg:w-[670px] ">
          <img className="" src="/images/Dead.png" alt="" />
          <p className="text-white text-[13px] lg:w-[580px] lg:text-lg md:text-base md:w-[500px]">
            Em Dead by Daylight, persiga, corte e sacrifique sua presa como um
            assassino monstruoso ou junte-se a uma equipe de quatro
            sobreviventes astutos trabalhando juntos para escapar.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <button className="lg:w-72 lg:h-14 md:w-64 md:h-10 h-8 w-40   bg-[#80080a] text-white  ">
              Buy the main game
            </button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;
