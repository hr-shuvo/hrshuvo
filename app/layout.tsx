import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrshuvo.dev"),
  title: {
    default: "Shuvo — Software Engineer",
    template: "%s | Shuvo",
  },
  description:
    "Full-Stack Software Engineer with 2.5+ years building scalable systems and real products. Creator of Ezdu and Better IELTS. Based in Dhaka.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Product Builder",
    "Next.js",
    "ASP.NET Core",
    "TypeScript",
    "Ezdu",
    "Better IELTS",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Shuvo" }],
  creator: "Shuvo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hrshuvo.dev",
    siteName: "Shuvo",
    title: "Shuvo — Engineer & Founder",
    description:
      "Full-Stack Software Engineer building scalable systems and real products. Creator of Ezdu and Better IELTS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shuvo — Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuvo — Engineer & Founder",
    description:
      "Full-Stack Software Engineer building scalable systems and real products. Creator of Ezdu and Better IELTS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
