"use client";
import { useEffect, useState } from "react";

export default function AnimatedParagraph({ text }: { text: string }) {
  const words = text.split(" ");

  const [classes, setClasses] = useState<string[]>(
    words.map(() => "white")
  );

  const colorClasses = ["white", "violet", "gray"];

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = [...classes];

      // Change 3–8 random words at once
      const count = Math.floor(Math.random() * 6) + 3;

      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);

        const randomColor =
          colorClasses[Math.floor(Math.random() * colorClasses.length)];

        updated[randomIndex] = randomColor;
      }

      setClasses(updated);
    }, 180); // fast & smooth

    return () => clearInterval(interval);
  }, [words.length, classes, colorClasses]);

  return (
    <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
      {words.map((word, index) => (
      <span
        key={index}
        className={`word ${classes[index]}`}
      >
        {word}
        {index < words.length - 1 && " "}
      </span>
      ))}
    </p>
  );
}
