/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, CheckSquare, ExternalLink, Image, Share2, Sparkles, LayoutGrid } from 'lucide-react';

export default function Tugas() {
  const [canvaLink, setCanvaLink] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitTugas = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canvaLink.trim()) return;
    setIsSubmitted(true);
    alert('Tugas karya media Canva AI Anda berhasil dicatat dan diserahkan ke sistem pembelajaran!');
  };

  const kriteriaPenilaian = [
    { kriteria: 'Ketepatan Data', bobot: '30%', desc: 'Data kategorik/numerik diambil dari fakta nyata dan dituangkan dalam tabel frekuensi secara benar.' },
    { kriteria: 'Akurasi Diagram', bobot: '30%', desc: 'Konversi sudut lingkaran (%) atau tinggi balok sesuai dengan rasio data asli.' },
    { kriteria: 'Seni & Kreativitas Desain (Canva)', bobot: '25%', desc: 'Penggunaan font, harmoni warna, dan elemen infografis dekoratif menarik.' },
    { kriteria: 'Interpretasi & Gagasan Penutup', bobot: '15%', desc: 'Menuliskan 1 kalimat kesimpulan cerdas di bawah diagram.' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn" id="tugas-section-root">
      <div className="text-center">
        <span className="inline-flex items-center space-x-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5 animate-bounce" />
          <span>Proyek Kreatif • Evaluasi Tugas</span>
        </span>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Penugasan Infografis Data Mandiri
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Rancang dan sajikan diagram buatanmu sendiri menggunakan kehebatan teknologi kecerdasan buas Canva AI!
        </p>
      </div>

      {/* TUGAS INSTRUCTIONS PANEL */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 space-y-5" id="tugas-instruction-box">
        <div className="flex items-center space-x-2 text-amber-700 font-bold border-b border-slate-100 pb-3">
          <Sparkles className="w-5.2 h-5.2 text-amber-500 animate-pulse" />
          <h3 className="text-sm sm:text-base">Panduan Tugas Kelompok: Infografis Diagram Canva AI</h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          <p>
            Untuk melatih kecakapan analisis dan seni visualmu, silakan lakukan survei kecil di lingkungan rumah atau sekolahmu, kumpulkan datanya, lalu buat infografis diagram dengan menggunakan <strong>Canva Master/AI</strong>!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-normal" id="tugas-steps-visual-panel">
            {/* Step 1 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col space-y-1.5">
              <span className="text-xs font-bold text-blue-600 font-mono">LANGKAH 1</span>
              <h5 className="font-bold text-slate-800 text-xs">Pilih Topik Survei Mandiri</h5>
              <p className="text-[11px] text-slate-500 leading-snug">
                Kumpulkan data sederhana, contoh: Makanan favorit 10 orang teman, Jenis kendaraan yang melintasi jalan depan rumah dalam 5 menit, atau ukuran baju keluarga.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col space-y-1.5">
              <span className="text-xs font-bold text-emerald-600 font-mono">LANGKAH 2</span>
              <h5 className="font-bold text-slate-800 text-xs">Desain di Canva AI</h5>
              <p className="text-[11px] text-slate-500 leading-snug">
                Buka Canva, cari templat &quot;Infografis Matematika&quot;. Gunakan fitur Canva AI (Magic Design atau text-to-image) untuk melukis ilustrasi sains pendukung. Tambahkan diagram lingkaran/batang sesuai datamu.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col space-y-1.5">
              <span className="text-xs font-bold text-amber-600 font-mono">LANGKAH 3</span>
              <h5 className="font-bold text-slate-800 text-xs">Serahkan Link Hasil Karya</h5>
              <p className="text-[11px] text-slate-500 leading-snug">
                Klik tombol bagikan atau unduh infografismu di Canva. Salinkan link url karya Canva Anda, dan serahkan pada kolom penyerahan tugas pembelajaran di bawah ini!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EMBED CANVA PLAYHOLDER IMAGE DEMO */}
      <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50/50 flex flex-col md:flex-row items-center gap-6" id="canva-mock-embed">
        <div className="w-full md:w-1/3 bg-slate-100 text-slate-400 aspect-video md:aspect-square rounded-xl flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 relative overflow-hidden shrink-0">
          <Image className="w-10 h-10 text-slate-400 mb-2" />
          <span className="text-[11px] font-bold text-slate-500 text-center">Contoh Karya Desain Infografis Anda</span>
          <span className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest font-mono">Canva AI Template</span>
        </div>
        <div className="space-y-3 w-full">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            <LayoutGrid className="w-3 h-3" />
            <span>Kriteria Penilaian Tugas</span>
          </div>
          <div className="space-y-2 text-xs">
            {kriteriaPenilaian.map((k, index) => (
              <div key={index} className="flex justify-between items-start border-b border-slate-100 pb-1.5" id={`kriteria-${index}`}>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800">{k.kriteria}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">{k.desc}</span>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded ml-2">
                  {k.bobot}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBMISSION FORM LINK */}
      <div className="bg-white border border-slate-100 shadow rounded-2xl p-6" id="tugas-submission-form-container">
        <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center space-x-2">
          <Share2 className="w-4.5 h-4.5 text-blue-600" />
          <span>Formulir Pengumpulan Tugas Karya Canva</span>
        </h4>

        <form onSubmit={handleSubmitTugas} className="space-y-3" id="submit-tugas-action">
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
              Link Tautan Karya Canva PDF / Link Pengeditan / Link Share
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                value={canvaLink}
                onChange={(e) => setCanvaLink(e.target.value)}
                placeholder="https://www.canva.com/design/DA..."
                className="flex-1 text-xs px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-55"
                required
                disabled={isSubmitted}
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 text-white cursor-pointer select-none ${
                  isSubmitted ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                id="btn-submit-tugas"
              >
                <CheckSquare className="w-4 h-4" />
                <span>{isSubmitted ? 'Tugas Terkirim!' : 'Kirim Tugas'}</span>
              </button>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 leading-snug">
            *Tugas Anda akan didata dan dicocokkan otomatis berdasarkan Nama dan Kelas yang telah diisi di sistem kuis evaluasi.
          </div>
        </form>
      </div>

      {/* DIRECT EXTERNAL ACTION OUT TO CANVA */}
      <div className="text-center pt-2" id="canva-outlink-action-panel">
        <a
          href="https://www.canva.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs text-blue-600 hover:text-blue-800 font-bold border border-blue-200 px-3.5 py-2 rounded-xl bg-blue-50/20 shadow-sm transition hover:scale-102"
        >
          <span>Buka Aplikasi Web Canva Sekarang</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
