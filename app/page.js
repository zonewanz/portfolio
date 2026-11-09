import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Terminal from "@/components/Terminal";
import RotatingWord from "@/components/RotatingWord";
import Reveal from "@/components/Reveal";
import SkillIcon from "@/components/SkillIcon";
import { Container, Btn, Section, SectionHead } from "@/components/ui";
import { profile, projects, experience, skills, rotatingWords, marquee } from "@/data/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-line">
        {/* pola grid tipis + cahaya */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f1f4_1px,transparent_1px),linear-gradient(to_bottom,#f0f1f4_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 animate-float rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 size-80 animate-float rounded-full bg-accent2/10 blur-3xl [animation-delay:-3s]" />

        <Container className="relative grid items-center gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <span className="inline-flex animate-rise items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-mono text-xs uppercase tracking-widest">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-green-600" />
              </span>
              Terbuka untuk proyek & kolaborasi
            </span>
            <h1 className="my-7 animate-rise font-display text-[42px] font-bold leading-[1.05] tracking-[-0.035em] [animation-delay:.1s] md:text-[68px]">
              Halo, saya Riswan.<br />
              Saya membangun<br />
              <RotatingWord words={rotatingWords} />
            </h1>
            <p className="max-w-xl animate-rise text-lg text-mute [animation-delay:.2s]">{profile.tagline}</p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:.3s]">
              <Btn href="/proyek" variant="primary">Lihat proyek <ArrowRight size={16} /></Btn>
              <Btn href="/kontak">Hubungi saya</Btn>
            </div>
          </div>

          <div className="relative animate-rise [animation-delay:.25s]">
            <Terminal />
            <span className="absolute -left-4 -top-4 hidden animate-float rounded-xl border border-line bg-white px-3 py-2 text-xs font-semibold shadow-card sm:block">⚡ Fullstack</span>
            <span className="absolute -bottom-5 right-8 hidden animate-float rounded-xl border border-line bg-white px-3 py-2 text-xs font-semibold shadow-card [animation-delay:-2s] sm:block">🖧 Networking</span>
            <span className="absolute -right-4 top-1/3 hidden animate-float rounded-xl border border-line bg-white px-3 py-2 text-xs font-semibold shadow-card [animation-delay:-4s] sm:block">🎨 Photoshop</span>
          </div>
        </Container>

        {/* teknologi berjalan */}
        <div className="relative border-t border-line bg-subtle py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold text-mute">
                {m}<span className="text-accent2">✦</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* KEMAMPUAN */}
      <Section>
        <Container>
          <Reveal><SectionHead eyebrow="01 — Kemampuan" title="Yang saya" accent="kuasai" /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
                  <div className="mb-4 grid size-11 place-items-center rounded-xl bg-soft text-accent transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <SkillIcon name={s.icon} size={22} />
                  </div>
                  <h3 className="mb-3 font-semibold">{s.group}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((x) => (
                      <span key={x} className="rounded-md bg-subtle px-2.5 py-1 text-[13px] text-ink/80 transition hover:bg-soft hover:text-accent">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROYEK */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <SectionHead eyebrow="02 — Proyek pilihan" title="Beberapa" accent="karya"
              action={<Btn href="/proyek">Semua proyek <ArrowRight size={16} /></Btn>} />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => <Reveal key={p.slug} delay={i * 90}><ProjectCard p={p} /></Reveal>)}
          </div>
        </Container>
      </Section>

      {/* PENGALAMAN */}
      <Section>
        <Container>
          <Reveal>
            <SectionHead eyebrow="03 — Pengalaman" title="Jejak" accent="kerja"
              action={<Btn href="/tentang">Selengkapnya <ArrowRight size={16} /></Btn>} />
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 70}>
                <div className="group grid gap-1.5 py-5 transition md:grid-cols-[220px_1fr_auto] md:items-center md:gap-6">
                  <span className="font-mono text-[13px] text-mute">{e.period}</span>
                  <span className="text-mute"><b className="font-semibold text-ink">{e.role}</b> — {e.company}</span>
                  <ArrowRight size={18} className="hidden text-line transition group-hover:translate-x-1 group-hover:text-accent md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 animate-float rounded-full bg-accent/30 blur-3xl" />
        <Container className="relative flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-[54px]">
              Punya proyek? <span className="text-[#ffb38f]">Ngobrol</span> yuk.
            </h2>
          </Reveal>
          <Btn href="/kontak" variant="light">Hubungi saya <ArrowRight size={16} /></Btn>
        </Container>
      </section>
    </>
  );
}
