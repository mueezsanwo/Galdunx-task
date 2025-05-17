'use client'

import React, { useState } from 'react'
import { Search, Calendar, Bell, Sun, Moon, User, Menu, X } from 'lucide-react'

interface NavbarProps {
  sidebarOpen: boolean
  onSidebarToggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, onSidebarToggle }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-white/15 bg-[#0A0A0A] ">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-16 py-4 ">
        <div className="flex justify-between items-center w-full">
          {/* Sidebar toggle (mobile) */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-indigo-500 text-indigo-500 hover:bg-indigo-600 hover:text-white transition"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo or placeholder */}
          <div className="flex-1 sm:hidden" />

          {/* Desktop content */}
          <div className="hidden sm:flex items-center flex-wrap gap-3 ml-auto lg:mr-8 ">
            {/* Search bar */}
            <div className="flex items-center  gap-2 px-3 py-2 rounded-full  border border-white/20 text-white/40 min-w-[300px] md:min-w-[350px] max-w-[350px] flex-grow">
              <Search className="w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Find users, submission etc"
                className="bg-transparent outline-none text-sm placeholder-white/40 text-white w-full"
              />
            </div>

            {/* Date */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-full  border border-white/20 text-white/40 text-sm whitespace-nowrap">
              <Calendar className="w-5 h-5 shrink-0" />
              <span className="hidden md:inline">31.11.2024 - 25.5.2025</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-full  border border-white/20 text-white/40 text-sm"
              aria-label="Toggle dark mode"
            >
              <Sun className={`w-5 h-5 ${!darkMode ? 'text-white opacity-100' : 'opacity-40'}`} />
              <Moon className={`w-5 h-5 ${darkMode ? 'text-white opacity-100' : 'opacity-40'}`} />
            </button>

            {/* Notification */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/40">
              <Bell className="w-4 h-4" />
            </button>

            {/* User */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full border bg-white border-white/20 text-black">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile right menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white ml-4 hover:bg-white hover:text-black transition"
            aria-label="Toggle mobile nav"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-4 flex flex-col gap-3 text-white">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white/70">
              <Search className="w-5 h-5" />
              <input
                type="text"
                placeholder="Find users, submission etc"
                className="bg-transparent outline-none text-sm placeholder-white/40 text-white w-full"
              />
            </div>

            <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white/70 text-sm">
              <Calendar className="w-5 h-5" />
              <span>31.11.2024 - 25.5.2025</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white/70 text-sm"
            >
              <Sun className={`w-5 h-5 ${!darkMode ? 'text-white' : 'opacity-40'}`} />
              <Moon className={`w-5 h-5 ${darkMode ? 'text-white' : 'opacity-40'}`} />
            </button>

            <button className="w-10 h-10 rounded-full border border-white/20 text-white/40 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </button>

            <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
              <User className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
