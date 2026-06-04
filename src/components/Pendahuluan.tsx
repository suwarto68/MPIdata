/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Lightbulb, Compass, Stars, Sparkles } from 'lucide-react';

export default function Pendahuluan() {
  const tujuanList = [
    "Siswa mampu mengidentifikasi dan membedakan jenis data kategorik dan data numerik secara tepat dari kehidupan sehari-hari.",
    "Siswa mampu mengumpulkan dan mengorganisasikan data mentah kelompok dalam bentuk tabel frekuensi sederhana.",
    "Siswa mampu menyajikan data hasil survei individu ke dalam diagram batang (bar chart) dan diagram lingkaran (pie chart) secara presisi.",
    "Siswa mampu membaca, menginterpretasikan, dan menganalisis serta menarik kesimpulan logis dari data visual yang ditampilkan pada diagram."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn" id="pendahuluan-section">
      <div className="text-center">
        <span className="inline-flex items-center space-x-1 bg-violet-100 text-violet-800 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Langkah Awal • Arah Pembelajaran</span>
        </span>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight" id="pendahuluan-title">
          Pendahuluan Pembelajaran
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Mari pahami ke mana arah petualangan data dan angka kita hari ini!
        </p>
      </div>

      {/* TUJUAN PEMBELAJARAN PANEL */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6" id="tujuan-pembelajaran-panel">
        <div className="flex items-center space-x-2 text-violet-700 font-bold mb-4">
          <Target className="w-5.5 h-5.5 text-violet-600" />
          <h3 className="text-base sm:text-lg">Tujuan Pembelajaran (Fase D)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="tujuan-list-grid">
          {tujuanList.map((tujuan, index) => (
            <div key={index} className="bg-violet-50/20 border border-violet-100/50 rounded-xl p-4 flex items-start space-x-3 hover:shadow-sm transition-all">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-600 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-xs sm:text-xs text-slate-600 leading-relaxed font-medium">
                {tujuan}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* APERSEPSI CARD */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md" id="apersepsi-panel">
        {/* Background blobs decor */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 rounded-l-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-4 left-4 text-white/10 pointer-events-none">
          <Sparkles className="w-16 h-16" />
        </div>

        <div className="relative space-y-4">
          <div className="flex items-center space-x-2 text-blue-100 font-bold">
            <Lightbulb className="w-5 h-5 text-amber-300 fill-amber-300" />
            <h3 className="text-sm sm:text-base tracking-wide uppercase">Apersepsi Pemantik Cerdas</h3>
          </div>

          <h4 className="text-lg sm:text-xl font-bold tracking-tight">
            Bagaimana Angka di Sekitarmu Mengubah Dunia?
          </h4>

          <p className="text-xs sm:text-sm leading-relaxed text-blue-100/90 font-medium">
            Pernahkah kamu memperhatikan bagaimana toko online tahu barang apa saja yang sedang ngetren saat ini? Atau bagaimana dinas kesehatan tahu kapan kasus demam berdarah naik secara tiba-tiba di daerahmu? Jawabannya ada pada <strong>data</strong>! Setiap hari kita memproduksi ribuan data tanpa disadari: mulai dari jumlah langkah kaki kita, jenis sarapan pagi, hingga nilai ulangan di rapor. Belajar mengolah data bukan sekadar menghitung rumus matematika, melainkan melatih mata kita agar mampu &quot;membaca rahasia&quot; di balik angka dan mengkomunikasikannya kepada orang lain dalam bentuk diagram yang cantik dan informatif. Sudah siap berekspresi dengan diagram versimu sendiri?
          </p>

          <div className="pt-2 flex items-center space-x-1 text-xs font-mono text-amber-200">
            <Stars className="w-4 h-4 text-amber-300" />
            <span>Materi ini disusun selaras dengan Asesmen Nasional Kemendikbudristek!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
