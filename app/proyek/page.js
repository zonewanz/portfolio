import ProjectGrid from "@/components/ProjectGrid";
import { Container, Section, PageHead, Accent } from "@/components/ui";
import { projects } from "@/data/site";

export const metadata = { title: "Proyek" };

export default function Proyek() {
  return (
    <>
      <PageHead eyebrow="Proyek">{projects.length} proyek,<br /><Accent>dari sekolah sampai negara</Accent>.</PageHead>
      <Section><Container><ProjectGrid projects={projects} /></Container></Section>
    </>
  );
}
