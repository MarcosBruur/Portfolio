import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function ProyectsPage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <img
            src="devgif.gif"
            alt=""
            className="size-24 sm:size-30 2xl:size-36"
          />
          <div><p className="text-sm text-text-soft">// repositories</p><h1 className="text-4xl font-bold text-text sm:text-5xl">Proyectos</h1></div>
        </div>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // easing premium
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
