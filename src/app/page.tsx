"use client";

import { useState, useEffect, useRef } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id || "home"); }),
      { threshold: 0.2 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = ["about", "experience", "projects", "contact"];

  const skills = [
    { category: "Cloud & Infra", icon: "☁", items: ["AWS (IAM, EC2, S3, VPC, RDS, ECS, ECR)", "Linode", "Terraform", "Helm"], color: "#3b82f6" },
    { category: "CI/CD", icon: "⚡", items: ["Jenkins", "GitHub Actions", "SonarQube", "Trivy"], color: "#f59e0b" },
    { category: "Observability", icon: "◎", items: ["Prometheus", "Grafana", "Node Exporter", "CloudWatch", "CloudTrail"], color: "#10b981" },
    { category: "Containers", icon: "⬡", items: ["Docker", "Kubernetes", "Helm"], color: "#8b5cf6" },
    { category: "Scripting", icon: "{ }", items: ["Python", "Bash", "MySQL", "MongoDB"], color: "#ec4899" },
    { category: "Tools", icon: "◆", items: ["n8n", "Mailcow", "Git", "GitHub"], color: "#14b8a6" },
  ];

  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "McMillan Technologies & Consultancy Services",
      period: "Mar 2025 – May 2026",
      tag: "RECENT",
      bullets: [
        "Designed CI/CD pipelines via Jenkins & GitHub webhooks — zero-downtime across multiple client environments",
        "Automated deployment workflows cutting manual effort by 80%+",
        "Migrated legacy apps to Docker — improved scalability & rollback reliability",
        "Provisioned cloud infra on Linode with Terraform modules",
        "Built Prometheus + Grafana + Node Exporter monitoring stack",
        "Developed n8n + Jenkins incident response: 3-min health checks, Telegram alerts, auto-restart on 500+",
        "Deployed & managed Mailcow mail server infrastructure",
      ],
    },
    {
      title: "WordPress Developer",
      company: "Copious Infotech",
      period: "Jan 2024 – Feb 2025",
      tag: "",
      bullets: [
        "Designed & maintained WordPress sites for multiple clients",
        "Managed theme customization, plugin config, and content updates",
        "Strengthened version control & deployment workflow practices",
      ],
    },
    {
      title: "Flutter Developer Intern",
      company: "Maverixpro Technology",
      period: "Jul 2023 – Jan 2024",
      tag: "",
      bullets: [
        "Built mobile UI components and gained hands-on experience with the full app development lifecycle",
      ],
    },
  ];

  const projects = [
    {
      num: "01", cat: "DEVOPS",
      title: "Monitoring & Self-Healing Infrastructure",
      desc: "Real-time observability + automated incident response. Health checks every 3 min, Telegram alerts, auto-restart on failure.",
      impact: ["Prometheus + Grafana dashboards", "3-min health checks via n8n", "Auto-restart on HTTP 500+"],
      tags: ["Prometheus", "Grafana", "n8n", "Jenkins"],
      accent: "#3b82f6",
    },
    {
      num: "02", cat: "DEVOPS",
      title: "CI/CD & DevOps Automation Platform",
      desc: "End-to-end pipeline with Jenkins & GitHub webhooks. Zero-downtime deploys across multiple client servers.",
      impact: ["80%+ reduction in manual effort", "Zero-downtime deployments", "Docker-based pipelines"],
      tags: ["Jenkins", "Docker", "GitHub Actions", "Webhooks"],
      accent: "#f59e0b",
    },
    {
      num: "03", cat: "CLOUD",
      title: "Cloud Infrastructure Automation",
      desc: "Reusable Terraform modules for VPCs, EC2, load balancers & auto-scaling on AWS and Linode.",
      impact: ["50% faster setup time", "99.9% uptime achieved", "25% fewer config errors"],
      tags: ["AWS", "Terraform", "Linode", "IaC"],
      accent: "#10b981",
    },
    {
      num: "04", cat: "MLOPS",
      title: "MLOps Pipeline — GlauDec",
      desc: "Containerized Python ML pipeline for glaucoma detection. Automated model build, test & deploy via GitHub Actions.",
      impact: ["Dockerized ML pipeline", "CI/CD with GitHub Actions", "Versioned Docker Hub images"],
      tags: ["Python", "Docker", "GitHub Actions"],
      accent: "#8b5cf6",
    },
    {
      num: "05", cat: "DEVSECOPS",
      title: "DevSecOps Pipeline — BoardGame App",
      desc: "Secure Jenkins pipeline with SonarQube quality gates and Trivy vulnerability scanning. K8s Helm deployment.",
      impact: ["95% defect-free via SonarQube", "Trivy vulnerability scanning", "40% deployment efficiency gain"],
      tags: ["Jenkins", "Kubernetes", "Helm", "SonarQube", "Trivy"],
      accent: "#ec4899",
    },
  ];

  const certs = [
    { name: "Jenkins", org: "KodeKloud", year: "2024" },
    { name: "Docker & Kubernetes Masterclass", org: "Udemy", year: "2024" },
    { name: "Flutter Developer", org: "MaverixPro Ltd", year: "2024" },
    { name: "Flutter UI Bootcamp", org: "Udemy", year: "2023" },
  ];

  const pill = (text: string, color: string): React.CSSProperties => ({
    fontSize: 10, padding: "3px 10px", borderRadius: 100,
    backgroundColor: `${color}15`, border: `1px solid ${color}30`, color,
    fontWeight: 700, letterSpacing: "0.08em",
  });

  const tagStyle = (): React.CSSProperties => ({
    fontSize: 11, padding: "4px 12px", borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(226,232,240,0.5)",
  });

  const sectionPad = isMobile ? "80px 1.25rem" : "120px 2rem";
  const headingSize = isMobile ? 30 : 40;

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#050508", color: "#e2e8f0", fontFamily: "'DM Sans','Inter',sans-serif", overflowX: "hidden" }}>

      {/* Ambient cursor glow — desktop only */}
      {!isMobile && (
        <div style={{ position: "fixed", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", left: mousePos.x - 300, top: mousePos.y - 300, pointerEvents: "none", zIndex: 0, transition: "left 0.4s ease, top 0.4s ease" }} />
      )}

      {/* Grid bg */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, backdropFilter: "blur(20px)", backgroundColor: "rgba(5,5,8,0.9)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0 }}>AA</div>
            <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.02em" }}>Aashish Anil</span>
          </div>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navLinks.map((link) => (
                <a key={link} href={`#${link}`} style={{ padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: activeSection === link ? "#a5b4fc" : "rgba(226,232,240,0.45)", backgroundColor: activeSection === link ? "rgba(99,102,241,0.12)" : "transparent", textDecoration: "none", textTransform: "capitalize", transition: "all 0.2s" }}>
                  {link}
                </a>
              ))}
              <a href="/Aashish_Anil_CV.pdf" download style={{ marginLeft: 8, padding: "7px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", textDecoration: "none" }}>
                Resume ↓
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px", color: "rgba(226,232,240,0.7)", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && menuOpen && (
          <div style={{ backgroundColor: "rgba(5,5,8,0.98)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)} style={{ padding: "10px 14px", borderRadius: 8, fontSize: 15, fontWeight: 500, color: activeSection === link ? "#a5b4fc" : "rgba(226,232,240,0.6)", backgroundColor: activeSection === link ? "rgba(99,102,241,0.12)" : "transparent", textDecoration: "none", textTransform: "capitalize" }}>
                {link}
              </a>
            ))}
            <a href="/Aashish_Anil_CV.pdf" download style={{ marginTop: 8, padding: "11px 14px", borderRadius: 8, fontSize: 14, fontWeight: 600, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", textDecoration: "none", textAlign: "center" }}>
              Download Resume ↓
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, border: "1px solid rgba(99,102,241,0.3)", backgroundColor: "rgba(99,102,241,0.07)", fontSize: 11, fontWeight: 500, color: "#a5b4fc", marginBottom: isMobile ? 28 : 36, width: "fit-content", letterSpacing: "0.05em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#22c55e", boxShadow: "0 0 8px #22c55e", display: "inline-block", flexShrink: 0 }} />
          OPEN TO OPPORTUNITIES
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem,10vw,6.5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 8, background: "linear-gradient(135deg,#e2e8f0 30%,rgba(226,232,240,0.35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Cloud &amp;
        </h1>
        <h1 style={{ fontSize: "clamp(2.8rem,10vw,6.5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: isMobile ? 24 : 36, background: "linear-gradient(135deg,#6366f1,#a78bfa,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          DevOps Engineer
        </h1>

        <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.8, color: "rgba(226,232,240,0.5)", maxWidth: 560, marginBottom: isMobile ? 28 : 40 }}>
          Results-driven engineer reducing manual deployment effort by{" "}
          <span style={{ color: "#a5b4fc", fontWeight: 600 }}>80%+</span> through pipeline automation and containerization. Passionate about MLOps and AI-driven infrastructure.
        </p>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", gap: 8, marginBottom: isMobile ? 32 : 44 }}>
          {[
            { icon: "📍", text: "Kannur, Kerala" },
            { icon: "✉", text: "aashishanil530@gmail.com", href: "mailto:aashishanil530@gmail.com" },
            { icon: "↗", text: "LinkedIn", href: "https://linkedin.com/in/aashishanil" },
          ].map((m) => {
            const s: React.CSSProperties = { display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: 13, color: "rgba(226,232,240,0.55)", textDecoration: "none" };
            return m.href
              ? <a key={m.text} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={s}><span>{m.icon}</span>{m.text}</a>
              : <div key={m.text} style={s}><span>{m.icon}</span>{m.text}</div>;
          })}
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 10 }}>
          <a href="#projects" style={{ padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", textAlign: "center" }}>View Projects →</a>
          <a href="#contact" style={{ padding: "13px 28px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(226,232,240,0.8)", fontWeight: 600, fontSize: 14, textDecoration: "none", textAlign: "center" }}>Let&apos;s Talk</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: sectionPad, borderTop: "1px solid rgba(255,255,255,0.04)" }}>

        <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 16 }}>ABOUT ME</p>
        <h2 style={{ fontSize: headingSize, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20, background: "linear-gradient(135deg,#e2e8f0,rgba(226,232,240,0.45))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Building systems that scale &amp; self-heal
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(226,232,240,0.48)", marginBottom: 14, maxWidth: 680 }}>
          I&apos;m a DevOps engineer focused on eliminating toil through automation. From CI/CD pipelines to self-healing infrastructure, I build systems that work even when people aren&apos;t watching.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(226,232,240,0.48)", marginBottom: 36, maxWidth: 680 }}>
          Currently exploring the intersection of MLOps and platform engineering — containerizing AI pipelines and making them production-grade.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 12, marginBottom: 56 }}>
          {[
            { val: "80%+", label: "Manual effort reduced" },
            { val: "5+", label: "Projects shipped" },
            { val: "99.9%", label: "Uptime achieved" },
            { val: "3 yrs", label: "Industry experience" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", background: "linear-gradient(135deg,#6366f1,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "rgba(226,232,240,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Skills — 2 col on desktop, 1 col on mobile */}
        <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 18 }}>TECHNICAL SKILLS</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 56 }}>
          {skills.map((s) => (
            <div key={s.category} style={{ padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: `${s.color}15`, border: `1px solid ${s.color}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: s.color, flexShrink: 0, fontFamily: "monospace" }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.08em", marginBottom: 8 }}>{s.category.toUpperCase()}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 100, backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(226,232,240,0.55)" }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 18 }}>CERTIFICATIONS</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 12 }}>
          {certs.map((c) => (
            <div key={c.name} style={{ padding: "18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,rgba(99,102,241,0.18),rgba(139,92,246,0.18))", border: "1px solid rgba(99,102,241,0.22)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, marginBottom: 10 }}>✦</div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 4, lineHeight: 1.4 }}>{c.name}</p>
              <p style={{ fontSize: 11, color: "rgba(226,232,240,0.3)" }}>{c.org} · {c.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: sectionPad, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 16 }}>EXPERIENCE</p>
        <h2 style={{ fontSize: headingSize, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: isMobile ? 40 : 60, background: "linear-gradient(135deg,#e2e8f0,rgba(226,232,240,0.45))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Where I&apos;ve worked
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp) => (
            <div key={exp.title} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 40, padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              {/* Meta */}
              <div style={{ flexShrink: 0, width: isMobile ? "auto" : 220 }}>
                <p style={{ fontSize: 12, color: "rgba(226,232,240,0.3)", marginBottom: 8 }}>{exp.period}</p>
                {exp.tag && <span style={pill(exp.tag, "#22c55e")}>{exp.tag}</span>}
              </div>
              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#e2e8f0", marginBottom: 4 }}>{exp.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(226,232,240,0.38)", marginBottom: 16 }}>{exp.company}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "rgba(226,232,240,0.58)", lineHeight: 1.65 }}>
                      <span style={{ color: "#6366f1", marginTop: 4, flexShrink: 0 }}>▸</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: 48, padding: isMobile ? "24px" : "36px", borderRadius: 16, border: "1px solid rgba(99,102,241,0.14)", backgroundColor: "rgba(99,102,241,0.04)" }}>
          <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 10 }}>EDUCATION</p>
          <h3 style={{ fontSize: isMobile ? 16 : 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#e2e8f0", marginBottom: 4 }}>B.Tech in Computer Science</h3>
          <p style={{ fontSize: 13, color: "rgba(226,232,240,0.38)", marginBottom: 6 }}>St. Thomas College of Engineering and Technology</p>
          <p style={{ fontSize: 12, color: "rgba(226,232,240,0.28)" }}>2019 – 2023</p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: sectionPad, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 16 }}>PROJECTS</p>
        <h2 style={{ fontSize: headingSize, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: isMobile ? 36 : 56, background: "linear-gradient(135deg,#e2e8f0,rgba(226,232,240,0.45))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Things I&apos;ve built
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Featured — stacks on mobile */}
          <div style={{ padding: isMobile ? "24px" : "40px", borderRadius: 16, border: "1px solid rgba(59,130,246,0.14)", backgroundColor: "rgba(59,130,246,0.04)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)", pointerEvents: "none" }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: "rgba(226,232,240,0.25)", fontFamily: "monospace" }}>01</span>
                <span style={pill("DEVOPS", "#3b82f6")}>DEVOPS</span>
              </div>
              <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#e2e8f0", marginBottom: 10, lineHeight: 1.3 }}>{projects[0].title}</h3>
              <p style={{ fontSize: 14, color: "rgba(226,232,240,0.48)", lineHeight: 1.75, marginBottom: 20 }}>{projects[0].desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {projects[0].tags.map((t) => <span key={t} style={tagStyle()}>{t}</span>)}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {projects[0].impact.map((imp) => (
                <div key={imp} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 10, backgroundColor: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.12)" }}>
                  <span style={{ color: "#3b82f6", flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: "rgba(226,232,240,0.65)" }}>{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid — 2 col desktop, 1 col mobile */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
            {projects.slice(1).map((p) => (
              <div key={p.num} style={{ padding: isMobile ? "22px" : "28px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,${p.accent}0a,transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, color: "rgba(226,232,240,0.2)", fontFamily: "monospace" }}>{p.num}</span>
                  <span style={pill(p.cat, p.accent)}>{p.cat}</span>
                </div>
                <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, letterSpacing: "-0.02em", color: "#e2e8f0", marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(226,232,240,0.44)", lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                <ul style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.impact.map((imp) => (
                    <li key={imp} style={{ display: "flex", gap: 8, fontSize: 12, color: "rgba(226,232,240,0.48)", alignItems: "flex-start" }}>
                      <span style={{ color: p.accent, flexShrink: 0, marginTop: 2 }}>▸</span>{imp}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((t) => <span key={t} style={tagStyle()}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: sectionPad, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 620 }}>
          <p style={{ fontSize: 11, color: "#6366f1", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 16 }}>CONTACT</p>
          <h2 style={{ fontSize: headingSize, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14, background: "linear-gradient(135deg,#e2e8f0,rgba(226,232,240,0.45))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Let&apos;s build something together
          </h2>
          <p style={{ fontSize: 15, color: "rgba(226,232,240,0.42)", lineHeight: 1.8, marginBottom: 32 }}>
            Open to new opportunities, collaborations, and interesting problems. Drop me a message — I&apos;ll get back to you.
          </p>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 10, marginBottom: 32 }}>
            {[
              { icon: "✉", text: "aashishanil530@gmail.com", href: "mailto:aashishanil530@gmail.com" },
              { icon: "↗", text: "LinkedIn", href: "https://linkedin.com/in/aashishanil" },
            ].map((l) => (
              <a key={l.text} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: 13, color: "rgba(226,232,240,0.55)", textDecoration: "none" }}>
                <span>{l.icon}</span>{l.text}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[{ key: "name", placeholder: "Your name", type: "text" }, { key: "email", placeholder: "Your email", type: "email" }].map((f) => (
              <input key={f.key} type={f.type} placeholder={f.placeholder}
                value={formData[f.key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)", color: "#e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }}
              />
            ))}
            <textarea placeholder="Your message" rows={5} value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)", color: "#e2e8f0", fontSize: 15, outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }}
            />
            <button onClick={() => console.log("Form:", formData)}
              style={{ padding: "14px 32px", borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", width: isMobile ? "100%" : "fit-content" }}>
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.04)", padding: "28px 1.25rem", textAlign: "center", fontSize: 12, color: "rgba(226,232,240,0.18)" }}>
        © 2026 Aashish Anil · Built with Next.js
      </footer>
    </main>
  );
}