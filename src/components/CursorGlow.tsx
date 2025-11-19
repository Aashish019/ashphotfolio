"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorSize, setCursorSize] = useState(40);
  const [cursorColor, setCursorColor] = useState("#b49bff");
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isInteractive) {
        setCursorSize(60);
        setCursorColor("#8314eb");
      } else {
        setCursorSize(40);
        setCursorColor("#b49bff");
      }

      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    // Smooth cursor follow with easing
    const animate = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;

      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      if (cursor) {
        cursor.style.left = `${cursorPos.current.x}px`;
        cursor.style.top = `${cursorPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow"
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderColor: cursorColor,
        background: `radial-gradient(circle, ${cursorColor}60, transparent 70%)`,
        transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
      }}
    />
  );
}
