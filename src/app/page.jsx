"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Github } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import styles from './a1.module.css'
import NavigationBar from '@/components/navbar';
import RadialGraph from '@/components/graph';
import SocialLine from '@/components/SocialLine';
const GitHubButton = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-gray-800 border border-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
  >
    <Github size={16} className="mr-2" />
    View on GitHub
  </a>
);

const Home = () => {
  const [data, setData] = useState({ about: {}, skills: [], projects: [] });
  const [openProjects, setOpenProjects] = useState({});

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error loading data:', error));
  }, []);

  const toggleProject = (projectId) => {
    setOpenProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavigationBar />
      <div className="flex-grow flex overflow-hidden">
        <div className="bg-black text-white p-8 font-hack flex-1 overflow-y-auto">
          <section className="mb-8">
            <h2 className="text-4xl mb-4">about</h2>
            <div className="ml-4">
              <p className="flex items-center">
                <ChevronRight className="mr-2" size={20} />
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
            <div className="ml-4">
              {data.projects.map(project => (
                <Collapsible 
                  key={project.id}
                  open={openProjects[project.id]}
                  onOpenChange={() => toggleProject(project.id)}
                >
                  <CollapsibleTrigger className={`flex items-center w-full text-left mt-2 group ${styles.projectTrigger}`}>
                    <div className={`${styles.glowingChevron} ${openProjects[project.id] ? styles.active : ''}`}>
                      {openProjects[project.id] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </div>
                    <span>{project.name}</span>
                    <span className={styles.separator}></span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={styles.githubLink}
                    >
                      <Github size={18} />
                    </a>
                  </CollapsibleTrigger>
                  <CollapsibleContent className={styles.projectContent}>
                    <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                    <ul className="list-none relative mt-2">
                      {project.details.map((detail, index) => (
                        <li key={index} className={`${styles.detailItem} text-sm`}>{detail}</li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center bg-black">
          <RadialGraph />
        </div>
      </div>
      <SocialLine />
    </div>
  );
};
export default Home;