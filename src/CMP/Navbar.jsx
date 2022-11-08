
import { IoTicketSharp } from "react-icons/io5";
import {  BiSearchAlt2 } from "react-icons/bi";
import NavB from "../assets/NavB.png"
function Navbar() {

  return (
      <div className="flex justify-between bg-[#3a3089] items-center px-[140px] text-white py-5">
        <h1 className="text-2xl uppercase font-semibold">Job<span 
        className="text-[#f8679e]">Hunting</span></h1>

       <ul className="flex gap-6 items-center relative font-[500]">
        <li>About</li>
        <li>Event</li>
        <li>Speakers</li>
        <li>News</li>
        <li>Contact</li>
        <img src={NavB} className="absolute top-[-100%] right-[-30%] w-[70px] " />
       </ul>

       <div className="flex gap-4 items-center" >
       <BiSearchAlt2 className="text-3xl font-semibold" ></BiSearchAlt2>
       <div className="rounded-full text-sm font-semibold cursor-pointer border-white flex border-2 border-solid p-2
        px-5 gap-2 items-center" >
       <IoTicketSharp  className="text-2xl text-[#f8679e] font-semibold"></IoTicketSharp>
       Book now
       </div>
       </div>
        </div>
  
  );
}

export default Navbar;