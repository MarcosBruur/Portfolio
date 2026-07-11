import type { ProjectType } from "../types";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="mb-6 flex h-full flex-col lg:mb-2 lg:p-4">
      {/* Imagen */}
      <div className="mb-3 flex h-52 w-full animate-fade-down animate-duration-1500 items-center justify-center overflow-hidden sm:h-56 2xl:h-64">
        <img
          src={project.img}
          alt={`Imagen de ${project.title}`}
          className="size-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1">
        <h2 className="mb-2 animate-fade-right animate-duration-1500 text-start text-xl font-bold capitalize 2xl:text-2xl">
          {project.title}
        </h2>

        <p className="mb-4 flex-1 text-start text-base text-text-soft dark:text-text-soft 2xl:text-lg">
          {project.desc}
        </p>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-around">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button
              className="w-full px-8 py-2 text-white uppercase 
            font-bold shadow-lg border-2 border-primary
            bg-secondary-dark
            hover:shadow-[0px_0px_9px_3px_var(--color-primary-shadow)]
            transition-all duration-500
            "
            >
              Visitar
            </button>
          </a>
          <a href={project.github} className="w-full sm:w-auto">
            <button
              className="group flex w-full justify-center px-8 py-2 text-primary 
              uppercase font-bold shadow-lg border-2 border-primary
            bg-white hover:shadow-[0px_0px_9px_3px_var(--color-primary-shadow)]
            transition-all duration-500
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="text-primary transition-colors duration-500 group-hover:text-text-strong"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
