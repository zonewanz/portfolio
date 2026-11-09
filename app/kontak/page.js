import ContactForm from "@/components/ContactForm";
import { Container, Section, PageHead, Accent } from "@/components/ui";
import { profile } from "@/data/site";

export const metadata = { title: "Kontak" };

export default function Kontak() {
  const channels = [
    { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
    { k: "WhatsApp", v: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
    { k: "GitHub", v: "github.com/zonewanz", href: profile.github },
    { k: "Lokasi", v: profile.location },
  ];
  return (
    <>
      <PageHead eyebrow="Kontak">Mari bangun<br /><Accent>sesuatu bersama</Accent>.</PageHead>
      <Section>
        <Container className="grid items-start gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div className="divide-y divide-line border-y border-line">
            {channels.map((c) => (
              <div key={c.k} className="py-5">
                <small className="mb-1 block font-mono text-xs uppercase text-mute">{c.k}</small>
                {c.href
                  ? <a href={c.href} target="_blank" rel="noreferrer" className="text-xl transition hover:text-accent">{c.v} ↗</a>
                  : <span className="text-xl">{c.v}</span>}
              </div>
            ))}
          </div>
          <ContactForm email={profile.email} />
        </Container>
      </Section>
    </>
  );
}
