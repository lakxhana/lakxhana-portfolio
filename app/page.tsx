"use client"

import type React from "react"

import { useRef } from "react"
import { ArrowDown, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkillsSphere from "@/components/skills-sphere"

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-1 font-mono text-gray-400 text-lg">
                <p>&lt; html &gt;</p>
                <p>&nbsp; &lt; body &gt;</p>
                <p>&nbsp; &nbsp; &lt; h1 &gt;</p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono tracking-wider text-white">
                HI,
                <br />
                I'M
                <br />
                <span className="relative inline-block group">
                  LAKXHANA
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-purple-600 to-purple-900 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>

              <div className="font-mono text-gray-400 text-lg">
                <p>&nbsp; &nbsp; &lt; /h1 &gt;</p>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-['Lucida_Sans_Typewriter'] max-w-xl">
                A passionate software developer building reliable backend systems and AI-driven applications.
              </p>

              <div className="font-mono text-gray-400 text-lg">
                <p>&nbsp; &lt; /body &gt;</p>
                <p>&lt; /html &gt;</p>
              </div>

              {/* Social links and CV download moved to first page */}
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
                <Button
                  className="bg-purple-800 hover:bg-white hover:text-purple-800 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1GZzQD2PzJ_IM3zoXnI3IoKyp5slODTv6/view?usp=sharing")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://www.linkedin.com/in/lakxhana-selva-rajah-48750b214/")}
                >
                  <Linkedin className="h-7 w-7" />
                </Button>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana?tab=repositories")}
                >
                  <Github className="h-7 w-7" />
                </Button>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 flex justify-center lg:justify-end">
              <SkillsSphere />
            </div>
          </div>

          <button
            onClick={() => scrollToSection(aboutSectionRef)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Scroll to About section"
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="h-8 w-8 text-purple-500" />
            </div>
          </button>
        </section>

        {/* About Section */}
        <section ref={aboutSectionRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              About <span className="text-purple-500">Me</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-200">
                  Hello! I am Lakxhana Selva Rajah, a developer currently pursuing a Bachelor in Computer Science
                  (Hons) at Universiti Kebangsaan Malaysia. I am passionate about solving real-world problems through
                  software, from backend API engineering to AI-enabled product experiences.
                </p>

                <p className="text-lg text-gray-200">
                  During my Software Engineer internship at HILTI Asia IT Services, I maintained and improved backend
                  API endpoints, worked with Terraform for infrastructure configuration, and implemented unit and
                  integration testing to improve reliability and performance.
                </p>

                <p className="text-lg text-gray-200">
                  I have also built and presented projects in multiple hackathons, including a Top 5 finish in Build with AI:
                  Gemini Hackathon (GDG KL x Google DeepMind), where I helped develop AstraGuard, a 3D orbital traffic
                  control system using React 19, Three.js, SGP4 physics, and Gemini-powered strategic recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                  <p className="text-gray-300">Bachelors in Computer Science (Hons)</p>
                  <p className="text-sm text-gray-400">Universiti Kebangsaan Malaysia, 2023-2026</p>

                  <p className="text-gray-300 mt-3">Diploma in Computer Science</p>
                  <p className="text-sm text-gray-400">Universiti Malaysia Pahang, 2020-2022</p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
                  <p className="text-gray-300">Software Engineer Intern, HILTI Asia IT Services</p>
                  <p className="text-sm text-gray-400">2025-2026</p>
                  <p className="text-gray-300 mt-3">Software Engineer Intern, SICPA Product Security</p>
                  <p className="text-sm text-gray-400">2022-2023</p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Focus Areas</h3>
                  <p className="text-gray-300">
                    Backend API Development, React/JavaScript, Terraform, Testing, AI Applications, Cloud Tooling
                  </p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Location</h3>
                  <p className="text-gray-300">Seri Kembangan, Selangor, Malaysia</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={() => scrollToSection(projectsSectionRef)}
                className="animate-bounce"
                aria-label="Scroll to Projects section"
              >
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-purple-500" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsSectionRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              GitHub <span className="text-purple-500">Projects</span>
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Selected repositories from my GitHub profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Most Recent</div>
                <h3 className="text-xl font-bold text-white">AstraGuard</h3>
                <img
                  src="/astraguard-preview.png"
                  alt="AstraGuard project preview"
                  className="w-full h-40 object-cover rounded-md border border-purple-500/30"
                />
                <p className="text-sm text-gray-300">
                  Highlight project: AI-assisted 3D orbital traffic control concept for satellite collision prediction and prevention.
                </p>
                <Button
                  className="w-full bg-purple-800 hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana/AstraGuard")}
                >
                  View Repository
                </Button>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">card-stack-trainer</h3>
                <p className="text-sm text-gray-300">
                  Interactive trainer for memorizing popular card stacks with focused practice flows.
                </p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-purple-800 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://github.com/lakxhana/card-stack-trainer")}
                  >
                    Repo
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex-1 text-white border border-purple-500/30 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://card-stack-trainer-cjs5.vercel.app")}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">little-wins</h3>
                <p className="text-sm text-gray-300">
                  Lightweight habit and motivation app for tracking daily progress and consistency.
                </p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-purple-800 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://github.com/lakxhana/little-wins")}
                  >
                    Repo
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex-1 text-white border border-purple-500/30 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://littlewins-one.vercel.app")}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">kl-trip-2026</h3>
                <p className="text-sm text-gray-300">
                  Travel planning web app focused on itinerary flow and practical trip organization.
                </p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-purple-800 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://github.com/lakxhana/kl-trip-2026")}
                  >
                    Repo
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex-1 text-white border border-purple-500/30 hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://kl-trip-2026.vercel.app")}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">FireGuardian</h3>
                <p className="text-sm text-gray-300">
                  Forest fire risk prediction system built with a Flask API and React frontend, using a Sugeno fuzzy
                  inference model from `forestfires4.fis` (12 inputs, 491 rules) to estimate burned area and show
                  fired-rule insights.
                </p>
                <Button
                  className="w-full bg-purple-800 hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana/FireGuardian")}
                >
                  View Repository
                </Button>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">GoNative</h3>
                <p className="text-sm text-gray-300">
                  Kotlin Android project exploring native mobile development, navigation, and UI flows.
                </p>
                <Button
                  className="w-full bg-purple-800 hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana/GoNative")}
                >
                  View Repository
                </Button>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 space-y-3">
                <h3 className="text-xl font-bold text-white">MoodM8</h3>
                <p className="text-sm text-gray-300">
                  Mood-tracking and wellness-focused app concept designed to support daily emotional check-ins.
                </p>
                <Button
                  className="w-full bg-purple-800 hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana/MoodM8")}
                >
                  View Repository
                </Button>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                variant="ghost"
                className="text-white border border-purple-500/30 hover:bg-white hover:text-purple-800"
                onClick={() => window.open("https://github.com/lakxhana?tab=repositories")}
              >
                <Github className="mr-2 h-5 w-5" />
                View All GitHub Repositories
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
