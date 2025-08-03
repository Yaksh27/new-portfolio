"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string
  description: string
  achievements: string[]
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2022",
    gpa: "3.9/4.0",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on distributed systems and software engineering.",
    achievements: [
      "Graduated with Distinction",
      "Research Assistant in AI Lab",
      "Teaching Assistant for CS101",
      "Published 2 research papers"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and data structures with emphasis on practical application.",
    achievements: [
      "Dean's List (4 years)",
      "Computer Science Honor Society",
      "Capstone Project: AI-powered Chatbot",
      "Internship at Google"
    ]
  }
]

export function EducationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {educationData.map((education) => (
            <div key={education.id} className="border-l-4 border-blue-500 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {education.institution}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{education.location}</span>
                {education.gpa && (
                  <>
                    <span>•</span>
                    <span>GPA: {education.gpa}</span>
                  </>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {education.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 