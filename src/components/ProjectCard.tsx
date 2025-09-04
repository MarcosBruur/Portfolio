import type { ProjectType } from "../types";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="grid grid-cols-5 gap-10 border-2 border-gray-200 rounded-lg p-3 h-80 items-center overflow-hidden">
        <div className="col-span-3 h-full overflow-hidden">
          <img
            src={`${project.img}.png`}
            alt={`Imagen de ${project.title}`}
            className="h-full w-full object-top-left rounded-lg"
          />
        </div>

        <div className="col-start-4 col-span-2">
          <h2 className="text-blue-300 uppercase font-bold text-xl text-start">
            {project.title}
          </h2>
          <p className="text-start">{project.desc}</p>
          <a href={`${project.url}`} target="_blank" rel="noopener noreferrer">
            <button className="text-center p-2 mt-4 bg-blue-700 text-white w-full hover:bg-blue-800 uppercase font-bold shadow-lg hover:cursor-pointer">
              Entrar
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
