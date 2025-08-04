"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface GitHubStats {
  totalContributions: number
  totalRepos: number
  totalStars: number
  followers: number
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface GitHubData {
  stats: GitHubStats
  contributions: ContributionDay[]
}

export function GitHubContributions() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Use your GitHub username
  const GITHUB_USERNAME = "Yaksh27"

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch basic user stats
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!userResponse.ok) throw new Error('Failed to fetch user data')
        const userData = await userResponse.json()

        // Fetch repositories for star count
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
        if (!reposResponse.ok) throw new Error('Failed to fetch repos data')
        const reposData = await reposResponse.json()

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)
          : 0

        // Fetch contributions data from the third-party API
        const contributionsResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`)
        if (!contributionsResponse.ok) throw new Error('Failed to fetch contributions data')
        const contributionsData = await contributionsResponse.json()

        // Check contributions structure before processing
        if (!contributionsData || !Array.isArray(contributionsData.contributions)) {
          throw new Error('No contributions data found or invalid format')
        }

        // Process contributions data
        const contributions: ContributionDay[] = []
        const today = new Date()
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())

        contributionsData.contributions.forEach((week: any) => {
          if (week.days && Array.isArray(week.days)) {
            week.days.forEach((day: any) => {
              const date = new Date(day.date)
              if (date >= oneYearAgo) {
                contributions.push({
                  date: day.date,
                  count: day.count,
                  level: day.level
                })
              }
            })
          }
        })

        const stats: GitHubStats = {
          totalContributions: (contributionsData.total && contributionsData.total[new Date().getFullYear()]) || 0,
          totalRepos: userData.public_repos,
          totalStars,
          followers: userData.followers
        }

        setGithubData({
          stats,
          contributions
        })

      } catch (err) {
        console.error('GitHub API Error:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
      } finally {
        setLoading(false)
      }
    }

    if (GITHUB_USERNAME) {
      fetchGitHubData()
    } else {
      setError("Please update GITHUB_USERNAME in the component")
      setLoading(false)
    }

  }, [GITHUB_USERNAME])

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "bg-gray-100 dark:bg-gray-800"
      case 1: return "bg-green-200 dark:bg-green-900"
      case 2: return "bg-green-400 dark:bg-green-700"
      case 3: return "bg-green-600 dark:bg-green-500"
      case 4: return "bg-green-800 dark:bg-green-300"
      default: return "bg-gray-100 dark:bg-gray-800"
    }
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <div className="max-w-3xl">
          <div className="flex items-center justify-start mb-3">
            <Badge variant="outline" className="text-black dark:text-white">
              <span className="text-black dark:text-white text-sm">GitHub Activity</span>
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Github className="h-4 w-4 animate-spin" />
            <span>Loading GitHub data...</span>
          </div>
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <div className="max-w-3xl">
          <div className="flex items-center justify-start mb-3">
            <Badge variant="outline" className="text-black dark:text-white">
              <span className="text-black dark:text-white text-sm">GitHub Activity</span>
            </Badge>
          </div>
          <div className="text-red-500 dark:text-red-400 text-sm">
            Error: {error}
          </div>
        </div>
      </motion.div>
    )
  }

  if (!githubData) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <div className="max-w-3xl">
        {/* GitHub Badge */}
        <div className="flex items-center justify-start mb-3">
          <Badge variant="outline" className="text-black dark:text-white">
            <span className="text-black dark:text-white text-sm">GitHub Activity</span>
          </Badge>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              {githubData.stats.totalContributions}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Contributions</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {githubData.stats.totalRepos}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Repositories</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
              {githubData.stats.totalStars}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Stars</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
              {githubData.stats.followers}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
          </div>
        </div>

        {/* Contributions Graph */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <Github className="h-4 w-4" />
            <span>Contribution Graph</span>
          </div>
          
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            {/* Contribution squares */}
            <div className="grid grid-flow-col grid-rows-7 gap-1 mb-3 overflow-x-auto">
              {githubData.contributions.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} hover:opacity-80 transition-opacity cursor-pointer`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
