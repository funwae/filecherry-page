"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  "Quit stallin'. What are we doing with all this?",
  "You bring the chaos folder. I'll bring the back pain.",
  "Inputs in, outputs out. The rest is my problem.",
  "Yeah, I'll process 'final_v7_REAL_final_USE_THIS_ONE.pdf'. Again.",
  "If it's in inputs/, it's my problem. If it's not, it's your problem.",
];

export function CodyQuoteBubble({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(
    () => Math.floor(Math.random() * QUOTES.length)
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000); // change quote every 8s

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`inline-flex max-w-xs items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/95 px-4 py-2 text-[11px] text-neutral-200 shadow-lg backdrop-blur ${className}`}
    >
      <span className="text-amber-300 text-base leading-none">&ldquo;</span>
      <span className="whitespace-normal">{QUOTES[index]}</span>
    </div>
  );
}

