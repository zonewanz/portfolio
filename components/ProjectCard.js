import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";

// Kartu ringkas dengan thumbnail kecil.
export default function ProjectCard({ p }) {
  const img = p.images[0];
  return (
    <Link
      href={`/proyek/${p.slug}`}
      className="group flex h-full gap-4 rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
    >
      <div className="relative h-[72px] w-[108px] shrink-0 overflow-hidden rounded-lg border border-line bg-subtle">
        <Image
          src={img.src} alt={p.name} fill sizes="216px"
          className="object-cover object-top transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-mute">
            {categories[p.category]} · {p.year}
          </div>
          <ArrowUpRight size={16} className="shrink-0 text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-0.5 font-semibold leading-snug">{p.name}</h3>
        <div className="truncate text-xs font-medium text-accent">{p.client}</div>
        <p className="mt-1.5 line-clamp-2 text-[13px] text-mute">{p.summary}</p>
      </div>
    </Link>
  );
}
