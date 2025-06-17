import Link from "next/link"
import { Heart, Globe, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold text-white">Voices of Palestine</span>
            </div>
            <p className="text-gray-400 text-sm">
              This is not just code. It's resistance through design. Stand with Palestine.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="space-y-2">
              <Link href="/timeline" className="block text-gray-400 hover:text-white transition-colors">
                History Timeline
              </Link>
              <Link href="/map" className="block text-gray-400 hover:text-white transition-colors">
                Gaza Map
              </Link>
              <Link href="/voices" className="block text-gray-400 hover:text-white transition-colors">
                Real Voices
              </Link>
              <Link href="/culture" className="block text-gray-400 hover:text-white transition-colors">
                Palestinian Culture
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Take Action</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                How to Help
              </Link>
              <Link href="/candles" className="block text-gray-400 hover:text-white transition-colors">
                Light a Candle
              </Link>
              <Link href="/voices/submit" className="block text-gray-400 hover:text-white transition-colors">
                Share Your Voice
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:info@voicesofpalestine.org" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/voices-of-palestine"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Voices of Palestine. Built with ❤️ for justice and awareness.</p>
        </div>
      </div>
    </footer>
  )
}
