import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import type { ProjectType } from "../types";

type ProjectCardProps = { project: ProjectType };

function ProjectActions({ project }: ProjectCardProps) {
  return <div className="flex flex-wrap gap-3">
    {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="border border-primary bg-primary px-3 py-2 text-xs text-bg transition-colors hover:bg-primary-hover">Abrir demo ↗</a>}
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-border px-3 py-2 text-xs text-blue transition-colors hover:border-blue hover:bg-card-muted">GitHub ↗</a>
  </div>;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isImageOpen) return;
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsImageOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isImageOpen]);

  return (
    <article className="editor-panel flex h-full flex-col overflow-hidden text-left">
      <div className="editor-filebar"><span className="text-secondary">JSON</span>{project.title.toLowerCase().replaceAll(" ", "-")}.project</div>
      <button type="button" onClick={() => setIsImageOpen(true)} className="h-56 cursor-zoom-in overflow-hidden bg-bg-dark sm:h-52" aria-label={`Ampliar imagen de ${project.title}`}>
        <img src={project.img} alt={`Imagen de ${project.title}`} className="size-full object-cover transition-transform duration-300 hover:scale-105" />
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-xl font-bold text-text">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.desc}</p>
        <div className="mt-6"><ProjectActions project={project} /></div>
      </div>
      {isImageOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-dark/95 p-4" onClick={() => setIsImageOpen(false)} role="dialog" aria-modal="true" aria-label={`Imagen ampliada de ${project.title}`}>
        <div className="editor-panel relative w-full max-w-5xl overflow-hidden" onClick={(event) => event.stopPropagation()}>
          <div className="editor-filebar"><span className="text-secondary">IMG</span>{project.title}.preview</div>
          <button ref={closeButton} type="button" onClick={() => setIsImageOpen(false)} className="absolute right-3 top-2 grid size-7 place-items-center text-text-soft hover:text-primary" aria-label="Cerrar imagen ampliada"><XMarkIcon className="size-5" /></button>
          <img src={project.img} alt={`Imagen ampliada de ${project.title}`} className="max-h-[72vh] w-full object-contain bg-bg-dark" />
          <div className="p-4"><ProjectActions project={project} /></div>
        </div>
      </div>}
    </article>
  );
}
