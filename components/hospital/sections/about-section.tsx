"use client"

import {
  Users, Award, Heart, Stethoscope, Leaf, Activity, Target, Eye,
  Sparkles, Shield, CheckCircle, Star, Building2, GraduationCap
} from "lucide-react"

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

const advisoryBoard = [
  {
    name: "Prof. Dr. S. Ramaswamy",
    credentials: "MBBS, MD, FRCP (London)",
    expertise: "Former clinical director at AIIMS Delhi. Over 40 years of expertise in cardiac research and teaching.",
    initial: "R",
    field: "Cardiology",
    years: "40+ Years",
  },
  {
    name: "Dr. K. Vasudevan",
    credentials: "BAMS, MD (Ayurveda), PhD",
    expertise: "National award-winning research scholar focusing on Panchakarma detox protocols for rheumatoid conditions.",
    initial: "V",
    field: "Ayurveda",
    years: "30+ Years",
  },
  {
    name: "Dr. Elizabeth Thomas",
    credentials: "MD, DNB, FICS",
    expertise: "International board member in minimally invasive surgeries and advanced robotic surgical procedures.",
    initial: "E",
    field: "Surgery",
    years: "25+ Years",
  },
]

const stats = [
  { value: "20+", label: "Years of Excellence", icon: Award },
  { value: "300+", label: "Hospital Beds", icon: Building2 },
  { value: "50+", label: "Senior Specialists", icon: Stethoscope },
  { value: "100K+", label: "Patients Treated", icon: Heart },
]

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with genuine empathy, respect, and understanding throughout their care journey.", color: "rose" },
  { icon: Target, title: "Excellence", desc: "We uphold the highest clinical standards, investing in training, technology, and evidence-based protocols.", color: "blue" },
  { icon: Shield, title: "Integrity", desc: "Transparency, ethical conduct, and honest communication form the foundation of every patient relationship.", color: "teal" },
  { icon: Sparkles, title: "Innovation", desc: "We continuously embrace modern diagnostics and time-tested healing traditions to deliver the best outcomes.", color: "violet" },
]

const valueColorMap: Record<string, { bg: string; icon: string; ring: string }> = {
  rose: { bg: "bg-rose-50", icon: "text-rose-500", ring: "ring-rose-100" },
  blue: { bg: "bg-blue-50", icon: "text-[#0b1f4a]", ring: "ring-blue-100" },
  teal: { bg: "bg-teal-50", icon: "text-[#0d9488]", ring: "ring-teal-100" },
  violet: { bg: "bg-violet-50", icon: "text-[#7c3aed]", ring: "ring-violet-100" },
}

const pillars = [
  {
    icon: Stethoscope,
    label: "Allopathy",
    desc: "Evidence-based modern diagnostics, ICU support, surgical specialties, and 24/7 emergency critical care capabilities.",
    color: "from-[#0b1f4a] to-[#1a3a7c]",
    accent: "border-t-[#0b1f4a]",
    iconBg: "bg-blue-50",
    iconColor: "text-[#0b1f4a]",
    features: ["24/7 Emergency", "Advanced Surgery", "ICU & Critical Care", "22 Specialties"],
  },
  {
    icon: Leaf,
    label: "Ayurveda",
    desc: "Purification Panchakarma techniques, natural internal cleansing, and daily regimen audits based on personal constitution.",
    color: "from-[#0d9488] to-[#0b7c72]",
    accent: "border-t-[#0d9488]",
    iconBg: "bg-teal-50",
    iconColor: "text-[#0d9488]",
    features: ["Panchakarma", "Detox Therapies", "Skin & Lifestyle", "Rejuvenation"],
  },
  {
    icon: Activity,
    label: "Rehabilitation",
    desc: "Advanced physical therapies, speech coordination training, occupational modules, and gait lab analysis.",
    color: "from-[#7c3aed] to-[#6d28d9]",
    accent: "border-t-[#7c3aed]",
    iconBg: "bg-violet-50",
    iconColor: "text-[#7c3aed]",
    features: ["Physiotherapy", "Neurorehab", "Sports Injury", "Gait & Mobility"],
  },
]

export function AboutSection() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060f26]/90 via-[#0b1f4a]/80 to-[#0d9488]/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse" />
                About Us
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] tracking-tight mb-5">
                About Sripada<br />
                <span className="text-[#0d9488]">Hospitals</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                A trusted healthcare center combining Allopathy, Ayurveda, and Rehabilitation services under one roof — for 20+ years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="bg-white py-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100 -mt-1">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-10 px-4 text-center group hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-4xl font-sans font-bold text-[#0b1f4a]">{stat.value}</p>
                <p className="text-sm text-[#64748B] font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ===== STORY / WHO WE ARE ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="relative pb-10">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-52 shadow-md">
                    <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" alt="Hospital care" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                    <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80" alt="Laboratory" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" alt="Ayurveda" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-52 shadow-md">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Rehabilitation" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0b1f4a] to-[#1a3a7c] text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 w-max max-w-[90%]">
                <Award className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest leading-none mb-0.5">Established</p>
                  <p className="text-sm font-bold">20+ Years of Trusted Care</p>
                </div>
              </div>
            </div>

            <div className="pt-10 lg:pt-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a] leading-tight mb-6">
                Sripada Hospital —<br />
                <span className="text-[#0d9488]">Built for You</span>
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p className="text-lg">
                  Sripada Hospital is a healthcare center that combines Allopathy, Ayurveda, and Rehabilitation services. Our team works together to provide care that supports treatment, recovery, and long-term health.
                </p>
                <p>
                  We offer medical care, Ayurvedic treatments, and rehabilitation programs tailored to different health conditions. Our focus is on helping patients receive the right care at the right time.
                </p>
                <p>
                  Good healthcare goes beyond treating symptoms. We aim to help patients regain strength, improve function, and return to their daily lives with greater confidence and comfort.
                </p>
              </div>
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  "NABH Accredited Facility",
                  "ISO 9001:2015 Certified",
                  "24/7 Emergency Services",
                  "Cashless Insurance Claims",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                    <CheckCircle className="h-4 w-4 text-[#0d9488] flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#0b1f4a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
              Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] rounded-2xl sm:rounded-3xl p-7 sm:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-sans font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/75 leading-relaxed relative z-10">
                To deliver accessible, ethical, and high-quality healthcare that leverages the diagnostics of modern Allopathy, the natural balancing systems of Ayurveda, and the mobility restoration of Rehabilitation — treating each patient with dignity and genuine care.
              </p>
              <div className="mt-8 flex items-center gap-2 text-white/60 text-sm font-semibold">
                <Heart className="h-4 w-4 text-rose-400" />
                Patient-first, always
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-[#0d9488] to-[#0b7c72] rounded-2xl sm:rounded-3xl p-7 sm:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-sans font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/75 leading-relaxed relative z-10">
                To stand as the country's most trusted hospital for integrative medicine — establishing standards in clinical outcomes, safety protocols, and personalized patient care plans that lead to lifelong wellness and community health.
              </p>
              <div className="mt-8 flex items-center gap-2 text-white/60 text-sm font-semibold">
                <Star className="h-4 w-4 text-amber-300" />
                Leading integrative medicine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">What We Stand For</h2>
            <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
              These four principles guide every decision we make and every interaction we have with our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => {
              const c = valueColorMap[v.color]
              return (
                <div key={i} className="group bg-white rounded-2xl border border-[#e8eef6] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ring-4 transition-all duration-300", c.bg, c.ring, "group-hover:ring-8")}>
                    <v.icon className={cn("h-7 w-7", c.icon)} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-[#0b1f4a] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED SYSTEM (THREE PILLARS) ===== */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
              Our System
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Integrated Healthcare System</h2>
            <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
              Three departments working in harmony — coordinated diagnostics and therapies for superior care pathways.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((p, i) => (
              <div key={i} className={cn("bg-white rounded-3xl overflow-hidden border border-[#e8eef6] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4", p.accent)}>
                {/* Gradient header */}
                <div className={cn("h-28 bg-gradient-to-br flex items-center justify-center", p.color)}>
                  <p.icon className="h-14 w-14 text-white/25" />
                </div>
                <div className="p-8">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-5 -mt-14 relative z-10 border-4 border-white shadow-lg", p.iconBg)}>
                    <p.icon className={cn("h-7 w-7", p.iconColor)} />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[#0b1f4a] mb-3">{p.label} Department</h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">{p.desc}</p>
                  <div className="space-y-2">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <CheckCircle className={cn("h-4 w-4 flex-shrink-0", p.iconColor)} />
                        <span className="text-sm font-semibold text-[#0b1f4a]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVISORY BOARD ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
              Advisory Board
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Guided by the Best</h2>
            <p className="text-[#475569] mt-4 text-lg max-w-xl mx-auto">
              Our advisory board comprises some of India's most respected medical authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisoryBoard.map((advisor, i) => (
              <div key={i} className="group relative bg-white rounded-3xl border border-[#e8eef6] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Top accent bar */}
                <div className="h-2 bg-gradient-to-r from-[#0b1f4a] to-[#0d9488]" />

                <div className="p-8">
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <span className="text-white font-bold text-2xl">{advisor.initial}</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-[#0b1f4a] leading-tight">{advisor.name}</h3>
                      <p className="text-xs font-semibold text-[#0d9488] mt-1">{advisor.credentials}</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">{advisor.expertise}</p>

                  {/* Meta tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0b1f4a] text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100">
                      <GraduationCap className="h-3 w-3" />
                      {advisor.field}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-teal-50 text-[#0d9488] text-xs font-bold px-3 py-1.5 rounded-full border border-teal-100">
                      <Star className="h-3 w-3" />
                      {advisor.years}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
