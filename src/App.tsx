import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"

import { useThemeStore } from "@/store/useThemeStore"

export default function App() {
 
  useThemeStore((state) => state.theme); 

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <About />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}