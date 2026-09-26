import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

export const ROUTES = { home: "/", umkm: "/umkm" };

export const useGo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return ({ id, path = ROUTES.home }, delay = 0) => {
        if (location.pathname !== path) {
            navigate(path, { state: { scrollTo: id || null } });
            return;
        }
        setTimeout(() => {
            if (id) scrollToSection(id);
            else window.__lenis?.scrollTo(0, { duration: 1.2 });
        }, delay);
    };
};

export const ScrollManager = () => {
    const location = useLocation();
    useEffect(() => {
        const id = location.state?.scrollTo;
        window.__lenis?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
        if (!id) return undefined;
        const t = setTimeout(() => scrollToSection(id), 320);
        return () => clearTimeout(t);
    }, [location]);
    return null;
};
