import React from "react";
import ImageOne from "../assets/Speakers.png";
import ImageTow from "../assets/Speaker.jpeg";
import ImageThree from "../assets/Speaker-2.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fab from "@mui/material/Fab";

function ConfSection() {
  return (
    <div className="relative mx-40 flex justify-between items-center pt-40">
      <div>
        <p className="text-pink">JOB HUNTING</p>
        <h1 className="text-3xl font-bold leading-tight mb-10">
          Conference,
          <br />
          Seminars &amp; Events
        </h1>
        <p className="text-xs">
          "JOB HUNT" is the only place where you can be the predator <br /> and
          make the job your prey by learning ,promoting yourself <br />
          and getting to know tasty secrets behind job recrutement .
        </p>
        <div className="flex items-center mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_tjj-8E1-CEKtC_0KSvW-Xv3cQ4r2Z7Lmjrp__qZgxCG5aw/viewform?usp=sf_link"
            className="flex items-center"
          >
            {" "}
            <Fab
              className="pt-20"
              sx={{
                backgroundColor: "rgb(236, 72, 153)",
                color: "white",
                "&:hover": { backgroundColor: "rgb(236, 100, 200)" },
              }}
            >
              <ArrowForwardIosIcon />
            </Fab>
            <p className=" ml-5">Register Now</p>
          </a>
        </div>
      </div>
      <div className="">
        <div>
          <img src={ImageOne} alt="" className="h-[342px] w-[378px]" />
        </div>
        <div className="absolute bottom-[250px] right-[400px]">
          {" "}
          <img src={ImageTow} alt="" className="h-[280px] w-[200px]" />{" "}
        </div>
        <div className="mt-5">
          <img src={ImageThree} alt="" className="h-80 w-80" />{" "}
        </div>
      </div>
    </div>
  );
}

export default ConfSection;