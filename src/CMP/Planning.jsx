import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import Plan from "./Plan";

const Planning = () => { 
    const [first, setfirst] = useState(true)

    let Day1=[{id:1,time:"9:30-10:00",title:"Opening Ceremony", 
    body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ut fugit nostrum quod expedita in!"}
        ,{id:2,time:"10:00-11:15",title:"how to find the right job",
         body:"Now days it's pretty crutial to find the right job but we got you covered , with the tips and advices you'll learn , finding your next job will be a childs play for you."}
        ,{id:3,time:"13:00-13:40",title:"how to write a perfect cv ", 
        body:"Writting an eye catching cv can be very frustriting sometimes , and that's why we thought you might want to learn how to make you're cv stand out from thousands of other cvs."}
       
        ,{id:4,time:"13:50-15:00",title:"how your unique story can get u hired ",
         body:"We will lead you towards your dream job while using that unique story of yours. "}]
   

        let Day2=[{id:1,time:"9:30-10:00",title:"Opening Ceremony", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ut fugit nostrum quod expedita in!"}
        ,{id:2,time:"10:00-11:45",title:"LinkedIn ", body:"how to create a professional account, how it helps in searching for jobs, how to use it effectively during your job "}
        ,{id:3,time:"13:30-15:00",title:"How to nail a job interview  ", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ut fugit nostrum quod expedita in!"}
        ,{id:4,time:"15:00-15:30",title:"Ending ceremony  ", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ut fugit nostrum quod expedita in!"}]   
  
        return ( 
        <div  className="px-12 h-[90vh] py-5">
            <div className="mb-6">
            <h1 className="text-[#f8679e]  font-bold ">Eventea </h1>
            <h1  className="text-[#343947] text-3xl font-extrabold " >List of The Planned Activities <br /> In Jobhunting </h1>      
            </div>
          
          <div className="flex relative gap-12 ">
          <div className="text-white" >
                <div  className={`w-[400px] flex flex-col justify-center items-center
                h-[90px] ${first ?" bg-[#E9D107]" :" bg-[#01B9EF]" } cursor-pointer`}
                onClick={()=>setfirst(true)}
                >
                <h1 className="text-xl">Day 01</h1>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
                 </div>
                 <div className={`w-[400px] flex flex-col justify-center items-center
                h-[90px] ${!first ?" bg-[#E9D107]" :" bg-[#01B9EF]" } cursor-pointer`}
                onClick={()=>setfirst(false)}
                >
                <h1 className="text-xl">Day 02</h1>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
                 </div>
           </div>
           <>
           { first &&
 <div className="flex flex-col bg-white z-20 gap-4 mt-6 " >

 {Day1.map((i) =>  { return <Plan time={i.time} title={i.title} body={i.body}   ></Plan>}
 )}
</div>  
           } 
           { !first &&
 <div className="flex flex-col bg-white z-20 gap-4 mt-6 " >

 {Day2.map((i) =>  { return <Plan time={i.time} title={i.title} body={i.body}  ></Plan>}
 )}
</div>  
           } 
           </>
        
          <div className=" box-border h-[180px] absolute w-[180px] top-[15%] right-[8%] 
             rounded-full border-[#fbcb33] z-0
           border-[12px] border-solid">

          </div>
           <div>
            </div> 
          </div>
         
        </div>
     );
}
 
export default Planning;