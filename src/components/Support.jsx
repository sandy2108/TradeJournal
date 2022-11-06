import React from 'react'

import suplogo from '../assests/help.jpg';



import {HiArrowRight} from "react-icons/hi";
import { HiPhone , HiCpuChip , HiGlobeAlt} from "react-icons/hi2";


const Support = () => {
  return (
    <div name='support' className='w-full  mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={suplogo} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-center uppercase text-slate-300 text-3xl font-bold'>Support </h2>
          <h3 className='text-5xl py-6 font-bold text-center'>Finding the Right team </h3>
          <p className='text-3xl py-4 text-slate-300 '> Link up with us. If you're having trouble with Tranal!
                                                          Improve your trading abilities and keep track of the securities you purchase and sell,
                                                          including stocks, bonds, cryptocurrencies, fiat money, and commodities.
          </p> 
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <HiPhone className='w-16 text-white bg-indigo-500 rounded-lg mt-[-2.5rem]'/>
                <h3 className='text-2xl font-bold my-6'>Sales</h3>
                <p className='text-gray-600 text-xl'>Test your strategy and backtrack your progress</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us! <HiArrowRight className='w-5 ml-2'/> </p> 
            </div>
          </div>
           
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <HiGlobeAlt className='w-16 text-white bg-indigo-500 rounded-lg mt-[-2.5rem]'/>
                <h3 className='text-2xl font-bold my-6'>Technical Support</h3>
                <p className='text-gray-600 text-xl'>Our services will be available for 24/7 X 365 days.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us! <HiArrowRight className='w-5 ml-2'/> </p> 
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <HiCpuChip className='w-16 text-white bg-indigo-500 rounded-lg mt-[-2.5rem]'/>
                <h3 className='text-2xl font-bold my-6'>Ambassador</h3>
                <p className='text-gray-600 text-xl'>Join in our Ambassador and help out your community members. </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us! <HiArrowRight className='w-5 ml-2'/> </p> 
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Support