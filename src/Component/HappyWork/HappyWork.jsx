import React from "react";
import Marquee from "react-fast-marquee";
import h1 from '../../assets/h1.png'
import h2 from '../../assets/h2.png'
import h3 from '../../assets/h3.png'
import h4 from '../../assets/h4.png'
import v2 from '../../assets/v2.png'
import v3 from '../../assets/v3.png'
import v5 from '../../assets/v5.png'
const HappyWork = () => {
  return (
   <div className=" bg-sky-100 p-8">
    <img src={v2} className=" floating-left-right-image w-28" alt="fhbfhb"  />
    <img src={v5} className=" w-28 ml-auto " alt="fhbfhb"  />

     <div className="mt-20 mb-40   md:mb-20">
      <div className="flex flex-row relative gap-6 md:w-[79%] lg:w-[80%] w-[100%] p-4 md:p-0  mx-auto">
        <div className=" border-4 border-gray-500 z-20  p-16 w-full">
          <h1 className="text-2xl font-bold text-center">
            Who are Happy With <br /> Services and Work
          </h1>
        </div>

        <p className="text-gray-400 hidden md:block">
          Seamlessly administrate synergistic growth strategies and collaborative markets. Globally empower inexpensive infomediaries after sustainable mindshare. Phosfluorescently brand professional collaboration and idea-sharing without principle-centered interfaces.
        </p>
      </div>

      {/* Marquee div above the content */}
      <div className="shadow-lg bg-white z-30 -mt-12 absolute lg:right-96 md:right-64 right-0 md:w-1/2 w-[100%]  border p-5">
        <Marquee className="" speed={50} gradient={false}>
          <span className="mx-4">
            <img className=" w-24 mx-8 hover:scale-110 hover:cursor-pointer transition-transform hover:duration-700" src={h1} alt="business" />
          </span>
          <span className="mx-4">
            <img className=" w-24 mx-8 hover:scale-110 hover:cursor-pointer transition-transform hover:duration-700" src={h2} alt="business" />
          </span>
          <span className="mx-4">
          <img
  className="w-24 mx-8 hover:scale-110 hover:cursor-pointer  transition-transform hover:duration-700"
  src={h3}
  alt="business"
/>
          </span>
          <span className="mx-4">
            <img className=" w-24 mx-8 hover:scale-110 hover:cursor-pointer transition-transform hover:duration-700" src={h4} alt="business" />
          </span>
        </Marquee>
      </div>
    </div>
    {/* <img src={v3} className=" w-20 ml-auto floating-image1" alt="fhbfhb"  /> */}
    <div className="circle-container hidden md:block ml-auto">
  <img src={v3} alt="circle-image" className="circle-image" />
</div>



   </div>
  );
};

export default HappyWork;
