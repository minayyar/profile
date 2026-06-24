import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Server,
  GitBranch,
  Cpu,
  Shield,
  Download,
  MessageCircle,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";
import profilePic from "@/assets/majid.jpg";
import { CONTACT } from "./data";

const TITLES = [
  "Cloud & DevOps Engineer",
  "AWS Certified Solutions Architect",
  "CKA & CKS Certified",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1);
      setText(next);
      if (!del && next === w) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((x) => x + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

const FLOAT_ICONS = [
  { Icon: Cloud, x: "8%", y: "20%", delay: 0 },
  { Icon: Container, x: "85%", y: "18%", delay: 1 },
  { Icon: Server, x: "12%", y: "75%", delay: 2 },
  { Icon: GitBranch, x: "88%", y: "70%", delay: 1.5 },
  { Icon: Cpu, x: "78%", y: "45%", delay: 0.5 },
  { Icon: Shield, x: "18%", y: "45%", delay: 2.5 },
];

export function Hero() {
  const typed = useTyping(TITLES);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      {FLOAT_ICONS.map(({ Icon, x, y, delay }, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden text-primary/30 md:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon className="h-10 w-10" />
        </motion.div>
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for senior DevOps roles & consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Designing <span className="gradient-primary-text">Scalable Cloud</span>{" "}
            Infrastructure & Automating Modern{" "}
            <span className="gradient-text">DevOps Workflows</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Results-driven DevOps Engineer specializing in Kubernetes, Cloud Infrastructure,
            CI/CD Automation, Linux Administration, and High Availability Architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex h-7 items-center gap-2 font-mono text-sm text-primary"
          >
            <span className="text-muted-foreground">$</span>
            <span>{typed}</span>
            <span className="inline-block h-5 w-0.5 animate-blink bg-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover-lift"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary"><Mail className="h-5 w-5" /></a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400"><MessageCircle className="h-5 w-5" /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-3xl glass-strong p-2 shadow-purple-glow">
            <img
              src={profilePic}
              alt="Majid Iqbal Nayyar — Senior Cloud & DevOps Engineer"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl glass-strong px-4 py-3 shadow-card">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Based in</p>
            <p className="text-sm font-semibold">Lahore, Pakistan</p>
          </div>
          <div className="absolute -right-4 -top-4 rounded-2xl glass-strong px-4 py-3 shadow-card">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Certified</p>
            <p className="text-sm font-semibold gradient-primary-text">AWS · CKA · CKS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
