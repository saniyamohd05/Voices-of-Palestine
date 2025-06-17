export interface CandleMessage {
  id: string
  name: string
  message: string
  country: string
  timestamp: Date
  approved: boolean
}

export interface Testimony {
  id: string
  name: string
  story: string
  location: string
  photo?: string
  timestamp: Date
  approved: boolean
}

export interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  image?: string
  category: "nakba" | "war" | "resistance" | "politics" | "culture"
}

export interface NewsItem {
  id: string
  title: string
  summary: string
  source: string
  url: string
  timestamp: Date
  location?: string
}

export interface GazaLocation {
  id: string
  name: string
  type: "refugee_camp" | "city" | "historic_site" | "destroyed_area"
  coordinates: [number, number]
  description: string
  population?: number
  status: "active" | "destroyed" | "damaged"
}
