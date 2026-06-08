"use client"

import { useCallback, useEffect, useState } from "react"
import {
  Heart, Shield, Clock, Users, Award, Stethoscope, Activity,
  ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Calendar,
  Leaf, Building2, Target, Timer, ClipboardList,
  PersonStanding, Eye, Phone, Flame, Microscope, Ambulance, Pill, Zap, Star, TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"

interface HomeSectionProps {
  onNavigate: (section: string) => void
  onBookAppointment: () => void
}

/* ─── Scroll Reveal ─── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible") }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".fade-up").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─── Data ─── */
const heroSlides = [
  {
    title: "Healing, Recovery & Care Under One Roof",
    subtitle: "A trusted destination for Allopathy, Ayurveda, and Rehabilitation services.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
    badge: "Multi-Speciality Excellence",
    tag: "Trusted Since 2004",
  },
  {
    title: "Modern Medicine for Better Health Outcomes",
    subtitle: "Advanced diagnostics, surgical specialties, and 24/7 critical care backed by experienced specialists.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80",
    badge: "Allopathy",
    tag: "50+ Specialists",
  },
  {
    title: "The Wisdom of Ayurveda, Delivered with Care",
    subtitle: "Personalized therapies and wellness programs rooted in traditional healing principles.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",
    badge: "Ayurveda",
    tag: "Time-Tested Healing",
  },
  {
    title: "Rebuild Strength. Restore Independence.",
    subtitle: "Comprehensive rehabilitation programs to help patients regain mobility, strength, and confidence.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80",
    badge: "Rehabilitation",
    tag: "Personalised Programs",
  },
]

const stats = [
  { value: "20+",   label: "Years of Excellence",  icon: Award,       color: "#295D93" },
  { value: "300+",  label: "Hospital Beds",          icon: Building2,   color: "#007878" },
  { value: "50+",   label: "Senior Specialists",     icon: Stethoscope, color: "#882576" },
  { value: "100K+", label: "Patients Treated",       icon: Heart,       color: "#295D93" },
  { value: "24/7",  label: "Emergency Care",         icon: Zap,         color: "#007878" },
]

const pillars = [
  {
    icon: Stethoscope,
    title: "Allopathy",
    desc: "Evidence-based modern medicine — surgical care, diagnostics, emergency services, and specialist consultations.",
    bar: "#295D93",
    bg: "rgba(41,93,147,0.08)",
    ic: "#295D93",
  },
  {
    icon: Leaf,
    title: "Ayurveda",
    desc: "Holistic treatments rooted in ancient wisdom — Panchakarma, herbal therapies, and personalised wellness plans.",
    bar: "#007878",
    bg: "rgba(0,120,120,0.08)",
    ic: "#007878",
  },
  {
    icon: Activity,
    title: "Rehabilitation",
    desc: "Structured recovery programs — physiotherapy, mobility training, post-surgical care, and long-term support.",
    bar: "#882576",
    bg: "rgba(136,37,118,0.08)",
    ic: "#882576",
  },
]

const services = [
  { icon: Stethoscope, name: "Medical Consultation",  c: "#295D93" },
  { icon: Heart,       name: "Allopathic Treatment",  c: "#295D93" },
  { icon: Leaf,        name: "Ayurvedic Therapies",   c: "#007878" },
  { icon: Activity,    name: "Physiotherapy",          c: "#007878" },
  { icon: Shield,      name: "Post-Surgical Care",     c: "#295D93" },
  { icon: Flame,       name: "Pain Management",        c: "#882576" },
  { icon: PersonStanding, name: "Strength & Mobility", c: "#882576" },
  { icon: Eye,         name: "Wellness Guidance",      c: "#007878" },
  { icon: Microscope,  name: "Lab & Diagnostics",      c: "#295D93" },
  { icon: Ambulance,   name: "Emergency Care",         c: "#882576" },
  { icon: Pill,        name: "Pharmacy",               c: "#007878" },
  { icon: TrendingUp,  name: "Preventive Health",      c: "#295D93" },
]

const process = [
  { n: "01", icon: ClipboardList, title: "Assessment & Diagnosis",    desc: "Detailed evaluation of the patient's condition, medical history, and current health challenges.", col: "#295D93" },
  { n: "02", icon: Target,        title: "Personalised Plan",         desc: "Specialists design a care plan combining medical, Ayurvedic, or rehabilitation services for individual needs.", col: "#007878" },
  { n: "03", icon: Stethoscope,   title: "Guided Treatment",          desc: "Care delivered under experienced professionals — every session is structured for measurable progress.", col: "#882576" },
  { n: "04", icon: TrendingUp,    title: "Progress Monitoring",       desc: "Recovery is reviewed regularly and treatment is adjusted to ensure the best possible outcomes.", col: "#007878" },
  { n: "05", icon: PersonStanding, title: "Recovery & Wellness",      desc: "Final focus on restoring independence, mobility, and returning to daily life with lasting well-being.", col: "#295D93" },
]

const reasons = [
  { icon: Building2, title: "Integrated Care Under One Roof",    desc: "Allopathy, Ayurveda, and Rehabilitation — all in one facility, eliminating the need for multiple providers.", col: "#295D93" },
  { icon: Users,     title: "Experienced Specialists",           desc: "Qualified doctors, therapists, and practitioners from multiple disciplines working as one cohesive team.", col: "#007878" },
  { icon: Target,    title: "Personalised Treatment",            desc: "Every care plan is designed around the individual — no generic protocols, just tailored healthcare.", col: "#882576" },
  { icon: Heart,     title: "Recovery-Focused Care",             desc: "We don't just treat conditions — we help patients regain strength, mobility, and quality of life.", col: "#295D93" },
  { icon: Timer,     title: "Continuous Support",                desc: "From first consultation through full recovery, we remain engaged at every stage of the patient journey.", col: "#007878" },
  { icon: Shield,    title: "Patient-First Philosophy",          desc: "Professionalism, compassion, and transparency — so patients and families always feel informed and valued.", col: "#882576" },
]

const facilities = [
  { name: "ICU & Critical Care",    desc: "Continuous monitoring and round-the-clock specialist support.",                    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80" },
  { name: "Operation Theatre",      desc: "State-of-the-art surgical suites for a full range of procedures.",                  img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  { name: "Emergency Ward",         desc: "Rapid triage and immediate treatment, available 24 hours a day.",                   img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
  { name: "Patient Rooms",          desc: "Comfortable, private rooms designed for rest and safe recovery.",                   img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80" },
  { name: "Diagnostic Centre",      desc: "On-site lab, imaging, and diagnostic services for fast, accurate results.",         img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" },
  { name: "Rehabilitation Centre",  desc: "Dedicated space for physiotherapy, mobility, and strength recovery.",                img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80" },
]

/* ─── Eyebrow ─── */
function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <span style={light
      ? { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#a5d0d0" }
      : { background: "rgba(0,120,120,0.08)", border: "1px solid rgba(0,120,120,0.2)", color: "#007878" }
    } className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: light ? "#a5d0d0" : "#007878" }} />
      {label}
    </span>
  )
}

/* ─── Section Heading ─── */
function SectionHeading({
  eyebrow, title, subtitle, center = true, light = false,
}: { eyebrow: string; title: string; subtitle?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("mb-14 fade-up", center ? "text-center mx-auto max-w-2xl" : "max-w-xl")}>
      <Eyebrow label={eyebrow} light={light} />
      <h2 className="mt-4 font-bold leading-tight tracking-tight text-3xl md:text-4xl" style={{ color: light ? "#ffffff" : "#1a1a2e" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 leading-relaxed text-base md:text-lg" style={{ color: light ? "rgba(255,255,255,0.8)" : "#64748b" }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── Main ─── */
export function HomeSection({ onNavigate, onBookAppointment }: HomeSectionProps) {
  const [slide, setSlide] = useState(0)
  useReveal()

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  const prev = useCallback(() => setSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length), [])
  const next = useCallback(() => setSlide((p) => (p + 1) % heroSlides.length), [])

  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "92vh", minHeight: 600, maxHeight: 920 }}>

        {/* Slides */}
        {heroSlides.map((s, i) => (
          <div key={i} className={cn("absolute inset-0 transition-opacity duration-1000", i === slide ? "opacity-100 z-10" : "opacity-0 z-0")}>
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(41,93,147,0.92) 0%, rgba(41,93,147,0.7) 40%, rgba(0,120,120,0.25) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,40,0.6) 0%, transparent 60%)" }} />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">
            <div className="max-w-[640px]">

              {/* Live badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#a5d0d0" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#a5d0d0" }} />
                </span>
                <span className="text-white/90 text-xs font-semibold tracking-wide">{heroSlides[slide].badge}</span>
                <span className="w-px h-3" style={{ background: "rgba(255,255,255,0.2)" }} />
                <span className="text-white/50 text-xs">{heroSlides[slide].tag}</span>
              </div>

              {/* Headline */}
              <h1 className="font-bold text-white leading-[1.08] tracking-tight mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {heroSlides[slide].title}
              </h1>
              <p className="leading-relaxed mb-9 max-w-[500px]" style={{ color: "rgba(255,255,255,0.72)" }}>
                {heroSlides[slide].subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-9">
                <button onClick={onBookAppointment}
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "#007878" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#005c5c")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#007878")}>
                  <Calendar className="h-4 w-4" /> Book Appointment
                </button>
                <button onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(6px)" }}>
                  Explore Services <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2">
                {["NABH Accredited", "24/7 Emergency", "50+ Specialists", "100K+ Patients"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                    <CheckCircle className="h-3 w-3" style={{ color: "#a5d0d0" }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <button onClick={prev} aria-label="Previous"
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full text-white transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full text-white transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}>
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{ width: i === slide ? 24 : 6, height: 6, background: i === slide ? "#a5d0d0" : "rgba(255,255,255,0.3)" }} />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-7 right-8 z-30 text-xs font-mono hidden lg:block" style={{ color: "rgba(255,255,255,0.3)" }}>
          {String(slide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>

        {/* Bottom progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 z-30" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div className="h-full transition-all duration-300" style={{ width: `${((slide + 1) / heroSlides.length) * 100}%`, background: "#007878" }} />
        </div>
      </section>


      {/* ══════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="fade-up group flex flex-col items-center text-center gap-4 py-8 px-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${s.color}22`, background: `${s.color}06` }}
                onMouseEnter={e => { e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.borderColor = `${s.color}55` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${s.color}06`; e.currentTarget.style.borderColor = `${s.color}22` }}>
                {/* icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: s.color }}>
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                {/* value */}
                <div>
                  <p className="font-black leading-none" style={{ fontSize: 36, color: s.color }}>{s.value}</p>
                  <p className="mt-2 font-semibold" style={{ fontSize: 13, color: "#64748b", letterSpacing: "0.02em" }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          3. THREE PILLARS
      ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#f4f8fc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading
            eyebrow="Our Approach"
            title="Three Pillars of Care"
            subtitle="We integrate modern medicine, traditional Ayurveda, and structured rehabilitation — giving every patient access to the right care at the right time."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="fade-up group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ border: `1px solid ${p.bar}22`, boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 48px ${p.bar}22`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)")}>

                {/* Full-width colour banner */}
                <div className="flex items-center gap-4 px-7 py-6" style={{ background: p.bar }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.2)" }}>
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white" style={{ fontSize: 18 }}>{p.title}</p>
                    <p className="font-medium" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      {i === 0 ? "Modern Medicine" : i === 1 ? "Traditional Healing" : "Structured Recovery"}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-7 py-6">
                  <p className="leading-relaxed mb-5" style={{ color: "#64748b", fontSize: 15 }}>{p.desc}</p>

                  <ul className="space-y-3 mb-6">
                    {(i === 0
                      ? ["Surgical & Emergency Care", "Advanced Diagnostics", "Specialist Consultations"]
                      : i === 1
                      ? ["Panchakarma Therapy", "Herbal & Dietary Programs", "Holistic Wellness Plans"]
                      : ["Physiotherapy Sessions", "Mobility & Strength Training", "Post-Surgical Recovery"]
                    ).map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.bar }} />
                        <span style={{ fontSize: 14, color: "#334155", fontWeight: 500 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate("services")}
                    className="inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-2.5 transition-all hover:-translate-y-0.5"
                    style={{ background: p.bar, color: "#fff", fontSize: 13 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          4. ABOUT
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="fade-up relative pb-10 lg:pb-0">
              <div className="grid grid-cols-2 gap-3">
                {/* Left tall image */}
                <div className="rounded-2xl overflow-hidden" style={{ gridRow: "span 2", aspectRatio: "3/4" }}>
                  <img
                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=90"
                    alt="Hospital doctors team"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Top right image */}
                <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=90"
                    alt="Modern hospital facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom right — stat overlay */}
                <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=90"
                    alt="Surgery care"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(41,93,147,0.88) 0%, transparent 55%)" }}>
                    <div className="flex items-center gap-3">
                      <Award className="h-8 w-8 flex-shrink-0 text-white" />
                      <div>
                        <p className="font-black text-white leading-none" style={{ fontSize: 26 }}>20+</p>
                        <p className="font-medium" style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>Years of Trusted Care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 left-4 lg:left-1/2 lg:-translate-x-1/2 rounded-2xl px-5 py-4 flex items-center gap-3 max-w-full"
                style={{ background: "#007878", boxShadow: "0 12px 32px rgba(0,120,120,0.35)" }}>
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-bold text-white" style={{ fontSize: 13 }}>NABH Accredited</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Quality Certified Hospital</p>
                </div>
              </div>
            </div>

            {/* ── Right: Content ── */}
            <div className="fade-up">
              <Eyebrow label="About Sripada Hospital" />

              <h2 className="mt-4 font-bold leading-snug" style={{ color: "#1a1a2e", fontSize: 28 }}>
                Comprehensive Healthcare, Delivered with Compassion
              </h2>

              <p className="mt-5 leading-relaxed" style={{ color: "#64748b", fontSize: 15 }}>
                Sripada Hospital is a multi-speciality healthcare centre that brings Allopathy, Ayurveda, and Rehabilitation services together under one roof. We believe every patient deserves access to the right kind of care — delivered professionally, compassionately, and consistently.
              </p>
              <p className="mt-3 leading-relaxed" style={{ color: "#64748b", fontSize: 15 }}>
                Our team of experienced doctors, therapists, and specialists works together to build personalised treatment plans, guide patients through recovery, and support long-term well-being.
              </p>

              {/* Divider */}
              <div className="my-7 h-px" style={{ background: "#e8eef6" }} />

              {/* 4 stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users,     label: "Expert Team",   val: "50+ Doctors & Therapists", col: "#295D93" },
                  { icon: Building2, label: "Facility",      val: "300+ Bed Capacity",         col: "#007878" },
                  { icon: Zap,       label: "Availability",  val: "24 / 7 Emergency",          col: "#882576" },
                  { icon: Award,     label: "Accreditation", val: "NABH Certified",             col: "#295D93" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl p-3.5"
                    style={{ background: `${item.col}08`, border: `1px solid ${item.col}18` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.col }}>
                      <item.icon className="h-4.5 w-4.5 text-white" style={{ height: 18, width: 18 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "#1a1a2e", fontWeight: 700, marginTop: 1 }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate("about")}
                className="inline-flex items-center gap-2 font-semibold text-white rounded-xl px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#295D93", fontSize: 14 }}
                onMouseEnter={e => (e.currentTarget.style.background = "#1e4570")}
                onMouseLeave={e => (e.currentTarget.style.background = "#295D93")}>
                Learn About Us <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          5. SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/Sripada Hospital.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(41,93,147,0.88)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Care for Every Need"
            subtitle="From diagnosis to rehabilitation, we offer a full spectrum of medical, Ayurvedic, and recovery services under one roof."
            light
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <button key={i} onClick={() => onNavigate("services")}
                className="fade-up group flex flex-col items-center gap-3 p-5 rounded-2xl text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.35)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold leading-tight" style={{ color: "rgba(255,255,255,0.9)" }}>{s.name}</span>
              </button>
            ))}
          </div>

          <div className="text-center mt-10 fade-up">
            <button onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff", background: "rgba(255,255,255,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}>
              View All Services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          6. RECOVERY PROCESS
      ══════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f4f8fc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading
            eyebrow="How It Works"
            title="Our 5-Step Recovery Process"
            subtitle="A structured, patient-centred approach — from initial assessment through to full functional recovery."
          />

          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px z-0"
              style={{ background: "linear-gradient(90deg, transparent, #295D9340, #00787840, #88257640, transparent)" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, i) => (
                <div key={i} className="fade-up flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform group-hover:scale-105"
                    style={{ background: step.col, border: "4px solid white", boxShadow: `0 8px 24px ${step.col}44` }}>
                    <step.icon className="h-7 w-7 text-white" />
                    {/* step number tag */}
                    <span className="absolute -top-1 -right-1 text-[9px] font-black text-white rounded-full px-1.5 py-0.5"
                      style={{ background: step.col, border: "2px solid white" }}>
                      {step.n}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mb-2" style={{ color: "#1a1a2e" }}>{step.title}</h4>
                  <p className="text-xs leading-relaxed max-w-[170px]" style={{ color: "#64748b" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          7. WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/Sripada Hospital.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(41,93,147,0.88)" }} />
        </div>
        {/* dot texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Sets Sripada Apart"
            subtitle="Six reasons patients and families choose Sripada Hospital for their healthcare journey."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <div key={i} className="fade-up group flex gap-5 rounded-2xl p-6 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.26)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}>
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.2)" }}>
                    <r.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="font-bold text-white text-sm mb-2 leading-tight">{r.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          8. FACILITIES
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading
            eyebrow="Our Facility"
            title="Built for Healing & Recovery"
            subtitle="Purpose-designed spaces that support every stage of care — from emergency treatment to rehabilitation and long-term recovery."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="fade-up group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid #e8eef6", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 20px 48px rgba(41,93,147,0.14)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)")}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img 
                    src={f.img} 
                    alt={f.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      console.log(`Failed to load image for ${f.name}: ${f.img}`);
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(41,93,147,0.7) 0%, rgba(41,93,147,0.1) 50%, transparent 100%)" }} />
                </div>
                <div className="p-5 bg-white">
                  <h4 className="font-bold text-sm mb-1" style={{ color: "#1a1a2e" }}>{f.name}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          9. CTA
      ══════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/Sripada Hospital (1).png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: "rgba(0,120,120,0.82)" }} />
        </div>
        {/* dot texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center fade-up">
          {/* trust pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["NABH Accredited", "ISO Certified", "24/7 Emergency", "100K+ Patients"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}>
                <CheckCircle className="h-3 w-3 text-white" /> {b}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-4 leading-tight">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-[15px] mb-9 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Book an appointment today. Our team is ready to guide you towards better health and lasting well-being.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onBookAppointment}
              className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "#ffffff", color: "#007878" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e0f2f2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}>
              <Calendar className="h-4 w-4" /> Book Appointment
            </button>
            <a href="tel:+919XXXXXXXXX"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
