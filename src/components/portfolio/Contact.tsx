import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { CONTACT } from "./data";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const msg = String(form.get("message") || "");
    if (!name || !email || !msg) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
    window.location.href = `mailto:${CONTACT.email}?subject=Project%20inquiry%20from%20${encodeURIComponent(name)}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build your <span className="gradient-primary-text">cloud platform</span>.</>}
      subtitle="Let's discuss your cloud infrastructure, DevOps automation, or Kubernetes projects."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-5 hover-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
              <p className="font-semibold">{CONTACT.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex items-center gap-4 rounded-2xl glass p-5 hover-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/20 text-primary">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-semibold">{CONTACT.email}</p>
            </div>
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-5 hover-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0A66C2]/20 text-[#0A66C2]">
              <Linkedin className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="font-semibold">/in/minayyar</p>
            </div>
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-5 hover-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-foreground/10">
              <Github className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="font-semibold">@minayyar</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl glass p-5">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="font-semibold">{CONTACT.location}</p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass-strong p-6 shadow-card md:p-8"
        >
          <h3 className="text-xl font-bold">Send a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell me about your project, infrastructure or challenge.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                name="name"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full resize-none rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your infrastructure needs…"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
          </button>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Phone className="h-3.5 w-3.5" /> Or call directly: {CONTACT.phone}
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
