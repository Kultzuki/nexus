"use client"

import { motion } from "framer-motion"
import Link from "next/link"
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              ACM Nexus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl"
            >
              Empowering the next generation of computing professionals through 
              education, innovation, and community at Tula's Institute.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg" className="text-lg px-8 py-3">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Explore Events
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
            <Button variant="outline" size="lg">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
              <div className="text-center">
                <div className="flex justify-center">
                  <Trophy className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Excellence</h3>
                <p className="mt-2 text-gray-600">
                  Striving for the highest standards in everything we do
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Community</h3>
                <p className="mt-2 text-gray-600">
                  Building strong relationships and collaborative networks
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Star className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  Pushing boundaries and exploring new possibilities
                </p>
              </div>
            </div>
          </div>
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
              Become part of ACM Nexus and unlock your potential in computing and technology.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact" className="text-lg font-semibold text-white hover:text-blue-100">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}