"use client";

import { useState } from "react";
import { useToast } from "@/hooks/useToast";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const { showToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            showToast("Message sent successfully! Our neural node will contact you soon.", "success");
        }, 1500);
    };

    return (
        <section id="contact" className="py-32">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="bg-[#141419]/80 border border-brand-border p-12 rounded-3xl text-center backdrop-blur-md">
                    <h2 className="text-3xl font-bold mb-4">Contact Leadership</h2>
                    <p className="text-gray-400 mb-8">Get in touch with CEO Sangyoga directly.</p>

                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://www.instagram.com/yogawoetomo?igsh=a3p3cTQ3NXF1eW0x" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                            <i className="fa-brands fa-instagram text-xl" />
                        </a>
                        <a href="https://www.youtube.com/@sangyoga2434" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                            <i className="fa-brands fa-youtube text-xl" />
                        </a>
                        <a href="https://wa.me/628991622997" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                            <i className="fa-brands fa-whatsapp text-xl" />
                        </a>
                    </div>

                    <div className="text-gray-400 mb-10 flex items-center justify-center gap-2">
                        <i className="fa-solid fa-phone text-brand-accent" /> 0899-1622-997
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div className="relative group">
                            <input type="text" required placeholder=" " className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-accent peer transition-all" />
                            <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[#141419] peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#141419] pointer-events-none">Your Name</label>
                        </div>
                        <div className="relative group">
                            <input type="email" required placeholder=" " className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-accent peer transition-all" />
                            <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[#141419] peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#141419] pointer-events-none">Your Email</label>
                        </div>
                        <div className="relative group">
                            <textarea rows={4} required placeholder=" " className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-accent peer transition-all resize-none" />
                            <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[#141419] peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#141419] pointer-events-none">Message for Sangyoga</label>
                        </div>

                        <button
                            disabled={status === "submitting" || status === "success"}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "idle" && "Send Message"}
                            {status === "submitting" && "Sending..."}
                            {status === "success" && "Message Sent!"}
                        </button>
                        {status === "success" && <p className="text-green-500 text-center text-sm font-medium animate-pulse">Message successfully sent to the CEO.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
