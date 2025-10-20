// src/components/navbar.tsx (Pastikan isinya seperti ini)
"use client";

import Link from 'next/link'; // <-- Pastikan diimpor
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },     // <-- href="/about", bukan "about/page.tsx"
    { name: 'Product', href: '/product' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                    ProjectApp
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link // <-- Pastikan menggunakan komponen Link
                                key={link.name}
                                href={link.href} // <-- href yang benar
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;