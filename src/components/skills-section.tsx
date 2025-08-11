"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = [
  "React",
  "TypeScript/JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Express.js",
  "FastAPI",
  "HTML5",
  "CSS3",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "RESTful APIs",
  "GitHub Actions",
  "Vercel",
  "Pandas",
  "ShadCN/UI",
]

const colors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 hover:shadow-md hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50",
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:shadow-md hover:shadow-green-200/50 dark:hover:shadow-green-900/50",
  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 hover:shadow-md hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50",
  "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800 hover:shadow-md hover:shadow-orange-200/50 dark:hover:shadow-orange-900/50",
]

export function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="py-8"
    >
      <div className="max-w-3xl">
        {/* Skills Badge */}
        <div className="flex items-center justify-start mb-3">
          <Badge variant="default" className="text-white dark:text-black">
            <span className="text-white dark:text-black text-sm">Skills</span>
          </Badge>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Badge className={`${colors[index % colors.length]} transition-all duration-200 ease-in-out`}>
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
