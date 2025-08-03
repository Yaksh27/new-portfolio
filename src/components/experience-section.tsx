"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, Calendar, MapPin, ArrowRight, Star } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
  type: "full-time" | "contract" | "internship"
  highlights: string[]
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"],
    achievements: [
      "Led team of 5 developers on major product launch",
      "Improved application performance by 40%",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers"
    ],
    type: "full-time",
    highlights: ["Team Leadership", "Performance Optimization", "DevOps", "Mentoring"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Built and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "JavaScript", "Python", "Django", "MongoDB", "Heroku"],
    achievements: [
      "Developed 3 client applications from scratch",
      "Reduced bug reports by 50% through improved testing",
      "Optimized database queries improving load times by 35%",
      "Implemented user authentication system"
    ],
    type: "full-time",
    highlights: ["Full-Stack Development", "Testing", "Database Optimization", "Authentication"]
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    period: "2019 - 2020",
    description: "Worked on internal tools and infrastructure projects. Gained experience with large-scale systems and Google's development practices.",
    technologies: ["Java", "Python", "Google Cloud", "BigQuery", "Kubernetes"],
    achievements: [
      "Contributed to internal tool used by 1000+ engineers",
      "Improved data processing pipeline efficiency by 25%",
      "Received 'Outstanding Intern' recognition",
      "Participated in Google's hackathon winning 2nd place"
    ],
    type: "internship",
    highlights: ["Large-Scale Systems", "Data Processing", "Cloud Infrastructure", "Innovation"]
  }
]

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Professional Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          My journey through the tech industry
        </p>
      </div>

      <div className="space-y-8">
        {experienceData.map((experience, index) => (
          <div 
            key={experience.id} 
            className="group relative"
          >
            {/* Timeline connector */}
            {index < experienceData.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 opacity-60" />
            )}
            
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {experience.company.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={experience.type === "full-time" ? "default" : experience.type === "contract" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {experience.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                    <Star className="h-4 w-4 text-yellow-500" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                    <Award className="h-4 w-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3 group/item">
                        <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/item:translate-x-1 transition-transform duration-200" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
} 