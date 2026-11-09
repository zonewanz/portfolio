"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { profile } from "@/data/site";

// Foto kecil; klik untuk membuka foto besar dalam modal.
export default function Avatar({ size = 34, ring = true }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Lihat foto profil"
        className={`relative shrink-0 overflow-hidden rounded-full transition hover:scale-110 ${ring ? "ring-2 ring-accent/30 ring-offset-2 hover:ring-accent" : ""}`}
        style={{ width: size, height: size }}
      >
        <Image src={profile.photo} alt={profile.name} fill sizes={`${size * 2}px`} className="object-cover" />
      </button>

      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${profile.name}`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex animate-fade items-center justify-center bg-ink/60 p-6 backdrop-blur-sm"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-sm animate-pop rounded-3xl bg-white p-3 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute -right-3 -top-3 grid size-9 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:rotate-90 hover:bg-accent hover:text-white"
            >
              <X size={18} />
            </button>
            <Image src={profile.photo} alt={profile.name} width={319} height={298} className="w-full rounded-2xl" />
            <div className="px-2 pb-2 pt-4">
              <div className="font-display text-xl font-bold">{profile.name}, {profile.title}</div>
              <div className="text-sm text-mute">{profile.role} · {profile.location}</div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
