import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center group hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-500/30 transition-all duration-300 select-none"
    >
      {/* Emoji icon in rounded square */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-2xl group-hover:bg-red-50 group-hover:border-red-300 group-hover:scale-110 transition-all duration-300 mb-4">
        <span>{skill.icon}</span>
      </div>

      {/* Uppercase Name */}
      <h3 className="text-base font-black text-gray-900 uppercase tracking-wider mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  )
}

export default function SoftSkills() {
  if (!softSkillsList || softSkillsList.length === 0) {
    return null
  }

  return (
    <section id="soft-skills" className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden text-gray-900">
      {/* Torn-paper divider at the top flowing from dark section into white */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-semibold uppercase tracking-widest inline-block mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Interpersonal strengths, problem-solving mindset, and collaborative communication that drive team success.
          </p>
        </div>

        {/* Grid of Soft Skill Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={`${skill.name}-${index}`}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

