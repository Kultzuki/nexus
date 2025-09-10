"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Users, GraduationCap, Shield, ArrowRight, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const portalTypes = [
  {
    id: "student",
    title: "Student Portal",
    description: "Access your courses, assignments, and academic progress",
    icon: GraduationCap,
    href: "/login/student",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700"
  },
  {
    id: "faculty",
    title: "Faculty Portal",
    description: "Manage courses, students, and academic resources",
    icon: Users,
    href: "/login/faculty",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700"
  },
  {
    id: "coreteam",
    title: "Core Team Portal",
    description: "Administrative access and team management",
    icon: Shield,
    href: "/login/coreteam",
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700"
  }
]

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose your portal to access your account
            </p>
          </motion.div>

          {/* Portal Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {portalTypes.map((portal, index) => (
              <motion.div
                key={portal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={portal.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`mx-auto h-16 w-16 rounded-full bg-gradient-to-r ${portal.color} ${portal.hoverColor} flex items-center justify-center mb-4 transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <portal.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {portal.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 mb-6">
                        {portal.description}
                      </CardDescription>
                      <Button
                        className={`w-full bg-gradient-to-r ${portal.color} ${portal.hoverColor} text-white border-0 transition-all duration-300`}
                        size="lg"
                      >
                        Access Portal
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                New to ACM Tula's Institute?
              </h3>
              <p className="text-gray-600 mb-4">
                Students can create a new account to get started with their academic journey.
              </p>
              <Link href="/signup">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Create Student Account
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{" "}
              <a href="mailto:support@acm-tulas.edu" className="text-blue-600 hover:text-blue-800">
                support@acm-tulas.edu
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
