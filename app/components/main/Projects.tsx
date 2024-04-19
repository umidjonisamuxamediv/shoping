import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent textbg-clipt-text text-gradient-to-r text-purple-500 text-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src='/NextWebsite.png'
            title='Moderin Next.js Protgolio'
            description='lorem20'
            />
            <ProjectCard
            src='/NextWebsite.png'
            title='Moderin Next.js Protgolio'
            description='lorem20'
            />
            <ProjectCard
            src='/NextWebsite.png'
            title='Moderin Next.js Protgolio'
            description='lorem20'
            />
        </div>
    </div>
  )
}

export default Projects
