
import { TiSocialTwitter,TiSocialFacebook,TiSocialLinkedin,TiSocialGithub } from "react-icons/ti";
const Footer = () => {
    return ( 
        <div className="bg-[#2a95cb] w-full h-[48vh] ">
      <div className="flex h-[85%] p-10 pb-1 text-white justify-between ">

    <div className="w-[320px]">
        <h1 className="mb-4 text-[black] " >HOME</h1>
        <div  className="mb-4">Lorem ipsum dolor sit amet, consectetur amt adipisicing elit. Asperiores, omnis amet.</div>
        <div className="flex gap-3 justify-center"  >
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer ">
        <TiSocialTwitter  className="text-2xl " ></TiSocialTwitter>
        </div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer  "><TiSocialFacebook  className="text-2xl "></TiSocialFacebook> </div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer "><TiSocialLinkedin   className="text-2xl "></TiSocialLinkedin></div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px]  cursor-pointer "> <TiSocialGithub  className="text-2xl " ></TiSocialGithub>  </div>
        </div>
    </div>

    <div className="w-[50px] " >
        <h1  className="mb-4 text-[black]" >About</h1>
        <div>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
        </div>
    </div>

    <div className="w-[250px]" >
        <h1  className="mb-4  text-[black]">ABOUT</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem quae voluptate eveniet est fugit labore ducimus soluta.</div>
    </div>

    <div >
        <h1  className="mb-4 text-[black]">Gallary</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
        <img src="" className=" w-[70px] h-[70px] "/> 
        <img src="" className=" w-[70px] h-[70px] "/>
        <img src="" className=" w-[70px] h-[70px] "/>
        <img src="" className=" w-[70px] h-[70px] "/>
        <img src="" className=" w-[70px] h-[70px] "/>
        <img src="" className=" w-[70px] h-[70px] "/>
        </div>
    </div>
      </div>

      <div className="bg-[#156790] h-[15%] w-full flex justify-center items-center px-3  ">
        <h1  className="text-white" >Copyright &copy; Eventtea 2022</h1>
      </div>
        </div>
     );
}
 
export default Footer;