import { academy, footerContent, personalInfo, socialLinks } from '../data/portfolioData'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-2">
          {footerContent.taglines.map((tagline, idx) => (
            <p key={idx} className="uppercase font-medium">
              {tagline}
            </p>
          ))}
        </div>

        {/* Column 2: Credential & View Work */}
        <div className="flex flex-col items-start md:items-center space-y-2">
          <p className="text-white/80">{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors uppercase font-semibold"
          >
            View Work
          </a>
        </div>

        {/* Column 3: Availability & Current Year */}
        <div className="flex flex-col items-start md:items-end space-y-2">
          <p className="text-emerald-400 uppercase font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </p>
          <p className="text-white/60">{CURRENT_YEAR}</p>
        </div>
      </div>

      {/* Middle: Huge Centered Brand Name */}
      <div className="py-20 md:py-24 overflow-hidden text-center select-none">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase text-[#f4f4f4]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end border-t border-white/10 pt-12">
        {/* Column 1: Contact link, copyright & TAP Academy credit */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="text-white underline hover:text-[#ff2a2a] transition-colors uppercase font-semibold block"
          >
            Contact
          </a>
          <p className="text-white/60 text-[9px] md:text-[11px]">
            {footerContent.copyright}
          </p>
          <p className="text-white/60 text-[9px] md:text-[11px]">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Primary email & Social icons */}
        <div className="flex flex-col items-start md:items-center space-y-4">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="text-white underline hover:text-[#ff2a2a] transition-colors font-medium"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center space-x-5">
            {/* GitHub */}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}

            {/* LinkedIn */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
            )}

            {/* Instagram */}
            <a
              href={socialLinks.instagram || `https://instagram.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3: Explore My GitHub */}
        <div className="flex flex-col items-start md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors uppercase font-semibold"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
