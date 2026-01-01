import ProductSection from "@/components/ProductSection";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-6 mb-20">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group">
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
                    Back to Overview
                </Link>
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Our Ecosystem</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Deep dive into the technologies powering the Vibe revolution. Each node is designed to amplify human intelligence.
                    </p>
                </div>
            </div>
            <ProductSection />
        </div>
    );
}
