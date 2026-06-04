/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, HelpCircle, Heart, Star, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function Penutup() {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) {
      alert('Silakan pilih bintang penilaian refleksi terlebih dahulu!');
      return;
    }
    setIsSent(true);
    alert('Terima kasih banyak atas refleksi jujurmu! Tanggapan belajarmu telah diteruskan kepada Bapak Suwarto, S.Pd.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn" id="penutup-section-root">
      <div className="text-center">
        <span className="inline-flex items-center space-x-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Fase Akhir • Pembelajaran Selesai</span>
        </span>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Penutup Pembelajaran
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Luar biasa! Kamu telah menuntaskan seluruh rantai aktivitas belajar Data dan Diagram hari ini.
        </p>
      </div>

      {/* RANGKUMAN MATERI PANEL */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6" id="rangkuman-materi-panel">
        <div className="flex items-center space-x-2 text-slate-800 font-bold border-b border-slate-100 pb-3 mb-4">
          <BookOpen className="w-5.2 h-5.2 text-blue-600 animate-pulse" />
          <h3 className="text-sm sm:text-base">Rangkuman Inti Materi Pembelajaran</h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Melalui petualangan belajar ini, kita telah menyimpulkan bahwa <strong>data</strong> di sekitar kita tergolong menjadi dua jenis utama, yakni <strong>data kategorik</strong> yang mengelompokkan label kualitatif (seperti cita-cita, jenis warna, atau golongan darah) serta <strong>data numerik</strong> yang mencatat nilai angka kuantitatif hasil membilang atau mengukur (seperti suhu puncak jaya, tinggi badan, atau skor uji kemampuan). Data mentah tersebut dapat diringkas secara visual menggunakan <strong>diagram batang</strong> untuk membandingkan banyaknya nilai pada masing-masing kategori secara mutlak dan presisi, atau dengan menggunakan juring sirkular pada <strong>diagram lingkaran</strong> untuk menilai persentase kontribusi bagian terhadap total kesatuan utuh. Menentukan diagram yang tepat sangat penting untuk menyampaikan pesan data secara akurat serta menghindari kesalahpahaman pembaca!
        </p>
      </div>

      {/* REFLEKSI PEMBELAJARAN INTERACTIVE (LOCAL & GOOGLE FORM CAPABILITY) */}
      <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow rounded-2xl p-6" id="refleksi-pembelajaran-panel">
        <div className="flex items-center space-x-2 text-indigo-800 font-bold mb-4">
          <Heart className="w-5 h-5 text-indigo-600 fill-indigo-100 animate-pulse" />
          <h3 className="text-sm sm:text-base">Refleksi Belajar Mandiri</h3>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          Mari luangkan waktu sejenak untuk mengisi penilaian refleksi pembelajaranmu hari ini demi perbaikan terus-menerus.
        </p>

        <form onSubmit={handleSendFeedback} className="space-y-4" id="feedback-form-wrapper">
          {/* Rating click stars */}
          <div className="flex flex-col space-y-1.5 font-semibold">
            <span className="text-xs text-slate-700">Seberapa paham kamu tentang materi pembelajaran hari ini?</span>
            <div className="flex items-center space-x-2 pt-1" id="star-rating-controller">
              {[1, 2, 3, 4, 5].map((starValue) => {
                const isActive = rating !== null && starValue <= rating;
                return (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => setRating(starValue)}
                    className="p-1 focus:outline-none cursor-pointer transition transform hover:scale-110"
                    title={`Paham tingkat ${starValue}`}
                    id={`star-btn-${starValue}`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        isActive ? 'text-amber-500 fill-amber-400' : 'text-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            {rating && (
              <span className="text-[11px] text-amber-600 font-bold font-mono">
                {rating === 5 && 'Sangat Paham Sekali! ⭐'}
                {rating === 4 && 'Paham Berfungsi Baik! 😊'}
                {rating === 3 && 'Cukup Paham Semuanya! 😐'}
                {rating === 2 && 'Masih Ada yang Bingung 😢'}
                {rating === 1 && 'Perlu Bantuan Mengulang 🆘'}
              </span>
            )}
          </div>

          {/* Feedback text */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1" htmlFor="textarea-feedback">
              Bagian mana dari materi ini yang menurutmu paling menarik atau paling membingungkan?
            </label>
            <textarea
              id="textarea-feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tulis refleksi sejujurnya di sini..."
              className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
              rows={3}
              required
              disabled={isSent}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 text-white cursor-pointer select-none ${
              isSent ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100'
            }`}
            id="btn-send-feedback"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSent ? 'Refleksi Terkirim! Terima kasih' : 'Kirim Penilaian Refleksi'}</span>
          </button>
        </form>

        {/* EMBED GOOGLE FORM ALTERNATIVE LINK SECTIONS */}
        <div className="border-t border-indigo-100/50 pt-5 mt-5 space-y-3" id="google-form-embed-wrapper-alternative">
          <div className="flex items-center justify-between text-xs font-semibold text-indigo-900 leading-none">
            <span>Atau melalui Google Form Refleksi Sekolah:</span>
            <span className="text-[10px] bg-indigo-100/50 border border-indigo-150 px-2 py-0.5 rounded text-indigo-700 font-mono font-bold font-medium select-none">
              Guru Integrasi
            </span>
          </div>

          {/* Elegant Mock Frame embed placeholder */}
          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden p-4 relative" id="mock-form-iframe-panel">
            <div className="text-center py-4 text-slate-400 text-xs">
              <span className="block mb-1 text-slate-500 font-bold">Refleksi Pembelajaran Google Form</span>
              <p className="text-[11px] text-slate-400">
                Sains interaktif terhubung dengan ketersediaan Form Bapak/Ibu guru.
              </p>
              <div className="mt-3">
                <a
                  href="https://docs.google.com/forms"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold border border-indigo-100 py-1.5 px-3.5 rounded-lg inline-flex items-center text-[10px] transition cursor-pointer"
                >
                  Buka Google Form Penugasan Sekolah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
