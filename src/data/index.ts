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
    text: "hic molestiae pariatur officiis et repudiandae velit facilis quia hic molestiae pariatur officiis et repudiandae velit facilis quia",
  },
  {
    id: 2,
    icon: CircleStackIcon,
    title: "Desarrollo Backend",
    text: "hic molestiae pariatur officiis et repudiandae velit facilis quia hic molestiae pariatur officiis et repudiandae velit facilis quia",
  },
  {
    id: 3,
    icon: ComputerDesktopIcon,
    title: "Desarrollo FullStack",
    text: "hic molestiae pariatur officiis et repudiandae velit facilis quia hic molestiae pariatur officiis et repudiandae velit facilis quia",
  },
];

export const logos: LogoType = {
  backend: ["django", "docker", "git", "java", "laravel", "php", "python"],
  frontend: ["css", "git", "html", "javascript", "react", "vue"],
};

export const projects: ProjectType[] = [
  {
    img: "/proyectos/bienesraices",
    title: "BienesRaices",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://blogcafe-marcos.netlify.app/",
  },
  {
    img: "/proyectos/blogcafe",
    title: "Blog del café",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://blogcafe-marcos.netlify.app/",
  },
  {
    img: "/proyectos/buscadorbebidas",
    title: "Buscador de Bebidas",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://mbubebidas.netlify.app/",
  },
  {
    img: "/proyectos/contadorcalorias",
    title: "Contador de calorias",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://mbrucalories.netlify.app/",
  },
  {
    img: "/proyectos/cotizador",
    title: "Cotizador de Cryptomonedas",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://mbucotizador.netlify.app/",
  },
  {
    img: "/proyectos/guitarla",
    title: "Carrito de compra",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://mbuguitar.netlify.app/",
  },
  {
    img: "/proyectos/planificadorgastos",
    title: "Planificador de gastos",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. VoluptateLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate",
    url: "https://mbuplanificadorgastos.netlify.app/",
  },
];
