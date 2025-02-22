import React, { useState } from 'react';
import sampleData from '../Data/notes.json';
import { Download } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function DownloadPage() {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const { isDarkMode } = useTheme();

  const branches = ["all", "Information Technology", "Electronics", "Mechanical", "Computer", "Civil"];
  const semesters = ["all", "1", "2", "3", "4", "5", "6"];

  const filteredNotes = sampleData.filter((note) => {
    const branchMatch =
      selectedBranch === "all" ||
      note.branch.toLowerCase() === selectedBranch.toLowerCase();
    const semesterMatch =
      selectedSemester === "all" ||
      note.semester.toString() === selectedSemester;

    return branchMatch && semesterMatch;
  });

  return (
    <div
      className={`min-h-screen relative pt-20 px-6 pb-12 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 animate-fade-in">
          Browse Study Materials
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {/* Branch Filter */}
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className={`px-6 py-3 rounded-xl border border-white/20 shadow-lg focus:outline-none transition-all duration-300 ${
              isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white/40 text-gray-700 hover:bg-white/50"
            }`}
          >
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch === "all" ? "All Branches" : `${branch} Engineering`}
              </option>
            ))}
          </select>

          {/* Semester Filter */}
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className={`px-6 py-3 rounded-xl border border-white/20 shadow-lg focus:outline-none transition-all duration-300 ${
              isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white/40 text-gray-700 hover:bg-white/50"
            }`}
          >
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester === "all" ? "All Semesters" : `Semester ${semester}`}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <div
              key={note.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative p-6 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white/60 backdrop-blur-xl hover:bg-white/80"
              }`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {note.title}
                    </h3>
                    <div className="space-y-1 text-gray-300">
                      <p className="text-sm flex items-center">
                        <span className="w-20">Branch:</span>
                        <span className="font-medium">{note.branch} Engineering</span>
                      </p>
                      <p className="text-sm flex items-center">
                        <span className="w-20">Semester:</span>
                        <span className="font-medium">{note.semester}</span>
                      </p>
                      <p className="text-sm flex items-center">
                        <span className="w-20">Contributor:</span>
                        <span className="font-medium">{note.contributor || "Unknown"}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(note.link, "_blank")}
                    className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Download className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
