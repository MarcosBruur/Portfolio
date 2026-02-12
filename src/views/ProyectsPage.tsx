import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function ProyectsPage() {
  return (
    <>
      <div className="container text-center">
        <div className="flex items-center gap-5">
          <img src="devgif.gif" alt="" className="size-30" />
          <h2 className="relative text-5xl font-bold">
            Proyectos
            <span className="animate-grow-underline absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-56 h-1 bg-cyan-500"></span>
          </h2>
        </div>
        <motion.div
          className="mt-20 lg:grid lg:grid-cols-3 lg:gap-10"
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
