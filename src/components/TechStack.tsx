import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  // Organizando tus habilidades reales en categorías
  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Zustand"],
    backend: ["Java", "C#", "Node.js", "Python"],
    database: ["Supabase", "MySQL", "PostgreSQL"],
    tools: ["Vite", "Git / GitHub", "Vercel", "Figma", "Draw.io"]
  }

  return (
    <section id="tecnologias" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Tecnologías y Herramientas</h2>
      
      {/* Grilla estilo Bento Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        
        {/* Frontend - Ocupa más espacio (2 columnas en compu) */}
        <Card className="md:col-span-2 bg-primary/5 hover:bg-primary/10 transition-colors border-primary/20 shadow-sm hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Frontend Development</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.frontend.map(tech => (
              <Badge key={tech} variant="default" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Backend */}
        <Card className="hover:shadow-md transition-shadow shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.backend.map(tech => (
              <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Bases de Datos */}
        <Card className="hover:shadow-md transition-shadow shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Bases de Datos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.database.map(tech => (
              <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Herramientas - Ocupa 2 columnas en compu */}
        <Card className="md:col-span-2 hover:shadow-md transition-shadow shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Herramientas y Despliegue</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.tools.map(tech => (
              <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>

      </div>
    </section>
  )
}