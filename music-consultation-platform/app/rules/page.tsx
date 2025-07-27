import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, XCircle, Clock, Video, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RulesPage() {
  const consultationRules = [
    {
      icon: Heart,
      title: "Respectful Language & Behavior Required",
      description:
        "Maintain a courteous, professional, and supportive demeanor. We're here to help you grow, and respect is fundamental to that process.",
    },
    {
      icon: Clock,
      title: "Sessions Are Time-Limited",
      description:
        "Your session duration (1hr or 2hr) is strictly observed. Arrive on time to maximize your creative breakthrough opportunity.",
    },
    {
      icon: Video,
      title: "Google Meet Etiquette",
      description:
        "Join with good audio/video quality, stable internet, and in a quiet environment. Mute when not speaking to avoid distractions.",
    },
    {
      icon: CheckCircle,
      title: "Come Prepared for Growth",
      description:
        "Bring your music files, specific questions, and an open mind. The more prepared you are, the more breakthrough moments you'll experience.",
    },
    {
      icon: CheckCircle,
      title: "Embrace Constructive Feedback",
      description:
        "Creative growth requires honest feedback. Stay receptive to suggestions and remember that critique helps you evolve as an artist.",
    },
    {
      icon: CheckCircle,
      title: "Ask Questions Freely",
      description:
        "This is your time to learn and grow. Don't hesitate to ask for clarification, examples, or deeper explanations of concepts.",
    },
  ]

  const prohibitedBehaviors = [
    {
      icon: XCircle,
      title: "No Inappropriate or Offensive Language",
      description:
        "Discriminatory, abusive, or offensive language will result in immediate session termination and potential account blocking.",
    },
    {
      icon: XCircle,
      title: "No Harassment or Disrespectful Behavior",
      description:
        "Any form of harassment, discrimination, or disrespectful behavior towards the advisor or the creative process is strictly prohibited.",
    },
    {
      icon: XCircle,
      title: "No Unauthorized Recording",
      description:
        "Do not record the session without explicit permission. Official recordings are available upon request through proper channels.",
    },
    {
      icon: XCircle,
      title: "No Sharing Copyrighted Material",
      description:
        "Only share original compositions or music you have rights to. Avoid sharing copyrighted material that could create legal issues.",
    },
    {
      icon: XCircle,
      title: "No Disruptive or Aggressive Behavior",
      description:
        "Interrupting, talking over, or displaying aggressive behavior disrupts the creative flow and learning environment.",
    },
  ]

  const consequences = [
    {
      level: "First Warning",
      action: "Verbal warning with opportunity to correct behavior and continue session",
      color: "text-yellow-400",
    },
    {
      level: "Second Violation",
      action: "Immediate session termination without refund",
      color: "text-orange-400",
    },
    {
      level: "Severe Violations",
      action: "Immediate termination and permanent ban from future bookings",
      color: "text-red-400",
    },
    {
      level: "Repeated Offenses",
      action: "Account suspension and potential legal action if necessary",
      color: "text-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Session Rules & Guidelines
            </h1>
            <p className="text-xl text-gray-300">Creating a safe, respectful space for creative breakthroughs</p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 bg-red-900/20 border-red-600">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-200">
              <strong>⚠️ Important:</strong> Violators can be blocked from future sessions. These guidelines ensure a
              productive and respectful environment for all artists seeking creative breakthroughs.
            </AlertDescription>
          </Alert>

          {/* Expected Behavior */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                Expected Behavior & Session Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {consultationRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg">
                    <rule.icon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{rule.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Behaviors */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <XCircle className="mr-3 h-6 w-6 text-red-500" />
                Prohibited Behaviors - Violators Can Be Blocked
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {prohibitedBehaviors.map((behavior, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-red-900/10 border border-red-800/30 rounded-lg"
                  >
                    <behavior.icon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{behavior.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{behavior.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="mr-3 h-6 w-6 text-orange-500" />
                Consequences for Violations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {consequences.map((consequence, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${consequence.color.replace("text-", "bg-")}`}
                    ></div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${consequence.color}`}>{consequence.level}</h4>
                      <p className="text-gray-300 text-sm">{consequence.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Session Policies */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Technical Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Stable internet connection (minimum 5 Mbps)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Working camera and microphone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Quiet, distraction-free environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Google Meet compatible device</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Session Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Sessions are time-limited (1hr or 2hr as chosen)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Reschedule up to 24 hours in advance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>No-shows forfeit the full session fee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Session recordings available upon request</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Creative Breakthrough Promise */}
          <Card className="mt-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">💡 Our Creative Breakthrough Promise</h3>
              <p className="text-gray-300 leading-relaxed">
                These guidelines exist to protect the sacred creative space we build together. When everyone follows
                these rules, magic happens - creative blocks dissolve, artistic confidence grows, and breakthrough
                moments become inevitable. Your respect for these guidelines directly contributes to your own creative
                transformation.
              </p>
            </CardContent>
          </Card>

          {/* Contact for Issues */}
          <Alert className="mt-8 bg-blue-900/20 border-blue-600">
            <Shield className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-200">
              <strong>Need Help?</strong> Questions about these guidelines or need to report an issue? Contact us at{" "}
              <strong>support@musicconsult.com</strong> or through our contact form. We're here to ensure your creative
              breakthrough journey is safe and productive.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  )
}
