import React from "react";
import { Book, Home, Upload, BookOpen, Library, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext"; // Import global theme context

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use global dark mode state

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Browse", href: "download", icon: Library },
    { label: "Upload", href: "upload", icon: Upload },
    { label: "Syllabus", href: "syllabus", icon: BookOpen },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => (window.location.href = "/")}>
            <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">PolyNotes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
