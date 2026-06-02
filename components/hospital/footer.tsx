"use client"

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react"

interface FooterProps {
  onNavigate: (section: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Gallery", id: "gallery" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ]

  const services = [
    { name: "Emergency Care", id: "allopathy-emergency" },
    { name: "Panchakarma", id: "ayurveda-panchakarma" },
    { name: "Physiotherapy", id: "rehab-physio" },
    { name: "Laboratory", id: "lab-pharmacy" },
    { name: "Ambulance", id: "ambulance" },
    { name: "Equipment Rental", id: "equipment-rental" },
  ]

  const policies = [
    { name: "Privacy Policy", id: "policies" },
    { name: "Terms & Conditions", id: "policies" },
    { name: "Health Guidelines", id: "policies" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-primary to-accent rounded-xl p-2.5 shadow-md shadow-primary/10">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-white">
                  Sripada
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase -mt-0.5">
                  Multi-Speciality Hospitals
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering wellness by combining the diagnostic precision of Allopathy, the natural healing of Ayurveda, and the restorative strength of Rehabilitation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2.5 rounded-xl hover:bg-primary hover:text-white transition-all text-slate-400 hover:scale-110 flex items-center justify-center border border-slate-700/50 touch-target"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 text-left font-medium link-underline touch-target"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden="true" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate(service.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 text-left font-medium link-underline touch-target"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-success rounded-full" aria-hidden="true" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  123 Healthcare Avenue, Medical District, Hyderabad, Telangana - 500001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919XXXXXXXXX" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                  +91 9XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-info flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@sripadahospitals.com" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                  info@sripadahospitals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-400 font-medium">
                  Emergency Trauma Care: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} Sripada Multi-Speciality Hospitals. All rights reserved. Designed for excellence.
            </p>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              {policies.map((policy, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(policy.id)}
                  className="text-xs text-slate-500 hover:text-white transition-colors duration-200 font-semibold touch-target"
                >
                  {policy.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
