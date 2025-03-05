"use client"

import { useEffect, useRef, useState } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  color: string
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)

  // Generate stars with different properties
  useEffect(() => {
    const generateStars = () => {
      const stars: Star[] = []
      const colors = [
        "rgba(255, 255, 255, 0.8)",
        "rgba(173, 216, 230, 0.8)",
        "rgba(186, 85, 211, 0.8)",
        "rgba(135, 206, 250, 0.8)",
      ]

      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      starsRef.current = stars
    }

    generateStars()

    const handleResize = () => {
      generateStars()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate stars
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Update star position
        star.y += star.speed

        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Apply parallax effect based on mouse position
        const parallaxX = star.x + mousePosition.x * 20 * star.speed
        const parallaxY = star.y + mousePosition.y * 20 * star.speed

        // Draw star
        ctx.beginPath()
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity
        ctx.arc(parallaxX, parallaxY, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

