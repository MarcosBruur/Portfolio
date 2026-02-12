import type { ComponentType, SVGProps } from "react";

export type ServiceType = {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

export type LogoType = {
  backend: string[];
  frontend: string[];
};

export type ProjectType = {
  img: string;
  title: string;
  desc: string;
  url: string;
  github: string;
};

export type FieldType = {
  email: string;
  message: string;
};

export type NotificationType = {
  show: boolean;
  isError: boolean;
  message: string;
};
