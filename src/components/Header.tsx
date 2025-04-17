import React from "react";

export const Header = () => {
  return (
    <div>
      <nav className="bg-pink-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-pink-600">
            My Personal Website
          </div>
          <div className="space-x-6">
            <a href="#about" className="text-pink-600 hover:text-pink-800">
              A Little About Me
            </a>
            <a href="#hobbies" className="text-pink-600 hover:text-pink-800">
              My Hobbies and Interests
            </a>
            <a href="#personal-life" className="text-pink-600 hover:text-pink-800">
              My Personal Life
            </a>
            <a
              href="#work-experience"
              className="text-pink-600 hover:text-pink-800"
            >
              My Work Experience
            </a>
            <a href="#goals" className="text-pink-600 hover:text-pink-800">
              My Goals and Dreams
            </a>
            <a href="#evidence" className="text-pink-600 hover:text-pink-800">
              Evidence Explanation
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
