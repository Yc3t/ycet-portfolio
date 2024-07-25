'use client'
import React, { useEffect, useState } from 'react';
import { Triangle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '@/app/globals.css'  // Adjust this path if necessary

const NavigationBar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    setCurrentPath(pathname === '/' ? 'home' : pathname.slice(1));
  }, [pathname]);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center font-hack text-2xl">
      <div className="flex items-center space-x-2">
        <span className="font-bold">ycet</span>
        <span>/</span>
        <span>{currentPath}</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="border-t border-white flex-1 mx-4"></div>
        <Triangle className="text-white" size={28} />
        <div className="border-t border-white flex-1 mx-4"></div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className={currentPath === 'home' ? 'text-white' : 'text-gray-500 hover:text-white'}>
          home
        </Link>
        <span>|</span>
        <Link href="/blog" className={currentPath === 'blog' ? 'text-white' : 'text-gray-500 hover:text-white'}>
          blog
        </Link>
        <div className="w-7 h-7 bg-white rounded-full"></div>
      </div>
    </nav>
  );
};

export default NavigationBar;