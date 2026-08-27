import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"

// Pequeño truco para que el tema se aplique en el primer milisegundo
import { useThemeStore } from "@/store/useThemeStore"

export default function App() {
  // Al llamar al store aquí, aseguramos que zustand cargue el estado de LocalStorage al toque
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