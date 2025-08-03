"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette, Cpu } from "lucide-react"

interface SkillCategory {
  id: string
  name: string
  icon: React.ReactNode
  skills: {
    name: string
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
    color: string
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "React", level: "Expert", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "TypeScript", level: "Expert", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Next.js", level: "Advanced", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
      { name: "Vue.js", level: "Intermediate", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Angular", level: "Intermediate", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" }
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: "Expert", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Python", level: "Advanced", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "Express.js", level: "Advanced", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      { name: "Django", level: "Intermediate", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "FastAPI", level: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "GraphQL", level: "Intermediate", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" }
    ]
  },
  {
    id: "database",
    name: "Database & ORM",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: "Advanced", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "MongoDB", level: "Advanced", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Redis", level: "Intermediate", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "Prisma", level: "Advanced", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      { name: "TypeORM", level: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Mongoose", level: "Intermediate", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "AWS", level: "Advanced", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "Docker", level: "Advanced", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Kubernetes", level: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Terraform", level: "Intermediate", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      { name: "GitHub Actions", level: "Advanced", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      { name: "Vercel", level: "Advanced", color: "bg-black text-white dark:bg-white dark:text-black" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      { name: "TensorFlow", level: "Intermediate", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "PyTorch", level: "Intermediate", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "OpenAI API", level: "Advanced", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "LangChain", level: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Scikit-learn", level: "Intermediate", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "Pandas", level: "Advanced", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "text-green-600 dark:text-green-400"
    case "Advanced": return "text-blue-600 dark:text-blue-400"
    case "Intermediate": return "text-yellow-600 dark:text-yellow-400"
    case "Beginner": return "text-gray-600 dark:text-gray-400"
    default: return "text-gray-600 dark:text-gray-400"
  }
}

export function SkillsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Skills & Technologies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className={skill.color}>
                        {skill.name}
                      </Badge>
                    </div>
                    <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 