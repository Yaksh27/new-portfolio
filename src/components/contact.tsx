"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { HiMail } from "react-icons/hi"
import { FaWhatsapp, FaRobot } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

interface ContactLink {
  id: number
  name: string
  url: string
  icon: React.ReactNode
  description: string
  color: string
  hoverColor: string
  hoverBg: string
  hoverBorder: string
  hoverShadow: string
}

export function ContactMe() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const indiaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now)
      setCurrentTime(indiaTime)
    }

    updateTime() // Set initial time
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const contactLinks: ContactLink[] = [
    {
      id: 1,
      name: "Email",
      url: "mailto:yaksh2400@gmail.com",
      icon: <HiMail className="h-6 w-6" />,
      description: "yaksh2400@gmail.com",
      color: "text-red-500",
      hoverColor: "group-hover:text-red-600",
      hoverBg: "hover:bg-red-50/80 dark:hover:bg-red-900/20",
      hoverBorder: "hover:border-red-200 dark:hover:border-red-800/50",
      hoverShadow: "hover:shadow-red-100/50 dark:hover:shadow-red-900/30",
    },
    {
      id: 2,
      name: "WhatsApp",
      url: "https://wa.me/+917779020367",
      icon: <FaWhatsapp className="h-6 w-6" />,
      description: "Drop a hi on WhatsApp 👋🏼",
      color: "text-green-500",
      hoverColor: "group-hover:text-green-600",
      hoverBg: "hover:bg-green-50/80 dark:hover:bg-green-900/20",
      hoverBorder: "hover:border-green-200 dark:hover:border-green-800/50",
      hoverShadow: "hover:shadow-green-100/50 dark:hover:shadow-green-900/30",
    },
    {
      id: 3,
      name: "LeetCode",
      url: "https://leetcode.com/y4ksh",
      icon: <SiLeetcode className="h-6 w-6" />,
      description: "View my DSA skills (still getting better)  💻",
      color: "text-orange-500",
      hoverColor: "group-hover:text-orange-600",
      hoverBg: "hover:bg-orange-50/80 dark:hover:bg-orange-900/20",
      hoverBorder: "hover:border-orange-200 dark:hover:border-orange-800/50",
      hoverShadow: "hover:shadow-orange-100/50 dark:hover:shadow-orange-900/30",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-3"
    >
      <div className="max-w-3xl">
        {/* Contact Badge */}
        <div className="flex items-center justify-start mb-3">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">Get In Touch</span>
          </Badge>
        </div>

        {/* Promotional AI Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg border border-blue-100 dark:border-blue-800/30"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <FaRobot className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Talk to my AI to know more about me
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                  Coming Soon.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Description */}
        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-6">
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology
          and coding. Feel free to reach out :)
        </p>

        <div className="bg-white/50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.id}
              className="group cursor-pointer relative"
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(link.url, "_blank")}
              transition={{ duration: 0.15 }}
            >
              <div
                className={`flex items-center justify-between p-5 transition-all duration-150 ease-out ${link.hoverBg} hover:shadow-sm ${
                  index !== contactLinks.length - 1 ? "border-b border-gray-200 dark:border-gray-800" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center transition-all duration-150 group-hover:border-opacity-80 group-hover:scale-105`}
                    >
                      <div className={`${link.color} transition-colors duration-150`}>{link.icon}</div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3
                      className={`text-base font-medium text-gray-900 dark:text-white transition-colors duration-150 ${link.hoverColor}`}
                    >
                      {link.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-150">
                      {link.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  animate={{
                    opacity: hoveredId === link.id ? 1 : 0.3,
                    scale: hoveredId === link.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.15 }}
                  className={`absolute top-3 right-3 transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${link.color}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Quick Response Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>I usually respond within 24 hours,
            India: {currentTime}.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
