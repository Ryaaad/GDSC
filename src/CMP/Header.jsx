import React from "react";
import Image from "../assets/wifi.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Header() {
  return (
    <div className="bg-bgcolor py-20">
      <div className=" flex justify-between items-center  mx-40 ">
        <div className="text-white">
          <div className="flex items-end mb-10">
            <CalendarMonthIcon
              sx={{ color: "yellow" }}
              classNane="bg-red-500"
            />
            <p className="ml-3 text-white">DEC02,2022-09:00PM</p>
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-10">
            Largest <br /> job hunting
            <br /> opportunity
          </h1>
          <div className="flex items-center ">
            <button className="py-1 px-4 bg-hoverbg text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_tjj-8E1-CEKtC_0KSvW-Xv3cQ4r2Z7Lmjrp__qZgxCG5aw/viewform?usp=sf_link">
                Sign up
              </a>
            </button>
            <div className="flex justify-center items-center mx-5">
              <LocationOnIcon style={{ color: "yellow" }} />
              <p className="ml-2">USTHB</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[100px]">
          <img src={Image} alt="" className="w-[670px] h-[550px]" />
        </div>
      </div>
    </div>
  );
}

export default Header;