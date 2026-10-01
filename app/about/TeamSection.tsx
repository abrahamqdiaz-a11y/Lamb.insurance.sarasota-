export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  /** Focal point for the 4:5 crop, e.g. "50% 25%" */
  focus?: string;
  /** Short card blurb: 2–3 sentences, ~35–50 words */
  blurb: string;
};

export default function TeamSection({ team }: { team: TeamMember[] }) {
  return (
    <section className="py-20 md:py-28" aria-labelledby="team-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-16 md:mb-20">
          <div className="section-rule" />
          <h2 id="team-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-navy-500 font-body leading-relaxed">
            The licensed agents you&#39;ll work with — right here in Sarasota.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {team.map((m) => (
            <li key={m.name} className="h-full w-full max-w-xs mx-auto sm:max-w-none">
              <article className="h-full flex flex-col bg-white rounded-2xl border border-navy-100 shadow-sm p-4">
                <div className="aspect-[4/5] bg-navy-50 rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Lamb Insurance Agency`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: m.focus ?? "50% 25%" }}
                  />
                </div>

                <div className="flex flex-col flex-1 px-2 pt-5 pb-2">
                  <h3 className="font-display text-xl font-bold text-navy-900 leading-tight">{m.name}</h3>
                  <p className="text-sage-600 text-[11px] font-body font-bold uppercase tracking-widest mt-1.5">
                    {m.role}
                  </p>
                  <p className="text-navy-600 font-body text-sm leading-relaxed mt-4">{m.blurb}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
