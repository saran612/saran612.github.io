"use client";

import { useEffect, useRef } from "react";

export function AccentBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas to full screen
        const resizeInfo = { width: window.innerWidth, height: window.innerHeight };
        canvas.width = resizeInfo.width;
        canvas.height = resizeInfo.height;

        let mouse = { x: resizeInfo.width / 2, y: resizeInfo.height / 2, targetX: resizeInfo.width / 2, targetY: resizeInfo.height / 2 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            resizeInfo.width = window.innerWidth;
            resizeInfo.height = window.innerHeight;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        let animationFrameId: number;

        const render = () => {
            // Clear canvas with very slight transparent black if needed, 
            // but since it's blurred in CSS, we can clear entirely
            ctx.clearRect(0, 0, resizeInfo.width, resizeInfo.height);

            // Spring physics toward mouse
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            // Draw shifting gradient
            const time = Date.now() * 0.001;

            const gradient = ctx.createRadialGradient(
                mouse.x, mouse.y, 10,
                mouse.x, mouse.y, 400 + Math.sin(time) * 100 // pulsing size
            );

            // Deep Indigo: #4F46E5, Ghostly Silver
            gradient.addColorStop(0, "rgba(79, 70, 229, 0.4)");
            gradient.addColorStop(1, "rgba(200, 200, 210, 0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 600, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 blur-3xl opacity-50"
        />
    );
}
