import { Code2, Layers, Database, Server, Palette, ShieldCheck, Sparkles } from "lucide-react";
const map = { Code2, Layers, Database, Server, Palette, ShieldCheck };
export default function SkillIcon({ name, ...props }) {
  const I = map[name] || Sparkles;
  return <I {...props} />;
}
