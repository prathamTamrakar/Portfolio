export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-8 ">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center ">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            I’m <span className="text-white font-medium">Pratham Tamrakar</span>,
            a passionate <span className="text-indigo-400">Full-Stack Developer </span>
            who enjoys building practical web applications and turning ideas into
            working products.
          </p>

          <p>
            I primarily work with the MERN stack, focusing on creating clean user
            interfaces, scalable backend APIs, and well-structured databases.
            I enjoy solving real-world problems through code and continuously
            improving my development skills.
          </p>

          <p>
            I go beyond tutorials by building complete projects with authentication,
            dashboards, and APIs, and documenting them properly on GitHub.
            These projects have helped me better understand real hiring requirements
            and software development best practices.
          </p>

          
          <div className="pt-4">
            <h4 className="text-white font-semibold mb-2">
              Education
            </h4>
            <p>
              Bachelor of Technology (B.Tech) in Computer Science & Engineering
            </p>
            <p className="text-gray-500">
              Baderia Global Institute of Engineering and Management
            </p>
          </div>
        </div>

        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-semibold text-white">
            What I Do
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="text-indigo-400">▹</span>
              Build full-stack web applications using React, Node.js, Express, and MongoDB
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">▹</span>
              Develop RESTful APIs with authentication and role-based access
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">▹</span>
              Create responsive and user-friendly interfaces using Tailwind CSS
            </li>

            <li className="flex gap-3">
              <span className="text-indigo-400">▹</span>
              Work with Git and GitHub for version control and project collaboration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
