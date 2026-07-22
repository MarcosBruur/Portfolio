import {
  GlobeAltIcon,
  Cog6ToothIcon,
  CloudArrowUpIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import type { LogoType, ProjectType, ServiceType } from "../types";

export const services: ServiceType[] = [
  {
    id: 1,
    icon: GlobeAltIcon,
    title: "Desarrollo Web",
    text: "Construcción de aplicaciones web modernas y funcionales, integrando frontend y backend para crear soluciones completas. Trabajo principalmente con Django y React.",
  },
  {
    id: 2,
    icon: CloudArrowUpIcon,
    title: "Despliegue de aplicaciones",
    text: "Configuración y puesta en producción de aplicaciones en servidores Linux, cuidando que el entorno sea estable, ordenado y mantenible. Utilizo herramientas como Docker y Linux.",
  },
  {
    id: 3,
    icon: Cog6ToothIcon,
    title: "Automatización de procesos",
    text: "Desarrollo de scripts, flujos y herramientas para reducir tareas repetitivas, procesar información y optimizar procesos de trabajo. Trabajo principalmente con Python y n8n.",
  },
  {
    id: 4,
    icon: StarIcon,
    title: "Automatización con IA",
    text: "Integración de herramientas de inteligencia artificial para crear asistentes, agentes y flujos inteligentes aplicados a procesos reales. Utilizo herramientas como MCP y agentes de IA.",
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
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562006/streetup_ftxado.webp",
    title: "StreetUp",
    desc: "Una red social de deportes callejeros.Tecnologias empleadas: React,Ts,Tailwind,Python,Django,MongoDB",
    url: "https://marcos.alexis.ar/",
    github: "https://github.com/MarcosBruur/StreetUp",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562051/buscadorbebidas_daccvq.webp",
    title: "Buscador de Bebidas",
    desc: "App que permite buscar recetas de cualquier tipo de bebida, con apartado de buscar con IA incluido. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbubebidas.netlify.app/",
    github: "https://github.com/MarcosBruur/buscador-de-bebidas",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1784759151/Screenshot_2026-07-22_192412_xqgc6t.webp",
    title: "Pulsostudio",
    desc: "Una web de ventas de productos de decoracion del hogar, con carrito de compras y pasarela de pagos integrando MercadoPago",
    url: "https://pulsoestudio.com.ar/",
    github: "https://github.com/MarcosBruur/pulsostudio",
  },
];
