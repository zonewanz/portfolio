import { Btn, PageHead, Accent } from "@/components/ui";
export default function NotFound() {
  return (
    <div className="min-h-[60vh]">
      <PageHead eyebrow="404">Halaman <Accent>tidak ditemukan</Accent>.</PageHead>
      <div className="mx-auto max-w-6xl px-6 py-10"><Btn href="/" variant="primary">← Kembali ke beranda</Btn></div>
    </div>
  );
}
