import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkBase =
    "relative isolate block w-full overflow-hidden px-4 py-3 uppercase text-xl transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-full before:origin-top before:scale-y-0 before:bg-card before:transition-transform before:duration-300 before:ease-out sm:text-2xl lg:w-auto 2xl:text-3xl";

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

  const ThemeToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggleDarkMode}
      aria-label="Cambiar tema"
      className={`h-12 w-24 justify-between rounded-lg bg-card p-1 lg:w-25 ${className}`}
    >
      <div
        className={`${darkMode ? "translate-x-12 lg:translate-x-13" : ""} size-10 bg-surface/20
              flex items-center justify-center rounded-lg transition-all duration-500 ease-in-out hover:cursor-pointer
              ${!darkMode ? "bg-surface/40" : ""} `}
      >
        {!darkMode ? (
          <SunIcon className="size-7 text-text" />
        ) : (
          <MoonIcon className="size-7 text-text-muted" />
        )}
      </div>
    </button>
  );

  return (
    <header className="sticky left-0 top-0 z-50 border-b-3 border-black bg-bg-light/90 backdrop-blur-sm dark:bg-bg/90">
      <div className="mx-auto flex w-full max-w-[1720px] flex-col px-4 py-3 sm:px-6 lg:px-8 lg:py-4 2xl:px-10">
        <div className="flex items-center justify-between lg:hidden">
          <button
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="flex size-12 items-center justify-center rounded-lg border-2 border-black bg-surface text-primary shadow"
          >
            {isMenuOpen ? (
              <XMarkIcon className="size-8" />
            ) : (
              <Bars3Icon className="size-8" />
            )}
          </button>

          <ThemeToggle className="flex" />
        </div>

        <div
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center gap-3 pt-4 lg:flex lg:flex-row lg:justify-between lg:pt-0`}
        >
          <nav className="flex w-full flex-col items-center text-center lg:mr-20 lg:w-auto lg:flex-row lg:gap-8">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mi
            </NavLink>

            <NavLink
              to="/skills"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Tec
            </NavLink>
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctame
            </NavLink>
          </nav>

          <ThemeToggle className="hidden lg:flex" />
        </div>
      </div>
    </header>
  );
}
