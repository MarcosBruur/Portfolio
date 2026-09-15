import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const language = location.pathname === "/skills" ? "TS" : location.pathname === "/projects" ? "JSON" : location.pathname === "/trajectory" ? "LOG" : location.pathname === "/contact" ? "SH" : "MD";

  return (
    <footer className="border-t border-border bg-secondary-deep text-xs text-secondary-text">
      <div className="mx-auto flex h-9 w-full max-w-[1800px] items-center justify-between px-4 sm:px-6">
        <span><span className="text-primary">◆</span> main</span>
        <span className="hidden sm:inline">Marcos Bruno · portfolio workspace</span>
        <span>{language} · UTF-8</span>
      </div>
    </footer>
  );
}
