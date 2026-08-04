# WinniCode Intern Portal - Front-End

Aplikasi web Front-End untuk Sistem Informasi & Portal Magang **WinniCode Intern**. Aplikasi ini menyediakan antarmuka manajemen berbasis peran (*Role-Based Access Control*) untuk Pengguna Publik, Peserta Magang (*Intern*), dan Administrator.

---

## 🚀 Fitur Utama

### 🔐 Autentikasi & Otorisasi
- **Role-Based Access Control (RBAC)**: Pembatasan akses halaman berbasis peran (`admin`, `intern`, `public`) menggunakan *Protected Routes*.
- **JWT & Session Management**: Manajemen Token JWT dengan interceptor otomatis dan penanganan dekripsi token.
- **Keamanan Data**: Enkripsi data lokal (*LocalStorage*) menggunakan AES CryptoJS.

### 👤 User Public
- **Dashboard Public**: Informasi ringkas dan aktivitas umum.
- **Edit Profil**: Pengelolaan profil pengguna publik.
- **Interaksi Berita**: Fitur menyukai (*Like*) dan menyimpan (*Save*) berita.

### 🎓 User Intern (Peserta Magang)
- **Dashboard Intern**: Informasi tugas, aktivitas, dan perkembangan magang.
- **Edit Profil**: Pengelolaan data profil peserta magang.
- **Publikasi Berita**: Fitur menulis dan mengajukan berita (*Write News*).

### 🛠️ User Admin
- **Dashboard Admin**: Ringkasan sistem dan statistik keseluruhan.
- **Kontrol Akun & User Marking**: Pengelolaan status akun dan klasifikasi peserta/pengguna.
- **Moderasi Berita**: Peninjauan berita yang menunggu persetujuan (*Pending News Review*).
- **Manajemen Tugas & Review**: Pengelolaan halaman tugas (*Task Page*) dan peninjauan (*Review Page*).

---

## 🛠️ Tech Stack

| Kategori | Teknologi / Library |
| --- | --- |
| **Core Framework** | [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/vite` |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **HTTP Client** | [Axios](https://axios-http.com/) dengan Custom Interceptor |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **Utilitas & Keamanan** | `crypto-js`, `jwt-decode`, `js-cookie`, `react-toastify` |
| **Code Quality** | [ESLint 9](https://eslint.org/) |

---

## 📂 Arsitektur Projek

Projek ini menerapkan arsitektur berbasis fitur (*Feature-Based Architecture*) untuk menjaga keterbacaan dan pemeliharaan kode secara modular:

```text
src/
├── assets/          # Asset statis (gambar, ikon, font)
├── auth/            # Konfigurasi Axios instance & interceptor autentikasi
├── components/      # Komponen UI global/reusable
├── css/             # Konfigurasi CSS utama & variabel tema
├── features/        # Modul fitur berbasis domain
│   ├── auth/        # Modul Autentikasi (Login, Register, Provider)
│   ├── news/        # Modul Berita & Halaman Utama
│   ├── notFound/    # Halaman 404 Not Found
│   ├── userAdmin/   # Fitur & Halaman khusus Admin
│   ├── userIntern/  # Fitur & Halaman khusus Intern
│   └── userPublic/  # Fitur & Halaman khusus Public
├── routes/          # Konfigurasi rute & Guard/Protected Routes
├── store/           # Global state management (Zustand)
└── utils/           # Helper utilities (Enkripsi, format tanggal, dll)
```

---

## ⚙️ Cara Menggunakan (Getting Started)

### 1. Prasyarat
Pastikan lingkungan Anda telah terinstal:
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
- Paket manajer: `npm`, `yarn`, atau `pnpm`

### 2. Kloning & Instalasi Dependensi
```bash
# Klon repositori ini
git clone <repository-url>

# Masuk ke direktori projek
cd intern-fe

# Instal seluruh dependensi
npm install
```

### 3. Konfigurasi Environment (`.env`)
Salin file `.env.example` menjadi `.env` lalu sesuaikan konfigurasi environment:

```bash
cp .env.example .env
```

Isi variabel pada file `.env`:
```env
# URL Base Backend API
VITE_BE_BASE_URL=http://localhost:5000
BE_BASE_URL=http://localhost:5000

# Secret Key untuk Enkripsi LocalStorage (CryptoJS)
VITE_ENCRYPTION_KEY=secret_key_intern_winnicode_2026
```

### 4. Menjalankan Server Pengembangan
Untuk menjalankan aplikasi dalam mode *development*:

```bash
npm run dev
```
Aplikasi akan berjalan pada `http://localhost:3000` (atau port yang dikonfigurasikan di `vite.config.js`).

---

## 📜 Skrip yang Tersedia

| Command | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan Vite dev server |
| `npm run build` | Melakukan kompilasi kode untuk lingkungan produksi (`dist/`) |
| `npm run preview` | Menjalankan preview lokal dari hasil build produksi |
| `npm run lint` | Menjalankan pemeriksaan kualitas kode dengan ESLint |

---

## 📝 Lisensi

Projek ini dikembangkan untuk keperluan program magang **WinniCode**.
