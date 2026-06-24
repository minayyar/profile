export const CONTACT = {
  name: "Majid Iqbal Nayyar",
  location: "Lahore, Pakistan",
  phone: "+92 322 8586046",
  whatsapp: "923228586046",
  email: "minayyar1@gmail.com",
  linkedin: "https://www.linkedin.com/in/minayyar/",
  github: "https://github.com/minayyar/",
};

export const SKILL_GROUPS = [
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    items: ["AWS", "DigitalOcean", "Azure", "Hetzner", "Linode"],
  },
  {
    title: "DevOps & CI/CD",
    icon: "GitBranch",
    items: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps", "Bitbucket Pipelines"],
  },
  {
    title: "Containers & Orchestration",
    icon: "Container",
    items: ["Docker", "Kubernetes", "Helm", "K3S", "RKE2", "Docker Swarm"],
  },
  {
    title: "Infrastructure as Code",
    icon: "Code2",
    items: ["Terraform", "Ansible"],
  },
  {
    title: "Monitoring & Logging",
    icon: "Activity",
    items: ["Prometheus", "Grafana", "ELK Stack", "Uptime Kuma", "Node Exporter", "cAdvisor"],
  },
  {
    title: "Web Servers & Networking",
    icon: "Network",
    items: ["NGINX", "HAProxy", "Route53", "LDAP", "Keycloak SSO"],
  },
  {
    title: "Programming & Platforms",
    icon: "Terminal",
    items: ["Linux", "Bash", "Node.js", "Next.js", "Laravel", "MongoDB", "MySQL", "PostgreSQL"],
  },
];

export const EXPERIENCE = [
  {
    role: "Sr. DevOps Engineer",
    company: "Gicoh Pakistan",
    period: "Present",
    highlights: [
      "Architected scalable, multi-region cloud infrastructure on AWS for production workloads.",
      "Designed and operated Kubernetes orchestration with Helm, RKE2 and GitOps workflows.",
      "Automated provisioning with Terraform and Ansible across staging and production.",
      "Integrated AWS Cognito and AWS Face Recognition for enterprise authentication flows.",
      "Deployed Keycloak SSO with LDAP federation for internal platforms.",
      "Built a full monitoring stack: Prometheus, Grafana, Loki and Uptime Kuma.",
      "Implemented security automation, image scanning and policy-as-code (CKS practices).",
      "Optimized CI/CD pipelines, cutting deployment times by 60%.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Alpha9 Solutions",
    period: "Previous",
    highlights: [
      "Administered Linux fleets and hardened production servers for SaaS clients.",
      "Built Kubernetes HA clusters with kube-vip and HAProxy load balancing.",
      "Containerized legacy applications using Docker and Docker Compose.",
      "Authored CI/CD pipelines on Bitbucket Pipelines, GitHub Actions and Azure DevOps.",
      "Configured NGINX reverse proxies, HAProxy front-ends and SSL termination.",
      "Rolled out monitoring with Prometheus + Grafana and centralized logging via ELK.",
    ],
  },
  {
    role: "DevOps Trainee",
    company: "LBIS Tech",
    period: "Earlier",
    highlights: [
      "Hands-on with Docker, Docker Compose and multi-node Kubernetes labs.",
      "Wrote Terraform modules and Ansible playbooks for repeatable deployments.",
      "Deployed and managed WordPress and Drupal stacks behind reverse proxies.",
    ],
  },
  {
    role: "Telecom / Network Engineer",
    company: "Telecom Industry",
    period: "Early Career",
    highlights: [
      "Operated transmission and IP backbone equipment for tier-1 telecom networks.",
      "Solid grounding in networking, routing, and high-availability operations — the foundation for today's cloud work.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    desc: "Unified RKE2 + EKS platform spanning AWS and Hetzner with GitOps deployments via ArgoCD.",
    tech: ["RKE2", "EKS", "ArgoCD", "Terraform", "Helm"],
    wins: ["Single pane of glass for 5+ clusters", "Zero-touch cluster bootstrap", "Cost down 35%"],
  },
  {
    title: "Automated CI/CD Pipeline System",
    desc: "End-to-end pipelines with build, scan, sign and progressive delivery across services.",
    tech: ["GitHub Actions", "GitLab CI", "Jenkins", "Trivy", "Cosign"],
    wins: ["Deploys cut from 40m → 8m", "Signed artifacts", "Auto rollback"],
  },
  {
    title: "High Availability Infrastructure",
    desc: "Active-active architecture with HAProxy, kube-vip and multi-AZ databases.",
    tech: ["HAProxy", "kube-vip", "PostgreSQL", "Patroni"],
    wins: ["99.99% uptime SLA", "Sub-second failover"],
  },
  {
    title: "AWS Authentication Platform",
    desc: "Cognito + Face Recognition workflow for KYC-grade identity verification.",
    tech: ["AWS Cognito", "Rekognition", "Lambda", "API Gateway"],
    wins: ["MFA + biometric", "Audit-ready logs"],
  },
  {
    title: "DevSecOps Monitoring Stack",
    desc: "Prometheus, Grafana, Loki, Falco and Trivy unified into one observability platform.",
    tech: ["Prometheus", "Grafana", "Loki", "Falco"],
    wins: ["MTTR cut 70%", "Runtime threat detection"],
  },
  {
    title: "AI Cloud Security Automation",
    desc: "Policy-as-code and anomaly detection for cloud workloads with automated remediation.",
    tech: ["OPA", "Kyverno", "Python", "AWS Security Hub"],
    wins: ["Auto-remediated 200+ findings/mo"],
  },
  {
    title: "Kubernetes Cluster Management Platform",
    desc: "Self-service portal for teams to provision namespaces, quotas and CI environments.",
    tech: ["Kubernetes", "Crossplane", "Backstage", "Helm"],
    wins: ["10x developer onboarding"],
  },
  {
    title: "SaaS Infrastructure Automation",
    desc: "Tenant-per-namespace SaaS platform with automated DNS, SSL, backups and metering.",
    tech: ["Terraform", "Ansible", "Route53", "cert-manager"],
    wins: ["Tenant in <5 minutes", "Zero manual ops"],
  },
];

export const CERTS = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/users/minayyar",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation / CNCF",
    url: "https://www.credly.com/users/minayyar",
  },
  {
    title: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "The Linux Foundation / CNCF",
    url: "https://www.credly.com/users/minayyar",
  },
];

export const SERVICES = [
  "Cloud Infrastructure Architecture",
  "Kubernetes Cluster Deployment",
  "CI/CD Pipeline Automation",
  "Infrastructure as Code",
  "Linux Server Administration",
  "DevSecOps Implementation",
  "Monitoring & Observability",
  "High Availability Architecture",
  "Docker Containerization",
  "Cloud Migration",
  "Performance Optimization",
  "Security Hardening",
  "Reverse Proxy & Load Balancing",
  "Disaster Recovery Planning",
  "Microservices Deployment",
  "SaaS Infrastructure Setup",
  "AI Infrastructure Automation",
  "Database Deployment & Optimization",
  "GitOps Workflows",
  "SSL & Domain Management",
  "Backup & Recovery Automation",
  "Cost Optimization",
  "Production Support",
  "On-Premise Infrastructure Setup",
];

export const STATS = [
  { value: 50, suffix: "+", label: "Production Deployments" },
  { value: 8, suffix: "+", label: "Years in Infrastructure" },
  { value: 99.99, suffix: "%", label: "Uptime Achieved" },
  { value: 3, suffix: "", label: "Industry Certifications" },
];
