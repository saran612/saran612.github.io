"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    // We maintain the positional and physics states in refs to completely bypass React state and avoid re-renders.
    const mouse = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
    const scale = useRef({ current: 1, target: 1 });
    const velocity = useRef({ x: 0, y: 0, scale: 0 });

    // Spring physics constants for scale animation (movement drag removed for zero latency)
    const scaleStiffness = 0.2;
    const scaleDamping = 0.7;

    useEffect(() => {
        let animationFrameId: number;

        const manageMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            mouse.current.targetX = e.clientX;
            mouse.current.targetY = e.clientY;

            // Check if hovered element or its parents have a custom scale
            const scaleData = target.closest('[data-cursor-scale]');
            if (scaleData) {
                scale.current.target = parseFloat(scaleData.getAttribute('data-cursor-scale') || '1');
            } else {
                scale.current.target = 1;
            }

            if (cursorRef.current && cursorRef.current.style.opacity === "0") {
                cursorRef.current.style.opacity = "1";
            }
        };

        const manageMouseOut = (e: MouseEvent) => {
            if (e.relatedTarget === null && cursorRef.current) {
                cursorRef.current.style.opacity = "0";
            }
        };

        window.addEventListener("mousemove", manageMouseMove);
        document.addEventListener("mouseout", manageMouseOut);

        const render = () => {
            // 1:1 unhindered hardware tracking (zero latency drag)
            mouse.current.x = mouse.current.targetX;
            mouse.current.y = mouse.current.targetY;

            // Spring physics for the scale animation
            const aScale = (scale.current.target - scale.current.current) * scaleStiffness;
            velocity.current.scale = (velocity.current.scale + aScale) * scaleDamping;
            scale.current.current += velocity.current.scale;

            if (cursorRef.current) {
                // Offset by half the width/height (12px / 2 = 6px) to keep the cursor centered on the mouse coordinates.
                const x = mouse.current.x - 6;
                const y = mouse.current.y - 6;

                // Use translate3d to force hardware acceleration on the GPU layer. Pure zero-latency updates.
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale.current.current})`;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            document.removeEventListener("mouseout", manageMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference will-change-transform transition-opacity duration-300"
            style={{
                transformOrigin: "center",
                opacity: 0
            }}
        />
    );
}
