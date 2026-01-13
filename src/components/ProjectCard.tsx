import type { ProjectType } from "../types";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col border-y-2 lg:border-2 border-gray-200 lg:rounded-lg lg:p-4 mb-20 lg:mb-2">

      {/* Imagen */}
      <div className="w-full h-56 overflow-hidden flex items-center justify-center mb-3">
        <img
          src={`${project.img}.png`}
          alt={`Imagen de ${project.title}`}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1">
        <h2 className="text-blue-300 uppercase font-bold text-xl mb-2">
          {project.title}
        </h2>

        <p className="text-sm mb-4">
          {project.desc}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          <button className="p-2 bg-blue-700 text-white w-full hover:bg-blue-800 uppercase font-bold shadow-lg">
            Entrar
          </button>
        </a>
      </div>

    </div>
  );
}

