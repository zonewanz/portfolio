import Link from "next/link";
import { profile } from "@/data/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="py-7 text-[13px] text-mute">
      <Container className="flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
          <Link href="/kontak" className="hover:text-accent">Kontak</Link>
        </span>
      </Container>
    </footer>
  );
}
