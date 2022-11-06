import React from 'react'

import { FaFacebook,FaInstagram,FaTwitter,FaTelegramPlane,FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300  mt-24 py-2 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2  border-gray-600 py-8'>
            <div>
                <h5 className='font-bold uppercase pt-2'>Solutions</h5>
                <ul>
                 <li className='py-1'>Marketing</li>
                 <li className='py-1'>Analytics</li>
                 <li className='py-1'>Trade Datas</li>
                 <li className='py-1'>Tutorials </li>
                </ul>
               
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'> Support</h6>
                <ul>
                 <li className='py-1'>Pricing</li>
                 <li className='py-1'>Documentation</li>
                 <li className='py-1'>Guides</li>
                 <li className='py-1'>API Status</li>
                </ul>
               
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>COMPANY</h6>
                <ul>
                 <li className='py-1'>About</li>
                 <li className='py-1'>Blog</li> 
                 <li className='py-1'>Jobs</li>
                 <li className='py-1'>Partners</li>
                </ul>
                
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul> 
                <li className='py-1'>Claim Privacy</li>
                <li className='py-1'>Privacy and policy terms  conditions</li>
                </ul> 
               
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <h6 className='font-bold'> SUBSCRIBE TO OUR NEWSLETTER</h6>
                <p className='py-4'> The latest news, articles,and resources,sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input type="email" className='w-full p-2 mr-4 rounded-md mb-4  '  placeholder='Enter email...'/> 
                    <button className='mb-4 p-2'> Suscribe!</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] mx-auto justify-between sm:flex-row text-center text-gray-500  px-2 py-4'>
            <p className='py-4'> 2022 Workflow, LLC. All rights reserved. </p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTelegramPlane/>
                <FaDiscord/>
            </div>
        </div>
    </div>
  )
}

export default Footer