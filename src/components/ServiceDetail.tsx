import type { ServiceType } from "../types";
import { useInView } from "../hooks/useInView";

type ServiceDetailProps = {
  service: ServiceType;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;
  const { ref, isVisible } = useInView();
  return (
    <>
      <div
        ref={ref}
        className={`${isVisible &&'animate-fade animate-duration-1200 animate-ease-in container border-y-2 mb-10 lg:mb-5 lg:border-2  border-indigo-600 lg:rounded-4xl p-4 shadow-lg lg:shadow-xl shadow-blue-500'}
                      ${service.id === 1 ? "col-span-3" : ""}
                      ${
                        service.id === 2
                          ? "row-start-2 col-start-3 col-span-3"
                          : ""
                      }
                      ${service.id === 3 ? "row-start-3 col-span-3" : ""}
      `}
      >
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Icon className="size-10 text-blue-300" />
            <h3 className="text-blue-300 text-2xl uppercase font-black">
              {service.title}
            </h3>
          </div>
        </div>
        <p className="mt-2">{service.text}</p>
      </div>
    </>
  );
}
