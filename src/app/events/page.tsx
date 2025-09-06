"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Clock, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatEventDate } from "@/lib/utils"

const events = [
  {
    id: "1",
    title: "Web Development Workshop",
    description: "Learn modern web development with React, Next.js, and TypeScript. Perfect for beginners and intermediate developers.",
    date: "2025-01-15T10:00:00",
    location: "Computer Lab 1",
    type: "workshop" as const,
    status: "upcoming" as const,
    maxParticipants: 30,
    currentParticipants: 15,
    registrationRequired: true,
    registrationOpen: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: "2",
    title: "AI & Machine Learning Seminar",
    description: "Exploring the latest trends in artificial intelligence and machine learning with industry experts.",
    date: "2025-01-22T14:00:00",
    location: "Auditorium",
    type: "seminar" as const,
    status: "upcoming" as const,
    maxParticipants: 100,
    currentParticipants: 45,
    registrationRequired: true,
    registrationOpen: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: "3",
    title: "Coding Competition",
    description: "Test your programming skills in our annual coding competition. Prizes for top performers!",
    date: "2025-02-01T09:00:00",
    location: "Online",
    type: "competition" as const,
    status: "upcoming" as const,
    maxParticipants: 50,
    currentParticipants: 32,
    registrationRequired: true,
    registrationOpen: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: "4",
    title: "Cybersecurity Workshop",
    description: "Learn about cybersecurity fundamentals, ethical hacking, and security best practices.",
    date: "2025-02-08T10:00:00",
    location: "Computer Lab 2",
    type: "workshop" as const,
    status: "upcoming" as const,
    maxParticipants: 25,
    currentParticipants: 8,
    registrationRequired: true,
    registrationOpen: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: "5",
    title: "Data Science Meetup",
    description: "Monthly meetup for data science enthusiasts. Share projects, discuss trends, and network.",
    date: "2025-01-10T16:00:00",
    location: "Library Conference Room",
    type: "meeting" as const,
    status: "past" as const,
    maxParticipants: 20,
    currentParticipants: 18,
    registrationRequired: false,
    registrationOpen: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native and Flutter.",
    date: "2025-02-15T10:00:00",
    location: "Computer Lab 3",
    type: "workshop" as const,
    status: "upcoming" as const,
    maxParticipants: 20,
    currentParticipants: 12,
    registrationRequired: true,
    registrationOpen: true,
    image: "/api/placeholder/400/250"
  }
]

const eventTypes = ["all", "workshop", "seminar", "competition", "meeting", "conference"]
const eventStatuses = ["all", "upcoming", "past"]

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === "all" || event.type === selectedType
    const matchesStatus = selectedStatus === "all" || event.status === selectedStatus
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesStatus && matchesSearch
  })

  const upcomingEvents = events.filter(event => event.status === "upcoming")
  const pastEvents = events.filter(event => event.status === "past")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Events & Workshops
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              Join us for exciting workshops, seminars, competitions, and networking events 
              designed to enhance your skills and expand your knowledge.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {upcomingEvents.length}
              </div>
              <div className="text-gray-600">Upcoming Events</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                {pastEvents.length}
              </div>
              <div className="text-gray-600">Past Events</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {events.reduce((sum, event) => sum + (event.currentParticipants || 0), 0)}
              </div>
              <div className="text-gray-600">Total Participants</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {eventStatuses.map(status => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Events" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                        event.type === "workshop" ? "bg-blue-100 text-blue-800" :
                        event.type === "seminar" ? "bg-green-100 text-green-800" :
                        event.type === "competition" ? "bg-purple-100 text-purple-800" :
                        event.type === "meeting" ? "bg-orange-100 text-orange-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {event.type}
                      </span>
                      <span className={`text-sm font-medium ${
                        event.status === "upcoming" ? "text-green-600" : "text-gray-500"
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatEventDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      {event.maxParticipants && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {event.currentParticipants}/{event.maxParticipants} participants
                        </div>
                      )}
                      <div className="pt-4">
                        {event.registrationRequired ? (
                          <Button 
                            className="w-full" 
                            variant={event.registrationOpen ? "default" : "outline"}
                            disabled={!event.registrationOpen}
                          >
                            {event.registrationOpen ? "Register Now" : "Registration Closed"}
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full">
                            Learn More
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Miss Out!
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Stay updated with our latest events and workshops. Join our community today!
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Subscribe to Updates
              </Button>
              <a
                href="/contact"
                className="text-lg font-semibold text-white hover:text-blue-100"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
