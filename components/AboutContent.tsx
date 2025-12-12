'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb } from 'lucide-react'

export default function AboutContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">SpeakVerse</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              We&apos;re on a mission to make spoken English accessible to everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Make spoken English accessible globally through innovative AI technology that provides 
                personalized, real-time speaking practice for learners at every level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  SpeakVerse was born from the recognition that traditional language learning methods 
                  often fall short when it comes to speaking practice. Many learners can read and write 
                  English well, but struggle with speaking confidently. We set out to solve this problem 
                  by creating an AI-powered platform that provides unlimited, personalized speaking practice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We envision a world where language barriers don&apos;t limit opportunities. By making 
                  high-quality English speaking practice accessible to everyone, we&apos;re helping learners 
                  unlock new career opportunities, connect with global communities, and achieve their 
                  personal and professional goals.
                </p>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Stand For</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                  <p className="text-gray-600">
                    We believe everyone deserves access to quality English speaking practice, regardless 
                    of their location, background, or financial situation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    We leverage cutting-edge AI technology to provide personalized learning experiences 
                    that adapt to each learner&apos;s unique needs and progress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Effectiveness</h4>
                  <p className="text-gray-600">
                    Our methods are backed by language learning research and designed to deliver 
                    measurable improvements in speaking fluency and confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

