import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - SpeakVerse',
  description: 'SpeakVerse Terms & Conditions - Read our terms of service and user agreement.',
}

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
            Terms & Conditions
          </h1>
          <p className="text-center text-gray-600 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the SpeakVerse mobile application (&quot;App&quot;), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of SpeakVerse for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
                license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained in the App</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
              <p className="mt-3">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                by SpeakVerse at any time. Upon terminating your viewing of these materials or upon the termination of 
                this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials, including your 
                password. You agree to accept responsibility for all activities that occur under your account. You 
                agree to notify us immediately of any unauthorized use of your account or any other breach of security. 
                SpeakVerse will not be liable for any loss or damage arising from your failure to comply with this section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
              <p className="mb-3">You agree not to use the App to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harass, abuse, or harm other users</li>
                <li>Post inappropriate, offensive, or illegal content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                <li>Interfere with or disrupt the operation of the App or servers or networks connected to the App</li>
                <li>Transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature</li>
                <li>Collect or store personal data about other users without their express permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h2>
              <p>
                Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy, which 
                also governs your use of the App, to understand our practices regarding the collection and use of your 
                information. By using the App, you consent to the collection and use of information in accordance with 
                our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by SpeakVerse and are protected 
                by international copyright, trademark, patent, trade secret, and other intellectual property laws. The 
                App may contain content provided by third parties, including other users. SpeakVerse is not responsible 
                for and does not endorse any third-party content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Subscription and Payment Terms</h2>
              <p className="mb-3">
                If you purchase a subscription to access premium features, the following terms apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions are billed on a recurring basis (monthly or annually) as selected by you</li>
                <li>All fees are charged through the Google Play Store or Apple App Store</li>
                <li>Your subscription will automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
                <li>You can manage your subscription and turn off auto-renewal in your account settings</li>
                <li>No refunds will be provided for the current subscription period, except as required by law or as specified in our Refund Policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the App immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon 
                termination, your right to use the App will immediately cease. If you wish to terminate your account, 
                you may simply discontinue using the App or delete the App from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall SpeakVerse, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use 
                of or inability to use the App. Some jurisdictions do not allow the exclusion or limitation of incidental 
                or consequential damages, so the above limitation or exclusion may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer</h2>
              <p>
                The information on the App is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, 
                SpeakVerse excludes all representations, warranties, conditions, and terms relating to the App and 
                the use of the App (including, without limitation, any warranties implied by law in respect of 
                satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
                revision is material, we will provide at least 30 days notice prior to any new terms taking effect. 
                What constitutes a material change will be determined at our sole discretion. By continuing to access 
                or use our App after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which 
                SpeakVerse operates, without regard to its conflict of law provisions. Our failure to enforce any 
                right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:support@speakverse.app" className="text-indigo-600 hover:text-indigo-700">support@speakverse.app</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

