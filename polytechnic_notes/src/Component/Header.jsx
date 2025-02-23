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
import React, { useState } from "react";
import { Book, Home, Upload, BookOpen, Library, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Browse", href: "download", icon: Library },
    { label: "Upload", href: "upload", icon: Upload },
    { label: "Syllabus", href: "syllabus", icon: BookOpen },
  ];

  const handleNavClick = (label, href) => {
    setActiveTab(label);
    window.location.href = href;
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => (window.location.href = "/")}>
              <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">PolyNotes</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 ${
                    activeTab === item.label ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      <div className={`md:hidden fixed bottom-0 left-0 right-0 ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} border-t z-50`}>
        <nav className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div
                  className={`flex flex-col items-center transition-all duration-300 transform ${
                    isActive ? "scale-110 -translate-y-1" : ""
                  }`}
                >
                  <Icon className={`h-6 w-6 transition-colors duration-200 ${isActive ? "text-blue-600" : isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <span className={`text-xs mt-1 transition-colors duration-200 ${isActive ? "text-blue-600 font-medium" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Header;

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
