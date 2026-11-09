"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories } from "@/data/site";
import { cx } from "./ui";

export default function ProjectGrid({ projects }) {
  const [f, setF] = useState("semua");
  const shown = f === "semua" ? projects : projects.filter((p) => p.category === f);
  const count = (k) => (k === "semua" ? projects.length : projects.filter((p) => p.category === k).length);
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {Object.entries(categories).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setF(k)}
            className={cx(
              "rounded-full border px-4 py-2 text-[13px] transition",
              f === k ? "border-ink bg-ink text-white" : "border-line bg-white text-mute hover:border-ink hover:text-ink"
            )}
          >
            {v} <span className="ml-1 opacity-60">{count(k)}</span>
          </button>
        ))}
      </div>
      <div key={f} className="grid animate-rise gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
