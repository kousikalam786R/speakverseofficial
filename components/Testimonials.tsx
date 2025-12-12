'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'SpeakVerse has transformed my confidence in speaking English. The AI conversations feel so natural, and the pronunciation feedback is incredibly helpful.',
  },
  {
    name: 'Raj Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: 'I love the interview simulation feature! It helped me prepare for my job interview and I got the position. This app is a game-changer.',
  },
  {
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'The daily challenges keep me motivated, and I can see my progress improving every week. Highly recommend SpeakVerse to anyone learning English.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who are improving their English speaking skills with SpeakVerse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="h-8 w-8 text-indigo-500 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

