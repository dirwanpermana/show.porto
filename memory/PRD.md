# PRD — Karyaloka

## Problem Statement Asli
Pemilik ide ingin membangun jasa pengerjaan website portfolio untuk membantu pencari kerja / UMKM agar memiliki website sendiri. Pencari kerja mendapat portfolio web berisi pengalaman bekerja, riwayat pendidikan, dan proyek dengan card slider (thumbnail + tombol detail yang membuka image/pdf/ppt/video/link GitHub). UMKM mendapat daftar produk seperti e-commerce. Situs jasa harus modern, menarik, dinamis, interaktif, dianimasi, menampilkan produk template (desainer, marketing, teknik sipil, dll + landing page UMKM), dengan gaya sesuai DESIGN.md (dark, Electric Iris #8052ff, Saffron #ffb829, Deep Verdant #15846e, tipografi display besar, partikel konstelasi, tombol pill).

## Solusi
Landing page satu halaman (bahasa Indonesia) untuk brand **Karyaloka** + backend FastAPI/MongoDB untuk penerimaan lead.

## Arsitektur
- Frontend: React (CRA) + Tailwind + framer-motion + lenis (smooth scroll) + sonner (toast). Font: Clash Display + Satoshi (Fontshare).
- Backend: FastAPI (server.py), MongoDB via MONGO_URL/DB_NAME env. Endpoint: GET /api/, POST /api/leads, GET /api/leads (response tanpa ObjectId mentah).
- Logo & favicon: SVG mark original (spark iris + titik saffron) di public/favicon.svg.

## Section (urut)
1. Nav fixed + blur, menu mobile
2. Hero: particle field canvas, masked line-by-line reveal, kartu template melayang, 2 CTA
3. Marquee bidang (46s, editorial)
4. Audiences bento: Pencari Kerja vs UMKM
5. Template slider (6 template) + modal detail
6. Pratinjau Langsung: browser mock 3D scroll-linked, tab Pencari Kerja (timeline pengalaman, pendidikan, card slider proyek + modal detail dengan link gambar/PDF/video/GitHub) & UMKM (katalog produk + tombol Pesan WhatsApp)
7. Fitur (6 kartu)
8. Proses (4 langkah)
9. Harga (PORTO/UMKM/PRO — harga contoh)
10. FAQ (accordion, 5 item)
11. Lead form (POST /api/leads) + WhatsApp
12. Footer

## Status Implementasi (2026-09-24)
- [x] Semua section di atas dibangun & terverifikasi (desktop 1440 + mobile 390, tanpa overflow-x)
- [x] POST/GET /api/leads terverifikasi curl + form e2e (toast sukses, data masuk DB)
- [x] Modal detail template & proyek berfungsi
- [x] Lenis smooth scroll + scroll-reveals + particle canvas + parallax 3D pratinjau
- [x] 6 template dengan 6 gaya desain berbeda (referensi styles.refero.design): Lumina "Warm cream editorial", Amplify "Deep moss with lime voltage", Blueprint "Midnight atelier serif" (mengikuti file upload: serif Fraunces, nomor bab, tabel penghargaan, giant footer name), Aperture "White gallery wall", Deploy "Typeset terminal on black paper", Etalase "Warm parchment atelier"
- [x] Klik "Lihat Detail" menampilkan pratinjau hasil desain penuh per template (hero, profil+quote+statistik, filosofi, proyek, layanan, penghargaan, testimoni, kontak + giant footer) di dalam frame browser yang bisa di-scroll
- [x] Toggle bahasa ID/EN di nav & footer (persist localStorage) — seluruh copy, data demo, pratinjau template, form, dan toast diterjemahkan
- [x] Konten pratinjau tiap template diperkaya jadi contoh realistis sesuai bidang (persona + karya + metrik + klien + pemberi penghargaan yang masuk akal, dwibahasa)
- [x] Tombol layar penuh (fullscreen/exit) pada pratinjau template — pratinjau memenuhi viewport saat diaktifkan, ikon berubah Minimize, reset saat modal ditutup
- [x] Pratinjau template kini portofolio MULTI-HALAMAN ala dokumen PDF (sheet berpisah + label halaman "03 / 07"): Cover (dengan tombol Unduh CV utk template karier; tombol Pesan utk UMKM) → Tentang (profil+statistik+filosofi) → Pendidikan & Kursus (timeline + kartu sertifikat) → Pengalaman Kerja (baris bernomor) → Proyek (grid dgn hover) → Penghargaan & Testimoni → Kontak (FORM aktif-look: nama/email/pesan/kirim + giant name). UMKM: 5 halaman tanpa CV/sekolah. Animasi reveal per halaman (viewport root = container scroll modal), hover zoom gambar proyek, klik tombol → toast penjelasan
- [x] Konten pendidikan/kursus/pengalaman per bidang: DKV ISI Yogyakarta + Type Design Intensive; UI + Google Ads/Meta Blueprint; UGM + BNSP K3/SAP2000; ISI Fotografi + Lens Culture workshop; ITB + AWS/Scrum — semua dwibahasa

## Catatan Konten
- Persona & karya di pratinjau template (Sasha Mahendra, Bella Kusuma, Aris Wicaksono, Danu Rahardjo, Rizky Ananda, Ibu Sari Wulandari/Dapur Nusantara) adalah CONTOH REALISTIS, bukan orang nyata — ganti dengan data klien asli saat digunakan jualan.
- Tombol Unduh CV & Kirim Pesan di pratinjau bersifat pratinjau (menampilkan toast); CV PDF asli menyusul saat klien kirim filenya.
- Harga paket, nomor WA (6281234567890), dan konten LiveDemo (Raka Pratama, Dapur Nusantara) tetap PLACEHOLDER/CONTOH.

## Backlog / Next
- P0: Ganti harga & nomor WhatsApp asli; domain produksi
- P1: Halaman admin sederhana untuk membaca leads; testimoni asli
- P2: Mini-CMS update mandiri untuk klien; pembayaran (Stripe/Xendit)
