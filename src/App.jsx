import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const [status, setStatus] = useState(null);
  // status: null | "success" | "error"

  return (
    <div className="bg-gray-950 text-white min-h-screen">

      <Header />

      {status && (
        <div
          className={`fixed top-20 z-60 left-1/2 -translate-x-1/2 z-50
            w-[90%] max-w-md rounded-lg px-4 py-3 text-sm font-medium text-center
            backdrop-blur border shadow-lg
            ${
              status === "success"
                ? "bg-green-500/10 text-green-400 border-green-500/20"
                : "bg-red-500/10 text-red-400 border-red-500/20"
            }`}
        >
          {status === "success"
            ? "✅ Message sent successfully!"
            : "❌ Failed to send message. Please try again."}
        </div>
      )}

      <main className="pt-20 space-y-24">
        <About />
        <Skills />
        <Projects />
        <Contact setStatus={setStatus} />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
