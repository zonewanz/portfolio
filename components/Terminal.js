"use client";
import { useEffect, useState } from "react";

const SCRIPT = [
  { t: "$ whoami", c: "text-white" },
  { t: "riswan — web developer & staff IT", c: "text-white/70" },
  { t: "$ cat skills.txt", c: "text-white" },
  { t: "PHP · CodeIgniter · Laravel · MySQL", c: "text-[#9db4ff]" },
  { t: "Flutter · REST API · Python · Java", c: "text-[#9db4ff]" },
  { t: "Networking · Server · Photoshop", c: "text-[#ffb38f]" },
  { t: "$ status --now", c: "text-white" },
  { t: "✔ siap diajak kolaborasi", c: "text-[#7ee2a0]" },
];

// Terminal yang mengetik sendiri, lalu mengulang.
export default function Terminal() {
  const [line, setLine] = useState(0);
  const [ch, setCh] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLine(SCRIPT.length); return; }
    let timer;
    if (line >= SCRIPT.length) {
      timer = setTimeout(() => { setLine(0); setCh(0); }, 3500);
    } else if (ch < SCRIPT[line].t.length) {
      const typing = SCRIPT[line].t.startsWith("$");
      timer = setTimeout(() => setCh(ch + 1), typing ? 55 : 14);
    } else {
      timer = setTimeout(() => { setLine(line + 1); setCh(0); }, 380);
    }
    return () => clearTimeout(timer);
  }, [line, ch]);

  return (
    <div className="overflow-hidden rounded-2xl bg-[#0f1115] shadow-[0_30px_60px_-20px_rgb(15_17_21/.45)] ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <i className="size-3 rounded-full bg-[#ff5f57]" />
        <i className="size-3 rounded-full bg-[#febc2e]" />
        <i className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">riswan@portfolio: ~</span>
      </div>
      <div className="h-[268px] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {SCRIPT.map((l, i) => {
          if (i > line) return null;
          const text = i < line ? l.t : l.t.slice(0, ch);
          return (
            <div key={i} className={l.c}>
              {text}
              {i === line && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />}
            </div>
          );
        })}
        {line >= SCRIPT.length && <span className="inline-block h-4 w-2 animate-blink bg-accent" />}
      </div>
    </div>
  );
}
