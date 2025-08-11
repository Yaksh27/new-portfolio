"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Globe } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  videoUrl?: string
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A sophisticated task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide intelligent insights. Features include natural language processing for task creation and smart categorization.",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js", "PostgreSQL", "Tailwind CSS"],
    videoUrl: "/videos/task-manager-demo.mp4", // Your demo video
    githubUrl: "https://github.com/johndoe/ai-task-manager",
    liveUrl: "https://ai-task-manager.vercel.app"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with advanced features including real-time inventory management, payment processing, user authentication, and admin dashboard.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redux", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/ecommerce-preview.jpg", // Static image for this one
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app"
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "A real-time chat application with features like group messaging, file sharing, voice messages, and end-to-end encryption built with WebSocket technology.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
    videoUrl: "/videos/chat-app-demo.mp4", // Your demo video
    githubUrl: "https://github.com/johndoe/chat-app",
    liveUrl: "https://chat-app.vercel.app"
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex data sets with real-time updates, custom charts, and filtering capabilities designed for business intelligence.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    imageUrl: "/images/dashboard-preview.jpg",
    githubUrl: "https://github.com/johndoe/data-dashboard"
  }
]

const colors = [
  "bg-gray-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "bg-gray-100 text-green-800 dark:bg-green-900 dark:text-green-300", 
  "bg-gray-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "bg-gray-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
]

export function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-3"
    >
      <div className="max-w-6xl">
        {/* Projects Badge */}
        <div className="flex items-center justify-start mb-6">
          <Badge variant="default" className="text-white dark:text-black">
            <span className="text-white dark:text-black text-sm">My Projects</span>
          </Badge>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
                {/* Video/Image Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  {project.videoUrl ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm">Project Preview</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={tech} className={colors[techIndex % colors.length]}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button size="sm" asChild className="bg-gray-900 hover:bg-gray-700 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild className="bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}