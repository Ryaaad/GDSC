import React from "react";
import ImageOne from "../assets/Speakers.png";
import ImageTow from "../assets/img2.png"
import ImageThree from "../assets/Speaker-2.jpeg";
import Square from "../assets/sectionB1.png"
import sectionB2 from "../assets/stationB2.png"
import sectionB3 from "../assets/sectionB3.png"
import {  MdOutlineKeyboardArrowRight } from "react-icons/Md"

function ConfSection() {
  return (
    <div className="relative mx-[100px] flex justify-between items-center py-20">
      <img src={Square} className="h-[90px]  absolute top-[25.5%] right-[34.5%]" />
      <img src={sectionB3} className="h-[70px] absolute top-[52%] right-[-3%]" />
      <img src={sectionB2} className=" h-[170px] z-0 absolute top-[70%] right-[-7%]" />
      <div>
        <p className="text-pink">JOB HUNTING</p>
        <h1 className="text-3xl font-bold leading-tight mb-2">
          Conference,
          <br />
          Seminars &amp; Events
        </h1>
        <p className="text-sm text-[#6e747b] font-semibold">
          "JOB HUNT" is the only place where you can be the predator <br /> and
          make the job your prey by learning ,promoting yourself <br />
          and getting to know tasty secrets behind job recrutement .
        </p>
        <div  className="h-[45px] cursor-pointer mt-4 flex items-center" >
       <div  className="h-[45px] w-[45px] rounded-full flex justify-center items-center bg-[#f8679e]"> 
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSf_tjj-8E1-CEKtC_0KSvW-Xv3cQ4r2Z7Lmjrp__qZgxCG5aw/viewform?usp=sf_link">
          <MdOutlineKeyboardArrowRight className="text-2xl text-white font-semibold"></MdOutlineKeyboardArrowRight>
     </a>
      </div>
      <h1 className="ml-4 font-bold text-[#f8679e] " >  Discover now</h1>
        </div>  
      </div>
      <div>
        <div className="relative " >
        <img src={ImageOne} className="h-[342px] w-[378px]" />
          <div className=" h-[120px] absolute w-[120px] top-[-13%] right-[-13%]
              rounded-full border-[14px] border-solid z-[-1] border-[#fbcb33] "></div>
            
        </div>
        <div className="absolute bottom-[250px] right-[395px]">
          {" "}
          <img src={ImageTow} alt="" className="h-[270px] " />{" "}
        </div>
        <div className="mt-5">
          <img src={ImageThree} alt="" className="h-80 z-10 w-80" />{" "}
        </div>
      </div>
    </div>
  );
}

export default ConfSection;