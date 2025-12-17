import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre Mi <span className="text-primary"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Desarrollador Web con Enfoque Full Stack & Estudiante Ing. Sistemas</h3>

                    <p className="text-muted-foreground">
                        {" "}
                        Apasionado por transformar ideas en código funcional y escalable. Utilizo React, JavaScript y Tailwind/Bootstrap para construir interfaces Frontend intuitivas y modernas, mientras que en el Backend, desarrollo soluciones sólidas con Python, PHP y Django. Mi objetivo es siempre optimizar el rendimiento y garantizar la eficiencia en cada proyecto que abordo.
                    </p>

                    <p className="text-muted-foreground">
                       Actualmente me encuentro cursando el primer año de la Ingeniería en Sistemas de Información en la UAI. Esta formación complementa mi experiencia práctica, dándome una base sólida. A futuro, me interesa explorar campos como la Ciberseguridad y el Análisis de Datos, buscando una especialización que combine mi expertise en desarrollo con el manejo estratégico de la información.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Contactame 
                    </a>

                    <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                        Descargar CV
                    </a>
                        
                    </div>
                </div>   

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"></Code>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Desarrollador Frontend</h4>
                                <p className="text-muted-foreground">
                                  Creando interfaces de usuario dinámicas y responsivas con React, JavaScript, Tailwind CSS y Bootstrap. Enfocado en la optimización de la experiencia de usuario (UX) y la calidad del código.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"></User>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Desarrollador Backend</h4>
                                <p className="text-muted-foreground">
                                  Implementando la lógica del negocio con Python, Django y PHP. Diseño de APIs robustas y aseguramiento de la escalabilidad del sistema para manejar grandes volúmenes de datos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                            </div>

                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Estudiante Ing. Sistemas</h4>
                                <p className="text-muted-foreground">
                                  Cursando Ingeniería en Sistemas de Información en la UAI. Desarrollo de una base teórica sólida con miras a especializarme en Ciberseguridad o Ciencia de Datos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </section>;
};