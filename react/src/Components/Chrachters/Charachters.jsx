import React from "react";

const Charachters = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-6 lg:p-2 bg-[#090d15] text-white">
    <div className="flex-1 bg-[url('/images/Charachter-bg.png')] bg-cover bg-center rounded-lg p-6 shadow-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl  mb-14 text-center lg:text-center">
      Play as<br />A Killer (Solo)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-center bg-cover bg-no-repeat bg-[url('/images/Charachter-ghost-bg.png')] rounded-xl items-center">
          <div className="flex flex-col relative h-full justify-end md:w-full items-center mt-auto">
            <img
              src="images/ghost.png"
              alt="Ghost Face"
              className="rounded-lg w-full object-contain"
            />
            <img className="absolute w-[150px] sm:w-[200px] md:w-[250px] lg:w-[230px]" src="/images/ghost-text.png" alt="" />
            
          </div>
        </div>
        <div className="flex flex-col bg-center  bg-contain bg-no-repeat bg-[url('/images/Charachter-donkey-bg.png')] rounded-xl items-center">
          <div className="flex relative flex-col h-full justify-end md:w-full items-center mt-auto">
            <img
              src="images/donkey.png"
              alt="Saw"
              className="rounded-lg w-full object-contain"
            />
             <img className="absolute w-[100px] sm:w-[150px]  md:w-[130px] lg:w-[150px]" src="/images/donkey-text.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  
    <div className="flex-1 bg-[url('/images/Charachter-bg1.png')] bg-cover bg-center rounded-lg p-6 shadow-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl  mb-14 text-center lg:text-center">
      Play as<br />A survivor(Co-op)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-center bg-cover bg-no-repeat bg-[url('/images/Charachter-bg2.png')] rounded-xl items-center">
          <div className="flex flex-col relative h-full justify-end md:w-full items-center mt-auto">
            <img
              src="images/Residentevil.png"
              alt="Resident Evil"
              className="rounded-lg w-full object-contain"
            />
            <img className="absolute w-[150px] sm:w-[200px]  md:w-[250px] lg:w-[230px]" src="/images/residentevil-text.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col bg-center bg-cover bg-no-repeat bg-[url('/images/Charachter-bg3.png')] rounded-xl items-center">
          <div className="flex flex-col relative h-full justify-end items-center md:w-full mt-auto">
            <img
              src="images/silenthill.png"
              alt="Silent Hill"
              className="rounded-lg w-full object-contain"
            />
            <img className="absolute w-[150px] sm:w-[200px]  md:w-[250px] lg:w-[230px] pb-2" src="/images/silenthill-text.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Charachters;
