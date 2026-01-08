import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">

      <div className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-indigo-400">
            <span className="text-indigo-400">Pratham</span>
            <span className="text-gray-400">.dev</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <nav className="flex flex-col px-6 py-4 gap-4 text-gray-300">
              <a onClick={() => setOpen(false)} href="#about">About</a>
              <a onClick={() => setOpen(false)} href="#skills">Skills</a>
              <a onClick={() => setOpen(false)} href="#projects">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact">Contact</a>
            </nav>
          </div>
        )}
      </div>

      <section className="pt-32 pb-24 bg-linear-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-indigo-400 font-medium mb-4">
              👋 Hi, I’m Pratham Tamrakar
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Full-Stack <br />
              <span className="text-indigo-400">
                MERN Developer
              </span>
            </h2>

            <p className="text-gray-400 max-w-xl mb-8">
              I build scalable full-stack web applications using the MERN stack.
              I enjoy turning ideas into real products with clean UI,
              secure APIs, and efficient database design.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-medium"
              >
                View Projects
              </a>

              <a
                href="/PrathamTamrakarResume.pdf"
                target="_blank"
                className="border border-gray-700 hover:border-indigo-400 transition px-6 py-3 rounded-lg font-medium"
              >
                Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 text-sm">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden border border-indigo-500/40">
                <img
                  src="/profile.jpg"
                  alt="Pratham Tamrakar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </header>
  );
}
