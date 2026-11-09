# Portfolio Riswan Hermawan

Next.js (App Router) + Tailwind CSS v4, tanpa database. Semua isi ada di `data/site.js`.

## Jalankan lokal
    npm install
    npm run dev        # buka http://localhost:3000

## Deploy ke Vercel
1. Push folder ini ke repo GitHub.
2. vercel.com → Add New → Project → pilih repo → Deploy (preset Next.js terdeteksi otomatis).

## Mengubah isi
- Teks, pengalaman, keahlian, proyek → `data/site.js`
- Screenshot proyek → `public/projects/` (tulis `w` & `h` sesuai ukuran gambar)
- Foto profil → `public/profile.jpg`
- CV yang bisa diunduh → `public/CV_Riswan_Hermawan.pdf`
- Warna & font → blok `@theme` di `app/globals.css` (otomatis jadi class Tailwind: `bg-accent`, `text-mute`, `font-display`, dst.)
- Komponen dasar (tombol, chip, judul section) → `components/ui.js`
- Teks terminal di hero → `components/Terminal.js` (array SCRIPT)
- Kata yang berganti di judul hero, daftar berjalan, kemampuan → `data/site.js` (`rotatingWords`, `marquee`, `skills`)
- Ikon kemampuan → lucide.dev, daftarkan di `components/SkillIcon.js`

## Struktur halaman
/                 Beranda
/tentang          Profil, pengalaman, pendidikan, keahlian
/proyek           Semua proyek + filter kategori
/proyek/[slug]    Detail proyek (galeri, peran, teknologi, link)
/kontak           Kontak + form (membuka aplikasi email)
