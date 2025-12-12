'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="SpeakVerse Home">
            <Image 
              src="/logo.png"
              alt="SpeakVerse - Your English Speaking App" 
              width={350} 
              height={105}
              className="h-20 sm:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Contact
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Download SpeakVerse on Google Play"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="#"
                className="flex w-full items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

