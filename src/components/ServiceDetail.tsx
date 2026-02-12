import type { ServiceType } from "../types";

type ServiceDetailProps = {
  service: ServiceType;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <>
      <div
        className={`relative z-10 
            "animate-fade animate-duration-1200 animate-ease-in border-y-2 mb-10 lg:mb-5 lg:border-2 bg-linear-to-r from-purple-700 to-purple-800 dark:from-purple-900  dark:to-purple-950 dark:border-violet-600 lg:rounded-4xl p-4 shadow-lg lg:shadow-lg shadow-violet-700"
          
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
            <Icon
              className="
            size-10 
            text-cyan-500
            dark:text-cyan-600"
            />
            <h3
              className="
            text-cyan-500 
            text-3xl 
            uppercase 
            font-bold
            dark:text-cyan-600
            "
            >
              {service.title}
            </h3>
          </div>
        </div>
        <p className="mt-2 text-lg text-gray-300">{service.text}</p>
      </div>
    </>
  );
}
