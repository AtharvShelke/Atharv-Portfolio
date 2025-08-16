import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import ThemeProvider from "@/context/theme-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharv Shelke - Full Stack Developer",
  description: "Innovative full-stack developer specializing in modern web technologies. Explore my projects, skills, and let's build something amazing together.",
  keywords: "Atharv Shelke, Full Stack Developer, React, Next.js, TypeScript, AI/ML",
  authors: [{ name: "Atharv Shelke" }],
  creator: "Atharv Shelke",
  publisher: "Atharv Shelke",
  openGraph: {
    title: "Atharv Shelke - Full Stack Developer",
    description: "Innovative solutions through code. Check out my latest projects and expertise.",
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
      <meta name="google-site-verification" content="Wb8u9PL36Lq0RYmd_wwujQN23jvLSNrHLhALdlX_5vg" />
      <title>Atharv Shelke - Portfolio</title>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 antialiased text-slate-900 dark:text-slate-100 relative transition-colors duration-300`}
      >
        {/* Enhanced Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="pt-16 sm:pt-20">
              {children}
            </main>
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
