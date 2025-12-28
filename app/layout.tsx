import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeakVerse - Your English Speaking App',
  description: 'SpeakVerse helps learners improve fluency through real-time AI conversations, pronunciation feedback, speaking challenges, and guided lessons.',
  keywords: 'English speaking, AI conversation, pronunciation, language learning, speaking practice',
  authors: [{ name: 'SpeakVerse' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'SpeakVerse - Your English Speaking App',
    description: 'Improve your English speaking skills with AI-powered conversations and real-time feedback.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpeakVerse - Your English Speaking App',
    description: 'Improve your English speaking skills with AI-powered conversations and real-time feedback.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

