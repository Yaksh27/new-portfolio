"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ChevronRight, MapPin } from "lucide-react"
import { useState } from "react"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  type: "full-time" | "contract" | "internship"
  logo: string
  link?: string
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Front-End Developer Intern",
    company: "Deckoviz Space Labs",
    location: "London, UK (Remote) ",
    period: "June 2025 - July 2025",
    description:
      "Converted Figma UI/UX mockups into a pixel-perfect, responsive React application. Implemented lazy loading, image compression, and icon optimization to boost performance by 40%",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    type: "internship",
    logo: "/deckovizlogo.png",
    link: "https://deckoviz.com",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Speaking Warrior",
    location: "Ahmedabad, India",
    period: "April 2025 - June 2025",
    description:
      "Founding developer, built and launched a full-stack learning platform using React, Vite, Tailwind CSS, and Framer Motion. Integrated REST APIs, developed an admin dashboard, connected payment dashboards like razorpay and also ensured a seamless UX/UI.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB" , "Tailwind CSS"],
    type: "internship",
    logo: "/sw-logo.jpg",
    link: "",
  },
  {
    id: 3,
    title: "Student Researcher",
    company: "Creative Interfaces Lab, IIIT-Delhi",
    location: "New Delhi, India",
    period: "2019 - 2020",
    description:
      "Contributed to AR/VR Research & Development leading to co-authoring a paper, published and presented at IEEE 2024 (A*) in Orlando, Florida, USA.",
    technologies: [ "Machine Learning" , "Unity3D", "C#", "AR/VR", "Research"],
    type: "full-time",
    logo: "/ci-lab-logo.png",
    link: "https://cilab.iiitd.edu.in/",
  },
]

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    const fallback = img.nextElementSibling as HTMLElement
    if (fallback) {
      img.style.display = "none"
      fallback.style.display = "block"
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
        {/* Experience Badge */}
        <div className="flex items-center justify-start mb-3">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">Experience</span>
          </Badge>
        </div>

        {/* Experience Items */}
        <div className="space-y-4">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => exp.link && window.open(exp.link, "_blank")}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between p-4 rounded-lg transition-all duration-200">
                <div className="flex items-start space-x-4 flex-grow">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain"
                        onError={handleImageError}
                      />
                      <div className="w-8 h-8 text-gray-400 dark:text-gray-500 hidden flex items-center justify-center text-xl">
                        {exp.company.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-grow">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-[#6f4571] dark:group-hover:text-[#bef9f9] transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{exp.company}</p>
                      </div>

                      {/* Period and Type */}
                      <div className="flex flex-col items-end gap-1 ml-4">
                        <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">{exp.period}</span>
                        <Badge variant="default" className="text-xs h-5 px-2 text-white dark:text-gray-900">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-500">
                          +{exp.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Animated Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredId === exp.id ? 1 : 0,
                    x: hoveredId === exp.id ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 dark:text-gray-500 ml-2 mt-4"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
