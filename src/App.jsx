import { useState } from "react";

import "./App.css";
import Residents from "./components/Residents.jsx";

function App() {
  const handleClick = () => {
    alert('Button Clicked!');}
  return (
    <div class="flex flex-col ">
      <div className=" w-full  pt-5 items-stretch ">
        <img
          src="./images/Frame 40 (2).png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      {<Residents />}

      {/* repetead component starts here  */}
      {<Residents />}
     
{/* repeated component ends here  */}
      <div className="flex flex-col bg-cyan-100 items-center">
        <div className=" mt-5 text-5xl font-semibold text-blue-500 max-w-2xl mb-2">LET’S Find Your Future Home <span className="pl-48">Together</span>  </div>
        <div className=" max-w-2xl  text-2xl font-base">We align ourselves with enlightened management philosophy , 
        regarding peoples as our major assests and working always at 
        maintaining the highest possible level of communication and</div>
        <div><button onClick={handleClick} className="transition duration-500 ease-in-out  hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 ... bg-blue-500 font-medium text-lg text-white p-1.5 pl-16 pr-16 -ml-4  mt-3 rounded">
            Details
      </button> </div>
      </div>
     <div className="flex flex-row pt-16 pb-3 ">
     <div className=" flex-grow items-start text-xl  "><h1 cl>copy right <span className="text-blue-500">@</span> Sky real estate </h1></div>
     <div className=" flex-grow text-right text-xl  "><h1 >Powered by sky real estste </h1></div>
     </div>
    </div>
  );
}

export default App;
