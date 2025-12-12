import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'SpeakVerse - Your English Speaking App',
  description: 'Improve your English speaking skills with AI-powered conversations, pronunciation feedback, and speaking challenges.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  )
}

