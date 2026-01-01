import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl font-bold mb-6">Invest in the Future</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Transparent pricing for everyone. From individual creators to global enterprises.
                </p>
            </div>
            <PricingSection />
        </div>
    );
}
