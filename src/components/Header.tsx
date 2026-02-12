import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    setDarkMode(!darkMode);
  };
  return (
    <>
      <header
        className="sticky top-0 left-0 z-50 
        backdrop-blur-md 
        shadow-lg"
      >
        <div
          className="flex flex-col 
        lg:p-4 lg:flex-row lg:justify-between
        "
        >
          <div className="hidden lg:inline-block border-2 border-cyan-400 p-4 rounded-full">
            <p className="text-cyan-400 text-3xl text-center lg:text-left font-pixel rotate-340">
              MB
            </p>
          </div>

          <div
            className="flex flex-col items-center gap-2
          lg:flex-row
          lg:justify-between"
          >
            <nav className="flex flex-col lg:mr-20 lg:flex-row text-center w-full lg:w-auto items-center lg:gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-indigo-700 border-b-4 border-cyan-300 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg "
                    : "uppercase font-bold text-lg w-full lg:w-auto"
                }
              >
                Sobre Mi
              </NavLink>

              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "bg-indigo-700 border-b-4 border-cyan-300 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                    : "dark:text-white uppercase font-bold text-lg w-full lg:w-auto"
                }
              >
                Tec
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "bg-indigo-700 border-b-4 border-cyan-300 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                    : "dark:text-white uppercase font-bold text-lg w-full lg:w-auto"
                }
              >
                Proyectos
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-indigo-700 border-b-4 border-cyan-300 w-full lg:w-auto lg:bg-transparent lg:text-blue-300 uppercase font-bold text-lg"
                    : "dark:text-white uppercase font-bold text-lg w-full lg:w-auto"
                }
              >
                Contáctame
              </NavLink>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="bg-slate-700 w-25 h-12 flex justify-between 
              rounded-lg p-1"
            >
              <div
                className={`${darkMode ? "translate-x-13" : ""} hover:cursor-pointer bg-white/20 size-10 
              flex justify-center items-center rounded-lg ease-in-out duration-500 transition-all
              ${!darkMode ? "bg-white/40" : ""} `}
              >
                {!darkMode ? (
                  <SunIcon className="size-7 text-white" />
                ) : (
                  <MoonIcon className="size-7 text-gray-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
