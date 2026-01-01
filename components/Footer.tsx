import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/10 bg-[#020202] relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
                <div className="space-y-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        Vibe Tech
                    </Link>
                    <p className="text-gray-400 text-sm">&copy; 2026 Vibe Technologies.</p>
                    <p className="text-gray-500 text-xs mt-2">CEO: Sangyoga Wahyu Utomo</p>
                </div>

                <div className="flex flex-wrap gap-12 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium">Ecosystem</h4>
                        <Link href="/products#omni" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Vibe Omni</Link>
                        <Link href="/products#flow" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Vibe Flow</Link>
                        <Link href="/products#guardian" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Vibe Guardian</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium">Connect</h4>
                        <a href="https://www.instagram.com/yogawoetomo?igsh=a3p3cTQ3NXF1eW0x" target="_blank" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Instagram</a>
                        <a href="https://www.youtube.com/@sangyoga2434" target="_blank" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">YouTube</a>
                        <a href="#" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">LinkedIn</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium">Legal</h4>
                        <Link href="#" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Privacy</Link>
                        <Link href="#" className="text-gray-400 hover:text-[#2997ff] text-sm transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
