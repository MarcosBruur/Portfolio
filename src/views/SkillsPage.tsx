import { logos } from "../data";

export default function SkillsPage() {
  return (
    <>
      <div className="container flex flex-col items-center">
        <h1 className="text-5xl font-bold text-indigo-600 text-center mb-30">
          Mis Skills
        </h1>

        <div className="flex items-center gap-10 mb-20">
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

        <div className="flex items-center gap-10">
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
      </div>
    </>
  );
}
