"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Mail, Phone, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/avatar.jpg" alt="Profile" />
              <AvatarFallback className="text-lg">JD</AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">johndoe.dev</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">About</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications. 
                I specialize in modern JavaScript frameworks, cloud technologies, and creating intuitive user experiences. 
                When I'm not coding, you can find me contributing to open source projects, solving algorithmic challenges, 
                or exploring new technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
                My goal is to create impactful solutions that solve real-world problems while maintaining high code quality 
                and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 