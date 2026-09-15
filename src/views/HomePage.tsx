import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import { services } from "../data";

const socials = [
  { label: "GitHub", href: "https://github.com/MarcosBruur" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcos-alexis-bruno-urquiza-71202826b/",
  },
  { label: "Instagram", href: "https://www.instagram.com/marcos_bruno_ur/" },
];

export default function HomePage() {
  return (
    <div>
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm text-text-soft">
            <span className="text-primary">marcos@portfolio</span>:
            <span className="text-blue">~</span>$ whoami
          </p>
          <p className="mt-6 text-xl text-text-muted sm:text-3xl">
            Hola, mi nombre es
          </p>
          <h1 className="mt-2 text-4xl font-bold text-bg sm:text-6xl 2xl:text-7xl">
            <span className="animate-name-highlight inline-block bg-linear-to-r from-primary via-secondary to-primary px-3 py-1">
              Marcos Bruno
            </span>
          </h1>
          <p className="mt-5 text-xl text-text-muted sm:text-3xl">
            y soy{" "}
            <span className="text-secondary">Desarrollador FullStack</span>
          </p>
          <motion.article
            className="editor-panel mt-10"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="editor-filebar">
              <span className="text-blue">MD</span>about-me.md
            </div>
            <div className="p-5 sm:p-8">
              <h2 className="text-xl font-bold text-text sm:text-2xl">
                <span className="animate-prompt-blink text-primary">#</span>{" "}
                Sobre mí
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
                Soy desarrollador fullstack con un perfil orientado
                principalmente al backend, la automatización de procesos y la
                creación de soluciones apoyadas en inteligencia artificial.
                Construyo aplicaciones funcionales, escalables y pensadas para
                resolver problemas reales, desde el desarrollo hasta el
                despliegue productivo.
              </p>
            </div>
          </motion.article>
        </div>
        <aside className="editor-panel overflow-hidden">
          <div className="editor-filebar">
            <span className="text-secondary">IMG</span>marcos.profile.webp
          </div>
          <img
            src="https://res.cloudinary.com/dbjyf3qb3/image/upload/v1773529101/marcos1_qlzdhh.webp"
            alt="Marcos Bruno"
            className="h-72 w-full object-contain bg-bg-dark sm:h-96"
          />
          <div className="flex flex-wrap gap-2 p-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-3 py-2 text-xs text-blue transition-colors hover:border-blue hover:bg-card-muted"
              >
                {social.label} ↗
              </a>
            ))}
            <Link
              to="/contact"
              className="border border-primary bg-primary px-3 py-2 text-xs text-bg transition-colors hover:bg-primary-hover"
            >
              Contactar
            </Link>
          </div>
        </aside>
      </section>
      <section className="mt-20">
        <p className="text-sm text-text-soft">// modules</p>
        <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl">
          Mis habilidades
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-7">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
