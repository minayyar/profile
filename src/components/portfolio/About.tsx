import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, FlaskConical, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { STATS } from "./data";

function useCount(target: number, inView: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setVal(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return val;
}

function Stat({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const v = useCount(value, inView);
  const display = value % 1 === 0 ? Math.floor(v).toString() : v.toFixed(2);
  return (
    <div className="rounded-2xl glass p-6 text-center hover-lift">
      <div className="gradient-primary-text text-3xl font-bold md:text-4xl">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

const BADGES = [
  { icon: Award, text: "AWS Solutions Architect Associate" },
  { icon: BadgeCheck, text: "Certified Kubernetes Administrator (CKA)" },
  { icon: BadgeCheck, text: "Certified Kubernetes Security Specialist (CKS)" },
  { icon: FlaskConical, text: "Strong R&D and problem-solving mindset" },
  { icon: Sparkles, text: "Expert in modern DevOps & cloud-native stacks" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Senior DevOps Engineer building <span className="gradient-primary-text">cloud-native</span> platforms.</>}
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            <span className="font-semibold text-foreground">Majid Iqbal Nayyar</span> is a Senior
            DevOps Engineer with deep expertise across{" "}
            <span className="text-foreground">AWS, Kubernetes, Docker, Terraform, CI/CD, Linux
            administration, cloud infrastructure, observability, and security automation</span>.
          </p>
          <p>
            He designs scalable cloud-native systems, implements high-availability architectures,
            automates deployments, and continuously optimizes infrastructure reliability and cost
            across multiple cloud platforms.
          </p>
          <p>
            With a strong R&amp;D mindset and hands-on engineering background, Majid bridges the gap
            between platform engineering, security, and developer experience.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 rounded-xl glass p-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 gap-4 self-start">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </Section>
  );
}
