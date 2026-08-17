"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  {
    label: "GitHub",
    sub: "Emzzy241",
    href: "https://github.com/Emzzy241",
    icon: Github,
  },
  {
    label: "LinkedIn",
    sub: "emmanuel-mojiboye",
    href: "https://www.linkedin.com/in/emmanuel-mojiboye/",
    icon: Linkedin,
  },
  {
    label: "Fiverr",
    sub: "emzzyemmanuel",
    href: "https://www.fiverr.com/users/emzzyemmanuel/seller_dashboard",
    icon: ArrowUpRight,
  },
  {
    label: "Upwork",
    sub: "freelancers profile",
    href: "https://www.upwork.com/freelancers/~01f4b950d89fc4ed5a?viewMode=1",
    icon: ArrowUpRight,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll<HTMLElement>("[data-fade]");
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
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
    <section id="contact" ref={sectionRef} className="py-32 px-6 max-w-6xl mx-auto">
      {/* Big CTA */}
      <div
        data-fade
        style={{ opacity: 0, transform: "translateY(24px)" }}
        className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-10 md:p-16 overflow-hidden mb-20"
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <span className="font-mono text-accent text-xs tracking-widest uppercase">
          Contact
        </span>
        <h2
          className="font-display font-800 leading-tight mt-3 mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Let&apos;s build
          <br />
          something great.
        </h2>
        <p className="font-body text-paper/50 max-w-lg leading-relaxed mb-10">
          Whether you have a project in mind, want to collaborate, or just want
          to talk code — my inbox is always open.
        </p>
        <a
          href="mailto:emzzyoluwole@gmail.com"
          className="inline-flex items-center gap-3 bg-accent text-ink font-display font-700 text-base px-8 py-4 rounded-full hover:bg-accent/80 transition-colors group"
        >
          <Mail size={18} />
          emzzyoluwole@gmail.com
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Social links grid */}
      <div
        data-fade
        style={{ opacity: 0, transform: "translateY(24px)" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-border border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon size={18} className="text-paper/30 group-hover:text-accent transition-colors" />
                <ArrowUpRight
                  size={14}
                  className="text-paper/10 group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="font-display font-600 text-paper/80 text-sm">{link.label}</p>
              <p className="font-mono text-paper/30 text-xs mt-0.5">{link.sub}</p>
            </a>
          );
        })}

        {/* <iframe className="mt-8"
          src="https://dynasty241.substack.com/embed"
          width="480"
          height="320"
          style={{ border: '1px solid #EEE', background: 'white' }}
        ></iframe> */}

        <iframe className="display-flex mt-12"
          src="https://dynasty241.substack.com/embed?transparent=1&light=1"
          width="480"
          height="150"
          style={{ border: 0, background: 'transparent' }}
        ></iframe>

      </div>
    </section>
  );
}
