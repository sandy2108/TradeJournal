import React from 'react'
import {HiCheck} from "react-icons/hi2";

const AllinOne = () => {
  return (
    <div name='features' className='w-full my-32 bg-text '>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-center font-bold text-5xl'>All in one Platform</h2>
        <p className='text-2xl text-gray-500 text-center py-8'> Enjoy your trade journey with Tranal.</p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-4 pt-4'>

         <div className='flex'>
            <div>
               <HiCheck className='w-7 mr-4 text-green-600'/> 
            </div>
            <div>
             <h2 className="text-lg font-bold ">Track your progress and goals </h2>
             <p className='text-lg pt-2 pb-4'>  Calculate profit and loss. Tracking your profits in a profit and loss statement (P&L) is essential for your business's success.</p>
            </div>
         </div>
         
         <div className='flex'>
            <div>
               <HiCheck className='w-7 mr-4 text-green-600'/> 
            </div>
            <div>
             <h2 className="text-lg font-bold ">API Tracking</h2>
             <p className='text-lg pt-2 pb-4'>   With a trading API, you can get the streaming or real-time data for your trades.</p>
            </div>
         </div>

         <div className='flex'>
            <div>
               <HiCheck className='w-7 mr-4 text-green-600'/> 
            </div>
            <div>
             <h2 className="text-lg font-bold ">Customizable Dashboard view </h2>
             <p className='text-lg pt-2 pb-4'> with customizable parameters to fit your personal trading preferences. trade plan features,trading journal features etc., </p>
            </div>
         </div>

         <div className='flex'>
            <div>
               <HiCheck className='w-7 mr-4 text-green-600'/> 
            </div>
            <div>
             <h2 className="text-lg font-bold ">Most Trusted Platform</h2>
             <p className='text-lg pt-2 pb-4'>Over 1k + users using the platform </p>
            </div>
         </div>

        
         

        

         
       

       

         

       


      </div>

    </div>
  )
}

export default AllinOne