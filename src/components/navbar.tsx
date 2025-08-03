"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Home, FileText, Github, Linkedin, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Group 1: Home, Blog
  const group1Items = [
    { icon: Home, label: "Home", id: "home" },
    { icon: FileText, label: "Blog", id: "blog" },
  ]

  // Group 2: GitHub, LinkedIn, Resume
  const group2Items = [
    { icon: Github, label: "GitHub", id: "github" },
    { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
    { icon: User, label: "Resume", id: "resume" },
  ]

  // Group 3: Theme Toggle
  const themeItem = {
    icon: theme === "dark" ? Sun : Moon,
    label: theme === "dark" ? "Light Mode" : "Dark Mode",
    id: "theme",
  }

  const allItems = [...group1Items, ...group2Items, themeItem]

  const NavButton = ({ item, isThemeToggle = false }: { item: any; isThemeToggle?: boolean }) => (
    <div className="relative flex items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hoveredItem === item.id && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs rounded-md whitespace-nowrap z-50"
          >
            {item.label}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-black dark:border-t-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          paddingLeft: hoveredItem === item.id ? "6px" : "0px",
          paddingRight: hoveredItem === item.id ? "6px" : "0px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full transition-colors duration-200 ease-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg p-2 h-8 w-8"
          onClick={isThemeToggle ? toggleTheme : undefined}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <item.icon className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )

  const Separator = ({ isActive, position }: { isActive: boolean; position: string }) => (
    <motion.div
      animate={{
        width: isActive ? "2px" : "1px",
        opacity: isActive ? 0.4 : 0.6,
        marginLeft: isActive ? "8px" : "4px",
        marginRight: isActive ? "8px" : "4px",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
      }}
      className="h-4 bg-gray-300 dark:bg-gray-600"
    />
  )

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-4 py-2">
        <div className="flex items-center">
          {/* Group 1: Home, Blog */}
          <div className="flex items-center">
            {group1Items.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <NavButton item={item} />
                {index < group1Items.length - 1 && (
                  <motion.div
                    animate={{
                      width: hoveredItem === item.id || hoveredItem === group1Items[index + 1]?.id ? "2px" : "1px",
                      opacity: hoveredItem === item.id || hoveredItem === group1Items[index + 1]?.id ? 0.3 : 0.6,
                      marginLeft: hoveredItem === item.id || hoveredItem === group1Items[index + 1]?.id ? "6px" : "3px",
                      marginRight:
                        hoveredItem === item.id || hoveredItem === group1Items[index + 1]?.id ? "6px" : "3px",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    className="h-4 bg-gray-300 dark:bg-gray-600"
                  />
                )}
              </div>
            ))}
          </div>

          {/* First Vertical Separator */}
          <Separator
            isActive={
              group1Items.some((item) => hoveredItem === item.id) || group2Items.some((item) => hoveredItem === item.id)
            }
            position="first"
          />

          {/* Group 2: GitHub, LinkedIn, Resume */}
          <div className="flex items-center">
            {group2Items.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <NavButton item={item} />
                {index < group2Items.length - 1 && (
                  <motion.div
                    animate={{
                      width: hoveredItem === item.id || hoveredItem === group2Items[index + 1]?.id ? "2px" : "1px",
                      opacity: hoveredItem === item.id || hoveredItem === group2Items[index + 1]?.id ? 0.3 : 0.6,
                      marginLeft: hoveredItem === item.id || hoveredItem === group2Items[index + 1]?.id ? "6px" : "3px",
                      marginRight:
                        hoveredItem === item.id || hoveredItem === group2Items[index + 1]?.id ? "6px" : "3px",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    className="h-4 bg-gray-300 dark:bg-gray-600"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Second Vertical Separator */}
          <Separator
            isActive={group2Items.some((item) => hoveredItem === item.id) || hoveredItem === "theme"}
            position="second"
          />

          {/* Group 3: Theme Toggle */}
          <NavButton item={themeItem} isThemeToggle={true} />
        </div>
      </div>
    </nav>
  )
}
