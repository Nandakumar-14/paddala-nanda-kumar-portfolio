import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')

    const { serviceId, templateId, publicKey } = emailjsConfig || {}
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const mailtoSubject = `Portfolio Contact from ${firstName} ${lastName}`
      const mailtoBody = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          mailtoSubject
        )}&body=${encodeURIComponent(mailtoBody)}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS submit error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant Contact Parallax Word */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-0 pointer-events-none z-0 overflow-hidden flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Red Card */}
      <div className="w-full relative z-10 flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl text-white"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/20">
            <span className="uppercase text-xs md:text-sm font-black tracking-[0.2em] text-white">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all flex items-center gap-1.5 select-none"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>DM on Instagram</span>
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:gap-12 mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline Inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project, team, or opportunity... *"
                  className="w-full flex-1 bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] md:min-h-[180px]"
                />
              </div>
            </div>

            {/* Bottom Actions & Notes */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
              <label className="flex items-center gap-3 text-xs md:text-sm text-white/90 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="w-4 h-4 accent-black rounded cursor-pointer"
                />
                <span>I agree to be contacted regarding this inquiry.</span>
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-white/80">
                    Your message will be sent directly to my inbox. I typically
                    respond within 24-48 hours.
                  </p>
                  <p className="text-xs text-white/80">
                    Urgent? Email directly at{' '}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      className="underline font-semibold hover:text-black transition-colors"
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </p>
                </div>

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`px-8 py-4 rounded-full border-2 font-bold transition-all duration-300 flex items-center justify-center gap-2 select-none shrink-0 ${
                    status === 'sending'
                      ? 'bg-black/30 border-white/30 text-white/60 cursor-not-allowed'
                      : status === 'success'
                        ? 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                        : status === 'error'
                          ? 'bg-red-950 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                          : 'border-white text-white group hover:bg-white hover:text-[#ff2a2a] cursor-pointer shadow-lg'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="animate-spin w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}
                  {status === 'success' && <span>Sent Successfully ✓</span>}
                  {status === 'error' && <span>Failed — Try Again</span>}
                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
