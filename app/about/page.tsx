import type { Metadata } from "next";
import Link from "next/link";
import TeamSection, { type TeamMember } from "./TeamSection";

export const metadata: Metadata = {
  title: "About Us — Meet Our Team",
  description:
    "Meet the licensed agents at Lamb Insurance Agency in Sarasota, FL. Real people who listen, explain your coverage clearly, and help you find protection that fits your budget — in English and Spanish.",
  alternates: { canonical: "https://lambinsuranceagency.com/about" },
};

const PHONE_MAIN = "941.225.2335";
const PHONE_MAIN_TEL = "tel:+19412252335";

const TEAM: TeamMember[] = [
  {
    name: "Cody Lamb",
    role: "Licensed Insurance Agent",
    photo: "/team/cody-lamb.jpg",
    blurb:
      "I want every client to feel like they’re working with a neighbor, not a call center. I listen first, explain your options in plain language, and help you find coverage that fits your life and your budget.",
  },
  {
    name: "Latoya",
    role: "Licensed Insurance Agent",
    photo: "/team/latoya.jpg",
    blurb:
      "With 15 years as a licensed agent, I’ve helped countless families find meaningful savings without sacrificing protection. To me, insurance is about people, not just policies — and I’m here to be someone you can trust.",
  },
  {
    name: "Josh",
    role: "Licensed Insurance Agent",
    photo: "/team/josh.jpg",
    blurb:
      "With 5+ years in insurance, I follow the Golden Rule: treat every client the way I’d want to be treated. I’ve helped hundreds of families, in English and Spanish, find the right coverage at a price that fits.",
  },
  {
    name: "Allana",
    role: "Licensed Insurance Agent",
    photo: "/team/allana.jpg",
    blurb:
      "Since 2023, I’ve helped clients navigate their options and find coverage that truly works for them. Licensed in Florida and Georgia, I keep the process easy, answer every question, and make sure you feel protected.",
  },
];

const VALUES = [
  {
    icon: "🤝",
    title: "Honesty first",
    desc: "Straight answers about what you’re covered for — and what you’re not.",
  },
  {
    icon: "💬",
    title: "Plain language",
    desc: "We explain your options so you can make a confident decision.",
  },
  {
    icon: "📍",
    title: "Local & personal",
    desc: "A Sarasota team that knows your name and picks up the phone.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy-950">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col leading-none group" aria-label="Lamb Insurance Agency — home">
            <span className="font-display text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-sage-300 transition-colors">
              Lamb Insurance
            </span>
            <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">Agency</span>
          </Link>
          <nav className="flex items-center gap-5 md:gap-8" aria-label="Main navigation">
            <Link
              href="/"
              className="nav-link hidden sm:inline text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#contact"
              className="btn-primary px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Intro */}
        <section className="hero-pattern relative overflow-hidden" aria-labelledby="about-heading">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-sage-400" aria-hidden="true" />
                <span className="text-sage-300 text-xs font-body uppercase tracking-widest">About Us</span>
              </div>
              <h1
                id="about-heading"
                className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              >
                Real people. <span className="text-sage-300">Real answers.</span>
              </h1>
              <p className="text-navy-200 text-base md:text-lg leading-relaxed font-body max-w-2xl">
                Lamb Insurance Agency is a local Sarasota team that believes insurance should be simple,
                personal, and built around you. When you call us, you talk to a licensed agent who
                takes the time to understand your needs — not a call center.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-warm border-b border-sage-100" aria-label="Our values">
          <div className="max-w-6xl mx-auto px-5 py-10 grid sm:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">{v.icon}</span>
                <div>
                  <p className="font-display font-bold text-navy-800">{v.title}</p>
                  <p className="text-navy-600 font-body text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <TeamSection team={TEAM} />

        {/* CTA */}
        <section className="bg-navy-900" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-5 py-16 md:py-20 text-center">
            <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Let&#39;s find the right coverage together.
            </h2>
            <p className="text-navy-300 font-body mb-8 max-w-xl mx-auto">
              Reach out for a free, no-pressure quote. One of our agents will walk you through your
              options — in English or Spanish.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
              >
                Get Your Free Quote
              </Link>
              <a
                href={PHONE_MAIN_TEL}
                className="btn-outline px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
              >
                📞 Call {PHONE_MAIN}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 text-navy-500 text-xs font-body">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Lamb Insurance Agency. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-navy-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-navy-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
