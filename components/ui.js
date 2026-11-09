import Link from "next/link";

const cx = (...c) => c.filter(Boolean).join(" ");

export function Container({ className, children }) {
  return <div className={cx("mx-auto max-w-6xl px-6", className)}>{children}</div>;
}

export function Btn({ href, variant = "outline", className, children, ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5";
  const styles = {
    primary: "bg-accent text-white shadow-[0_6px_18px_rgb(47_84_235/.28)] hover:shadow-[0_10px_24px_rgb(47_84_235/.35)]",
    outline: "border border-line bg-white hover:border-ink",
    light: "bg-white text-ink hover:bg-accent hover:text-white",
  };
  const cls = cx(base, styles[variant], className);
  if (!href) return <button className={cls} {...rest}>{children}</button>;
  const external = href.startsWith("http") || href.startsWith("mailto") || href.endsWith(".pdf");
  return external
    ? <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...rest}>{children}</a>
    : <Link href={href} className={cls} {...rest}>{children}</Link>;
}

export function Chip({ children, small }) {
  return (
    <span className={cx("rounded-full bg-soft text-[#2a3f9e]", small ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-[13px]")}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }) {
  return <div className={cx("mb-3 font-mono text-xs uppercase tracking-widest text-mute", className)}>{children}</div>;
}

export function Section({ className, children }) {
  return <section className={cx("border-b border-line py-20 md:py-24", className)}>{children}</section>;
}

export function SectionHead({ eyebrow, title, accent, action }) {
  return (
    <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl font-bold leading-none tracking-tight md:text-[54px]">
          {title} <span className="text-accent2">{accent}</span>.
        </h2>
      </div>
      {action}
    </div>
  );
}

export function PageHead({ eyebrow, children, sub, back }) {
  return (
    <header className="border-b border-line pb-16 pt-20">
      <Container className="animate-rise">
        {back}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">{children}</h1>
        {sub && <p className="mt-4 max-w-xl text-lg text-mute">{sub}</p>}
      </Container>
    </header>
  );
}

export function Accent({ children }) {
  return <span className="text-accent">{children}</span>;
}

export function InfoList({ items }) {
  return (
    <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-2.5 text-sm">
      {items.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="pt-0.5 font-mono text-xs uppercase text-mute">{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export { cx };
