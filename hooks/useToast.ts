import { useState, useCallback } from "react";

interface Toast {
    message: string;
    id: number;
    type?: "success" | "error" | "info";
}

let globalShowToast: ((message: string, type?: "success" | "error" | "info") => void) | null = null;

export function useToast() {
    const [toast, setToast] = useState<Toast | null>(null);

    const showToast = useCallback((message: string, type: "success" | "error" | "info" = "success") => {
        const id = Date.now();
        setToast({ message, id, type });

        setTimeout(() => {
            setToast(null);
        }, 3000);
    }, []);

    // Register global function
    if (typeof window !== "undefined") {
        globalShowToast = showToast;
    }

    return { toast, showToast };
}

// Global toast function for use outside of React components
export function showToast(message: string, type?: "success" | "error" | "info") {
    if (globalShowToast) {
        globalShowToast(message, type);
    }
}
