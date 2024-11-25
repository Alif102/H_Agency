import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import bb from '../src/assets/bb.png'
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
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-[#dffcf0]"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="text-black font-bold text-xl">
            <span className={`${scrolled ? "text-black" : "text-black"}`}>
              Logo
            </span>
          </div>

          {/* Menu (Hidden on Small Screens) */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative group">
              {/* Dropdown Trigger */}
              <div className="flex items-center cursor-pointer text-black">
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

              {/* Dropdown Content */}
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
              {/* Dropdown Trigger */}
              <div className="flex items-center cursor-pointer text-black">
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

              {/* Dropdown Content */}
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
              {/* Dropdown Trigger */}
              <div className="flex items-center cursor-pointer text-black">
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

              {/* Dropdown Content */}
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

          {/* Button / Icon */}
        
          <div className=" flex items-center gap-3">
          <h1 className=" cursor-pointer hover:bg-pink-500  hover:text-white  p-3 rounded-full text-pink-500 ">
            <FaRegUser size={26} />
          </h1>
          <button
  className={`hidden md:block px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform ${
    scrolled
      ? "bg-pink-600 text-white hover:bg-black hover:text-pink-600 hover:scale-105"
      : "bg-pink-600 text-white   hover:bg-pink-500 hover:text-white hover:scale-105"
  }`}
>
  Contact Us
</button>

            <div
              onClick={toggleDrawer}
              className="md:hidden text-xl bg-pink-500 p-3 rounded-lg cursor-pointer"
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

      {/* Drawer */}
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

      {/* Banner */}
    

      {/* Placeholder Content */}
     
    </div>

    <div className=" flex w-full px-10 mb-52 mx-auto flex-col md:flex-row justify-evenly bg-[#dffcf0] mt-[75px] items-center">
      <div >
     <h1 className=" md:text-6xl font-bold text-2xl   "> We’r Help <br/>
     to Achive your Success.</h1>

      <h1 className=" text-gray-500 md:text-2xl  font-sans my-9 text-xl">
      Agency work with top rated talented people provide qulaity services.
      </h1>
      </div>

      <div className="relative">
  <div>
    <img
      className="absolute w-[15%] top-28 floating-image md:top-36"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_06.svg"
      alt="bbb"
    />
  </div>

  <div>
    <img
      className="absolute w-[3%] top-72 floating-image lg:top-96 md:top-72"
      src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_03.svg"
      alt="bbb"
    />
  </div>

  <div className="relative w-[88%] mx-auto">
    {/* Background image */}
    <div
      className="absolute inset-0  top-32 md:top-40 lg:top-56  w-[80%] mx-auto bg-center bg-cover"
      style={{ backgroundImage: `url('https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_01.svg')` }}
    ></div>

    {/* Foreground image */}
    <img className="relative w-full" src={bb} alt="bbb" />
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

</div>

    </div>
   
    </div>
  );
};

export default App;
