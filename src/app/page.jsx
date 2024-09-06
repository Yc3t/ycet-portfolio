"use client"
import React, { useState, useEffect } from 'react';
import styles from './a1.module.css'
import { Github, Code, Database, Globe, Server, Cpu, Shield, Radio } from 'lucide-react';
import NavigationBar from '@/components/navbar';
import RadialGraph from '@/components/graph';
import SocialLine from '@/components/SocialLine';
import Image from 'next/image';
import LocationCard from '@/components/LocationCard';
import StackCards from '@/components/StackCards';
import { motion, useInView } from 'framer-motion';
import Sidebar from '@/components/Sidebar'
import AboutSection from '@/components/AboutSection'
const techIconMap = {
  'C++': '/logos/cplusplus.svg',
  'C#': '/logos/csharp.svg',
  'CSS3': '/logos/css3.svg',
  'HTML5': '/logos/html5.svg',
  'JavaScript': '/logos/javascript.svg',
  'MATLAB': '/logos/matlab.svg',
  'Next.js': '/logos/nextjs.svg',
  'Node.js': '/logos/nodejs.svg',
  'PHP': '/logos/php.svg',
  'Python': '/logos/python.svg',
  'PyTorch': '/logos/pytorch.svg',
  'React': '/logos/react.svg'
};

const ProjectCard = ({ project }) => (
  <div className="relative overflow-hidden group h-full">
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/40 to-gray-500/30 blur-md"></div>
    <div className="border border-stroke-light bg-neutral-800/40 backdrop-blur-sm flex flex-col p-1.5 rounded-xl relative"> 
      <div className="aspect-video relative mb-0 overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 backdrop-blur-sm border-none font-mono text-xs text-content-light md:text-sm  overflow-hidden">
        <div className="flex justify-between items-center p-3">
          <div className="flex-grow pr-2">
            <h3 className="text-sm font-bold text-white">{project.name}</h3>
            <p className="text-xs text-gray-300 mt-1 line-clamp-2">{project.description}</p>
          </div>
          <div className="flex -space-x-2 ml-2">
            {project.technologies.map((tech, index) => {
              const iconSrc = techIconMap[tech];
              return (
                <div 
                  key={index} 
                  className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700"
                  style={{ zIndex: project.technologies.length - index }}
                >
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={tech}
                      width={16}
                      height={16}
                      className="w-4 h-4 text-gray-300"
                    />
                  ) : (
                    <Code className="w-3 h-3 text-gray-300" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);



const Home = () => {
  const [data, setData] = useState({ skills: [], projects: [] })
  const [sidebarWidth, setSidebarWidth] = useState(256)

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error loading data:', error))
  }, [])

  return (

    <div className="flex h-screen bg-black text-white font-hack">
      <Sidebar onResize={(width) => setSidebarWidth(width)} />
      <main className="flex-1 flex flex-col overflow-hidden" style={{ marginLeft: `${sidebarWidth}px` }}>
        <div className="flex-grow overflow-y-auto p-4">


 <div className="ml-10 mb-4">

          <AboutSection />
          </div>
          <section className="mb-8">
            <h2 className="text-4xl mb-4 ml-10 text-center">skills</h2>
            <div className="ml-10 flex flex-wrap ">
              {data.skills.map((skill, index) => (
                <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-800 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        
          <section className="mb-16">
            <h2 className="text-4xl mb-4 text-center">selected projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <h2 className="text-4xl mb-4 text-center">about</h2>

          <motion.div
            className="mt-12 grid gap-4 md:grid-cols-2"
            initial={{
              y: 40,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.3
            }}
          >
            <div className="shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6 border-2 border-gray-700">
              <div className="grid gap-4">
                <RadialGraph/>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 rounded-xl p-4 lg:p-6 border-2 border-gray-700">
                <LocationCard />
              </div>
              <div className="shadow-feature-card dark:shadow-feature-card-dark rounded-xl border-2 border-gray-700 overflow-hidden">
                <StackCards/>
              </div>
            </div>
          </motion.div>
        </div>
        <SocialLine />
      </main>
    </div>
  )
}

export default Home
