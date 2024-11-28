import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import arrow from '../../assets/arrow.png'
import s1 from '../../assets/s1.png'
import tick from '../../assets/tick.png'
import sv2 from '../../assets/sv2.png'
const Contact = () => {
  return (
    <div className=' relative mt-20 mb-16 flex md:flex-row flex-col gap-40 md:gap-16 bg-gray-100 md:p-28 p-20 justify-evenly my-10'>
      <div className=' space-y-5 '>
        <h1>
            <TfiHeadphoneAlt size={36} color='skyblue' />
        </h1>
        <h1 className=' lg:text-4xl md:text-3xl text-4xl font-semibold'>Let’s talk <br/>
        with expereince  <br/> advisors.</h1>

        <h1 className=' text-xl md:text-[16px] lg:text-xl text-gray-600'>eiusmod tempor incididunt. Ut enim mim veniam, quis nostrud elit.</h1>

        <div>
        <p className=' text-red-400 text-lg font-semibold'>Urgent?</p>

<p>Call us <span className=' text-2xl'> +227 300-3676</span></p>
        </div>
      </div>


      

      <div className=' space-y-5 z-10 relative bg-white p-10 rounded-xl '>
     
      <h1>
  <input
    type="text" placeholder='Your Name'
    className="input input-bordered w-full md:w-96 mx-auto focus:border-sky-500 focus:ring focus:ring-sky-200"
  />
</h1>
      <h1>
  <input
    type="email" placeholder='Your Email'
    className="input input-bordered w-full md:w-96 mx-auto focus:border-sky-500 focus:ring focus:ring-sky-200"
  />
</h1>
      <h1>
  <input
    type="number" placeholder='Phone Number'
    className="input input-bordered w-full md:w-96 mx-auto focus:border-sky-500 focus:ring focus:ring-sky-200"
  />
</h1>
<h1>
  <textarea
    type="text" placeholder='Write here your message......'
    className="input input-bordered w-full md:w-96 mx-auto h-28 focus:border-sky-500 focus:ring focus:ring-sky-200"
  />
</h1>

<button className="btn btn-active w-full md:w-96 mx-auto hover:bg-[#49579e] bg-[#5293e3] text-white">Send Message</button>


<div className=' absolute space-y-3 left-0 md:-left-12 -top-32 md:-top-28 z-20  '>
    <h1 className=' font-bold text-xl -ml-8 -rotate-12'>
Fill the <br/>
form</h1>
     <img className='    w-20 h-20' src={arrow} alt="fdfvd"  />
     </div>
     <div className=' absolute  -left-20 '>
      <img src={tick} className=' w-28 h-28' alt="ssss"  />

      </div>
     <div className=' absolute right-0 floating-left-right-image'>
        <img src={sv2} alt="sdfdsf" />
     </div>
      </div>


      

      <div className=' absolute right-0 -top-12'>
      <img src={s1} className=' w-28 h-28' alt="ssss"  />

      </div>
      

      <div className=' bg-blue-600 absolute -top-4 left-20 rounded-full w-7 h-7'>

      </div>

    </div>
  )
}

export default Contact
