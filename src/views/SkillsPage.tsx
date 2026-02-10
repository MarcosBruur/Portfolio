import { logos } from "../data";

export default function SkillsPage() {
  return (
    <>
      <div className="container flex flex-col items-center ">
        <h1 className="animate-fade-down animate-duration-1200 text-5xl font-bold text-indigo-600 text-center mb-15">
          Tecnologías
        </h1>

        <p className="w-4/5 mb-5 text-lg">Tengo conociminto y experiencia 
        en varias tecnologias, tanto de  
        <span className="text-indigo-600"> frontend</span>, 
        <span className="text-indigo-600"> backend</span>, 
        algo de 
        <span className="text-indigo-600"> devops</span> a nivel basico 
        (lo suficiente para alojar y desplegar una aplicacion en un 
        servidor AWS EC2). Mi proximo paso es aprender 
        sobre machine learning y sistemas de IA
        </p>

        <div className="animate-fade-right animate-duration-2000  lg:flex items-center gap-10 mb-2">
          <h2 className="text-2xl mb-4">Backend</h2>

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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
              <p className="mb-10 font-bold">Principal: <span className="text-indigo-600">PYTHON + DJANGO</span></p>

        <div className="animate-fade-left animate-duration-2000 lg:flex items-center gap-10 mb-2">
          <h2 className="text-2xl mb-4 whitespace-nowrap rounded-lg">
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
          <p className="font-bold">Principal: <span className="text-indigo-600">REACT + TYPESCRIPT</span></p>
      </div>
    </>
  );
}
