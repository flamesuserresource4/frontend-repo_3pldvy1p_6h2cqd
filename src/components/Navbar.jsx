import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Why Us', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Tech', href: '#tech' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" onClick={(e)=>handleNavClick(e,'#top')} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500"></div>
          <span className="font-semibold text-slate-900">Flames Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e)=>handleNavClick(e, item.href)}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e)=>handleNavClick(e,'#contact')}
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:shadow-md hover:bg-blue-700 transition-all"
          >
            Get a Quote
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e, item.href)}
                className="py-2 text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e)=>handleNavClick(e,'#contact')}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
