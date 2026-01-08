export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Pratham Tamrakar. All rights reserved.
        </p>

        <p className="mt-2">
          Built with <span className="text-red-400">❤️</span> using{" "}
          <span className="text-indigo-400">React</span> &{" "}
          <span className="text-indigo-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
