'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mic, Briefcase, Trophy, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Real-time AI Conversations',
    description: 'Practice speaking English with advanced AI that adapts to your level and provides natural, engaging conversations.',
  },
  {
    icon: Mic,
    title: 'Pronunciation Feedback',
    description: 'Get instant feedback on your pronunciation with detailed analysis to help you speak more clearly and confidently.',
  },
  {
    icon: Briefcase,
    title: 'Interview Simulation',
    description: 'Prepare for job interviews with realistic interview scenarios and practice answering common questions.',
  },
  {
    icon: Trophy,
    title: 'Speaking Challenges',
    description: 'Complete daily speaking challenges to build consistency and track your progress over time.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and insights into your speaking patterns and fluency.',
  },
]

export default function Features() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Better Learning
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to improve your English speaking skills in one comprehensive app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

