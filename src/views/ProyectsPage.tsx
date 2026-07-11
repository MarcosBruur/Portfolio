import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function ProyectsPage() {
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <img
            src="devgif.gif"
            alt=""
            className="size-24 sm:size-30 2xl:size-36"
          />
          <h2 className="relative text-4xl font-bold sm:text-5xl 2xl:text-6xl">
            Proyectos
            <span className="animate-grow-underline absolute bottom-[-8px] left-1/2 h-1 w-44 -translate-x-1/2 bg-primary sm:w-56"></span>
          </h2>
        </div>
        <motion.div
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10 2xl:gap-14"
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
