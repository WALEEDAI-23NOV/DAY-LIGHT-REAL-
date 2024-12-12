import React from "react";

const Nav = () => {
  return (
    <>
    <div className="w-full bg-[#090D15] h-14 px-6 opacity-70 md:h-20 flex items-center absolute justify-between md:px-10   ">
      <div className="flex justify-center items-center">
        <img className="h-8 md:h-10 lg:h-11" src="/images/logo.png" alt="" />
      </div>
      </div>
      <div className="h-8 relative px-4 md:h-11 md:px-6 md:py-2 py-2 lg:h-12 lg:py-3 lg:px-8  bg-[#80080a] justify-center items-center gap-2.5 inline-flex">
        <button className="text-white text-base font-semibold  font-['Source Sans Pro'] leading-normal relative">Jogar agora</button>
      </div>
   
    </>
  );
};

export default Nav;
