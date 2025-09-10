"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'faculty' | 'coreteam'
  password: string
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

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (userData: any) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@tulas.edu',
    password: 'password123',
    role: 'student',
    progress: {
      coursesCompleted: 8,
      totalCourses: 12,
      assignmentsSubmitted: 24,
      totalAssignments: 30,
      currentGPA: 3.7
    }
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@tulas.edu',
    password: 'faculty123',
    role: 'faculty',
    department: 'Computer Science',
    courses: ['Data Structures', 'Algorithms', 'Database Systems'],
    students: 45
  },
  {
    id: '3',
    name: 'Alex Chen',
    email: 'alex.chen@tulas.edu',
    password: 'admin123',
    role: 'coreteam',
    position: 'President',
    permissions: ['manage_events', 'manage_users', 'view_analytics']
  },
  {
    id: '4',
    name: 'Priya Sharma',
    email: 'priya.sharma@tulas.edu',
    password: 'student123',
    role: 'student',
    progress: {
      coursesCompleted: 6,
      totalCourses: 10,
      assignmentsSubmitted: 18,
      totalAssignments: 25,
      currentGPA: 3.5
    }
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session on mount
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      // Remove password from stored user data
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword as User)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      setLoading(false)
      return { success: true }
    } else {
      setLoading(false)
      return { success: false, error: 'Invalid email or password' }
    }
  }

  const signup = async (userData: any): Promise<{ success: boolean; error?: string }> => {
    setLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === userData.email)
    if (existingUser) {
      setLoading(false)
      return { success: false, error: 'User with this email already exists' }
    }
    
    // Create new user
    const newUser: User = {
      id: (mockUsers.length + 1).toString(),
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      password: userData.password,
      role: 'student',
      progress: {
        coursesCompleted: 0,
        totalCourses: 0,
        assignmentsSubmitted: 0,
        totalAssignments: 0,
        currentGPA: 0
      }
    }
    
    // Add to mock database
    mockUsers.push(newUser)
    
    // Remove password from stored user data
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword as User)
    localStorage.setItem('user', JSON.stringify(userWithoutPassword))
    
    setLoading(false)
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
