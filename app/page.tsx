"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Code2,
  GraduationCap,
  Maximize2,
  Menu,
  Palette,
  Send,
  X,
} from "lucide-react";

import { portfolioItems } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const [portfolioFilter, setPortfolioFilter] = useState<
    "all" | "design" | "coding"
  >("all");

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter(
      (item) => item.category === portfolioFilter
    );
  }, [portfolioFilter]);

  const experiences = [
    {
      title: "Marketing",
      company: "Haris Jaya Tenda",
      period: "2021 – 2023",
      description: [
        "Melakukan promosi dan pemasaran produk tenda",
        "Menjalin hubungan dengan pelanggan dan membantu penjualan",
        "Menangani informasi produk serta kebutuhan pelanggan",
      ],
    },
    {
      title: "Waiter",
      company: "Cali Deli & Madam Ching",
      period: "Juni 2023 – September 2023",
      description: [
        "Melayani pelanggan dan mencatat pesanan",
        "Menjaga kebersihan area kerja",
        "Menangani keluhan pelanggan",
      ],
    },
    {
      title: "Staff Kitchen",
      company: "Zama House",
      period: "Oktober 2023 – Juli 2024",
      description: [
        "Menyiapkan bahan dan membantu proses memasak",
        "Menjaga kebersihan dapur dan kualitas makanan",
        "Mengelola stok bahan baku",
      ],
    },
    {
      title: "Owner / Usaha Percetakan",
      company: "Haris Qalam Print Studio",
      period: "Desember 2024 – Sekarang",
      description: [
        "Mengelola usaha percetakan dari produksi hingga distribusi",
        "Melayani pelanggan dan mengatur pesanan",
        "Melakukan promosi dan pengelolaan operasional usaha",
      ],
    },
  ];

  const education = [
    {
      school: "Universitas Ibn Khaldun Bogor",
      major: "Pendidikan Agama Islam",
      period: "2024 – Sekarang",
    },
    {
      school: "SMK Pelita Ciampea",
      major: "Teknik Komputer dan Jaringan (TKJ)",
      period: "2020 – 2023",
    },
    {
      school: "MTs Sirojul Kamal",
      major: "",
      period: "2017 – 2020",
    },
    {
      school: "SDN Cihideung Udik 02",
      major: "",
      period: "2011 – 2017",
    },
  ];

  const organizations = [
    {
      position: "Anggota Divisi INFOKOM",
      organization: "HIMA PAI UIKA",
      period: "2025 — Sekarang",
      description:
        "Berperan dalam bidang informasi dan komunikasi organisasi, termasuk mendukung penyebaran informasi serta kebutuhan media digital.",
    },
    {
      position: "Anggota Departemen PSDM",
      organization: "LDK Al-Intisyar",
      period: "2025 — Sekarang",
      description:
        "Berperan dalam pengembangan sumber daya manusia, kegiatan kaderisasi, serta mendukung program pengembangan anggota organisasi.",
    },
    {
      position: "Sekretaris",
      organization: "PMII Rayon FAI Kota Bogor",
      period: "2026 — Sekarang",
      description:
        "Bertanggung jawab atas administrasi, dokumentasi, surat-menyurat, dan pengelolaan arsip organisasi untuk mendukung kelancaran program kerja Rayon.",
    },
    {
      position: "Ketua Rohis",
      organization: "SMK Pelita Ciampea",
      period: "2022 — 2023",
      description:
        "Mengkoordinasikan kegiatan kerohanian Islam, mengatur program kerja, serta mengajak anggota aktif dalam kegiatan keagamaan di sekolah.",
    },
    {
      position: "Ketua Pramuka",
      organization: "SMK Pelita Ciampea",
      period: "2022 — 2023",
      description:
        "Memimpin dan mengkoordinasikan kegiatan kepramukaan, pembagian tugas anggota, serta pelaksanaan program kerja organisasi.",
    },
    {
      position: "Humas OSIS",
      organization: "SMK Pelita Ciampea",
      period: "2022 — 2023",
      description:
        "Mendukung komunikasi organisasi, menyampaikan informasi kegiatan, serta membantu membangun hubungan antara OSIS dan lingkungan sekolah.",
    },
  ];

  const skills = [
    {
      name: "Kepemimpinan & Manajemen Tim",
      description:
        "Mengkoordinasikan tim, membagi tugas, serta membantu memastikan pekerjaan berjalan sesuai tujuan.",
    },
    {
      name: "Komunikasi & Hubungan Publik",
      description:
        "Berkomunikasi dengan anggota, pelanggan, maupun pihak lain serta menyampaikan informasi secara efektif.",
    },
    {
      name: "Pemasaran & Kewirausahaan",
      description:
        "Memahami promosi, pelayanan pelanggan, pengelolaan pesanan, dan operasional usaha.",
    },
    {
      name: "Desain & Konten Digital",
      description:
        "Membuat kebutuhan visual dan konten digital untuk mendukung publikasi, informasi, dan personal branding.",
    },
    {
      name: "Manajemen Organisasi",
      description:
        "Mendukung perencanaan kegiatan, koordinasi anggota, pembagian tugas, dan pelaksanaan program kerja.",
    },
    {
      name: "Teknologi & Dasar IT",
      description:
        "Memiliki dasar teknologi informasi dan pengalaman menggunakan teknologi digital untuk mendukung berbagai project.",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =========================
          NAVBAR
      ========================== */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-50 text-xl font-black tracking-tight"
          >
            HARIS<span className="text-blue-500">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href="#home"
              className="text-sm font-medium text-white transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#organization"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Organization
            </a>

            <a
              href="#portfolio"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="#coding"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Coding
            </a>

            <a
              href="#skills"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* DESKTOP CONTACT */}
          <a
            href="#contact"
            className="hidden rounded-full border border-blue-500/50 bg-blue-600/10 px-5 py-2.5 text-sm font-semibold text-blue-400 transition hover:border-blue-400 hover:bg-blue-600 hover:text-white sm:block"
          >
            Let&apos;s Talk
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-500 hover:bg-blue-600 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 lg:hidden ${menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
            }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-white transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#organization"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Organization
            </a>

            <a
              href="#portfolio"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="#coding"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Coding
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-4 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* GLOW EFFECT */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-900/30 blur-[140px]" />

          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-indigo-900/20 blur-[140px]" />
        </div>

        {/* GRID BACKGROUND */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* HERO CONTENT */}
            <div>
              {/* STATUS */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Available for Creative Projects
                </span>
              </div>

              {/* TITLE */}
              <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
                Muhamad
                <br />
                <span className="text-blue-500">Al Haris.</span>
              </h1>

              {/* ROLE */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                  Graphic Designer
                </span>

                <span className="text-blue-500">×</span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                  Vibe Coder
                </span>
              </div>
              {/* MOBILE PROFILE */}
              <div className="mt-10 flex justify-center lg:hidden">
                <div className="relative h-80 w-64 overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-slate-900 shadow-2xl shadow-blue-950/50">
                  <img
                    src="/profile/haris.jpeg"
                    alt="Muhamad Al Haris"
                    className="h-full w-full object-cover object-[center_35%S]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
                      Creative Builder
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      Design × Code
                    </p>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Saya menggabungkan kreativitas visual dan teknologi untuk
                mengubah ide menjadi desain, website, dan produk digital.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {/* PORTFOLIO */}
                <a
                  href="#portfolio"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:bg-blue-500"
                >
                  Lihat Portfolio

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* CONTACT */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold transition hover:border-blue-500/50 hover:bg-white/10"
                >
                  Hubungi Saya

                  <Send size={17} />
                </a>

                {/* DOWNLOAD CV */}
                <a
                  href="/cv/Cv Muhamad Al Haris.jpeg"
                  download="Cv Muhamad Al Haris.jpeg"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/5 px-7 py-4 text-sm font-bold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  Download CV
                </a>
              </div>

              {/* QUICK INFO */}
              <div className="mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-l border-blue-500/40 pl-4">
                  <p className="text-sm font-semibold text-white">
                    Graphic Design
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Visual & Digital Content
                  </p>
                </div>

                <div className="border-l border-blue-500/40 pl-4">
                  <p className="text-sm font-semibold text-white">
                    Vibe Coding
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Website & Web App
                  </p>
                </div>

                <div className="border-l border-blue-500/40 pl-4">
                  <p className="text-sm font-semibold text-white">
                    Creative
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Ideas & Digital Projects
                  </p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="relative mx-auto aspect-square max-w-md">
                {/* MOBILE PROFILE PHOTO */}
                <div className="mb-10 flex justify-center lg:hidden">
                  <div className="relative h-72 w-56 overflow-hidden rounded-[2rem] border border-blue-500/30 bg-slate-900 shadow-2xl shadow-blue-950/40">
                    <img
                      src="/profile/haris.jpeg"
                      alt="Muhamad Al Haris"
                      className="h-full w-full object-cover object-[center_20%]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                        Muhamad Al Haris
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        Graphic Designer × Vibe Coder
                      </p>
                    </div>
                  </div>
                </div>
                {/* OUTER FRAME */}
                <div className="absolute inset-0 rotate-6 rounded-[3rem] border border-blue-500/20 bg-blue-500/5" />

                <div className="absolute inset-4 -rotate-3 rounded-[2.5rem] border border-white/10 bg-white/[0.03]" />

                {/* MAIN CARD */}
                <div className="absolute inset-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-blue-950/50">
                  {/* PHOTO */}
                  <Image
                    src="/profile/haris.jpeg"
                    alt="Muhamad Al Haris"
                    fill
                    priority
                    sizes="(max-width: 1024px) 0vw, 420px"
                    className="object-cover object-[center_35%]"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* BLUE OVERLAY */}
                  <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply" />

                  {/* TEXT */}
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                      Creative Builder
                    </p>

                    <p className="mt-2 text-xl font-black text-white">
                      Design × Code
                    </p>
                  </div>
                </div>

                {/* FLOATING DESIGN CARD */}
                <div className="absolute -left-3 top-20 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
                  <Palette className="text-blue-500" size={22} />

                  <p className="mt-2 text-xs font-bold text-white">
                    Design
                  </p>
                </div>

                {/* FLOATING CODE CARD */}
                <div className="absolute -right-3 bottom-24 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
                  <Code2 className="text-blue-500" size={22} />

                  <p className="mt-2 text-xs font-bold text-white">
                    Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
      {/* =========================
    ABOUT
========================== */}
      <section
        id="about"
        className="border-t border-white/10 bg-white py-24 text-slate-950"
      >
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                  About Me
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Mengenal
                  <br />
                  lebih dekat.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Mahasiswa Pendidikan Agama Islam Universitas Ibn Khaldun Bogor
                  yang aktif dalam organisasi, dakwah kampus, media digital, desain
                  grafis, pengembangan aplikasi, dan kewirausahaan.
                </p>

                <p className="mt-6 leading-8 text-slate-500">
                  Memiliki pengalaman dalam kepemimpinan, manajemen organisasi,
                  pemasaran, serta pengembangan konten dan teknologi digital.
                  Berorientasi pada inovasi, kolaborasi, dan pemanfaatan teknologi
                  untuk memberikan kontribusi positif bagi masyarakat dan pendidikan.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Fokus
                    </p>

                    <p className="mt-2 font-bold">
                      Design & Digital Technology
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Pendidikan
                    </p>

                    <p className="mt-2 font-bold">
                      Pendidikan Agama Islam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================
    EXPERIENCE
========================== */}
      <section
        id="experience"
        className="bg-slate-100 py-24 text-slate-950">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Experience
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Pengalaman kerja
              </h2>
            </div>

            <div className="relative ml-3 border-l-2 border-blue-200 pl-8">
              {experiences.map((experience, index) => (
                <div
                  key={`${experience.company}-${index}`}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-100 bg-blue-600" />

                  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-300 hover:shadow-lg">
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                          {experience.period}
                        </p>

                        <h3 className="mt-2 text-xl font-black">
                          {experience.title}
                        </h3>

                        <p className="mt-1 font-semibold text-slate-500">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Briefcase size={20} />
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {experience.description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      {/* =========================
    EDUCATION
========================== */}
      <section className="bg-white py-24 text-slate-950">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Education
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Pendidikan
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <div
                  key={`${item.school}-${item.period}`}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        {item.period}
                      </p>

                      <h3 className="mt-2 text-lg font-black">
                        {item.school}
                      </h3>

                      {item.major && (
                        <p className="mt-1 text-sm text-slate-500">
                          {item.major}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      {/* =========================
    ORGANIZATION
========================== */}
      <section
        id="organization"
        className="bg-slate-950 py-24 text-white">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
                Organization
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Pengalaman organisasi
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {organizations.map((organization, index) => (
                <div
                  key={`${organization.organization}-${organization.position}`}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-xs font-black tracking-[0.2em] text-blue-500">
                        0{index + 1}
                      </span>

                      <h3 className="mt-4 text-xl font-black">
                        {organization.position}
                      </h3>

                      <p className="mt-1 font-semibold text-slate-300">
                        {organization.organization}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold text-blue-400">
                      {organization.period}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-sm leading-7 text-slate-400">
                      {organization.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      {/* =========================
          WHAT I DO
      ========================== */}
      <section className="bg-slate-100 py-24 text-slate-950">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                What I Do
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Skills that I use
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* DESIGN */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Palette size={27} />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  Graphic Design
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  Membuat desain poster, konten media sosial, branding,
                  publikasi, dan kebutuhan visual digital.
                </p>
              </div>

              {/* CODING */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Code2 size={27} />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  Vibe Coding
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  Membangun website dan aplikasi dengan memanfaatkan teknologi
                  modern serta AI sebagai bagian dari proses kreatif.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================
          PORTFOLIO
      ========================== */}
      {/* =========================
    PORTFOLIO
========================== */}
      <section
        id="portfolio"
        className="bg-slate-950 py-24 text-white"
      >
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* HEADER */}
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
                  Selected Work
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Portfolio
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-400">
                  Kumpulan karya desain grafis dan project digital yang saya
                  kerjakan.
                </p>
              </div>

              {/* FILTER */}
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    id: "all",
                    label: "Semua",
                  },
                  {
                    id: "design",
                    label: "Graphic Design",
                  },
                  {
                    id: "coding",
                    label: "Vibe Coding",
                  },
                ].map((filter) => {
                  const active = portfolioFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() =>
                        setPortfolioFilter(
                          filter.id as "all" | "design" | "coding"
                        )
                      }
                      className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${active
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 bg-white/5 text-slate-400 hover:border-blue-500/40 hover:text-white"
                        }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PROJECT GRID */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredPortfolio.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImage({
                          src: project.image,
                          title: project.title,
                        })
                      }
                      className="group/image relative block h-full w-full cursor-zoom-in"
                      aria-label={`Lihat gambar ${project.title} dalam ukuran penuh`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover/image:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />

                      {/* ZOOM INDICATOR */}
                      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/image:opacity-100">
                        <Maximize2 size={17} />
                      </div>

                      {/* CATEGORY */}
                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md">
                          {project.categoryLabel}
                        </span>
                      </div>

                      {/* CLICK HINT */}
                      <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[10px] font-semibold text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/image:opacity-100">
                        Klik untuk melihat
                      </div>
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-black">
                          {project.title}
                        </h3>

                        {project.year && (
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {project.year}
                          </p>
                        )}
                      </div>

                      {project.category === "design" ? (
                        <Palette
                          size={21}
                          className="shrink-0 text-blue-500"
                        />
                      ) : (
                        <Code2
                          size={21}
                          className="shrink-0 text-blue-500"
                        />
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* LINK */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
                      >
                        Lihat Project

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* EMPTY STATE */}
            {filteredPortfolio.length === 0 && (
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
                <p className="font-semibold text-slate-400">
                  Belum ada project pada kategori ini.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>
      {/* =========================
    VIBE CODING
========================== */}
      <section
        id="coding"
        className="relative overflow-hidden bg-white py-24 text-slate-950"
      >
        <Reveal>
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                  <Code2 size={15} />
                  VIBE CODING
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                  Membangun ide
                  <br />
                  menjadi produk digital.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-500">
                  Saya tertarik mengembangkan website dan aplikasi dengan
                  memanfaatkan teknologi modern. Bagi saya, coding bukan hanya
                  tentang menulis kode, tetapi tentang mengubah ide menjadi
                  sesuatu yang dapat digunakan.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "PostgreSQL",
                    "Prisma",
                    "Vercel",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-3 flex-1 rounded-lg bg-white/5 px-4 py-2 text-xs text-slate-500">
                      prestasipai.my.id
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src="/portfolio/pai-segudang-prestasi.jpeg"
                      alt="PAI Segudang Prestasi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                        Featured Project
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white">
                        PAI Segudang Prestasi
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {/* =========================
    CODING CAPABILITIES
========================== */}
      <section className="bg-slate-100 py-24 text-slate-950">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                My Approach
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Dari ide sampai jadi.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Idea",
                  description:
                    "Memahami masalah dan menentukan ide atau kebutuhan yang ingin dibuat.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "Menyusun struktur halaman dan pengalaman pengguna sebelum masuk ke tahap development.",
                },
                {
                  number: "03",
                  title: "Build",
                  description:
                    "Mengembangkan website menggunakan teknologi yang sesuai dengan kebutuhan project.",
                },
                {
                  number: "04",
                  title: "Deploy",
                  description:
                    "Mempersiapkan project agar dapat digunakan secara online dan melakukan perbaikan setelah deployment.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <span className="text-sm font-black text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      {/* =========================
    CODING CTA
========================== */}
      <section className="bg-slate-950 py-20 text-white">
        <Reveal>
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Code2 className="mx-auto text-blue-500" size={32} />

            <h2 className="mt-6 text-3xl font-black sm:text-4xl">
              Punya ide project?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Saya terbuka untuk berdiskusi mengenai website, aplikasi,
              desain digital, maupun project kreatif lainnya.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Diskusikan Project
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </section>
      {/* =========================
          SKILLS
      ========================== */}
      {/* =========================
    SKILLS
========================== */}
      <section
        id="skills"
        className="bg-slate-100 py-24 text-slate-950"
      >
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Skills
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Kemampuan
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Kombinasi kemampuan organisasi, komunikasi, pemasaran, desain,
                dan teknologi yang saya kembangkan melalui pengalaman kerja,
                organisasi, pendidikan, dan project digital.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {skill.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================
    CONTACT
========================== */}
      <section
        id="contact"
        className="bg-slate-950 py-24 text-white"
      >
        <Reveal>
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

            {/* LABEL */}
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Let&apos;s Connect
            </p>

            {/* TITLE */}
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Let&apos;s work together.
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Have an idea? Let&apos;s talk.
              <br />
              Saya terbuka untuk kolaborasi, project desain,
              website, dan project digital lainnya.
            </p>

            {/* CONTACT BUTTONS */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/62895374670466?text=Halo%20Muhamad%20Al%20Haris%2C%20saya%20tertarik%20berdiskusi%20mengenai%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 sm:w-auto"
              >
                <Send size={17} />
                WhatsApp
              </a>

              {/* EMAIL */}
              <a
                href="mailto:alharismuhamad456@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 sm:w-auto"
              >
                <Send size={17} />
                Email
              </a>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-12 border-t border-white/10 pt-8">

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Find me on
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/kingharis_03?igsi=OTNoYmZzZWNuY2Ez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
                >
                  Instagram
                </a>

                {/* TIKTOK */}
                <a
                  href="https://www.tiktok.com/@kingtampan_?_r=1&_t=ZS-99L6tEqNRjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
                >
                  TikTok
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/muhamad-al-haris-8aa687276?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
                >
                  LinkedIn
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/Haris035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
                >
                  GitHub
                </a>

              </div>
            </div>

          </div>
        </Reveal>
      </section>
      {/* =========================
          FOOTER
      ========================== */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-black">
              HARIS<span className="text-blue-500">.</span>
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Graphic Designer × Vibe Coder
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kingharis_03?igsi=OTNoYmZzZWNuY2Ez"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-500 hover:text-white"
            >
              <span className="text-xs font-bold">IG</span>
            </a>

            <a
              href="mailto:alharismuhamad456@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-500 hover:text-white"
            >
              <Send size={17} />
            </a>
          </div>
        </div>
      </footer>
      {/* =========================
    IMAGE LIGHTBOX
========================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup preview gambar"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-blue-500 hover:bg-blue-600"
          >
            <X size={21} />
          </button>

          {/* IMAGE CONTAINER */}
          <div
            className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[88vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />

            {/* TITLE */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/80 px-5 py-2 text-xs font-semibold text-white backdrop-blur-md">
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}