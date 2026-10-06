"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">NMG</h3>
            <p className="text-gray-400">
              Full Stack Developer creating clean, functional and intuitive web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-green-500 transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-500 transition">About</Link></li>
              <li><Link href="/skills" className="text-gray-400 hover:text-green-500 transition">Skills</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-green-500 transition">Projects</Link></li>
              <li><Link href="/experience" className="text-gray-400 hover:text-green-500 transition">Experience</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-green-500 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>graceniyigena34@gmail.com</li>
              <li>+25 791 168 136</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/mariegrace03" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com/in/marie-grace-niyigena" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com/marie_grace_niyigena" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marie Grace Niyigena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
