"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-3"
    >
      <div className="max-w-3xl">
        {/* about badge slightly bigger */}
        <div className="flex items-center justify-start mb-3 ">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">About Me</span>
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-white text-base leading-relaxed">
        I'm a software developer who genuinely loves what I do – building apps that actually work well and solving tricky problems that keep me up at night (in a good way). I work across the full stack, from making interfaces that don't frustrate users to backend systems that don't crash when things get busy. At the end of the day, I just want to build stuff that people find useful and that I can be proud of.
        </p>
      </div>
    </motion.div>
  )
}
