"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Home, FileText, Github, Linkedin, User } from "lucide-react"

export default function Navbar() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Default to light theme, don't check system preference
    setTheme("light")
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: FileText, label: "Blog", id: "blog" },
    { icon: Github, label: "GitHub", id: "github" },
    { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
    { icon: User, label: "Resume", id: "resume" },
  ]

  const themeItem = {
    icon: theme === "dark" ? Sun : Moon,
    label: theme === "dark" ? "Light Mode" : "Dark Mode",
    id: "theme",
  }

  if (!mounted) {
    return (
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-6 py-3">
        <div className="flex items-center space-x-4">
          {/* Main Navigation Items */}
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className="rounded-full h-10 w-10 p-0 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 text-black dark:text-white"
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </Button>
          ))}
          
          {/* Separator */}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full h-10 w-10 p-0 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 text-black dark:text-white"
            onClick={toggleTheme}
            title={themeItem.label}
          >
            <themeItem.icon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}