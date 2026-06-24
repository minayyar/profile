import { Cloud, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "./data";

const LINKS = ["About", "Skills", "Experience", "Projects", "Services", "Certifications", "Contact"];
const STACK = ["AWS", "Kubernetes", "Docker", "Terraform", "Ansible", "Helm", "Prometheus", "Grafana", "Linux", "NGINX"];

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Cloud className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-bold gradient-text">Majid.devops</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Senior Cloud &amp; DevOps Engineer designing scalable infrastructure, automating
            deployments, and operating production Kubernetes at scale.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass hover-lift"><Linkedin className="h-4 w-4" /></a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass hover-lift"><Github className="h-4 w-4" /></a>
            <a href={`mailto:${CONTACT.email}`} className="grid h-10 w-10 place-items-center rounded-lg glass hover-lift"><Mail className="h-4 w-4" /></a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass hover-lift"><MessageCircle className="h-4 w-4 text-emerald-400" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-foreground transition-colors hover:text-primary">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Certifications</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>AWS Solutions Architect</li>
            <li>CKA — Kubernetes Admin</li>
            <li>CKS — K8s Security</li>
          </ul>
          <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {STACK.map((t) => (
              <span key={t} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Majid Iqbal Nayyar. All rights reserved.</p>
        <p>Built with TanStack Start, React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
