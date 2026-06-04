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

  // Elegant color palettes with gradients and tailwind utility configurations
  const COLOR_PALETTES = [
    {
      from: '#3b82f6', // blue-500
      to: '#1d4ed8',   // blue-700
      bgClass: 'from-blue-500 to-indigo-600',
      borderClass: 'border-blue-100',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-100',
      ringClass: 'ring-blue-100',
      glowClass: 'shadow-blue-500/20',
      pillColor: '#3b82f6'
    },
    {
      from: '#10b981', // emerald-500
      to: '#047857',   // emerald-700
      bgClass: 'from-emerald-400 to-teal-600',
      borderClass: 'border-emerald-100',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      ringClass: 'ring-emerald-100',
      glowClass: 'shadow-emerald-500/20',
      pillColor: '#10b981'
    },
    {
      from: '#f59e0b', // amber-500
      to: '#b45309',   // amber-700
      bgClass: 'from-amber-400 to-orange-500',
      borderClass: 'border-amber-100',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-100',
      ringClass: 'ring-amber-100',
      glowClass: 'shadow-amber-500/20',
      pillColor: '#f59e0b'
    },
    {
      from: '#8b5cf6', // violet-500
      to: '#6d28d9',   // violet-700
      bgClass: 'from-violet-500 to-purple-700',
      borderClass: 'border-violet-100',
      badgeClass: 'bg-violet-50 text-violet-700 border-violet-100',
      ringClass: 'ring-violet-100',
      glowClass: 'shadow-violet-500/20',
      pillColor: '#8b5cf6'
    },
    {
      from: '#ec4899', // pink-500
      to: '#be185d',   // pink-700
      bgClass: 'from-pink-400 to-rose-600',
      borderClass: 'border-pink-100',
      badgeClass: 'bg-pink-50 text-pink-700 border-pink-100',
      ringClass: 'ring-pink-100',
      glowClass: 'shadow-pink-500/20',
      pillColor: '#ec4899'
    },
    {
      from: '#ef4444', // red-500
      to: '#b91c1c',   // red-750
      bgClass: 'from-rose-500 to-red-600',
      borderClass: 'border-rose-100',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-100',
      ringClass: 'ring-rose-100',
      glowClass: 'shadow-rose-500/20',
      pillColor: '#ef4444'
    },
    {
      from: '#14b8a6', // teal-500
      to: '#0f766e',   // teal-700
      bgClass: 'from-teal-400 to-cyan-600',
      borderClass: 'border-teal-100',
      badgeClass: 'bg-teal-50 text-teal-700 border-teal-100',
      ringClass: 'ring-teal-100',
      glowClass: 'shadow-teal-500/20',
      pillColor: '#14b8a6'
    },
    {
      from: '#6366f1', // indigo-500
      to: '#4338ca',   // indigo-700
      bgClass: 'from-indigo-400 to-blue-700',
      borderClass: 'border-indigo-100',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      ringClass: 'ring-indigo-100',
      glowClass: 'shadow-indigo-500/20',
      pillColor: '#6366f1'
    }
  ];

  // Dynamic interactive hover states
  const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);
  const hoveredRow = rows.find(r => r.id === hoveredRowId);

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
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold font-mono uppercase animate-pulse">
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
                    ? 'border-indigo-600 ring-2 ring-indigo-50 bg-gradient-to-br from-indigo-50/50 to-white shadow-md scale-102'
                    : 'border-slate-100 hover:border-slate-300 bg-slate-50/40 hover:bg-white hover:shadow-sm'
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
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {preset.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                  <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                    preset.id === 'hobi' || preset.id === 'goldar' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {preset.dataType === 'Kategorik Nominal' ? 'Kategorik' : 'Numerik'}
                  </span>
                  <span className="text-slate-400 font-medium">Auto: {preset.recommendedChart === 'pie' ? 'Lingkaran' : 'Batang'}</span>
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
          <p className="text-[11px] text-slate-600 leading-relaxed font-normal text-slate-700">
            {currentPreset.reason}
          </p>
        </div>

        {/* Misi Tantangan Belajar */}
        <div className="p-3 bg-indigo-50/40 border border-indigo-150 rounded-xl text-xs text-indigo-850 flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
          <div>
            <span className="font-extrabold text-indigo-950 block uppercase tracking-wider text-[10px]">Tantangan Belajar Mandiri:</span>
            <p className="text-[11px] text-indigo-900 mt-0.5 font-normal leading-relaxed">
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
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Frekuensi</label>
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
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 flex items-center justify-center transition-all shadow-sm shadow-indigo-100 font-bold text-xs cursor-pointer h-9 md:h-10"
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
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-semibold sticky top-0 z-10 box-shadow">
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
                  const palette = COLOR_PALETTES[index % COLOR_PALETTES.length];
                  const isHovered = hoveredRowId === row.id;
                  const isOtherHovered = hoveredRowId !== null && hoveredRowId !== row.id;

                  return (
                    <tr
                      key={row.id}
                      className={`transition-all duration-200 cursor-pointer ${
                        isHovered ? 'bg-indigo-50/60 font-semibold' : 'hover:bg-slate-50/80'
                      } ${isOtherHovered ? 'opacity-40' : 'opacity-100'}`}
                      onMouseEnter={() => setHoveredRowId(row.id)}
                      onMouseLeave={() => setHoveredRowId(null)}
                      id={`row-item-${row.id}`}
                    >
                      <td className="py-3 px-3 font-mono text-slate-400">{index + 1}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800 max-w-[100px] truncate">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm border border-white" style={{ backgroundColor: palette.from }}></span>
                          <span className="truncate" title={row.label}>{row.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="number"
                          value={row.value}
                          onChange={(e) => handleEditRowValue(row.id, Number(e.target.value))}
                          className="w-16 text-right px-1.5 py-1 text-xs border border-slate-200 rounded font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-150 bg-slate-50"
                          min={1}
                          id={`editable-row-value-${row.id}`}
                        />
                      </td>
                      <td className="py-3 px-3 text-center text-slate-500 font-mono text-[11px]">{percentage}%</td>
                      <td className="py-3 px-3 text-center" onClick={(e) => e.stopPropagation()}>
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
          <div className="min-h-[300px] flex items-center justify-center p-4 bg-slate-50/20 border border-dashed border-slate-150 rounded-2xl relative" id="chart-mount-canvas">
            {chartType === 'bar' ? (
              /* --- RENDER BAR CHART --- */
              <div className="w-full flex flex-col justify-end" id="rendered-bar-chart-view">
                <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-mono">
                  📊 DIAGRAM BATANG: {currentPreset.title}
                </div>

                <div className="flex w-full items-stretch" id="bar-chart-container-stage">
                  {/* Y-Axis tick labels */}
                  <div className="flex flex-col justify-between text-right text-[10px] font-mono font-bold text-slate-400 pr-2.5 select-none h-44 pb-6 pt-1">
                    <span>{Math.round(maxValue)}</span>
                    <span>{Math.round(maxValue * 0.75)}</span>
                    <span>{Math.round(maxValue * 0.5)}</span>
                    <span>{Math.round(maxValue * 0.25)}</span>
                    <span>0</span>
                  </div>

                  {/* Chart Stage */}
                  <div className="flex-1 h-44 flex items-end justify-between border-b border-l border-slate-300 pb-2 pl-2 relative" id="bar-chart-stage">
                    {/* Horizontal Grid Lines */}
                    <div className="absolute left-0 right-0 top-0 border-t border-slate-100/80 border-dashed pointer-events-none"></div>
                    <div className="absolute left-0 right-0 top-[25%] border-t border-slate-100/80 border-dashed pointer-events-none"></div>
                    <div className="absolute left-0 right-0 top-[50%] border-t border-slate-100/80 border-dashed pointer-events-none"></div>
                    <div className="absolute left-0 right-0 top-[75%] border-t border-slate-100/80 pointer-events-none border-dashed"></div>

                    {rows.map((row, idx) => {
                      const barHeightPercent = (row.value / maxValue) * 85; // fit label space on top
                      const palette = COLOR_PALETTES[idx % COLOR_PALETTES.length];
                      const isHovered = hoveredRowId === row.id;
                      const hasActiveHover = hoveredRowId !== null;
                      const isOtherHovered = hasActiveHover && !isHovered;

                      return (
                        <div
                          key={row.id}
                          className={`flex flex-col items-center flex-1 mx-1.5 sm:mx-2.5 relative transition-all duration-300 ${
                            isOtherHovered ? 'opacity-35 scale-95 blur-[0.4px]' : 'opacity-100 scale-100'
                          }`}
                          onMouseEnter={() => setHoveredRowId(row.id)}
                          onMouseLeave={() => setHoveredRowId(null)}
                          id={`bar-visual-stack-${row.id}`}
                        >
                          {/* Value Floating Badge */}
                          <div className={`absolute -top-7 px-2 py-0.5 rounded text-[10px] font-extrabold font-mono transition-all duration-200 shadow-sm leading-tight select-none ${
                            isHovered
                              ? 'bg-slate-900 text-white scale-110 z-10'
                              : 'bg-white text-slate-600 border border-slate-150'
                          }`}>
                            {row.value}
                          </div>

                          {/* Interactive Gradient Bar */}
                          <div
                            className={`w-full rounded-t-lg bg-gradient-to-t transition-all duration-300 cursor-pointer ${
                              palette.bgClass
                            } ${isHovered ? 'shadow-lg ' + palette.glowClass + ' brightness-110 -translate-y-0.5' : 'shadow-sm'}`}
                            style={{
                              height: `${Math.max(barHeightPercent, 5)}%`,
                            }}
                          ></div>

                          {/* Label bottom */}
                          <span className={`text-[10px] font-bold mt-2 truncate w-full text-center transition-colors duration-200 ${
                            isHovered ? 'text-indigo-600 font-extrabold' : 'text-slate-500'
                          }`} title={row.label}>
                            {row.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* --- RENDER PIE CHART --- */
              <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-8 w-full animate-fadeIn" id="rendered-pie-chart-view">
                {/* SVG CIRCLE ROTATED DONUT */}
                <div className="relative w-48 h-48 flex items-center justify-center shrink-0" id="pie-chart-stage-svg">
                  <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                    <defs>
                      {rows.map((row, idx) => {
                        const palette = COLOR_PALETTES[idx % COLOR_PALETTES.length];
                        return (
                          <linearGradient key={`grad-${row.id}`} id={`svg-grad-${row.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={palette.from} />
                            <stop offset="100%" stopColor={palette.to} />
                          </linearGradient>
                        );
                      })}
                    </defs>
                    {(() => {
                      let currentAccumulated = 0;
                      return rows.map((row, idx) => {
                        const percentage = totalValue > 0 ? row.value / totalValue : 0;
                        const strokeDasharray = `${percentage * 100} ${100 - percentage * 100}`;
                        const strokeDashoffset = 100 - currentAccumulated;
                        currentAccumulated += percentage * 100;
                        const isHovered = hoveredRowId === row.id;
                        const hasActiveHover = hoveredRowId !== null;
                        const isOtherHovered = hasActiveHover && !isHovered;

                        return (
                          <circle
                            key={row.id}
                            cx="16"
                            cy="16"
                            r="15.915"
                            fill="transparent"
                            stroke={`url(#svg-grad-${row.id})`}
                            strokeWidth={isHovered ? "5.4" : "4.2"}
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-300 transform origin-center cursor-pointer"
                            onMouseEnter={() => setHoveredRowId(row.id)}
                            onMouseLeave={() => setHoveredRowId(null)}
                            style={{
                              opacity: isOtherHovered ? 0.4 : 1,
                              transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                            }}
                            id={`pie-circle-slice-${row.id}`}
                          />
                        );
                      });
                    })()}
                  </svg>
                  {/* Central Text Hole with Dual State text */}
                  {hoveredRowId !== null && hoveredRow ? (
                    <div className="absolute w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg border border-slate-100 z-10 transition-all duration-250 transform scale-102">
                      <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest max-w-[90px] truncate">
                        {hoveredRow.label}
                      </span>
                      <span className="text-sm font-black font-mono text-slate-800 leading-none my-1">
                        {hoveredRow.value} Siswa
                      </span>
                      <span className="text-[10px] bg-slate-900 text-white font-mono font-bold px-1.5 py-0.5 rounded shadow-sm">
                        {totalValue > 0 ? ((hoveredRow.value / totalValue) * 100).toFixed(1) : '0'}%
                      </span>
                    </div>
                  ) : (
                    <div className="absolute w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-sm border border-slate-100">
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">Total N</span>
                      <span className="text-xl font-bold font-mono text-slate-800 py-0.5">{totalValue}</span>
                      <span className="text-[9px] text-slate-500 font-mono font-bold">Responden</span>
                    </div>
                  )}
                </div>

                {/* Legend Checklist Panel */}
                <div className="flex flex-col space-y-2 text-xs text-slate-600 max-h-[190px] overflow-y-auto pr-1 w-full" id="pie-chart-legends-panel">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono border-b border-slate-100 pb-1 mb-1">
                    📌 LEGENDA PROPORSI
                  </div>
                  {rows.map((row, idx) => {
                    const percent = totalValue > 0 ? ((row.value / totalValue) * 100).toFixed(1) : '0';
                    const palette = COLOR_PALETTES[idx % COLOR_PALETTES.length];
                    const isHovered = hoveredRowId === row.id;
                    const isOtherHovered = hoveredRowId !== null && hoveredRowId !== row.id;

                    return (
                      <div
                        key={row.id}
                        className={`flex items-center justify-between py-1 px-2 border border-transparent rounded-lg transition-all duration-200 cursor-pointer ${
                          isHovered
                            ? 'bg-indigo-50/70 border-indigo-100 shadow-sm pl-3'
                            : 'hover:bg-slate-50'
                        } ${isOtherHovered ? 'opacity-40' : 'opacity-100'}`}
                        onMouseEnter={() => setHoveredRowId(row.id)}
                        onMouseLeave={() => setHoveredRowId(null)}
                        id={`pie-legend-${row.id}`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <div className="w-3 h-3 rounded-full shrink-0 shadow-sm border border-white" style={{ backgroundColor: palette.from }}></div>
                          <span className={`font-bold truncate ${isHovered ? 'text-indigo-950 font-extrabold' : 'text-slate-700'}`}>{row.label}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-slate-505 shrink-0 select-none font-mono text-[11px]">
                          <span>{row.value} siswa</span>
                          <span className={`font-bold px-1.5 py-0.5 rounded text-[11px] font-extrabold transition-colors duration-200 ${
                            isHovered ? 'bg-indigo-150 text-indigo-805' : 'bg-slate-100 text-slate-700'
                          }`}>({percent}%)</span>
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
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>Petunjuk Guru Suwarto:</span>
            </h4>
            <p className="text-[10px] text-indigo-700 leading-relaxed font-semibold">
              Apakah kamu menyadari? Memilih diagram lingkar atau batang sangat tergantung pada jenis data penelitian. Diagram lingkaran merepresentasikan kontribusi (%) terhadap juring 360°, sedangkan diagram batang menggambarkan nilai absolut tinggi balok secara sejajar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
