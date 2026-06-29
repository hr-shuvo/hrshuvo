import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://hrshuvo.dev"),
  title: {
    default: "Shuvo — Software Engineer & Product Builder",
    template: "%s | Shuvo",
  },
  description:
    "Full-Stack Software Engineer with 2.5+ years building scalable systems and real products. Creator of Ezdu and Better IELTS. Based in Dhaka.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Product Builder",
    "System Architect",
    "Next.js",
    "ASP.NET Core",
    "TypeScript",
    "Ezdu",
    "Better IELTS",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Md Harun Or Rashid Shuvo" }],
  creator: "Md Harun Or Rashid Shuvo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hrshuvo.dev",
    siteName: "Shuvo",
    title: "Shuvo — Software Engineer & Product Builder",
    description:
      "Full-Stack Software Engineer building scalable systems and real products. Creator of Ezdu and Better IELTS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shuvo — Software Engineer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuvo — Software Engineer & Product Builder",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Flash-free dark mode: runs before first paint, adds .dark class to <html> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(t==='light'){document.documentElement.classList.remove('dark')}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
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
