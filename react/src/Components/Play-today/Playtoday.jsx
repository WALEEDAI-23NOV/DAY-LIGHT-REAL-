import React from "react";

const Playtoday = () => {
  return (
    <div className="bg-[#090d15]  flex md:py-8 items-center  text-white">
      <div className="w-full h-auto bg-cover sm:bg-cover flex flex-row  bg-center bg-[url('/images/play-today.png')] bg-no-repeat justify-center items-center">
        <div className="text-white px-6 sm:px-10 ">
          <h1 className=" leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-2xl w-[230px]  sm:text-4xl sm:w-[300px] md:text-4xl md:w-[330px] lg:text-6xl lg:w-[500px]">
            Play Dead By Daylight today
          </h1>
          <div className="flex  pt-3 md:pt-4 sm:py-1 md:py-2  flex-row ">
            <img
              src="/images/chart.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className=" text-[12px]  sm:text-base md:text-lg">
              Have fun surviving or hunting
            </h3>
          </div>
          <div className="flex pt-1 sm:py-1 md:py-2  flex-row ">
            <img
              src="/images/plugs.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className="text-[12px] sm:text-base md:text-lg">
              Connect with your friends
            </h3>
          </div>
          <div className="flex pt-1 sm:py-1 md:py-2  flex-row ">
            <img
              src="/images/message.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className="text-[12px] sm:text-base md:text-lg">
              Have fun surviving or hunting
            </h3>
          </div>
          <div className="flex pt-4 sm:py-3 md:pt-5 lg:pt-7  flex-row ">
            <button className="h-7 hover:bg-[#691617]  px-6 sm:h-8 sm:px-7 md:h-10 md:px-10 py-1  lg:h-10 lg:px-14 lg:text-base  bg-[#80080a] justify-center items-center text-white text-xs font-semibold  font-['Source Sans Pro'] leading-normal ">
              Play now
            </button>
          </div>
        </div>
        <div className=" ">
          <img src="/images/play-today-bg.png" className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Playtoday;
