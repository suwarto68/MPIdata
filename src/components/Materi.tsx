/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tags, Hash, BarChart3, PieChart, CheckSquare, Info, TrendingUp, AlertCircle } from 'lucide-react';

export default function Materi() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6" id="materi-accordion-group">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight" id="materi-main-title">
          Materi Pembelajaran Interaktif
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Klik setiap judul di bawah untuk membuka penjelasan lengkap beserta alat peraga visual materi!
        </p>
      </div>

      {/* --- ACCORDION 1 --- */}
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all" id="accordion-1">
        <button
          onClick={() => toggleAccordion(0)}
          className="w-full flex items-center justify-between p-5 bg-slate-50/60 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          id="accordion-header-1"
        >
          <div className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
              1
            </span>
            <span className="text-base font-bold text-slate-800">
              Mengidentifikasi Jenis Data (Kategorik dan Numerik)
            </span>
          </div>
          {openIndex === 0 ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
        </button>

        {openIndex === 0 && (
          <div className="p-6 border-t border-slate-100 space-y-6 bg-white animate-fadeIn" id="accordion-content-1">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p className="text-sm leading-relaxed">
                Sebelum membuat diagram, langkah pertama yang wajib kita lakukan dalam statistika adalah memahami <strong>data</strong> itu sendiri. Data adalah catatan atas kumpulan fakta. Di kelas 7 Fase D ini, kita membagi data menjadi dua kelompok besar, yaitu <strong>Data Kategorik</strong> (Kualitatif) dan <strong>Data Numerik</strong> (Kuantitatif).
              </p>

              {/* Visual Peraga: Grid Perbandingan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6" id="kategorik-vs-numerik-visual">
                {/* Data Kategorik */}
                <div className="border border-blue-100 rounded-xl p-5 bg-gradient-to-br from-blue-50/30 to-white">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold mb-3">
                    <Tags className="w-5 h-5 text-blue-600" />
                    <h4>1. Data Kategorik (Qualitative Data)</h4>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    Data yang menggambarkan karakteristik atau kualitas. Tidak diwakili oleh angka murni yang bisa dihitung secara matematis.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-blue-700">Contoh:</span>
                      <span>Hobi (Membaca, Renang, Bermain Game)</span>
                    </li>
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-blue-700">Contoh:</span>
                      <span>Jenis Kendaraan (Motor, Mobil, Sepeda)</span>
                    </li>
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-blue-700">Contoh:</span>
                      <span>Golongan Darah (A, B, AB, O)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-2.5 bg-amber-50 text-amber-800 rounded text-[11px] flex items-start space-x-1.5 border border-amber-100">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                    <span>Catatan: Angka seperti nomor rumah atau nomor punggung pemain bola seringkali tetap masuk kategori data kategorik/nominal karena hanya berfungsi sebagai label, bukan besaran hitung!</span>
                  </div>
                </div>

                {/* Data Numerik */}
                <div className="border border-emerald-100 rounded-xl p-5 bg-gradient-to-br from-emerald-50/30 to-white">
                  <div className="flex items-center space-x-2 text-emerald-700 font-bold mb-3">
                    <Hash className="w-5 h-5 text-emerald-600" />
                    <h4>2. Data Numerik (Quantitative Data)</h4>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    Data yang diukur dalam bentuk angka nyata atau kuantitas, di mana operasi penjumlahan, selisih, dan rata-rata bernilai logis.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-emerald-700">Contoh:</span>
                      <span>Tinggi Badan (152 cm, 160 cm, dll)</span>
                    </li>
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-emerald-700">Contoh:</span>
                      <span>Jumlah Siswa di Kelas (30 siswa, 40 siswa)</span>
                    </li>
                    <li className="flex items-center space-x-2 bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-emerald-700">Contoh:</span>
                      <span>Suhu udara harian di Puncak Jaya (-2°C)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-2.5 bg-sky-50 text-sky-800 rounded text-[11px] flex items-start space-x-1.5 border border-sky-100">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-sky-600" />
                    <span>Data numerik terbagi dua: <strong>Diskrit</strong> (bilangan bulat utuh dari hasil membilang, seperti jumlah anak) dan <strong>Kontinu</strong> (bilangan pecahan/desimal dari hasil pengukuran, seperti berat badan).</span>
                  </div>
                </div>
              </div>

              {/* Tabel Perbandingan Interaktif Singkat */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100" id="materi-table-comparison-box">
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Simulasi Cepat Jenis Data</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-2 text-slate-600 font-bold">Variabel Pertanyaan</th>
                        <th className="py-2 text-slate-600 font-bold">Nilai Data</th>
                        <th className="py-2 text-slate-600 font-bold">Klasifikasi Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="py-2 font-medium">Berapa berat badanmu?</td>
                        <td className="py-2">55.4 kg</td>
                        <td className="py-2"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">Numerik Kontinu</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Apa warna kesukaanmu?</td>
                        <td className="py-2">Biru Muda</td>
                        <td className="py-2"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">Kategorik Nominal</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Berapa isi pensil di kotakmu?</td>
                        <td className="py-2">4 buah</td>
                        <td className="py-2"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">Numerik Diskrit</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Berapa tingkat kepuasan belajarmu?</td>
                        <td className="py-2">Sangat Puas</td>
                        <td className="py-2"><span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">Kategorik Ordinal</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- ACCORDION 2 --- */}
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all" id="accordion-2">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex items-center justify-between p-5 bg-slate-50/60 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          id="accordion-header-2"
        >
          <div className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 font-bold text-sm">
              2
            </span>
            <span className="text-base font-bold text-slate-800">
              Menggunakan Diagram Batang dan Diagram Lingkaran
            </span>
          </div>
          {openIndex === 1 ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
        </button>

        {openIndex === 1 && (
          <div className="p-6 border-t border-slate-100 space-y-6 bg-white animate-fadeIn" id="accordion-content-2">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-5">
              <p className="text-sm leading-relaxed">
                Setelah mengumpulkan data, kita dapat menyajikannya ke dalam representasi grafis agar mudah dibaca dan diinterpretasikan oleh orang lain. Dua jenis penyajian diagram utama yang dipelajari di kelas 7 adalah <strong>Diagram Batang</strong> dan <strong>Diagram Lingkaran</strong>.
              </p>

              {/* Peraga Visual: Diagram Batang & Diagram Lingkaran */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6" id="diagram-peraga-visual">
                {/* Diagram Batang */}
                <div className="border border-slate-100 rounded-xl p-5 shadow-sm bg-slate-50/30">
                  <div className="flex items-center space-x-2 text-slate-800 font-bold mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h4>Diagram Batang (Bar Chart)</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-4 font-normal">
                    Menggunakan balok tegak atau mendatar untuk membandingkan banyaknya nilai pada masing-masing kategori. Sangat bagus untuk membandingkan jumlah frekuensi absolut kategori secara presisi.
                  </p>

                  {/* MINI BAR CHART DRAWING */}
                  <div className="bg-white border border-slate-100 rounded-lg p-4 space-y-3" id="mock-materi-bar-chart">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block text-center">Visual Hasil Panen Desa (Tegak)</span>
                    <div className="h-28 flex items-end justify-around border-b border-l border-slate-200 pb-1 pl-1">
                      {/* Bar 1 */}
                      <div className="flex flex-col items-center w-12 group">
                        <span className="text-[10px] text-blue-600 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">15T</span>
                        <div className="w-8 bg-blue-500 rounded-t h-20 transition-all group-hover:bg-blue-600" style={{ height: '75%' }}></div>
                        <span className="text-[9px] mt-1 text-slate-500 truncate">Padi</span>
                      </div>
                      {/* Bar 2 */}
                      <div className="flex flex-col items-center w-12 group">
                        <span className="text-[10px] text-blue-600 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">10T</span>
                        <div className="w-8 bg-sky-400 rounded-t h-12 transition-all group-hover:bg-sky-500" style={{ height: '50%' }}></div>
                        <span className="text-[9px] mt-1 text-slate-500 truncate">Jagung</span>
                      </div>
                      {/* Bar 3 */}
                      <div className="flex flex-col items-center w-12 group">
                        <span className="text-[10px] text-blue-600 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">5T</span>
                        <div className="w-8 bg-indigo-500 rounded-t h-6 transition-all group-hover:bg-indigo-600" style={{ height: '25%' }}></div>
                        <span className="text-[9px] mt-1 text-slate-500 truncate">Kedelai</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagram Lingkaran */}
                <div className="border border-slate-100 rounded-xl p-5 shadow-sm bg-slate-50/30">
                  <div className="flex items-center space-x-2 text-slate-800 font-bold mb-3">
                    <PieChart className="w-5 h-5 text-emerald-600" />
                    <h4>Diagram Lingkaran (Pie Chart)</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-4 font-normal">
                    Menyajikan data dalam bentuk juring-juring lingkaran. Ukuran sudut juring sebanding dengan persentase bagian dari nilai data terhadap keseluruhan total. Formula konversinya:
                  </p>

                  {/* PERSENTASE CONVERT FORMULAS */}
                  <div className="bg-white border border-slate-100 rounded-lg p-4 space-y-3" id="mock-materi-pie-chart-calculations">
                    <div className="text-[11px] space-y-2 text-slate-700 font-mono">
                      <div className="bg-emerald-50 text-emerald-800 p-2 rounded border border-emerald-100/50">
                        <span className="font-bold">Persentase (%):</span>
                        <br />
                        <code>{"% = (Frekuensi / Total) × 100%"}</code>
                      </div>
                      <div className="bg-sky-50 text-sky-800 p-2 rounded border border-sky-100/50">
                        <span className="font-bold">Sudut Juring (°):</span>
                        <br />
                        <code>{"Sudut = (Frekuensi / Total) × 360°"}</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Langkah-langkah Interpretasi */}
              <div className="space-y-2" id="interpretasi-materi-steps">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Cara Menginterpretasi (Membaca) Diagram:</span>
                <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-600">
                  <li><strong>Temukan Judul.</strong> Judul menceritakan isi diagram tersebut dikumpulkan.</li>
                  <li><strong>Amati Label Sumbu (Batang) / Legenda (Lingkaran).</strong> Temukan keterangan nama kelompok sampel yang diukur.</li>
                  <li><strong>Bandingkan Nilai Numerik.</strong> Amati letak puncak batang atau besaran persentase juring untuk menyimpulkan mana yang paling banyak (Modus), paling sedikit, selisih hasil, ataupun nilai rata-ratanya.</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- ACCORDION 3 --- */}
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all" id="accordion-3">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex items-center justify-between p-5 bg-slate-50/60 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          id="accordion-header-3"
        >
          <div className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 font-bold text-sm">
              3
            </span>
            <span className="text-base font-bold text-slate-800">
              Menentukan Diagram yang Tepat untuk Menyajikan Data
            </span>
          </div>
          {openIndex === 2 ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
        </button>

        {openIndex === 2 && (
          <div className="p-6 border-t border-slate-100 space-y-6 bg-white animate-fadeIn" id="accordion-content-3">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p className="text-sm leading-relaxed">
                Tantangan terbesar siswa seringkali adalah menentukan: <em>"Bila diberi suatu sekumpulan data, grafik mana yang sebaiknya saya pakai?"</em>. Memilih diagram yang kurang tepat bisa menyamarkan pola penting dari data atau membuat pembaca salah menyimpulkan informasi.
              </p>

              {/* Pedoman Matriks Penentuan Diagram */}
              <div className="border border-amber-200/60 bg-amber-50/10 rounded-2xl p-5" id="panduan-memilih-diagram-panel">
                <h4 className="text-amber-800 font-bold mb-4 flex items-center space-x-2 text-sm sm:text-base">
                  <CheckSquare className="w-5 h-5 text-amber-600" />
                  <span>Panduan Praktis Memilih Jenis Visualisasi</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="matrix-selection-diagram">
                  {/* Item 1 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-emerald-700 font-bold text-xs flex items-center space-x-1.5 mb-2">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Diagram Batang</span>
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Sempurna untuk membandingkan kuantitas antar kategori terpisah (misalnya: data tinggi badan sekelompok siswa, jenis buah kesukaan, atau jumlah koleksi perpustakaan).
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-blue-700 font-bold text-xs flex items-center space-x-1.5 mb-2">
                      <PieChart className="w-3.5 h-3.5" />
                      <span>Diagram Lingkaran</span>
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Paling pas jika kamu ingin menampilkan proporsi (%) bagaimana suatu unit besar terbagi habis (misalnya: perolehan suara pemilu, pembagian budget pengeluaran, persentase hobi satu sekolah).
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-indigo-700 font-bold text-xs flex items-center space-x-1.5 mb-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Diagram Garis</span>
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Solusi terbaik untuk melacak tren perubahan nilai secara berurutan dan teratur dalam kurun waktu tertentu (misalnya: tinggi tanaman perhari, curah hujan bulanan, berat badan dari bayi tiap bulan).
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning box */}
              <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg text-xs text-orange-900 flex space-x-2" id="materi-miskonsepsi-warning">
                <AlertCircle className="w-5 h-5 shrink-0 text-orange-600" />
                <div>
                  <span className="font-bold">Miskonsepsi Siswa:</span>
                  <p className="mt-0.5 leading-relaxed">
                    Jangan gunakan diagram lingkaran jika jumlah persentase bagian-bagiannya tidak setara dengan 100%! Misalnya, persentase siswa pemilih hobi bola, bersepeda, memasak di mana satu siswa boleh memilih lebih dari 1 opsi hobi. Data bercabang banyak seperti itu lebih tepat digambarkan dengan diagram batang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
