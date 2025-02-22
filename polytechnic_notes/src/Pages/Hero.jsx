import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Component/carousel';
import { Upload, Download, ChevronRight } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24 relative">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              PolyNotes Hub
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Share and discover quality study materials with fellow polytechnic students
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="relative w-64 h-64 animate-float">
            <img
              src="/hero icon.jpg"
              alt="Illustration"
              className="w-full h-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
         <div className="p-3 mt-5 bg-blue-100/80 rounded-xl group-hover:bg-blue-200/80 transition-colors duration-300">
      <Carousel />
    </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          <Link
            to="/upload"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100/80 rounded-xl group-hover:bg-blue-200/80 transition-colors duration-300">
                  <Upload className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Contribute Notes</h3>
                  <p className="text-gray-600">Share your study materials</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          <Link
            to="/download"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100/80 rounded-xl group-hover:bg-indigo-200/80 transition-colors duration-300">
                  <Download className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Browse Notes</h3>
                  <p className="text-gray-600">Find study materials</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
