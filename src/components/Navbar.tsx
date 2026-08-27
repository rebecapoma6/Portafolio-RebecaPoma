import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Tu Logo */}
        <div className="flex items-center gap-2">
          <img src="/Imagenes/logo.png" alt="Logo Rebeca" className="h-8 w-auto" />
          <span className="font-bold text-xl tracking-tight">Rebeca Poma</span>
        </div>

        {/* Tu Menú de Navegación */}
        <nav className="hidden md:flex gap-6">
          <a href="#proyectos" className="text-sm font-medium hover:text-primary transition-colors">Mis Proyectos</a>
          <a href="#sobremi" className="text-sm font-medium hover:text-primary transition-colors">Sobre mí</a>
          <a href="#tecnologias" className="text-sm font-medium hover:text-primary transition-colors">Tecnologías</a>
        </nav>

        {/* Botón de Contacto (Extra opcional para shadcn) */}
        <div className="hidden md:block">
          <Button variant="default">Contáctame</Button>
        </div>
      </div>
    </header>
  )
}