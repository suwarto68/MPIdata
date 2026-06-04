/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Trash2, ChartBar, PieChart as PieIcon, RefreshCw, Layers, Sparkles, Wand2, BookOpen, Info, Tags, Hash, HelpCircle, CheckCircle } from 'lucide-react';

interface DataRow {
  id: number;
  label: string;
  value: number;
}

interface CaseStudyPreset {
  id: string;
  title: string;
  description: string;
  dataType: string; // "Kategorik Nominal" | "Numerik Diskrit" | "Numerik Kontinu"
  dataTypeDesc: string;
  recommendedChart: 'bar' | 'pie';
  badgeColor: string;
  reason: string;
  challenge: string;
  data: { label: string; value: number }[];
}

const PRESETS: CaseStudyPreset[] = [
  {
    id: 'hobi',
    title: 'Hobi Ekskul Siswa VII-D',
    description: 'Data hobi pilihan siswa kelas VII-D untuk pendaftaran ekstrakurikuler wajib sekolah.',
    dataType: 'Kategorik Nominal',
    dataTypeDesc: 'Data non-angka berisikan kategori label kualitatif tanpa urutan tingkatan khusus.',
    recommendedChart: 'pie',
    badgeColor: 'bg-blue-50 text-blue-750 border-blue-200 hover:bg-blue-100',
    reason: 'Disarankan Diagram LINGKARAN karena kita ingin melihat proporsi atau kontribusi bagian (masing-masing ekskul) terhadap kesatuan utuh 100% populasi siswa kelas VII-D.',
    challenge: 'Misi Belajar: Tambahkan hobi baru "Robotik" dengan frekuensi nilai 10. Amati bagaimana persentase "Pramuka" otomatis mengecil secara proporsional demi membagi porsi juring baru!',
    data: [
      { label: 'Pramuka', value: 15 },
      { label: 'PMR', value: 10 },
      { label: 'Basket', value: 8 },
      { label: 'Seni Tari', value: 7 },
    ]
  },
  {
    id: 'goldar',
    title: 'Golongan Darah Kelas VII',
    description: 'Catatan hasil golongan darah dari kegiatan cek kesehatan oleh PMR Sekolah.',
    dataType: 'Kategorik Nominal',
    dataTypeDesc: 'Data non-angka berupa label pengelompokan biologis saling lepas satu sama lain.',
    recommendedChart: 'pie',
    badgeColor: 'bg-rose-50 text-rose-750 border-rose-200 hover:bg-rose-100',
    reason: 'Sangat cocok Diagram LINGKARAN karena setiap siswa hanya memiliki tepat satu golongan darah tunggal yang saling lepas (mutually exclusive) dan tujuannya adalah membandingkan persentase golongan darah di seluruh kelas.',
    challenge: 'Misi Belajar: Ubah nilai golongan O menjadi 35. Rasakan pertumbuhan sudut juring O yang melebar besar di layar kanan!',
    data: [
      { label: 'A', value: 12 },
      { label: 'B', value: 18 },
      { label: 'AB', value: 5 },
      { label: 'O', value: 25 },
    ]
  },
  {
    id: 'panen',
    title: 'Hasil Panen Desa Makmur',
    description: 'Laporan komoditas ton padi, jagung, dan kedelai hasil garapan kelompok tani lumbung desa.',
    dataType: 'Numerik Diskrit',
    dataTypeDesc: 'Data angka berupa bilangan bulat mutlak/utuh yang diperoleh dari hasil menghitung (membilang).',
    recommendedChart: 'bar',
    badgeColor: 'bg-emerald-50 text-emerald-750 border-emerald-200 hover:bg-emerald-100',
    reason: 'Disarankan Diagram BATANG karena fokus utamanya adalah membandingkan perbandingan kuantitas berat panen mutlak/absolut (dalam ton) secara independen antar komoditas terpisah.',
    challenge: 'Misi Belajar: Tambahkan kategori "Singkong" dengan nilai 22. Perhatikan terbentuknya satu tiang balok baru yang tingginya persis di antara Padi dan Jagung.',
    data: [
      { label: 'Padi', value: 25 },
      { label: 'Jagung', value: 15 },
      { label: 'Kedelai', value: 8 },
    ]
  },
  {
    id: 'tinggi',
    title: 'Tinggi Badan Atlet Basket',
    description: 'Distribusi tinggi badan siswa calon tim seleksi kejuaraan basket sekolah.',
    dataType: 'Numerik Kontinu',
    dataTypeDesc: 'Data angka berupa nilai desimal atau batas interval hasil kegiatan pengukuran fisik.',
    recommendedChart: 'bar',
    badgeColor: 'bg-amber-50 text-amber-750 border-amber-200 hover:bg-amber-100',
    reason: 'Sangat tepat menggunakan Diagram BATANG karena interval rentang tinggi badan dikelompokkan secara kontinu untuk melihat sebaran tinggi dan menemukan letak modus tinggi badan atlet.',
    challenge: 'Misi Belajar: Masukkan interval tinggi jangkung "171-175 cm" bernilai 3. Amati perubahan letak tiang grafik tertinggi di penampil visual!',
    data: [
      { label: '150-155 cm', value: 3 },
      { label: '156-160 cm', value: 8 },
      { label: '161-165 cm', value: 12 },
      { label: '166-170 cm', value: 4 },
    ]
  }
];

export default function Eksplorasi() {
  const [activePresetId, setActivePresetId] = useState<string>('hobi');
  const [chartType, setChartType] = useState<'bar' | 'pie'>('pie');
  const [rows, setRows] = useState<DataRow[]>([
    { id: 1, label: 'Pramuka', value: 15 },
    { id: 2, label: 'PMR', value: 10 },
    { id: 3, label: 'Basket', value: 8 },
    { id: 4, label: 'Seni Tari', value: 7 },
  ]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState<number | ''>('');
  const [isModified, setIsModified] = useState(false);

  // Load a preset completely and adjust default recommended chart instantly
  const handleSelectPreset = (preset: CaseStudyPreset) => {
    setActivePresetId(preset.id);
    setChartType(preset.recommendedChart);
    setRows(preset.data.map((item, idx) => ({
      id: idx + 1,
      label: item.label,
      value: item.value
    })));
    setIsModified(false);
    setNewLabel('');
    setNewValue('');
  };

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel.trim() || newValue === '' || newValue <= 0) return;
    setRows([
      ...rows,
      { id: Date.now(), label: newLabel, value: Number(newValue) }
    ]);
    setNewLabel('');
    setNewValue('');
    setIsModified(true);
  };

  const handleDeleteRow = (id: number) => {
    if (rows.length <= 2) {
      alert('Minimal harus menyisakan 2 baris data demi penyajian diagram yang logis!');
      return;
    }
    setRows(rows.filter(r => r.id !== id));
    setIsModified(true);
  };

  // Safe manual editing of row cell values
  const handleEditRowValue = (id: number, updatedVal: number) => {
    if (updatedVal < 0) return;
    setRows(rows.map(r => r.id === id ? { ...r, value: updatedVal } : r));
    setIsModified(true);
  };

  const currentPreset = PRESETS.find(p => p.id === activePresetId) || PRESETS[0];

  // Math calculated helpers
  const totalValue = rows.reduce((sum, r) => sum + r.value, 0);
  const maxValue = Math.max(...rows.map(r => r.value), 1);

  // Elegant colors list for charts
  const colors = [
    '#3b82f6', // blue-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#ef4444', // red-500
    '#14b8a6', // teal-500
    '#6366f1', // indigo-500
  ];

  // Draw Pie angle state helper
  let accumulatedAngle = 0;

  return (
    <div className="max-w-6xl mx-auto space-y-6" id="eksplorasi-section-root">
      {/* Title Header */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-1.5 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
          <Wand2 className="w-3.5 h-3.5 animate-pulse" />
          <span>Laboratorium Virtual Matematika</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Simulator Cerdas Statistik &amp; Diagram
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto font-normal">
          Eksplorasi otomatis ini langsung disinkronkan dengan sub-bab materi data yang sedang kamu pelajari! Pilih studi kasus di bawah, lihat diagramnya, dan coba utak-atik angkanya.
        </p>
      </div>

      {/* --- PRESETS CONTAINER: SYNC WITH MATERI --- */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 space-y-4" id="materi-preset-selector">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-3">
          <div className="flex items-center space-x-2 text-slate-800 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
            <BookOpen className="w-4 h-4 text-indigo-600 animate-bounce" />
            <span>Pilih Studi Kasus dari Buku Materi (Otomatis Muat!)</span>
          </div>
          {isModified && (
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold font-mono uppercase">
              ⚠️ Modifikasi Manual Aktif
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" id="presets-card-grid">
          {PRESETS.map((preset) => {
            const isActive = activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 w-full cursor-pointer relative flex flex-col justify-between h-full ${
                  isActive
                    ? 'border-indigo-600 ring-2 ring-indigo-50 bg-gradient-to-br from-indigo-50/50 to-white shadow-md'
                    : 'border-slate-100 hover:border-slate-200 bg-slate-50/40 hover:bg-slate-50'
                }`}
                id={`preset-card-${preset.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Topik Materi {preset.id === 'hobi' || preset.id === 'goldar' ? 'Kategorik' : 'Numerik'}
                    </span>
                    {isActive && (
                      <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {preset.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {preset.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                  <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                    preset.id === 'hobi' || preset.id === 'goldar' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {preset.dataType === 'Kategorik Nominal' ? 'Kategorik' : 'Numerik'}
                  </span>
                  <span className="text-slate-400 font-medium">Auto-render: {preset.recommendedChart === 'pie' ? 'Lingkaran' : 'Batang'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- EDUCATIONAL FEEDBACK BOX FOR ACTIVE CASE STUDY --- */}
      <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-white border border-blue-150/70 rounded-2xl p-5 shadow-sm space-y-3" id="educational-insight-box">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded font-black font-mono tracking-wider uppercase">
            Analisis Materi Cerdas
          </span>
          <span className="text-xs text-slate-700 font-semibold flex items-center space-x-1">
            <span>Studi Kasus:</span>
            <strong className="text-slate-900">{currentPreset.title}</strong>
          </span>
          <span className="text-xs text-slate-200 select-none">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-600">
            <Tags className="w-3.5 h-3.5 text-indigo-500" />
            <span>Tipe Data:</span>
            <strong className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 font-mono font-bold text-[11px]">{currentPreset.dataType}</strong>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed max-w-4xl" id="preset-datatype-explanation">
          <Info className="w-4 h-4 text-indigo-500 inline-block mr-1 -mt-0.5" />
          <strong>Definisi:</strong> {currentPreset.dataTypeDesc}
        </p>

        {/* Dynamic recommendation box */}
        <div className="p-3 bg-white border border-slate-100 rounded-xl space-y-1.5 text-xs">
          <span className="font-bold text-slate-800 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Rekomendasi Diagram Guru (Bapak Suwarto, S.Pd):</span>
          </span>
          <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
            {currentPreset.reason}
          </p>
        </div>

        {/* Misi Tantangan Belajar */}
        <div className="p-3 bg-indigo-50/40 border border-indigo-100 rounded-xl text-xs text-indigo-850 flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold text-indigo-900 block uppercase tracking-wider text-[10px]">Tantangan Belajar Mandiri:</span>
            <p className="text-[11px] text-indigo-805 mt-0.5 font-normal leading-relaxed">
              {currentPreset.challenge}
            </p>
          </div>
        </div>
      </div>

      {/* --- SIMULATOR SPLIT SECTION (INPUTS VS VISUALISATION) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="eksplorasi-main-grid">
        {/* LEFT COLUMN: TABLE EDITOR/DASHBOARD */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-5" id="data-input-panel">
          <div className="flex items-center justify-between border-b border-slate-50 pb-3">
            <h3 className="font-bold text-slate-800 flex items-center space-x-2 text-sm sm:text-base">
              <Layers className="w-5 h-5 text-blue-600 animate-pulse" />
              <span>Input Data Modifikasi</span>
            </h3>
            <button
              onClick={() => handleSelectPreset(currentPreset)}
              className="text-xs text-slate-600 hover:text-slate-800 flex items-center space-x-1 font-semibold border border-slate-200 px-2.5 py-1 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              title="Atur Ulang Data Ke Setelan Preset Bawaan"
              id="btn-restore-current-preset"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Ulang</span>
            </button>
          </div>

          {/* Form Create Row */}
          <form onSubmit={handleAddRow} className="grid grid-cols-12 gap-2" id="create-data-row-form">
            <div className="col-span-6">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Kategori / Label</label>
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="cth: Robotik, O, Padi"
                maxLength={20}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 bg-slate-50/50"
                required
                id="input-new-label"
              />
            </div>
            <div className="col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Frekuensi / Nilai</label>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="cth: 12"
                min={1}
                max={1000}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 bg-slate-50/50"
                required
                id="input-new-value"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 flex items-center justify-center transition-all shadow-sm shadow-indigo-100 font-bold text-xs cursor-pointer"
                title="Tambahkan Data ke Tabel"
                id="btn-add-data-row"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Data List Rows Table */}
          <div className="max-h-[220px] overflow-y-auto border border-slate-100 rounded-xl" id="data-list-rows-table-wrapper">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-semibold">
                <tr>
                  <th className="py-2.5 px-3">No</th>
                  <th className="py-2.5 px-3">Kategori</th>
                  <th className="py-2.5 px-3 text-right">Nilai Frekuensi</th>
                  <th className="py-2.5 px-3 text-center">Proporsi %</th>
                  <th className="py-2.5 px-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {rows.map((row, index) => {
                  const percentage = totalValue > 0 ? ((row.value / totalValue) * 100).toFixed(1) : '0.0';
                  return (
                    <tr key={row.id} className="hover:bg-slate-50/80 transition-colors" id={`row-item-${row.id}`}>
                      <td className="py-3 px-3 font-mono text-slate-400">{index + 1}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800 max-w-[100px] truncate">{row.label}</td>
                      <td className="py-3 px-3 text-right">
                        <input
                          type="number"
                          value={row.value}
                          onChange={(e) => handleEditRowValue(row.id, Number(e.target.value))}
                          className="w-16 text-right px-1.5 py-1 text-xs border border-slate-100 rounded font-mono font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-50"
                          min={1}
                          id={`editable-row-value-${row.id}`}
                        />
                      </td>
                      <td className="py-3 px-3 text-center text-slate-500 font-mono text-[11px]">{percentage}%</td>
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleDeleteRow(row.id)}
                          className="text-slate-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                          title="Hapus baris ini"
                          id={`btn-delete-row-${row.id}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Stats Box Footer */}
          <div className="bg-slate-50 rounded-xl p-3.5 flex justify-between items-center text-xs text-slate-600 font-semibold" id="data-stats-panel-box">
            <span className="flex items-center space-x-1">
              <Hash className="w-4 h-4 text-slate-500" />
              <span>Total Frekuensi Anggota (N):</span>
            </span>
            <span className="font-mono text-sm font-black text-indigo-700 bg-white border border-indigo-100 px-3 py-1 rounded-lg shadow-sm">
              {totalValue}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: CHART RENDER VIEWER */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-4" id="chart-renderer-panel">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-50 pb-3" id="chart-controls-header">
            <h3 className="font-bold text-slate-800 text-sm sm:text-base flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              <span>Sajian Grafik Visual Interaktif</span>
            </h3>
            {/* Chart Style Toggles */}
            <div className="flex bg-slate-100 rounded-xl p-1" id="chart-type-tabs">
              <button
                onClick={() => setChartType('bar')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${
                  chartType === 'bar'
                    ? 'bg-white text-indigo-600 shadow-sm shadow-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-toggle-bar-chart"
              >
                <ChartBar className="w-3.5 h-3.5" />
                <span>Diagram Batang</span>
              </button>
              <button
                onClick={() => setChartType('pie')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${
                  chartType === 'pie'
                    ? 'bg-white text-indigo-600 shadow-sm shadow-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-toggle-pie-chart"
              >
                <PieIcon className="w-3.5 h-3.5" />
                <span>Diagram Lingkaran</span>
              </button>
            </div>
          </div>

          {/* SCREEN FOR DRAW CARDS */}
          <div className="min-h-[280px] flex items-center justify-center p-4 bg-slate-50/20 border border-dashed border-slate-100 rounded-xl" id="chart-mount-canvas">
            {chartType === 'bar' ? (
              /* --- RENDER BAR CHART --- */
              <div className="w-full flex flex-col justify-end" id="rendered-bar-chart-view">
                <div className="text-center text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-3 font-mono">
                  📊 DIAGRAM BATANG: {currentPreset.title}
                </div>
                <div className="h-44 flex items-end justify-between border-b border-l border-slate-200 pb-2 pl-2 relative" id="bar-chart-stage">
                  {/* Grid Lines Indicator */}
                  <div className="absolute left-0 right-0 top-[25%] border-t border-slate-100/70 border-dashed pointer-events-none"></div>
                  <div className="absolute left-0 right-0 top-[50%] border-t border-slate-100/70 border-dashed pointer-events-none"></div>
                  <div className="absolute left-0 right-0 top-[75%] border-t border-slate-100/70 border-dashed pointer-events-none"></div>

                  {rows.map((row, idx) => {
                    const barHeightPercent = (row.value / maxValue) * 85; // cap at 85% to fit label text
                    const color = colors[idx % colors.length];
                    return (
                      <div key={row.id} className="flex flex-col items-center flex-1 group mx-1 sm:mx-1.5" id={`bar-visual-stack-${row.id}`}>
                        {/* Tooltip on top */}
                        <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-slate-800 text-white rounded mb-1 transition-all group-hover:scale-110 select-none text-center">
                          {row.value}
                        </span>
                        {/* Interactive Bar */}
                        <div
                          className="w-full rounded-t-lg transition-all duration-500 ease-out hover:brightness-105 shadow-sm border-l border-white/5 active:scale-95 cursor-pointer"
                          style={{
                            height: `${Math.max(barHeightPercent, 5)}%`,
                            backgroundColor: color,
                          }}
                        ></div>
                        {/* Bottom Label */}
                        <span className="text-[10px] font-bold text-slate-600 mt-2 truncate w-full text-center" title={row.label}>
                          {row.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* --- RENDER PIE CHART --- */
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 w-full" id="rendered-pie-chart-view">
                {/* SVG CIRCLE PIE */}
                <div className="relative w-44 h-44 flex items-center justify-center shrink-0" id="pie-chart-stage-svg">
                  <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                    {rows.map((row, idx) => {
                      const percentage = totalValue > 0 ? row.value / totalValue : 0;
                      const strokeDasharray = `${percentage * 100} ${100 - percentage * 100}`;
                      const strokeDashoffset = 100 - accumulatedAngle;
                      accumulatedAngle += percentage * 100;
                      const color = colors[idx % colors.length];

                      return (
                        <circle
                          key={row.id}
                          cx="16"
                          cy="16"
                          r="15.915"
                          fill="transparent"
                          stroke={color}
                          strokeWidth="4.2" // thicker elegant look
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className="transition-all duration-500 hover:stroke-[4.8] transform origin-center cursor-pointer"
                          id={`pie-circle-slice-${row.id}`}
                          title={`${row.label}: ${row.value}`}
                        />
                      );
                    })}
                  </svg>
                  {/* Central Text Hole for Donut Look */}
                  <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-md border border-slate-50">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">Total N</span>
                    <span className="text-xl font-bold font-mono text-slate-800 py-0.5">{totalValue}</span>
                    <span className="text-[10px] text-indigo-500 font-mono font-bold">Responden</span>
                  </div>
                </div>

                {/* Legend Checklist */}
                <div className="flex flex-col space-y-2 text-xs text-slate-600 max-h-[190px] overflow-y-auto pr-2 w-full" id="pie-chart-legends-panel">
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-widest font-mono border-b border-slate-55 pb-1">
                    📌 LEGENDA PROPORSI
                  </div>
                  {rows.map((row, idx) => {
                    const percent = totalValue > 0 ? ((row.value / totalValue) * 100).toFixed(1) : '0';
                    const color = colors[idx % colors.length];
                    return (
                      <div key={row.id} className="flex items-center justify-between py-0.5 border-b border-slate-50" id={`pie-legend-${row.id}`}>
                        <div className="flex items-center space-x-2 truncate">
                          <div className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm border border-white" style={{ backgroundColor: color }}></div>
                          <span className="font-bold text-slate-700 truncate">{row.label}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500 shrink-0 select-none font-mono text-[11px]">
                          <span>{row.value} siswa</span>
                          <span className="font-semibold text-slate-805 bg-slate-50 px-1 py-0.5 rounded text-indigo-700">({percent}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Lesson Tips */}
          <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" id="eksplorasi-lessons-tips">
            <h4 className="text-xs font-extrabold text-indigo-800 flex items-center space-x-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Petunjuk Guru Suwarto:</span>
            </h4>
            <p className="text-[10px] text-indigo-700 leading-relaxed font-medium">
              Apakah kamu menyadari? Memilih diagram lingkar atau batang sangat tergantung pada jenis data penelitian. Diagram lingkaran merepresentasikan kontribusi (%) terhadap juring 360°, sedangkan diagram batang menggambarkan nilai absolut tinggi balok secara sejajar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
