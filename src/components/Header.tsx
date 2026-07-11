import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const navLinkBase =
    "relative isolate block overflow-hidden p-3 w-full lg:w-auto uppercase text-2xl transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-full before:origin-top before:scale-y-0 before:bg-card before:transition-transform before:duration-300 before:ease-out";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${navLinkBase} ${
      isActive
        ? "bg-card text-bg before:scale-y-100"
        : "text-black hover:text-bg hover:before:scale-y-100"
    }`;

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
        backdrop-blur-sm 
        border-b-3 border-black"
      >
        <div
          className="flex flex-col 
        lg:p-4 lg:flex-row lg:justify-around
        "
        >
          
          <div
            className="flex flex-col items-center gap-2
          lg:flex-row
          lg:justify-between"
          >
            <nav className="flex flex-col lg:mr-20 lg:flex-row text-center w-full lg:w-auto items-center lg:gap-8">
              <NavLink to="/" className={navLinkClass}>
                Sobre Mi
              </NavLink>

              <NavLink to="/skills" className={navLinkClass}>
                Tec
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Proyectos
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contáctame
              </NavLink>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="bg-card w-25 h-12 flex justify-between 
              rounded-lg p-1"
            >
              <div
                className={`${darkMode ? "translate-x-13" : ""} hover:cursor-pointer bg-surface/20 size-10 
              flex justify-center items-center rounded-lg ease-in-out duration-500 transition-all
              ${!darkMode ? "bg-surface/40" : ""} `}
              >
                {!darkMode ? (
                  <SunIcon className="size-7 text-text" />
                ) : (
                  <MoonIcon className="size-7 text-text-muted" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
