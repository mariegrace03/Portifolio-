"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact', primary: true },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900">NMG</h1>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            {sections.map((s) => (
              s.primary ? (
                <a key={s.href} href={s.href} className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
                  {s.label}
                </a>
              ) : (
                <a key={s.href} href={s.href} className="text-gray-700 hover:text-emerald-600 font-medium transition">
                  {s.label}
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {sections.map((s) => (
              s.primary ? (
                <a key={s.href} href={s.href} onClick={() => setIsOpen(false)} className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-center">
                  {s.label}
                </a>
              ) : (
                <a key={s.href} href={s.href} onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-emerald-600 font-medium">
                  {s.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
