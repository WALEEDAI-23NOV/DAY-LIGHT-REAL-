import React from "react";

const Platform = () => {
  return (
    <div className=" w-full h-[150px] md:h-[120px] lg:h-[158px] flex  justify-center items-center">
      <div className=" h-28 sm:h-32 w-[400px] sm:w-[600px] md:w-[750px] md:h-20 lg:w-[1100px]    flex  flex-col md:flex-row">
        <div className="h-[50%] md:w-[50%]  md:h-full text-white">
          <h1 className="sm:text-2xl md:text-3xl md:text-start text-xl text-center  ">
            Bem vindo ao jogo mortal de esconde-esconde
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4  h-[50%]  md:w-[50%] md:h-full    md:justify-end  lg:gap-6">
          <img
            className="text-sm md:text-xl"
            src="/images/computer.png"
            alt=""
          />
          <img className="text-sm md:text-xl" src="/images/epic.png" alt="" />
          <img
            className="text-sm md:text-xl"
            src="/images/Microsoft.png"
            alt=""
          />
          <img
            className="text-sm md:text-xl"
            src="/images/nintendo.png"
            alt=""
          />
          <img
            className="text-sm md:text-xl"
            src="/images/playstation.png"
            alt=""
          />
          <img className="text-sm md:text-xl" src="/images/steam.png" alt="" />
          <img className="text-sm md:text-xl" src="/images/xbox.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
