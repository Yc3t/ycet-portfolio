import '@/app/globals.css'  // Adjust this path if necessary
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Laptop, Component, FileText } from 'lucide-react'

const HEADER_LINKS = [
  { href: '/', text: 'Home', icon: Laptop },
  { href: '/projects', text: 'Projects', icon: Component },
  { href: '/blog', text: 'Blog', icon: FileText }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="z-10 flex justify-center p-4">
      <nav className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 
                      shadow-[0_4px_10px_rgba(138,43,226,0.2)] 
                      border border-purple-300/20">
        <ul className='flex gap-4'>
          {HEADER_LINKS.map((link) => {
            const isActive = link.href === pathname
            const Icon = link.icon
            return (
              <li key={link.text}>
                <Link
                  href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    isActive
                      ? 'text-white shadow-[0_0_5px_rgba(138,43,226,0.4)] border border-purple-300/40'
                      : 'text-white-600 hover:text-white hover:shadow-[0_0_5px_rgba(138,43,226,0.2)] hover:border hover:border-purple-300/20'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{link.text}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
