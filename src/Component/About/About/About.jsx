import React from 'react'
import { IoCheckmark } from 'react-icons/io5'

const About = () => {
  return (
    <div className=' w-[80%]   mt-28 mb-20 mx-auto grid md:grid-cols-12 grid-cols-1 items-center  gap-16 '>
        <div className='col-span-5   '>
      


        <div className=' '>
        <div className="relative w-full ">
  {/* Image */}
  <img className="w-full h-full object-cover" src="../src/assets/bg3.png" alt="img" />

  {/* Top Text */}
  <div className="absolute top-1/2  transform -translate-x-1/2 text-white text-lg font-bold">
  <div className="bg-sky-400 w-16 h-16 rounded-xl  spin-image">
   
   </div>
  </div>

  {/* Right Text */}
  <div className="absolute top-20 -right-7 transform -translate-y-1/2 text-white text-lg font-bold">
  <div className="custom-bg-blue w-16 h-16 rounded-xl  spin-image">
   
   </div>
  </div>
</div>


        </div>
  
   

  
     
      
      </div>

      {/* <div className=' col-span-2'>

      </div> */}
      <div className=' col-span-6  space-y-6 mt-10 '>
        <h1 className=' text-gray-400 text-xl font-sans'>ABOUT US</h1>
        <h1 className="font-bold text-5xl">
  Your Comfort is Our{" "}
  <span className="relative inline-block">
    <span className="relative z-10 -mb-2">Priority</span>
    <span className="absolute left-0 bottom-0 w-full h-[9px] bg-sky-400"></span>
  </span>
</h1>


        <h2 className=' text-2xl to-gray-600'>Some hardworking people are working day and night to provide scalable product.</h2>

        <div >
            <h1 className=' font-pollinator flex gap-3 text-gray-500 text-xl'>
                <IoCheckmark color='orange' size={26} /> Amazing communication.
            </h1>
            <h1 className=' flex gap-3 text-gray-500 text-xl'>
                <IoCheckmark color='orange' size={26} /> Best trending designing experience.
            </h1>
            <h1 className=' flex gap-3 text-gray-500 text-xl'>
                <IoCheckmark color='orange' size={26} /> Email & Live chat.
            </h1>
        </div>
      </div>


    
    </div>
  )
}

export default About
