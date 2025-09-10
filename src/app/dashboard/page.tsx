"use client"

import { motion } from "framer-motion"
import { User, Calendar, BookOpen, Trophy, Star, Award, Target, TrendingUp, LogOut } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"

const achievements = [
  {
    id: "1",
    title: "First Event",
    description: "Attended your first ACM event",
    icon: Calendar,
    unlocked: true,
    points: 10
  },
  {
    id: "2",
    title: "Resource Explorer",
    description: "Downloaded 5 resources",
    icon: BookOpen,
    unlocked: true,
    points: 25
  },
  {
    id: "3",
    title: "Event Organizer",
    description: "Helped organize an event",
    icon: Trophy,
    unlocked: false,
    points: 50
  },
  {
    id: "4",
    title: "Community Contributor",
    description: "Contributed a resource",
    icon: Star,
    unlocked: false,
    points: 75
  }
]

const recentActivity = [
  {
    id: "1",
    action: "Attended Web Development Workshop",
    date: "2025-01-15",
    points: 10
  },
  {
    id: "2",
    action: "Downloaded React Tutorial",
    date: "2025-01-14",
    points: 5
  },
  {
    id: "3",
    action: "Registered for AI Seminar",
    date: "2025-01-13",
    points: 5
  },
  {
    id: "4",
    action: "Completed Profile Setup",
    date: "2025-01-12",
    points: 15
  }
]

const upcomingEvents = [
  {
    id: "1",
    title: "AI & Machine Learning Seminar",
    date: "2025-01-22",
    location: "Auditorium",
    registered: true
  },
  {
    id: "2",
    title: "Coding Competition",
    date: "2025-02-01",
    location: "Online",
    registered: false
  },
  {
    id: "3",
    title: "Cybersecurity Workshop",
    date: "2025-02-08",
    location: "Computer Lab 2",
    registered: true
  }
]

export default function DashboardPage() {
  const { user, logout, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please log in to access your dashboard.</p>
          <Button onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  // Calculate progress for students
  const progress = user.progress || {
    coursesCompleted: 0,
    totalCourses: 0,
    assignmentsSubmitted: 0,
    totalAssignments: 0,
    currentGPA: 0
  }

  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const lockedAchievements = achievements.filter(a => !a.unlocked)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">
                {user.role === 'student' && "Here's your academic progress and activities"}
                {user.role === 'faculty' && "Manage your courses and students"}
                {user.role === 'coreteam' && "Administrative dashboard for ACM Tula's Institute"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                {user.role === 'student' && (
                  <>
                    <div className="text-2xl font-bold text-blue-600">
                      {progress.coursesCompleted}/{progress.totalCourses} Courses
                    </div>
                    <div className="text-sm text-gray-600">GPA: {progress.currentGPA}</div>
                  </>
                )}
                {user.role === 'faculty' && (
                  <>
                    <div className="text-2xl font-bold text-green-600">
                      {user.courses?.length || 0} Courses
                    </div>
                    <div className="text-sm text-gray-600">{user.students || 0} Students</div>
                  </>
                )}
                {user.role === 'coreteam' && (
                  <>
                    <div className="text-2xl font-bold text-purple-600">
                      {user.position || 'Core Team'}
                    </div>
                    <div className="text-sm text-gray-600">Administrator</div>
                  </>
                )}
              </div>
              <Button
                onClick={logout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {user.role === 'student' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{progress.coursesCompleted}</div>
                        <p className="text-xs text-muted-foreground">out of {progress.totalCourses}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Assignments Submitted</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{progress.assignmentsSubmitted}</div>
                        <p className="text-xs text-muted-foreground">out of {progress.totalAssignments}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{progress.currentGPA}</div>
                        <p className="text-xs text-muted-foreground">out of 4.0</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}

              {user.role === 'faculty' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.courses?.length || 0}</div>
                        <p className="text-xs text-muted-foreground">This semester</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <User className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.students || 0}</div>
                        <p className="text-xs text-muted-foreground">Across all courses</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Department</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.department || 'CS'}</div>
                        <p className="text-xs text-muted-foreground">Computer Science</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}

              {user.role === 'coreteam' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Position</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.position || 'Member'}</div>
                        <p className="text-xs text-muted-foreground">Core Team</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Permissions</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.permissions?.length || 0}</div>
                        <p className="text-xs text-muted-foreground">Admin access</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Status</CardTitle>
                        <Target className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">Active</div>
                        <p className="text-xs text-muted-foreground">All systems operational</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest activities and points earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-green-600">+{activity.points}</span>
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events you're registered for or might be interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {event.registered ? (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                              Registered
                            </span>
                          ) : (
                            <Button size="sm">Register</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <CardDescription>{user.email}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Member since</span>
                      <span className="font-medium">{new Date(user.memberSince).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current Level</span>
                      <span className="font-medium">{user.level}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Level {user.level + 1}</span>
                        <span className="font-medium">{user.points}/{user.nextLevelPoints}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(user.points / user.nextLevelPoints) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your progress and unlocked achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {unlockedAchievements.map((achievement, index) => (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <achievement.icon className="h-6 w-6 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium text-green-600">+{achievement.points}</span>
                          <Award className="h-4 w-4 text-yellow-500" />
                        </div>
                      </div>
                    ))}
                    
                    {lockedAchievements.map((achievement, index) => (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                        <achievement.icon className="h-6 w-6 text-gray-400" />
                        <div className="flex-1">
                          <p className="font-medium text-sm text-gray-500">{achievement.title}</p>
                          <p className="text-xs text-gray-400">{achievement.description}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium text-gray-400">{achievement.points} pts</span>
                          <Target className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    View All Events
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Resources
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Progress
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
