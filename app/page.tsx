"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/hospital/header"
import { Footer } from "@/components/hospital/footer"
import { HomeSection } from "@/components/hospital/sections/home-section"
import { AboutSection } from "@/components/hospital/sections/about-section"
import { ServicesSection } from "@/components/hospital/sections/services-section"
import { AmbulanceSection } from "@/components/hospital/sections/ambulance-section"
import { EmergencyICUSection } from "@/components/hospital/sections/emergency-icu-section"
import { LabPharmacySection } from "@/components/hospital/sections/lab-pharmacy-section"
import { TestimonialsSection } from "@/components/hospital/sections/testimonials-section"
import { GallerySection } from "@/components/hospital/sections/gallery-section"
import { BlogsSection } from "@/components/hospital/sections/blogs-section"
import { CareersSection } from "@/components/hospital/sections/careers-section"
import { ContactSection } from "@/components/hospital/sections/contact-section"
import { PoliciesSection } from "@/components/hospital/sections/policies-section"
import { EquipmentRentalSection } from "@/components/hospital/sections/equipment-rental-section"
import { WhatsAppButton } from "@/components/hospital/whatsapp-button"
import { AppointmentModal } from "@/components/hospital/appointment-modal"
import { ArrowUp } from "lucide-react"

export default function SripadaHospital() {
  const [activeSection, setActiveSection] = useState("home")
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home"
      setActiveSection(hash)
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)

    // Scroll listener for Back to Top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Hook for Scroll Reveal animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = document.querySelectorAll(".reveal-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [activeSection]) // Re-observe whenever section component mounts/updates

  const navigateTo = (section: string) => {
    window.location.hash = section
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderSection = () => {
    if (activeSection.startsWith("services-") || activeSection.startsWith("allopathy-") || 
        activeServiceStartsWithCustom(activeSection)) {
      return <ServicesSection activeService={activeSection} />
    }

    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={navigateTo} onBookAppointment={() => setShowAppointmentModal(true)} />
      case "about":
        return <AboutSection />
      case "services":
        return <ServicesSection activeService="overview" />
      case "ambulance":
        return <AmbulanceSection />
      case "emergency-icu":
        return <EmergencyICUSection />
      case "lab-pharmacy":
        return <LabPharmacySection />
      case "testimonials":
        return <TestimonialsSection />
      case "gallery":
        return <GallerySection />
      case "blogs":
        return <BlogsSection />
      case "careers":
        return <CareersSection />
      case "contact":
        return <ContactSection />
      case "policies":
        return <PoliciesSection />
      case "equipment-rental":
        return <EquipmentRentalSection />
      default:
        return <HomeSection onNavigate={navigateTo} onBookAppointment={() => setShowAppointmentModal(true)} />
    }
  }

  // Helper function for sub-service check
  const activeServiceStartsWithCustom = (section: string) => {
    return section.startsWith("ayurveda-") || section.startsWith("rehab-")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        activeSection={activeSection} 
        onNavigate={navigateTo} 
        onBookAppointment={() => setShowAppointmentModal(true)}
      />
      
      <main className="flex-1">
        {renderSection()}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <WhatsAppButton />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] hover:from-[#152d6b] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white/20"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      
      <AppointmentModal 
        isOpen={showAppointmentModal} 
        onClose={() => setShowAppointmentModal(false)} 
      />
    </div>
  )
}
