import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { Container, Btn, Chip, PageHead, InfoList } from "@/components/ui";
import { projects, categories } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary, openGraph: { images: [p.images[0].src] } } : {};
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageHead
        eyebrow={`${categories[p.category]} · ${p.year}`}
        sub={p.client}
        back={<Link href="/proyek" className="mb-7 inline-block text-sm text-mute hover:text-accent">← Semua proyek</Link>}
      >
        {p.name}
      </PageHead>

      <section className="border-b border-line pb-20">
        <Container>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-14">
            <Gallery images={p.images} name={p.name} />
            <div className="space-y-3.5">
              <h2 className="mb-4 font-display text-3xl font-bold tracking-tight">Tentang proyek</h2>
              <p className="text-lg text-ink">{p.summary}</p>
              {p.description.map((d, i) => <p key={i} className="text-[17px] text-mute">{d}</p>)}
            <aside className="!mt-8 rounded-2xl border border-line bg-white p-6">
              <InfoList items={[
                ["Klien", p.client],
                ["Peran", p.role],
                ["Rilis", p.release],
                ["Source", p.repo],
                ["Teknologi", <div key="t" className="flex flex-wrap gap-1.5">{p.stack.map((s) => <Chip key={s} small>{s}</Chip>)}</div>],
              ]} />
              {p.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {p.links.map((l) => <Btn key={l.url} href={l.url} variant="primary">{l.label} ↗</Btn>)}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-line p-3 text-[13px] text-mute">
                  Aplikasi berjalan dalam mode offline / internal.
                </div>
              )}
            </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid grid-cols-2">
          {[[prev, "← Sebelumnya", ""], [next, "Berikutnya →", "border-l border-line text-right"]].map(([x, label, cls]) => (
            <Link key={label} href={`/proyek/${x.slug}`} className={`py-10 font-display text-xl font-bold tracking-tight transition hover:text-accent md:text-[28px] ${cls}`}>
              <small className="mb-1.5 block font-mono text-xs font-normal uppercase text-mute">{label}</small>
              {x.name}
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
