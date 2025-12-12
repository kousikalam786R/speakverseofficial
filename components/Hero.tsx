'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your English{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Speaking App
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              SpeakVerse helps learners improve fluency through real-time AI conversations, 
              pronunciation feedback, speaking challenges, and guided lessons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Download SpeakVerse on Google Play"
              >
                <Download className="h-5 w-5" />
                <span>Download on Google Play</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 sm:w-80 h-[500px] sm:h-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-[3rem] p-2 shadow-2xl">
                  <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="h-full bg-gradient-to-br from-indigo-50 to-blue-50 p-6 flex flex-col items-center justify-center">
                      <div className="mb-6 flex items-center justify-center">
                        <Image 
                          src="/logo.png" 
                          alt="SpeakVerse" 
                          width={200} 
                          height={64}
                          className="h-auto w-auto max-w-[200px] object-contain"
                        />
                      </div>
                     
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

