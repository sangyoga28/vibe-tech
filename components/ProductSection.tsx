"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useToast } from "@/hooks/useToast";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { showToast } = useToast();

    const products = [
        {
            id: "omni",
            name: "Vibe Omni",
            icon: "/assets/feature_neural.png",
            description: "Our flagship Large Language Model. Capable of reasoning, coding, and creative generation at superhuman speeds.",
            color: "brand-accent",
        },
        {
            id: "flow",
            name: "Vibe Flow",
            icon: "/assets/feature_adaptive.png",
            description: "An adaptive OS that learns your habits. It reorganizes your digital workspace dynamically to match your intent.",
            color: "brand-purple",
        },
        {
            id: "guardian",
            name: "Vibe Guardian",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.973.599-4.459" />
                </svg>
            ),
            description: "Biometric security suite. Your voice, retinal, and neural patterns form an unhackable key for your data.",
            color: "brand-accent",
        },
        {
            id: "connect",
            name: "Vibe Connect",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            ),
            description: "Neural networking protocol. Instant data transfer and shared intelligence across the entire ecosystem.",
            color: "brand-purple",
        },
        {
            id: "studio",
            name: "Vibe Studio",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            ),
            description: "Creative suite powered by generative AI. Sculpt, paint, and compose with the speed of thought.",
            color: "pink-500",
        },
        {
            id: "core",
            name: "Vibe Core",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            description: "High-performance neural processing units. The physical heart of your intelligence ecosystem.",
            color: "green-500",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".product-card");
            cards.forEach((card: any) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                });
            });
        }, containerRef);

        const cards = document.querySelectorAll(".tilt-card");
        cards.forEach((card) => {
            const handleMove = (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                const glow = (card as HTMLElement).querySelector('.card-glow') as HTMLElement;
                if (glow) {
                    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 70%)`;
                    glow.style.opacity = '1';
                }
            };
            const handleLeave = () => {
                (card as HTMLElement).style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                const glow = (card as HTMLElement).querySelector('.card-glow') as HTMLElement;
                if (glow) glow.style.opacity = '0';
            };
            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="products" className="pt-20 pb-10 relative" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">The Ecosystem.</h2>
                    <p className="text-lg text-gray-400">A unified suite of tools designed to amplify human potential.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card tilt-card group relative p-8 rounded-3xl bg-brand-glass border border-brand-border backdrop-blur-xl overflow-hidden transition-all hover:border-white/30 cursor-pointer"
                            onClick={() => showToast(`${product.name} initialized. Accessing neural node...`, "success")}
                        >
                            <div className="card-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className={`w-20 h-20 mb-8 relative flex items-center justify-center rounded-2xl border border-${product.color}/20 bg-${product.color}/10 text-${product.color}`}>
                                    {typeof product.icon === "string" ? (
                                        <Image src={product.icon} alt={product.name} fill className="object-contain" />
                                    ) : (
                                        product.icon
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
