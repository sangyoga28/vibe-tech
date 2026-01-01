"use client";

import { useToast } from "@/hooks/useToast";

export default function PricingSection() {
    const { showToast } = useToast();
    const plans = [
        {
            name: "Explorer",
            price: "$0",
            features: [
                "Vibe Omni (Basic Access)",
                "2GB Neural Core Storage",
                "Community Forum Access",
                "Standard Response Time",
                "Web & Mobile App"
            ],
            cta: "Join Waitlist",
            popular: false
        },
        {
            name: "Innovator",
            price: "$49",
            features: [
                "Vibe Omni (Pro Full Access)",
                "200GB Neural Core Storage",
                "Vibe Flow OS License",
                "Priority Neural Processing",
                "Early Hardware Prototype Access",
                "Advanced API Integration"
            ],
            cta: "Become an Innovator",
            popular: true
        },
        {
            name: "Visionary",
            price: "Custom",
            features: [
                "Full Enterprise Neural Suite",
                "Unlimited Core Storage",
                "Dedicated Neural Node",
                "White-label Integration",
                "24/7 Strategic Support",
                "Private Beta Keynote Access"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-[#050507]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Revolution.</h2>
                    <p className="text-lg text-gray-400">Select your tier in the Vibe ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 flex flex-col ${plan.popular ? "bg-gradient-to-b from-brand-accent/15 to-brand-accent/5 border-brand-accent scale-[1.02] shadow-[0_40px_100px_rgba(41,151,255,0.15)] z-10 border-2" : "bg-brand-glass border-brand-border hover:border-white/20"}`}>
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#b666ff] to-[#2997ff] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-2 rounded-full shadow-[0_10px_25px_rgba(41,151,255,0.4)] whitespace-nowrap border border-white/20">
                                    Limited Time: Full Neural License Included
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-lg text-gray-400 font-medium mb-1 tracking-tight">{plan.name}</h3>
                                <div className="text-5xl font-bold text-white tracking-tighter">{plan.price}<span className="text-base font-normal text-gray-500">/mo</span></div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-tight">
                                        <i className="fa-solid fa-check text-brand-accent mt-0.5" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => showToast(`${plan.name} plan ${plan.price === "$0" ? "waitlist joined" : "selected"}. Redirecting to secure checkout...`, "success")}
                                className={`w-full ${plan.popular ? "btn-primary" : "btn-outline shadow-none"}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
