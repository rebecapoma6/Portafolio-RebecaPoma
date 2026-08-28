import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Tu Logo */}
        <div className="flex items-center gap-2">
          <img src="/Imagenes/logo.png" alt="Logo Rebeca" className="h-8 w-auto" />
          <span className="font-bold text-xl tracking-tight">Rebeca Poma</span>
        </div>

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

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <div className="hidden md:block">
            <a
              href="mailto:mrebecapoma.6@gmail.com?subject=Oportunidad%20Laboral%20-%20Portafolio"
              className={buttonVariants({ variant: "default" })}
            >
              Contáctame
            </a>
          </div>

          {/*Hamburguesa*/}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Menú"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-center">
              <a href="#proyectos" onClick={closeMenu} className="text-base font-medium hover:text-primary transition-colors">
                Mis Proyectos
              </a>
              <a href="#sobremi" onClick={closeMenu} className="text-base font-medium hover:text-primary transition-colors">
                Sobre mí
              </a>
              <a href="#tecnologias" onClick={closeMenu} className="text-base font-medium hover:text-primary transition-colors">
                Tecnologías
              </a>
              
              <a
                href="mailto:mrebecapoma.6@gmail.com?subject=Oportunidad%20Laboral%20-%20Portafolio"
                className={buttonVariants({ variant: "default", className: "w-full mt-2" })}
              >
                Contáctame
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}