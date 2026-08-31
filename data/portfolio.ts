export type PortfolioCategory = "design" | "coding";

export type PortfolioItem = {
    id: string;
    title: string;
    category: PortfolioCategory;
    categoryLabel: string;
    description: string;
    image: string;
    tags: string[];
    year?: string;
    link?: string;
};

export const portfolioItems: PortfolioItem[] = [

    {
        id: "design-flyer-organisasi",
        title: "Design Flyer Organisasi",
        category: "design",
        categoryLabel: "Graphic Design",
        description:
            "Membuat desain flyer untuk kebutuhan publikasi organisasi, media sosial, dan penyampaian informasi kegiatan dengan visual yang komunikatif.",
        image: "/portfolio/Desain Flyer Organisasi.jpeg",
        tags: [
            "Graphic Design",
            "Flyer",
            "Social Media",
        ],
        year: "2025",
    },

    {
        id: "design-feed-ucapan",
        title: "Design FEED Ucapan",
        category: "design",
        categoryLabel: "Graphic Design",
        description:
            "Membuat desain feed media sosial untuk kebutuhan ucapan dan publikasi dengan memperhatikan komposisi visual, tipografi, dan identitas desain.",
        image: "/portfolio/Desain Feed Ucapan.jpeg",
        tags: [
            "Visual Design",
            "Social Media",
            "Creative",
        ],
        year: "2025",
    },

    {
        id: "pai-segudang-prestasi",
        title: "PAI Segudang Prestasi",
        category: "coding",
        categoryLabel: "Vibe Coding",
        description:
            "Membangun platform digital untuk menampilkan, melaporkan, dan mengelola prestasi mahasiswa Pendidikan Agama Islam dari proses pengajuan hingga publikasi.",
        image: "/portfolio/pai-segudang-prestasi.jpeg",
        tags: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Vercel",
        ],
        year: "2026",
        link: "https://prestasipai.my.id",
    },

];