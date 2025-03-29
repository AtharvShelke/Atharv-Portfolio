import React from "react";


import { MdOutlineSchool } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaReact,FaLaptopCode } from "react-icons/fa";
import jobPortalImg from "@/public/job-portal.png";
import inventoryManagementImg from "@/public/inventory-management.png";
import caseCobraImg from "@/public/e-commerce.png";
import restaura from "@/public/restaura.png";
import enrich from "@/public/enrich.png";
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
      "Currently pursuing a degree in Computer Science Engineering. Gained hands-on experience in web development and currently exploring AI/ML.",
    icon: React.createElement(MdOutlineSchool),
    date: "2022 - 2026",
  },
  {
    title: "College Web Development Project",
    location: "MGM University",
    description:
      "Developed a Training and Placement Portal to assist students and recruiters in the hiring process. Worked with modern web technologies to build a seamless experience.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Created an Inventory Management Portal for an interior design company, allowing them to efficiently track stock and manage resources. Built using React, Node.js, and PostgreSQL.",
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2024",
  },
  {
    title: "Developer - CaseCobra",
    location: "Personal Project",
    description:
      "Built an eCommerce platform for a custom phone case company. Integrated a custom design tool, enabling users to create their own cases. Tech stack: Next.js, Tailwind, Stripe for payments.",
    icon: React.createElement(FaLaptopCode),
    date: "2024",
  },
  {
    title: "Aspiring AI/ML Enthusiast",
    location: "Self-Learning",
    description:
      "Currently diving into AI/ML, focusing on Python, TensorFlow, and machine learning fundamentals while continuing to work as a full-stack developer.",
    icon: React.createElement(RiRobot2Line),
    date: "2025 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "Enrich Kitchen (Multi-Page Frontend Website)",
    description:
      "Developed a sleek, multi-page frontend with smooth animations using Next.js, Tailwind, and Framer Motion.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion", "JavaScript"],
    imageUrl: enrich,
  },
  {
    title: "Restaura (Single-Page Frontend Website)",
    description:
      "Built a fast, responsive single-page site with fluid UI animations using Next.js, Tailwind, and Framer Motion.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion", "JavaScript"],
    imageUrl: restaura,
  },

  {
    title: "Training & Placement Portal",
    description:
      "Worked as a Full Stack Developer to streamline the portal for managing student placements, integrating an intuitive UI with a robust database connection using MongoDB and Prisma.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind", "JavaScript"],
    imageUrl: jobPortalImg,
  }, {
    title: "CaseCobra (E-commerce Store)",
    description:
      "Developed a full-stack e-commerce platform from end to end for a case store, ensuring a seamless shopping experience with modern web technologies.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind", "TypeScript"],
    imageUrl: caseCobraImg,
  },
  {
    title: "Inventory Management Portal",
    description:
      "Built a robust inventory management system for real-time tracking, optimizing stock management with Next.js, Prisma, MongoDB, and a clean Tailwind UI.",
    tags: ["Next.js", "Prisma", "MongoDB", "Tailwind", "JavaScript"],
    imageUrl: inventoryManagementImg,
  },

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