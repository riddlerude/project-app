import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar"; // Impor komponen Navbar

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Our Company",
    description: "What we stand for",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* 
        Ini adalah bagian yang sebelumnya error.
        Placeholder '...' sudah diganti dengan kode yang benar dari template Next.js.
      */}
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <Navbar /> {/* Navbar yang akan muncul di semua halaman */}
                {children} {/* Konten halaman (page.tsx) akan dirender di sini */}
            </body>
        </html>
    );
}