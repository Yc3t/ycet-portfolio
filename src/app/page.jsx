"use client"
import React, { useState, useEffect } from 'react';
import styles from './a1.module.css'
import { Github, Code, Database, Globe, Server, Cpu, Shield, Radio } from 'lucide-react';
import NavigationBar from '@/components/navbar';
import RadialGraph from '@/components/graph';
import SocialLine from '@/components/SocialLine';
import Image from 'next/image';


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
    <div className="border border-stroke-light bg-neutral-800/40 backdrop-blur-sm flex flex-col p-0 rounded-xl"> 
      <h3 className="text-sm font-bold mb-2 mt-2 text-gray-200 text-center">{project.name}</h3>
      <div className="aspect-video relative mb-0 overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute flex w-full flex-row items-center justify-center bottom-0 left-0 right-0 bg-surface-300/80 px-4 py-2.5 backdrop-blur-sm border-none font-mono text-xs text-content-light,md:text-sm rounded-lg" >
        <div className="flex gap-2">
          {project.technologies.map((tech, index) => {
            const iconSrc = techIconMap[tech];

            return iconSrc ? (
              <div key={index} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <Image
                  src={iconSrc}
                  alt={tech}
                  width={20}
                  height={20}
                  className="w-5 h-5 text-gray-300"
                />
              </div>
            ) : (
              <div key={index} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <Code className="w-5 h-5 text-gray-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);



const Home = () => {
  const [data, setData] = useState({ about: {}, skills: [], projects: [] });

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error loading data:', error));
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavigationBar />
      <div className="flex-grow flex overflow-hidden flex-wrap">
        <div className="bg-black text-white p-8 font-hack flex-1 overflow-y-auto">
          <section className="mb-8">
            <h2 className="text-4xl mb-4">about</h2>
            <div className="ml-4">
              <p className="flex items-center">
                <span className={styles.typingEffect}>{data.about.role}</span>
              </p>
            </div>
          </section>
 
          <section className="mb-8">
            <h2 className="text-4xl mb-4">skills</h2>
            <div className="ml-4 flex flex-wrap">
              {data.skills.map((skill, index) => (
                <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-800 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        

          <section className="mb-16">
            <h2 className="text-4xl mb-4">projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center bg-black">
        </div>
      </div>
      <SocialLine />
    </div>
  );
};

export default Home;
