/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Trash2, ChartBar, PieChart as PieIcon, RefreshCw, Layers, Sparkles, Wand2 } from 'lucide-react';

interface DataRow {
  id: number;
  label: string;
  value: number;
}

export default function Eksplorasi() {
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');
  const [rows, setRows] = useState<DataRow[]>([
    { id: 1, label: 'Pramuka', value: 15 },
    { id: 2, label: 'PMR', value: 10 },
    { id: 3, label: 'Basket', value: 8 },
    { id: 4, label: 'Seni Tari', value: 7 },
  ]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState<number | ''>('');

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel.trim() || newValue === '' || newValue <= 0) return;
    setRows([
      ...rows,
      { id: Date.now(), label: newLabel, value: Number(newValue) }
    ]);
    setNewLabel('');
    setNewValue('');
  };

  const handleDeleteRow = (id: number) => {
    if (rows.length <= 2) {
      alert('Minimal harus menyisakan 2 baris data!');
      return;
    }
    setRows(rows.filter(r => r.id !== id));
  };

  const handleResetData = () => {
    setRows([
      { id: 1, label: 'Senin', value: 20 },
      { id: 2, label: 'Selasa', value: 35 },
      { id: 3, label: 'Rabu', value: 15 },
      { id: 4, label: 'Kamis', value: 40 },
      { id: 5, label: 'Jumat', value: 30 },
    ]);
  };

  // Math helpers
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

  // Draw Pie logic
  let accumulatedAngle = 0;

  return (
    <div className="max-w-6xl mx-auto space-y-6" id="eksplorasi-section">
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-1.5 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider mb-2">
          <Wand2 className="w-3.5 h-3.5 animate-pulse" />
          <span>Eksperimen Sendiri • Laboratorium Virtual</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Simulator Pembuat Diagram Interaktif
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
          Rasakan pengalaman mengolah data secara langsung! Isi tabel datamu di kolom sebelah kiri, pilih tipe grafik, dan lihat perubahan diagram ter-update secara real-time di kolom kanan!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="eksplorasi-grid">
        {/* LEFT COLUMN: DATA INPUT EDITOR */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-5" id="data-input-panel">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-800 flex items-center space-x-2 text-sm sm:text-base">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Tabel Input Data Siswa</span>
            </h3>
            <button
              onClick={handleResetData}
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center space-x-1 font-semibold border border-blue-100 px-2.5 py-1 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
              title="Gunakan Contoh Data Baru"
              id="btn-reset-sample-data"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Load Contoh</span>
            </button>
          </div>

          {/* Form Create Row */}
          <form onSubmit={handleAddRow} className="grid grid-cols-12 gap-2" id="create-data-row-form">
            <div className="col-span-6">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Nama Kategori</label>
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="cth: Voli, Mobil, A"
                maxLength={20}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-slate-50/50"
                required
                id="input-new-label"
              />
            </div>
            <div className="col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Nilai Data</label>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Angka"
                min={1}
                max={1000}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-slate-50/50"
                required
                id="input-new-value"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 flex items-center justify-center transition-all shadow-sm shadow-blue-100 font-bold text-xs cursor-pointer"
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
                  <th className="py-2.5 px-3 text-right">Nilai</th>
                  <th className="py-2.5 px-3 text-center">Persen</th>
                  <th className="py-2.5 px-3 text-center">Hapus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {rows.map((row, index) => {
                  const percentage = ((row.value / totalValue) * 100).toFixed(1);
                  return (
                    <tr key={row.id} className="hover:bg-slate-50/80 transition-colors" id={`row-item-${row.id}`}>
                      <td className="py-2 px-3 font-mono text-slate-400">{index + 1}</td>
                      <td className="py-2 px-3 font-medium text-slate-800 max-w-[100px] truncate">{row.label}</td>
                      <td className="py-2 px-3 text-right font-mono font-semibold">{row.value}</td>
                      <td className="py-2 px-3 text-center text-slate-400 font-mono text-[11px]">{percentage}%</td>
                      <td className="py-2 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleDeleteRow(row.id)}
                          className="text-slate-400 hover:text-red-500 p-1.5 rounded hover:bg-red-50 transition-colors cursor-pointer"
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
          <div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center text-xs text-slate-600 font-medium" id="data-stats-panel-box">
            <span>Total Frekuensi (N):</span>
            <span className="font-mono text-sm font-bold text-slate-800 bg-white border border-slate-100 px-2.5 py-0.5 rounded-lg shadow-sm">
              {totalValue}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: CHART RENDER VIEWER */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-4" id="chart-renderer-panel">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3" id="chart-controls-header">
            <h3 className="font-bold text-slate-800 text-sm sm:text-base flex items-center space-x-1.5">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Sajian Grafik Visual</span>
            </h3>
            {/* Chart Style Toggles */}
            <div className="flex bg-slate-100 rounded-lg p-1 space-x-1" id="chart-type-tabs">
              <button
                onClick={() => setChartType('bar')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                  chartType === 'bar'
                    ? 'bg-white text-blue-600 shadow-sm shadow-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-toggle-bar-chart"
              >
                <ChartBar className="w-3.5 h-3.5" />
                <span>Diagram Batang</span>
              </button>
              <button
                onClick={() => setChartType('pie')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                  chartType === 'pie'
                    ? 'bg-white text-emerald-600 shadow-sm shadow-slate-200'
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
          <div className="min-h-[280px] flex items-center justify-center p-4" id="chart-mount-canvas">
            {chartType === 'bar' ? (
              /* --- RENDER BAR CHART --- */
              <div className="w-full flex flex-col justify-end" id="rendered-bar-chart-view">
                <div className="h-44 flex items-end justify-between border-b border-l border-slate-200 pb-2 pl-2 relative" id="bar-chart-stage">
                  {/* Grid Lines Indicator */}
                  <div className="absolute left-0 right-0 top-[25%] border-t border-slate-100 border-dashed pointer-events-none"></div>
                  <div className="absolute left-0 right-0 top-[50%] border-t border-slate-100 border-dashed pointer-events-none"></div>
                  <div className="absolute left-0 right-0 top-[75%] border-t border-slate-100 border-dashed pointer-events-none"></div>

                  {rows.map((row, idx) => {
                    const barHeightPercent = (row.value / maxValue) * 85; // cap at 85% to fit text
                    const color = colors[idx % colors.length];
                    return (
                      <div key={row.id} className="flex flex-col items-center flex-1 group mx-1.5" id={`bar-visual-stack-${row.id}`}>
                        {/* Tooltip on top */}
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-slate-800 text-white rounded mb-1 transition-all group-hover:scale-105 select-none text-center">
                          {row.value}
                        </span>
                        {/* Interactive Bar */}
                        <div
                          className="w-full rounded-t transition-all duration-500 ease-out hover:opacity-90 shadow-sm border-l border-white/10"
                          style={{
                            height: `${Math.max(barHeightPercent, 4)}%`,
                            backgroundColor: color,
                          }}
                        ></div>
                        {/* Bottom Label */}
                        <span className="text-[9px] font-semibold text-slate-500 mt-1.5 truncate max-w-[65px] text-center" title={row.label}>
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
                <div className="relative w-48 h-48 flex items-center justify-center" id="pie-chart-stage-svg">
                  <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                    {rows.map((row, idx) => {
                      const percentage = row.value / totalValue;
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
                          strokeWidth="3.2" // donut thickness
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className="transition-all duration-500 hover:scale-[1.02] transform origin-center cursor-pointer"
                          id={`pie-circle-slice-${row.id}`}
                        />
                      );
                    })}
                  </svg>
                  {/* Central Text Hole for Donut Look */}
                  <div className="absolute w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-lg border border-slate-50">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total</span>
                    <span className="text-xl font-bold font-mono text-slate-800">{totalValue}</span>
                    <span className="text-[9px] text-slate-400 italic">Data</span>
                  </div>
                </div>

                {/* Legend checklist */}
                <div className="flex flex-col space-y-1.5 text-xs text-slate-600 max-h-[180px] overflow-y-auto pr-2" id="pie-chart-legends-panel">
                  {rows.map((row, idx) => {
                    const percent = ((row.value / totalValue) * 100).toFixed(1);
                    const color = colors[idx % colors.length];
                    return (
                      <div key={row.id} className="flex items-center space-x-2" id={`pie-legend-${row.id}`}>
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }}></div>
                        <span className="font-semibold text-slate-800 truncate max-w-[80px]">{row.label}</span>
                        <span className="text-slate-400">({percent}%)</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Lesson tips */}
          <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl" id="eksplorasi-lessons-tips">
            <h4 className="text-xs font-bold text-blue-800 flex items-center space-x-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Instruksi Eksplorasi Mandiri:</span>
            </h4>
            <p className="text-[10px] text-blue-700 leading-relaxed">
              Coba tambahkan kategori baru misalnya <strong>&quot;Sabtu&quot;</strong> dengan nilai <strong>50</strong>. Bandingkan bagaimana perubahan tinggi satu balok dalam diagram batang versus perubahan rasio luas irisan lingkaran dalam diagram lingkaran. Menyenangkan, bukan?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
