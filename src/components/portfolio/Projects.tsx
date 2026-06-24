import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Enterprise-grade <span className="gradient-primary-text">DevOps platforms</span> I've built.</>}
      subtitle="Real architectures shipped to production — multi-cloud, secure, observable, automated."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 hover-lift"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
            <div className="relative flex items-start justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl glass-strong text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="relative mt-5 text-lg font-bold">{p.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="relative mt-5 space-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
              {p.wins.map((w) => (
                <li key={w} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" /> {w}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
