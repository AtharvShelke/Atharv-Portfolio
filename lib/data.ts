import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jobPortalImg from "@/public/job-portal.png";
import inventoryManagementImg from "@/public/inventory-management.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import caseCobraImg from "@/public/e-commerce.png";
import restaura from "@/public/restaura.png";
import enrich from "@/public/enrich.png";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Enrich Kitchen (Multi-Page Frontend Website)",
    description:
      "Developed a sleek, multi-page frontend with smooth animations using Next.js, Tailwind, and Framer Motion.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: enrich,
  },
  {
    title: "Restaura (Single-Page Frontend Website)",
    description:
      "Built a fast, responsive single-page site with fluid UI animations using Next.js, Tailwind, and Framer Motion.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: restaura,
  },

  {
    title: "Training & Placement Portal",
    description:
      "Worked as a Full Stack Developer to streamline the portal for managing student placements, integrating an intuitive UI with a robust database connection using MongoDB and Prisma.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind"],
    imageUrl: jobPortalImg,
  }, {
    title: "CaseCobra (E-commerce Store)",
    description:
      "Developed a full-stack e-commerce platform from end to end for a case store, ensuring a seamless shopping experience with modern web technologies.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind"],
    imageUrl: caseCobraImg,
  },
  {
    title: "Inventory Management Portal",
    description:
      "Built a robust inventory management system for real-time tracking, optimizing stock management with Next.js, Prisma, MongoDB, and a clean Tailwind UI.",
    tags: ["Next.js", "Prisma", "MongoDB", "Tailwind"],
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