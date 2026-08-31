import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cvmuhamadalharis.my.id"),

  title: {
    default: "Muhamad Al Haris | Graphic Designer & Vibe Coder",
    template: "%s | Muhamad Al Haris",
  },

  description:
    "Portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, mahasiswa Pendidikan Agama Islam, dan pengembang project digital.",

  keywords: [
    "Muhamad Al Haris",
    "Muhamad Al Haris Portfolio",
    "Graphic Designer",
    "Vibe Coder",
    "Web Developer",
    "UI Design",
    "Graphic Design",
    "Portfolio",
  ],

  authors: [
    {
      name: "Muhamad Al Haris",
    },
  ],

  creator: "Muhamad Al Haris",

  alternates: {
    canonical: "https://cvmuhamadalharis.my.id",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cvmuhamadalharis.my.id",
    siteName: "Muhamad Al Haris",
    title: "Muhamad Al Haris | Graphic Designer & Vibe Coder",
    description:
      "Portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, dan pengembang project digital.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhamad Al Haris | Graphic Designer & Vibe Coder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhamad Al Haris | Graphic Designer & Vibe Coder",
    description:
      "Portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, dan pengembang project digital.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}