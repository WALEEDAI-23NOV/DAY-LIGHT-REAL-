import React from "react";

const Allcharachters = () => {
  return (
    <div className=" w-full h-[140px]  md:h-[180px] lg:h-[158px] flex   justify-center items-center">
      <div className=" h-26 md:gap-3 sm:h-32  w-[400px]   sm:w-[600px] md:w-[750px] md:h-32 lg:w-[1100px] flex  flex-col md:flex-col justify-center items-center">
        <div className="h-[80%] md:w-[80%]  md:h-full text-center text-white flex justify-center items-center ">
          <h1 className="sm:text-2xl md:text-2xl lg:text-[34px] md:text-start text-xl text-center  ">
          The only game where the biggest horror franchises collide
          </h1>
        </div>
        <button className=" lg:px-14 lg:py-2 px-4 py-2 md:px-12 md:py-2   bg-[#80080a] text-white  ">
          See all characters
        </button>
      </div>
    </div>
  );
};

export default Allcharachters;
