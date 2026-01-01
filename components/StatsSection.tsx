"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { label: "Neural Nodes", value: "1.2M+", description: "Distributed globally for zero latency." },
        { label: "Data Throughput", value: "48 PB/s", description: "Real-time sync across the ecosystem." },
        { label: "AI Latency", value: "< 5ms", description: "Human-equivalent reaction speeds." },
        { label: "Active Innovators", value: "250K+", description: "Pioneering the future together." },
    ];

    return (
        <section ref={sectionRef} className="pt-8 pb-16 bg-[#050507] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item space-y-4">
                            <h3 className="text-gray-500 font-medium tracking-widest uppercase text-xs">{stat.label}</h3>
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tighter">
                                {stat.value}
                            </div>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
