import { logos } from "../data";

export default function SkillsPage() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-15 items-center">
        <div className="relative mt-10 mb-5">
          <div className="relative isolate z-10 mb-10 lg:mb-5">
            <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border-y-2 border-black bg-black lg:border-2 lg:rounded-4xl" />

            <div className="relative z-10 flex min-h-52 flex-col justify-center animate-fade animate-duration-1200 animate-ease-in border-y-2 border-black bg-white p-4 lg:border-2 lg:rounded-4xl">
              <p className="mt-2 text-lg">
                Mi stack está orientado a crear soluciones completas, desde el
                <span className="font-bold">
                  {""} desarrollo de aplicaciones web
                </span>{" "}
                hasta la{" "}
                <span className="font-bold">
                  {""}automatización de procesos
                </span>{" "}
                y la integración de{" "}
                <span className="font-bold">{""}inteligencia artificial</span>.
                Utilizo <span className="font-bold">{""}Python y Django</span>{" "}
                para el desarrollo backend, creación de APIs y construcción de
                sistemas sólidos. Para el frontend trabajo con{" "}
                <span className="font-bold">{""}React</span>, creando interfaces
                claras, modernas y funcionales. También aplico Python,{" "}
                <span className="font-bold">{""}n8n</span> y distintas librerías
                para automatizar tareas, procesar información, trabajar con
                archivos y conectar herramientas entre sí. En proyectos más
                avanzados, incorporo{" "}
                <span className="font-bold">
                  {""}agentes, MCP, Skills y herramientas de IA
                </span>{" "}
                para potenciar procesos y construir soluciones más inteligentes.
                Además, cuento con experiencia en{" "}
                <span className="font-bold">
                  {""}despliegues con Docker y Linux
                </span>
                , lo que me permite llevar aplicaciones desde el desarrollo
                hasta un entorno productivo.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl">
          <h2 className="relative text-5xl font-bold text-center mb-15">
            Tecnologías
            <span className="animate-grow-underline absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-70 h-1 bg-primary"></span>
          </h2>

          <div className="animate-fade-left animate-duration-2000  lg:flex items-center gap-10 mb-2">
            <h2 className="text-2xl mb-4 text-primary font-bold">
              DESARROLLO WEB
            </h2>

            <div className="border-black border-2 overflow-hidden w-full max-w-2xl bg-surface p-5 rounded-lg">
              <div className="relative">
                <div className="flex w-max animate-scroll-backend">
                  {/* Duplicamos las imágenes para efecto de carrusel infinito */}
                  {[...logos["web"], ...logos["web"]].map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Logo de ${logo}`}
                      className="w-22 h-25 mx-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mb-10 font-bold text-center text-lg">
            Principal:{" "}
            <span className="text-primary">Python, Django, React</span>
          </p>

          <div className="animate-fade-left animate-duration-2000 lg:flex items-center gap-10 mb-2">
            <h2 className="text-2xl mb-4 rounded-lg text-primary font-bold text-center">
              AUTOMATIZACIÓN + IA
            </h2>
            <div className="border-black border-2 overflow-hidden w-full max-w-2xl bg-surface p-5 rounded-lg">
              <div className="relative">
                <div className="flex w-max animate-scroll-frontend">
                  {[...logos["automation"], ...logos["automation"]].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Logo de ${logo}`}
                        className="w-22 h-25 mx-4"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-center text-lg">
            Principal:{" "}
            <span className="text-primary">Python, n8n, Codex, IA Skills</span>
          </p>
        </div>
      </div>
    </>
  );
}
