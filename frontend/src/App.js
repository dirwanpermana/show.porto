import { useEffect, Component } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-void flex items-center justify-center px-6 text-center">
                    <p className="text-ash">
                        Terjadi kesalahan saat memuat halaman. Muat ulang untuk
                        mencoba lagi.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <Landing />
            <Toaster theme="dark" position="top-center" richColors closeButton />
        </ErrorBoundary>
    );
}

export default App;
