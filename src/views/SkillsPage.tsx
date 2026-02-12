import { logos } from "../data";

export default function SkillsPage() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-15 items-center">
        <div
          className="animate-fade-right animate-duration-1500 bg-gradient-to-tr from-sky-950 
        via-sky-900 to-sky-950 px-6 py-10 lg:w-2/5 rounded-xl h-2/3 mt-5"
        >
          <p className="text-2xl lg:text-xl text-gray-300 text-start">
            Tengo conociminto y experiencia en varias tecnologias, tanto de
            <span className="text-cyan-500"> frontend</span>,
            <span className="text-cyan-500"> backend</span>, algo de
            <span className="text-cyan-500"> devops</span> a nivel basico (lo
            suficiente para alojar y desplegar una aplicacion en un servidor AWS
            EC2). Mi proximo paso es aprender sobre machine learning y sistemas
            de IA
          </p>
        </div>

        <div className="p-4 rounded-xl">
          <h2 className="relative text-5xl font-bold text-center mb-15">
            Tecnologías
            <span className="animate-grow-underline absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-70 h-1 bg-cyan-500"></span>
          </h2>

          <div className="animate-fade-left animate-duration-2000  lg:flex items-center gap-10 mb-2">
            <h2 className="text-2xl mb-4 text-cyan-500 font-bold">Backend</h2>

            <div className="overflow-hidden w-full max-w-2xl bg-white p-5 rounded-lg">
              <div className="relative">
                <div className="flex w-max animate-scroll-backend">
                  {/* Duplicamos las imágenes para efecto de carrusel infinito */}
                  {[...logos["backend"], ...logos["backend"]].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={`/${logo}.png`}
                        alt={`Logo de ${logo}`}
                        className="w-22 h-25 mx-4"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="mb-10 font-bold text-center">
            Principal: <span className="text-indigo-600">PYTHON + DJANGO</span>
          </p>

          <div className="animate-fade-left animate-duration-2000 lg:flex items-center gap-10 mb-2">
            <h2 className="text-2xl mb-4 rounded-lg text-cyan-500 font-bold">
              Frontend
            </h2>
            <div className="overflow-hidden w-full max-w-2xl bg-white p-5 rounded-lg">
              <div className="relative">
                <div className="flex w-max animate-scroll-frontend">
                  {[...logos["frontend"], ...logos["frontend"]].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={`/${logo}.png`}
                        alt={`Logo de ${logo}`}
                        className="w-22 h-25 mx-4"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-center">
            Principal:{" "}
            <span className="text-indigo-600">REACT + TYPESCRIPT</span>
          </p>
        </div>
      </div>
    </>
  );
}
