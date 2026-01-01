"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-animate", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero_bg_v2.png"
                    alt="Vibe Tech Background"
                    fill
                    className="object-cover scale-110 opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/50 to-[#050507] z-10" />
                <div className="absolute inset-0 bg-radial-vignette z-10 pointer-events-none" />
            </div>

            <div className="container relative z-20 text-center px-4">
                <div ref={textRef}>
                    <div className="hero-animate inline-block px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(41,151,255,0.2)]">
                        The Future is Here
                    </div>
                    <h1 className="hero-animate text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Vibe<br />Technologies.
                    </h1>
                    <p className="hero-animate text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
                        Pioneering the next generation of neural interfaces. <br className="hidden md:block" />
                        Led by visionary Sangyoga.
                    </p>
                    <div className="hero-animate flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/products" className="btn-primary">
                            Our Products
                        </Link>
                        <a href="https://www.youtube.com/@sangyoga2434" target="_blank" className="btn-outline flex items-center gap-3">
                            <i className="fa-brands fa-youtube" /> Watch Keynote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
