import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";
import SkillIcon from "@/components/SkillIcon";
import { Container, Btn, Chip, Eyebrow, Section, SectionHead, PageHead, Accent, InfoList } from "@/components/ui";
import { profile, experience, education, skills } from "@/data/site";

export const metadata = { title: "Tentang" };

export default function Tentang() {
  return (
    <>
      <PageHead eyebrow="Tentang">Dari ruang kelas<br />ke <Accent>sistem nasional</Accent>.</PageHead>

      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="space-y-4 text-[17px] text-mute">
            {profile.summary.map((s, i) => <p key={i}>{s}</p>)}
            <Btn href="/CV_Riswan_Hermawan.pdf" variant="primary" className="mt-4" download>Unduh CV (PDF)</Btn>
          </div>
          <aside className="rounded-3xl border border-line bg-white p-6 shadow-card md:sticky md:top-24">
            <div className="mb-5 flex items-center gap-4 border-b border-line pb-5">
              <Avatar size={56} />
              <div>
                <div className="font-semibold">{profile.name}</div>
                <div className="text-xs text-mute">Klik foto untuk memperbesar</div>
              </div>
            </div>
            <InfoList items={[
              ["Nama", `${profile.name}, ${profile.title}`],
              ["Peran", profile.role],
              ["Lokasi", profile.location],
              ["Email", <a key="e" href={`mailto:${profile.email}`} className="border-b border-accent">{profile.email}</a>],
            ]} />
          </aside>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="Pengalaman kerja" title="Perjalanan" accent="karier" />
          <div className="divide-y divide-line border-y border-line">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 60} className="grid gap-2 py-7 md:grid-cols-[220px_1fr] md:gap-8">
                <div className="font-mono text-[13px] text-mute">
                  {e.period}<br /><small className="text-xs">{e.place}</small>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <div className="mb-2.5 text-sm font-semibold text-accent">{e.company}</div>
                  <ul className="space-y-1.5 text-[15px] text-mute">
                    {e.points.map((p, i) => (
                      <li key={i} className="relative pl-5 before:absolute before:left-0 before:text-accent2 before:content-['→']">{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <Eyebrow>Pendidikan</Eyebrow>
            <div className="flex items-start justify-between gap-4 rounded-3xl border border-line bg-white p-7 shadow-card">
              <div>
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <div className="mb-2 text-sm font-semibold text-accent">{education.school}</div>
                <p className="text-sm text-mute">{education.period} · {education.place}</p>
              </div>
              <div className="text-right">
                <b className="block font-display text-4xl font-bold leading-none text-accent">{education.gpa}</b>
                <small className="text-xs text-mute">IPK</small>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>Keahlian</Eyebrow>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={i * 60}>
                  <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
                    <SkillIcon name={s.icon} size={16} className="text-accent" />{s.group}
                  </h4>
                  <div className="flex flex-wrap gap-2">{s.items.map((x) => <Chip key={x}>{x}</Chip>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
