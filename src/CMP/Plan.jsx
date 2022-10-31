import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";


const Plan = (props) => {
    return (  <div className="flex items-start gap-7">
    <div className="flex gap-1 items-center text-[#ed6197] " >
    <BiTimeFive className="text-[28px] font-light " ></BiTimeFive>
       <h1 className="font-bold " >{props.time}</h1> 
    </div>
    <div className="" >
    <h1 className=" font-bold">{props.title} </h1>
    <p className="w-[500px] " > {props.body} </p>
    </div>
</div> );
}
 
export default Plan;