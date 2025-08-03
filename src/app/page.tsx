import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { LeetCodeProfile } from "@/components/leetcode-profile"
import { GitHubContributions } from "@/components/github-contributions"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
              Building modern web applications with cutting-edge technologies. 
              Passionate about clean code, user experience, and continuous learning.
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LeetCodeProfile />
            <GitHubContributions />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 John Doe. Built with Next.js 15, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}
