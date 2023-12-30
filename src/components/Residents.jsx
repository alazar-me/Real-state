import { useState } from "react";

import viteLogo from "/vite.svg";

function Residents(){
    const handleClick = () => {
        alert('Button Clicked!');}
    return (
<div>

<div className="pt-7 justify-between items-center">
  <div class="flex flex-row ...">
    <div className="p-4 m-2 flex-grow">
      <img className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ..."
        src="./images/Frame 41.png"
        class="w-full h-full object-cover"
        alt=""
      />
      

    </div>
    <div className="p-4  m-2 flex-grow ">
      <img className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ..."
        src="./images/Frame 42.png"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div className="p-4 m-2 flex-grow">
      <img className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ..."
        src="./images/Frame 43.png"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
  </div>
</div>
<div className=" flex flex-row justify-between -mt-6">
  <div className="p-4 m-2 flex-grow">
  {/* this is div for home icon and the name  */}
  <div className="flex flex-row mt-5">
        <div className="pr-2 ml-4 ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="32"
            viewBox="0 0 57 32"
            fill="none"
          >
            <path
              d="M29.119 6.33001C28.9533 6.24099 28.7327 6.19131 28.5034 6.19131C28.274 6.19131 28.0535 6.24099 27.8877 6.33001L7.39221 17.3219C7.30517 17.3686 7.23592 17.4248 7.18866 17.487C7.14139 17.5492 7.11709 17.6161 7.11723 17.6838L7.11389 28C7.11389 28.5304 7.48923 29.0391 8.15732 29.4142C8.82542 29.7893 9.73156 30 10.6764 30H21.375C21.8474 30 22.3005 29.8947 22.6346 29.7071C22.9686 29.5196 23.1563 29.2652 23.1563 29V20.5C23.1563 20.3674 23.2501 20.2402 23.4171 20.1465C23.5842 20.0527 23.8107 20 24.0469 20H32.9531C33.1894 20 33.4159 20.0527 33.5829 20.1465C33.7499 20.2402 33.8438 20.3674 33.8438 20.5V29C33.8438 29.2652 34.0314 29.5196 34.3655 29.7071C34.6995 29.8947 35.1526 30 35.625 30H46.3192C47.264 30 48.1702 29.7893 48.8383 29.4142C49.5064 29.0391 49.8817 28.5304 49.8817 28V17.6838C49.8818 17.6161 49.8575 17.5492 49.8103 17.487C49.763 17.4248 49.6938 17.3686 49.6067 17.3219L29.119 6.33001Z"
              fill="black"
            />
            <path
              d="M54.6521 15.2594L46.3247 10.7869V4C46.3247 3.73478 46.1371 3.48043 45.803 3.29289C45.469 3.10536 45.0159 3 44.5435 3H39.1997C38.7273 3 38.2742 3.10536 37.9402 3.29289C37.6061 3.48043 37.4185 3.73478 37.4185 4V6L30.9704 2.53875C30.367 2.19625 29.4697 2 28.5 2C27.5337 2 26.6386 2.19625 26.0352 2.53938L2.35568 15.2581C1.66322 15.6331 1.57639 16.25 2.2065 16.6562C2.36474 16.7588 2.55848 16.8422 2.77595 16.9014C2.99341 16.9605 3.23005 16.9942 3.47146 17.0004C3.71287 17.0066 3.954 16.9852 4.18018 16.9374C4.40636 16.8896 4.61285 16.8165 4.78709 16.7225L27.8877 4.33C28.0534 4.24099 28.274 4.19131 28.5033 4.19131C28.7327 4.19131 28.9532 4.24099 29.119 4.33L52.2218 16.7225C52.5621 16.9057 53.0179 17.0057 53.4894 17.0006C53.9608 16.9954 54.4093 16.8855 54.7367 16.695C55.4202 16.2975 55.3635 15.6412 54.6521 15.2594Z"
              fill="black"
            />
          </svg>
          
        </div>
        <div>
          
          <h1 className=" text-3xl">Residential</h1>
        </div>
      </div>
      {/* up to here | */}
      <h1 className="text-5xl ml-20 mt-4 mb-2 text-blue-500 font-semibold" >TYPE A</h1>
      <h1 className="ml-1 text-xl">3 Bedrooms / 2 Bathroom /1 Maid’s room</h1>
      {/* this is for location icon and loaction name  */}
      <div className="flex flex-row ">
        <div className="pr-1 ml-4 ">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2C7.58902 2 4.00002 5.589 4.00002 9.995C3.97102 16.44 11.696 21.784 12 22C12 22 20.029 16.44 20 10C20 5.589 16.411 2 12 2ZM12 14C9.79002 14 8.00002 12.21 8.00002 10C8.00002 7.79 9.79002 6 12 6C14.21 6 16 7.79 16 10C16 12.21 14.21 14 12 14Z" fill="black"/>
</svg>
          
        </div>
        <div>
          
          <h1 className=" text-lg">Addis  Ababa / Bole </h1>
        </div>
        {/* up to here  */}
      </div>
      <button onClick={handleClick}  className="transition duration-500 ease-in-out  hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 ...  bg-blue-500 font-medium text-lg text-white p-1.5 pl-7 pr-7 ml-24  rounded ">
      Details
</button> 

</div>





<div className="p-4 m-2 flex-grow">
  {/* this is div for home icon and the name  */}
  <div className="flex flex-row mt-5">
        <div className="pr-2 ml-4 ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="32"
            viewBox="0 0 57 32"
            fill="none"
          >
            <path
              d="M29.119 6.33001C28.9533 6.24099 28.7327 6.19131 28.5034 6.19131C28.274 6.19131 28.0535 6.24099 27.8877 6.33001L7.39221 17.3219C7.30517 17.3686 7.23592 17.4248 7.18866 17.487C7.14139 17.5492 7.11709 17.6161 7.11723 17.6838L7.11389 28C7.11389 28.5304 7.48923 29.0391 8.15732 29.4142C8.82542 29.7893 9.73156 30 10.6764 30H21.375C21.8474 30 22.3005 29.8947 22.6346 29.7071C22.9686 29.5196 23.1563 29.2652 23.1563 29V20.5C23.1563 20.3674 23.2501 20.2402 23.4171 20.1465C23.5842 20.0527 23.8107 20 24.0469 20H32.9531C33.1894 20 33.4159 20.0527 33.5829 20.1465C33.7499 20.2402 33.8438 20.3674 33.8438 20.5V29C33.8438 29.2652 34.0314 29.5196 34.3655 29.7071C34.6995 29.8947 35.1526 30 35.625 30H46.3192C47.264 30 48.1702 29.7893 48.8383 29.4142C49.5064 29.0391 49.8817 28.5304 49.8817 28V17.6838C49.8818 17.6161 49.8575 17.5492 49.8103 17.487C49.763 17.4248 49.6938 17.3686 49.6067 17.3219L29.119 6.33001Z"
              fill="black"
            />
            <path
              d="M54.6521 15.2594L46.3247 10.7869V4C46.3247 3.73478 46.1371 3.48043 45.803 3.29289C45.469 3.10536 45.0159 3 44.5435 3H39.1997C38.7273 3 38.2742 3.10536 37.9402 3.29289C37.6061 3.48043 37.4185 3.73478 37.4185 4V6L30.9704 2.53875C30.367 2.19625 29.4697 2 28.5 2C27.5337 2 26.6386 2.19625 26.0352 2.53938L2.35568 15.2581C1.66322 15.6331 1.57639 16.25 2.2065 16.6562C2.36474 16.7588 2.55848 16.8422 2.77595 16.9014C2.99341 16.9605 3.23005 16.9942 3.47146 17.0004C3.71287 17.0066 3.954 16.9852 4.18018 16.9374C4.40636 16.8896 4.61285 16.8165 4.78709 16.7225L27.8877 4.33C28.0534 4.24099 28.274 4.19131 28.5033 4.19131C28.7327 4.19131 28.9532 4.24099 29.119 4.33L52.2218 16.7225C52.5621 16.9057 53.0179 17.0057 53.4894 17.0006C53.9608 16.9954 54.4093 16.8855 54.7367 16.695C55.4202 16.2975 55.3635 15.6412 54.6521 15.2594Z"
              fill="black"
            />
          </svg>
          
        </div>
        <div>
          
          <h1 className=" text-3xl">Residential</h1>
        </div>
      </div>
      {/* up to here | */}
      <h1 className="text-5xl ml-20 mt-4 mb-2 text-blue-500 font-semibold" >TYPE B</h1>
      <h1 className="ml-1 text-xl">3 Bedrooms / 2 Bathroom /1 Maid’s room</h1>
      {/* this is for location icon and loaction name  */}
      <div className="flex flex-row ">
        <div className="pr-1 ml-4 ">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2C7.58902 2 4.00002 5.589 4.00002 9.995C3.97102 16.44 11.696 21.784 12 22C12 22 20.029 16.44 20 10C20 5.589 16.411 2 12 2ZM12 14C9.79002 14 8.00002 12.21 8.00002 10C8.00002 7.79 9.79002 6 12 6C14.21 6 16 7.79 16 10C16 12.21 14.21 14 12 14Z" fill="black"/>
</svg>
          
        </div>
        <div>
          
          <h1 className=" text-lg">Addis  Ababa / Bole </h1>
        </div>
        {/* up to here  */}
      </div>
      <button onClick={handleClick} className="transition duration-500 ease-in-out hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 ... bg-blue-500 font-medium text-lg text-white p-1.5 pl-7 pr-7 ml-24  rounded">
      Details
</button> 
</div>





<div className="p-4 m-2 flex-grow">
  {/* this is div for home icon and the name  */}
  <div className="flex flex-row mt-5">
        <div className="pr-2 ml-4 ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="32"
            viewBox="0 0 57 32"
            fill="none"
          >
            <path
              d="M29.119 6.33001C28.9533 6.24099 28.7327 6.19131 28.5034 6.19131C28.274 6.19131 28.0535 6.24099 27.8877 6.33001L7.39221 17.3219C7.30517 17.3686 7.23592 17.4248 7.18866 17.487C7.14139 17.5492 7.11709 17.6161 7.11723 17.6838L7.11389 28C7.11389 28.5304 7.48923 29.0391 8.15732 29.4142C8.82542 29.7893 9.73156 30 10.6764 30H21.375C21.8474 30 22.3005 29.8947 22.6346 29.7071C22.9686 29.5196 23.1563 29.2652 23.1563 29V20.5C23.1563 20.3674 23.2501 20.2402 23.4171 20.1465C23.5842 20.0527 23.8107 20 24.0469 20H32.9531C33.1894 20 33.4159 20.0527 33.5829 20.1465C33.7499 20.2402 33.8438 20.3674 33.8438 20.5V29C33.8438 29.2652 34.0314 29.5196 34.3655 29.7071C34.6995 29.8947 35.1526 30 35.625 30H46.3192C47.264 30 48.1702 29.7893 48.8383 29.4142C49.5064 29.0391 49.8817 28.5304 49.8817 28V17.6838C49.8818 17.6161 49.8575 17.5492 49.8103 17.487C49.763 17.4248 49.6938 17.3686 49.6067 17.3219L29.119 6.33001Z"
              fill="black"
            />
            <path
              d="M54.6521 15.2594L46.3247 10.7869V4C46.3247 3.73478 46.1371 3.48043 45.803 3.29289C45.469 3.10536 45.0159 3 44.5435 3H39.1997C38.7273 3 38.2742 3.10536 37.9402 3.29289C37.6061 3.48043 37.4185 3.73478 37.4185 4V6L30.9704 2.53875C30.367 2.19625 29.4697 2 28.5 2C27.5337 2 26.6386 2.19625 26.0352 2.53938L2.35568 15.2581C1.66322 15.6331 1.57639 16.25 2.2065 16.6562C2.36474 16.7588 2.55848 16.8422 2.77595 16.9014C2.99341 16.9605 3.23005 16.9942 3.47146 17.0004C3.71287 17.0066 3.954 16.9852 4.18018 16.9374C4.40636 16.8896 4.61285 16.8165 4.78709 16.7225L27.8877 4.33C28.0534 4.24099 28.274 4.19131 28.5033 4.19131C28.7327 4.19131 28.9532 4.24099 29.119 4.33L52.2218 16.7225C52.5621 16.9057 53.0179 17.0057 53.4894 17.0006C53.9608 16.9954 54.4093 16.8855 54.7367 16.695C55.4202 16.2975 55.3635 15.6412 54.6521 15.2594Z"
              fill="black"
            />
          </svg>
          
        </div>
        <div>
          
          <h1 className=" text-3xl">Residential</h1>
        </div>
      </div>
      {/* up to here | */}
      <h1 className="text-5xl ml-20 mt-4 mb-2 text-blue-500 font-semibold" >TYPE C</h1>
      <h1 className="ml-1 text-xl">3 Bedrooms / 2 Bathroom /1 Maid’s room</h1>
      {/* this is for location icon and loaction name  */}
      <div className="flex flex-row ">
        <div className="pr-1 ml-4 ">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2C7.58902 2 4.00002 5.589 4.00002 9.995C3.97102 16.44 11.696 21.784 12 22C12 22 20.029 16.44 20 10C20 5.589 16.411 2 12 2ZM12 14C9.79002 14 8.00002 12.21 8.00002 10C8.00002 7.79 9.79002 6 12 6C14.21 6 16 7.79 16 10C16 12.21 14.21 14 12 14Z" fill="black"/>
</svg>
          
        </div>
        <div>
          
          <h1 className=" text-lg">Addis  Ababa / Bole </h1>
        </div>
        {/* up to here  */}
      </div>
      <button onClick={handleClick} className="transition duration-500 ease-in-out hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 ... bg-blue-500 font-medium text-lg text-white p-1.5 pl-7 pr-7 ml-24  rounded">
      Details
</button> 
</div>





</div>



</div>
    )
}
export default Residents;