"use client";
import { useEffect, useState } from "react";

export default function RotatingWord({ words, interval = 2200 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span key={i} className="inline-block animate-word bg-gradient-to-r from-accent to-[#7b5cff] bg-clip-text pb-1 text-transparent">
        {words[i]}
      </span>
    </span>
  );
}
