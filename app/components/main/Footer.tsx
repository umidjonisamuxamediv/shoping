import React from 'react'
import { RxGithubLogo,RxDiscordLogo,RxInstagramLogo } from 'react-icons/rx'
const Footer = () => {
  return (
    <div className='w-full h-full bgtransparent text-white shadow-lg p-[15px]'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
           <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'> 
           <div className='font-bold text-[16px]'>Community</div>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxGithubLogo/>
                <span className='text-[15px] ml=[6px]'>Github</span>
            </p>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxInstagramLogo/>
                <span className='text-[15px] ml=[6px]'>Instagram</span>
            </p>
           </div>
           <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'> 
           <div className='font-bold text-[16px]'>About </div>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                
                <span className='text-[15px] ml=[6px]'>Learning about me</span>
            </p>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
              
                <span className='text-[15px] ml=[6px]'>umidjonisamuxamedov@gmail.com</span>
            </p>
           </div>
        </div>
        <div className='mn-[20px] text-[15px] text-center'>
            &copy;WebChin Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
