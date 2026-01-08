const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Java", "Javascript","Python"],
  },
  {
    category: "Frontend Development",
    items: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
  
];


export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-5 scroll-mt-14 ">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-indigo-400 transition"
          >
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm bg-gray-800/70 border border-gray-700 hover:border-indigo-400 hover:text-indigo-300 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
