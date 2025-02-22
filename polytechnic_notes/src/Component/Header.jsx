import React, { useState } from 'react';
import { Book, Home, Upload, BookOpen, Library } from 'lucide-react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Browse', href: 'download', icon: Library },
    { label: 'Upload', href: 'upload', icon: Upload },
    { label: 'Syllabus', href: 'syllabus', icon: BookOpen },
  ];

  const handleNavClick = (label, href) => {
    setActiveTab(label);
    window.location.href = href;
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center" onClick={() => window.location.href = '/'}>
              <Book className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PolyNotes</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
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
                    isActive ? 'scale-110 -translate-y-1' : ''
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  />
                  <span
                    className={`text-xs mt-1 transition-colors duration-200 ${
                      isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
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