"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  logo: string
  link: string
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Indraprastha Insitute of Information Technology, Delhi [IIIT-Delhi]" ,
    period: "2021 - 2025",
    logo: '/iiitdlogo.jpg',
    link: "https://www.iiitd.ac.in/"
  }
]

export function EducationSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    const fallback = img.nextElementSibling as HTMLElement
    if (fallback) {
      img.style.display = 'none'
      fallback.style.display = 'block'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <div className="max-w-3xl">
        {/* Education Badge */}
        <div className="flex items-center justify-start mb-3">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">Education</span>
          </Badge>
        </div>
        
        {/* Education Items */}
        <div className="space-y-4">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(edu.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(edu.link, '_blank')}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between p-4 rounded-lg  transition-all duration-200">
                <div className="flex items-center space-x-4">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-10 h-10 object-contain"
                        onError={handleImageError}
                      />
                      <div className="w-8 h-8 text-gray-400 dark:text-gray-500 hidden flex items-center justify-center text-xl">
                        📚
                      </div>
                    </div>
                  </div>
                  
                  {/* Education Details */}
                  <div className="flex-grow">
                    <h3 className="text font-semibold text-gray-900 dark:text-white group-hover:text-[#669393] dark:group-hover:text-[#bef9f9] transition-colors duration-200">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-900 font-normal dark:text-gray-400 text-sm ">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Period and Arrow */}
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {edu.period}
                  </span>
                  
                  {/* Animated Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredId === edu.id ? 1 : 0,
                      x: hoveredId === edu.id ? 0 : -10
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 dark:text-gray-500"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}