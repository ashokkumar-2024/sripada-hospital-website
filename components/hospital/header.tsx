"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Heart, Stethoscope, Leaf, Activity } from "lucide-react"
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

export function Header({ activeSection, onNavigate, onBookAppointment }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileServiceCategory, setMobileServiceCategory] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services", hasDropdown: true },
    { name: "Ambulance", id: "ambulance" },
    { name: "Emergency & ICU", id: "emergency-icu" },
    { name: "Lab & Pharmacy", id: "lab-pharmacy" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Gallery", id: "gallery" },
    { name: "Blogs", id: "blogs" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "glass-navbar shadow-lg py-1 lg:py-2" 
        : "bg-card border-b border-border py-2 lg:py-3"
    )}>
      {/* Top emergency bar - Accessible high contrast */}
      <div className={cn(
        "bg-primary text-primary-foreground py-2 px-4 transition-all duration-300",
        scrolled ? "hidden h-0 overflow-hidden" : "block"
      )}>
        <div className="container mx-auto flex justify-between items-center text-xs lg:text-sm font-medium">
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919XXXXXXXXX" 
              className="flex items-center gap-2 hover:text-white/90 transition-colors touch-target"
              aria-label="Emergency helpline"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="font-semibold">Emergency 24/7 Helpline: +91 9XXX XXX XXX</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline font-medium">Trust, Care and Medical Excellence</span>
            <Heart className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02] touch-target"
            aria-label="Sripada Hospitals Home"
          >
            <div className="relative bg-gradient-to-tr from-primary to-accent rounded-xl p-2.5 shadow-md shadow-primary/15 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl lg:text-2xl font-bold gradient-text">
                Sripada
              </span>
              <span className="text-[10px] lg:text-xs font-semibold tracking-wider text-muted-foreground uppercase -mt-0.5">
                Multi-Speciality Hospitals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2.5 text-sm font-semibold rounded-lg transition-all touch-target",
                        activeSection.includes("service") || activeSection.includes("allopathy") || 
                        activeSection.includes("ayurveda") || activeSection.includes("rehab")
                          ? "text-primary bg-primary/5 shadow-sm"
                          : "text-foreground/80 hover:text-primary hover:bg-muted"
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} aria-hidden="true" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ease-out origin-top",
                      servicesOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto scale-100" 
                        : "opacity-0 -translate-y-2 pointer-events-none scale-95"
                    )}>
                      <div className="bg-card rounded-2xl shadow-2xl border border-border/80 p-8 min-w-[850px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" aria-hidden="true" />

                        <div className="grid grid-cols-3 gap-8 relative z-10">
                          {/* Allopathy */}
                          <div>
                            <h3 className="font-sans font-bold text-primary mb-4 flex items-center gap-2 text-base pb-2 border-b border-primary/10">
                              <Stethoscope className="h-4 w-4 text-primary" aria-hidden="true" />
                              Allopathy Services
                            </h3>
                            <ul className="space-y-1 max-h-72 overflow-y-auto pr-2" role="menu">
                              {allopathyServices.map((service) => (
                                <li key={service.id} role="none">
                                  <button
                                    onClick={() => handleNavClick(service.id)}
                                    className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 px-2.5 py-1.5 rounded-lg w-full text-left transition-colors font-medium touch-target"
                                    role="menuitem"
                                  >
                                    {service.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Ayurveda */}
                          <div>
                            <h3 className="font-sans font-bold text-accent mb-4 flex items-center gap-2 text-base pb-2 border-b border-accent/10">
                              <Leaf className="h-4 w-4 text-accent" aria-hidden="true" />
                              Ayurveda Services
                            </h3>
                            <ul className="space-y-1" role="menu">
                              {ayurvedaServices.map((service) => (
                                <li key={service.id} role="none">
                                  <button
                                    onClick={() => handleNavClick(service.id)}
                                    className="text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 px-2.5 py-1.5 rounded-lg w-full text-left transition-colors font-medium touch-target"
                                    role="menuitem"
                                  >
                                    {service.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Rehabilitation */}
                          <div>
                            <h3 className="font-sans font-bold text-success mb-4 flex items-center gap-2 text-base pb-2 border-b border-success/10">
                              <Activity className="h-4 w-4 text-success" aria-hidden="true" />
                              Rehabilitation
                            </h3>
                            <ul className="space-y-1" role="menu">
                              {rehabServices.map((service) => (
                                <li key={service.id} role="none">
                                  <button
                                    onClick={() => handleNavClick(service.id)}
                                    className="text-sm text-muted-foreground hover:text-success hover:bg-success/5 px-2.5 py-1.5 rounded-lg w-full text-left transition-colors font-medium touch-target"
                                    role="menuitem"
                                  >
                                    {service.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border flex justify-between items-center relative z-10">
                          <p className="text-xs text-muted-foreground">Comprehensive integrative healthcare solutions for your family.</p>
                          <button
                            onClick={() => handleNavClick("services")}
                            className="text-sm font-semibold text-primary hover:text-accent flex items-center gap-1 transition-colors hover:underline touch-target"
                          >
                            View All Services
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "px-3 py-2.5 text-sm font-semibold rounded-lg transition-all touch-target",
                      activeSection === item.id
                        ? "text-primary bg-primary/5 shadow-sm"
                        : "text-foreground/80 hover:text-primary hover:bg-muted"
                    )}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              onClick={onBookAppointment}
              className="bg-success hover:bg-success/90 text-success-foreground font-semibold px-6 py-5 rounded-xl shadow-md shadow-success/20 touch-target transition-all duration-200 hover:scale-[1.02]"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-foreground/80 transition-colors touch-target"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "xl:hidden bg-card border-t border-border overflow-hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-[80vh] opacity-100 border-b" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <nav className="container mx-auto px-4 py-6 space-y-1 overflow-y-auto max-h-[70vh]" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-border/40 last:border-b-0 pb-1 last:pb-0">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-3 text-sm font-semibold rounded-lg touch-target",
                      activeSection.includes("service") || activeSection.includes("allopathy") || 
                      activeSection.includes("ayurveda") || activeSection.includes("rehab")
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:bg-muted"
                    )}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} aria-hidden="true" />
                  </button>

                  <div className={cn(
                    "pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-300",
                    mobileServicesOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
                  )}>
                    {/* Allopathy Accordion */}
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <button
                        onClick={() => setMobileServiceCategory(mobileServiceCategory === "allopathy" ? null : "allopathy")}
                        className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold text-primary bg-primary/5 touch-target"
                        aria-expanded={mobileServiceCategory === "allopathy"}
                      >
                        <span>Allopathy</span>
                        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", mobileServiceCategory === "allopathy" && "rotate-180")} aria-hidden="true" />
                      </button>
                      {mobileServiceCategory === "allopathy" && (
                        <div className="bg-card/50 px-2 py-1 space-y-1 max-h-48 overflow-y-auto">
                          {allopathyServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNavClick(service.id)}
                              className="block w-full text-left px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md font-medium touch-target"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Ayurveda Accordion */}
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <button
                        onClick={() => setMobileServiceCategory(mobileServiceCategory === "ayurveda" ? null : "ayurveda")}
                        className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold text-accent bg-accent/5 touch-target"
                        aria-expanded={mobileServiceCategory === "ayurveda"}
                      >
                        <span>Ayurveda</span>
                        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", mobileServiceCategory === "ayurveda" && "rotate-180")} aria-hidden="true" />
                      </button>
                      {mobileServiceCategory === "ayurveda" && (
                        <div className="bg-card/50 px-2 py-1 space-y-1">
                          {ayurvedaServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNavClick(service.id)}
                              className="block w-full text-left px-3 py-2 text-xs text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-md font-medium touch-target"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rehabilitation Accordion */}
                    <div className="rounded-lg border border-border/50 overflow-hidden">
                      <button
                        onClick={() => setMobileServiceCategory(mobileServiceCategory === "rehab" ? null : "rehab")}
                        className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold text-success bg-success/5 touch-target"
                        aria-expanded={mobileServiceCategory === "rehab"}
                      >
                        <span>Rehabilitation</span>
                        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", mobileServiceCategory === "rehab" && "rotate-180")} aria-hidden="true" />
                      </button>
                      {mobileServiceCategory === "rehab" && (
                        <div className="bg-card/50 px-2 py-1 space-y-1">
                          {rehabServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNavClick(service.id)}
                              className="block w-full text-left px-3 py-2 text-xs text-muted-foreground hover:text-success hover:bg-success/5 rounded-md font-medium touch-target"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleNavClick("services")}
                      className="block w-full text-center px-4 py-2.5 text-xs font-bold text-primary border border-primary/20 hover:bg-primary/5 rounded-lg transition-colors touch-target"
                    >
                      View All Services
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "block w-full text-left px-3 py-3 text-sm font-semibold rounded-lg transition-colors touch-target",
                    activeSection === item.id
                      ? "text-primary bg-primary/5"
                      : "text-foreground/80 hover:bg-muted"
                  )}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}

          <div className="pt-4 mt-4 border-t border-border">
            <Button 
              onClick={() => {
                onBookAppointment()
                setMobileMenuOpen(false)
              }}
              className="w-full bg-success hover:bg-success/90 font-semibold py-5 rounded-xl shadow-md touch-target"
            >
              Book Appointment
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
