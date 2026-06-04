/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, BarChart2, Activity, Award, CheckCircle, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'pendahuluan', label: 'Pendahuluan', icon: BookOpen },
    { id: 'materi', label: 'Materi', icon: BarChart2 },
    { id: 'eksplorasi', label: 'Eksplorasi', icon: Activity },
    { id: 'kuis', label: 'Kuis ANBK', icon: HelpCircle },
    { id: 'tugas', label: 'Tugas', icon: Award },
    { id: 'penutup', label: 'Penutup', icon: CheckCircle },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm" id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg" id="navbar-logo-container">
              <BarChart2 className="w-6 h-6" id="navbar-logo-icon" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800 tracking-tight block" id="navbar-title">
                DATA DAN DIAGRAM
              </span>
              <span className="text-xs text-slate-500 font-mono block" id="navbar-subtitle">
                Matematika Kelas 7 • Fase D
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center" id="desktop-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-100/50 shadow-sm shadow-blue-50/50'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden" id="mobile-menu-trigger">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-50 focus:outline-none transition-all cursor-pointer"
              aria-expanded="false"
              id="hamburger-btn"
            >
              <span className="sr-only">Buka menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white" id="mobile-menu-dropdown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
