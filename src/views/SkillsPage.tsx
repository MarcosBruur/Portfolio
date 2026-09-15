import { logos } from "../data";

function LogoTrack({
  title,
  logos: items,
  speed,
}: {
  title: string;
  logos: string[];
  speed: "backend" | "frontend";
}) {
  const repeatedItems = Array.from({ length: 4 }, () => items).flat();

  return (
    <section className="editor-panel mx-auto w-full max-w-2xl overflow-hidden">
      <div className="editor-filebar">
        <span className="text-blue">{speed === "backend" ? "TS" : "PY"}</span>
        {title.toLowerCase().replaceAll(" ", "-")}.stack
      </div>
      <div className="overflow-hidden px-4 py-3 sm:px-5">
        <div
          className={`flex w-max ${speed === "backend" ? "animate-scroll-backend" : "animate-scroll-frontend"}`}
        >
          {repeatedItems.map((logo, index) => (
            <div
              className="mx-2 grid size-14 shrink-0 place-items-center overflow-hidden border border-border bg-bg-dark p-2 sm:mx-3 sm:size-16"
              key={`${logo}-${index}`}
            >
              <img
                src={logo}
                alt="Tecnología"
                className="size-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SkillsPage() {
  return (
    <div>
      <p className="text-sm text-text-soft">// dependencies</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Tecnologías</h1>
      <div className="mt-8 space-y-6">
        <LogoTrack title="Desarrollo Web" logos={logos.web} speed="backend" />
        <LogoTrack
          title="Automatización IA"
          logos={logos.automation}
          speed="frontend"
        />
      </div>
      <article className="editor-panel mx-auto mt-10 max-w-3xl">
        <div className="editor-filebar">
          <span className="text-primary">MD</span>stack-overview.md
        </div>
        <div className="p-5 text-sm leading-relaxed text-text-muted sm:p-7 sm:text-base">
          Construyo <strong className="text-text">aplicaciones completas</strong>,
          desde la definición y el desarrollo hasta el despliegue continuo en
          producción. Trabajo con Python y Django para backend y APIs, React
          para interfaces, y Docker sobre Linux para crear entornos confiables
          y mantenibles. Actualmente me especializo en{" "}
          <strong className="text-secondary">ingeniería de software asistida por IA</strong>,
          aplicando SDD y guardrails para acelerar el desarrollo sin perder el
          control técnico. También diseño y orquesto agentes con LangChain y
          LangGraph, además de implementar sistemas RAG para soluciones basadas
          en conocimiento.
        </div>
      </article>
    </div>
  );
}
