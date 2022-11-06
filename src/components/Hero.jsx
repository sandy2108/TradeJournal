import React from 'react';
import { HiDatabase ,HiOutlineTrendingUp ,HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillApi} from "react-icons/ai";
import bgImg from '../assests/graphic.png';

const Hero = () => {
  return (
    <div name='home' className='justify-betweeen w-full h-screen bg-gradient-to-r from-zinc-100 to-pink-200 flex flex-col'> 
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='justify-center flex flex-col md:items-start w-full px-2 py-8 '> 
         <p className='text-2xl'>To Start Your Trade Journey with Us! </p>
         <h1 className='py-3 text-5xl md:text-7xl font-bold' > Risk Management</h1>
         <div className='text-2xl ' >Track down your P&L. </div>
         <button className='py-3 px-6 sm:w-[60%] my-4'> Get Started! </button>
        </div>
        <div>
            <img className="w-full" src={bgImg} alt='/' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                         mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gradient-to-r from-zinc-100 to-pink-200
                        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='text-1xl'>Data services</p>
            <div className='flex justify-between flex-wrap px-4 '> 
                <p className='flex px-4 py-2 text-slate-500'><HiOutlinePencilAlt  className=' h-6 text-indigo-600'/> Portfolio Tracker</p>
                <p className='flex px-4 py-2 text-slate-500'><HiOutlineTrendingUp className='h-6 text-indigo-600'/> Trading Games</p>
                <p className='flex px-4 py-2 text-slate-500'><HiDatabase className='h-6 text-indigo-600'/> Design Data</p>
                <p className='flex px-4 py-2 text-slate-500'><AiFillApi className='h-6 text-indigo-600'/> API Services</p>
            </div>
        </div>
      

      </div>
    
    </div>
    
  )
}

export default Hero;