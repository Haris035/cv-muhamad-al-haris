import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cvmuhamadalharis.my.id"),

  title: "Muhamad Al Haris | Graphic Designer & Vibe Coder",

  description:
    "Website portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, dan mahasiswa Pendidikan Agama Islam.",

  openGraph: {
    title: "Muhamad Al Haris | Graphic Designer & Vibe Coder",

    description:
      "Portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, dan mahasiswa Pendidikan Agama Islam.",

    url: "https://cvmuhamadalharis.my.id",

    siteName: "Muhamad Al Haris",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og-image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhamad Al Haris — Graphic Designer & Vibe Coder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhamad Al Haris | Graphic Designer & Vibe Coder",

    description:
      "Portfolio pribadi Muhamad Al Haris — Graphic Designer, Vibe Coder, dan mahasiswa Pendidikan Agama Islam.",

    images: ["/og-image/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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