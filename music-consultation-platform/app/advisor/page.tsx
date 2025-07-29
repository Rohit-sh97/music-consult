import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Music,
  Award,
  Users,
  Calendar,
  Heart,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AdvisorPage() {
  const genres = [
    { name: "Pop", description: "Catchy hooks & emotional storytelling" },
    { name: "Sad Pop", description: "Melancholic beauty & vulnerable lyrics" },
    {
      name: "Heartbreak EDM",
      description: "Electronic emotion & cathartic drops",
    },
    {
      name: "Storytelling Rap",
      description: "Narrative flow & authentic voice",
    },
  ];

  const tools = [
    "FL Studio",
    "Serum",
    "Vital",
    "Swar VST",
    "Ableton Live",
    "Logic Pro",
    "Pro Tools",
    "Kontakt",
    "Omnisphere",
    "FabFilter",
    "Waves",
    "Auto-Tune",
  ];

  const reviews = [
    {
      name: "KalaSur",
      rating: 5,
      text: "Rohit helped me break through the worst creative block of my life. In one session, I went from feeling hopeless to having a clear direction for my next album.",
      genre: "Sad Pop",
      date: "1 week ago",
      struggle: "Creative block",
    },
    {
      name: "Blessi",
      rating: 5,
      text: "The emotional depth Rohit brought to my storytelling completely transformed my rap style. I finally found my authentic voice.",
      genre: "Storytelling Rap",
      date: "2 weeks ago",
      struggle: "Finding voice",
    },
    {
      name: "MC Kaal",
      rating: 5,
      text: "I was struggling to make my EDM tracks emotionally impactful. Rohit showed me how to infuse real feeling into electronic music.",
      genre: "Heartbreak EDM",
      date: "3 weeks ago",
      struggle: "Emotional production",
    },
    {
      name: "Riya",
      rating: 5,
      text: "After months of writer's block, one session with Rohit unlocked a flood of creativity. I've written 5 songs since our call.",
      genre: "Pop",
      date: "1 month ago",
      struggle: "Writer's block",
    },
  ];

  const achievements = [
    { icon: Users, label: "Artists Helped", value: "10+" },
    { icon: Music, label: "Years Experience", value: "4+" },
    { icon: Award, label: "Breakthrough Sessions", value: "15+" },
    { icon: Calendar, label: "Success Rate", value: "98%" },
  ];

  const specializations = [
    {
      icon: Heart,
      title: "Emotional Breakthrough",
      description:
        "Transform personal struggles into powerful artistic expression",
    },
    {
      icon: Zap,
      title: "Creative Block Dissolution",
      description: "Proven techniques to unlock stuck creative energy",
    },
    {
      icon: Target,
      title: "Authentic Voice Discovery",
      description: "Find and develop your unique artistic identity",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 mb-8">
           <CardContent className="p-4 sm:p-6 md:p-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
    {/* Avatar and Stars */}
    <div className="text-center lg:text-left">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto lg:mx-0 mb-4 sm:mb-6">
        <Image
          src="/webdp.png"
          alt="RohitSharma - Music Advisor"
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-purple-500"
        />
        <div className="absolute -bottom-1.5 -right-1.5 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-gray-800 flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4 text-sm sm:text-base">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
        <span className="ml-2 text-gray-300">(4.9/5 from 12 reviews)</span>
      </div>
    </div>

    {/* Text content */}
    <div className="lg:col-span-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-snug text-center lg:text-left">
        Rohit Sharma
      </h1>

      <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed text-center lg:text-left">
        Creative Breakthrough Specialist & Music Producer
      </p>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed tracking-wide text-center lg:text-left">
        I've personally faced the creative struggles that many artists go
        through — doubt, blocks, and the pressure to be perfect. With over 45
        original songs across different genres, I’ve learned that honesty and
        emotion are what truly make music connect. My goal is to help you clear
        your mind, find your unique sound, and turn your creative blocks into
        real, powerful art.
      </p>

<div className="flex justify-center lg:justify-start">
  <Link href="/booking" className="w-full sm:w-auto">
    <Button className="w-full sm:w-auto flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base leading-tight">
      <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
      Book Your Breakthrough Session
    </Button>
  </Link>
</div>
    </div>
  </div>
</CardContent>

          </Card>

          {/* Achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-center">
                How I Help Struggling Artists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <spec.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{spec.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Musical Background */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Music className="mr-2 h-6 w-6 text-purple-400" />
                  My Journey & Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    From Struggle to Breakthrough
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    My own creative journey began with years of frustration,
                    self-doubt, and artistic blocks. After hitting rock bottom
                    creatively, I developed the breakthrough techniques that not
                    only saved my own artistic career but have since helped
                    hundreds of struggling artists find their voice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Professional Experience
                  </h4>
                  <p className="text-gray-300 text-sm">
                    • 4+ years as a music producer and creative mentor
                    <br />• Guitar & piano player
                    <br />• Produced tracks for Labels
                    <br />• Developed breakthrough methodology used by 10+
                    artists
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Experience</h4>
                  <p className="text-gray-300 text-sm">
                    • 45+ original songs across multiple genres
                    <br />• Hands-on experience with FL Studio, Serum, Vital,
                    Swar VST
                    <br />• YouTube channel sharing self-made music and creative
                    insights
                    <br />• Focused on real emotion, not trends — music that
                    feels true
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Genres & Tools */}
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Genres I Help With
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {genres.map((genre, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg"
                      >
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {genre.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {genre.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Tools & Software I Use
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews */}
          <Card className="bg-gray-800 border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="text-white">
                Breakthrough Success Stories
              </CardTitle>
              <p className="text-gray-300">
                Real artists who transformed their creative struggles into
                artistic breakthroughs
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {review.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {review.genre} • {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm italic mb-3">
                      "{review.text}"
                    </p>
                    <Badge
                      variant="outline"
                      className="border-purple-500 text-purple-400 text-xs"
                    >
                      Overcame: {review.struggle}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="mt-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for Your Creative Breakthrough?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't let creative blocks define your artistic journey. Book a
                session and discover how to transform your struggles into your
                greatest musical strengths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Session Now
                  </Button>
                </Link>
                <Link href="/rules">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
                  >
                    Review Session Guidelines
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
