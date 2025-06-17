import type { CandleMessage, Testimony, NewsItem, GazaLocation } from "./types"

export const mockCandles: CandleMessage[] = [
  {
    id: "1",
    name: "Sarah",
    message: "Sending love and solidarity from Canada. Free Palestine! 🇵🇸",
    country: "Canada",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    approved: true,
  },
  {
    id: "2",
    name: "Ahmed",
    message: "From the river to the sea, Palestine will be free. Standing with you always.",
    country: "Jordan",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    approved: true,
  },
  {
    id: "3",
    name: "Maria",
    message: "Praying for peace and justice for all Palestinian families. You are not alone.",
    country: "Spain",
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    approved: true,
  },
]

export const mockTestimonies: Testimony[] = [
  {
    id: "1",
    name: "Layla from Gaza",
    story:
      "Despite everything, we continue to hope. Our children still play, still dream, still believe in a better tomorrow.",
    location: "Gaza City",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    approved: true,
  },
  {
    id: "2",
    name: "Omar from Ramallah",
    story:
      "Education is our resistance. Every book we read, every lesson we teach, is an act of defiance against oppression.",
    location: "Ramallah, West Bank",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    approved: true,
  },
]

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "International Community Calls for Humanitarian Aid",
    summary: "Global leaders unite in calling for immediate humanitarian assistance to Gaza residents.",
    source: "International News",
    url: "#",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    location: "Gaza",
  },
  {
    id: "2",
    title: "Solidarity Protests Continue Worldwide",
    summary: "Peaceful demonstrations in support of Palestinian rights continue across major cities globally.",
    source: "Global Reports",
    url: "#",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
  },
]

export const mockGazaLocations: GazaLocation[] = [
  {
    id: "1",
    name: "Gaza City",
    type: "city",
    coordinates: [31.5017, 34.4668],
    description: "The largest city in the Gaza Strip and administrative capital.",
    population: 700000,
    status: "active",
  },
  {
    id: "2",
    name: "Jabalia Refugee Camp",
    type: "refugee_camp",
    coordinates: [31.5314, 34.483],
    description: "One of the largest refugee camps in Gaza, established in 1948.",
    population: 114000,
    status: "active",
  },
]
