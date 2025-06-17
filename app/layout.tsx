import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Voices of Palestine - Stand with Palestine",
  description: "A platform for Palestinian awareness, stories, and resistance through design.",
  keywords: ["Palestine", "Gaza", "awareness", "solidarity", "resistance"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cairo.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
