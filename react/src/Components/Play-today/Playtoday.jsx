import React from "react";

const Playtoday = () => {
  return (
    <div className="bg-[#090d15]  flex py-8 items-center  text-white">
      <div className="w-full h-auto bg-cover sm:bg-cover flex flex-row  bg-center bg-[url('/images/play-today.png')] bg-no-repeat justify-center items-center">
        <div className="text-white px-6 sm:px-10 ">
          <h1 className=" leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-3xl w-[260px]  sm:text-4xl sm:w-[300px] md:text-5xl md:w-[400px] lg:text-6xl lg:w-[500px]">
            {" "}
            Play Dead By Daylight today
          </h1>
          <div className="flex pb-2 pt-4 md:pt-6 sm:py-2 md:py-3  flex-row ">
            <img
              src="/images/chart.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className=" text-xs  sm:text-base md:text-lg">
              Have fun surviving or hunting
            </h3>
          </div>
          <div className="flex py-2 sm:py-2 md:py-3  flex-row ">
            <img
              src="/images/plugs.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className="text-xs sm:text-base md:text-lg">
              Connect with your friends
            </h3>
          </div>
          <div className="flex py-2 sm:py-2 md:py-3  flex-row ">
            <img
              src="/images/message.png"
              className="pr-5 object-contain"
              alt=""
            />
            <h3 className="text-xs sm:text-base md:text-lg">
              Have fun surviving or hunting
            </h3>
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
