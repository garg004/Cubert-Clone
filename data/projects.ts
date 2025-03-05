export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial dashboard for tracking investments, expenses, and financial goals with real-time data visualization and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Data Visualization", "Fintech", "Dashboard"],
  },
  {
    id: 2,
    title: "Artisan",
    category: "E-commerce Platform",
    description:
      "A premium e-commerce platform for artisanal products with a focus on storytelling, high-quality imagery, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000&auto=format&fit=crop",
    tags: ["E-commerce", "UI Design", "Next.js"],
  },
  {
    id: 3,
    title: "Wellness App",
    category: "Mobile Application",
    description:
      "A holistic wellness application that combines fitness tracking, meditation guides, and nutrition planning with a clean, minimalist interface.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Mobile", "Health Tech"],
  },
  {
    id: 4,
    title: "Architect Portfolio",
    category: "Brand & Identity",
    description:
      "A sophisticated portfolio website for an architecture firm showcasing their projects with immersive visuals and interactive 3D models.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Branding", "Portfolio", "3D Visualization"],
  },
]

