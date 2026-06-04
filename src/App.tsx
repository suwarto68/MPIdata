/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import MoodSelector from './components/MoodSelector.tsx';
import Pendahuluan from './components/Pendahuluan.tsx';
import Materi from './components/Materi.tsx';
import Eksplorasi from './components/Eksplorasi.tsx';
import Quiz from './components/Quiz.tsx';
import Tugas from './components/Tugas.tsx';
import Penutup from './components/Penutup.tsx';
import { Sparkles, Milestone, Compass, FileCheck, Share2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900" id="application-container">
      {/* Dynamic Navigation header component bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container of Applet Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8" id="application-main">
        
        {/* --- SECTION 1: HOME/BERANDA --- */}
        {activeSection === 'beranda' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn" id="beranda-section">
            
            {/* Elegant Hero Banner */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl" id="hero-banner">
              {/* Absolutes decor circle blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-12 -mb-12 blur-xl pointer-events-none"></div>

              <div className="relative space-y-3 max-w-3xl">
                {/* Meta details badge */}
                <div className="inline-flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-100 mb-1 border border-white/10" id="welcome-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Media Belajar Merdeka</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight" id="hero-main-title">
                  Selamat Datang di Laboratorium Cerdas Statistik matematika!
                </h1>

                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal" id="hero-paragraph">
                  Selamat belajar di laboratorium media interaktif kelas VII Fase D Matematika tentang <strong>Data dan Diagram</strong> bersama Bapak <strong>Suwarto, S.Pd</strong>. Di sini, kamu akan mendalami cara mengorganisasikan informasi mentah dari kehidupan sehari-hari, mengidentifikasi golongan datanya, dan menyajikannya ke dalam diagram lingkaran dan batang yang memukau. Mari taklukkan angka dengan kesenangan!
                </p>

                {/* Checklist short info features */}
                <div className="pt-3 flex flex-wrap gap-4 text-[10px] sm:text-xs font-mono text-blue-200" id="hero-feature-pills">
                  <div className="flex items-center space-x-1.5">
                    <Milestone className="w-4 h-4 text-amber-300" />
                    <span>Materi Sesuai AKM</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Compass className="w-4 h-4 text-amber-300" />
                    <span>Simulator SVG Interaktif</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <FileCheck className="w-4 h-4 text-amber-300" />
                    <span>Kuis ANBK & Sertifikat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood Selector Module block */}
            <MoodSelector />

            {/* Quick guide section directions */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm max-w-2xl mx-auto" id="quick-start-guild">
              <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-widest text-center mb-3">Langkah Penggunaan Media Pembelajaran</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-extrabold text-blue-600 block mb-1">01. BACA</span>
                  <p className="text-[10px] text-slate-500">Mulai dari menu Pendahuluan &amp; Materi untuk mengasah bekal teori dasarmu.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-extrabold text-emerald-600 block mb-1">02. COBA</span>
                  <p className="text-[10px] text-slate-500">Eksplorasi simulator diagram dengan memasukkan angka-angka hobi pilihanmu.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-extrabold text-indigo-600 block mb-1">03. UJI</span>
                  <p className="text-[10px] text-slate-500">Isi kuis AKM ANBK, kirim nilainya ke Spreadsheet guru, dan unduh sertifikatmu!</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SECTION 2: PENDAHULUAN --- */}
        {activeSection === 'pendahuluan' && <Pendahuluan />}

        {/* --- SECTION 3: MATERI (ACCORDION) --- */}
        {activeSection === 'materi' && <Materi />}

        {/* --- SECTION 4: EKSPLORASI --- */}
        {activeSection === 'eksplorasi' && <Eksplorasi />}

        {/* --- SECTION 5: KUIS ANBK --- */}
        {activeSection === 'kuis' && <Quiz />}

        {/* --- SECTION 6: TUGAS --- */}
        {activeSection === 'tugas' && <Tugas />}

        {/* --- SECTION 7: PENUTUP --- */}
        {activeSection === 'penutup' && <Penutup />}

      </main>

      {/* Persistent Beautiful Footer */}
      <footer className="bg-white border-t border-slate-100 py-6 text-center text-xs text-slate-500" id="application-footer">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            Media Pembelajaran Interaktif Mandiri Matematika • Materi Data &amp; Diagram
          </p>
          <p className="text-[10px]">
            Dipersembahkan oleh: <strong className="text-indigo-600 font-bold">Suwarto, S.Pd</strong> • Guru Matematika Kurikulum Merdeka Fase D Kelas 7
          </p>
          <p className="text-[9px] text-slate-400 font-mono">
            Copyright © 2026 • Kemendikbudristek Republik Indonesia • Dioptimalkan Dengan Teknologi Merdeka Belajar
          </p>
        </div>
      </footer>
    </div>
  );
}
