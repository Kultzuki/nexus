"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Mail, Linkedin, Github, Award, Code, BookOpen, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Faculty Advisor",
    department: "Computer Science",
    description: "Professor of Computer Science with 15+ years of experience in software engineering and research. Passionate about mentoring students and advancing computing education.",
    image: "/api/placeholder/300/300",
    email: "sarah.johnson@tulas.edu",
    linkedin: "sarah-johnson-cs",
    github: "sarahjohnson",
    expertise: ["Software Engineering", "Research", "Mentorship"],
    achievements: ["15+ Years Experience", "50+ Research Papers", "ACM Fellow"]
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "President",
    department: "Computer Science",
    description: "Senior Computer Science student passionate about AI and machine learning. Leading the chapter with innovative ideas and strong technical skills.",
    image: "/api/placeholder/300/300",
    email: "alex.chen@tulas.edu",
    linkedin: "alex-chen-ai",
    github: "alexchen",
    expertise: ["Machine Learning", "Python", "Leadership"],
    achievements: ["Dean's List", "Hackathon Winner", "Research Assistant"]
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Vice President",
    department: "Software Engineering",
    description: "Software Engineering student with expertise in web development and UI/UX design. Committed to creating inclusive and accessible technology solutions.",
    image: "/api/placeholder/300/300",
    email: "priya.sharma@tulas.edu",
    linkedin: "priya-sharma-dev",
    github: "priyasharma",
    expertise: ["Web Development", "UI/UX Design", "React"],
    achievements: ["Design Award Winner", "Open Source Contributor", "Mentor"]
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "Treasurer",
    department: "Computer Science",
    description: "Computer Science student focused on cybersecurity and data science. Ensuring the chapter's financial health while pursuing cutting-edge research.",
    image: "/api/placeholder/300/300",
    email: "michael.rodriguez@tulas.edu",
    linkedin: "michael-rodriguez-cs",
    github: "michaelrodriguez",
    expertise: ["Cybersecurity", "Data Science", "Python"],
    achievements: ["Security Certification", "Data Science Project", "Scholarship Recipient"]
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Secretary",
    department: "Information Technology",
    description: "IT student specializing in network administration and cloud computing. Keeping our chapter organized and connected through technology.",
    image: "/api/placeholder/300/300",
    email: "emily.watson@tulas.edu",
    linkedin: "emily-watson-it",
    github: "emilywatson",
    expertise: ["Network Administration", "Cloud Computing", "DevOps"],
    achievements: ["Network+ Certified", "Cloud Project Lead", "Event Coordinator"]
  },
  {
    id: 6,
    name: "David Kim",
    role: "Events Coordinator",
    department: "Computer Science",
    description: "Computer Science student with a passion for organizing events and building community. Creating memorable experiences for all chapter members.",
    image: "/api/placeholder/300/300",
    email: "david.kim@tulas.edu",
    linkedin: "david-kim-cs",
    github: "davidkim",
    expertise: ["Event Planning", "Community Building", "JavaScript"],
    achievements: ["Event Success Rate 95%", "Community Builder Award", "Volunteer Leader"]
  }
]

const stats = [
  { label: "Team Members", value: "6", icon: Users },
  { label: "Years Combined Experience", value: "25+", icon: Award },
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Students Mentored", value: "200+", icon: BookOpen }
]

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <CardHeader className="pb-4">
          <motion.div
            className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 mb-4 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="h-16 w-16 text-blue-600" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {member.name}
            </CardTitle>
            <CardDescription className="font-semibold text-blue-600 text-lg">
              {member.role}
            </CardDescription>
            <p className="text-sm text-gray-500 mt-1">{member.department}</p>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-sm text-gray-600 mb-4 leading-relaxed"
          >
            {member.description}
          </motion.p>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-4"
          >
            {member.expertise.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.1 }}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="space-y-1 mb-4"
          >
            {member.achievements.map((achievement, achievementIndex) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 + achievementIndex * 0.1 }}
                className="flex items-center justify-center text-xs text-gray-500"
              >
                <Award className="h-3 w-3 text-yellow-500 mr-1" />
                {achievement}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="flex justify-center space-x-3"
          >
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300"
              onClick={() => window.open(`mailto:${member.email}`)}
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300"
              onClick={() => window.open(`https://linkedin.com/in/${member.linkedin}`)}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300"
              onClick={() => window.open(`https://github.com/${member.github}`)}
            >
              <Github className="h-4 w-4" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TeamPage() {
  const [selectedRole, setSelectedRole] = useState("All")
  const [filteredMembers, setFilteredMembers] = useState(teamMembers)

  const roles = ["All", ...Array.from(new Set(teamMembers.map(member => member.role)))]

  useEffect(() => {
    if (selectedRole === "All") {
      setFilteredMembers(teamMembers)
    } else {
      setFilteredMembers(teamMembers.filter(member => member.role === selectedRole))
    }
  }, [selectedRole])

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
              Meet Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              The dedicated individuals who make ACM Tula's Institute possible. 
              Our diverse team brings together expertise, passion, and innovation.
            </motion.p>
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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {roles.map((role) => (
              <motion.button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRole === role
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {role}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Want to Join Our Team?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-blue-100"
            >
              We're always looking for passionate individuals to join our team and help shape the future of computing education.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => window.open('/contact')}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                onClick={() => window.open('/events')}
              >
                View Events
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
