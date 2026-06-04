/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types.ts';

export const questions: Question[] = [
  // ========================== PILIHAN GANDA (10 SOAL) ==========================
  {
    id: 1,
    type: 'single',
    difficulty: 'mudah',
    stimulus: "Suhu udara di Puncak Jaya, Papua, diukur selama 5 hari berturut-turut pada jam 12.00 WIT. Data suhu yang diperoleh adalah sebagai berikut:\n- Senin: -2°C\n- Selasa: -1°C\n- Rabu: 0°C\n- Kamis: -3°C\n- Jumat: -1°C",
    questionText: "Pada hari apakah suhu udara di Puncak Jaya tercatat paling dingin?",
    options: [
      "Senin",
      "Selasa",
      "Kamis",
      "Jumat"
    ],
    correctAnswer: 2 // Kamis (-3°C)
  },
  {
    id: 2,
    type: 'single',
    difficulty: 'mudah',
    stimulus: "Berikut adalah tabel tinggi badan (dalam cm) lima orang siswa kelas 7:\n| Nama | Tinggi Badan (cm) |\n|---|---|\n| Andi | 150 |\n| Budi | 155 |\n| Cici | 148 |\n| Dodi | 152 |\n| Eka | 145 |",
    questionText: "Berapakah jumlah tinggi badan siswa yang paling tinggi dan paling pendek jika digabungkan?",
    options: [
      "293 cm",
      "295 cm",
      "300 cm",
      "302 cm"
    ],
    correctAnswer: 2 // Budi (155) + Eka (145) = 300 cm
  },
  {
    id: 3,
    type: 'single',
    difficulty: 'mudah',
    stimulus: "Kantin sekolah mengumpulkan data penjualan jenis minuman selama satu minggu dalam bentuk tabel frekuensi:\n- Air Mineral: 120 botol\n- Teh Manis: 85 kotak\n- Susu Kotak: 45 kotak\n- Jus Buah: 60 cup",
    questionText: "Jenis minuman apa yang menempati urutan kedua paling banyak terjual di kantin sekolah?",
    options: [
      "Air Mineral",
      "Teh Manis",
      "Suku Kotak",
      "Jus Buah"
    ],
    correctAnswer: 1 // Teh Manis
  },
  {
    id: 4,
    type: 'single',
    difficulty: 'mudah',
    stimulus: "Dalam suatu riset kecil di kelas, terkumpul data ukuran sepatu siswa laki-laki sebagai berikut: 37, 38, 38, 39, 40, 40, 40, 41, 41, 42.",
    questionText: "Berapa banyak siswa laki-laki yang memiliki ukuran sepatu berukuran genap?",
    options: [
      "4 siswa",
      "5 siswa",
      "6 siswa",
      "7 siswa"
    ],
    correctAnswer: 2 // 38, 38, 40, 40, 40, 42 -> 6 siswa
  },
  {
    id: 5,
    type: 'single',
    difficulty: 'sedang',
    stimulus: "Pak RT melakukan survei mengenai jenis kendaraan bermotor yang dimiliki setiap keluarga di RT 03. Hasilnya disajikan dalam diagram lingkaran dengan persentase:\n- Sepeda Motor: 60%\n- Mobil: 15%\n- Sepeda: 20%\n- Tidak Ada: 5%\n\nJumlah seluruh KK di RT 03 adalah 80 KK.",
    questionText: "Berapa banyak KK yang memiliki kendaraan berupa Mobil di RT 03?",
    options: [
      "10 KK",
      "12 KK",
      "15 KK",
      "20 KK"
    ],
    correctAnswer: 1 // 15% dari 80 = 12 KK
  },
  {
    id: 6,
    type: 'single',
    difficulty: 'sedang',
    stimulus: "Berikut adalah data capaian nilai ulangan harian matematika siswa kelas VII-B:\n- Nilai 60: 4 orang\n- Nilai 70: 8 orang\n- Nilai 80: 10 orang\n- Nilai 90: 6 orang\n- Nilai 100: 2 orang\nKriteria Ketuntasan Minimal (KKM) mata pelajaran Matematika adalah 75.",
    questionText: "Berapa persen siswa di kelas VII-B yang nilainya sudah mencapai atau melampaui KKM?",
    options: [
      "40%",
      "60%",
      "18%",
      "60% salah, yang benar adalah 60%? Total = 30 siswa. Diatas KKM (80, 90, 100) = 10 + 6 + 2 = 18 siswa. Persentase = 18/30 * 100% = 60%."
    ],
    correctAnswer: 3 // 60%
  },
  {
    id: 7,
    type: 'single',
    difficulty: 'sedang',
    stimulus: "Sebuah peternakan ayam mencatat produksi telur harian (dalam butir) selama seminggu:\n- Senin: 150\n- Selasa: 165\n- Rabu: 140\n- Kamis: 170\n- Jumat: 155\n- Sabtu: 180\n- Minggu: 190",
    questionText: "Berapakah rata-rata (mean) produksi telur harian di peternakan tersebut selama seminggu?",
    options: [
      "155 butir",
      "162 butir",
      "164 butir",
      "170 butir"
    ],
    correctAnswer: 2 // Total = 150+165+140+170+155+180+190 = 1150. Rata-rata = 1150 / 7 = 164.28 ≈ 164 butir
  },
  {
    id: 8,
    type: 'single',
    difficulty: 'sedang',
    stimulus: "Data berat badan (dalam kg) dari sekelompok balita di Posyandu Dahlia adalah: 12, 10, 15, 9, 11, 14, 13, 12, 10, 12.\nLangkah pertama untuk mencari simpangan atau sebaran adalah mengurutkan data.",
    questionText: "Berapakah nilai tengah (median) dari berat badan balita tersebut?",
    options: [
      "11 kg",
      "11.5 kg",
      "12 kg",
      "12.5 kg"
    ],
    correctAnswer: 2 // Urutan: 9, 10, 10, 11, 12, 12, 12, 13, 14, 15. N=10. Median data ke 5 & 6 yaitu (12+12)/2 = 12 kg
  },
  {
    id: 9,
    type: 'single',
    difficulty: 'sedang',
    stimulus: "Diagram garis berikut menunjukkan curah hujan bulanan di Kota Bogor tahun lalu dari Januari hingga April:\n- Januari: 450 mm\n- Februari: 380 mm\n- Maret: 320 mm\n- April: 200 mm",
    questionText: "Berapakah besar penurunan curah hujan dari bulan Februari ke bulan Maret?",
    options: [
      "50 mm",
      "60 mm",
      "70 mm",
      "80 mm"
    ],
    correctAnswer: 1 // 380 - 320 = 60 mm
  },
  {
    id: 10,
    type: 'single',
    difficulty: 'sulit',
    stimulus: "Data nilai rata-rata kelas VII-A adalah 78 dengan jumlah siswa 25 orang. Data nilai kelas VII-B adalah 82 dengan jumlah siswa 30 orang. Kedua kelas tersebut digabungkan dalam satu angkatan.",
    questionText: "Berapakah nilai rata-rata gabungan dari kelas VII-A dan VII-B?",
    options: [
      "79.8",
      "80.0",
      "80.2",
      "80.5"
    ],
    correctAnswer: 1 // (78*25 + 82*30)/(25+30) = (1950 + 2460)/55 = 4410 / 55 = 80.18 ≈ 80.2
  },

  // ========================== PILIHAN GANDA KOMPLEKS (5 SOAL, lebih dari 1 jawaban benar) ==========================
  {
    id: 11,
    type: 'complex',
    difficulty: 'mudah',
    stimulus: "Doni mengelompokkan barang-barang miliknya berdasarkan jenis data yang diperoleh.\n- Berat badannya (45 kg) dan tinggi badannya (152 cm)\n- Warna favorit temannya (Merah, Biru, Hijau)\n- Nomor punggung kaos tim sepak bolanya (10, 7, 99)\n- Merk HP siswa di kelas (Samsung, Xiaomi, Oppo, Apple)",
    questionText: "Manakah di antara data berikut yang dikategorikan sebagai DATA KATEGORIK? (Pilih semua jawaban yang benar!)",
    options: [
      "Warna favorit teman seklas Doni",
      "Berat badan Doni",
      "Merk HP siswa di kelas",
      "Tinggi badan Doni"
    ],
    correctAnswers: [0, 2] // Warna dan Merk HP (Kategorik)
  },
  {
    id: 12,
    type: 'complex',
    difficulty: 'sedang',
    stimulus: "Sebuah perpustakaan mengamati jenis buku yang dipinjam oleh 200 siswa selama tiga bulan:\n- Fiksi: 90 kali pinjam (45%)\n- Buku Pelajaran: 60 kali pinjam (30%)\n- Ensiklopedia: 30 kali pinjam (15%)\n- Majalah: 20 kali pinjam (10%)",
    questionText: "Manakah pernyataan di bawah ini yang benar berdasarkan data peminjaman buku tersebut? (Pilih semua jawaban yang benar!)",
    options: [
      "Setengah dari total buku yang dipinjam adalah buku Fiksi.",
      "Selisih persentase peminjaman buku Pelajaran dan Ensiklopedia adalah 15%.",
      "Jumlah buku Ensiklopedia dan Majalah yang dipinjam sebanyak 50 buku.",
      "Majalah merupakan jenis pustaka yang paling sedikit dipinjam."
    ],
    correctAnswers: [1, 2, 3] // Pelajaran - Ensiklopedia = 30%-15% = 15%. Ensiklopedia + Majalah = 30 + 20 = 50. Majalah 20 (paling sedikit).
  },
  {
    id: 13,
    type: 'complex',
    difficulty: 'sulit',
    stimulus: "Berikut adalah tabel frekuensi jumlah kesalahan ejaan dalam tulisan 40 siswa:\n| Jumlah Kesalahan | Frekuensi (Siswa) |\n|:---:|:---:|\n| 0 - 2 | 12 |\n| 3 - 5 | 18 |\n| 6 - 8 | 8 |\n| 9 - 11 | 2 |",
    questionText: "Pernyataan mana saja yang tepat untuk mendeskripsikan data kesalahan ejaan tersebut? (Pilih semua jawaban yang benar!)",
    options: [
      "Ada 30 siswa yang membuat kesalahan ejaan sebanyak 5 kata atau kurang.",
      "Siswa yang membuat kesalahan lebih dari 8 kata adalah sebanyak 5% dari total siswa.",
      "Siswa yang paling banyak berkontribusi dalam kelompok kesalahan adalah kelompok 0 - 2 kesalahan.",
      "Sebanyak 25% siswa membuat kesalahan antara 6 sampai 8 kata."
    ],
    correctAnswers: [0, 1] // 12+18 = 30 (benar). >8 yaitu 9-11 ada 2 siswa. 2/40 = 5% (benar). Kelompok terbanyak adalah 3-5 (salah). 8/40 = 20% (salah).
  },
  {
    id: 14,
    type: 'complex',
    difficulty: 'sedang',
    stimulus: "Diagram batang berikut menampilkan hasil panen padi milik beberapa kelompok tani (dalam ton):\n- Kelompok Tani Luhur: 12 ton\n- Kelompok Tani Mandiri: 18 ton\n- Kelompok Tani Makmur: 15 ton\n- Kelompok Tani Harapan: 15 ton",
    questionText: "Manakah analisis yang benar mengenai data hasil panen padi di atas? (Pilih semua jawaban yang benar!)",
    options: [
      "Rata-rata hasil panen setiap kelompok tani adalah 15 ton.",
      "Kelompok Tani Mandiri menghasilkan panen padi 3 ton lebih banyak dari Kelompok Tani Makmur.",
      "Modus (nilai paling sering muncul) dari data panen kelompok tani tersebut adalah 15 ton.",
      "Total seluruh panen padi keempat kelompok tersebut adalah 50 ton."
    ],
    correctAnswers: [0, 1, 2] // Rata-rata = (12+18+15+15)/4 = 60/4 = 15 ton (benar). Mandiri-Makmur = 18-15 = 3 ton (benar). Modus = 15 (ada dua kelompok, benar). Total = 60 ton (salah).
  },
  {
    id: 15,
    type: 'complex',
    difficulty: 'sulit',
    stimulus: "Berikut data nilai tes kecerdasan logis dari sekelompok siswa berprestasi:\n85, 90, 80, 95, 85, 90, 100, 85, 75, 95\nJika kita menggambar diagram garis atau diagram batang untuk data ini.",
    questionText: "Berdasarkan sebaran nilai di atas, manakah pernyataan statistik yang bernilai benar? (Pilih semua jawaban yang benar!)",
    options: [
      "Nilai jangkauan (maksimum - minimum) data di atas adalah 25.",
      "Modus dari data nilai di atas adalah 85.",
      "Rata-rata (mean) dari data nilai di atas adalah tepat 87.",
      "Jumlah siswa yang memperoleh nilai di atas 85 sebanyak 5 orang."
    ],
    correctAnswers: [0, 1, 3] // Jangkauan = 100 - 75 = 25 (benar). Modus = 85 (muncul 3 kali, benar). Mean = 880 / 10 = 88 (salah). Nilai >85 (90, 95, 90, 100, 95) = 5 orang (benar).
  },

  // ========================== BENAR SALAH (5 SOAL, masing-masing 3 pernyataan) ==========================
  {
    id: 16,
    type: 'true_false',
    difficulty: 'mudah',
    stimulus: "Tabel jenis ekstra kurikuler yang diikuti oleh 40 siswa kelas 7:\n| Ekstrakurikuler | Jumlah Siswa |\n|---|---|\n| Pramuka | 15 |\n| PMR | 10 |\n| Basket | 8 |\n| Seni Tari | 7 |",
    questionText: "Tentukan kebenaran dari setiap pernyataan berikut mengenai hobi dan ekstrakurikuler siswa!",
    statements: [
      { id: 1, statementText: "Pramuka diikuti oleh lebih dari sepertiga total seluruh kelas.", correctIsTrue: true }, // 15/40 = 37.5% > 33.3%
      { id: 2, statementText: "Jumlah siswa pengikut PMR sama dengan jumlah pengikut Seni Tari ditambah 2 orang.", correctIsTrue: false }, // PMR=10, Tari+2 = 7+2 = 9
      { id: 3, statementText: "Ekstrakurikuler Basket menempati peringkat ketiga paling digemari.", correctIsTrue: true } // Pramuka(1), PMR(2), Basket(3), Tari(4)
    ]
  },
  {
    id: 17,
    type: 'true_false',
    difficulty: 'sedang',
    stimulus: "Diagram batang menunjukkan data berat sampah plastik yang dikumpulkan 3 kelas dalam aksi go-green:\n- Kelas 7A: 24 kg\n- Kelas 7B: 30 kg\n- Kelas 7C: 18 kg",
    questionText: "Analisislah kebenaran pernyataan seputar berat sampah plastik berikut ini!",
    statements: [
      { id: 1, statementText: "Rasio berat sampah plastik Kelas 7C dan Kelas 7A adalah 3 : 4.", correctIsTrue: true }, // 18 : 24 = 3 : 4
      { id: 2, statementText: "Total sampah plastik yang dikumpulkan oleh seluruh kelas VII adalah 72 kg.", correctIsTrue: `true` === `true` }, // 24+30+18 = 72 kg
      { id: 3, statementText: "Selisih sampah yang dikumpulkan Kelas 7B (terbanyak) dengan 7C (tersedikit) adalah 10 kg.", correctIsTrue: false } // 30 - 18 = 12 kg
    ]
  },
  {
    id: 18,
    type: 'true_false',
    difficulty: 'sedang',
    stimulus: "Diagram garis tingkat kelulusan ujian kompetensi komputer suatu lembaga vokasi:\n- Tahun 2021: 80%\n- Tahun 2022: 85%\n- Tahun 2023: 75%\n- Tahun 2024: 90%",
    questionText: "Evaluasi kebenaran dari tren tingkat kelulusan ujian berikut!",
    statements: [
      { id: 1, statementText: "Mengalami penurunan persentase kelulusan yang paling signifikan dari tahun 2022 ke tahun 2023.", correctIsTrue: true }, // Selisih turun 10%
      { id: 2, statementText: "Tingkat kelulusan di tahun 2024 merupakan yang tertinggi dalam rentang waktu tersebut.", correctIsTrue: true }, // 90% tertinggi
      { id: 3, statementText: "Rata-rata persentase kelulusan selama periode 4 tahun tersebut adalah 80%.", correctIsTrue: false } // (80+85+75+90)/4 = 330/4 = 82.5%
    ]
  },
  {
    id: 19,
    type: 'true_false',
    difficulty: 'sedang',
    stimulus: "Suatu survei menanyakan jumlah buku yang dibaca siswa kelas 7 dalam sebulan:\n- 0-1 buku: 5 siswa\n- 2-3 buku: 15 siswa\n- 4-5 buku: 12 siswa\n- Lebih dari 5 buku: 8 siswa",
    questionText: "Ujilah kebenaran pernyataan tentang kebiasaan membaca siswa ini!",
    statements: [
      { id: 1, statementText: "Sebagian besar siswa kelas 7 membaca minimal 2 buku dalam satu bulan.", correctIsTrue: true }, // Siswa >= 2 buku = 15+12+8 = 35 dari 40
      { id: 2, statementText: "Hanya 10% siswa yang membaca buku kurang dari 2 (kategori 0-1 buku).", correctIsTrue: false }, // 5/40 = 12.5%
      { id: 3, statementText: "Siswa yang membaca lebih dari 5 buku lebih banyak daripada siswa yang membaca 0-1 buku.", correctIsTrue: true } // 8 siswa > 5 siswa
    ]
  },
  {
    id: 20,
    type: 'true_false',
    difficulty: 'sulit',
    stimulus: "Sebuah diagram lingkaran menyajikan mata pencaharian warga Desa Sukamaju yang berjumlah 400 orang penduduk produktif:\n- Buruh: 35%\n- PNS: 10%\n- Petani: 40%\n- Pedagang: 15%",
    questionText: "Tentukan kebenaran pernyataan terkait pekerjaan warga Desa Sukamaju berikut!",
    statements: [
      { id: 1, statementText: "Jumlah penduduk yang bekerja sebagai PNS adalah 40 orang.", correctIsTrue: true }, // 10% dari 400 = 40
      { id: 2, statementText: "Setengah penduduk Desa Sukamaju bermata pencaharian sebagai Buruh atau PNS.", correctIsTrue: false }, // Buruh+PNS = 35%+10%=45%
      { id: 3, statementText: "Jumlah Petani di Desa Sukamaju adalah sebanyak 160 orang.", correctIsTrue: true } // 40% dari 400 = 160
    ]
  },

  // ========================== MENJODOHKAN (5 SOAL, masing-masing 4 pasang) ==========================
  {
    id: 21,
    type: 'matching',
    difficulty: 'mudah',
    stimulus: "Pasangkan deskripsi porsi sajian diagram berikut dengan jenis visualisasi yang paling cocok dan representatif.",
    questionText: "Hubungkan deskripsi di kolom kiri dengan jenis representasi grafik yang tepat di kolom kanan!",
    pairs: [
      { id: 1, leftText: "Menunjukkan bagian-bagian dari satu kesatuan (porsi %)", rightText: "Diagram Lingkaran" },
      { id: 2, leftText: "Menampilkan tren/perubahan data berkala dari waktu ke waktu", rightText: "Diagram Garis" },
      { id: 3, leftText: "Membandingkan frekuensi kategori yang terpisah", rightText: "Diagram Batang" },
      { id: 4, leftText: "Tabel ringkasan angka sebelum digambar ke diagram", rightText: "Tabel Frekuensi" }
    ],
    allRightOptions: ["Diagram Lingkaran", "Diagram Garis", "Diagram Batang", "Tabel Frekuensi"]
  },
  {
    id: 22,
    type: 'matching',
    difficulty: 'mudah',
    stimulus: "Lakukan penjodohkan antara data hasil panen bawang (dalam kg) ini:\n- Januari: 50 kg\n- Februari: 70 kg\n- Maret: 40 kg\n- April: 90 kg",
    questionText: "Jodohkanlah pertanyaan data kiri dengan nilai kuantitatif yang benar di kolom kanan!",
    pairs: [
      { id: 1, leftText: "Bulan dengan hasil panen tersedikit", rightText: "Maret" },
      { id: 2, leftText: "Hasil panen pada bulan Februari", rightText: "70 kg" },
      { id: 3, leftText: "Selisih panen tertinggi dan terendah", rightText: "50 kg" }, // April (90) - Maret (40) = 50 kg
      { id: 4, leftText: "Total panen seluruh caturwulan awal", rightText: "250 kg" } // 50+70+40+90 = 250 kg
    ],
    allRightOptions: ["Maret", "70 kg", "50 kg", "250 kg"]
  },
  {
    id: 23,
    type: 'matching',
    difficulty: 'sedang',
    stimulus: "Kelompok statistika sedang meneliti jenis data yang diambil dari kegiatan sehari-hari di sekolah.",
    questionText: "Jodohkanlah jenis data variabel di kolom kiri dengan kelompok tipe datanya di kolom kanan!",
    pairs: [
      { id: 1, leftText: "Suhu air kolam sekolah (°C)", rightText: "Numerik Kontinu" },
      { id: 2, leftText: "Jumlah bangku kayu rusak di kelas", rightText: "Numerik Diskrit" },
      { id: 3, leftText: "Tingkat kepuasan siswa (Puas, Cukup, Kurang)", rightText: "Kategorik Ordinal" },
      { id: 4, leftText: "Agama/Kepercayaan siswa kelas 7", rightText: "Kategorik Nominal" }
    ],
    allRightOptions: ["Numerik Kontinu", "Numerik Diskrit", "Kategorik Ordinal", "Kategorik Nominal"]
  },
  {
    id: 24,
    type: 'matching',
    difficulty: 'sedang',
    stimulus: "Diketahui sekelompok data nilai kuis matematika: 5, 6, 7, 7, 8, 8, 8, 9.",
    questionText: "Pasangkan ukuran pemusatan data di sebelah kiri dengan nilai hitung statistiknya di sebelah kanan!",
    pairs: [
      { id: 1, leftText: "Nilai Modus", rightText: "8" }, // 8 muncul 3 kali
      { id: 2, leftText: "Nilai Median (Tengah)", rightText: "7.5" }, // urutan 4 & 5 yaitu (7+8)/2 = 7.5
      { id: 3, leftText: "Nilai Mean (Rata-rata)", rightText: "7.25" }, // (5+6+7+7+8+8+8+9)/8 = 58 / 8 = 7.25
      { id: 4, leftText: "Jangkauan Data (Range)", rightText: "4" } // 9 - 5 = 4
    ],
    allRightOptions: ["8", "7.5", "7.25", "4"]
  },
  {
    id: 25,
    type: 'matching',
    difficulty: 'sulit',
    stimulus: "Berikut data nilai tes sains yang dikelompokkan: \nSiswa berkemampuan tinggi (A) di atas rata-rata kelompok. \nSiswa berkembang (B) tepat di rata-rata. \nSiswa pendampingan (C) di bawah rata-rata.\nTotal kelompok: 10 siswa dengan nilai: 60, 60, 70, 70, 80, 80, 80, 90, 100, 100.",
    questionText: "Pasangkan kategori deskriptor siswa di kolom kiri dengan batas nilai/kondisi yang tepat di kolom kanan!",
    pairs: [
      { id: 1, leftText: "Nilai Rata-rata Kelompok", rightText: "79" }, // (120+140+240+90+200)/10 = 790/10 = 79
      { id: 2, leftText: "Rentang nilai kategori Pendampingan (C)", rightText: "Nilai di bawah 79" },
      { id: 3, leftText: "Banyak siswa yang termasuk Kategori Tinggi (A)", rightText: "6 siswa" }, // Nilai > 79 yaitu 80 (3), 90 (1), 100 (2) -> 6 siswa
      { id: 4, leftText: "Siswa peraih nilai tertinggi kelompok", rightText: "100" }
    ],
    allRightOptions: ["79", "Nilai di bawah 79", "66 siswa atau 6 siswa", "100"]
  }
];
