import type { ServiceType } from "../types";

type ServiceDetailProps = { service: ServiceType };

const files = ["web.service.ts", "deploy.sh", "automation.py", "ai-agent.ts"];

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <article className={`editor-panel relative min-h-60 ${service.id === 1 ? "lg:row-start-1 lg:col-start-1" : ""} ${service.id === 2 ? "lg:row-start-1 lg:col-start-2" : ""} ${service.id === 3 ? "lg:row-start-2 lg:col-start-1" : ""} ${service.id === 4 ? "lg:row-start-2 lg:col-start-2" : ""}`}>
      <div className="editor-filebar"><span className="text-blue">{service.id % 2 ? "TS" : "PY"}</span>{files[service.id - 1]}</div>
      <div className="p-5 sm:p-6">
        <Icon className="size-9 text-primary" />
        <h3 className="mt-5 text-xl font-bold text-text sm:text-2xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">{service.text}</p>
      </div>
    </article>
  );
}
