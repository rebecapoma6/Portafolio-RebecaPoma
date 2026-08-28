import { motion } from "framer-motion"

export default function About() {
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
          Sobre mí
        </motion.h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <motion.p variants={item}>
            Soy <span className="font-semibold text-foreground">Rebeca Poma</span>, Desarrolladora Web con un enfoque fuerte en el Frontend. Mi ruta en la tecnología comenzó con un Bootcamp intensivo de 850 horas y se consolidó al graduarme del Grado Superior (DAW) en <span className="text-primary font-medium">modalidad Dual</span>.
          </motion.p>
          
          <motion.p variants={item}>
            Esta formación me permitió ganar experiencia real desarrollando soluciones y adaptándome a arquitecturas empresariales desde el primer día. Además, cuento con años de experiencia laboral previa en el sector financiero, lo que me ha dado una base súper sólida en atención al detalle, resiliencia y resolución de problemas bajo presión.
          </motion.p>
          
          <motion.p variants={item}>
            Me apasiona construir interfaces modernas y eficientes. Hoy busco seguir creciendo en el desarrollo web, aportando mi madurez profesional y mi capacidad para adaptarme rápido a nuevas tecnologías en cada proyecto.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}