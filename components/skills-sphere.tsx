"use client"

import { useEffect, useRef } from "react"

export default function SkillsSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tagCloudRef = useRef<any>(null)

  useEffect(() => {
    const loadTagCloud = async () => {
      // Check if window is defined (client-side)
      if (typeof window !== "undefined") {
        try {
          // Check if TagCloud is already available
          if (window.TagCloud) {
            initializeTagCloud()
          } else {
            // If not available, we'll create a script element to load it
            const script = document.createElement("script")
            script.src = "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"
            script.async = true
            script.onload = initializeTagCloud
            document.body.appendChild(script)
          }
        } catch (error) {
          console.error("Error loading TagCloud:", error)
        }
      }
    }

    const initializeTagCloud = () => {
      if (!containerRef.current || !window.TagCloud) return

      const texts = [
         "HTML",
          "CSS",
          "React Native",
          "JavaScript",
          "React.js",
          "Cucumber",
          "Selenium",
          "Maven",
          "Spring",
          "Python",
          "Java",
          "C#",
          "PHP",
          "C"
      ]

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
        keep: true,
      }

      tagCloudRef.current = window.TagCloud(containerRef.current, texts, options)
    }

    loadTagCloud()

    return () => {
      // Clean up TagCloud instance when component unmounts
      if (tagCloudRef.current) {
        tagCloudRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-[400px] w-full">
      <div ref={containerRef} className="tagcloud"></div>
    </div>
  )
}
