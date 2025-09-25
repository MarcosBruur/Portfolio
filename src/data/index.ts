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
  backend: ["django", "docker", "git", "java", "laravel", "php", "python"],
  frontend: ["css", "git", "html", "javascript", "react", "vue"],
};

export const projects: ProjectType[] = [
  {
    img: "/proyectos/blogcafe",
    title: "Blog del café",
    desc: "Un blog simple centrado en el diseño, Tecnologias empleadas: HTML,SCSS,JS",
    url: "https://blogcafe-marcos.netlify.app/",
  },
  {
    img: "/proyectos/buscadorbebidas",
    title: "Buscador de Bebidas",
    desc: "App que permite buscar recetas de cualquier tipo de bebida, con apartado de buscar con IA incluid. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbubebidas.netlify.app/",
  },
  {
    img: "/proyectos/contadorcalorias",
    title: "Contador de calorias",
    desc: "Una app que permite administrar las calorias gastadas en un dia, proximamente se agregará IA. Tecnologias empleadas: React,Ts",
    url: "https://mbrucalories.netlify.app/",
  },
  {
    img: "/proyectos/cotizador",
    title: "Cotizador de Cryptomonedas",
    desc: "Web que permite visualizar en tiempo real el valor de mercado de las criptomonedas más importantes. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbucotizador.netlify.app/",
  },
  {
    img: "/proyectos/guitarla",
    title: "Carrito de compra",
    desc: "Web simple que implementa un carrito de compras. Tecnologias empleadas: React,Ts",
    url: "https://mbuguitar.netlify.app/",
  },
  {
    img: "/proyectos/planificadorgastos",
    title: "Planificador de gastos",
    desc: "App para planificar gastos a traves de un monto. Tecnologias empleadas: React,Ts,Tailwind",
    url: "https://mbuplanificadorgastos.netlify.app/",
  },
  {
    img: "/proyectos/administrador_productos",
    title: "Administrador de Productos",
    desc: "Aplicacion FullStack para administrar productos.Tecnologias empleadas: React,Ts,Tailwind,Express",
    url: "https://product-manager-frontend-whax.vercel.app/",
  },
];
