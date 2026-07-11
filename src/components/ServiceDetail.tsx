import type { ServiceType } from "../types";

type ServiceDetailProps = {
  service: ServiceType;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <>
      <div
        className={`relative isolate z-10 mb-10 lg:mb-5
                      ${service.id === 1 ? "lg:row-start-1 lg:col-start-1" : ""}
                      ${service.id === 2 ? "lg:row-start-1 lg:col-start-2" : ""}
                      ${service.id === 3 ? "lg:row-start-2 lg:col-start-1" : ""}
                      ${service.id === 4 ? "lg:row-start-2 lg:col-start-2" : ""}
      `}
      >
        <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border-y-2 border-black bg-black lg:border-2 lg:rounded-4xl" />

        <div className="relative z-10 flex min-h-52 flex-col justify-center animate-fade animate-duration-1200 animate-ease-in border-y-2 border-black bg-white p-4 lg:border-2 lg:rounded-4xl 2xl:min-h-60 2xl:p-6">
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Icon
                className="
            size-10 2xl:size-12
            
            "
              />
              <h3
                className="
            
            text-2xl sm:text-3xl 2xl:text-4xl
            uppercase 
            font-bold
            text-center
            
            "
              >
                {service.title}
              </h3>
            </div>
          </div>

          <p className="mt-2 text-center text-base sm:text-lg 2xl:text-xl">
            {service.text}
          </p>
        </div>
      </div>
    </>
  );
}
