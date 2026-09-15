import {
  GlobeAltIcon,
  Cog6ToothIcon,
  CloudArrowUpIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import type {
  ExperienceType,
  LogoType,
  ProjectType,
  ServiceType,
} from "../types";

export const services: ServiceType[] = [
  {
    id: 1,
    icon: GlobeAltIcon,
    title: "Desarrollo de Software",
    text: "Construcción de sistemas de software desde la idea, el desarrollo, produccion y mantenimiento. Siguiendo buenas prácticas de desarrollo, aplicando patrones de diseño, arquitectura y comunicación. ",
  },
  {
    id: 2,
    icon: CloudArrowUpIcon,
    title: "Despliegue continuo",
    text: "Configuración y puesta en producción de aplicaciones en servidores Linux, cuidando que el entorno sea estable, ordenado y mantenible",
  },
  {
    id: 3,
    icon: Cog6ToothIcon,
    title: "Automatización de procesos",
    text: "Desarrollo de scripts, flujos y herramientas para reducir tareas repetitivas, procesar información y optimizar procesos de trabajo",
  },
  {
    id: 4,
    icon: StarIcon,
    title: "Creacion y orquestación de Agentes de IA",
    text: "Creo y orquesto agentes de IA pensados para asistir a los usuarios al utilizar un sistema y brindar informacion relevante para tomar mejores dicisiones.",
  },
];

export const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "Desarrollador FullStack",
    company: "Freelance Fiverr",
    period: "Noviembre 2025 - Actualidad",
    startDate: "2025-11-12",
    description:
      "Desarrollo y mantenimiento de aplicaciones, en su mayoria webs para comercios electronicos, con gestion de pagos vinculados a tarjetas y mercadopago." +
      "\n Tambien trabajo creando y orquestando agentes de IA asistentes.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Docker",
      "Vue",
      "Git",
      "Codex",
      "Langchain",
    ],
  },
  {
    id: 2,
    role: "Desarrollador FullStack",
    company: "Cunix - IT Consultancy",
    period: "Marzo 2023 - Noviembre 2025",
    startDate: "2023-03-05",
    description:
      "Construcción y consumo de APIs, automatización de tareas, creacion de interfazes, trabajando bajo metodologia scrum en la mayoria de proyectos." +
      "Además, en varios proyectos tenia comunicacion directa con clientes, relevando requeriemientos y asignando prioridades.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "MySQL",
      "Linux",
      "Docker",
      "Scrum",
      "Git",
      "PHP",
      "VueJS",
      "Typescript",
      "Analisis Funcional",
    ],
  },
  {
    id: 3,
    role: "",
    company: "Agencia Creativa",
    period: "Junio 2023 - Febrero 2024",
    startDate: "2023-06-01",
    description:
      "Implementación de interfaces responsive, integración con servicios externos y soporte evolutivo de sitios web para distintos clientes.",
    technologies: ["JavaScript", "React", "CSS", "Git"],
  },
];

export const logos: LogoType = {
  web: [
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562821/django_rvtw66.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562683/docker_dcoqct.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562702/git_qeneo5.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562650/python_dxuaiw.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563106/css_dhushq.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562702/git_qeneo5.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563109/html_wlnwcq.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563070/javascript_nss9kt.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563107/react_lg5gap.webp",
  ],
  automation: [
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1783812105/n8n-logo_io1fhn.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562650/python_dxuaiw.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1783812348/pandas_logo.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1783812839/gemini_logo.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1783812741/openai_logo.webp",
  ],
};

export const projects: ProjectType[] = [
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1789415289/Screenshot_2026-09-14_164557_juss0g.webp",
    title: "Sistema de facturación y control de stock multi tenant",
    desc: "Un sistema integral para gestionar comercios enteros, desde la generacion de ventas, medios de pago, cobros, emision de tickets, vinculacion con ARCA. Tambien cuenta con un sistema de control para administradores, con toda la informacion del negocio disponible y graficos para tomar decisiones",
    github: "https://github.com/MarcosBruur/TPV",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562006/streetup_ftxado.webp",
    title: "StreetUp",
    desc: "Una red social de deportes callejeros.Tecnologias empleadas: React,Ts,Tailwind,Python,Django,MongoDB",
    url: "https://marcos.alexis.ar/",
    github: "https://github.com/MarcosBruur/StreetUp",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1785980474/Screenshot_2026-08-05_223947_ln3nbr.webp",
    title: "ApuntaApp",
    desc: "Una app para controlar horarios pensada para estudiantes. Tiene incluido un agente llamado Tempo que ayuda al estudiante a organizar sus tareas",
    url: "https://apuntapp.netlify.app/",
    github: "https://github.com/MarcosBruur/ApuntaApp",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1784759151/Screenshot_2026-07-22_192412_xqgc6t.webp",
    title: "Pulsostudio",
    desc: "Una web de ventas de productos de decoracion del hogar, con carrito de compras y pasarela de pagos integrando MercadoPago",
    url: "https://pulsoestudio.com.ar/",
    github: "https://github.com/MarcosBruur/pulsostudio",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1787062673/Screenshot_2026-08-18_111331_lnw2tf.webp",
    title: "ChatInteligente",
    desc: "Un agente de IA con memoria de corto y largo plazo, gestion de usuarios e hilos de conversación. Tecnologias: Python, FastAPI, Langchain, React",
    github: "https://github.com/MarcosBruur/pulsostudio",
  },
];
