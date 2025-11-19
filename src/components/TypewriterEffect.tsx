"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterEffectProps {
    text: string;
    className?: string;
}

export default function TypewriterEffect({ text, className = "" }: TypewriterEffectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const characters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span variants={child} key={index}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
