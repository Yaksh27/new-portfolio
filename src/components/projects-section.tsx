"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A sophisticated task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide intelligent insights. Features include natural language processing for task creation, smart categorization, and predictive analytics.",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/project1.jpg",
    githubUrl: "https://github.com/johndoe/ai-task-manager",
    liveUrl: "https://ai-task-manager.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with advanced features including real-time inventory management, payment processing, user authentication, and admin dashboard. Built with modern technologies and best practices.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redux", "Tailwind CSS", "Vercel"],
    image: "/project2.jpg",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "A real-time chat application with features like group messaging, file sharing, voice messages, and end-to-end encryption. Built with WebSocket technology for instant messaging.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
    image: "/project3.jpg",
    githubUrl: "https://github.com/johndoe/chat-app",
    liveUrl: "https://chat-app.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex data sets with real-time updates, custom charts, and filtering capabilities. Designed for business intelligence and analytics.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    image: "/project4.jpg",
    githubUrl: "https://github.com/johndoe/data-dashboard",
    liveUrl: "https://data-dashboard.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js 15 and shadcn/ui. Features dark/light mode, smooth animations, and integration with LeetCode and GitHub APIs.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    image: "/project5.jpg",
    githubUrl: "https://github.com/johndoe/portfolio",
    liveUrl: "https://johndoe.dev",
    featured: true
  },
  {
    id: 6,
    title: "Machine Learning API",
    description: "A RESTful API for machine learning models with features like model versioning, A/B testing, and automated deployment. Includes comprehensive documentation and testing.",
    technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "AWS", "PostgreSQL"],
    image: "/project6.jpg",
    githubUrl: "https://github.com/johndoe/ml-api",
    liveUrl: "https://ml-api.johndoe.dev",
    featured: false
  }
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="space-y-8">
      {/* Featured Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">Project Preview</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">Project Preview</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 