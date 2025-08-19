"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Home, FileText, Github, Linkedin, User, Newspaper, NotebookPen } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Ensure theme is set to light if not already set
    if (!theme) {
      setTheme("light")
    }
  }, [theme, setTheme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Ensure theme is always defined
  const currentTheme = theme || "light"

  const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: FileText, label: "Resume", id: "resume" },
    { icon: Github, label: "GitHub", id: "github" },
    { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
   
    { icon: NotebookPen, label: "Blog", id: "blog" },
  ]



  if (!mounted) {
    return (
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-4 py-2">
          <div className="flex items-center space-x-2">
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
      <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-4 py-2 transition-all duration-300 hover:shadow-2xl hover:bg-white dark:hover:bg-black">
        <div className="flex items-center space-x-2">
          {/* Main Navigation Items */}
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className="rounded-full h-9 w-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white group relative"
              title={item.label}
            >
              <item.icon className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
              
              {/* Hover label tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black dark:border-t-white"></div>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Button>
          ))}
          
          {/* Separator */}
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1" />
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full h-9 w-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white group relative"
            onClick={toggleTheme}
            title={currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {currentTheme === "dark" ? (
              <Sun className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
            ) : (
              <Moon className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
            )}
            
            {/* Hover label tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black dark:border-t-white"></div>
            </div>
            
            {/* Special glow effect for theme toggle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </Button>
        </div>
      </div>
    </nav>
  )
}