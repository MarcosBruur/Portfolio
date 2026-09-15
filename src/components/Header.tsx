import { Bars3Icon, CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/", label: "about-me.md" },
  { to: "/skills", label: "skills.ts" },
  { to: "/projects", label: "projects.json" },
  { to: "/trajectory", label: "trajectory.log" },
  { to: "/contact", label: "contact.sh" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block border-l-2 px-4 py-3 text-left text-sm uppercase tracking-wider transition-colors ${isActive ? "border-primary bg-card text-primary" : "border-transparent text-text-muted hover:border-blue hover:bg-card-muted hover:text-text"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-dark/95 backdrop-blur">
      <div className="flex h-12 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <CodeBracketIcon className="size-5 text-primary" />
          <span className="hidden sm:inline">marcos@portfolio</span>
          <span className="text-blue">~/workspace</span>
        </div>
        <div className="hidden text-xs text-text-soft lg:block">Visual Studio Code</div>
        <div className="flex items-center gap-3 text-text-muted">
          <button onClick={() => setIsMenuOpen((current) => !current)} aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"} aria-expanded={isMenuOpen} className="flex size-8 items-center justify-center border border-border bg-surface lg:hidden">
            {isMenuOpen ? <XMarkIcon className="size-5" /> : <Bars3Icon className="size-5" />}
          </button>
          <span className="hidden text-xs lg:inline">_</span>
          <span className="hidden text-xs lg:inline">□</span>
          <span className="hidden text-xs text-primary lg:inline">×</span>
        </div>
        <div className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-12 w-full flex-col border-b border-border bg-bg-dark p-3 lg:hidden`}>
          <nav className="flex w-full flex-col">
            {navigation.map((item) => <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => setIsMenuOpen(false)}>{item.label}</NavLink>)}
          </nav>
        </div>
      </div>
    </header>
  );
}
