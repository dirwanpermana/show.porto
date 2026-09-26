# PRD — show.porto

## Problem Statement Asli
Pemilik ide ingin membangun jasa pengerjaan website portfolio untuk membantu pencari kerja / UMKM agar memiliki website sendiri. Pencari kerja mendapat portfolio web berisi pengalaman bekerja, riwayat pendidikan, dan proyek dengan card slider (thumbnail + tombol detail yang membuka image/pdf/ppt/video/link GitHub). UMKM mendapat daftar produk seperti e-commerce. Situs jasa harus modern, menarik, dinamis, interaktif, dianimasi, menampilkan produk template (desainer, marketing, teknik sipil, dll + landing page UMKM), dengan gaya sesuai DESIGN.md (dark, Electric Iris #8052ff, Saffron #ffb829, Deep Verdant #15846e, tipografi display besar, partikel konstelasi, tombol pill).

## Solusi
Landing page satu halaman (bahasa Indonesia) untuk brand **show.porto** + backend FastAPI/MongoDB untuk penerimaan lead.

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
- [x] Pratinjau template kini SATU HALAMAN KONTINU seperti web sungguhan (tanpa pemisah/label halaman PDF) — section menyatu dengan garis pemisah halus, scroll/swipe bebas di dalam modal via data-lenis-prevent (wheel + trackpad + touch), halaman di belakang tetap terkunci
- [x] Variasi struktur per template mengikuti referensi gaya: cover bervariasi (media full-bleed Blueprint, editorial 2-kolom Lumina, bento statistik Amplify, galeri terpusat Aperture, terminal code Deploy, warm Etalase) + alur section berbeda (Deploy mulai dari Pengalaman; Aperture mulai dari Galeri) + layout proyek berbeda: masonry (Lumina), card slider (Amplify), grid 2-kolom (Blueprint), galeri hover-caption (Aperture), list repot (Deploy), kartu menu + tombol pesan (Etalase)
- [x] LiveDemo (pratinjau pencari kerja & UMKM) didesain ulang: kartu profil dengan avatar ring + status + skill chips, kartu section terpisah, timeline dengan titik bercahaya, kartu proyek dengan overlay gradient + hover zoom, UMKM dengan header gradient + rating bintang 4,9 + badge Best + hover lift
- [x] Konten pendidikan/kursus/pengalaman per bidang: DKV ISI Yogyakarta + Type Design Intensive; UI + Google Ads/Meta Blueprint; UGM + BNSP K3/SAP2000; ISI Fotografi + Lens Culture workshop; ITB + AWS/Scrum — semua dwibahasa

## Catatan Konten
- Persona & karya di pratinjau template (Sasha Mahendra, Bella Kusuma, Aris Wicaksono, Danu Rahardjo, Rizky Ananda, Ibu Sari Wulandari/Dapur Nusantara) adalah CONTOH REALISTIS, bukan orang nyata — ganti dengan data klien asli saat digunakan jualan.
- Tombol Unduh CV & Kirim Pesan di pratinjau bersifat pratinjau (menampilkan toast); CV PDF asli menyusul saat klien kirim filenya.
- Harga paket, nomor WA (6281234567890), dan konten LiveDemo (Raka Pratama, Dapur Nusantara) tetap PLACEHOLDER/CONTOH.

## Backlog / Next
- P1: Halaman FAQ/Fitur khusus UMKM (saat ini nav UMKM → FAQ mengarah ke halaman home)
- P2: Konten LiveDemo tab UMKM disesuaikan lebih lanjut (rating/ongkir masih copy generik)
- P2: Mini-CMS/manual book nyata untuk klien paket Source Code; pembayaran (Stripe/Xendit) jika mau otomatis
- Catatan: Harga sudah final dari user; nomor WA & email sudah asli. Persona template tetap contoh.

## Iterasi 2026-09-26 (Logika Bisnis, Halaman UMKM, Frontend-Only) — DONE & tested (iteration_1.json)
- [x] Kontak asli: WhatsApp 085591197624 (wa.me/6285591197624) & email showporto49@gmail.com (BRAND di data/templates.js) — tampil di lead section, footer, hero UMKM
- [x] Label "UMKM" → "Landing Page UMKM" di seluruh copy; demo UMKM di home = Toko Kain Tenun Jaya (DEMO_STORE + DEMO_PRODUCTS kain)
- [x] Routing HashRouter: `/` (landing gabungan) & `/#/umkm` (halaman Landing Page UMKM: UmkmHero, slider 6 template, "yang kamu dapat", harga UMKM, lead form, back-home). lib/nav.js (useGo + ScrollManager) untuk navigasi antar halaman + scroll ke section
- [x] 6 template UMKM (data/umkmTemplates.js + data/umkmPreviews.js): Aurum (MUA, project nikahan), Sanggar (sewa kebaya), Kadr (fotografer wedding), Tenun (toko kain), Etalase (kuliner, dipindah dari home), Bersih (laundry). Home hanya 5 template portfolio + kartu teaser ke /umkm
- [x] Paket harga 2 grup (PRICING_GROUPS): PORTO Rp150rb (web jadi) / PORTO + Source Code Rp500rb; LANDING Rp600rb / LANDING + Source Code Rp1,5jt. Manual book update mandiri hanya paket Source Code. Storytelling per grup + FAQ diperbarui
- [x] Footer: copyright/"Dibuat dengan presisi"/lang toggle dihapus; kolom Kontak (WA + email) ditambah
- [x] Backend DIHAPUS secara fungsional: frontend tidak memanggil API; backend/server.py hanya stub /api/health agar preview Emergent tetap sehat (boleh dihapus saat pindah GitHub Pages). Form konsultasi → window.open wa.me dengan pesan tersusun
- [x] Siap GitHub Pages: package.json `homepage: "."`, script `yarn deploy` (gh-pages), README berisi langkah deploy; `yarn build` terverifikasi (asset path relatif)
- [x] Archive baru /app/show-porto-project.zip (tanpa node_modules/.env/build)

## Iterasi 2026-09-26 (Rebrand & Copy)
- [x] Logo menjadi wordmark murni "show.porto" (".porto" berwarna iris) — ikon spark dihapus dari nav & footer; favicon spark tetap dipakai di tab browser
- [x] Storytelling seluruh situs ditulis ulang dengan bahasa manusiawi Gen-Z (ID + EN) untuk target pencari kerja & UMKM: hero ("CV PDF itu udah gitu-gitu aja..."), audiences ("CV datar, katalog sepi? Waktunya naik level."), fitur ("Fiturnya komplit, dramanya nol."), proses, harga ("Sekali bayar. Nggak ada biaya siluman."), FAQ, form konsultasi, toast, dan footer tagline "Don't just tell. Show it."
- [x] Badge hero kini menampilkan tagline "Don't just tell. Show it."
