"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export function GitHubContributions() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-start mb-3">
            <Badge variant="outline" className="text-black dark:text-white">
              <span className="text-black dark:text-white text-sm">GitHub Activity</span>
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Github className="h-4 w-4 animate-spin" />
            <span>Loading GitHub data...</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-start mb-3">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">GitHub Activity</span>
          </Badge>
       
        </div>
        
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <iframe 
            src="https://www.gitch.art/api/og/Yaksh27?color=B8F5FF" 
            width="100%" 
            height="180" 
            frameBorder="0" 
            scrolling="no"
            className="w-full"
            style={{ minHeight: '180px' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
