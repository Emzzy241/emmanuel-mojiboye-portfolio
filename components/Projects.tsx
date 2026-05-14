"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Youdemi",
    description:
      "A modern full-stack educational platform built with React.js, Node.js, Express, MongoDB, and Cloudinary. Features secure JWT Authentication, role-based access control for students, instructors, and admins, course management, media handling, and a responsive user experience — deployed live with active learning functionalities for students.",
    tags: ["Node.js", "Express", "MongoDB", "React", "Cloudinary"],
    link: "https://youdemi-frontend.vercel.app/",
    category: "Full-Stack",
    highlight: true,
  },
  {
    number: "02",
    title: "gh-tracker",
    description:
      "gh-tracker streamlines GitHub workflows by providing a fast, configurable CLI for managing repositories, issues, and pull requests directly from your terminal. It boosts productivity by eliminating the need to constantly switch to a browser, keeping you focused in your IDE.",
    tags: ["Node.js", "Commander.js", "Chalk", "Ora", "Axios", "Github REST API v3"],
    link: "https://github.com/Emzzy241/gh-tracker",
    category: "Backend",
    highlight: true,
  },

  {
    number: "03",
    title: "Youdemi",
    description:
      "A Dockerized full-stack educational platform. Features a Node.js backend, PostgreSQL database, Prisma ORM, and JWT Authentication — all containerized for seamless deployment.",
    tags: ["Node.js", "PostgreSQL", "Prisma", "Docker", "JWT"],
    link: "https://github.com/Emzzy241/Youdemi",
    category: "Full-Stack",
    highlight: true,
  },
  {
    number: "04",
    title: "Travela API 1.0",
    description:
      "Explore global destinations and share travel reviews through this REST API built with .NET 6.0. Offers clean endpoints for getting, posting, and updating travel reviews.",
    tags: [".NET 6.0", "REST API", "C#"],
    link: "https://github.com/Emzzy241/Travela-Api",
    category: "Backend",
    highlight: false,
  },
  // {
  //   number: "05",
  //   title: "Dyna-Lab",
  //   description:
  //     "A sleek frontend platform delivering real-time crypto financial data using the CoinGecko API. Displays live crypto prices, market caps, and trading volume.",
  //   tags: ["JavaScript", "jQuery", "Webpack", "CoinGecko API"],
  //   link: "https://github.com/Emzzy241/Library-Catalogue",
  //   category: "Frontend",
  //   highlight: false,
  // },
  // {
  //   number: "06",
  //   title: "Backend Dev Projects",
  //   description:
  //     "A series of evolving backend projects taking a simple To-Do app all the way to full-stack systems. A hands-on journey through scalable, secure application architecture.",
  //   tags: ["Node.js", "PostgreSQL", "Prisma", "JWT"],
  //   link: "https://github.com/Emzzy241/Backend-Development-Projects",
  //   category: "Backend",
  //   highlight: false,
  // },
  {
    number: "05",
    title: "Pet Management System",
    description:
      "A TypeScript-based virtual pet system inspired by Tamagotchi. Users create, track, and interact with pets by feeding, playing, and monitoring well-being attributes.",
    tags: ["TypeScript", "OOP"],
    link: "https://github.com/Emzzy241/Pet-Management-System",
    category: "TypeScript",
    highlight: false,
  },
];

export default function Projects() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div
        data-fade
        style={{ opacity: 0, transform: "translateY(24px)" }}
        className="flex items-end justify-between mb-16 flex-wrap gap-4"
      >
        <div>
          <span className="font-mono text-accent text-xs tracking-widest uppercase">
            Work
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl mt-3 leading-tight">
            Selected Projects
          </h2>
        </div>
        <a
          href="https://github.com/Emzzy241?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 font-mono text-sm text-paper/50 hover:text-accent transition-colors group"
        >
          All repos on GitHub{" "}
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-fade
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className={`group relative flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-white/10 hover:border-accent/30 transition-colors duration-300 ${
              project.highlight ? "md:bg-white/[0.02] md:rounded-2xl md:px-6 md:border md:border-white/10" : ""
            }`}
          >
            {/* Number */}
            <span className="font-mono text-xs text-paper/20 md:w-10 flex-shrink-0">
              {project.number}
            </span>

            {/* Title + tags */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display font-700 text-xl md:text-2xl group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="font-mono text-[10px] bg-accent/15 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                      Featured
                    </span>
                  )}
                </div>
                <p className="font-body text-paper/50 text-sm leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:w-72 md:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-paper/40 bg-white/5 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={20}
              className="text-paper/20 group-hover:text-accent transition-colors duration-200 flex-shrink-0"
            />

            {/* Category label */}
            <span className="hidden md:block font-mono text-[10px] text-paper/20 tracking-widest uppercase w-20 text-right flex-shrink-0">
              {project.category}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
