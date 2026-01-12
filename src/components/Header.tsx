import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 left-0 z-50 bg-linear-to-r from-indigo-950 via-indigo-700 to-indigo-950">
        <div className="lg:border-b-gray-300 lg:border-b-2 lg:p-5 flex flex-col lg:grid grid-cols-[33%_67%]">
          <div>
            <p className="text-2xl font-light text-center lg:text-left">
              Marcos Bruno
            </p>
          </div>

          <nav className="flex flex-col lg:flex-row text-center w-full lg:w-auto items-center lg:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-700 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg mb"
                  : "uppercase font-bold text-lg w-full lg:w-auto"
              }
            >
              Sobre Mi
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-700 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                  : "text-white uppercase font-bold text-lg w-full lg:w-auto"
              }
            >
              Tec
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-700 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                  : "text-white uppercase font-bold text-lg w-full lg:w-auto"
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-700 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                  : "text-white uppercase font-bold text-lg w-full lg:w-auto"
              }
            >
              Contáctame
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
