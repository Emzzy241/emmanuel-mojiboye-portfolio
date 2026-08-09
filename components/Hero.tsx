"use client";
import { useEffect, useRef } from "react";
import { ArrowDownRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150 + i * 120);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 pt-32 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,255,71,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Status badge */}
      <div
        data-reveal
        className="mb-12 inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 w-fit backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-xs text-paper/60 tracking-widest uppercase">
          Available for work
        </span>
      </div>

      {/* Main headline */}
      <div className="mb-8">
        <h1
          data-reveal
          className="font-display font-800 leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          Full-Stack
          <br />
          <span className="text-accent italic">Developer</span>
          <br />
          &amp; Engineer
        </h1>
      </div>

      {/* Bottom bar */}
      <div
        data-reveal
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/10"
      >
        {/* Description */}
        <p className="font-body text-paper/60 max-w-md leading-relaxed text-base md:text-lg">
          I&apos;m{" "}
          <span className="text-paper font-500">Emmanuel Mojiboye,</span> I
          craft scalable backend systems, build clean APIs, and develop  modern interfaces
          that just work.
        </p>

        {/* Right side: social + scroll cue */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Emzzy241"
              target="_blank"
              rel="noreferrer"
              className="text-paper/40 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-mojiboye/"
              target="_blank"
              rel="noreferrer"
              className="text-paper/40 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/EmmanuelMojiboy"
              target="_blank"
              rel="noreferrer"
              className="text-paper/40 hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-1 bg-accent text-ink font-display font-700 text-sm px-5 py-3 rounded-full hover:bg-accent/80 transition-colors group"
          >
            View Work
            <ArrowDownRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-reveal
        className="absolute bottom-8 right-6 flex flex-col items-center gap-2 text-paper/20"
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-paper/20 to-transparent" />
      </div>
    </section>
  );
}
