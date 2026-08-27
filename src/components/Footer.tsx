import { buttonVariants } from "@/components/ui/button"
// Importamos los íconos de FontAwesome (Fa)
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rebeca Poma. Todos los derechos reservados.
        </p>

        <nav className="flex items-center gap-4">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/rebeca-poma-6266a2253/" 
            target="_blank" 
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/rebecapoma6" 
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          {/* Correo (Pon tu correo real aquí) */}
          <a 
            href="mailto:tu-correo@gmail.com" 
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="Correo"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </nav>

      </div>
    </footer>
  )
}