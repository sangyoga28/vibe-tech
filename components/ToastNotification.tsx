"use client";

import { useToast } from "@/hooks/useToast";

const toastConfig = {
    success: {
        icon: "fa-circle-check",
        color: "#2997ff",
        bg: "rgba(41, 151, 255, 0.1)",
        border: "rgba(41, 151, 255, 0.3)",
    },
    error: {
        icon: "fa-circle-xmark",
        color: "#ff3b30",
        bg: "rgba(255, 59, 48, 0.1)",
        border: "rgba(255, 59, 48, 0.3)",
    },
    info: {
        icon: "fa-circle-info",
        color: "#ffffff",
        bg: "rgba(255, 255, 255, 0.1)",
        border: "rgba(255, 255, 255, 0.3)",
    },
};

export default function ToastNotification() {
    const { toast } = useToast();
    const config = toastConfig[toast?.type || "success"];

    return (
        <div
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[2000] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${toast
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95 pointer-events-none"
                }`}
        >
            <div
                className="backdrop-blur-2xl px-8 py-4 rounded-full flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border transition-colors duration-300"
                style={{
                    backgroundColor: config.bg,
                    borderColor: config.border,
                }}
            >
                <i className={`fa-solid ${config.icon} text-xl transition-colors duration-300`} style={{ color: config.color }} />
                <span className="text-white font-medium tracking-tight whitespace-nowrap">{toast?.message}</span>
            </div>
        </div>
    );
}
