import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center '>
                <h2 className='font-bold text-5xl'>Trusted by the Traders across the world! </h2>
                <p className='py-3 text-3xl text-gray-500 '> Enhance your setup and manage the risk and reward with us!</p>
            </div>
            <div className='grid md:grid-cols-3 px-2 gap-1 text-center'>
              <div className='border py-8 shadow-xl rounded-xl'>
                <p className='font-bold text-indigo-500 text-5xl'>100%</p>
                <p className=' text-gray-500 mt-2'>Price Satisfication</p>
              </div>
              <div className='border py-8 shadow-xl rounded-xl'>
                <p className='font-bold text-indigo-500 text-5xl'>24/7</p>
                <p className='text-gray-500 mt-2'>Support Services</p>
              </div>
              <div className='border py-8 shadow-xl rounded-xl'>
                <p className='font-bold text-indigo-500 text-5xl'>1k+</p>
                <p className='text-gray-500 mt-2'>Users</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About