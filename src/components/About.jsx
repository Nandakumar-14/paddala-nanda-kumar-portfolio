import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point stars */}
      <svg
        className="absolute top-10 right-10 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <svg
        className="absolute bottom-24 left-10 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Inner Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard (Flip Card) */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center md:justify-start">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative flex flex-col items-center pt-8"
          >
            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black pointer-events-none" />

            {/* Grey Clip */}
            <div className="relative z-10 w-8 h-4 bg-gray-400 rounded-sm mb-1 shadow-sm flex items-center justify-center">
              <div className="w-4 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              {/* 3D Rotating Inner Card */}
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT face: Existing Dark ID Badge */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col">
                  {/* Cutout Slot */}
                  <div className="mx-auto w-10 h-1.5 bg-black/60 rounded-full mb-3 shrink-0" />

                  {/* Portrait Photo */}
                  <img
                    src={stackImage}
                    alt={personalInfo?.name || 'Paddala Nandakumar'}
                    className="aspect-[3/4] w-full h-full rounded-xl object-cover object-top shadow-inner"
                  />
                </div>

                {/* BACK face: Visiting Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl overflow-hidden flex flex-col justify-between text-left p-5 border border-white/10">
                  {/* Top Red Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a]" />

                  {/* Header: Brand Name & Title */}
                  <div className="pt-2">
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </h3>
                    {personalInfo.title && (
                      <p className="text-[10px] uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </p>
                    )}
                    <div className="w-full h-px bg-white/10 my-2.5" />

                    {/* Details list */}
                    <div className="space-y-1.5">
                      {personalInfo.emails?.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors truncate"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="truncate">
                            {personalInfo.emails.primary}
                          </span>
                        </a>
                      )}

                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>{personalInfo.phone}</span>
                        </a>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center gap-2 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{personalInfo.location}</span>
                        </div>
                      )}

                      {/* Links row */}
                      <div className="flex items-center gap-4 pt-1">
                        {socialLinks.linkedin && (
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                            </svg>
                            <span>LinkedIn</span>
                          </a>
                        )}

                        {socialLinks.github && (
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* QR Code and Scan caption */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="bg-white rounded-lg p-1.5 shadow-sm shrink-0">
                      <QRCode
                        value={
                          socialLinks.linkedin ||
                          `mailto:${personalInfo.emails.primary}`
                        }
                        size={64}
                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                        viewBox="0 0 64 64"
                      />
                    </div>
                    <p className="text-[10px] text-white/60 leading-tight">
                      Scan to connect
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* Tap Hint */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Bio Content */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>
          <div
            className="text-lg font-bold leading-relaxed text-red-50 mt-6 space-y-4"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White Torn-paper SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
