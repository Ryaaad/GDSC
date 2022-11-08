
import { TiSocialTwitter,TiSocialFacebook,TiSocialLinkedin,TiSocialGithub } from "react-icons/ti";
const Footer = () => {
    return ( 
        <div className="bg-[#3a3089] w-full h-[48vh] ">
      <div className="flex h-[85%] p-10 pb-1 text-white justify-between ">

    <div className="w-[320px]">
        <h1 className="mb-4 text-[#f8679e] " >HOME</h1>
        <div  className="mb-4">Lorem ipsum dolor sit amet, consectetur amt adipisicing elit. Asperiores, omnis amet.</div>
        <div className="flex gap-3 justify-center"  >
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer hover:text-[#f8679e] hover:border-[#f8679e] duration-500 ">
        <TiSocialTwitter  className="text-2xl " ></TiSocialTwitter>
        </div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer  hover:text-[#f8679e] hover:border-[#f8679e] duration-500 ">
          <TiSocialFacebook  className="text-2xl "></TiSocialFacebook> </div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px] cursor-pointer hover:text-[#f8679e] hover:border-[#f8679e] duration-500 ">
          <TiSocialLinkedin   className="text-2xl "></TiSocialLinkedin></div>
        <div className="rounded-full border-2 grid items-center justify-center border-white border-solid 
        h-[35px] w-[35px]  cursor-pointer hover:text-[#f8679e] hover:border-[#f8679e] duration-500"> 
        <TiSocialGithub  className="text-2xl " ></TiSocialGithub>  </div>
        </div>
    </div>

    <div className="w-[50px] " >
        <h1  className="mb-4 text-[#f8679e]" >About</h1>
        <div>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
        </div>
    </div>

    <div className="w-[250px]" >
        <h1  className="mb-4  text-[#f8679e]">ABOUT</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem quae voluptate eveniet est fugit labore ducimus soluta.</div>
    </div>

    <div >
        <h1  className="mb-4 text-[#f8679e]">Gallary</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
        <img src="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=is&k=20&c=PYFNqjY1JVRpK451fSd2RjwpmwYX_A83361odi1Lfkg=" className=" w-[70px] h-[70px] "/> 
        <img src="https://images.unsplash.com/photo-1607544836657-08d9c1d97afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className=" w-[70px] h-[70px] "/>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className=" w-[70px] h-[70px] "/>
        <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className=" w-[70px] h-[70px] "/>
        <img src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" className=" w-[70px] h-[70px] "/>
        <img src="https://images.unsplash.com/photo-1559223694-98ed5e272fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className=" w-[70px] h-[70px] "/>
        </div>
    </div>
      </div>

      <div className="bg-[#2e266e] h-[15%] w-full flex justify-center items-center px-3  ">
        <h1  className="text-white" >Copyright &copy; Eventtea 2022</h1>
      </div>
        </div>
     );
}
 
export default Footer;