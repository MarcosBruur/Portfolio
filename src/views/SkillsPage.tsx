import { logos } from "../data";

export default function SkillsPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-15 2xl:gap-24">
        <div className="relative mb-5 mt-4 w-full lg:mt-10 lg:max-w-2xl 2xl:max-w-3xl">
          <div className="relative isolate z-10 mb-10 lg:mb-5">
            <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border-y-2 border-black bg-black lg:border-2 lg:rounded-4xl" />

            <div className="relative z-10 flex min-h-52 flex-col justify-center animate-fade animate-duration-1200 animate-ease-in border-y-2 border-black bg-white p-5 lg:border-2 lg:rounded-4xl 2xl:p-8">
              <p className="mt-2 text-base leading-relaxed sm:text-lg 2xl:text-xl">
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

        <div className="w-full rounded-xl p-0 sm:p-4 lg:max-w-4xl 2xl:max-w-5xl">
          <h2 className="relative mb-12 text-center text-4xl font-bold sm:mb-15 sm:text-5xl 2xl:text-6xl">
            Tecnologías
            <span className="animate-grow-underline absolute bottom-[-8px] left-1/2 h-1 w-48 -translate-x-1/2 bg-primary sm:w-70"></span>
          </h2>

          <div className="animate-fade-left animate-duration-2000 mb-2 items-center gap-10 lg:flex">
            <h2 className="mb-4 text-center text-xl font-bold text-primary sm:text-2xl lg:min-w-52 lg:text-left 2xl:text-3xl">
              DESARROLLO WEB
            </h2>

            <div className="w-full overflow-hidden rounded-lg border-2 border-black bg-surface p-3 sm:p-5 lg:max-w-2xl 2xl:max-w-3xl">
              <div className="relative">
                <div className="flex w-max animate-scroll-backend">
                  {[...logos["web"], ...logos["web"]].map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Logo de ${logo}`}
                      className="mx-3 h-18 w-18 sm:mx-4 sm:h-25 sm:w-22 2xl:h-28 2xl:w-25"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mb-10 text-center text-base font-bold sm:text-lg 2xl:text-xl">
            Principal:{" "}
            <span className="text-primary">Python, Django, React</span>
          </p>

          <div className="animate-fade-left animate-duration-2000 mb-2 items-center gap-10 lg:flex">
            <h2 className="mb-4 rounded-lg text-center text-xl font-bold text-primary sm:text-2xl lg:min-w-52 lg:text-left 2xl:text-3xl">
              AUTOMATIZACIÓN + IA
            </h2>
            <div className="w-full overflow-hidden rounded-lg border-2 border-black bg-surface p-3 sm:p-5 lg:max-w-2xl 2xl:max-w-3xl">
              <div className="relative">
                <div className="flex w-max animate-scroll-frontend">
                  {[...logos["automation"], ...logos["automation"]].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Logo de ${logo}`}
                        className="mx-3 h-18 w-18 sm:mx-4 sm:h-25 sm:w-22 2xl:h-28 2xl:w-25"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-base font-bold sm:text-lg 2xl:text-xl">
            Principal:{" "}
            <span className="text-primary">Python, n8n, Codex, IA Skills</span>
          </p>
        </div>
      </div>
    </>
  );
}
