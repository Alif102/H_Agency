import React, { useState, useRef, useEffect } from 'react';
import c1 from '../../../../src/assets/c2.png';
import { TfiQuoteLeft } from "react-icons/tfi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ClientSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [clientWidth, setClientWidth] = useState(0);
  const startPosition = useRef(0);
  const currentTranslate = useRef(0);
  const previousTranslate = useRef(0);
  const sliderRef = useRef(null);

  const clients = [
    { name: 'Martina Jonas', address: 'USA', title: 'Very Solid, 9.1 out of 10', description: 'This is an amazing service! Highly recommended.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-blue-500' },
    { name: 'John Doe', address: 'UK', title: 'Fantastic, 9.5 out of 10', description: 'Exceptional experience, loved every bit of it!', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-green-500' },
    { name: 'Anna Smith', address: 'Canada', title: 'Wonderful, 9.8 out of 10', description: 'Innovative solutions and great customer care.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-yellow-500' },
    { name: 'Anna Smith', address: 'Canada', title: 'Wonderful, 9.8 out of 10', description: 'Innovative solutions and great customer care.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-yellow-500' },
    { name: 'Anna Smith', address: 'Canada', title: 'Wonderful, 9.8 out of 10', description: 'Innovative solutions and great customer care.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-yellow-500' },
    { name: 'Martina Jonas', address: 'USA', title: 'Very Solid, 9.1 out of 10', description: 'This is an amazing service! Highly recommended.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-blue-500' },

    { name: 'Mark Lee', address: 'Australia', title: 'Superb, 9.7 out of 10', description: 'Very professional and dedicated team.', icon: <TfiQuoteLeft size={35} />, image: c1, bgColor: 'bg-red-500' },
  ];

  const updateClientWidth = () => {
    if (sliderRef.current) {
      const slide = sliderRef.current.firstChild;
      const gap = parseFloat(getComputedStyle(sliderRef.current).gap) || 0;

      // For small screens, use full width; otherwise, calculate based on `w-[40%]`
      if (window.innerWidth < 768) {
        setClientWidth(window.innerWidth);
      } else {
        setClientWidth(slide.getBoundingClientRect().width + gap);
      }
    }
  };

  useEffect(() => {
    updateClientWidth();
    window.addEventListener('resize', updateClientWidth);
    return () => {
      window.removeEventListener('resize', updateClientWidth);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, clients.length - 1));
  };

  const startDrag = (e) => {
    setIsDragging(true);
    startPosition.current = e.clientX || e.touches[0].clientX;
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    const currentPosition = e.clientX || e.touches[0].clientX;
    const movement = currentPosition - startPosition.current;
    currentTranslate.current = previousTranslate.current + movement;

    sliderRef.current.style.transition = 'none';
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const endDrag = () => {
    setIsDragging(false);

    const draggedIndex = Math.round(-currentTranslate.current / clientWidth);
    const clampedIndex = Math.max(0, Math.min(draggedIndex, clients.length - 1));

    setCurrentIndex(clampedIndex);
    previousTranslate.current = -clampedIndex * clientWidth;

    sliderRef.current.style.transition = 'transform 0.5s ease-out';
    sliderRef.current.style.transform = `translateX(-${clampedIndex * clientWidth}px)`;
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * clientWidth}px)`;
      previousTranslate.current = -currentIndex * clientWidth;
    }
  }, [currentIndex, clientWidth]);

  return (
    <div 
    //  style={{
    //   backgroundImage: "url('../../../../src/assets/sv1.jpg')",
    //   backgroundSize: "cover", 
    //   backgroundRepeat: "no-repeat", 
    //   backgroundPosition: "center",
    // }} 
    className="p-4 bg-sky-100">
      <div className="flex flex-col md:flex-row justify-between gap-5 px-4 items-center mt-10 mb-10 md:mb-28">
        <h1 className="md:text-5xl text-2xl font-bold">
          What’s Our Client Say <br /> About Us.
        </h1>
        <div className="flex  gap-3">
          <div className="bg-white p-4 hover:shadow-xl rounded-full">
            <IoIosArrowBack size={30} onClick={handlePrev} className="cursor-pointer" />
          </div>
          <div className="bg-white p-4 hover:shadow-xl rounded-full">
            <IoIosArrowForward size={30} onClick={handleNext} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden mt-8"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={endDrag}
      >
        <div
          ref={sliderRef}
          className="flex gap-5 md:gap-12 "
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`w-full md:w-[40%]  h-[350px] flex-shrink-0 bg-white rounded-lg flex justify-evenly gap-4 py-12 px-4 shadow-inner-bottom`}
            >
              <div>
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-[250px] md:h-[340px] h-[305px] rounded-lg object-cover"
                />
              </div>
              <div className="space-y-3">
                <h1 className={`flex items-center justify-center  ${client.bgColor} w-12 h-12 text-white rounded-full p-3`}>
                  {client.icon}
                </h1>
                <h1 className="text-2xl lg:text-3xl font-bold">{client.title}</h1>
                <p className="text-[16px] lg:text-[18px] font-sans text-sky-800">{client.description}</p>
                <p className="text-lg text-sky-600">
                  <span className="font-bold">{client.name}</span>, <span className="text-gray-500">{client.address}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="md:hidden flex justify-center my-10 gap-3">
          <div className="bg-white p-4 hover:shadow-xl rounded-full">
            <IoIosArrowBack size={30} onClick={handlePrev} className="cursor-pointer" />
          </div>
          <div className="bg-white p-4 hover:shadow-xl rounded-full">
            <IoIosArrowForward size={30} onClick={handleNext} className="cursor-pointer" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClientSay;
