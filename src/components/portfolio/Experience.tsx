import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record of <span className="gradient-primary-text">production-grade</span> work.</>}
      subtitle="Operating real systems, shipping real platforms, owning reliability end-to-end."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
        <div className="space-y-12">
          {EXPERIENCE.map((job, idx) => {
            const left = idx % 2 === 0;
            return (
              <motion.div
                key={job.role + job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid items-start gap-6 md:grid-cols-2 ${
                  left ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl glass p-6 hover-lift">
                    <div className="font-mono text-xs uppercase tracking-widest text-primary">
                      {job.period}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:text-right" : ""}`}>
                      {job.highlights.map((h) => (
                        <li key={h} className="leading-relaxed">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary shadow-glow ring-4 ring-background">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
