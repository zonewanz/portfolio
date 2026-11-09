"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container, cx } from "./ui";
import Avatar from "./Avatar";

const items = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar size={34} />
          <Link href="/" onClick={() => setOpen(false)} className="font-display text-2xl font-extrabold tracking-tight">
            Riswan<span className="text-accent">.</span>
          </Link>
        </div>

        <div
          className={cx(
            "absolute inset-x-0 top-16 flex-col gap-1 border-b border-line bg-bg px-6 py-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0",
            open ? "flex" : "hidden"
          )}
        >
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className={cx(
                "rounded-full px-4 py-2 text-sm transition",
                active(i.href) ? "bg-ink text-white" : "text-mute hover:text-ink"
              )}
            >
              {i.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-lg border border-line px-3 py-1.5 font-mono text-xs md:hidden"
        >
          {open ? "TUTUP" : "MENU"}
        </button>
      </Container>
    </nav>
  );
}
