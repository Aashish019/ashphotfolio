"use client";
import { useEffect, useRef } from "react";

export default function useScrollAnimation(animationClass = "animate-fadeInUp") {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          element.classList.add(animationClass);
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
