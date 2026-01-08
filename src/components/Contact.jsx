import { Github, Linkedin, Twitter, CodeIcon } from 'lucide-react';
import { useRef } from "react";
import emailjs from "@emailjs/browser"


export default function Contact({ setStatus }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2qhoeoj",
        "template_n8ya0jr",
        formRef.current,
        "QPadN7oZoAMfEbnBt"
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => setStatus(null), 4000);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );

  };
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-5 scroll-mt-14">
      <h2 className="text-3xl font-bold mb-4 text-indigo-400 text-center">
        Contact
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Have a project in mind or want to collaborate? Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-semibold text-white">
            Let’s Connect
          </h3>

          <p className="text-gray-400">
            I’m always open to discussing new opportunities, projects,
            or just having a tech-related conversation.
          </p>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <span className="text-indigo-400">📧</span>
              <span>prathamtamrakar@email.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-indigo-400">📍</span>
              <span>Jabalpur, Madhya Pradesh, India</span>
            </div>
          </div>

          
          <div className="pt-4">
            <h4 className="text-white font-medium mb-4">
              Connect With Me
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/prathamTamrakar"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3
                           border border-gray-400 rounded-xl
                           hover:border-indigo-400 hover:text-indigo-400
                           transition text-sm"
              >
                <Github /> Github
              </a>

              <a
                href="https://linkedin.com/in/prathamtamrakar"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3
                           border border-gray-400 rounded-xl
                           hover:border-indigo-400 hover:text-indigo-400
                           transition text-sm"
              >
                <Linkedin /> LinkedIn
              </a>

              <a
                href="https://twitter.com/pratham_tam"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3
                           border border-gray-400 rounded-xl
                           hover:border-indigo-400 hover:text-indigo-400
                           transition text-sm"
              >
                <Twitter /> Twitter
              </a>

              <a
                href="https://leetcode.com/prathamTamrakar"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3
                           border border-gray-400 rounded-xl
                           hover:border-indigo-400 hover:text-indigo-400
                           transition text-sm"
              >
                <CodeIcon /> LeetCode
              </a>
            </div>
          </div>
        </div>

      
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about your idea or opportunity..."
              className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-medium text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
