import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-pink-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-pink-600">
            My Personal Website
          </div>

          {/* Botón hamburguesa para móviles */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600 md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Enlaces de navegación */}
          <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${menuOpen ? 'flex' : 'hidden'} w-full md:w-auto mt-4 md:mt-0`}>
            <a href="#about" className="text-pink-600 hover:text-pink-800 py-1">
              A Little About Me
            </a>
            <a href="#hobbies" className="text-pink-600 hover:text-pink-800 py-1">
              My Hobbies and Interests
            </a>
            <a href="#personal-life" className="text-pink-600 hover:text-pink-800 py-1">
              My Personal Life
            </a>
            <a href="#work-experience" className="text-pink-600 hover:text-pink-800 py-1">
              My Work Experience
            </a>
            <a href="#goals" className="text-pink-600 hover:text-pink-800 py-1">
              My Goals and Dreams
            </a>
            <a href="#evidence" className="text-pink-600 hover:text-pink-800 py-1">
              Evidence Explanation
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
