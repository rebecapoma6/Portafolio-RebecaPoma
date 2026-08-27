import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle" // Aquí importamos tu botón de Zustand

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Tu Logo */}
        <div className="flex items-center gap-2">
          <img src="/Imagenes/logo.png" alt="Logo Rebeca" className="h-8 w-auto" />
          <span className="font-bold text-xl tracking-tight">Rebeca Poma</span>
        </div>

        {/* Menú de Navegación con la animación hover (la rayita fucsia) */}
        <nav className="hidden md:flex gap-6">
          <a href="#proyectos" className="relative text-sm font-medium transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            Mis Proyectos
          </a>
          <a href="#sobremi" className="relative text-sm font-medium transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            Sobre mí
          </a>
          <a href="#tecnologias" className="relative text-sm font-medium transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            Tecnologías
          </a>
        </nav>

        {/* Lado derecho: El icono del tema SIEMPRE visible y el botón Contáctame */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button variant="default">Contáctame</Button>
          </div>
        </div>

      </div>
    </header>
  )
}