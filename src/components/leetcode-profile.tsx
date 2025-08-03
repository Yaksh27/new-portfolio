"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, TrendingUp } from "lucide-react"

// Mock data since react-leetcode might not work with React 19
// In a real implementation, you'd use the actual react-leetcode component
interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number
  acceptanceRate: number
}

interface RecentProblem {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  status: "Accepted" | "Attempted" | "Not Attempted"
  date: string
}

const mockStats: LeetCodeStats = {
  totalSolved: 150,
  easySolved: 80,
  mediumSolved: 55,
  hardSolved: 15,
  ranking: 12500,
  acceptanceRate: 85.5
}

const mockRecentProblems: RecentProblem[] = [
  { id: 1, title: "Two Sum", difficulty: "Easy", status: "Accepted", date: "2024-01-15" },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium", status: "Accepted", date: "2024-01-14" },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Accepted", date: "2024-01-13" },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Attempted", date: "2024-01-12" },
  { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", status: "Accepted", date: "2024-01-11" }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Accepted": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Attempted": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function LeetCodeProfile() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            LeetCode Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {mockStats.totalSolved}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {mockStats.easySolved}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {mockStats.mediumSolved}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {mockStats.hardSolved}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hard</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                #{mockStats.ranking.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {mockStats.acceptanceRate}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Acceptance Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Recent Problems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRecentProblems.map((problem) => (
              <div key={problem.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-1">
                  <div className="font-medium">{problem.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{problem.date}</div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                  <Badge className={getStatusColor(problem.status)}>
                    {problem.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 