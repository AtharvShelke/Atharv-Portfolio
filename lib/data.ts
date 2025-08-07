import React from "react";


import { MdOutlineSchool } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaReact,FaLaptopCode } from "react-icons/fa";
import jobPortalImg from "@/public/job-portal.png";
import inventoryManagementImg from "@/public/inventory-management.png";
import caseCobraImg from "@/public/e-commerce.png";
import restaura from "@/public/new_assets/restaura-project.png";
import enrich from "@/public/new_assets/enrich-project.png";
import aiFitness from "@/public/new_assets/ai-fitness.png";
import movieSeach from "@/public/new_assets/movie-search.png";
import aiStoryGenerator from "@/public/new_assets/AI-STORY.png"
import { RiRobot2Line } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Bachelor's in Computer Science Engineering",
    location: "MGM University",
    description:
      "Currently pursuing a degree in Computer Science Engineering with a focus on modern software development practices. Building strong foundations in algorithms, data structures, and full-stack development while maintaining excellent academic performance.",
    icon: React.createElement(MdOutlineSchool),
    date: "2022 - 2026",
    skills: ["Data Structures", "Algorithms", "Database Management", "Software Engineering", "Computer Networks"]
  },
  {
    title: "AI/ML Research & Development",
    location: "Self-Learning & Practice",
    description:
      "Actively exploring the frontiers of artificial intelligence and machine learning. Working with Python frameworks, building predictive models, and understanding deep learning concepts while applying them to real-world problems.",
    icon: React.createElement(RiRobot2Line),
    date: "2024 - Present",
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis", "Neural Networks", "Pandas"]
  },
  {
    title: "Full-Stack Developer - CaseCobra",
    location: "Personal Project",
    description:
      "Architected and developed a comprehensive eCommerce platform featuring a custom design tool for phone cases. Implemented secure payment processing, user authentication, and responsive design with modern web technologies.",
    icon: React.createElement(FaLaptopCode),
    date: "2024",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Database Design", "Authentication"]
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Delivered a complete inventory management solution for an interior design company, streamlining their resource tracking and operational efficiency. Collaborated directly with stakeholders to understand requirements and deliver a scalable solution.",
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2024",
    skills: ["React", "Node.js", "PostgreSQL", "API Development", "Project Management", "Client Relations"]
  },
  {
    title: "College Web Development Lead",
    location: "MGM University",
    description:
      "Led the development of a comprehensive Training and Placement Portal, facilitating seamless interaction between students, recruiters, and administration. Managed a team of developers and implemented agile development practices.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
    skills: ["Team Leadership", "React", "MongoDB", "Prisma", "Project Planning", "System Architecture"]
  },
] as const;


export const projectsData = [
  {
    title: "AI Story Generator",
    description:
      "An intelligent fitness application that leverages Google Generative AI to provide personalized workout recommendations, track progress, and offer real-time fitness guidance with a sleek, modern interface.",
    tags: ["React", "Next.js", "Tailwind CSS", "Google Generative AI", "JavaScript"],
    imageUrl: aiStoryGenerator,
    link: "https://ai-story-generator-theta.vercel.app/",
    github: undefined, 
    date: "2024",
  },
  {
    title: "AI Fitness App",
    description:
      "An intelligent fitness application that leverages Google Generative AI to provide personalized workout recommendations, track progress, and offer real-time fitness guidance with a sleek, modern interface.",
    tags: ["React", "Next.js", "Tailwind CSS", "Google Generative AI", "JavaScript"],
    imageUrl: aiFitness,
    link: "https://ai-fitness-nextjs-zeta.vercel.app/",
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "Enrich Kitchen",
    description:
      "A sophisticated multi-page furniture website featuring smooth animations, elegant design, and seamless user experience. Built for Enrich Furniture to showcase their premium kitchen and furniture collections.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    imageUrl: enrich,
    link: "https://www.enrichfurniture.com",
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "Movie Search App",
    description:
      "A responsive movie discovery platform that allows users to search for movies, view detailed information, and explore trending films. Features real-time search with clean UI and smooth navigation.",
    tags: ["React", "JavaScript", "CSS", "TMDb API", "Appwrite"],
    imageUrl: movieSeach,
    link: "https://movie-search-app-vert-five.vercel.app/",
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "Restaura",
    description:
      "A modern single-page restaurant website featuring fluid animations, elegant design, and responsive layout. Showcases menu items, restaurant ambiance, and provides seamless user experience.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    imageUrl: restaura,
    link: "https://restaura-sigma.vercel.app/",
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "Training & Placement Portal",
    description:
      "A comprehensive full-stack portal designed to streamline student placement processes. Features job posting, application tracking, student profiles, and company dashboard for efficient placement management.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind CSS", "JavaScript"],
    imageUrl: jobPortalImg,
    link: undefined, 
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "CaseCobra E-commerce",
    description:
      "A full-featured e-commerce platform for custom phone cases. Includes product customization, secure payment processing, order management, and admin dashboard with complete end-to-end functionality.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind CSS", "TypeScript"],
    imageUrl: caseCobraImg,
    link: "https://casecobra-atharv.vercel.app/",
    github: undefined, // Add your actual GitHub URL
    date: "2024",
  },
  {
    title: "Inventory Management System",
    description:
      "A robust inventory management portal featuring real-time stock tracking, automated alerts, supplier management, and comprehensive reporting dashboard for efficient warehouse operations.",
    tags: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS", "JavaScript"],
    imageUrl: inventoryManagementImg,
    link: undefined, 
    github: undefined,
    date: "2024",
  }
] as const;




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;