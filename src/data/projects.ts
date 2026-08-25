/**
 * ============================================================
 *  PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR PROJECTS
 * ============================================================
 * Edit via GitHub → commit → website updates automatically
 */

export interface Project {
  id: number
  title: string
  category: string
  description: string
  tools: string[]
  year: number
  image: string
  link?: string
  featured: boolean
  tags: string[]
}

export interface Certificate {
  id: number
  title: string
  issuer: string
  year: number
  description: string
  /** URL gambar sertifikat (path lokal /images/... atau URL eksternal) */
  image: string
  /** Optional: link ke PDF / halaman sertifikat */
  link?: string
}

export const typingRoles = [
  '3D Animator',
  'Voice Actor',
  'Blender Artist',
  'Roblox Developer',
  'Web Creator'
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Robotic Arm Animation",
    category: "Mechanical",
    description: "High-detail 3D animation of a 6-axis industrial robotic arm performing precision assembly tasks.",
    tools: ["Blender", "Substance Painter", "After Effects"],
    year: 2025,
    image: "/images/robotic-arm.jpg",
    featured: true,
    tags: ["robotics", "industrial", "animation", "mechanical"]
  },
  {
    id: 2,
    title: "Automotive Product Visualization",
    category: "Product Animation",
    description: "Cinematic product reveal for an electric vehicle chassis.",
    tools: ["Blender", "Cinema 4D", "Photoshop"],
    year: 2025,
    image: "/images/ev-chassis.jpg",
    featured: true,
    tags: ["automotive", "product", "visualization"]
  },
  {
    id: 3,
    title: "Factory Assembly Line Simulation",
    category: "Industrial Viz",
    description: "Real-time capable 3D simulation of a complete production line.",
    tools: ["Blender", "Unreal Engine 5", "Houdini"],
    year: 2024,
    image: "/images/assembly-line.jpg",
    featured: true,
    tags: ["factory", "simulation", "industrial"]
  },
  {
    id: 4,
    title: "Roblox Experience Prototype",
    category: "Game Dev",
    description: "Interactive Roblox experience with custom animations and scripting.",
    tools: ["Roblox Studio", "Lua", "Blender"],
    year: 2024,
    image: "/images/roblox.jpg",
    featured: false,
    tags: ["roblox", "game", "interactive"]
  },
  {
    id: 5,
    title: "Heavy Machinery Exploded View",
    category: "Mechanical",
    description: "Detailed technical animation of industrial heavy machinery.",
    tools: ["Blender", "Maya", "Substance"],
    year: 2024,
    image: "/images/heavy-machinery.jpg",
    featured: false,
    tags: ["exploded-view", "technical", "machinery"]
  },
  {
    id: 6,
    title: "Portfolio Website UI",
    category: "Web",
    description: "Interactive portfolio with 3D-inspired design and smooth animations.",
    tools: ["Vue", "TypeScript", "CSS", "HTML"],
    year: 2025,
    image: "/images/portfolio-web.jpg",
    featured: false,
    tags: ["web", "ui", "frontend"]
  }
]

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Blender Fundamentals",
    issuer: "Blender Foundation / Online Course",
    year: 2024,
    description: "Core modeling, materials, lighting and animation principles in Blender.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    link: ""
  },
  {
    id: 2,
    title: "3D Animation Specialist",
    issuer: "Industry Training Program",
    year: 2023,
    description: "Advanced character & technical animation techniques for industrial applications.",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80",
    link: ""
  },
  {
    id: 3,
    title: "Web Development Basics",
    issuer: "Self-paced / Online",
    year: 2024,
    description: "HTML, CSS, JavaScript fundamentals and modern frontend practices.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    link: ""
  },
  {
    id: 4,
    title: "Roblox Studio Creator",
    issuer: "Roblox Education",
    year: 2023,
    description: "Building interactive experiences, scripting with Lua, and publishing games.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    link: ""
  },
  {
    id: 5,
    title: "Voice Acting Fundamentals",
    issuer: "Voice Performance Workshop",
    year: 2024,
    description: "Vocal technique, character performance, and recording for animation & media.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    link: ""
  }
]

export const skills = [
  { name: "Blender", level: 92, category: "3D Software" },
  { name: "CSS", level: 85, category: "Web" },
  { name: "Roblox Studio", level: 80, category: "Game Dev" },
  { name: "Java", level: 75, category: "Programming" },
  { name: "HTML", level: 88, category: "Web" },
  { name: "TypeScript / Vue", level: 78, category: "Web" },
  { name: "3D Animation", level: 90, category: "Specialty" },
  { name: "Voice Acting", level: 82, category: "Performance" },
  { name: "Product Visualization", level: 88, category: "Specialty" },
  { name: "Technical Animation", level: 85, category: "Specialty" }
]

export const about = {
  name: "Kojouta",
  title: "3D Animator · Voice Actor · Creator",
  bio: `Passionate creator specializing in 3D animation, industrial visualization, and voice performance.
I love bringing machines and characters to life — whether through Blender, Roblox, or the web.
Always exploring new tools and telling stories through motion, sound, and interactive experiences.`,
  experience: "6+ Years",
  projectsCompleted: "80+",
  clients: "25+",
  location: "Indonesia · Remote"
}
