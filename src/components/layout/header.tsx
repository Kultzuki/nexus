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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 pt-2">
      <nav className={cn(
        "mx-auto flex max-w-6xl items-center px-6 lg:px-8 rounded-2xl transition-all duration-300",
        isHomePage
          ? "bg-black/60 backdrop-blur-lg shadow-xl"
          : "bg-black/60 backdrop-blur-lg border border-white/20 shadow-xl"
      )} aria-label="Global">
        {/* Logo - Left side */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/ACM_LOGO.png"
              alt="ACM Logo"
              className="h-20 w-20 object-contain"
            />
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
            <Menu className="h-6 w-6 text-white" aria-hidden="true" />
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
                  "text-sm font-semibold leading-6 transition-all duration-300 ease-in-out px-2 py-1 relative",
                  pathname === item.href
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full"
                    : "text-white hover:text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Member Dashboard button */}
          <div className="ml-4">
            <Link
              href="/dashboard"
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3",
                isHomePage
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-gray-400 shadow-lg"
                  : ""
              )}
            >
              Member Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/ACM_LOGO.png"
                alt="ACM Logo"
                className="h-16 w-16 object-contain"
              />
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
                    className={cn(
                      "-mx-3 block px-3 py-2 text-base font-semibold leading-7 transition-all duration-300 ease-in-out relative",
                      pathname === item.href
                        ? "text-blue-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-blue-600 after:rounded-full"
                        : "text-gray-900 hover:text-blue-600"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full text-center"
                >
                  Member Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
