import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ParticleBackground from "@/components/ParticleBackground";
import ToastNotification from "@/components/ToastNotification";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vibe Technologies | Intelligence, Refined",
  description: "Pioneering the next generation of neural interfaces. Led by visionary Sangyoga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased bg-[#050507] text-white">
        <ParticleBackground />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <ToastNotification />
      </body>
    </html>
  );
}
