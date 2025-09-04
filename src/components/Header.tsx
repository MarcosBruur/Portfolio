import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="border-2 border-gray-300 mx-70 mt-10 rounded-4xl h-30 flex items-center">
        <div className="flex  w-full">
          <div className="w-1/2">
            <p className="text-2xl font-light mx-4">Marcos Bruno</p>
          </div>
          <div className="w-1/2">
            <nav className="flex gap-13">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 uppercase font-bold text-xl"
                    : "text-white uppercase font-bold text-xl"
                }
              >
                Sobre Mi
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 uppercase font-bold text-xl"
                    : "text-white uppercase font-bold text-xl"
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 uppercase font-bold text-xl"
                    : "text-white uppercase font-bold text-xl"
                }
              >
                Proyectos
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 uppercase font-bold text-xl"
                    : "text-white uppercase font-bold text-xl"
                }
              >
                Contáctame
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
