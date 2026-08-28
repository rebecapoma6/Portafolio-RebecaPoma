import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiVite, SiFigma, SiSupabase, SiMysql, SiPostgresql, SiGithub } from "react-icons/si"
import { FaJava, FaNodeJs, FaPython } from "react-icons/fa"
import { motion } from "framer-motion"

export default function TechStack() {
  const skills = {
    frontend: [
      { name: "React", icon: <SiReact /> }, { name: "TypeScript", icon: <SiTypescript /> }, 
      { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> }, { name: "CSS3", icon: <SiCss /> }
    ],
    backend: [
      { name: "Java", icon: <FaJava /> }, { name: "Node.js", icon: <FaNodeJs /> }, { name: "Python", icon: <FaPython /> }
    ],
    database: [
      { name: "Supabase", icon: <SiSupabase /> }, { name: "MySQL", icon: <SiMysql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }
    ],
    tools: [
      { name: "Vite", icon: <SiVite /> }, { name: "GitHub", icon: <SiGithub /> }, { name: "Figma", icon: <SiFigma /> }
    ]
  }

  const secciones = [
    { title: "Frontend Development", data: skills.frontend, col: "md:col-span-2" },
    { title: "Backend", data: skills.backend, col: "" },
    { title: "Bases de Datos", data: skills.database, col: "" },
    { title: "Herramientas y Despliegue", data: skills.tools, col: "md:col-span-2" },
  ];

  return (
    <section id="tecnologias" className="py-20 overflow-hidden">
      
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        Tecnologías
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {secciones.map((seccion, i) => (
          
          <motion.div
            key={seccion.title}
            className={seccion.col}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className="h-full border-border/50 bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{seccion.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {seccion.data.map(tech => (
                  <div key={tech.name} className="flex flex-col items-center gap-2 p-2 hover:scale-110 transition-transform cursor-pointer">
                    <div className="text-3xl text-muted-foreground hover:text-primary transition-colors">
                      {tech.icon}
                    </div>
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
        ))}
      </div>
    </section>
  )
}