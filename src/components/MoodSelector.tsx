/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smile, Frown, Meh, Sparkles } from 'lucide-react';

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    {
      id: 'sedih',
      emoji: '😢',
      label: 'Sedih',
      color: 'bg-red-50 text-red-600 border-red-200 hover:border-red-300 active:bg-red-100',
      activeColor: 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-200 scale-105 -translate-y-1',
      icon: Frown,
      message: 'Yuk kita ceriakan harimu! Belajar matematika itu seru lho. Dengan data, kita bisa memahami misteri dunia di sekitar kita secara menyenangkan. Jangan patah semangat, Ibu/Bapak Guru dan teman-teman siap mendampingimu!'
    },
    {
      id: 'biasa',
      emoji: '😐',
      label: 'Biasa Saja',
      color: 'bg-amber-50 text-amber-600 border-amber-200 hover:border-amber-300 active:bg-amber-100',
      activeColor: 'bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-200 scale-105 -translate-y-1',
      icon: Meh,
      message: 'Mari buat hari biasa ini menjadi luar biasa dengan tantangan seru! Kita akan menelusuri bagaimana gambar dan grafik bisa menyajikan informasi rahasia. Bersiap untuk petualangan data hari ini, ya!'
    },
    {
      id: 'senang',
      emoji: '😊',
      label: 'Senang',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:border-emerald-300 active:bg-emerald-100',
      activeColor: 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200 scale-105 -translate-y-1',
      icon: Smile,
      message: 'Luar biasa! Semat keceriaanmu sangat menular! Kepuasan belajar hari ini akan berlipat ganda karena pikiranmu yang gembira sangat mudah menyerap ilmu. Ayo salurkan energimu untuk memecahkan soal diagram seru!'
    }
  ];

  const currentMood = moods.find(m => m.id === selectedMood);

  return (
    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-inner max-w-2xl mx-auto my-8" id="mood-selector-container">
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider mb-2" id="mood-title-badge">
          <Sparkles className="w-3 h-3" />
          <span>Fokus Belajar</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800" id="mood-prompt">
          Bagaimana perasaanmu sebelum mulai belajar hari ini?
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Pilih salah satu ikon di bawah untuk mencocokkan motivasi belajarmu!
        </p>
      </div>

      {/* Mood Buttons Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto" id="mood-buttons-grid">
        {moods.map((mood) => {
          const isSelected = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              id={`mood-btn-${mood.id}`}
              onClick={() => setSelectedMood(mood.id)}
              className={`flex flex-col items-center justify-center py-4 px-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                isSelected ? mood.activeColor : `${mood.color} hover:scale-102`
              }`}
            >
              <span className="text-3xl sm:text-4xl mb-2 transition-transform duration-200 hover:scale-110 select-none block" role="img" aria-label={mood.label}>
                {mood.emoji}
              </span>
              <span className="text-xs sm:text-sm font-semibold select-none">
                {mood.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Motivational Message Output */}
      <div className="min-h-[100px] mt-6 flex items-center justify-center" id="mood-message-wrapper">
        {currentMood ? (
          <div 
            id={`mood-motivational-card-${currentMood.id}`}
            className="w-full bg-white p-5 rounded-xl border border-slate-100 shadow-sm transition-all duration-500 transform translate-y-0 opacity-100 ease-out"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <currentMood.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Pesan Motivasi untuk {currentMood.label}
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {currentMood.message}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400 italic text-center" id="mood-placeholder-msg">
            Silakan pilih mood di atas...
          </p>
        )}
      </div>
    </div>
  );
}
