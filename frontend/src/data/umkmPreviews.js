const U = (id, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const UMKM_PREVIEWS = {
    aurum: {
        cv: false,
        cover: "media",
        projectLayout: "gallery",
        flow: ["about", "works", "trust", "contact"],
        title: { id: "Cantik di Hari Paling Penting.", en: "Beautiful on Your Biggest Day." },
        profile: {
            name: "Aurum Beauty",
            role: { id: "Makeup Artist · Nadia Aurum", en: "Makeup Artist · Nadia Aurum" },
            quote: {
                id: "Riasan terbaik itu yang bikin kamu tetap kelihatan seperti dirimu — versi paling bercahaya.",
                en: "The best makeup makes you look like yourself — the most radiant version.",
            },
            img: U("1487412720507-e7ab37603c6f", 900),
            stats: [
                { n: "180+", l: { id: "Pengantin", en: "Brides" } },
                { n: "7", l: { id: "Tahun Berkarya", en: "Years Working" } },
                { n: "4,9", l: { id: "Rating Ulasan", en: "Review Rating" } },
            ],
        },
        principles: {
            label: { id: "Filosofi Rias", en: "Makeup Philosophy" },
            items: [
                {
                    t: { id: "Tahan 12 Jam", en: "12-Hour Wear" },
                    d: { id: "Dari akad pagi sampai resepsi malam, tanpa retouch besar.", en: "From morning vows to evening reception, no major retouch." },
                },
                {
                    t: { id: "Skin-First", en: "Skin-First" },
                    d: { id: "Produk hypoallergenic, kulit tetap bernapas.", en: "Hypoallergenic products, skin keeps breathing." },
                },
                {
                    t: { id: "Trial Dulu", en: "Trial First" },
                    d: { id: "Sesi trial biar hari-H nol kejutan.", en: "A trial session so the big day has zero surprises." },
                },
            ],
        },
        works: {
            label: { id: "Project Nikahan", en: "Wedding Projects" },
            sub: {
                id: "Beberapa pengantin yang sudah kami temani — dari adat Jawa sampai intimate garden wedding.",
                en: "A few brides we've accompanied — from Javanese traditional to intimate garden weddings.",
            },
            items: [
                { title: { id: "Akad Adat Jawa — Dinda & Raka", en: "Javanese Vows — Dinda & Raka" }, meta: { id: "Paket Akad + Resepsi", en: "Vows + Reception" }, year: "2025", img: U("1519741497674-611481863552") },
                { title: { id: "Garden Wedding — Kiara", en: "Garden Wedding — Kiara" }, meta: { id: "Soft glam", en: "Soft glam" }, year: "2025", img: U("1606800052052-a08af7148866") },
                { title: { id: "Prewedding Studio — Alya", en: "Studio Prewedding — Alya" }, meta: { id: "Natural look", en: "Natural look" }, year: "2024", img: U("1583939003579-730e3918a45a") },
                { title: { id: "Resepsi Ballroom — Tasya", en: "Ballroom Reception — Tasya" }, meta: { id: "Bold glam", en: "Bold glam" }, year: "2024", img: U("1512496015851-a90fb38ba796") },
                { title: { id: "Engagement — Salma", en: "Engagement — Salma" }, meta: { id: "Dewy skin", en: "Dewy skin" }, year: "2024", img: U("1522337660859-02fbefca4702") },
                { title: { id: "Wisuda & Graduation Party", en: "Graduation Party" }, meta: { id: "Paket wisuda", en: "Graduation package" }, year: "2023", img: U("1537633552985-df8429e8048b") },
            ],
        },
        services: {
            label: { id: "Paket Rias", en: "Makeup Packages" },
            items: [
                { t: { id: "Akad / Pemberkatan", en: "Vows / Blessing" }, d: { id: "Rp1,8jt · rias + hairdo + retouch 2 jam.", en: "Rp1.8M · makeup + hairdo + 2h retouch." } },
                { t: { id: "Akad + Resepsi", en: "Vows + Reception" }, d: { id: "Rp3,5jt · 2 look, standby seharian.", en: "Rp3.5M · 2 looks, full-day standby." } },
                { t: { id: "Prewedding", en: "Prewedding" }, d: { id: "Rp1,2jt · 1 look, ikut lokasi.", en: "Rp1.2M · 1 look, on-location." } },
                { t: { id: "Keluarga Pengantin", en: "Bridal Family" }, d: { id: "Rp350rb/orang · min. 3 orang.", en: "Rp350k/person · min. 3 people." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust" },
            items: [
                { year: "2025", name: { id: "Vendor MUA Terfavorit", en: "Favorite MUA Vendor" }, by: "Bridestory Awards" },
                { year: "2024", name: { id: "Sertifikasi Profesional Rias Pengantin", en: "Professional Bridal Makeup Certificate" }, by: "LSP Tata Rias" },
                { year: "2023", name: { id: "Rating 4,9 dari 300+ ulasan", en: "4.9 rating from 300+ reviews" }, by: "Instagram & Google" },
            ],
        },
        testimonials: {
            label: { id: "Kata Pengantin", en: "From the Brides" },
            items: [
                { q: { id: "Riasannya tahan dari akad jam 7 pagi sampai resepsi jam 9 malam — dan aku masih kelihatan aku.", en: "It lasted from 7am vows to 9pm reception — and I still looked like me." }, who: "Dinda Prameswari", role: { id: "Pengantin, Yogyakarta", en: "Bride, Yogyakarta" } },
                { q: { id: "Trial-nya bikin tenang. Hari-H tinggal senyum.", en: "The trial put me at ease. On the day I just smiled." }, who: "Kiara Anindya", role: { id: "Pengantin, Bandung", en: "Bride, Bandung" } },
            ],
        },
        contact: {
            label: { id: "Booking", en: "Booking" },
            heading: { id: "Booking Tanggalmu", en: "Book Your Date" },
            email: "hello@aurumbeauty.id",
            address: { id: "Studio: Jl. Kaliurang KM 6, Yogyakarta — Bisa datang ke lokasi", en: "Studio: Kaliurang KM 6, Yogyakarta — On-location available" },
        },
    },

    sanggar: {
        cv: false,
        cover: "editorial",
        projectLayout: "menu",
        flow: ["about", "works", "trust", "contact"],
        title: { id: "Anggun Tanpa Harus Beli.", en: "Graceful Without Buying." },
        profile: {
            name: "Sanggar Kebaya Ratih",
            role: { id: "Sewa Kebaya & Busana Adat · Ibu Ratih", en: "Kebaya & Traditional Attire Rental · Mrs. Ratih" },
            quote: {
                id: "Setiap kebaya punya cerita. Kami rawat supaya ceritamu jadi yang paling indah.",
                en: "Every kebaya carries a story. We care for them so yours becomes the most beautiful.",
            },
            img: U("1566174053879-31528523f8ae", 900),
            stats: [
                { n: "120+", l: { id: "Koleksi", en: "Pieces" } },
                { n: "XS–XXL", l: { id: "Ukuran", en: "Sizes" } },
                { n: "2.000+", l: { id: "Penyewa", en: "Renters" } },
            ],
        },
        principles: {
            label: { id: "Cara Kami", en: "How We Work" },
            items: [
                { t: { id: "Fitting Gratis", en: "Free Fitting" }, d: { id: "Coba dulu di sanggar, bawa pulang kalau pas.", en: "Try at the studio, take home if it fits." } },
                { t: { id: "Dry-Clean Setiap Sewa", en: "Dry-Cleaned Every Rental" }, d: { id: "Bersih, wangi, dan disetrika rapi.", en: "Clean, fragrant, and neatly pressed." } },
                { t: { id: "Bisa Permak", en: "Alterations Available" }, d: { id: "Penyesuaian minor 1-2 hari.", en: "Minor adjustments in 1-2 days." } },
            ],
        },
        works: {
            label: { id: "Koleksi Sewa", en: "Rental Collection" },
            sub: {
                id: "Harga sewa 3 hari, sudah termasuk dry-clean. Klik pesan untuk cek ketersediaan tanggal.",
                en: "3-day rental price, dry-clean included. Tap order to check date availability.",
            },
            items: [
                { title: { id: "Kebaya Kutubaru Brokat Merah", en: "Red Brocade Kutubaru Kebaya" }, meta: { id: "Rp350.000 · size S-L", en: "Rp350.000 · size S-L" }, year: "3 hari", img: U("1566174053879-31528523f8ae") },
                { title: { id: "Kebaya Modern Payet Ivory", en: "Ivory Sequin Modern Kebaya" }, meta: { id: "Rp450.000 · size M-XL", en: "Rp450.000 · size M-XL" }, year: "3 hari", img: U("1515372039744-b8f02a3ae446") },
                { title: { id: "Set Wisuda Hijau Sage + Kain", en: "Sage Graduation Set + Cloth" }, meta: { id: "Rp275.000 · all size", en: "Rp275.000 · all size" }, year: "3 hari", img: U("1539109136881-3be0616acf4b") },
                { title: { id: "Beskap Pengantin Pria", en: "Groom's Beskap" }, meta: { id: "Rp400.000 · size M-XXL", en: "Rp400.000 · size M-XXL" }, year: "3 hari", img: U("1490481651871-ab68de25d43d") },
                { title: { id: "Kebaya Encim Bordir Pastel", en: "Pastel Embroidered Encim Kebaya" }, meta: { id: "Rp300.000 · size S-XL", en: "Rp300.000 · size S-XL" }, year: "3 hari", img: U("1522673607200-164d1b6ce486") },
                { title: { id: "Paket Keluarga (4 set)", en: "Family Package (4 sets)" }, meta: { id: "Rp1.100.000 · seragam", en: "Rp1.100.000 · matching" }, year: "3 hari", img: U("1469334031218-e382a71b716b") },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                { t: { id: "Sewa Harian", en: "Daily Rental" }, d: { id: "Wisuda, lamaran, kondangan — 3 hari pemakaian.", en: "Graduation, engagement, parties — 3 days use." } },
                { t: { id: "Paket Pengantin", en: "Bridal Package" }, d: { id: "Kebaya + kain + aksesoris + beskap pasangan.", en: "Kebaya + cloth + accessories + groom's beskap." } },
                { t: { id: "Seragam Keluarga", en: "Family Uniform" }, d: { id: "Warna senada untuk 4-20 orang.", en: "Matching colors for 4-20 people." } },
                { t: { id: "Antar-Jemput", en: "Pickup & Delivery" }, d: { id: "Gratis area kota, luar kota via ekspedisi.", en: "Free in-city, out-of-town via courier." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust" },
            items: [
                { year: "2025", name: { id: "Mitra Resmi 12 WO Yogyakarta", en: "Official Partner of 12 Yogyakarta WOs" }, by: "Wedding Organizer" },
                { year: "2024", name: { id: "UMKM Fashion Binaan", en: "Mentored Fashion UMKM" }, by: "Dinas Koperasi & UKM" },
                { year: "2023", name: { id: "Rating 4,8 dari 600+ ulasan", en: "4.8 rating from 600+ reviews" }, by: "Google Maps" },
            ],
        },
        testimonials: {
            label: { id: "Kata Penyewa", en: "Renter Words" },
            items: [
                { q: { id: "Kebayanya wangi, rapi, dan dipermak pas badan dalam sehari. Wisuda jadi tenang.", en: "The kebaya was fragrant, neat, and altered to fit in a day. Graduation felt calm." }, who: "Nadya Rahma", role: { id: "Wisudawati UGM", en: "UGM Graduate" } },
                { q: { id: "Seragam keluarga 12 orang warnanya kompak semua. Fotonya cakep.", en: "Matching sets for 12 family members, all coordinated. The photos looked great." }, who: "Keluarga Hartono", role: { id: "Paket Keluarga", en: "Family Package" } },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Cek Tanggal & Fitting", en: "Check Dates & Fitting" },
            email: "sewa@sanggarratih.id",
            address: { id: "Jl. Prawirotaman No. 8, Yogyakarta — Buka 09.00-19.00", en: "8 Prawirotaman St., Yogyakarta — Open 09.00-19.00" },
        },
    },

    kadr: {
        cv: false,
        cover: "gallery",
        projectLayout: "masonry",
        flow: ["works", "about", "trust", "contact"],
        title: { id: "Momen yang Tak Terulang.", en: "Moments That Don't Repeat." },
        profile: {
            name: "Kadr Studio",
            role: { id: "Fotografer Wedding & Prewedding · Bimo Sadewa", en: "Wedding & Prewedding Photographer · Bimo Sadewa" },
            quote: {
                id: "Saya tidak mengarahkan pose. Saya menunggu momennya datang — lalu menekan tombol.",
                en: "I don't direct poses. I wait for the moment to arrive — then press the shutter.",
            },
            img: U("1502920917128-1aa500764cbd", 900),
            stats: [
                { n: "240+", l: { id: "Pernikahan", en: "Weddings" } },
                { n: "9", l: { id: "Kota", en: "Cities" } },
                { n: "14 hari", l: { id: "Serah Terima", en: "Delivery" } },
            ],
        },
        principles: {
            label: { id: "Pendekatan", en: "Approach" },
            items: [
                { t: { id: "Candid & Dokumenter", en: "Candid & Documentary" }, d: { id: "Tawa yang asli lebih indah dari pose yang sempurna.", en: "Real laughter beats a perfect pose." } },
                { t: { id: "Dua Fotografer", en: "Two Photographers" }, d: { id: "Sudut pengantin & sudut tamu, tak ada yang terlewat.", en: "The couple's angle & the guests' angle, nothing missed." } },
                { t: { id: "Edit Konsisten", en: "Consistent Edit" }, d: { id: "Tone film hangat di semua foto.", en: "Warm film tone across every photo." } },
            ],
        },
        works: {
            label: { id: "Galeri", en: "Gallery" },
            sub: {
                id: "Prewedding, akad, hingga resepsi — pilih tone yang paling terasa 'kamu'.",
                en: "Prewedding, vows, to reception — pick the tone that feels most like you.",
            },
            items: [
                { title: { id: "Dinda & Raka — Akad", en: "Dinda & Raka — Vows" }, meta: { id: "Yogyakarta", en: "Yogyakarta" }, year: "2025", img: U("1519741497674-611481863552") },
                { title: { id: "Sesi Prewedding Pantai", en: "Beach Prewedding" }, meta: { id: "Gunungkidul", en: "Gunungkidul" }, year: "2025", img: U("1519225421980-715cb0215aed") },
                { title: { id: "Detail Cincin", en: "Ring Details" }, meta: { id: "Studio", en: "Studio" }, year: "2024", img: U("1465495976277-4387d4b0b4c6") },
                { title: { id: "Resepsi Outdoor", en: "Outdoor Reception" }, meta: { id: "Bandung", en: "Bandung" }, year: "2024", img: U("1511285560929-80b456fea0bc") },
                { title: { id: "Alya & Dimas — Garden", en: "Alya & Dimas — Garden" }, meta: { id: "Bogor", en: "Bogor" }, year: "2024", img: U("1537633552985-df8429e8048b") },
                { title: { id: "Salma — Engagement", en: "Salma — Engagement" }, meta: { id: "Jakarta", en: "Jakarta" }, year: "2023", img: U("1606800052052-a08af7148866") },
            ],
        },
        services: {
            label: { id: "Paket Sesi", en: "Session Packages" },
            items: [
                { t: { id: "Prewedding", en: "Prewedding" }, d: { id: "Rp2,5jt · 4 jam, 1 lokasi, 60 foto edit.", en: "Rp2.5M · 4h, 1 location, 60 edited photos." } },
                { t: { id: "Akad / Pemberkatan", en: "Vows / Blessing" }, d: { id: "Rp3,5jt · 6 jam, 2 fotografer.", en: "Rp3.5M · 6h, 2 photographers." } },
                { t: { id: "Full Day Wedding", en: "Full Day Wedding" }, d: { id: "Rp7,5jt · 12 jam, album cetak 20 halaman.", en: "Rp7.5M · 12h, 20-page printed album." } },
                { t: { id: "Video Highlight", en: "Highlight Video" }, d: { id: "+Rp3jt · 3-5 menit sinematik.", en: "+Rp3M · 3-5 min cinematic." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust" },
            items: [
                { year: "2025", name: { id: "Top 10 Wedding Photographer Jawa", en: "Top 10 Java Wedding Photographers" }, by: "Bridestory" },
                { year: "2024", name: { id: "Featured — Junebug Weddings", en: "Featured — Junebug Weddings" }, by: "Junebug" },
                { year: "2023", name: { id: "Rating 5,0 dari 180 ulasan", en: "5.0 rating from 180 reviews" }, by: "Google Maps" },
            ],
        },
        testimonials: {
            label: { id: "Kata Klien", en: "Client Words" },
            items: [
                { q: { id: "Kami hampir nggak sadar ada fotografer, tapi hasilnya nangkep semua momen.", en: "We barely noticed the photographer, yet every moment got captured." }, who: "Dinda & Raka", role: { id: "Akad, Yogyakarta", en: "Vows, Yogyakarta" } },
                { q: { id: "Tone-nya konsisten dan hangat, albumnya kami pajang di ruang tamu.", en: "The tone is consistent and warm — the album sits in our living room." }, who: "Alya & Dimas", role: { id: "Garden Wedding", en: "Garden Wedding" } },
            ],
        },
        contact: {
            label: { id: "Booking", en: "Booking" },
            heading: { id: "Amankan Tanggalmu", en: "Secure Your Date" },
            email: "book@kadr.studio",
            address: { id: "Base Yogyakarta — melayani seluruh Indonesia", en: "Based in Yogyakarta — serving all of Indonesia" },
        },
    },

    tenun: {
        cv: false,
        cover: "bento",
        projectLayout: "menu",
        flow: ["about", "works", "trust", "contact"],
        title: { id: "Kain Berkualitas, Harga Pasar.", en: "Quality Fabric, Market Prices." },
        profile: {
            name: "Toko Kain Tenun Jaya",
            role: { id: "Toko Kain Grosir & Ecer · Pak Hendra", en: "Wholesale & Retail Fabric Store · Mr. Hendra" },
            quote: {
                id: "Tiga generasi jualan kain di pasar yang sama. Sekarang katalognya bisa dibuka dari HP.",
                en: "Three generations selling fabric at the same market. Now the catalog opens from your phone.",
            },
            img: U("1604176354204-9268737828e4", 900),
            stats: [
                { n: "300+", l: { id: "Jenis Kain", en: "Fabric Types" } },
                { n: "35", l: { id: "Tahun Berdiri", en: "Years Running" } },
                { n: "500+", l: { id: "Penjahit Mitra", en: "Tailor Partners" } },
            ],
        },
        principles: {
            label: { id: "Kenapa Tenun Jaya", en: "Why Tenun Jaya" },
            items: [
                { t: { id: "Potong Sesuai Kebutuhan", en: "Cut to Order" }, d: { id: "Mulai 0,5 meter, harga tetap per meter.", en: "From 0.5 meter, same per-meter price." } },
                { t: { id: "Harga Grosir Terbuka", en: "Open Wholesale Pricing" }, d: { id: "Beli 1 roll langsung harga penjahit.", en: "Buy a roll, get tailor pricing." } },
                { t: { id: "Kirim Sampel", en: "Swatch Samples" }, d: { id: "Minta potongan sampel gratis via WhatsApp.", en: "Free swatch samples via WhatsApp." } },
            ],
        },
        works: {
            label: { id: "Katalog Kain", en: "Fabric Catalog" },
            sub: {
                id: "Harga per meter, stok update tiap pagi. Klik pesan — tulis warna & panjang yang kamu mau.",
                en: "Per-meter prices, stock updated every morning. Tap order — write the color & length you want.",
            },
            items: [
                { title: { id: "Katun Jepang Motif", en: "Japanese Printed Cotton" }, meta: { id: "Rp45.000/m · 30 motif", en: "Rp45.000/m · 30 prints" }, year: "Ready", img: U("1558618666-fcd25c85cd64") },
                { title: { id: "Linen Look Polos", en: "Plain Linen Look" }, meta: { id: "Rp38.000/m · 18 warna", en: "Rp38.000/m · 18 colors" }, year: "Ready", img: U("1528114039593-4366cc08227d") },
                { title: { id: "Brokat Prancis Premium", en: "Premium French Brocade" }, meta: { id: "Rp185.000/m · kebaya", en: "Rp185.000/m · kebaya" }, year: "Ready", img: U("1620799140408-edc6dcb6d633") },
                { title: { id: "Batik Cap Tulis Solo", en: "Solo Hand-Stamped Batik" }, meta: { id: "Rp120.000/2m · kain jadi", en: "Rp120.000/2m · finished cloth" }, year: "Ready", img: U("1610701596007-11502861dcfa") },
                { title: { id: "Satin Silk Roll", en: "Satin Silk Roll" }, meta: { id: "Rp1.450.000/roll 50m", en: "Rp1.450.000/50m roll" }, year: "Grosir", img: U("1595777457583-95e059d581b8") },
                { title: { id: "Kain Seragam Drill", en: "Drill Uniform Fabric" }, meta: { id: "Rp32.000/m · min. 20m", en: "Rp32.000/m · min. 20m" }, year: "Grosir", img: U("1594938298603-c8148c4dae35") },
            ],
        },
        services: {
            label: { id: "Layanan Toko", en: "Store Services" },
            items: [
                { t: { id: "Ecer Per Meter", en: "Retail Per Meter" }, d: { id: "Datang ke toko atau pesan via WA, dikirim hari itu.", en: "Visit the store or order via WA, shipped same day." } },
                { t: { id: "Grosir Roll", en: "Wholesale Rolls" }, d: { id: "Harga khusus konveksi & penjahit.", en: "Special pricing for garment makers & tailors." } },
                { t: { id: "Rekomendasi Penjahit", en: "Tailor Referral" }, d: { id: "Kami kenalkan ke 500+ penjahit mitra.", en: "We connect you with 500+ partner tailors." } },
                { t: { id: "Kirim Seluruh Indonesia", en: "Nationwide Shipping" }, d: { id: "Ekspedisi reguler & kargo untuk roll.", en: "Regular courier & cargo for rolls." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust" },
            items: [
                { year: "2025", name: { id: "Toko Kain Terlengkap Pasar Beringharjo", en: "Most Complete Fabric Store, Beringharjo Market" }, by: "Paguyuban Pedagang" },
                { year: "2024", name: { id: "Supplier Resmi 40 Konveksi", en: "Official Supplier to 40 Garment Makers" }, by: "Mitra Konveksi" },
                { year: "2023", name: { id: "Rating 4,8 dari 900+ ulasan", en: "4.8 rating from 900+ reviews" }, by: "Google Maps" },
            ],
        },
        testimonials: {
            label: { id: "Kata Pelanggan", en: "Customer Words" },
            items: [
                { q: { id: "Minta sampel via WA, sore sampai. Beli 2 roll, harganya jujur.", en: "Asked for swatches via WA, arrived that afternoon. Bought 2 rolls, honest pricing." }, who: "Bu Wati", role: { id: "Konveksi Seragam Sekolah", en: "School Uniform Maker" } },
                { q: { id: "Katun Jepangnya adem, motifnya selalu ada yang baru tiap bulan.", en: "The Japanese cotton is breezy, and there are new prints every month." }, who: "Rina Kartika", role: { id: "Penjahit Rumahan", en: "Home Tailor" } },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Pesan Kain Sekarang", en: "Order Fabric Now" },
            email: "order@tenunjaya.id",
            address: { id: "Pasar Beringharjo Los 12-14, Yogyakarta — Buka 08.00-17.00", en: "Beringharjo Market Stall 12-14, Yogyakarta — Open 08.00-17.00" },
        },
    },

    bersih: {
        cv: false,
        cover: "warm",
        projectLayout: "slider",
        flow: ["about", "works", "trust", "contact"],
        title: { id: "Cucian Beres, Kamu Santai.", en: "Laundry Done, You Relax." },
        profile: {
            name: "Bersih Laundry",
            role: { id: "Laundry Antar-Jemput · Kak Dito", en: "Pickup Laundry · Dito" },
            quote: {
                id: "Kamu fokus kerja dan kuliah. Cucian, setrikaan, sepatu — biar kami yang urus.",
                en: "You focus on work and school. Laundry, ironing, shoes — we've got it.",
            },
            img: U("1545173168-9f1947eebb7f", 900),
            stats: [
                { n: "24 jam", l: { id: "Selesai Reguler", en: "Regular Turnaround" } },
                { n: "3 km", l: { id: "Gratis Jemput", en: "Free Pickup" } },
                { n: "12rb+", l: { id: "Kilo per Bulan", en: "Kilos per Month" } },
            ],
        },
        principles: {
            label: { id: "Standar Kami", en: "Our Standards" },
            items: [
                { t: { id: "Dipisah Per Pelanggan", en: "Separated Per Customer" }, d: { id: "Cucianmu nggak pernah dicampur orang lain.", en: "Your laundry never mixes with anyone else's." } },
                { t: { id: "Deterjen Hypoallergenic", en: "Hypoallergenic Detergent" }, d: { id: "Aman untuk kulit bayi dan sensitif.", en: "Safe for baby and sensitive skin." } },
                { t: { id: "Tracking via WA", en: "WA Tracking" }, d: { id: "Notif saat dijemput, dicuci, dan diantar.", en: "Updates on pickup, washing, and delivery." } },
            ],
        },
        works: {
            label: { id: "Layanan & Harga", en: "Services & Prices" },
            sub: {
                id: "Harga transparan per kilo atau per item. Pesan jemput, kurir datang dalam 1 jam.",
                en: "Transparent per-kilo or per-item pricing. Request a pickup, courier arrives within the hour.",
            },
            items: [
                { title: { id: "Cuci Kering Setrika", en: "Wash, Dry & Iron" }, meta: { id: "Rp7.000/kg · reguler 24 jam", en: "Rp7.000/kg · 24h regular" }, year: "Min. 3 kg", img: U("1517677208171-0bc6725a3e60") },
                { title: { id: "Express 6 Jam", en: "6-Hour Express" }, meta: { id: "Rp12.000/kg", en: "Rp12.000/kg" }, year: "Min. 2 kg", img: U("1582735689369-4fe89db7114c") },
                { title: { id: "Setrika Saja", en: "Iron Only" }, meta: { id: "Rp5.000/kg", en: "Rp5.000/kg" }, year: "Min. 3 kg", img: U("1604335399105-a0c585fd81a1") },
                { title: { id: "Cuci Sepatu", en: "Shoe Cleaning" }, meta: { id: "Rp35.000/pasang", en: "Rp35.000/pair" }, year: "2-3 hari", img: U("1489274495757-95c7c837b101") },
                { title: { id: "Bed Cover & Selimut", en: "Bed Cover & Blanket" }, meta: { id: "Rp25.000/item", en: "Rp25.000/item" }, year: "2 hari", img: U("1478146896981-b80fe463b330") },
            ],
        },
        services: {
            label: { id: "Area & Cara Pesan", en: "Coverage & How to Order" },
            items: [
                { t: { id: "Antar-Jemput", en: "Pickup & Delivery" }, d: { id: "Gratis radius 3 km, +Rp5rb sampai 7 km.", en: "Free within 3 km, +Rp5k up to 7 km." } },
                { t: { id: "Langganan Bulanan", en: "Monthly Plan" }, d: { id: "Rp250rb/40 kg, jemput 2x seminggu.", en: "Rp250k/40 kg, pickup twice a week." } },
                { t: { id: "Kos & Kantor", en: "Dorms & Offices" }, d: { id: "Harga khusus untuk 10+ pelanggan satu alamat.", en: "Special rates for 10+ customers at one address." } },
                { t: { id: "Bayar Fleksibel", en: "Flexible Payment" }, d: { id: "Tunai, QRIS, transfer — saat antar.", en: "Cash, QRIS, transfer — on delivery." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust" },
            items: [
                { year: "2025", name: { id: "Laundry Terpercaya Area Kampus", en: "Most Trusted Laundry in the Campus Area" }, by: "Komunitas Kos Yogyakarta" },
                { year: "2024", name: { id: "Sertifikat Higienis Usaha Jasa", en: "Hygienic Service Business Certificate" }, by: "Dinas Kesehatan" },
                { year: "2023", name: { id: "Rating 4,9 dari 1.400+ ulasan", en: "4.9 rating from 1,400+ reviews" }, by: "Google Maps" },
            ],
        },
        testimonials: {
            label: { id: "Kata Pelanggan", en: "Customer Words" },
            items: [
                { q: { id: "Chat WA jam 8, dijemput jam 9, besok pagi udah balik wangi. Rutinitas mingguan aku sekarang.", en: "WA at 8, picked up at 9, back fresh next morning. It's my weekly routine now." }, who: "Farah Nabila", role: { id: "Mahasiswa, Kos Pogung", en: "Student, Pogung" } },
                { q: { id: "Langganan buat kantor 15 orang, hemat waktu semua orang.", en: "A plan for our 15-person office — saves everyone time." }, who: "Yoga Prasetya", role: { id: "HR, Startup Lokal", en: "HR, Local Startup" } },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Jemput Sekarang", en: "Request Pickup" },
            email: "halo@bersihlaundry.id",
            address: { id: "Jl. Pogung Baru No. 21, Yogyakarta — Buka 07.00-21.00", en: "21 Pogung Baru St., Yogyakarta — Open 07.00-21.00" },
        },
    },
};
