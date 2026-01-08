const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered web application that analyzes resumes against job descriptions and provides ATS-friendly improvement suggestions.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prathamTamrakar/Ai-Resume-Analyzer",
    live: "https://resumeinsights.vercel.app/",
  },
  {
    title: "E-Learning Platform",
    description:
      "A learning platform featuring course listings, user authentication, and progress tracking for students.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prathamTamrakar/IntelliLearn",
    live: "https://project-intellilearn.vercel.app/",
  },
  {
    title: "Mental Health Support System",
    description:
      "A web-based mental health support system offering self-help resources, mood tracking, and guided support features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prathamTamrakar/NeuroSaathi-frontend",
    live: "https://neuro-saathi.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "A task management application to create, organize, and track tasks with user authentication and status updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prathamTamrakar/task-management-app",
    live: "https://task-management-app.vercel.app",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-5 scroll-mt-14 ">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center ">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-400 transition group"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg border border-gray-700 hover:border-indigo-400 hover:text-indigo-400 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
