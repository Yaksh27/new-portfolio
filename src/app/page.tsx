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
import { ContactMe } from "@/components/contact"
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
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <main className="container mx-auto px-4 py-4  pt-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Hero Section */}
          <section className="py-3">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
                  Hey there, I'm <br />
                  <span className="text-amber-900 dark:text-[#a39077] mt-4">Yaksh Patel.</span>
                </h1>
                                 <div className="text-xl md:text-2xl text-black dark:text-white mb-3 mt-6 h-8">
                   <span className="text-black dark:text-white font-medium">
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
                    <div className="absolute -inset-1 bg-black dark:bg-white rounded-full opacity-20 blur-sm" />
                    <Avatar className="h-24 w-24 border border-gray-200 dark:border-gray-700 relative">
                      <AvatarImage src="/redshirtpic.jpeg" alt="" />
                      <AvatarFallback className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                   
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button
                    size="lg"
                    className="bg-black dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-black border-0 text-xs font-medium px-4 h-7 mt-3"
                  >
                   <Download className="h-5 w-5 mr-1" />
                   Resume
                 </Button>
              </div>


            </div>

            <p className="text-base text-gray-600 dark:text-gray-300">
            ❝ crafting digital experiences with precision and purpose. ❞
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
          <section>
            <GitHubContributions />
            <ContactMe />
            
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-white">
            © 2025 Yaksh Patel. Built with 💌 Next.js 15, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}
