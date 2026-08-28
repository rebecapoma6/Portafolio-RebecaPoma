import { useLanguageStore } from "@/store/useLanguageStore";
import { motion } from "framer-motion"

export default function Hero() {
  const { t } = useLanguageStore();
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-20 overflow-hidden">
      
      <motion.div 
        className="flex-1 space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t.hero.subtitle}
        </p>
      </motion.div>
      
      <motion.div 
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img 
          src="/Imagenes/portada.jpg" 
          alt="Portada de mi portafolio" 
          className="rounded-2xl shadow-xl w-full max-w-md object-cover aspect-square border border-primary/20"
        />
      </motion.div>
      
    </section>
  )
}