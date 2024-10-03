import React from 'react'
import { MapPin } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-0 text-center px-4 mb-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Hello! I&apos;m Youssef
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2 sm:mb-0 sm:mr-4">
            Telematic Engineer
          </h2>
          <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 shadow-lg">
            <MapPin className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">Spain</span>
          </div>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
      ..... 
        </p>
        <a 
          href="#contact" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default AboutSection
