import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sonqo Security – Cybersécurité Pays Basque",
  description:
    "Solutions professionnelles de cybersécurité et services informatiques au Pays Basque.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sonqo Security – Cybersécurité Pays Basque",
    description:
      "Solutions professionnelles de cybersécurité et services informatiques au Pays Basque.",
    url: "https://www.sonqosecurity.com",
    siteName: "Sonqo Security",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Sonqo Security",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonqo Security – Cybersécurité Pays Basque",
    description:
      "Solutions professionnelles de cybersécurité et services informatiques au Pays Basque.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
