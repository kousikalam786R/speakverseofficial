import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SpeakVerse',
  description: 'SpeakVerse Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-600 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Welcome to SpeakVerse (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring 
                  you have a positive experience on our app. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our mobile application and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email address, profile picture)</li>
                  <li>Audio recordings of your speaking practice sessions</li>
                  <li>Progress data and learning analytics</li>
                  <li>Feedback and support communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Usage data (features used, time spent, session duration)</li>
                  <li>Performance data (app crashes, errors, performance metrics)</li>
                  <li>Location data (if you grant permission)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your speaking practice sessions and provide AI-powered feedback</li>
                  <li>Personalize your learning experience</li>
                  <li>Track your progress and provide analytics</li>
                  <li>Send you important updates and notifications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information. 
                  Your audio recordings and data are encrypted in transit and at rest. However, no method of transmission over 
                  the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our app (subject to confidentiality agreements)</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:support@speakverse.app" className="text-indigo-600 hover:text-indigo-700">support@speakverse.app</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  Our app is not intended for children under 13 years of age. We do not knowingly collect personal information 
                  from children under 13. If you believe we have collected information from a child under 13, please contact us 
                  immediately so we can delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have data protection laws that differ from those in your country. We take appropriate 
                  safeguards to ensure your data is protected in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> <a href="mailto:support@speakverse.app" className="text-indigo-600 hover:text-indigo-700">support@speakverse.app</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

