"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? "hidden" : "";
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const navLinks = [
        { name: "Products", href: "/products" },
        { name: "Vision", href: "/#showcase" },
        { name: "Invest", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#050507]/85 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white" onClick={closeMenu}>
                    Vibe Tech
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/products" className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm">
                        Explore
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-between w-8 h-5 md:hidden z-50 cursor-pointer"
                        aria-label="Toggle navigation"
                    >
                        <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 transform md:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className="text-3xl font-semibold text-white hover:text-[#2997ff] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/products" onClick={closeMenu} className="mt-4 bg-[#2997ff] text-white px-8 py-4 rounded-full text-lg font-medium">
                    Explore Ecosystem
                </Link>
            </div>
        </nav>
    );
}
