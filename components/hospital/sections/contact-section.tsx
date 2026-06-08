"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, MapPinned, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => { setIsSuccess(false); setFormData({ name: "", email: "", phone: "", message: "" }) }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <MapPinned className="h-3 w-3" />
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Contact Us</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Get in touch with our administrative and medical desks. We are available 24/7 for urgent clinical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="premium-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[#FEF2F2] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-[#DC2626]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Emergency Contact</h3>
                <a href="tel:108" className="text-2xl font-sans font-bold text-[#DC2626] hover:underline block">108</a>
                <p className="text-xs text-[#64748B]">24/7 Emergency Helpline</p>
              </CardContent>
            </Card>
            <Card className="premium-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[#EFF6FF] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-[#2563EB]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Appointment Booking</h3>
                <a href="tel:+919XXXXXXXXX" className="text-lg font-sans font-bold text-[#2563EB] hover:underline block">+91 9XXX XXX XXX</a>
                <p className="text-xs text-[#64748B]">Mon - Sat, 8 AM - 8 PM</p>
              </CardContent>
            </Card>
            <Card className="premium-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[#F0FDFA] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-[#0D9488]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Email Us</h3>
                <a href="mailto:info@sripadahospitals.com" className="text-sm font-sans font-bold text-[#0D9488] hover:underline block">info@sripadahospitals.com</a>
                <p className="text-xs text-[#64748B]">General Inquiries</p>
              </CardContent>
            </Card>
            <Card className="premium-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[#FAF5FF] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Working Hours</h3>
                <p className="text-sm font-sans font-bold text-[#7C3AED]">OPD: 8 AM - 8 PM</p>
                <p className="text-xs text-[#64748B]">Emergency: 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form & Details */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4">
                  Get in Touch
                </span>
                <h2 className="text-3xl font-sans font-bold text-[#0F172A]">Contact Details</h2>
              </div>
              <p className="text-[#475569] leading-relaxed">
                Whether you want to coordinate inpatient admissions, schedule diagnostics, rent medical devices, or discuss insurance approvals, our support desk is ready.
              </p>

              <div className="space-y-4 pt-4">
                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-[#EFF6FF] p-3 rounded-xl"><MapPin className="h-5 w-5 text-[#2563EB]" /></div>
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Address</h3>
                      <p className="text-[#475569] text-sm leading-relaxed mt-1">Govindappa Silks, Lakshmipura,<br />Madanayakanahalli,<br />Karnataka - 562162</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-[#FEF2F2] p-3 rounded-xl"><Phone className="h-5 w-5 text-[#DC2626]" /></div>
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Helplines</h3>
                      <p className="text-[#475569] text-sm leading-relaxed mt-1">
                        Emergency: <a href="tel:108" className="font-bold text-[#DC2626] hover:underline">108</a><br />
                        Reception: <a href="tel:+919XXXXXXXXX" className="hover:underline font-semibold text-[#0F172A]">+91 9XXX XXX XXX</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-[#F0FDFA] p-3 rounded-xl"><Mail className="h-5 w-5 text-[#0D9488]" /></div>
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-[#0F172A]">Email</h3>
                      <p className="text-[#475569] text-sm leading-relaxed mt-1">
                        General: <a href="mailto:info@sripadahospitals.com" className="hover:underline font-semibold text-[#0F172A]">info@sripadahospitals.com</a><br />
                        Appointments: <a href="mailto:appointments@sripadahospitals.com" className="hover:underline font-semibold text-[#0F172A]">appointments@sripadahospitals.com</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919XXXXXXXXX" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target">
                    <Phone className="h-4 w-4" /> Call Reception Desk
                  </a>
                  <a href="https://wa.me/919XXXXXXXXX?text=Hi,%20I%20have%20an%20inquiry" target="_blank" rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3 rounded-xl text-white transition-all hover:scale-110 touch-target" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-3 rounded-xl text-white transition-all hover:scale-110 touch-target" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] p-3 rounded-xl text-white transition-all hover:scale-110 touch-target" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                    <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3 rounded-xl text-white transition-all hover:scale-110 touch-target" aria-label="WhatsApp"><MessageCircle className="h-5 w-5" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Card className="premium-card border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-sans font-bold text-[#0F172A] mb-6">Send us a Message</h2>
                  {isSuccess ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-[#F0FDFA] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-[#0D9488]" />
                      </div>
                      <h3 className="text-xl font-sans font-bold text-[#0F172A]">Message Dispatched!</h3>
                      <p className="text-[#475569] text-sm">We have received your request and will follow up shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-1.5">Full Name</label>
                        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required
                          className="block w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">Email Address</label>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required
                            className="block w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A] mb-1.5">Phone Number</label>
                          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9XXX XXX XXX"
                            className="block w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-1.5">Your Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={4} required
                          className="block w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                        />
                      </div>
                      <Button type="submit" disabled={isSubmitting}
                        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl py-5 shadow-md transition-all hover:scale-[1.02] touch-target"
                      >
                        {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="h-3 w-3" /> Location
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#0F172A]">Find Us on the Map</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-white p-2 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden h-[450px]">
              <iframe src="https://maps.google.com/maps?q=17.385044,78.486671&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sripada Hospitals Location Map" />
            </div>
          </div>
          <div className="text-center">
            <a href="https://maps.google.com/?q=17.385044,78.486671" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:underline touch-target"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
