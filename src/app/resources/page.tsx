"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Code, Search, Filter, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resources = [
  {
    id: "1",
    title: "Complete Web Development Guide",
    description: "A comprehensive guide covering HTML, CSS, JavaScript, React, and Node.js from beginner to advanced level.",
    type: "tutorial" as const,
    category: "web-dev" as const,
    difficulty: "beginner" as const,
    url: "#",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    author: "ACM Tula's Institute Team",
    publishedAt: "2025-01-01",
    downloads: 150
  },
  {
    id: "2",
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of machine learning, including supervised and unsupervised learning algorithms.",
    type: "video" as const,
    category: "ai" as const,
    difficulty: "intermediate" as const,
    url: "#",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Data Science"],
    author: "Dr. Sarah Johnson",
    publishedAt: "2025-01-05",
    downloads: 89
  },
  {
    id: "3",
    title: "Data Structures and Algorithms",
    description: "Essential data structures and algorithms with implementations in multiple programming languages.",
    type: "documentation" as const,
    category: "programming" as const,
    difficulty: "intermediate" as const,
    url: "#",
    tags: ["Algorithms", "Data Structures", "C++", "Java", "Python"],
    author: "Prof. Michael Chen",
    publishedAt: "2025-01-03",
    downloads: 203
  },
  {
    id: "4",
    title: "Cybersecurity Best Practices",
    description: "Essential cybersecurity practices for developers and system administrators.",
    type: "article" as const,
    category: "general" as const,
    difficulty: "beginner" as const,
    url: "#",
    tags: ["Security", "Best Practices", "Network Security"],
    author: "Alex Rodriguez",
    publishedAt: "2025-01-07",
    downloads: 67
  },
  {
    id: "5",
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile applications using Flutter framework.",
    type: "tutorial" as const,
    category: "mobile" as const,
    difficulty: "intermediate" as const,
    url: "#",
    tags: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
    author: "Priya Sharma",
    publishedAt: "2025-01-10",
    downloads: 124
  },
  {
    id: "6",
    title: "Database Design Principles",
    description: "Learn database design, normalization, and optimization techniques.",
    type: "video" as const,
    category: "data-science" as const,
    difficulty: "beginner" as const,
    url: "#",
    tags: ["SQL", "Database Design", "MySQL", "PostgreSQL"],
    author: "Dr. Emily Watson",
    publishedAt: "2025-01-12",
    downloads: 98
  },
  {
    id: "7",
    title: "Git and Version Control",
    description: "Master Git version control system for collaborative software development.",
    type: "tutorial" as const,
    category: "programming" as const,
    difficulty: "beginner" as const,
    url: "#",
    tags: ["Git", "Version Control", "GitHub", "Collaboration"],
    author: "ACM Tula's Institute Team",
    publishedAt: "2025-01-08",
    downloads: 178
  },
  {
    id: "8",
    title: "Cloud Computing with AWS",
    description: "Introduction to Amazon Web Services and cloud computing concepts.",
    type: "documentation" as const,
    category: "general" as const,
    difficulty: "intermediate" as const,
    url: "#",
    tags: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
    author: "Michael Rodriguez",
    publishedAt: "2025-01-15",
    downloads: 76
  }
]

const resourceTypes = ["all", "tutorial", "video", "documentation", "article", "tool"]
const categories = ["all", "programming", "data-science", "ai", "web-dev", "mobile", "general"]
const difficulties = ["all", "beginner", "intermediate", "advanced"]

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || resource.difficulty === selectedDifficulty
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesType && matchesCategory && matchesDifficulty && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tutorial": return BookOpen
      case "video": return Video
      case "documentation": return FileText
      case "article": return FileText
      case "tool": return Code
      default: return BookOpen
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800"
      case "intermediate": return "bg-yellow-100 text-yellow-800"
      case "advanced": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

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
              Learning Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              Access a comprehensive collection of tutorials, documentation, videos, 
              and tools to enhance your computing skills and knowledge.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {resources.length}
              </div>
              <div className="text-gray-600">Total Resources</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                {resources.filter(r => r.type === "tutorial").length}
              </div>
              <div className="text-gray-600">Tutorials</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {resources.filter(r => r.type === "video").length}
              </div>
              <div className="text-gray-600">Videos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {resources.reduce((sum, r) => sum + r.downloads, 0)}
              </div>
              <div className="text-gray-600">Total Downloads</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {resourceTypes.map(type => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Levels" : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type)
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium text-gray-600 capitalize">
                            {resource.type}
                          </span>
                        </div>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                          {resource.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{resource.tags.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>By {resource.author}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hand-picked resources recommended by our team
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {resources.slice(0, 4).map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type)
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <TypeIcon className="h-6 w-6 text-blue-600" />
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {resource.type} • {resource.difficulty} • {resource.downloads} downloads
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Resource
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contribute Your Resources
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Have a great tutorial, video, or documentation to share? Help grow our community!
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Submit Resource
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
