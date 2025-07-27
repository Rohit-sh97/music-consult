"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ExternalLink, Mail, Calendar, Copy } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PaymentSuccessPage() {
  const [meetLink, setMeetLink] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Simulate fetching Google Meet link from backend
    setTimeout(() => {
      setMeetLink("https://meet.google.com/abc-defg-hij")
    }, 1000)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(meetLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openMeetInNewTab = () => {
    if (meetLink) {
      window.open(meetLink, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>

              {/* Success Message */}
              <h1 className="text-3xl font-bold mb-4 text-white">✅ Payment Successful!</h1>
              <p className="text-gray-300 mb-8 text-lg">
                Your creative breakthrough session has been booked successfully. Get ready to transform your musical
                struggles into art!
              </p>

              {/* Session Details */}
              <div className="bg-gray-700 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold mb-4 text-white text-center">Session Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time:</span>
                    <span className="text-white">2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">1 Hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Genre Focus:</span>
                    <span className="text-white">Sad Pop</span>
                  </div>
                </div>
              </div>

              {/* Google Meet Link */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 mb-8 border border-blue-500/20">
                <h3 className="font-semibold mb-4 text-white flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Your Google Meet Link
                </h3>

                {meetLink ? (
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-blue-400 text-sm break-all">{meetLink}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="ml-2 text-gray-400 hover:text-white"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    {copied && <p className="text-green-400 text-sm">Link copied to clipboard!</p>}

                    <Button onClick={openMeetInNewTab} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Google Meet
                    </Button>
                  </div>
                ) : (
                  <div className="animate-pulse">
                    <div className="bg-gray-700 rounded-lg h-10 mb-4"></div>
                    <p className="text-gray-400">Generating your meeting link...</p>
                  </div>
                )}
              </div>

              {/* Email Reminder */}
              <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center mb-2">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="font-semibold text-yellow-200">Check Your Email</span>
                </div>
                <p className="text-yellow-200 text-sm">
                  A confirmation email with all session details and the Google Meet link has been sent to your email
                  address.
                </p>
              </div>

              {/* Next Steps */}
              <div className="text-left mb-8">
                <h3 className="font-semibold mb-4 text-white">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    You'll receive a confirmation email with all session details
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>A calendar invite
                    will be sent to help you remember the session
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Join the Google Meet 5 minutes before your scheduled time
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Come prepared with your music files and specific questions
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Return to Home
                </Button>
                <Button
                  onClick={() => (window.location.href = "/rules")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Review Session Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
