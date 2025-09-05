import type { ProjectType } from "../types";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-5 gap-10 lg:gap-5 border-y-2 lg:border-2 border-gray-200 lg:rounded-lg lg:p-3 lg:h-80 lg:items-center overflow-hidden mb-20 lg:mb-2 pb-5 lg:py-3">
        <div className="lg:col-span-3 lg:h-full overflow-hidden mb-2 h-1/2">
          <img
            src={`${project.img}.png`}
            alt={`Imagen de ${project.title}`}
            className="w-full h-full object-top-left rounded-lg  "
          />
        </div>

        <div className="col-start-4 col-span-2 ">
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
