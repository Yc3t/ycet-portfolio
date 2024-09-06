import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Resizable } from 'react-resizable'
import { Home, FolderOpen, User, ShoppingCart, FileText, Mail, Twitter, Instagram, Linkedin } from 'lucide-react'
import 'react-resizable/css/styles.css'

export default function Sidebar({ onResize }) {
  const [width, setWidth] = useState(256)

  const menuItems = [
    { name: 'Homepage', icon: Home, href: '/' },
    { name: 'Projects', icon: FolderOpen, href: '/projects' },
    { name: 'Blog', icon: FileText, href: '/blog' },
  ]

  const socialItems = [
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  const handleResize = (event, { size }) => {
    setWidth(size.width)
    onResize(size.width)
  }

  return (
    <Resizable
      width={width}
      height={Infinity}
      onResize={handleResize}
      handle={<div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize bg-gray-600" />}
      minConstraints={[200, Infinity]}
      maxConstraints={[400, Infinity]}
    >
      <aside className="h-screen bg-black text-white flex flex-col fixed left-0 top-0 p-4 font-mono overflow-y-auto" style={{ width: `${width}px` }}>
        <div className="mb-8">
          <Image
            src="/images/image.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full mb-2"
          />
          <h2 className="text-sm font-semibold">yc3t</h2>
          <p className="text-xs text-gray-400">telematic engineer</p>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center space-x-3 py-2 hover:bg-gray-800">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.name.toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative py-4 my-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-black text-sm text-gray-400">social</span>
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            {socialItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center space-x-3 py-2 hover:bg-gray-800">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Resizable>
  )
}
