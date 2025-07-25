import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harish Goswami - Digital Marketing Expert | SEO Executive",
  description:
    "Professional digital marketing expert and SEO executive. Specializing in SEO optimization, Google Ads, content strategy, and social media marketing solutions.",
  keywords:
    "Digital Marketing, SEO Executive, Google Ads, PPC, Content Strategy, Social Media Marketing, Harish Goswami",
  authors: [{ name: "Harish Goswami" }],
  openGraph: {
    title: "Harish Goswami - Digital Marketing Expert",
    description: "Professional digital marketing expert and SEO executive with 5+ years of experience.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
