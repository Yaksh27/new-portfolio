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
  Moon 
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-4">
        {/* Home */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Home className="h-4 w-4" />
        </Button>

        {/* Notes */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <FileText className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* GitHub */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Github className="h-4 w-4" />
        </Button>

        {/* LinkedIn */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Linkedin className="h-4 w-4" />
        </Button>

        {/* X (Twitter) */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Twitter className="h-4 w-4" />
        </Button>

        {/* YouTube */}
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Youtube className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Theme Toggle */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 rounded-full"
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