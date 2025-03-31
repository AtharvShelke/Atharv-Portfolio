import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharv Shelke - Full Stack Developer & Portfolio",
  description: "Explore the portfolio of Atharv Shelke, a full-stack web developer specializing in React, Next.js, and backend development. Discover projects, skills, and contact details.",
  keywords: "Atharv Shelke, Full Stack Developer, Web Developer, Next.js, React, Portfolio",
  authors: [{ name: "Atharv Shelke" }],
  creator: "Atharv Shelke",
  publisher: "Atharv Shelke",
  openGraph: {
    title: "Atharv Shelke - Full Stack Developer",
    description: "Check out the portfolio of Atharv Shelke, showcasing web development projects and expertise.",
    url: "https://atharv-portfolio-ivory.vercel.app",
    siteName: "Atharv Shelke Portfolio",
    type: "website",
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased text-gray-950 relative pt-28 sm:pt-36`}
      >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
   
        
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
