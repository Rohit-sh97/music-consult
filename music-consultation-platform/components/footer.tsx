import Link from "next/link"
import { Music, Mail, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">MusicConsult</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming musical struggles into artistic breakthroughs. Helping artists overcome creative blocks and
              discover their authentic voice through personalized 1-on-1 consultations.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/advisor" className="block text-gray-400 hover:text-white transition-colors">
                Meet Rohit
              </Link>
              <Link href="/booking" className="block text-gray-400 hover:text-white transition-colors">
                Book a Session
              </Link>
              <Link href="/rules" className="block text-gray-400 hover:text-white transition-colors">
                Guidelines
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact & Support</h3>
            <div className="space-y-2">
              <Link
                href="mailto:support@musicconsult.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Rohit9730@musicconsult.com
              </Link>
              <p className="text-gray-400 text-sm">Response time: 24-48 hours</p>
              <p className="text-gray-400 text-sm">Available: Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MusicConsult. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
