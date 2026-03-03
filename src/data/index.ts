import {
  GlobeAltIcon,
  CircleStackIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import type { LogoType, ProjectType, ServiceType } from "../types";

export const services: ServiceType[] = [
  {
    id: 1,
    icon: GlobeAltIcon,
    title: "Diseño Web",
    text: "Experiencia diseñando desde cero, creando y adaptando aplicaciones web completas 100% responsive",
  },
  {
    id: 2,
    icon: CircleStackIcon,
    title: "Desarrollo Backend",
    text: "Creación y manejo de entornos virtuales, Api Rest, Graphql, contenedores Docker, manejo de SQL/NoSQL y scripts",
  },
  {
    id: 3,
    icon: ComputerDesktopIcon,
    title: "Desarrollo FullStack",
    text: "Integracion completa entre Backend y Frontend, Creacion y consumo de APIs",
  },
];

export const logos: LogoType = {
  backend: [
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562821/django_rvtw66.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562683/docker_dcoqct.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562702/git_qeneo5.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562662/java_tvd4hw.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562723/laravel_sxcl0g.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562714/php_qwkbgk.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562650/python_dxuaiw.webp",
  ],
  frontend: [
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563106/css_dhushq.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562702/git_qeneo5.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563109/html_wlnwcq.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563070/javascript_nss9kt.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563107/react_lg5gap.webp",
    "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772563109/vue_agppdt.webp",
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
    desc: "App que permite buscar recetas de cualquier tipo de bebida, con apartado de buscar con IA incluid. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbubebidas.netlify.app/",
    github: "https://github.com/MarcosBruur/buscador-de-bebidas",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562041/contadorcalorias_zwola8.webp",
    title: "Contador de calorias",
    desc: "Una app que permite administrar las calorias gastadas en un dia, proximamente se agregará IA. Tecnologias empleadas: React,Ts",
    url: "https://mbrucalories.netlify.app/",
    github: "https://github.com/MarcosBruur/Contador-de-calorias",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562037/cotizador_i9k0iq.webp",
    title: "Cotizador de Cryptomonedas",
    desc: "Web que permite visualizar en tiempo real el valor de mercado de las criptomonedas más importantes. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbucotizador.netlify.app/",
    github: "https://github.com/MarcosBruur/Cotizador-de-Cryptomonedas",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562031/guitarla_rekkwn.webp",
    title: "Carrito de compra",
    desc: "Web simple que implementa un carrito de compras. Tecnologias empleadas: React,Ts",
    url: "https://mbuguitar.netlify.app/",
    github: "https://github.com/MarcosBruur/GuitarLa",
  },
  {
    img: "https://res.cloudinary.com/dbjyf3qb3/image/upload/v1772562027/planificadorgastos_fuywcl.webp",
    title: "Planificador de gastos",
    desc: "App para planificar gastos a traves de un monto. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbuplanificadorgastos.netlify.app/",
    github: "https://github.com/MarcosBruur/Control-de-gastos-Web",
  },
];
