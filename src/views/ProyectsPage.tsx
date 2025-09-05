import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function ProyectsPage() {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-5xl font-bold text-indigo-600">
          Algunos Proyectos Personales
        </h1>

        <div className="mt-20 grid grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
