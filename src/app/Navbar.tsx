"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-sm border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          <img className="image0logo" src="./logo.png" alt="" />
        </Link>

        {/* 🎯 Buttons container */}
        <div className="flex items-center space-x-3">
          {/* MVP link */}
          <a
            href="/mvp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition"
          >
            🚀 MVP
          </a>

          {/* Video link */}
          <a
            href="/video"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition"
          >
            🎬 Video
          </a>
        </div>
      </div>
    </header>
  );
}
