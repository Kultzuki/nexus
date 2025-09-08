"use client"

import { motion } from "framer-motion"
import { Users, Target, Eye, Award, BookOpen, Code, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Providing quality education and learning opportunities in computer science and technology."
  },
  {
    icon: Code,
    title: "Innovation",
    description: "Fostering creativity and innovation in computing through hands-on projects and research."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a strong community of computing professionals and enthusiasts."
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "Striving for excellence in all our activities and maintaining high standards."
  }
]

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Faculty Advisor",
    description: "Professor of Computer Science with 15+ years of experience in software engineering.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Alex Chen",
    role: "President",
    description: "Senior Computer Science student passionate about AI and machine learning.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    description: "Software Engineering student with expertise in web development and UI/UX design.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Michael Rodriguez",
    role: "Treasurer",
    description: "Computer Science student focused on cybersecurity and data science.",
    image: "/api/placeholder/300/300"
  }
]

export default function AboutPage() {
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
              About ACM Tula's Institute
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              Empowering the next generation of computing professionals through 
              education, innovation, and community at Tula's Institute.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To advance computing as a science and profession by providing opportunities 
                for students to develop their technical skills, leadership abilities, and 
                professional networks. We aim to foster innovation, collaboration, and 
                excellence in computer science education and research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading student chapter that shapes the future of computing 
                education and innovation at Tula's Institute. We envision a community 
                where every student has access to cutting-edge technology, mentorship, 
                and opportunities to make a meaningful impact in the world of computing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do at ACM Tula's Institute
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <value.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our activities and initiatives that make a difference
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Workshops & Seminars</h3>
              <p className="text-gray-600">
                Regular hands-on workshops covering the latest technologies, programming languages, 
                and industry best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <Code className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coding Competitions</h3>
              <p className="text-gray-600">
                Monthly coding challenges and annual competitions to sharpen programming skills 
                and problem-solving abilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Networking Events</h3>
              <p className="text-gray-600">
                Connect with industry professionals, alumni, and fellow students through 
                networking events and career fairs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-orange-50 p-8 rounded-lg"
            >
              <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Projects</h3>
              <p className="text-gray-600">
                Collaborative research projects in AI, machine learning, cybersecurity, 
                and other cutting-edge computing fields.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-red-50 p-8 rounded-lg"
            >
              <Lightbulb className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Labs</h3>
              <p className="text-gray-600">
                Access to state-of-the-art computing labs and resources for personal 
                and group projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-indigo-50 p-8 rounded-lg"
            >
              <Award className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship Program</h3>
              <p className="text-gray-600">
                One-on-one mentorship opportunities with senior students and industry 
                professionals for career guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The dedicated individuals who make ACM Tula's Institute possible
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-semibold text-blue-600">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join Our Community?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Become part of ACM Tula's Institute and unlock your potential in computing and technology.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/events"
                className="text-lg font-semibold text-white hover:text-blue-100"
              >
                View Upcoming Events <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
