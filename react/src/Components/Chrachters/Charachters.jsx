import React from "react";

const Charachters = () => {
  return (
    <div className="w-full lg:h-[900px] border">
      <div className="w-full h-[756px] flex md:flex-row border md:h-[70%]">
        <div className="border  flex flex-col bg-[url('/images/Charachter-bg.png')] bg-enter bg-cover bg-no-repeat h-[100%] w-[50%]">
          <div className=" md:h-[30%] border  flex items-center justify-center ">
            <h1 className="md:text-4xl text-center   text-white">
              Play as
              <br></br>A Killer (Solo)
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row md:h-[70%] border bg-black">
            <div className=" flex relative justify-center  items-end md:w-[50%] md:h-[100%] bg-[url('/images/Charachter-ghost-bg.png')] bg-center bg-cover border">
              <img src="/images/ghost.png" alt="" />
              <img className="absolute w-[150px] md:w-[250px] lg" src="/images/ghost-text.png" alt="" />
            </div>
            <div className="flex relative justify-center items-end md:w-[50%] md:h-[100%] bg-[url('/images/Charachter-donkey-bg.png')] bg-center bg-cover border">
              <img src="/images/donkey.png" alt="" />
              <img className="absolute w-[150px] md:w-[200px]" src="/images/donkey-text.png" alt="" />
            </div>
          </div>
        </div>
        <div className="border bg-[url('/images/Charachter-bg1.png')] bg-center bg-no-repeat bg-cover h-[100%] w-[50%]">
          <div className=" md:h-[30%] border flex items-center justify-center ">
            <h1 className="md:text-4xl text-center   text-white">
              Play as
              <br></br>A survivor(Co-op)
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row md:h-[70%] border bg-black">
          <div className=" flex relative justify-center h-[315px]  items-end md:w-[50%] md:h-[100%] bg-[url('/images/Charachter-bg2.png')] bg-center bg-cover border">
              <img className="  " src="/images/Residentevil.png" alt="" />
              <img className="absolute w-[150px] md:w-[250px] lg" src="/images/ghost-text.png" alt="" />
            </div>
            <div className="flex relative justify-center items-end md:w-[50%] md:h-[100%] bg-[url('/images/Charachter-bg3.png')] bg-center bg-cover border">
              <img src="/images/silenthill.png" alt="" />
              <img className="absolute w-[200px] md:w-[200px]" src="/images/silenthill-text.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charachters;
