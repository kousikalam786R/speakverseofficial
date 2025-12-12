import type { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Us - SpeakVerse',
  description: 'Learn about SpeakVerse\'s mission to make spoken English accessible globally through AI-powered learning.',
}

export default function AboutPage() {
  return <AboutContent />
}

