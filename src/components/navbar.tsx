"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Home, 
  FileText, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Sun, 
  Moon,
  User,
  Briefcase,
  BookOpen,
  Code,
  FolderOpen
} from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-3">
        {/* About */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <User className="h-4 w-4" />
        </Button>

        {/* Education */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <BookOpen className="h-4 w-4" />
        </Button>

        {/* Experience */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Briefcase className="h-4 w-4" />
        </Button>

        {/* Skills */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Code className="h-4 w-4" />
        </Button>

        {/* Projects */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <FolderOpen className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* GitHub */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Github className="h-4 w-4" />
        </Button>

        {/* LinkedIn */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Linkedin className="h-4 w-4" />
        </Button>

        {/* X (Twitter) */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Twitter className="h-4 w-4" />
        </Button>

        {/* YouTube */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
        >
          <Youtube className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Theme Toggle */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full transition-all duration-300 ease-out hover:scale-125 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </nav>
  )
} 