import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoDiamond } from 'react-icons/io5'
import { SiNuxtdotjs } from 'react-icons/si'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const WhyChooseUs = () => {
  return (
    <div>

        <div className=' bg-sky-100 flex flex-col md:flex-col lg:flex-row gap-6 p-10 items-center justify-center md:justify-evenly'>

            <div className=' text-center md:text-start'>
                <h1 className=' text-gray-400 mb-1 font-semibold uppercase'>Why Us ?</h1>
                <h1 className=' text-4xl md:text-5xl font-bold uppercase'>Why choose <br/>  <span className="relative inline-block">
    <span className="relative z-10 -mb-4 pollinator lowercase font-extrabold"><span className=' text-sky-400'>ezi</span><span className=' text-[#49579e]'>calc</span></span>
    <span className="absolute left-0 bottom-2 w-full h-[6px] "></span>
  </span></h1>
                <h1 className=' text-gray-500 font-sans text-2xl my-10'>We helping our client to fullfill their needs with our expert.</h1>
                <img className=' mx-auto md:mx-0' src="https://jano.symphonythemes.net/sites/jano/files/images/shape/shape_08.svg" alt="" srcset="" />
            </div>
 

            <div className=' grid md:grid-cols-4 grid-cols-1 w-full md:w-auto gap-7 '>
               <div className=' col-span-1   md:col-span-2 bg-white rounded-xl shadow-sm p-5 space-y-6'>
                <IoDiamond size={30} color='orange' />
                <h1 className='text-xl md:text-3xl font-bold '>Quality Service</h1>
                <h1 className=' text-gray-400 text-xl'>Elit esse cillum dolore eu fugiat <br/> nulla pariatur</h1>
               </div>
               <div className='  md:col-span-2 col-span-1 bg-white rounded-xl shadow-sm p-5 space-y-6'>
                <FaUser size={30} color='cyan' />
                <h1 className='text-xl md:text-3xl font-bold'>24x7 Support</h1>
                <h1 className=' text-gray-400 text-xl'>Elit esse cillum dolore eu fugiat <br/> nulla pariatur</h1>
               </div>
               <div className='  md:col-span-2 col-span-1 bg-white rounded-xl shadow-sm p-5 space-y-6'>
                <SiNuxtdotjs size={30} color='purple' />
                <h1 className='text-xl md:text-3xl font-bold'>Great Pricing</h1>
                <h1 className=' text-gray-400 text-xl'>Elit esse cillum dolore eu fugiat <br/> nulla pariatur</h1>
               </div>
               <div className='  md:col-span-2 col-span-1 bg-white rounded-xl shadow-sm p-5 space-y-6'>
                <VscWorkspaceTrusted  size={30} color='pink'/>
                <h1 className='text-xl md:text-3xl font-bold'>100% Trusted</h1>
                <h1 className=' text-gray-400 text-xl'>Elit esse cillum dolore eu fugiat <br/> nulla pariatur</h1>
               </div>
            </div>

        </div>
      
    </div>
  )
}

export default WhyChooseUs
