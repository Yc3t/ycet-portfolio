import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Code } from 'lucide-react'
import Navbar from '@/components/navbar'  // Import the Navbar component
import '@/app/globals.css'

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
}

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
      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 backdrop-blur-sm border-none font-mono text-xs text-content-light md:text-sm overflow-hidden">
        <div className="flex justify-between items-center p-3">
          <div className="flex-grow pr-2">
            <h3 className="text-sm font-bold text-white">{project.name}</h3>
            <p className="text-xs text-gray-300 mt-1 line-clamp-2">{project.description}</p>
          </div>
          <div className="flex -space-x-2 ml-2">
            {project.technologies.map((tech, index) => {
              const iconSrc = techIconMap[tech]
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
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data.projects))
      .catch(error => console.error('Error loading projects:', error))
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-hack">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl mb-8 text-center font-bold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage
