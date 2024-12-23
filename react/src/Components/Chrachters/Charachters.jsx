import React from "react";

const Charachters = () => {
  return (
    <div className="w-full h-[770px] sm:h-[900px] md:h-[650px] lg:h-[900px] border ">
      <div className="w-full flex md:flex-row h-[80%] md:h-[70%] sm:h-[90%]">
        <div className="border flex flex-col bg-[url('/images/Charachter-bg.png')] bg-center bg-cover bg-no-repeat h-full w-1/2">
          <div className="md:h-[30%] hidden  border md:flex items-center justify-center">
            <h1 className="md:text-4xl  text-center text-white">
              Play as
              <br />A Killer (Solo)
            </h1>
          </div>
          <div className="flex flex-col   md:flex-row md:h-[70%] h-[100%] border bg-black">
            <div className="flex   justify-center items-end h-1/2 md:w-1/2 md:h-full bg-[url('/images/Charachter-ghost-bg.png')] bg-center bg-cover border">
              <img
                className=" max-w-full h-[100%] object   "
                src="/images/ghost.png"
                alt="Ghost"
              />
              <img
                className="absolute w-[150px] md:w-[250px]"
                src="/images/ghost-text.png"
                alt="Ghost Text"
              />
            </div>
            <div className="flex   justify-center items-end h-1/2 md:w-1/2 md:h-full bg-[url('/images/Charachter-ghost-bg.png')] bg-center bg-cover border">
              <img
                className=" w-full h-full object-cover"
                src="/images/donkey.png"
                alt="Ghost"
              />
              <img
                className="absolute w-[150px] md:w-[250px]"
                src="/images/ghost-text.png"
                alt="Ghost Text"
              />
            </div>
          </div>
        </div>
        <div className="border bg-[url('/images/Charachter-bg1.png')] bg-center bg-no-repeat bg-cover h-full w-1/2">
          <div className="md:h-[30%]  sm:h-[10%] border  items-center justify-center hidden md:flex">
            <h1 className="md:text-4xl text-center text-white">
              Play as
              <br />A Survivor (Co-op)
            </h1>
          </div>
          <div className="flex flex-col   md:flex-row md:h-[70%] h-[100%] border bg-black">
            <div className="flex   justify-center items-end h-1/2 md:w-1/2 md:h-full bg-[url('/images/Charachter-ghost-bg.png')] bg-center bg-cover border">
              <img
                className=" max-w-full h-[100%] object   "
                src="/images/ghost.png"
                alt="Ghost"
              />
              <img
                className="absolute w-[150px] md:w-[250px]"
                src="/images/ghost-text.png"
                alt="Ghost Text"
              />
            </div>
            <div className="flex   justify-center items-end h-1/2 md:w-1/2 md:h-full bg-[url('/images/Charachter-ghost-bg.png')] bg-center bg-cover border">
              <img
                className=" w-full h-full object-cover"
                src="/images/donkey.png"
                alt="Ghost"
              />
              <img
                className="absolute w-[150px] md:w-[250px]"
                src="/images/ghost-text.png"
                alt="Ghost Text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charachters;
