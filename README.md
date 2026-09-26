# show.porto — Don't just tell. Show it.

Website jasa pembuatan **portfolio pencari kerja** dan **landing page UMKM**.
Proyek ini **100% frontend statis** (React) — tidak butuh backend atau database.
Form konsultasi langsung membuka WhatsApp dengan pesan yang sudah tersusun.

## Struktur

```
frontend/            # aplikasi React (CRA + craco + Tailwind + framer-motion + lenis)
  src/pages/         # Landing (/) dan UmkmPage (/#/umkm)
  src/components/    # section UI
  src/data/          # konten: template, preview, paket harga, FAQ
backend/             # stub FastAPI /api/health — hanya untuk preview Emergent, boleh dihapus
```

Kontak bisnis ada di `frontend/src/data/templates.js` → `BRAND` (WhatsApp `085591197624`, email `showporto49@gmail.com`).

## Jalankan lokal

```bash
cd frontend
yarn install
yarn start
```

## Deploy ke GitHub Pages

1. Buat repository di GitHub, misal `show-porto`, lalu push folder proyek ini.
2. Routing sudah memakai `HashRouter` dan `"homepage": "."` sehingga aman di sub-path GitHub Pages
   (contoh URL: `https://<username>.github.io/show-porto/#/umkm`).
3. Deploy:

```bash
cd frontend
yarn deploy      # build + push ke branch gh-pages
```

4. Di GitHub → Settings → Pages → Source: branch `gh-pages`, folder `/ (root)`.

Tidak ada environment variable yang dibutuhkan untuk build statis.
