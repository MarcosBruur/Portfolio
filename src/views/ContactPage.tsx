import Form from "../components/Form";

const links = [
  ["GitHub", "https://github.com/MarcosBruur"],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/marcos-alexis-bruno-urquiza-71202826b/",
  ],
  ["Instagram", "https://www.instagram.com/marcos_bruno_ur/"],
];

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <p className="text-sm text-text-soft">// network request</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Contactemos</h1>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <Form />
      </div>
      <section className="editor-panel mt-10 w-full max-w-3xl">
        <div className="editor-filebar">
          <span className="text-blue">NET</span>social-links.conf
        </div>
        <div className="flex flex-wrap gap-3 p-5">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-3 py-2 text-sm text-blue transition-colors hover:border-blue hover:bg-card-muted"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
