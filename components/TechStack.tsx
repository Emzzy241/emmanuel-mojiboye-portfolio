"use client";
import { useEffect, useRef } from "react";

const categories = [
  {
    name: "Backend",
    color: "#E8FF47",
    items: ["Node.js", "Express", "NestJS", ".NET 8.0", "REST APIs", "JWT Auth"],
  },
  {
    name: "Database",
    color: "#6EE7B7",
    items: ["PostgreSQL", "Prisma ORM", "MySQL", "Redis", "MongoDB"],
  },
  {
    name: "Frontend",
    color: "#93C5FD",
    items: ["TypeScript", "React", "Next.js", "JavaScript", "jQuery", "Webpack"],
  },
  {
    name: "DevOps & Cloud",
    color: "#F9A8D4",
    items: ["Docker", "Cloudinary", "Vercel", "Azure Static Web Apps", "GitHub Actions", "Linux"],
  },
  {
    name: "Principles",
    color: "#FCD34D",
    items: ["SOLID", "KISS", "Clean Architecture", "REST Design", "DRY", "TDD"],
  },
];

const marqueeItems = [
  "Node.js", "TypeScript", "MongoDB", "React", "PostgreSQL", "Prisma", "Docker", "Next.js",
  "Azure", "Vercel", ".NET", "React", "JWT", "REST APIs",
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll<HTMLElement>("[data-fade]");
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-16">
        <div data-fade style={{ opacity: 0, transform: "translateY(24px)" }}>
          <span className="font-mono text-accent text-xs tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl mt-3 leading-tight">
            Tools I build with
          </h2>
        </div>
      </div>

      {/* Category cards */}
      <div className="px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            data-fade
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="bg-border border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-colors duration-300 group"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: cat.color }}
              />
              <span
                className="font-display font-600 text-sm tracking-wide"
                style={{ color: cat.color }}
              >
                {cat.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-paper/50 bg-white/5 px-2.5 py-1 rounded-md group-hover:text-paper/70 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="border-y border-white/5 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display font-700 text-2xl text-paper/10 mx-8 uppercase tracking-widest"
            >
              {item}
              <span className="text-accent mx-4">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
