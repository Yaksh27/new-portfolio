"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Mail, Phone, Globe, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
} as const

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
} as const

export function AboutSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto py-16 px-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-8 h-8 bg-amber-900 rounded-sm flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400">About</h1>
        </div>
        <motion.div
          variants={lineVariants}
          className="h-px bg-gradient-to-r from-amber-900 via-gray-300 to-transparent"
        />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-16">
        {/* Left Column - Profile */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative inline-block"
            >
              <div className="absolute -inset-1 bg-amber-900 rounded-lg opacity-20 blur-sm" />
              <Avatar className="h-24 w-24 border border-gray-200 dark:border-gray-700 relative">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback className="text-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="space-y-3">
              <h2 className="text-4xl font-light text-gray-900 dark:text-white tracking-tight">John Doe</h2>
              <p className="text-lg text-amber-900 dark:text-amber-700 font-medium">Full Stack Developer</p>
              <div className="w-12 h-px bg-amber-900" />
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "AWS"].map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                size="sm"
                className="bg-amber-900 hover:bg-amber-800 text-white border-0 text-xs font-medium px-4 h-8"
              >
                <Download className="h-3 w-3 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-medium px-4 h-8"
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                Work
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div variants={itemVariants} className="lg:col-span-3 space-y-12">
          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400">
              Contact
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "San Francisco, CA" },
                { icon: Mail, text: "john.doe@example.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Globe, text: "johndoe.dev" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-amber-900 transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400">
              Overview
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <motion.p variants={itemVariants} className="text-sm">
                I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications. I
                specialize in modern JavaScript frameworks, cloud technologies, and creating intuitive user experiences.
              </motion.p>
              <motion.p variants={itemVariants} className="text-sm">
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. My
                goal is to create impactful solutions that solve real-world problems while maintaining high code quality
                and user satisfaction.
              </motion.p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400">
              Experience
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "5+", label: "Years" },
                { number: "50+", label: "Projects" },
                { number: "10+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }} className="group cursor-default">
                  <div className="text-2xl font-light text-gray-900 dark:text-white group-hover:text-amber-900 dark:group-hover:text-amber-700 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
