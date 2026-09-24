import { useEffect, useRef } from "react";

const COLORS = ["#8052ff", "#8052ff", "#ffb829", "#15846e", "#ffffff"];

const ParticleField = ({ className = "" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let w = 0;
        let h = 0;
        let pts = [];
        let rafId;
        let running = true;

        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const n = Math.min(Math.floor((w * h) / 16000), 110);
            pts = Array.from({ length: n }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.28,
                vy: (Math.random() - 0.5) * 0.28,
                r: Math.random() * 1.6 + 0.6,
                c: COLORS[Math.floor(Math.random() * COLORS.length)],
                tw: Math.random() * Math.PI * 2,
                ts: 0.01 + Math.random() * 0.025,
            }));
        };

        const tick = () => {
            if (!running) {
                rafId = requestAnimationFrame(tick);
                return;
            }
            ctx.clearRect(0, 0, w, h);
            for (const p of pts) {
                p.x += p.vx;
                p.y += p.vy;
                p.tw += p.ts;
                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;
                if (p.y < -20) p.y = h + 20;
                if (p.y > h + 20) p.y = -20;
            }
            ctx.lineWidth = 1;
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const d = Math.hypot(dx, dy);
                    if (d < 110) {
                        ctx.globalAlpha = (1 - d / 110) * 0.16;
                        ctx.strokeStyle = "#8052ff";
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.stroke();
                    }
                }
            }
            for (const p of pts) {
                ctx.globalAlpha = Math.max(0.35 + Math.sin(p.tw) * 0.3, 0.1);
                ctx.fillStyle = p.c;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 7);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            rafId = requestAnimationFrame(tick);
        };

        const onVis = () => {
            running = document.visibilityState === "visible";
        };

        resize();
        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", onVis);
        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", onVis);
        };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
};

export default ParticleField;
