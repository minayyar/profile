import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Container,
  Code2,
  Activity,
  Network,
  Terminal,
} from "lucide-react";
import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";

const ICONS = { Cloud, GitBranch, Container, Code2, Activity, Network, Terminal };

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Tools I use to <span className="gradient-primary-text">ship & scale</span>.</>}
      subtitle="A focused stack covering cloud, orchestration, automation, observability and platform engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = ICONS[group.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover-lift"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
