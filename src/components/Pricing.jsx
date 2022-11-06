import React from 'react';
import { HiOutlineBolt  } from "react-icons/hi2";

const Pricing = () => {
  return (
    <div name='pricing' className='w-full my-24 text-white '>
        <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay absolute'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center text-slate-300 py-8'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <p className='text-5xl font-bold text-white py-8'>The Right Price for your Trade Journey </p>
                <h3 className='text -3xl'>Good Choices for your trading analytics,community & Mentorships</h3>
            </div>

            <div className='grid md:grid-cols-2'>
              <div className='bg-white rounded-xl shadow-2xl m-4 p-8 text-slate-900' >
                <span className='uppercase text-indigo-900 bg-indigo-200 px-3 py-1 rounded-2xl text-sm'>STANDARD</span>
                <div>
                    <h2 className='text-5xl font-bold py-4 flex'>$10/<span className='text-xl text-slate-500 flex flex-col justify-end'>mon</span></h2>
                </div>
                <div className='text-2xl text-slate-500 py-8'>Check out the features:</div>
                <div className='text-2xl'> 
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> 24/7 Services</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> PnL charts</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Summary results</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Team Competition</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Get rewards</p>
                    <button className='my-4 py-4 w-full'>Get Started!</button>
                </div>
               </div>

               <div className='bg-white rounded-xl shadow-2xl m-4 p-8 text-slate-900' >
                <span className='uppercase text-indigo-900 bg-indigo-200 px-3 py-1 rounded-2xl text-sm'>Premium</span>
                <div>
                    <h2 className='text-5xl font-bold py-4 flex'>$20/<span className='text-xl text-slate-500 flex flex-col justify-end'>mon</span></h2>
                </div>
                <div className='text-2xl text-slate-500 py-8'>Check out the features:</div>
                <div className='text-2xl'> 
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> 24/7 Services</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> PnL charts</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Summary results</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Team Competition</p>
                    <p className='flex py-4'><HiOutlineBolt className='w-8 mr-5 text-green-500'/> Get rewards</p>
                    <button className='my-4 py-4 w-full'>Get Started!</button>
                </div>
               </div>
                
            </div>
        </div>

    </div>
  )
}

export default Pricing