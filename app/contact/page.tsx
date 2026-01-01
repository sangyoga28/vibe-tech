import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl font-bold mb-6">Connect with Us</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We are always listening. Reach out for support, sales, or just to say hello.
                </p>
            </div>
            <ContactSection />
        </div>
    );
}
