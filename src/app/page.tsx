"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Calendar, BookOpen, Code, Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredEvents = [
  {
    id: "1",
    title: "Web Development Workshop",
    description: "Learn modern web development with React and Next.js",
    date: "2025-01-15",
    type: "workshop" as const,
    status: "upcoming" as const,
    location: "Computer Lab 1",
    registrationRequired: true,
    registrationOpen: true,
  },
  {
    id: "2", 
    title: "AI & Machine Learning Seminar",
    description: "Exploring the latest trends in artificial intelligence",
    date: "2025-01-22",
    type: "seminar" as const,
    status: "upcoming" as const,
    location: "Auditorium",
    registrationRequired: true,
    registrationOpen: true,
  },
  {
    id: "3",
    title: "Coding Competition",
    description: "Test your programming skills in our annual competition",
    date: "2025-02-01",
    type: "competition" as const,
    status: "upcoming" as const,
    location: "Online",
    registrationRequired: true,
    registrationOpen: true,
  },
]

const stats = [
  { label: "Active Members", value: "150+", icon: Users },
  { label: "Events This Year", value: "25+", icon: Calendar },
  { label: "Resources Available", value: "100+", icon: BookOpen },
  { label: "Projects Completed", value: "50+", icon: Code },
]

const quotes = [
  {
    text: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  }
]

function DynamicQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000) // Change quote every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-80 flex items-center justify-center">
      <motion.div
        key={currentQuote}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-full max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl text-blue-600 mb-4"
        >
          "
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 italic leading-relaxed"
        >
          {quotes[currentQuote].text}
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-gray-600 font-semibold"
        >
          — {quotes[currentQuote].author}
        </motion.div>
      </motion.div>

      {/* Quote indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {quotes.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentQuote 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Global fixed video background at the very top (behind all content) */}
      <div className="fixed inset-x-0 top-0 h-screen -z-10 overflow-hidden">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.log('Video failed to load:', e);
            (e.currentTarget as HTMLVideoElement).style.display = 'none'
          }}
          onLoadStart={() => console.log('Video started loading')}
          onCanPlay={() => console.log('Video can start playing')}
        >
          <source src="/bg_video_acm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Full-Screen Hero Section (content sits above video) */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Content with higher z-index */}
        <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100 
              }}
              className="flex items-center justify-center gap-6 flex-wrap"
            >
              <Image
                src="/acm_image.png"
                alt="ACM"
                width={120}
                height={120}
                className="drop-shadow-2xl"
                priority
              />
              <h1
                className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl leading-none drop-shadow-2xl"
                style={{ fontFamily: 'Mont, sans-serif' }}
              >
                Tula's Institute
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              className="mt-8 text-xl leading-8 text-white sm:text-2xl lg:text-3xl max-w-3xl mx-auto drop-shadow-lg"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="inline-block"
              >
                Empowering the next generation of computing professionals through
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="inline-block"
              >
                education, innovation, and community.
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 70
              }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/about">
                <Button size="lg" className="text-xl px-10 py-4 h-auto bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-xl">
                  Discover Our Mission
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg" className="text-xl px-10 py-4 h-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                  Explore Events
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional content sections - now properly positioned below the fold */}
      <div className="relative">
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join us for exciting workshops, seminars, and competitions designed to enhance your skills.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          📍 {event.location}
                        </p>
                        {event.registrationRequired && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              Registration {event.registrationOpen ? "Open" : "Closed"}
                            </span>
                            <Button size="sm" variant={event.registrationOpen ? "default" : "outline"}>
                              {event.registrationOpen ? "Register" : "Closed"}
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/events">
                <Button variant="outline" size="lg">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a group of design-driven, goal-focused creators, developers, and innovators 
                who believe that the details make all the difference. We love to create, we love to 
                solve, we love to collaborate, and we love to turn amazing ideas into reality.
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <Trophy className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Excellence</h3>
                  <p className="mt-2 text-gray-600">
                    Striving for the highest standards in everything we do
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Community</h3>
                  <p className="mt-2 text-gray-600">
                    Building strong relationships and collaborative networks
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <Star className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Innovation</h3>
                  <p className="mt-2 text-gray-600">
                    Pushing boundaries and exploring new possibilities
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Animated Quotes Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
                Inspiring Words
              </h2>
              
              <DynamicQuotes />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Join Our Community?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Become part of ACM Tula's Institute and unlock your potential in computing and technology.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                    Become a Member
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="text-lg font-semibold text-white hover:text-blue-100 transition-colors">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}