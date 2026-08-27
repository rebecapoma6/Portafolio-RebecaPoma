import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

const misProyectos = [
    {
        id: 1,
        titulo: "SmartPantry",
        imagen: "/Imagenes/smartpantriportafolio.png",
        descripcion: "Aplicación web móvil para gestionar el inventario de la despensa del hogar.",
        tecnologias: ["React", "Tailwind CSS", "Supabase"],
        demoEnlace: "https://smart-pantry-omega.vercel.app/",
        codigoEnlace: "https://github.com/rebecapoma6/SmartPantry"
    },
    {
        id: 2,
        titulo: "Api Gasolinera",
        imagen: "/Imagenes/ApiGasolinera.jpg",
        descripcion: "Consumo de API REST para visualizar información de gasolineras.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        demoEnlace: "https://rebecapoma6.github.io/ApiGasolinera/",
        codigoEnlace: "https://github.com/rebecapoma6/ApiGasolinera/blob/main/script.js"
    },
    {
        id: 3,
        titulo: "Aventura en el Reino JS",
        imagen: "/Imagenes/reinoJs.jpg",
        descripcion: "Juego de rol interactivo por turnos con persistencia en LocalStorage.",
        tecnologias: ["JavaScript", "LocalStorage", "Módulos"],
        demoEnlace: "https://rebecapoma6.github.io/defensaReinoJs/",
        codigoEnlace: "https://github.com/rebecapoma6/defensaReinoJs/tree/main"
    }
]

export default function Projects() {
    return (
        <section id="proyectos" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {misProyectos.map((proyecto) => (
                    <Card key={proyecto.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="w-full h-48 overflow-hidden bg-muted">
                            <img
                                src={proyecto.imagen}
                                alt={proyecto.titulo}
                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                        </div>

                        <CardHeader>
                            <CardTitle>{proyecto.titulo}</CardTitle>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <p className="text-muted-foreground text-sm mb-4">
                                {proyecto.descripcion}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {proyecto.tecnologias.map((tech) => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-3 border-t pt-4">
                            <a
                                href={proyecto.demoEnlace}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({ variant: "default", className: "flex-1" })}
                            >
                                Demo
                            </a>
                            <a
                                href={proyecto.codigoEnlace}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({ variant: "outline", className: "flex-1" })}
                            >
                                Código
                            </a>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </section>
    )
}