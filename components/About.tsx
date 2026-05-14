"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "4+", label: "Years Building" },
  { value: "50+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Domains" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els =
              entry.target.querySelectorAll<HTMLElement>("[data-fade]");
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: image / graphic */}
        {/* <Image src="/app/assets/Images/Dynasty-Portfolio.png" alt="" width={500} height={50} /> */}
        <div
          data-fade
          style={{ opacity: 0, transform: "translateY(24px)" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            {/* Abstract code background */}
            <div className="absolute inset-0 p-8 font-mono text-xs text-paper/10 leading-6 overflow-hidden select-none">
              {/* {`const api = express();
api.use(cors());
api.use(json());

const prisma = new PrismaClient();

api.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

api.post('/users', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.json(user);
});

api.listen(3000, () => {
  console.log('Server running');
});

// Clean. Scalable. Yours.`} */}
              <Image
                src="/Images/Dynasty-Portfolio.png"
                alt="Emmanuel Mojiboye"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            {/* Name badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-display font-700 text-2xl text-paper">
                  Emmanuel
                </p>
                <p className="font-body text-paper/50 text-sm">Mojiboye</p>
              </div>
              <div className="bg-accent rounded-xl px-3 py-1.5">
                <p className="font-mono text-ink text-xs font-500">
                  Full-Stack
                </p>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="absolute -top-6 -right-6 bg-border border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-mono text-accent text-xs mb-1">// motto</p>
            <p className="font-body text-paper/70 text-sm max-w-[160px] leading-snug">
              {/* Clean code is not a nice-to-have, it&apos;s the foundation. */}
              We are standing on the shoulders of those who came before us
            </p>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-8">
          <div
            data-fade
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <span className="font-mono text-accent text-xs tracking-widest uppercase">
              About me
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl mt-3 leading-tight">
              Backend at heart,
              <br />
              <span className="text-paper/40">full-stack in practice.</span>
            </h2>
          </div>

          <div
            data-fade
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="flex flex-col gap-4 text-paper/60 font-body leading-relaxed"
          >
            <p>
              I&apos;m Emmanuel, a full-stack developer with a deep love for
              backend architecture. I design APIs that developers enjoy working
              with, build databases that scale, and bring it all together with
              clean, responsive frontends.
            </p>
            <p>
              My approach is guided by{" "}
              <span className="text-accent">SOLID principles</span> and a
              belief that maintainable, elegant code outlasts anything hacked
              together. I&apos;m just as comfortable on the command line
              wiring up Docker as I am pushing a pixel-perfect UI.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring cloud platforms,
              learning new deployment patterns, or turning a hobby project into
              something real.
            </p>
          </div>

          {/* Stats */}
          <div
            data-fade
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-800 text-3xl text-accent">
                  {s.value}
                </p>
                <p className="font-body text-paper/50 text-xs mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
