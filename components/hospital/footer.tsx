"use client"

import {
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle,
  Heart, Stethoscope, ArrowRight, Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FooterProps {
  onNavigate: (section: string) => void
}

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Facilities", id: "gallery" },
  { name: "Contact", id: "contact" },
]

const departments = [
  { name: "Allopathy", id: "services" },
  { name: "Ayurveda", id: "services" },
  { name: "Rehabilitation", id: "services" },
  { name: "Emergency Care", id: "emergency-icu" },
  { name: "Lab & Pharmacy", id: "lab-pharmacy" },
]

const supportLinks = [
  { name: "Privacy Policy", id: "policies" },
  { name: "Terms & Conditions", id: "policies" },
  { name: "Health Guidelines", id: "policies" },
  { name: "Careers", id: "careers" },
]

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0b1f4a] text-slate-300">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488]/20 to-transparent" />
        <div className="w-full px-4 lg:px-8 py-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#0d9488] to-[#0b7c72] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
              <div className="text-white text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold mb-2">Need Medical Assistance?</h3>
                <p className="text-white/80 text-base">Our team is available 24/7 to help you with appointments and emergencies.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="tel:+919XXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0b1f4a] hover:bg-white/90 font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Helpline
                </a>
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0b1f4a] hover:bg-[#152d6b] text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg border border-white/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full px-4 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <button onClick={() => onNavigate("home")} className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    src="/Sripada Hospital (4).png" 
                    alt="Sripada Hospitals Logo" 
                    className="w-20 h-20 rounded-2xl object-contain"
                  />
                </div>
              </button>

              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                A trusted healthcare destination combining Allopathy, Ayurveda, and Rehabilitation services to help patients recover and improve their quality of life.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  { label: "Facebook", Icon: Facebook, href: "#" },
                  { label: "Instagram", Icon: Instagram, href: "#" },
                  { label: "YouTube", Icon: Youtube, href: "#" },
                  { label: "WhatsApp", Icon: MessageCircle, href: "https://wa.me/919XXXXXXXXX" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10 hover:border-white/20"
                    aria-label={s.label}
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors w-full text-left py-0.5"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#0d9488] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Departments</h4>
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.name}>
                    <button
                      onClick={() => onNavigate(dept.id)}
                      className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors w-full text-left py-0.5"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#0d9488] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                      {dept.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-widests mb-5">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors w-full text-left py-0.5"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#0d9488] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400 leading-relaxed">Govindappa Silks, Lakshmipura, Madanayakanahalli, Karnataka - 562162</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#0d9488] flex-shrink-0" />
                  <a href="tel:+919XXXXXXXXX" className="text-sm text-slate-400 hover:text-white transition-colors">
                    +91 9XXX XXX XXX
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@sripadahospitals.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                    info@sripadahospitals.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-slate-400">24/7 Emergency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Sripada Multi-Speciality Hospitals. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              Trust <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> Care <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> Excellence
            </p>
            <p className="text-xs text-slate-600">
              Designed &amp; developed by{" "}
              <a href="https://buzziwah.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">
                buzziwah.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
