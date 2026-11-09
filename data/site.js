// ============================================================
//  SEMUA ISI PORTFOLIO ADA DI FILE INI.
//  Ubah teks, tambah proyek, atau ganti link cukup di sini.
// ============================================================

export const profile = {
  name: "Riswan Hermawan",
  title: "S.Kom.",
  role: "Web Developer",
  location: "Jakarta Pusat, DKI Jakarta",
  email: "zonewanz@gmail.com",
  phone: "+62 812 9059 9250",
  whatsapp: "6281290599250",
  github: "https://github.com/zonewanz",
  site: "https://zonewanz.github.io",
  photo: "/profile.jpg",
  tagline:
    "Membangun sistem informasi yang dipakai sehari-hari — dari HRIS skala nasional, ERP pabrik garmen, sampai aplikasi sekolah.",
  summary: [
    "Saya lulusan Teknik Informatika (2017) dengan pengalaman di pengembangan perangkat lunak, pengajaran Rekayasa Perangkat Lunak, dan pengembangan sistem informasi berbasis web.",
    "Saya pernah membangun aplikasi ERP, sistem informasi kepegawaian (HRIS), dan sistem monitoring operasional. Saat ini saya bertugas sebagai Staff IT di Badan Gizi Nasional, fokus pada pengembangan aplikasi, pengelolaan data, dan integrasi sistem.",
    "Terbiasa bekerja dengan database, REST API, dan pengujian aplikasi untuk memastikan kualitas sistem. Teliti, adaptif terhadap teknologi baru, dan senang memecahkan masalah.",
  ],
};

export const experience = [
  {
    company: "Badan Gizi Nasional",
    role: "Staff IT · ASN PPPK",
    place: "Jakarta Pusat",
    period: "Apr 2025 — Sekarang",
    points: [
      "Merancang, membangun, dan memelihara Sistem Informasi Kepegawaian (HRIS) melalui Portal Biro SDMO.",
      "Memberikan dukungan teknis IT: identifikasi dan penanganan kendala aplikasi serta kebutuhan operasional pengguna.",
      "Mengelola, memvalidasi, dan mengolah data kepegawaian skala nasional untuk administrasi dan monitoring SDM.",
      "Mengembangkan database, fitur, dan API untuk integrasi antar aplikasi internal dan sistem K/L terkait.",
      "Melaksanakan QA testing, verifikasi fungsionalitas, dan dukungan UAT.",
      "Menerapkan pengelolaan hak akses serta perlindungan data pegawai sesuai ketentuan.",
    ],
  },
  {
    company: "PT Baris Fikri Mulia Industries (BFMI)",
    role: "IT Programmer",
    place: "Purwakarta, Jawa Barat",
    period: "Jul 2023 — Apr 2025",
    points: [
      "Merancang dan mengimplementasikan ERP terintegrasi untuk pabrik garmen.",
      "Mengembangkan modul produksi, QC, pemantauan lini produksi, inventaris, jadwal staf, serta pelacakan pengiriman.",
      "Mengotomatisasi laporan harian untuk efisiensi dan akurasi data.",
    ],
  },
  {
    company: "PHPMU.com",
    role: "Freelancer",
    place: "Cipayung, Jakarta Timur",
    period: "Jul 2019 — Des 2025",
    points: [
      "Mengerjakan proyek-proyek pengembangan web sesuai kompetensi.",
      "Menjual produk aplikasi buatan sendiri dengan lisensi open source.",
    ],
  },
  {
    company: "SMK Prestasi Prima",
    role: "Guru RPL",
    place: "Cipayung, Jakarta Timur",
    period: "Jul 2019 — Jul 2023",
    points: [
      "Mengampu Basis Data, Pemrograman Web & Perangkat Bergerak, Pemodelan Perangkat Lunak, dan PBO.",
      "Project Based Learning dengan PHP, Java, C#, Python, JavaScript, SQL dan NoSQL.",
      "Membimbing proyek web, desktop, dan mobile dengan Laravel, CodeIgniter, Spring, Express JS, dan Flutter.",
      "Implementasi REST API internal maupun pihak ketiga (Payment Gateway, WhatsApp Gateway).",
    ],
  },
];

export const education = {
  school: "Universitas Indraprasta PGRI",
  degree: "S1 Teknik Informatika",
  place: "Jakarta Timur",
  period: "2013 — 2017",
  gpa: "3.65",
};

// icon: nama ikon dari lucide.dev (mis. "Code2", "Server", "Palette")
export const skills = [
  { group: "Bahasa Pemrograman", icon: "Code2", items: ["PHP", "JavaScript", "Python", "Java", "C#", "C++", "Visual Basic", "SQL"] },
  { group: "Framework", icon: "Layers", items: ["CodeIgniter", "Laravel", "Express JS", "Spring", "Flutter"] },
  { group: "Database & Integrasi", icon: "Database", items: ["MySQL", "NoSQL", "REST API", "Payment Gateway", "WhatsApp Gateway"] },
  { group: "Networking & Infrastruktur", icon: "Server", items: ["Networking", "Server", "Infrastruktur IT", "Troubleshooting", "Dukungan Teknis IT"] },
  { group: "Desain & Multimedia", icon: "Palette", items: ["Adobe Photoshop", "Edit Foto", "Desain Grafis"] },
  { group: "Kualitas & Kolaborasi", icon: "ShieldCheck", items: ["QA Testing", "UAT", "Teamwork", "Time Management", "Fast Learner"] },
];

// Teks yang berganti-ganti di judul hero
export const rotatingWords = ["sistem informasi", "aplikasi web", "REST API", "aplikasi mobile", "dashboard data"];

// Daftar yang berjalan (marquee) di bawah hero
export const marquee = ["PHP", "CodeIgniter", "Laravel", "JavaScript", "Python", "MySQL", "REST API", "Flutter", "Express JS", "Java", "Networking", "Server", "Photoshop", "QA Testing"];

// category: "instansi" | "perusahaan" | "pendidikan" | "pribadi"
export const projects = [
  {
    slug: "portal-biro-sdmo",
    name: "Portal Biro SDMO",
    client: "Badan Gizi Nasional",
    category: "instansi",
    year: "2025",
    release: "1 Agustus 2025",
    summary:
      "Sistem Informasi Kepegawaian (HRIS) untuk pengelolaan data, administrasi, monitoring, dan layanan kepegawaian di lingkungan Badan Gizi Nasional.",
    description: [
      "Portal Biro SDMO adalah HRIS internal Badan Gizi Nasional yang menjadi pusat data dan layanan kepegawaian skala nasional.",
      "Saya terlibat sejak perancangan hingga pemeliharaan: membangun fitur, mengelola database, mengembangkan API untuk integrasi dengan sistem kementerian/lembaga lain, serta mendampingi QA dan UAT.",
    ],
    role: "Perancang & pengembang utama",
    stack: ["CodeIgniter 4", "MySQL", "REST API", "Role-based Access"],
    links: [{ label: "birosdmo.bgn.go.id", url: "https://birosdmo.bgn.go.id/" }],
    repo: "Private · GitLab Pusdatin BGN",
    images: [{ src: "/projects/birosdmo-1.jpg", w: 844, h: 427 }],
    featured: true,
  },
  {
    slug: "sim-garment-bfmi",
    name: "SIM Garment & Company Profile",
    client: "PT Baris Fikri Mulia Industries",
    category: "perusahaan",
    year: "2023",
    release: "1 September 2023",
    summary:
      "Sistem Informasi Manajemen garmen yang mengikuti alur proses bisnis pabrik, ditambah website company profile.",
    description: [
      "ERP untuk pabrik garmen yang mencakup manajemen produksi, quality control, pemantauan lini produksi, inventaris, jadwal staf, hingga pelacakan pengiriman.",
      "Laporan harian per lini (sewing, finishing) dibuat otomatis sehingga manajemen bisa memantau target vs aktual tanpa rekap manual.",
    ],
    role: "IT Programmer",
    stack: ["PHP", "MySQL", "Chart Dashboard"],
    links: [
      { label: "bfmi.co.id", url: "https://bfmi.co.id" },
      { label: "sim.bfmi.co.id", url: "https://sim.bfmi.co.id" },
    ],
    repo: "Private · github.com/zonewanz/bfmi",
    images: [
      { src: "/projects/bfmi-1.jpg", w: 651, h: 324 },
      { src: "/projects/bfmi-2.jpg", w: 710, h: 356 },
    ],
    featured: true,
  },
  {
    slug: "alif-montessori-school",
    name: "Sistem Informasi & Website Sekolah",
    client: "Alif Montessori School",
    category: "pendidikan",
    year: "2023",
    release: "1 Oktober 2023",
    summary:
      "Website sekolah, sistem informasi akademik & keuangan, serta portal penerimaan siswa baru.",
    description: [
      "Tiga aplikasi dalam satu ekosistem: website publik sekolah, sistem informasi internal (data siswa, akademik, keuangan), dan portal admission untuk calon siswa.",
    ],
    role: "Fullstack Developer",
    stack: ["PHP", "MySQL", "Web"],
    links: [
      { label: "alifmontessorischool.sch.id", url: "https://alifmontessorischool.sch.id" },
      { label: "amsis", url: "https://amsis.alifmontessorischool.sch.id" },
      { label: "admission", url: "https://admission.alifmontessorischool.sch.id" },
    ],
    repo: "Private · github.com/zonewanz/amsis",
    images: [
      { src: "/projects/alif-1.jpg", w: 661, h: 348 },
      { src: "/projects/alif-2.jpg", w: 726, h: 382 },
    ],
    featured: true,
  },
  {
    slug: "okr-nibras",
    name: "Sistem Informasi OKR",
    client: "PT Fatahillah Anugerah Nibras (NBRS Corp)",
    category: "perusahaan",
    year: "2024",
    release: "1 April 2024",
    summary:
      "Modul OKR (Objective Key Result) sebagai bagian HRIS untuk mengontrol kinerja karyawan.",
    description: [
      "Aplikasi OKR untuk memantau pencapaian kinerja karyawan per departemen, lengkap dengan laporan kinerja individu dan progres departemen.",
    ],
    role: "Fullstack Developer",
    stack: ["PHP", "MySQL", "HRIS"],
    links: [{ label: "nibrasonline.id/okr", url: "http://nibrasonline.id/okr/" }],
    repo: "Private · github.com/zonewanz/okr-nibras",
    images: [
      { src: "/projects/okr-1.jpg", w: 653, h: 289 },
      { src: "/projects/okr-2.jpg", w: 770, h: 334 },
    ],
  },
  {
    slug: "nipos",
    name: "NIPOS — Point of Sales",
    client: "PT Fatahillah Anugerah Nibras (NBRS Corp)",
    category: "perusahaan",
    year: "2023",
    release: "19 Juli 2023 (bergabung)",
    summary:
      "Aplikasi penjualan (POS) untuk jaringan distributor Nibras — saya mengembangkan sejumlah modul fiturnya.",
    description: [
      "NIPOS dipakai jaringan distributor Nibras untuk penjualan, pembelian, retur, dan laporan. Saya ikut membangun modul-modul fitur di versi 3.",
    ],
    role: "Kontributor modul",
    stack: ["PHP", "MySQL", "POS", "Offline Mode"],
    links: [],
    repo: "Private · github.com/zonewanz/nipos",
    images: [
      { src: "/projects/nipos-1.jpg", w: 843, h: 385 },
      { src: "/projects/nipos-2.jpg", w: 738, h: 324 },
    ],
  },
  {
    slug: "phpbi",
    name: "Sistem Informasi & Website Organisasi",
    client: "Perkumpulan Hutanamora Pakpahan dan Boru Indonesia",
    category: "pribadi",
    year: "2022",
    release: "1 Maret 2022",
    summary:
      "Website profil dan sistem keanggotaan untuk organisasi kemasyarakatan PHPBI Jabodetabek.",
    description: [
      "Website publik organisasi beserta panel admin untuk pengelolaan keanggotaan, kegiatan, dan informasi organisasi.",
    ],
    role: "Fullstack Developer",
    stack: ["PHP", "MySQL", "Web"],
    links: [{ label: "hutanamorasejabodetabek.or.id", url: "https://hutanamorasejabodetabek.or.id" }],
    repo: "Private · github.com/zonewanz/punguan",
    images: [
      { src: "/projects/phpbi-1.jpg", w: 731, h: 411 },
      { src: "/projects/phpbi-2.jpg", w: 756, h: 398 },
    ],
  },
  {
    slug: "ppdb-prestasi-prima",
    name: "Sistem PPDB",
    client: "Sekolah Prestasi Prima",
    category: "pendidikan",
    year: "2021",
    release: "1 Oktober 2021",
    summary: "Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) online.",
    description: [
      "Portal pendaftaran siswa baru dengan alur pendaftaran, verifikasi berkas, pembelian dan pembayaran formulir, serta dashboard rekap pendaftar untuk panitia.",
    ],
    role: "Fullstack Developer",
    stack: ["PHP", "MySQL", "Dashboard"],
    links: [{ label: "ppdb.prestasiprima.sch.id", url: "https://ppdb.prestasiprima.sch.id/" }],
    repo: "Private · github.com/zonewanz/PPDB-LOCAL",
    images: [
      { src: "/projects/ppdb-1.jpg", w: 701, h: 394 },
      { src: "/projects/ppdb-2.jpg", w: 723, h: 383 },
    ],
  },
  {
    slug: "beneranikah",
    name: "Beneranikah",
    client: "Proyek pribadi",
    category: "pribadi",
    year: "2022",
    release: "1 Maret 2022",
    summary: "Jasa undangan pernikahan website / digital dengan katalog desain.",
    description: [
      "Layanan undangan digital yang saya bangun sendiri: katalog desain undangan, pemesanan, dan halaman undangan siap dibagikan.",
    ],
    role: "Founder & Developer",
    stack: ["PHP", "MySQL", "Web"],
    links: [{ label: "beneranikah.my.id/katalog", url: "https://beneranikah.my.id/katalog" }],
    repo: "Private · github.com/zonewanz/beneranikah",
    images: [
      { src: "/projects/beneranikah-1.jpg", w: 766, h: 398 },
      { src: "/projects/beneranikah-2.jpg", w: 688, h: 388 },
    ],
  },
  {
    slug: "tabungan-santri",
    name: "Tabungan Santri (Nurul Hayah)",
    client: "Bank Santri Nusantara",
    category: "pendidikan",
    year: "2020",
    release: "1 April 2020",
    summary:
      "Aplikasi tabungan santri yang terintegrasi dengan transaksi harian: tagihan, pembelian, setor & tarik tunai.",
    description: [
      "Aplikasi internet banking sederhana untuk santri dan merchant: saldo, setor/tarik tunai, pembayaran tagihan, dan pembelian di lingkungan pesantren.",
    ],
    role: "Fullstack Developer",
    stack: ["PHP", "MySQL", "Transaksi Keuangan"],
    links: [{ label: "ib.bsn.co.id", url: "https://ib.bsn.co.id/" }],
    repo: "Private · github.com/zonewanz/ib-project",
    images: [
      { src: "/projects/bsn-1.jpg", w: 725, h: 382 },
      { src: "/projects/bsn-2.jpg", w: 709, h: 376 },
    ],
  },
];

export const categories = {
  semua: "Semua",
  instansi: "Instansi",
  perusahaan: "Perusahaan",
  pendidikan: "Pendidikan",
  pribadi: "Organisasi & Pribadi",
};
