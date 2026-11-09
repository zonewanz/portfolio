"use client";
import { useState } from "react";
import { Btn } from "./ui";

// Form sederhana tanpa backend: membuka aplikasi email pengunjung.
export default function ContactForm({ email }) {
  const [f, setF] = useState({ nama: "", subjek: "", pesan: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const body = `${f.pesan}\n\n— ${f.nama}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(f.subjek || "Halo dari portfolio")}&body=${encodeURIComponent(body)}`;
  };
  const input =
    "rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10";
  return (
    <form onSubmit={send} className="grid gap-4 rounded-3xl border border-line bg-white p-7 shadow-card">
      <label className="grid gap-2 text-[13px] text-mute">Nama
        <input required value={f.nama} onChange={set("nama")} placeholder="Nama Anda" className={input} />
      </label>
      <label className="grid gap-2 text-[13px] text-mute">Subjek
        <input value={f.subjek} onChange={set("subjek")} placeholder="Tawaran proyek, pertanyaan, …" className={input} />
      </label>
      <label className="grid gap-2 text-[13px] text-mute">Pesan
        <textarea required rows={6} value={f.pesan} onChange={set("pesan")} placeholder="Ceritakan kebutuhan Anda" className={input} />
      </label>
      <Btn variant="primary" type="submit" className="justify-self-start">Kirim pesan →</Btn>
    </form>
  );
}
