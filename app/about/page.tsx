import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Meet Our Team",
  description:
    "Meet the licensed agents at Lamb Insurance Agency in Sarasota, FL. Real people who listen, explain your coverage clearly, and help you find protection that fits your budget — in English and Spanish.",
  alternates: { canonical: "https://lambinsuranceagency.com/about" },
};

const PHONE_MAIN = "941.225.2335";
const PHONE_MAIN_TEL = "tel:+19412252335";

const TEAM = [
  {
    name: "Latoya",
    role: "Licensed Insurance Agent",
    photo: "/team/latoya.jpg",
    quote: "Insurance is about much more than policies and premiums — it’s about people, families, and community.",
    highlights: ["15 years of experience", "Family & community focused"],
    bio: [
      "With 15 years of experience as a Licensed Insurance Agent, Latoya has helped countless families find meaningful savings while making sure they have the protection they need when life happens.",
      "What she values most is building lasting relationships and being someone her clients can trust with important decisions. She approaches every conversation with honesty, integrity, and genuine care — listening first, explaining coverage in plain language, and making sure each client feels confident about what they have in place.",
      "For Latoya, being an agent is about serving her community, protecting what matters most, and building relationships that last.",
    ],
  },
  {
    name: "Josh",
    role: "Licensed Insurance Agent",
    photo: "/team/josh.jpg",
    quote: "I treat every client the way I’d want to be treated.",
    highlights: ["5+ years of experience", "Hablamos Español", "Hundreds of clients helped"],
    bio: [
      "With over five years in the insurance industry, Josh’s passion is simple: serving people with honesty, clarity, and genuine care.",
      "Guided by the Golden Rule, he’s dedicated to helping families and individuals find the right coverage at a price that fits their budget. Having assisted hundreds of clients in both English and Spanish, Josh takes pride in making insurance straightforward, stress-free, and tailored to what matters most to you.",
    ],
  },
  {
    name: "Allana",
    role: "Licensed Insurance Agent",
    photo: "/team/allana.jpg",
    quote: "My goal is to make the process easy and help every client feel taken care of.",
    highlights: ["Licensed in Florida & Georgia", "Helping clients since 2023"],
    bio: [
      "Since 2023, Allana has enjoyed helping people navigate their insurance options and find coverage that truly works for them.",
      "As a licensed agent in both Florida and Georgia, her goal is to make the process easy, answer every question along the way, and help each client feel protected and taken care of.",
    ],
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
        <section className="py-20 md:py-28" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-xl mb-14">
              <div className="section-rule" />
              <h2 id="team-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-navy-600 font-body leading-relaxed">
                Licensed, experienced, and genuinely invested in the people we serve. Here&#39;s who
                you&#39;ll be working with.
              </p>
            </div>

            <div className="space-y-10 md:space-y-14">
              {TEAM.map((m, i) => (
                <article
                  key={m.name}
                  className="bg-white rounded-3xl border border-navy-100 overflow-hidden shadow-sm grid md:grid-cols-5"
                  aria-labelledby={`member-${i}`}
                >
                  {/* Photo */}
                  <div className={`md:col-span-2 relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-[4/5] md:aspect-auto md:h-full md:min-h-[420px] relative bg-navy-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.photo}
                        alt={`${m.name}, ${m.role} at Lamb Insurance Agency`}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/70 to-transparent md:hidden"
                        aria-hidden="true"
                      />
                      <p className="absolute bottom-4 left-5 font-display text-2xl font-bold text-white md:hidden" aria-hidden="true">
                        {m.name}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-3 p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                    <h3
                      id={`member-${i}`}
                      className="sr-only md:not-sr-only font-display text-3xl font-bold text-navy-900"
                    >
                      {m.name}
                    </h3>
                    <p className="text-sage-600 text-xs font-body font-bold uppercase tracking-widest mt-1 mb-5">
                      {m.role}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6" aria-label={`${m.name}'s highlights`}>
                      {m.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs font-body font-semibold text-navy-700 bg-sage-50 border border-sage-200 rounded-full px-3 py-1"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <blockquote className="font-display italic text-lg md:text-xl text-navy-700 leading-snug border-l-4 border-sage-300 pl-4 mb-6">
                      &ldquo;{m.quote}&rdquo;
                    </blockquote>

                    <div className="space-y-4 text-navy-600 font-body text-sm md:text-base leading-relaxed">
                      {m.bio.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
