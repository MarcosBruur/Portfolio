import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function ProyectsPage() {
  const [page, setPage] = useState(0);

  const projectsPerPage = 2;

  const start = page * projectsPerPage;
  const visibleProjects = projects.slice(start, start + projectsPerPage);

  return (
    <div className="container text-center">
      <h1 className="text-5xl font-bold text-indigo-600">
        Algunos Proyectos Personales
      </h1>

      {/* CONTENEDOR GENERAL */}
      <div className="flex items-center justify-center mt-20 gap-6">

        {/* BOTON IZQUIERDA */}
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-30"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        {/* PROYECTOS */}
        <div className="grid lg:grid-cols-2 gap-10">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* BOTON DERECHA */}
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={(page + 1) * projectsPerPage >= projects.length}
          className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-30"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
