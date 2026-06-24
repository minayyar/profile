import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "./Section";
import { SERVICES } from "./data";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I <span className="gradient-primary-text">Can Do</span> for you.</>}
      subtitle="From a single Kubernetes cluster to a full multi-cloud platform — end-to-end DevOps expertise."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group flex items-center gap-3 rounded-xl glass p-4 transition-all hover:border-primary"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground shadow-glow">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">{s}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
