"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu, X, ChevronDown, Phone, Heart, Stethoscope, Leaf, Activity,
  Calendar, MapPin, Clock, ArrowRight, Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
  onBookAppointment: () => void
}

const allopathyServices = [
  { name: "Emergency & Trauma", id: "allopathy-emergency" },
  { name: "ICU & Anaesthesia", id: "allopathy-icu" },
  { name: "General Medicine", id: "allopathy-general-medicine" },
  { name: "General Surgery", id: "allopathy-general-surgery" },
  { name: "Gynae & OB/GYN", id: "allopathy-gynae" },
  { name: "Gastroenterology", id: "allopathy-gastro" },
  { name: "Vascular", id: "allopathy-vascular" },
  { name: "Orthopaedics", id: "allopathy-ortho" },
  { name: "Rheumatology", id: "allopathy-rheumatology" },
  { name: "Maxillofacial", id: "allopathy-maxillofacial" },
  { name: "Plastic Surgery", id: "allopathy-plastic" },
  { name: "Surgical Oncology", id: "allopathy-surgical-oncology" },
  { name: "Medical Oncology", id: "allopathy-medical-oncology" },
  { name: "Pulmonology", id: "allopathy-pulmonology" },
  { name: "Neurology", id: "allopathy-neuro" },
  { name: "Urology", id: "allopathy-urology" },
  { name: "Nephrology", id: "allopathy-nephrology" },
  { name: "Radiology", id: "allopathy-radiology" },
  { name: "Pediatrics", id: "allopathy-pediatrics" },
  { name: "ENT", id: "allopathy-ent" },
  { name: "Neurosurgery", id: "allopathy-neurosurgery" },
  { name: "Spine Surgery", id: "allopathy-spine" },
]

const ayurvedaServices = [
  { name: "Panchakarma", id: "ayurveda-panchakarma" },
  { name: "Detoxification", id: "ayurveda-detox" },
  { name: "Skin Disease", id: "ayurveda-skin" },
  { name: "Infertility", id: "ayurveda-infertility" },
  { name: "Degenerative Disorders", id: "ayurveda-degenerative" },
  { name: "Autoimmune Disorders", id: "ayurveda-autoimmune" },
  { name: "Lifestyle Management", id: "ayurveda-lifestyle" },
  { name: "Preventive Wellness", id: "ayurveda-preventive" },
  { name: "Rejuvenation", id: "ayurveda-rejuvenation" },
]

const rehabServices = [
  { name: "Physiotherapy", id: "rehab-physio" },
  { name: "Neurorehabilitation", id: "rehab-neuro" },
  { name: "Orthopaedic Rehab", id: "rehab-ortho" },
  { name: "Stroke Recovery", id: "rehab-stroke" },
  { name: "Sports Injury", id: "rehab-sports" },
  { name: "Mobility Training", id: "rehab-mobility" },
  { name: "Post-Surgical Rehab", id: "rehab-post-surgical" },
  { name: "Geriatric Care", id: "rehab-geriatric" },
  { name: "Pain Management", id: "rehab-pain" },
]

// Primary nav — shown in main bar
const primaryNav = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services", hasDropdown: true },
  { name: "Emergency & ICU", id: "emergency-icu" },
  { name: "Lab & Pharmacy", id: "lab-pharmacy" },
  { name: "Contact", id: "contact" },
]

// Secondary nav — inside "More" dropdown
const secondaryNav = [
  { name: "Ambulance", id: "ambulance" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Gallery", id: "gallery" },
  { name: "Blogs", id: "blogs" },
  { name: "Careers", id: "careers" },
  { name: "Policies", id: "policies" },
  { name: "Equipment Rental", id: "equipment-rental" },
]

export function Header({ activeSection, onNavigate, onBookAppointment }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCat, setMobileCat] = useState<string | null>(null)
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const moreTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current)
    setServicesOpen(true)
  }
  const closeServices = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }
  const openMore = () => {
    if (moreTimer.current) clearTimeout(moreTimer.current)
    setMoreOpen(true)
  }
  const closeMore = () => {
    moreTimer.current = setTimeout(() => setMoreOpen(false), 120)
  }

  const isServiceActive =
    activeSection.includes("service") ||
    activeSection.includes("allopathy") ||
    activeSection.includes("ayurveda") ||
    activeSection.includes("rehab")

  const isMoreActive = secondaryNav.some((n) => n.id === activeSection)

  const go = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
    setServicesOpen(false)
    setMoreOpen(false)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(11,31,74,0.12)] border-b border-slate-100"
        : "bg-white border-b border-slate-100"
    )}>

      {/* ── TOP UTILITY BAR ── */}
      <div className={cn(
        "bg-[#0b1f4a] overflow-hidden transition-all duration-300",
        scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      )}>
        <div className="w-full px-4 lg:px-8 h-10 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-0">
            <a href="tel:+919XXXXXXXXX"
              className="flex items-center gap-1.5 pr-4 text-white/80 hover:text-white transition-colors text-xs font-medium">
              <Phone className="h-3 w-3 text-[#0d9488] flex-shrink-0" />
              <span>Emergency: +91 9XXX XXX XXX</span>
            </a>
            <a href="mailto:info@sripadahospitals.com"
              className="hidden md:flex items-center gap-1.5 px-4 border-l border-white/15 text-white/60 hover:text-white transition-colors text-xs">
              <Mail className="h-3 w-3 text-amber-400 flex-shrink-0" />
              info@sripadahospitals.com
            </a>
            <div className="hidden lg:flex items-center gap-1.5 pl-4 border-l border-white/15 text-white/60 text-xs">
              <MapPin className="h-3 w-3 text-white/40 flex-shrink-0" />
              Bengaluru, Karnataka
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-white/60 text-xs">
              <Clock className="h-3 w-3 text-amber-400 flex-shrink-0" />
              OPD: Mon – Sat, 8 AM – 8 PM
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Heart className="h-3 w-3 text-rose-400 fill-rose-400 flex-shrink-0" />
              <span className="hidden sm:inline">Trust · Care · Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER BAR ── */}
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-[60px] sm:h-[68px]">

          {/* LOGO */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Sripada Hospitals home"
          >
            {/* Hospital Logo */}
            <div className="relative flex-shrink-0">
              <img 
                src="/Sripada Hospital (4).png" 
                alt="Sripada Hospitals Logo" 
                className="w-20 h-20 rounded-2xl object-contain"
              />
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" role="navigation" aria-label="Main navigation">

            {primaryNav.map((item) => (
              <div key={item.id} className="relative" ref={item.hasDropdown ? servicesRef : undefined}>
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    {/* Services trigger */}
                    <button
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 px-2 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 whitespace-nowrap",
                        isServiceActive
                          ? "bg-[#0b1f4a] text-white"
                          : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-100"
                      )}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 flex-shrink-0", servicesOpen && "rotate-180")} />
                    </button>

                    {/* ── MEGA MENU ── */}
                    <div className={cn(
                      "absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[600px] xl:w-[800px] transition-all duration-200 origin-top z-50 pt-2",
                      servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                    )}
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                        {/* Mega menu header */}
                        <div className="bg-gradient-to-r from-[#0b1f4a] to-[#1e4080] px-8 py-4 flex items-center justify-between">
                          <div>
                            <p className="text-white font-bold text-sm whitespace-nowrap">Our Medical Departments</p>
                            <p className="text-white/60 text-xs mt-0.5 whitespace-nowrap">40+ specialties across 3 integrated departments</p>
                          </div>
                          <button
                            onClick={() => go("services")}
                            className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0"
                          >
                            <span className="whitespace-nowrap">View All Services</span> <ArrowRight className="h-3 w-3 flex-shrink-0" />
                          </button>
                        </div>

                        {/* Three columns */}
                        <div className="grid grid-cols-3 divide-x divide-slate-100">

                          {/* Allopathy */}
                          <div className="p-6">
                            <div className="flex items-center gap-2.5 mb-4">
                              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Stethoscope className="h-4 w-4 text-[#0b1f4a]" />
                              </div>
                              <div>
                                <p className="font-bold text-[#0b1f4a] text-sm whitespace-nowrap">Allopathy</p>
                                <p className="text-[10px] text-slate-400 whitespace-nowrap">Modern Medicine</p>
                              </div>
                            </div>
                            <ul className="space-y-0.5 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                              {allopathyServices.map((s) => (
                                <li key={s.id}>
                                  <button
                                    onClick={() => go(s.id)}
                                    className="w-full text-left px-3 py-1.5 text-sm text-slate-500 hover:text-[#0b1f4a] hover:bg-blue-50 rounded-lg font-medium transition-colors whitespace-nowrap"
                                  >
                                    <span className="whitespace-nowrap">{s.name}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Ayurveda */}
                          <div className="p-6">
                            <div className="flex items-center gap-2.5 mb-4">
                              <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center">
                                <Leaf className="h-4 w-4 text-[#0d9488]" />
                              </div>
                              <div>
                                <p className="font-bold text-[#0d9488] text-sm whitespace-nowrap">Ayurveda</p>
                                <p className="text-[10px] text-slate-400 whitespace-nowrap">Traditional Healing</p>
                              </div>
                            </div>
                            <ul className="space-y-0.5">
                              {ayurvedaServices.map((s) => (
                                <li key={s.id}>
                                  <button
                                    onClick={() => go(s.id)}
                                    className="w-full text-left px-3 py-1.5 text-sm text-slate-500 hover:text-[#0d9488] hover:bg-teal-50 rounded-lg font-medium transition-colors whitespace-nowrap"
                                  >
                                    <span className="whitespace-nowrap">{s.name}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Rehabilitation */}
                          <div className="p-6">
                            <div className="flex items-center gap-2.5 mb-4">
                              <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center">
                                <Activity className="h-4 w-4 text-[#7c3aed]" />
                              </div>
                              <div>
                                <p className="font-bold text-[#7c3aed] text-sm whitespace-nowrap">Rehabilitation</p>
                                <p className="text-[10px] text-slate-400 whitespace-nowrap">Recovery & Therapy</p>
                              </div>
                            </div>
                            <ul className="space-y-0.5">
                              {rehabServices.map((s) => (
                                <li key={s.id}>
                                  <button
                                    onClick={() => go(s.id)}
                                    className="w-full text-left px-3 py-1.5 text-sm text-slate-500 hover:text-[#7c3aed] hover:bg-violet-50 rounded-lg font-medium transition-colors whitespace-nowrap"
                                  >
                                    <span className="whitespace-nowrap">{s.name}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => go(item.id)}
                    className={cn(
                      "px-2 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-[#0b1f4a] text-white"
                        : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-100"
                    )}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </button>
                )}
              </div>
            ))}

            {/* ── MORE DROPDOWN ── */}
            <div className="relative" ref={moreRef}>
              <div
                onMouseEnter={openMore}
                onMouseLeave={closeMore}
              >
                <button
                  aria-expanded={moreOpen}
                  className={cn(
                    "flex items-center gap-1 px-2 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 whitespace-nowrap",
                    isMoreActive
                      ? "bg-[#0b1f4a] text-white"
                      : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-100"
                  )}
                >
                  <span className="whitespace-nowrap">More</span>
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 flex-shrink-0", moreOpen && "rotate-180")} />
                </button>

                <div className={cn(
                  "absolute top-[calc(100%+0px)] right-0 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 transition-all duration-200 origin-top-right z-50 pt-2",
                  moreOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                )}
                  onMouseEnter={openMore}
                  onMouseLeave={closeMore}
                >
                  {secondaryNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => go(item.id)}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap",
                        activeSection === item.id
                          ? "text-[#0b1f4a] bg-blue-50"
                          : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-50"
                      )}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + EMERGENCY */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <a
              href="tel:+919XXXXXXXXX"
              className="hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#0d9488] hover:bg-teal-50 transition-all group flex-shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0d9488] flex items-center justify-center flex-shrink-0">
                <Phone className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="leading-none">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Emergency</p>
                <p className="text-sm font-bold text-[#0b1f4a] group-hover:text-[#0d9488] transition-colors whitespace-nowrap">24/7 Helpline</p>
              </div>
            </a>

            <Button
              onClick={onBookAppointment}
              className="bg-[#0b1f4a] hover:bg-[#1e4080] text-white font-bold px-3 sm:px-4 xl:px-6 h-9 sm:h-10 xl:h-11 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] gap-1.5 xl:gap-2 text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="h-3.5 w-3.5 xl:h-4 xl:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
            </Button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0b1f4a] transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER — full screen overlay ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col" style={{ top: 0 }}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white flex flex-col shadow-2xl">

            {/* Header */}
            <div className="bg-[#0b1f4a] px-4 py-4 flex items-center justify-between flex-shrink-0">
              <a href="tel:+919XXXXXXXXX" className="flex items-center gap-2 text-white text-sm font-bold">
                <Phone className="h-4 w-4 text-[#0d9488]" />
                Emergency: +91 9XXX XXX XXX
              </a>
              <button onClick={() => setMobileOpen(false)} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable nav */}
            <div className="flex-1 overflow-y-auto">
              <nav className="px-3 py-3 space-y-1">

                {primaryNav.map((item) => (
                  <div key={item.id}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl text-[#0b1f4a] hover:bg-slate-50 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileServicesOpen && "rotate-180")} />
                        </button>

                        {mobileServicesOpen && (
                          <div className="pl-2 space-y-1 mt-1">
                            {[
                              { key: "allopathy", label: "Allopathy", Icon: Stethoscope, color: "text-[#0b1f4a] bg-blue-50 border-blue-200", items: allopathyServices },
                              { key: "ayurveda", label: "Ayurveda", Icon: Leaf, color: "text-[#0d9488] bg-teal-50 border-teal-200", items: ayurvedaServices },
                              { key: "rehab", label: "Rehabilitation", Icon: Activity, color: "text-[#7c3aed] bg-violet-50 border-violet-200", items: rehabServices },
                            ].map((cat) => (
                              <div key={cat.key}>
                                <button
                                  onClick={() => setMobileCat(mobileCat === cat.key ? null : cat.key)}
                                  className={cn("flex items-center justify-between w-full px-4 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider", cat.color)}
                                >
                                  <div className="flex items-center gap-2">
                                    <cat.Icon className="h-3.5 w-3.5" />
                                    <span>{cat.label}</span>
                                  </div>
                                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", mobileCat === cat.key && "rotate-180")} />
                                </button>
                                {mobileCat === cat.key && (
                                  <div className="mt-1 ml-2 bg-white rounded-xl border border-slate-100 overflow-hidden">
                                    {cat.items.map((s) => (
                                      <button key={s.id} onClick={() => go(s.id)}
                                        className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-50 font-medium border-b border-slate-50 last:border-0 transition-colors">
                                        {s.name}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button onClick={() => go(item.id)}
                        className={cn(
                          "block w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors",
                          activeSection === item.id ? "bg-[#0b1f4a] text-white" : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-50"
                        )}>
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}

                {/* More */}
                <div className="border-t border-slate-100 pt-1">
                  <button
                    onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <span>More Pages</span>
                    <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileMoreOpen && "rotate-180")} />
                  </button>
                  {mobileMoreOpen && (
                    <div className="pl-2 space-y-0.5">
                      {secondaryNav.map((item) => (
                        <button key={item.id} onClick={() => go(item.id)}
                          className={cn(
                            "block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors",
                            activeSection === item.id ? "bg-[#0b1f4a] text-white" : "text-slate-600 hover:text-[#0b1f4a] hover:bg-slate-50"
                          )}>
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Book Appointment CTA */}
            <div className="p-4 border-t border-slate-100 flex-shrink-0">
              <Button
                onClick={() => { onBookAppointment(); setMobileOpen(false) }}
                className="w-full bg-[#0b1f4a] hover:bg-[#1e4080] text-white font-bold h-12 rounded-xl gap-2 text-sm"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}
