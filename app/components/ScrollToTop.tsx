"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Enforce scrolling to the top on every mount and navigation
        window.scrollTo(0, 0);
        
        // Also a small timeout for certain browser/Next.js edge cases
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
