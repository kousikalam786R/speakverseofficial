import type { Metadata } from 'next'
import { AlertCircle, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy - SpeakVerse',
  description: 'SpeakVerse Refund Policy - Learn about our refund process for subscriptions and purchases.',
}

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
            Refund Policy
          </h1>
          <p className="text-center text-gray-600 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p>
                At SpeakVerse, we want you to be completely satisfied with your purchase. This Refund Policy explains 
                how refunds are handled for subscriptions and in-app purchases made through the Google Play Store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Google Play Store Refunds</h2>
              <p className="mb-4">
                Since SpeakVerse is distributed through the Google Play Store, all purchases and subscriptions are 
                processed by Google. Refund requests must be submitted through Google Play&apos;s refund system.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Important Note</p>
                    <p className="text-blue-800">
                      Refund requests are handled directly by Google Play Store. SpeakVerse does not process refunds 
                      directly. Please use Google Play&apos;s refund system for all refund requests.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">How to Request a Refund</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Open the Google Play Store app on your Android device
                </li>
                <li>
                  Tap the menu icon (three horizontal lines) and select &quot;Account&quot;
                </li>
                <li>
                  Tap &quot;Purchase history&quot; to view your recent purchases
                </li>
                <li>
                  Find the SpeakVerse subscription or purchase you want to refund
                </li>
                <li>
                  Tap &quot;Report a problem&quot; and select a reason for the refund
                </li>
                <li>
                  Follow the on-screen instructions to complete your refund request
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Eligible for Refund</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Within 48 hours of purchase (Google Play policy)</li>
                    <li>Accidental purchases</li>
                    <li>Technical issues preventing app usage</li>
                    <li>Unauthorized purchases</li>
                    <li>Duplicate charges</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Not Eligible</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>After 48 hours of purchase</li>
                    <li>If you&apos;ve used premium features extensively</li>
                    <li>If subscription period has ended</li>
                    <li>Violation of Terms of Service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription Cancellation</h2>
              <p className="mb-4">
                You can cancel your subscription at any time without requesting a refund. Canceling your subscription 
                means it will not renew at the end of the current billing period, but you will retain access to 
                premium features until the end of the period you&apos;ve already paid for.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Cancel Subscription</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Open the Google Play Store app</li>
                <li>Tap the menu icon and select &quot;Subscriptions&quot;</li>
                <li>Find SpeakVerse in your list of subscriptions</li>
                <li>Tap &quot;Cancel subscription&quot;</li>
                <li>Confirm the cancellation</li>
              </ol>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6 rounded">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Canceling your subscription does not automatically refund your payment. 
                  You will continue to have access to premium features until the end of your current billing period.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Time</h2>
              <p>
                Refund processing times vary depending on Google Play&apos;s policies and your payment method:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Credit/Debit Cards:</strong> 3-5 business days</li>
                <li><strong>Google Play Balance:</strong> Usually instant</li>
                <li><strong>Bank Transfers:</strong> 5-10 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Circumstances</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Issues</h3>
              <p className="mb-4">
                If you experience technical issues that prevent you from using the app, please contact our support 
                team at <a href="mailto:support@speakverse.app" className="text-indigo-600 hover:text-indigo-700">support@speakverse.app</a> 
                before requesting a refund. We may be able to resolve the issue quickly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unauthorized Purchases</h3>
              <p>
                If you believe a purchase was made without your authorization, contact Google Play support immediately 
                and report the unauthorized transaction. You should also contact us at support@speakverse.app so we 
                can assist with securing your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about refunds or need assistance with the refund process, please contact us:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> <a href="mailto:support@speakverse.app" className="text-indigo-600 hover:text-indigo-700">support@speakverse.app</a>
              </p>
              <p className="mt-2">
                <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Refund Policy from time to time. We will notify you of any changes by posting the 
                new Refund Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this 
                Refund Policy periodically for any changes.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

