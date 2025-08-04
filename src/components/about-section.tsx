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
          I'm a passionate software developer with expertise in modern web technologies. I love building scalable applications and solving complex problems. With a strong foundation in both frontend and backend development, I aim to create seamless user experiences and robust server-side solutions. My approach combines technical excellence with creative problem-solving, ensuring that every project I work on delivers both functionality and elegance.
        </p>
      </div>
    </motion.div>
  )
}
