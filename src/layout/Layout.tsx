import { CodeBracketSquareIcon, CommandLineIcon, FolderIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const files = [
  { to: "/", label: "about-me.md", icon: "#" },
  { to: "/skills", label: "skills.ts", icon: "{}" },
  { to: "/projects", label: "projects.json", icon: "[]" },
  { to: "/trajectory", label: "trajectory.log", icon: "↳" },
  { to: "/contact", label: "contact.sh", icon: "$" },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentFile = files.find((file) => file.to === location.pathname) ?? files[0];
  const [openFiles, setOpenFiles] = useState(() => [currentFile]);

  useEffect(() => {
    setOpenFiles((current) => current.some((file) => file.to === currentFile.to) ? current : [...current, currentFile]);
  }, [currentFile]);

  const closeFile = (fileToClose: (typeof files)[number]) => {
    const remainingFiles = openFiles.filter((file) => file.to !== fileToClose.to);
    setOpenFiles(remainingFiles);

    if (fileToClose.to === currentFile.to) {
      navigate(remainingFiles.at(-1)?.to ?? "/");
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollToTop />
      <Header />
      <div className="mx-auto flex w-full max-w-[1800px] lg:min-h-[calc(100vh-6rem)]">
        <aside className="hidden w-12 shrink-0 flex-col items-center border-r border-border bg-bg-dark py-4 lg:flex">
          <FolderIcon className="size-5 text-primary" />
          <CodeBracketSquareIcon className="mt-6 size-5 text-text-soft" />
          <CommandLineIcon className="mt-6 size-5 text-text-soft" />
          <Squares2X2Icon className="mt-auto size-5 text-text-soft" />
        </aside>
        <aside className="hidden w-60 shrink-0 border-r border-border bg-surface lg:block">
          <div className="border-b border-border px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-text-soft">Explorador</div>
          <div className="px-2 py-3">
            <p className="px-2 pb-2 text-xs text-text-muted">MARCO-PORTFOLIO</p>
            {files.map((file) => (
              <NavLink key={file.to} to={file.to} className={({ isActive }) => `flex items-center gap-2 border-l-2 px-2 py-2 text-xs transition-colors ${isActive ? "border-primary bg-card text-text" : "border-transparent text-text-soft hover:bg-card-muted hover:text-text-muted"}`}>
                <span className="w-4 text-center text-blue">{file.icon}</span>
                {file.label}
              </NavLink>
            ))}
          </div>
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex h-11 overflow-x-auto border-b border-border bg-surface px-3">
            {openFiles.map((file) => {
              const isActive = file.to === currentFile.to;
              return (
                <div key={file.to} className={`flex h-full shrink-0 items-center gap-2 border-r border-border px-3 text-xs transition-colors ${isActive ? "border-t-2 border-t-primary bg-card text-text-muted" : "text-text-soft hover:bg-card-muted"}`}>
                  <button type="button" onClick={() => navigate(file.to)} className="flex items-center gap-2" aria-current={isActive ? "page" : undefined}>
                    <span className="text-blue">{file.icon}</span>
                    {file.label}
                  </button>
                  <button type="button" onClick={() => closeFile(file)} className="ml-3 text-text-soft transition-colors hover:text-primary" aria-label={`Cerrar ${file.label}`}>×</button>
                </div>
              );
            })}
          </div>
          <main className="mx-auto w-full max-w-[1480px] px-4 py-10 sm:px-6 md:px-8 md:py-14 2xl:px-10">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
