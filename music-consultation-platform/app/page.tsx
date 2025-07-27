import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Music, Headphones, Play, Heart, Zap, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  const whyItWorks = [
    {
      icon: Heart,
      title: "Personalized Guidance",
      description:
        "Every artist's struggle is unique. Get tailored advice that speaks to your specific creative blocks and challenges.",
    },
    {
      icon: Zap,
      title: "Breakthrough Moments",
      description:
        "Transform frustration into inspiration with proven techniques that have helped hundreds of artists find their voice.",
    },
    {
      icon: Users,
      title: "Safe Creative Space",
      description:
        "Share your vulnerabilities and creative fears in a judgment-free environment designed for growth and learning.",
    },
  ]

  const testimonials = [
    {
      name: "MC kaal",
      genre: "Sad Pop",
      text: "I was stuck in a creative rut for months. One session helped me break through and write my most authentic song yet.",
      rating: 5,
      struggle: "Writer's block",
    },
    {
      name: "Blessi",
      genre: "Storytelling Rap",
      text: "The guidance on lyrical structure and emotional storytelling completely changed how I approach my music.",
      rating: 5,
      struggle: "Lyrical depth",
    },
    {
      name: "KalaSur",
      genre: "Heartbreak EDM",
      text: "Finally learned how to channel my emotions into production. My tracks now have the emotional impact I always wanted.",
      rating: 5,
      struggle: "Emotional production",
    },
  ]

  const genres = [
    { name: "Pop", color: "from-pink-500 to-rose-500", description: "Catchy melodies & emotional depth" },
    { name: "Sad Pop", color: "from-blue-500 to-indigo-500", description: "Melancholic beauty & vulnerability" },
    { name: "Heartbreak EDM", color: "from-purple-500 to-pink-500", description: "Electronic emotion & energy" },
    { name: "Storytelling Rap", color: "from-orange-500 to-red-500", description: "Narrative flow & authenticity" },
  ]

  const tools = ["FL Studio", "Serum", "Vital", "Swar VST", "Ableton Live", "Logic Pro", "Pro Tools", "Kontakt"]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Turn Your Music Struggles into Art
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get 1-on-1 advice on lyrics, music production, and creativity. Break through creative blocks and find your
              authentic voice.
            </p>
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full"
              >
                <Music className="mr-2 h-5 w-5" />
                Book a Session
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-4">✨ Instant booking • Google Meet sessions • Pay upfront</p>
          </div>
        </div>
      </section>

      {/* Why This Platform Works */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Platform Works for Struggling Artists</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every creative journey has its challenges. Here's how we help you transform obstacles into opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyItWorks.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Profile Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-4">
                      <Image
                        src="/webdp.png"
                        alt="Music Advisor"
                        width={128}
                        height={128}
                        className="rounded-full object-cover border-4 border-purple-500"
                      />
                    </div>
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-300">(4.9/5)</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Rohit Sharma
                    </h3>
                    <p className="text-gray-300 mb-4">Music Producer & Creative Mentor</p>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      I've made over 45 original songs across different genres.
I run my own YouTube channel.
I believe in honesty while making music — it's not just 3 minutes of sound, it's real emotion.
                    </p>
                    <Link href="/advisor">
                      <Button
                        variant="outline"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                      >
                        View Full Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Genres I Specialize In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {genres.map((genre, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${genre.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{genre.name}</h3>
                  <p className="text-sm text-gray-400">{genre.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Tools & Software</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-gray-200 hover:bg-gray-700 px-4 py-2 text-sm"
              >
                <Headphones className="mr-2 h-4 w-4" />
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Real artists who transformed their struggles into breakthrough moments
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.genre}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-purple-500 text-purple-400 text-xs">
                      {testimonial.struggle}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Break Through Your Creative Block?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of artists who have transformed their struggles into their greatest artistic achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full"
              >
                <Play className="mr-2 h-5 w-5" />
                Book Your Session Now
              </Button>
            </Link>
            <Link href="/advisor">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                Learn More About Me
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Instant booking
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Secure payment
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Google Meet sessions
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
