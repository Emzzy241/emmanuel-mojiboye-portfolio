export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-display font-800 text-lg tracking-tight text-paper"
        >
          em<span className="text-accent">.</span>
        </a>
        <p className="font-mono text-paper/20 text-xs">
          © {year} Emmanuel Mojiboye. Architecting clean code.
        </p>
        <p className="font-mono text-paper/20 text-xs">
          Built with Next.js + TypeScript
        </p>
      </div>
    </footer>
  );
}
