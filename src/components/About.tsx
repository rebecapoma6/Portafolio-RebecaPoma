import { useLanguageStore } from "@/store/useLanguageStore";
import { motion } from "framer-motion"

export default function About() {
  const { t } = useLanguageStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Aquí está la magia: cada párrafo tarda 0.2s en salir después del anterior
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="sobremi" className="py-20 bg-muted/50 rounded-3xl px-6 md:px-12 my-12 overflow-hidden border border-border/50">
      <motion.div 
        className="max-w-3xl mx-auto text-center md:text-left"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={item} className="text-3xl font-bold mb-6 text-center text-primary">
          {t.about.title}
        </motion.h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <motion.p variants={item} dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
          <motion.p variants={item} dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
          <motion.p variants={item} dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
        </div>
      </motion.div>
    </section>
  )
}