

export default function Hero() {
    return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-20">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bienvenidos a mi Portafolio
        </h1>
        <p className="text-xl text-muted-foreground">
          Diseño, desarrollo y creatividad
        </p>
      </div>
      
      <div className="flex-1 flex justify-center">
        <img 
          src="/Imagenes/portada.jpg" 
          alt="Portada de mi portafolio" 
          className="rounded-2xl shadow-xl w-full max-w-md object-cover aspect-square"
        />
      </div>
    </section>
  )
}