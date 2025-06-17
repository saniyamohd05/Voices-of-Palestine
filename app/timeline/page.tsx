"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Zap, Palette, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { TimelineEvent } from "@/lib/types"

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    year: 1948,
    title: "The Nakba (Catastrophe)",
    description:
      "Mass displacement of Palestinians during the Arab-Israeli War. Over 750,000 Palestinians were forced to flee their homes, creating the largest refugee population in the world.",
    category: "nakba",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    year: 1967,
    title: "Six-Day War",
    description:
      "Israel occupies the West Bank, Gaza Strip, and East Jerusalem. This occupation continues to this day, affecting millions of Palestinian lives.",
    category: "war",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    year: 1987,
    title: "First Intifada",
    description:
      "Palestinian uprising against Israeli occupation. Characterized by civil disobedience, strikes, and stone-throwing protests that captured global attention.",
    category: "resistance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    year: 1993,
    title: "Oslo Accords",
    description:
      "Peace agreement between Israel and Palestine. While promising, the accords failed to deliver lasting peace and Palestinian statehood.",
    category: "politics",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    year: 2000,
    title: "Second Intifada",
    description:
      "Second Palestinian uprising following the failure of peace negotiations. Marked by increased violence and international intervention attempts.",
    category: "resistance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    year: 2007,
    title: "Gaza Blockade Begins",
    description:
      "Israel and Egypt impose a blockade on Gaza, severely restricting movement of people and goods. The blockade continues today.",
    category: "war",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "7",
    year: 2018,
    title: "Great March of Return",
    description:
      "Peaceful protests in Gaza demanding the right of return for Palestinian refugees. Met with deadly force, resulting in hundreds of casualties.",
    category: "resistance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "8",
    year: 2023,
    title: "Current Crisis",
    description:
      "Ongoing conflict and humanitarian crisis in Gaza. International calls for ceasefire and humanitarian aid continue.",
    category: "war",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categoryConfig = {
  nakba: { icon: Users, color: "bg-red-600", label: "Nakba" },
  war: { icon: Zap, color: "bg-orange-600", label: "Conflict" },
  resistance: { icon: Users, color: "bg-green-600", label: "Resistance" },
  politics: { icon: Building, color: "bg-blue-600", label: "Politics" },
  culture: { icon: Palette, color: "bg-purple-600", label: "Culture" },
}

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredEvents, setFilteredEvents] = useState(timelineData)

  useEffect(() => {
    if (selectedCategory) {
      setFilteredEvents(timelineData.filter((event) => event.category === selectedCategory))
    } else {
      setFilteredEvents(timelineData)
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Calendar className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">History Timeline</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From 1948 to today: Key events in Palestinian history that shaped the ongoing struggle for justice and
            freedom.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Events
          </button>
          {Object.entries(categoryConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === key ? `${config.color} text-white` : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-white to-green-500" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const config = categoryConfig[event.category]
              const IconComponent = config.icon

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${config.color} shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Event Card */}
                  <Card className="flex-1 bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl font-bold text-red-500 font-serif">{event.year}</span>
                            <Badge variant="secondary" className={`${config.color} text-white`}>
                              {config.label}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{event.description}</p>
                        </div>
                        {event.image && (
                          <div className="md:w-48 flex-shrink-0">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-32 md:h-24 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-red-900/20 to-green-900/20 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4 font-serif">History Continues to Unfold</h2>
          <p className="text-gray-300 mb-6">
            The Palestinian struggle for justice, freedom, and dignity continues today. Learn how you can support and
            stand in solidarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/help"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
            >
              How You Can Help
            </motion.a>
            <motion.a
              href="/voices"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-colors"
            >
              Read Real Voices
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
