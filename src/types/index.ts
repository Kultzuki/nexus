export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  type: 'workshop' | 'seminar' | 'competition' | 'meeting' | 'conference'
  status: 'upcoming' | 'past' | 'cancelled'
  image?: string
  maxParticipants?: number
  currentParticipants?: number
  registrationRequired: boolean
  registrationOpen: boolean
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'tutorial' | 'documentation' | 'video' | 'article' | 'tool'
  category: 'programming' | 'data-science' | 'ai' | 'web-dev' | 'mobile' | 'general'
  url: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  author: string
  publishedAt: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
  featured: boolean
}

export interface Member {
  id: string
  name: string
  email: string
  role: 'member' | 'officer' | 'president' | 'vice-president' | 'treasurer' | 'secretary'
  joinDate: string
  achievements: Achievement[]
  points: number
  level: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  points: number
  unlockedAt?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'membership' | 'event' | 'partnership'
}

export interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'faculty' | 'coreteam'
  password: string
  memberSince: string
  level?: number
  points?: number
  nextLevelPoints?: number
  progress?: {
    coursesCompleted: number
    totalCourses: number
    assignmentsSubmitted: number
    totalAssignments: number
    currentGPA: number
  }
  courses?: string[]
  students?: number
  department?: string
  position?: string
  permissions?: string[]
}