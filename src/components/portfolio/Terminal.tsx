import { motion } from "framer-motion";

const LINES = [
  { p: "$", c: "kubectl get nodes", color: "text-primary" },
  { p: "", c: "NAME            STATUS   ROLES           AGE   VERSION", color: "text-muted-foreground" },
  { p: "", c: "prod-cp-01      Ready    control-plane   312d  v1.30.3", color: "text-foreground" },
  { p: "", c: "prod-worker-01  Ready    <none>          312d  v1.30.3", color: "text-foreground" },
  { p: "", c: "prod-worker-02  Ready    <none>          312d  v1.30.3", color: "text-foreground" },
  { p: "$", c: "terraform apply -auto-approve", color: "text-primary" },
  { p: "", c: "Apply complete! Resources: 24 added, 3 changed, 0 destroyed.", color: "text-emerald-400" },
  { p: "$", c: "helm upgrade observability ./charts/obs --install", color: "text-primary" },
  { p: "", c: "Release \"observability\" has been upgraded. Happy Helming!", color: "text-emerald-400" },
];

export function TerminalShowcase() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl glass-strong shadow-card"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              majid@devops ~ /infra
            </span>
          </div>
          <pre className="p-6 font-mono text-xs leading-relaxed md:text-sm">
            {LINES.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={l.color}
              >
                {l.p && <span className="text-primary">{l.p} </span>}
                {l.c}
              </motion.div>
            ))}
            <span className="inline-block h-4 w-2 animate-blink bg-primary" />
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
