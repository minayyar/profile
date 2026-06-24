import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
