'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/ulits/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcom-box flex py-[8px] px-[7px] border border-[#6b21a8] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#e879f9] mr-[10px] h-5 w-5'/>
            <h1 className='welcome-text text-white text-[13px]'>
                Think better with Next js 13
            </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-white mb-10 text-center mt-[10px]'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText
