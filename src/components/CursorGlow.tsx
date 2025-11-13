"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hideGlow = () => setVisible(false);

    window.addEventListener("mousemove", moveGlow);
    window.addEventListener("mouseleave", hideGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      window.removeEventListener("mouseleave", hideGlow);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}


