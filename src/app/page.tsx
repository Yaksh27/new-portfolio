"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Navbar from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { LeetCodeProfile } from "@/components/leetcode-profile"
import { GitHubContributions } from "@/components/github-contributions"

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const words = ["Full Stack Developer", "Software Developer", "Problem Solver"]

  useEffect(() => {
    setIsClient(true)
    setCurrentText("Full Stack Developer")
  }, [])

  useEffect(() => {
    if (!isClient) return

    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1))

          if (currentText === currentWord) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, isClient])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-8 pb-24 pt-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Hero Section */}
          <section className="py-3">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Hey there, I'm <br />
                  <span className="text-amber-900 dark:text-amber-700 mt-2">Yaksh Patel</span>
                </h1>
                                 <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-3 h-8">
                   <span className="text-amber-900 dark:text-amber-700 font-medium">
                     {isClient ? currentText : "Full Stack Developer"}
                     {isClient && (
                       <motion.span
                         animate={{ opacity: [1, 0] }}
                         transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                         className="inline-block w-0.5 h-6 bg-current ml-1"
                       />
                     )}
                   </span>
                 </div>
              </div>

              <div className="flex flex-col items-center space-y-2 ml-6">
                                 <div className="relative">
                   <div className="absolute -inset-1 bg-amber-900 rounded-full opacity-20 blur-sm" />
                   <Avatar className="h-24 w-24 border border-gray-200 dark:border-gray-700 relative">
                     <AvatarImage src="/placeholder.svg?height=72&width=72" alt="Profile" />
                     <AvatarFallback className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                       YP
                     </AvatarFallback>
                   </Avatar>
                 </div>
                 <Button
                   size="lg"
                   className="bg-amber-900 hover:bg-amber-800 text-white border-0 text-xs font-medium px-4 h-7 mt-3"
                 >
                  <Download className="h-5 w-5 mr-1" />
                  Resume
                </Button>
              </div>
            </div>

            <p className="text-base text-gray-900 dark:text-gray-500">
              crafting digital experiences with precision and purpose.
            </p>
          </section>

          {/* About Section */}
          <section id="about">
            <AboutSection />
          </section>

          {/* Education Section */}
          <section id="education">
            <EducationSection />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <ExperienceSection />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* LeetCode & GitHub Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LeetCodeProfile />
            <GitHubContributions />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Yaksh Patel. Built with Next.js 15, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}
