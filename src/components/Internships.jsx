import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest select-none">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <div className="mt-5">
          <h3 className="text-2xl font-black text-white leading-tight">
            {intern.role}
          </h3>
          <p className="uppercase text-red-200 font-bold tracking-wider text-sm mt-1">
            {intern.organization}
          </p>
        </div>

        {/* Skills Gained List */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white/70 mb-2">
              Skills Gained:
            </h4>
            <ul className="space-y-1.5">
              {intern.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="text-sm text-white/90 flex items-start gap-2"
                >
                  <span className="text-white/40 leading-tight">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies Row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-[11px] uppercase font-bold tracking-wider text-white/60 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 select-none"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden text-white">
      {/* Top Edge: Torn-paper SVG Divider flowing from previous dark section to red */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star Bottom-Left */}
      <svg
        className="absolute bottom-8 left-8 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base font-medium">
            Hands-on professional training, industry projects, and applied engineering experience.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
