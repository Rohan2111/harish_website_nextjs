"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "testimonials", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-play testimonials
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const skills = [
    { name: "SEO Optimization", level: 95, icon: "🔍" },
    { name: "Google Ads & PPC", level: 90, icon: "📊" },
    { name: "Content Strategy", level: 88, icon: "✍️" },
    { name: "Social Media Marketing", level: 92, icon: "📱" },
    { name: "Analytics & Reporting", level: 85, icon: "📈" },
    { name: "Email Marketing", level: 80, icon: "📧" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce SEO Campaign",
      description: "Increased organic traffic by 250% and revenue by 180% for a leading fashion e-commerce store.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["SEO", "E-commerce", "Analytics"],
      results: ["250% traffic increase", "180% revenue growth", "150+ quality backlinks"],
      duration: "12 months",
      client: "Fashion Forward Store",
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      description: "Generated 500+ qualified leads through targeted Google Ads and content marketing.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["PPC", "Lead Generation", "Content Marketing"],
      results: ["500+ qualified leads", "35% conversion improvement", "40% cost reduction"],
      duration: "8 months",
      client: "CloudTech Solutions",
    },
    {
      id: 3,
      title: "Local Business Growth",
      description: "Improved local search visibility by 300% and increased foot traffic by 150%.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Local SEO", "Google My Business", "Reviews"],
      results: ["300% visibility improvement", "150% traffic increase", "4.8/5 rating"],
      duration: "10 months",
      client: "Taste of India Chain",
    },
    {
      id: 4,
      title: "Social Media Brand Building",
      description: "Built engaged community of 50K+ followers and increased brand awareness by 400%.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Social Media", "Brand Building", "Community"],
      results: ["50K+ followers", "400% brand awareness", "300+ UGC posts"],
      duration: "14 months",
      client: "FitLife Wellness",
    },
    {
      id: 5,
      title: "Conversion Rate Optimization",
      description: "Improved website conversion rate by 85% through A/B testing and UX improvements.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CRO", "A/B Testing", "UX Design"],
      results: ["85% conversion improvement", "60% cart abandonment reduction", "40% AOV increase"],
      duration: "6 months",
      client: "TechGear Store",
    },
    {
      id: 6,
      title: "Content Marketing Success",
      description: "Created viral content strategy generating 2M+ views and 15K+ backlinks.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Content Marketing", "Viral Marketing", "PR"],
      results: ["2M+ content views", "15K+ backlinks", "500% brand mentions"],
      duration: "18 months",
      client: "InnovateTech Startup",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Solutions",
      avatar: "SM",
      rating: 5,
      text: "Harish transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and our ROI has never been better. His strategic approach and attention to detail are exceptional.",
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Director, GrowthCorp",
      avatar: "RK",
      rating: 5,
      text: "Working with Harish was a game-changer for our business. His PPC campaigns generated over 500 qualified leads in the first quarter alone. Professional, reliable, and results-driven!",
    },
    {
      name: "Anita Patel",
      role: "Founder, Digital Innovate",
      avatar: "AP",
      rating: 5,
      text: "Harish's content strategy helped us establish thought leadership in our industry. Our blog now attracts thousands of visitors monthly, and we've seen a significant increase in brand recognition.",
    },
    {
      name: "Michael Stevens",
      role: "E-commerce Manager, ShopPro",
      avatar: "MS",
      rating: 5,
      text: "The SEO audit Harish provided was incredibly detailed and actionable. After implementing his recommendations, our website ranking improved dramatically. Highly recommended!",
    },
    {
      name: "David Lee",
      role: "CTO, InnovateHub",
      avatar: "DL",
      rating: 5,
      text: "Harish's digital marketing expertise helped us scale from startup to market leader. His data-driven approach and innovative strategies delivered exceptional results beyond our expectations.",
    },
  ]

  const services = [
    {
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies including keyword research, on-page optimization, and technical SEO audits to improve your search rankings.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
    },
    {
      icon: "📊",
      title: "Google Ads & PPC",
      description:
        "Maximize ROI with targeted Google Ads campaigns, keyword bidding strategies, and conversion optimization techniques.",
      features: ["Campaign Setup", "Keyword Bidding", "Ad Copy Testing", "Conversion Tracking"],
    },
    {
      icon: "✍️",
      title: "Content Strategy",
      description:
        "Develop engaging content that resonates with your audience and drives conversions through strategic planning.",
      features: ["Content Planning", "Blog Strategy", "Social Content", "Video Marketing"],
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage your audience across all major social platforms with targeted campaigns.",
      features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social"],
    },
    {
      icon: "📈",
      title: "Analytics & Reporting",
      description:
        "Comprehensive website analysis covering performance, user experience, and conversion optimization opportunities.",
      features: ["GA4 Setup", "Custom Dashboards", "Performance Reports", "ROI Analysis"],
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description:
        "Create automated email campaigns that nurture leads and drive conversions with personalized messaging.",
      features: ["Email Automation", "List Building", "A/B Testing", "Segmentation"],
    },
  ]

  const newLocal = "Harish Goswami"
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Harish Goswami
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "projects", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="px-4 py-4 space-y-2">
                {["home", "about", "skills", "projects", "testimonials", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                <img 
                  src="/app/Batman_Profile_Icon.webp" // Update this path
                  alt={newLocal}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Harish Goswami
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
              >
                Digital Marketing Expert | SEO Executive
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Driving Growth Through Strategic Digital Marketing & SEO Excellence
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
                onClick={() => scrollToSection("projects")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate digital marketer with expertise in driving online growth and maximizing ROI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Digital Marketing Professional</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in digital marketing and SEO, I help businesses establish a strong
                online presence and achieve measurable growth. My expertise spans across various digital channels, from
                search engine optimization to social media marketing.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about data-driven strategies that deliver real results. Whether it's improving search
                rankings, increasing conversion rates, or building brand awareness, I approach every project with
                creativity and analytical precision.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: "🔍", label: "SEO Expert" },
                  { icon: "📊", label: "PPC Specialist" },
                  { icon: "✍️", label: "Content Strategist" },
                  { icon: "📈", label: "Analytics Pro" },
                  { icon: "📱", label: "Social Media" },
                  { icon: "📧", label: "Email Marketing" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Glassmorphism card */}
                <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-300">
                        HG
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">5+ Years Experience</h4>
                      <p className="text-gray-600 dark:text-gray-300">Digital Marketing Excellence</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing skills with proven track record of success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Proficiency</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Successful digital marketing campaigns and SEO projects that delivered exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-1 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <span>{project.duration}</span>
                      <span>{project.client}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What my clients say about working with me</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white">
                    <CardContent className="p-8 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
                          {testimonials[currentTestimonial].avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                          <div className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAutoPlay(!autoPlay)}
                className="text-white hover:bg-white/20 rounded-full p-2 ml-4"
              >
                {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to grow your business? Let's discuss your digital marketing needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm always excited to work on new projects and help businesses achieve their digital marketing goals.
                  Whether you need SEO optimization, PPC campaigns, or a complete digital strategy, I'm here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "harish.goswami@example.com" },
                  { icon: Phone, label: "Phone", value: "+91 8920752691" },
                  { icon: MapPin, label: "Location", value: "Rohini, Delhi-110089, India" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
                      <div className="text-gray-600 dark:text-gray-300">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/in/harishgoswami" },
                    { icon: Twitter, href: "https://twitter.com/harishgoswami" },
                    { icon: Instagram, href: "https://instagram.com/harishgoswami" },
                    { icon: Github, href: "https://github.com/harishgoswami" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                        <Input
                          placeholder="Your full name"
                          className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Service of Interest
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="ppc">Google Ads & PPC</SelectItem>
                          <SelectItem value="content">Content Strategy</SelectItem>
                          <SelectItem value="social">Social Media Marketing</SelectItem>
                          <SelectItem value="audit">Website Audit</SelectItem>
                          <SelectItem value="email">Email Marketing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message *</label>
                      <Textarea
                        placeholder="Tell me about your project and goals..."
                        rows={5}
                        className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-3"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Harish Goswami
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Digital Marketing Expert & SEO Executive passionate about helping businesses grow through strategic
                online marketing solutions.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Instagram, Github].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Google Ads & PPC
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Content Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Social Media Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📧 harish.goswami@example.com</li>
                <li>📱 +91 8920752691</li>
                <li>📍 Rohini, Delhi-110089, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Harish Goswami. All rights reserved. | Designed with ❤️ for digital growth</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
