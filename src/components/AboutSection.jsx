import React from 'react'
import { MapPin } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="mb-8">
      <h1 className="text-5xl font-bold mb-2">Hello! I&apos;m ycet</h1>
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-semibold text-purple-400 mr-4">Telematic Engineer</h2>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">Spain</span>
        </div>
      </div>
      <p className="text-gray-400 max-w-2xl">
        Product designer and design system specialist with over 9 years of experience
        focusing on user experience and design systems to creating a user-centered design
        in SaaS products.
      </p>
    </section>
  )
}

export default AboutSection
