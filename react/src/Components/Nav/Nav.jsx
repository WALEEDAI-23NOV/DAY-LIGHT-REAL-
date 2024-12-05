import React from "react";

const Nav = () => {
  return (
    <div className="w-full bg-[#090D15] opacity-70 h-20 flex items-center absolute justify-between px-10  ">
      <div className="flex justify-center items-center">
        <img className="h-11" src="/images/logo.png" alt="" />
      </div>
      <div className="h-10 px-6 py-2 lg:h-12 lg:py-3 lg:px-8  bg-[#80080a] justify-center items-center gap-2.5 inline-flex">
        <button className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">Jogar agora</button>
      </div>
    </div>
  );
};

export default Nav;
