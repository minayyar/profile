import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { CERTS } from "./data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Industry-recognized <span className="gradient-primary-text">credentials</span>.</>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {CERTS.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 hover-lift"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-3xl transition-opacity group-hover:opacity-50" />
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Award className="h-6 w-6 text-primary-foreground" />
            </span>
            <h3 className="relative mt-5 text-base font-bold leading-snug">{c.title}</h3>
            <p className="relative mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Verify on Credly <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
