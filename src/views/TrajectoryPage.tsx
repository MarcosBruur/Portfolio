import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { experiences } from "../data";
import ExperienceCard from "../components/ExperienceCard";

export default function TrajectoryPage() {
  const sortedExperiences = [...experiences].sort(
    (first, second) =>
      Date.parse(second.startDate) - Date.parse(first.startDate),
  );

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-sm text-text-soft">// work history</p>
      <h1 className="mt-2 text-3xl font-bold text-text sm:text-4xl">
        Trayectoria
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
        Mi experiencia profesional, desde el trabajo más reciente hasta los
        primeros pasos de mi carrera.
      </p>

      <div className="relative mt-12">
        <div className="absolute bottom-0 left-4 top-0 w-px sm:left-6 lg:left-20">
          <div className="animate-timeline-grow size-full bg-secondary" />
        </div>
        <div className="space-y-10 lg:space-y-14">
          {sortedExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-6"
            >
              <div className="relative z-10 flex justify-center pt-5">
                <div className="grid size-8 place-items-center border border-primary bg-bg-dark text-primary">
                  <BriefcaseIcon className="size-4" />
                </div>
              </div>

              <ExperienceCard
                experience={experience}
                filename={`experience-${String(sortedExperiences.length - index).padStart(2, "0")}.json`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
