"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart, MapPin, Clock, Users, CandlestickChartIcon as Candle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: "Live Gaza Updates",
      description: "Real-time news and updates from Gaza and Palestine",
      href: "/live-updates",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      title: "Interactive Gaza Map",
      description: "Explore refugee camps, historic sites, and current situation",
      href: "/map",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Real Voices",
      description: "Stories and testimonies from Palestinians worldwide",
      href: "/voices",
      color: "text-white",
    },
    {
      icon: Candle,
      title: "Digital Candle Wall",
      description: "Light a candle and leave a message of solidarity",
      href: "/candles",
      color: "text-yellow-500",
    },
    {
      icon: Heart,
      title: "How You Can Help",
      description: "Verified ways to support Palestine and Palestinians",
      href: "/help",
      color: "text-red-500",
    },
    {
      icon: Globe,
      title: "Palestinian Culture",
      description: "Discover the rich heritage, art, and traditions",
      href: "/culture",
      color: "text-green-500",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-12 bg-gradient-to-b from-black via-white to-green-600 flag-wave rounded-sm shadow-lg" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="text-white">Voices of </span>
              <span className="text-red-500">Palestine</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              This is not just code. It's resistance through design.
              <br />
              <span className="text-red-400 font-semibold">Stand with Palestine.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/candles">Light a Candle</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
              >
                <Link href="/timeline">Explore History</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-red-500">77</div>
              <div className="text-gray-400">Years of Resistance</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-green-500">2.3M</div>
              <div className="text-gray-400">People in Gaza</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-white">14M</div>
              <div className="text-gray-400">Palestinians Worldwide</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-yellow-500">∞</div>
              <div className="text-gray-400">Hope & Solidarity</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-serif">Explore Palestine</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover stories, history, culture, and ways to support the Palestinian people
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href}>
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <CardContent className="p-6 text-center space-y-4">
                      <feature.icon className={`h-12 w-12 mx-auto ${feature.color}`} />
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-green-900/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold font-serif">Every Voice Matters</h2>
            <p className="text-xl text-gray-300">
              Join millions around the world in solidarity with Palestine. Share your story, light a candle, or learn
              about Palestinian culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/voices/submit">Share Your Voice</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/help">Take Action</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
