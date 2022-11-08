import Image from "../assets/wifi.jpeg";
import "../index.css"
import {  MdOutlineKeyboardArrowRight } from "react-icons/Md"
import {  BsFillCalendarWeekFill } from "react-icons/bs"
import {  BiMapPin } from "react-icons/bi"
import HeaderB from "../assets/HeaderB.png"

function Header() {
  return (
    <div   className="relative">
          <img src={HeaderB} className="absolute left-0 z-10 bottom-[30%] " />
          <div className="absolute right-0 z-10 top-[5%]">
          <img src={Image} alt="" className="w-[670px] h-[550px] Clippath" />
        </div>
  <div className="bg-[#3a3089] Clippath2  h-[90vh] py-20 ">
      <div className=" flex justify-between items-center mt-5 mx-40 ">
        <div className="text-white">
          <div className="flex items-center ">
          <BsFillCalendarWeekFill></BsFillCalendarWeekFill>
            <p className="ml-3 text-white">DEC02,2022-09:00PM</p>
          </div>
          <h1 className="text-5xl font-bold tracking-wide leading-tight mb-10">
            Biggest <br /> Jobhunting <br /> Opportunities
          </h1>
          <div className="flex items-center ">
       <div  className="h-[45px] w-[160px] cursor-pointer rounded-full flex items-center bg-[#6052ce]" >
       <div  className="h-[45px] w-[45px] rounded-full flex justify-center items-center bg-[#f8679e]"> 
      <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_tjj-8E1-CEKtC_0KSvW-Xv3cQ4r2Z7Lmjrp__qZgxCG5aw/viewform?usp=sf_link">
              <MdOutlineKeyboardArrowRight className="text-3xl font-semibold"></MdOutlineKeyboardArrowRight>
     </a>
     
      </div>
      <h1 className="ml-2" >  Book Ticket </h1>
        </div>     
      
            
            <div className="flex justify-center items-center mx-5">
              <div  className="h-[53px] w-[53px] rounded-full flex justify-center items-center bg-[#643a8e]" >
              <div  className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-[#f8679e]
              border border-solid border-[#6052ce]" >
              <BiMapPin className="text-2xl cursor-pointer font-semibold"></BiMapPin>
              </div>
              </div>
               <p className="ml-2">Bab Ezzouar 16111</p>
           
            </div>
          </div>
        </div>
    
    
      </div>
    </div>
    </div>
  
  );
}

export default Header;