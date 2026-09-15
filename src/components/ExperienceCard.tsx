import type { ExperienceType } from "../types";

type ExperienceCardProps = {
  experience: ExperienceType;
  filename: string;
};

export default function ExperienceCard({ experience, filename }: ExperienceCardProps) {
  return (
    <article className="editor-panel min-w-0 text-left">
      <div className="editor-filebar">
        <span className="text-secondary">LOG</span>
        {filename}
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-primary">
          {experience.period}
        </p>
        <h2 className="mt-3 text-xl font-bold text-text sm:text-2xl">
          {experience.role}
        </h2>
        <p className="mt-1 text-sm text-blue">@ {experience.company}</p>
        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-text-muted sm:text-base">
          {experience.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-border bg-bg-dark px-2.5 py-1 text-xs text-secondary-text"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
