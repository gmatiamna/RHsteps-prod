import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="text-black dark:text-white">My</span>
        <span className="text-orange-500">Logo</span>
      </div>

      {/* Links + Theme Switch */}
      <div className="flex items-center gap-4">
        <a href="#home" className="text-black dark:text-white">Home</a>
        <a href="#about" className="text-black dark:text-white">About</a>
        <a href="#contact" className="text-black dark:text-white">Contact</a>

        {/* Dark/Light toggle */}
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
