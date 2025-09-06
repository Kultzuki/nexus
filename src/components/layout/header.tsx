"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isHomePage 
        ? "bg-black/10 backdrop-blur-md border-b border-white/20 shadow-lg" 
        : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8" aria-label="Global">
        {/* Logo - Left side */}
        <div className="flex-shrink-0">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <GraduationCap className={cn(
              "h-8 w-8",
              isHomePage ? "text-black" : "text-blue-600"
            )} />
            <span className={cn(
              "text-xl font-bold",
              isHomePage ? "text-black" : "text-gray-900"
            )}>ACM Nexus</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              isHomePage ? "text-black" : "text-gray-700"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop navigation - Right side with space */}
        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-8">
          {/* Navigation links */}
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors",
                  isHomePage 
                    ? "text-black hover:text-gray-600" 
                    : "text-gray-900 hover:text-blue-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Member Dashboard button */}
          <div className="ml-4">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className={cn(
                isHomePage 
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-gray-400 shadow-lg" 
                  : ""
              )}
            >
              <Link href="/dashboard">Member Dashboard</Link>
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ACM Nexus</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/dashboard">Member Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
