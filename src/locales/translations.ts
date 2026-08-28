export const translations = {
  es: {
    nav: { projects: "Mis Proyectos", about: "Sobre mí", tech: "Tecnologías", contact: "Contáctame" },
    hero: { title: "Bienvenidos a mi Portafolio", subtitle: "Diseño, desarrollo y creatividad" },
    about: {
      title: "Sobre mí",
      p1: "Soy <span class='font-semibold text-foreground'>Rebeca Poma</span>, Desarrolladora Web con un enfoque fuerte en el Frontend. Mi ruta en la tecnología comenzó con un Bootcamp intensivo de 850 horas y se consolidó al graduarme del Grado Superior (DAW) en <span class='text-primary font-medium'>modalidad Dual</span>.",
      p2: "Esta formación me permitió ganar experiencia real desarrollando soluciones y adaptándome a arquitecturas empresariales desde el primer día. Además, cuento con años de experiencia laboral previa en el sector financiero, lo que me ha dado una base súper sólida en atención al detalle, resiliencia y resolución de problemas bajo presión.",
      p3: "Me apasiona construir interfaces modernas y eficientes. Hoy busco seguir creciendo en el desarrollo web, aportando mi madurez profesional y mi capacidad para adaptarme rápido a nuevas tecnologías en cada proyecto."
    },
    projects: {
      title: "Mis Proyectos",
      demo: "Demo",
      code: "Código",
      items: [
        {
          titulo: "SmartPantry",
          descripcion: "Aplicación web móvil para gestionar el inventario de la despensa del hogar."
        },
        {
          titulo: "Api Gasolinera",
          descripcion: "Consumo de API REST para visualizar información de gasolineras."
        },
        {
          titulo: "Aventura en el Reino JS",
          descripcion: "Juego de rol interactivo por turnos con persistencia en LocalStorage."
        }
      ]
    },
    tech: {
      title: "Tecnologías",
      frontend: "Desarrollo Frontend",
      backend: "Backend",
      db: "Bases de Datos",
      tools: "Herramientas y Despliegue"
    }
  },
  en: {
    nav: { projects: "My Projects", about: "About Me", tech: "Tech Stack", contact: "Contact Me" },
    hero: { title: "Welcome to my Portfolio", subtitle: "Design, development, and creativity" },
    about: {
      title: "About Me",
      p1: "I am <span class='font-semibold text-foreground'>Rebeca Poma</span>, a Web Developer with a strong focus on Frontend. My journey in tech started with an intensive 850-hour Bootcamp and was consolidated by graduating with a Higher Degree (DAW) in <span class='text-primary font-medium'>Dual mode</span>.",
      p2: "This training allowed me to gain real-world experience developing solutions and adapting to enterprise architectures from day one. Additionally, I have years of prior work experience in the financial sector, which has given me a rock-solid foundation in attention to detail, resilience, and problem-solving under pressure.",
      p3: "I am passionate about building modern and efficient interfaces. Today I am looking to continue growing in web development, bringing my professional maturity and ability to quickly adapt to new technologies in every project."
    },
    projects: {
      title: "My Projects",
      demo: "Live Demo",
      code: "Source Code",
      items: [
        {
          titulo: "SmartPantry",
          descripcion: "Mobile web application to manage and track the household pantry inventory."
        },
        {
          titulo: "Gas Station API",
          descripcion: "REST API consumption to display real-time gas station information."
        },
        {
          titulo: "JS Kingdom Adventure",
          descripcion: "Turn-based interactive RPG game with LocalStorage persistence."
        }
      ]
    },
    tech: {
      title: "Tech Stack",
      frontend: "Frontend Development",
      backend: "Backend",
      db: "Databases",
      tools: "Tools & Deployment"
    }
  }
};

export type Language = 'es' | 'en';