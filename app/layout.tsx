import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { MusicPlayer } from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

const currentTrack = {
  title: "Coding Beats",
  artist: "Dev Tunes",
  albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
};

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "A blog about technology, programming, and software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <MusicPlayer track={currentTrack} />
      </body>
    </html>
  );
}