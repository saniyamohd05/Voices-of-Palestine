"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { collection, addDoc, query, orderBy, limit, onSnapshot, where } from "firebase/firestore"
import { db, isFirebaseEnabled } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CandlestickChartIcon as Candle, Heart, Globe, Send, AlertCircle } from "lucide-react"
import type { CandleMessage } from "@/lib/types"

// Mock data for when Firebase is not available
const mockCandles: CandleMessage[] = [
  {
    id: "1",
    name: "Sarah",
    message: "Sending love and solidarity from Canada. Free Palestine! 🇵🇸",
    country: "Canada",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    approved: true,
  },
  {
    id: "2",
    name: "Ahmed",
    message: "From the river to the sea, Palestine will be free. Standing with you always.",
    country: "Jordan",
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    approved: true,
  },
  {
    id: "3",
    name: "Maria",
    message: "Praying for peace and justice for all Palestinian families. You are not alone.",
    country: "Spain",
    timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
    approved: true,
  },
  {
    id: "4",
    name: "Omar",
    message: "The world is watching. Your struggle is our struggle. Free Palestine!",
    country: "United Kingdom",
    timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
    approved: true,
  },
  {
    id: "5",
    name: "Fatima",
    message: "May Allah protect all Palestinians. Your resilience inspires us all.",
    country: "Morocco",
    timestamp: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
    approved: true,
  },
]

export default function CandlesPage() {
  const [candles, setCandles] = useState<CandleMessage[]>(mockCandles)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    country: "",
  })

  useEffect(() => {
    if (isFirebaseEnabled && db) {
      const q = query(collection(db, "candles"), where("approved", "==", true), orderBy("timestamp", "desc"), limit(50))

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const candleData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate() || new Date(),
          })) as CandleMessage[]
          setCandles(candleData)
        },
        (error) => {
          console.warn("Firebase query failed, using mock data:", error)
          setCandles(mockCandles)
        },
      )

      return () => unsubscribe()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message || !formData.country) return

    setIsSubmitting(true)

    try {
      if (isFirebaseEnabled && db) {
        await addDoc(collection(db, "candles"), {
          ...formData,
          timestamp: new Date(),
          approved: false, // Requires moderation
        })
        alert("Your candle has been lit! It will appear after moderation.")
      } else {
        // Mock submission for demo purposes
        const newCandle: CandleMessage = {
          id: Date.now().toString(),
          ...formData,
          timestamp: new Date(),
          approved: true, // Auto-approve in demo mode
        }
        setCandles((prev) => [newCandle, ...prev])
        alert("Your candle has been lit! (Demo mode - Firebase not configured)")
      }

      setFormData({ name: "", message: "", country: "" })
    } catch (error) {
      console.error("Error lighting candle:", error)
      alert("Error lighting candle. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Candle className="h-16 w-16 text-yellow-500 candle-flicker" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Digital Candle Wall</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Light a candle in solidarity with Palestine. Each flame represents hope, remembrance, and our collective
            call for justice and peace.
          </p>

          {/* Firebase Status Indicator */}
          {!isFirebaseEnabled && (
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg max-w-md mx-auto">
              <div className="flex items-center gap-2 text-yellow-400 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>Demo mode - Configure Firebase for full functionality</span>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Light a Candle Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gray-900/50 border-gray-800 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500">
                  <Candle className="h-5 w-5" />
                  Light Your Candle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                      placeholder="Your country"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message of Solidarity</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Share your message of hope and solidarity..."
                      className="bg-gray-800 border-gray-700 min-h-[100px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                  >
                    {isSubmitting ? (
                      "Lighting Candle..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Light Candle
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Candles Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                {candles.length} Candles Lit
              </h2>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="h-4 w-4" />
                <span>From around the world</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {candles.map((candle, index) => (
                  <motion.div
                    key={candle.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-800/30 hover:border-yellow-600/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Candle className="h-6 w-6 text-yellow-500 candle-flicker flex-shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-white truncate">{candle.name}</span>
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <Globe className="h-3 w-3" />
                                {candle.country}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{candle.message}</p>
                            <div className="text-xs text-gray-500 mt-2">{candle.timestamp.toLocaleDateString()}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {candles.length === 0 && (
              <div className="text-center py-12">
                <Candle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Be the first to light a candle...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
