import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Nav'); 
  };

  return (
    <>
      <div className=" w-full bg-[#090D15] z-1 h-14 px-6 opacity-70 md:h-20  flex items-center absolute md:px-10   ">
        <div className="flex justify-center items-center">
          <img className="h-8 md:h-10 lg:h-11" src="/images/logo.png" alt="" />
        </div>
      </div>
      <div className=" relative flex justify-end right-6 top-2 md:top-4 lg:top-4">
      <button  onClick={handleButtonClick} className="h-10  px-4 md:h-11 md:px-6 md:py-2 py-2 lg:h-12 lg:py-3 lg:px-8  bg-[#80080a] justify-center items-center text-white text-base font-semibold  font-['Source Sans Pro'] leading-normal ">
        Play now
      </button>
      </div>
      
    </>
  );
};

export default Nav;
