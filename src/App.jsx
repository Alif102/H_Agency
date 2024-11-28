import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import bb from '../src/assets/back.png'
import bg from '../src/assets/bg-1.png'
import { IoCheckmark } from "react-icons/io5";
import About from "./Component/About/About/About";
import { Link } from "react-router-dom";
import WhyChooseUs from "./Component/WhyChooseUs/WhyChooseUs";
import ClientSay from "./Component/ClientSay/CliemtSay/ClientSay";
import HappyWork from "./Component/HappyWork/HappyWork";
import Contact from "./Component/Contact/Contact";
import Pricing from "./Component/Pricing/Pricing";
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDropdown, setDrawerDropdown] = useState({
    home: false,
    pages: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleDrawerDropdown = (menu) => {
    setDrawerDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
   <div>
     <div>

<div>
      {/* Navbar */}
      <nav style={{ backgroundImage: `url('../src/assets/bg-1.png')`, backgroundRepeat: 'repeat',
    backgroundPosition: 'center',}}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-lg" : "bg-sky-100"
  }`}
>
        <div className=" flex justify-between items-center px-10 py-3">

          <div className="text-black font-bold text-xl">
            <span className={`${scrolled ? "text-black" : "text-black"}`}>
              <img className=" w-[150px]" src="../src/assets/ezicalc-logo.png" alt="Logooooo" />
            </span>
          </div>

       
          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative group">
      
              <div className="flex text-2xl items-center cursor-pointer  text-black">
                <span
                  className={`${scrolled ? "text-black" : "text-black"}`}
                >
                  Home
                </span>
                <FaChevronDown
                  className={`ml-2 text-sm ${
                    scrolled ? "text-black" : "text-black"
                  }`}
                />
              </div>

            
              <div
                className={`absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300`}
              >
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  Home 1
                </a>
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  Home 2
                </a>
              </div>
            </div>
            <div className="relative group">

              <div className="flex items-center cursor-pointer text-2xl text-black">
                <span
                  className={`${scrolled ? "text-black" : "text-black"}`}
                >
                  Pages
                </span>
                <FaChevronDown
                  className={`ml-2 text-sm ${
                    scrolled ? "text-black" : "text-black"
                  }`}
                />
              </div>

            
              <div
                className={`absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300`}
              >
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  Pages 1
                </a>
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  Pages 2
                </a>
              </div>
            </div>
            <div className="relative group">
           
              <div className="flex items-center cursor-pointer text-2xl text-black">
                <span
                  className={`${scrolled ? "text-black" : "text-black"}`}
                >
                  News
                </span>
                <FaChevronDown
                  className={`ml-2 text-sm ${
                    scrolled ? "text-black" : "text-black"
                  }`}
                />
              </div>

              <div
                className={`absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300`}
              >
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  News 1
                </a>
                <a href="#" className="block px-4 py-2 cursor-pointer">
                  News 2
                </a>
              </div>
            </div>
          </div>

       
        
          <div className=" flex items-center gap-3">
          <h1 className=" cursor-pointer hover:bg-[#49579e] hover:text-white  p-3 rounded-full text-[#5293e3] ">
            <FaRegUser size={26} />
          </h1>
          <button
  className={`hidden md:block px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform ${
    scrolled
      ? "bg-[#5293e3] text-white hover:bg-[#49579e] hover:text-white hover:scale-105"
      : "bg-[#5293e3] text-white   hover:bg-[#49579e] hover:text-white hover:scale-105"
  }`}
>
  Contact Us
</button>

            <div
              onClick={toggleDrawer}
              className="md:hidden text-xl bg-sky-500 p-3 rounded-lg cursor-pointer"
            >
              {drawerOpen ? (
                <RxCross1  size={26}
                  className={`${
                    scrolled ? "text-white" : "text-white"
                  }`}
                />
              ) : (
                <HiMiniBars3 size={26}
                  className={`${
                    scrolled ? "text-white" : "text-white"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </nav>


      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <ul>
            <li className="mb-2 mt-9">
              <div
                onClick={() => toggleDrawerDropdown("home")}
                className="flex justify-between items-center cursor-pointer text-red-500"
              >
                Home
                <FaChevronDown
                  className={`transition-transform ${
                    drawerDropdown.home ? "rotate-180" : ""
                  }`}
                />
              </div>
              {drawerDropdown.home && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block text-black">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-black">
                      Home 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                onClick={() => toggleDrawerDropdown("pages")}
                className="flex justify-between items-center cursor-pointer text-black"
              >
                Pages
                <FaChevronDown
                  className={`transition-transform ${
                    drawerDropdown.pages ? "rotate-180" : ""
                  }`}
                />
              </div>
              {drawerDropdown.pages && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block text-black">
                      Pages 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-black">
                      Pages 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                onClick={() => toggleDrawerDropdown("news")}
                className="flex mt-2 justify-between items-center cursor-pointer text-black"
              >
                News
                <FaChevronDown
                  className={`transition-transform ${
                    drawerDropdown.News ? "rotate-180" : ""
                  }`}
                />
              </div>
              {drawerDropdown.news && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block text-black">
                      News 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-black">
                      News 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

 
    

     
    </div>

    <div   style={{
    backgroundImage: `url('../src/assets/bg-1.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }} className=" flex w-full px-10  mx-auto flex-col relative md:flex-row justify-evenly bg-sky-100 mt-[75px] lg:pb-0 md:pb-10  items-center">
      <div  className=" text-center md:text-start">
     <h1 className=" md:text-5xl font-bold text-2xl mt-7 md:mt-0   "> We’r Help to <br/>
      Grow your online Business Success.</h1>

      <h1 className=" text-gray-500 md:text-2xl my-10  font-sans   text-xl">
      Agency work with top rated talented people provide qulaity services.
      </h1>

      <h1 className=" font-bold text-3xl ">Over <span className=" text-[#5293e3]   underline text-xl md:text-4xl">100+ client</span> all over the Bangladesh.</h1>
      
      
      </div>
      <div className="   absolute left-10 -bottom-10  px-6 py-5 z-10 rounded-lg">
      <img
      className="floating-left-right-image "
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_08.svg"
      alt="bbb"
    />
</div>

      <div className="relative ">
  <div>
    <img
      className="absolute w-[15%] top-28 floating-image md:top-36"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_06.svg"
      alt="bbb"
    />
  </div>

  <div>
    <img
      className="absolute w-[3%] top-64 floating-image lg:top-96 md:top-80"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_03.svg"
      alt="bbb"
    />
  </div>

  <div className="relative w-[88%]  mx-auto">
    <div
      className="absolute inset-0  top-32 md:top-40 lg:top-56  w-[80%] mx-auto bg-center bg-cover"
      style={{ backgroundImage: `url('https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_01.svg')` }}
    ></div>

    <img className="relative    w-full" src={bb} alt="bbb" />
  </div>

  <div>
    <img
      className="absolute w-[15%] top-16 floating-image right-0"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_07.svg"
      alt="bbb"
    />
  </div>
  <div>
    <img
      className="absolute w-[3%] md:top-72 top-64 floating-image right-0"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_04.svg"
      alt="bbb"
    />
  </div>
  <div>
  <img
      className="absolute w-[2%] hidden right-6 floating-image lg:right-32 lg:top-48 md:right-16 md:top-36 "
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_10.svg"
      alt="bbb"
    />
  </div>
  <div>
    <img
      className="absolute w-[3%] left-10 top-10 floating-image"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_02.svg"
      alt="bbb"
    />
  </div>
  <div className="  bg-white shadow-md absolute right-0 -bottom-10 z-20 px-6 py-4 rounded-lg">
 <div className=" flex  gap-4">
 <div className=" ">
    <h1 className="bg-[#5293e3] p-2  rounded-full"><IoCheckmark size={36} color="white"  /></h1>
  </div>

  <div>
  <h1 className=" font-bold text-xl"><span className=" text-[#5293e3]">15 Days</span> Free Trial <br/> <span className=" text-gray-400 font-thin">No card required. cancel anytime</span>.</h1>

<h1  className=" text-gray-400 hover:text-[#49579e] cursor-pointer font-serif mt-4">SIGN UP</h1>


  </div>
 </div>
</div>
 
</div>




    </div>

   
    </div>

    <div>
      <About />
    </div>

    <div>
      <WhyChooseUs/>
    </div>
    <div>
      <Pricing/>
    </div>

    <div>
      <ClientSay/>
    </div>
    <div>
      <HappyWork/>
    </div>
    <div>
      <Contact/>
    </div>
   </div>
  );
};

export default App;
