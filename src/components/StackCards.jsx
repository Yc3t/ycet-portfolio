'use client'

import React from 'react'
import {
  SiCloudflare,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVite
} from '@icons-pack/react-simple-icons'
import { ZapIcon } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Marquee from './ui/Marquee'

const Icon = ({ IconComponent, ...props }) => {
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <Icon IconComponent={ZapIcon} className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <Icon IconComponent={SiHtml5} className='size-10' />
        <Icon IconComponent={SiCss3} className='size-10' />
        <Icon IconComponent={SiJavascript} className='size-10' />
        <Icon IconComponent={SiTypescript} className='size-10' />
        <Icon IconComponent={SiFigma} className='size-10' />
        <Icon IconComponent={SiTailwindcss} className='size-10' />
        <Icon IconComponent={SiNextdotjs} className='size-10' />
        <Icon IconComponent={SiReact} className='size-10' />
        <Icon IconComponent={SiPython} className='size-10' />
        <Icon IconComponent={SiPostgresql} className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <Icon IconComponent={SiPrisma} className='size-10' />
        <Icon IconComponent={SiMysql} className='size-10' />
        <Icon IconComponent={SiFirebase} className='size-10' />
        <Icon IconComponent={SiGit} className='size-10' />
        <Icon IconComponent={SiVite} className='size-10' />
        <Icon IconComponent={SiVisualstudiocode} className='size-10' />
        <Icon IconComponent={SiCloudflare} className='size-10' />
        <Icon IconComponent={SiMarkdown} className='size-10' />
        <Icon IconComponent={SiJest} className='size-10' />
        <Icon IconComponent={SiNodedotjs} className='size-10' />
      </Marquee>
    </div>
  )
}
export default StacksCard

