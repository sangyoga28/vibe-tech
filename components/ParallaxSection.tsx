"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
    const sectionRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(phoneRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                rotateX: 20,
                scale: 0.9,
                y: -50,
                ease: "none"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="showcase" ref={sectionRef} className="py-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-12 relative z-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-accent leading-tight tracking-tighter">
                                Hardware<br />Redefined.
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                The Vibe Nexus Phone. Not just a device, but a physical extension of your consciousness.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-white/10">
                            <div className="space-y-2">
                                <h4 className="text-white font-bold tracking-tight">V8 Neural Chip</h4>
                                <p className="text-gray-500 text-sm">800 Trillion operations per second. Dedicated AI processing.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-white font-bold tracking-tight">Neural Link 2.0</h4>
                                <p className="text-gray-500 text-sm">Direct interface with Vibe Omni for instant knowledge retrieval.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-white font-bold tracking-tight">Glass Unibody</h4>
                                <p className="text-gray-500 text-sm">Forged from laboratory-grown sapphire for ultimate durability.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-white font-bold tracking-tight">Quantum Battery</h4>
                                <p className="text-gray-500 text-sm">7-day battery life with breakthrough solid-state technology.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-eye text-brand-accent" />
                                The Vision
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                "We believe the future of technology isn't something you carry, but something you become. Vibe Nexus is the first step towards a true synthesis of biology and binary."
                            </p>
                            <p className="text-brand-accent text-xs font-bold mt-4 tracking-widest uppercase">— Sangyoga, CEO</p>
                        </div>
                    </div>

                    <div className="flex-1 relative perspective-[1500px]">
                        <div ref={phoneRef} className="relative w-full max-w-[500px] mx-auto group">
                            <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Image
                                src="/assets/phone_mockup.png"
                                alt="Vibe Nexus"
                                width={500}
                                height={800}
                                className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
