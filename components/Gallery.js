"use client";
import Image from "next/image";
import { useState } from "react";
import { cx } from "./ui";

export default function Gallery({ images, name }) {
  const [i, setI] = useState(0);
  const img = images[i];
  return (
    <div className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
        <div className="flex h-7 items-center gap-1.5 border-b border-line px-3">
          <i className="size-2 rounded-full bg-[#ff5f57]" />
          <i className="size-2 rounded-full bg-[#febc2e]" />
          <i className="size-2 rounded-full bg-[#28c840]" />
        </div>
        <Image
          key={img.src} src={img.src} alt={`${name} — tampilan ${i + 1}`} width={img.w} height={img.h}
          priority sizes="(max-width: 1024px) 100vw, 560px" className="w-full animate-rise bg-white"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3.5 flex gap-3">
          {images.map((im, k) => (
            <button
              key={im.src}
              onClick={() => setI(k)}
              aria-label={`Tampilan ${k + 1}`}
              className={cx(
                "w-28 overflow-hidden rounded-lg border-2 transition",
                k === i ? "border-accent opacity-100" : "border-line opacity-55 hover:opacity-100"
              )}
            >
              <Image src={im.src} alt="" width={im.w} height={im.h} sizes="112px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
