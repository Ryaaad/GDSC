import { useState } from "react";
import LOGO from "../assets/LOGO.png";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-bgcolor ">
      <div className="flex justify-between  mx-40 text-white py-5">
        <div>
          <img
            src={LOGO}
            alt="logo"
            className="h-[100px] w-[150px] mt-[-20px] "
          />
        </div>
        <div className="flex justify-between items-center mt-[-30px]">
          <div>
            <ul className="flex justify-between ">
              <li className="mx-10">
                <a href="#">About</a>
              </li>
              <li className="mx-5">
                <a href="#">Event</a>
              </li>
              <li className="mx-10">
                <a href="#">Speakers</a>
              </li>
              <li className="mx-10">
                <a href="#">News</a>
              </li>
              <li className="mx-10">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="py-1 px-4 bg-hoverbg text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_tjj-8E1-CEKtC_0KSvW-Xv3cQ4r2Z7Lmjrp__qZgxCG5aw/viewform?usp=sf_link">
                Sign up
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;