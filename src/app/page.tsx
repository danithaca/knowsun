export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--navy)", color: "var(--white)" }}>
      <Nav />
      <main>
        <Hero />
        <Niche />
        <WhyNotAI />
        <Approach />
        <About />
        <Culture />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────── NAV ─────────────── */
function Nav() {
  return (
    <nav
      style={{ background: "rgba(12,27,58,0.95)", borderBottom: "1px solid rgba(30,143,255,0.15)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight" style={{ color: "var(--white)" }}>
          <KnowsunLogo />
          <span>Knowsun</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--gray)" }}>
          <a href="#niche" className="hover:text-white transition-colors">What We Do</a>
          <a href="#approach" className="hover:text-white transition-colors">Our Approach</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--blue)", color: "var(--white)" }}
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 pt-48 pb-36 min-h-screen"
      style={{ background: "linear-gradient(160deg, #0C1B3A 60%, #0d2155 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl opacity-10"
          style={{ width: 700, height: 700, top: "-20%", left: "50%", transform: "translateX(-50%)", background: "var(--blue)" }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--blue)" }}>
          Michigan &amp; Midwest · AI/ML Consulting
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          AI-First Consulting for the{" "}
          <span style={{ color: "var(--blue-light)" }}>Businesses Big Tech Ignores</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "var(--gray)" }}>
          Boutique AI and ML expertise, built for small and mid-sized businesses. We bring enterprise-scale experience directly to you — at a price that makes sense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--blue)", color: "var(--white)" }}
          >
            Work With Us
          </a>
          <a
            href="#niche"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-white/10"
            style={{ border: "1.5px solid rgba(30,143,255,0.4)", color: "var(--gray)" }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── NICHE ─────────────── */
function Niche() {
  return (
    <section id="niche" className="py-24 px-6" style={{ background: "var(--navy-light)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
          The AI era is reshaping what&rsquo;s possible.<br />
          <span style={{ color: "var(--blue-light)" }}>Most businesses won&rsquo;t see the benefit.</span>
        </h2>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--gray)" }}>
          Large consultancies are chasing enterprise contracts. Startups are building for startups. Small and mid-sized businesses in the Midwest are left to figure it out alone — or waste money on tools that don&rsquo;t fit.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🏗️",
              title: "Custom AI Products",
              body: "We build AI-first workflows and software tailored to your actual operations — not generic SaaS you&rsquo;ll never fully use.",
            },
            {
              icon: "📍",
              title: "Local Focus",
              body: "Michigan and the Midwest. We prefer clients nearby — real relationships, not remote-only engagements.",
            },
            {
              icon: "💡",
              title: "Better Value",
              body: "AI multiplies our output. We pass those gains to you: faster delivery, lower cost, without cutting corners.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl"
              style={{ background: "rgba(30,143,255,0.06)", border: "1px solid rgba(30,143,255,0.15)" }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}
                dangerouslySetInnerHTML={{ __html: card.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── WHY NOT AI ─────────────── */
function WhyNotAI() {
  return (
    <section id="why" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>The Obvious Question</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Why hire consultants when AI can code?
        </h2>
        <p className="text-lg mb-12" style={{ color: "var(--gray)" }}>
          Fair question. Here&rsquo;s the honest answer:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Experience still drives outcomes",
              body: "Knowing what to ask AI, what to reject, and how to make the right design trade-offs — that&rsquo;s a skill. Raw output isn&rsquo;t the hard part anymore. Judgment is.",
            },
            {
              title: "Accountability matters",
              body: "AI doesn&rsquo;t own the code, support it, or maintain it. We do. When something breaks at 2am, that&rsquo;s on us — not a chatbot.",
            },
            {
              title: "Focus on your business",
              body: "Even if you could build it yourself, should you? Let us handle AI tooling so you can focus on the value you deliver to your customers.",
            },
            {
              title: "AI still needs human judgment",
              body: "Architecture decisions, product sense, trade-offs, security, performance — opinionated engineering judgment is still human work.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div
                className="mt-1 w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: "var(--blue)", minWidth: 20, minHeight: 20 }}
              />
              <div>
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── APPROACH ─────────────── */
function Approach() {
  const pillars = [
    {
      num: "01",
      title: "Human-Centered AI",
      body: "Technology built around real human needs. Dr. Zhou&rsquo;s PhD was literally on this — it&rsquo;s not a marketing line.",
    },
    {
      num: "02",
      title: "AI-First Delivery",
      body: "Approximately 99% of code written with AI, guided by experienced engineers. Faster delivery, significantly lower cost.",
    },
    {
      num: "03",
      title: "Reasonable Pricing",
      body: "We&rsquo;re building new consulting models for the AI era. Pricing that works for small and mid-sized businesses, not just enterprise.",
    },
    {
      num: "04",
      title: "Local Partnership",
      body: "We prefer Midwest clients and real working relationships over remote-only transactional engagements.",
    },
  ];

  return (
    <section id="approach" className="py-24 px-6" style={{ background: "var(--navy-light)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Our Approach</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight">
          Four pillars. No fluff.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-8 rounded-2xl"
              style={{ background: "rgba(12,27,58,0.8)", border: "1px solid rgba(30,143,255,0.15)" }}
            >
              <div className="text-4xl font-extrabold mb-3 opacity-30" style={{ color: "var(--blue)" }}>
                {p.num}
              </div>
              <h3 className="font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Enterprise AI expertise.<br />
              <span style={{ color: "var(--blue-light)" }}>Now working for you.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--gray)" }}>
              Knowsun is led by <strong style={{ color: "var(--white)" }}>Dr. Daniel Zhou</strong>, who holds a PhD in Human-Centered AI from the University of Michigan School of Information (2013) and brings 15+ years of AI/ML experience.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--gray)" }}>
              His last decade was spent at Amazon AWS, where he launched or led some of the most widely-used AI services in the cloud: <strong style={{ color: "var(--white)" }}>AWS Comprehend, AWS Translate, AWS Kendra, Q Business</strong> (GenAI enterprise Q&amp;A), and <strong style={{ color: "var(--white)" }}>Quick Suite</strong> (enterprise Agentic AI).
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--gray)" }}>
              Now he&rsquo;s applying that scale of expertise to help small and mid-sized businesses compete in the AI era — without the enterprise price tag.
            </p>
          </div>
          <div className="md:col-span-2">
            <div
              className="p-6 rounded-2xl"
              style={{ background: "rgba(30,143,255,0.06)", border: "1px solid rgba(30,143,255,0.2)" }}
            >
              <div className="font-bold text-sm mb-4 tracking-wide" style={{ color: "var(--blue)" }}>
                CREDENTIALS
              </div>
              {[
                "PhD, Human-Centered AI — University of Michigan",
                "15+ years AI/ML experience",
                "AWS Comprehend · AWS Translate",
                "AWS Kendra · Q Business · Quick Suite",
                "Amazon AWS, 10 years",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-3 last:mb-0">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--blue-light)" }} />
                  <p className="text-sm leading-snug" style={{ color: "var(--gray)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CULTURE ─────────────── */
function Culture() {
  return (
    <section id="culture" className="py-24 px-6" style={{ background: "var(--navy-light)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>How We Work</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Built for the AI era.<br />
          <span style={{ color: "var(--blue-light)" }}>From the inside out.</span>
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--gray)" }}>
          We don&rsquo;t just build AI products — we run on AI ourselves. That shapes how we hire, how we work, and what we expect.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📅",
              title: "3-Day Workweek",
              body: "In the AI era, people should work less. We believe AI multiplies output — so we pass that time back to our team. Work smarter, live better.",
            },
            {
              icon: "👥",
              title: "Pair Programming",
              body: "Every unit works in pairs: junior + senior, or peer + peer. Better code, faster learning, shared ownership of quality.",
            },
            {
              icon: "🤖",
              title: "AI-Native",
              body: "We don&rsquo;t fight AI — we build with it. If you want to work at the frontier of how software gets built, this is the place.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl"
              style={{ background: "rgba(12,27,58,0.8)", border: "1px solid rgba(30,143,255,0.15)" }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}
                dangerouslySetInnerHTML={{ __html: card.body }}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm mb-3" style={{ color: "var(--gray)" }}>Interested in joining us?</p>
          <a
            href="#contact"
            className="text-sm font-semibold underline underline-offset-4 transition-colors hover:text-white"
            style={{ color: "var(--blue-light)" }}
          >
            Reach out &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PORTFOLIO ─────────────── */
function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Our Work</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
          Projects in progress.
        </h2>
        <p className="text-base mb-10" style={{ color: "var(--gray)" }}>
          We currently have two projects underway, both in stealth mode. Details coming soon.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {["Stealth Project 01", "Stealth Project 02"].map((label, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl flex flex-col items-center justify-center text-center"
              style={{
                background: "rgba(30,143,255,0.04)",
                border: "1px dashed rgba(30,143,255,0.25)",
                minHeight: 180,
              }}
            >
              <div className="text-2xl mb-2 opacity-30">🔒</div>
              <p className="font-semibold text-sm" style={{ color: "var(--gray)" }}>{label}</p>
              <p className="text-xs mt-1 opacity-50" style={{ color: "var(--gray)" }}>Details coming soon</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-center" style={{ color: "var(--gray)" }}>
          Curious about our approach?{" "}
          <a
            href="#contact"
            className="font-semibold underline underline-offset-4 hover:text-white transition-colors"
            style={{ color: "var(--blue-light)" }}
          >
            Ask us about our work &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--navy-light)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Let&rsquo;s talk.
        </h2>
        <p className="text-base mb-10" style={{ color: "var(--gray)" }}>
          Based in Ann Arbor, Michigan. Serving clients across the Midwest — and beyond when the project is the right fit.
        </p>
        <form
          action="https://formspree.io/f/mdawabla"
          method="POST"
          className="text-left space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1 tracking-wide" style={{ color: "var(--gray)" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all"
                style={{
                  background: "rgba(12,27,58,0.8)",
                  border: "1px solid rgba(30,143,255,0.2)",
                  color: "var(--white)",
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 tracking-wide" style={{ color: "var(--gray)" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all"
                style={{
                  background: "rgba(12,27,58,0.8)",
                  border: "1px solid rgba(30,143,255,0.2)",
                  color: "var(--white)",
                }}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 tracking-wide" style={{ color: "var(--gray)" }}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project or question..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none focus:ring-2 transition-all"
              style={{
                background: "rgba(12,27,58,0.8)",
                border: "1px solid rgba(30,143,255,0.2)",
                color: "var(--white)",
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:opacity-90"
            style={{ background: "var(--blue)", color: "var(--white)" }}
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-sm" style={{ color: "var(--gray)" }}>
          Or email us directly:{" "}
          <a
            href="mailto:support@knowsun.com"
            className="font-semibold hover:text-white transition-colors"
            style={{ color: "var(--blue-light)" }}
          >
            support@knowsun.com
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-xs"
      style={{ background: "var(--navy)", borderTop: "1px solid rgba(30,143,255,0.1)", color: "var(--gray)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Knowsun Consulting LLC · Ann Arbor, Michigan</p>
        <p>
          <a href="mailto:support@knowsun.com" className="hover:text-white transition-colors">
            support@knowsun.com
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ─────────────── SHARED ─────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>
      {children}
    </p>
  );
}

function KnowsunLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28">
      <defs>
        <linearGradient id="navSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E8FFF" />
          <stop offset="100%" stopColor="#00C8FF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="#0C1B3A" />
      <line x1="16" y1="3.5" x2="16" y2="1" stroke="#1E8FFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.8" y1="9.2" x2="24.7" y2="7.3" stroke="#1E8FFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="25.5" y1="16" x2="28" y2="16" stroke="#1E8FFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.8" y1="22.8" x2="24.7" y2="24.7" stroke="#1E8FFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16" y1="25.5" x2="16" y2="28" stroke="#1E8FFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="9.2" y1="22.8" x2="7.3" y2="24.7" stroke="#1E8FFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6.5" y1="16" x2="4" y2="16" stroke="#1E8FFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="9.2" y1="9.2" x2="7.3" y2="7.3" stroke="#1E8FFF" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="9.5" fill="#0C1B3A" stroke="#1E8FFF" strokeWidth="1.8" />
      <line x1="11" y1="10" x2="11" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="11" y1="16" x2="20" y2="10.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11" y1="16" x2="20" y2="21.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
