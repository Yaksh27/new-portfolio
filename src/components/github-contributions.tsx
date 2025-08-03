"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Calendar, GitCommit } from "lucide-react"

// Mock GitHub contributions data since react-github-calendar might not work with React 19
// In a real implementation, you'd use the actual react-github-calendar component
interface Contribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const mockContributions: Contribution[] = [
  // Generate mock data for the last 365 days
  ...Array.from({ length: 365 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (364 - i))
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10),
      level: Math.floor(Math.random() * 5) as 0 | 1 | 2 | 3 | 4
    }
  })
]

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

export function GitHubContributions() {
  const totalContributions = mockContributions.reduce((sum, contribution) => sum + contribution.count, 0)
  const activeDays = mockContributions.filter(c => c.count > 0).length
  const currentStreak = 7 // Mock current streak

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          GitHub Contributions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {totalContributions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {activeDays}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {currentStreak}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current Streak</div>
            </div>
          </div>

          {/* Contribution Calendar */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Contribution Activity</span>
            </div>
            <div className="grid grid-cols-53 gap-1">
              {mockContributions.map((contribution, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.level)}`}
                  title={`${contribution.date}: ${contribution.count} contributions`}
                />
              ))}
            </div>
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

          {/* Recent Activity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <GitCommit className="h-4 w-4" />
              Recent Activity
            </div>
            <div className="space-y-2">
              {mockContributions
                .filter(c => c.count > 0)
                .slice(-5)
                .reverse()
                .map((contribution, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {new Date(contribution.date).toLocaleDateString()}
                    </span>
                    <span className="font-medium">
                      {contribution.count} contribution{contribution.count !== 1 ? 's' : ''}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 