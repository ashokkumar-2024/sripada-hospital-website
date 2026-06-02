"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Contact Us</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Get in touch with our administrative and medical desks. We are available 24/7 for urgent clinical support.
            </p>
          </div>
        </div>
      </section>

      {/* Info & Form Columns */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side: Contact Info Blocks */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Get in Touch
                </span>
                <h2 className="text-3xl font-sans font-bold text-foreground">Reach Out to Us</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Whether you want to coordinate inpatient admissions, schedule diagnostics, rent medical devices, or discuss insurance approvals, our support desk is ready.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-sm text-foreground">Address</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        123 Healthcare Avenue,<br />
                        Medical District, Hyderabad,<br />
                        Telangana - 500001
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-sm text-foreground">Helplines</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Emergency: <a href="tel:108" className="font-bold text-destructive hover:underline">108</a><br />
                        Reception: <a href="tel:+919XXXXXXXXX" className="hover:underline font-semibold">+91 9XXX XXX XXX</a><br />
                        Desk: <a href="tel:+919XXXXXXXXX" className="hover:underline font-semibold">+91 9XXX XXX XXX</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-info/10 p-3 rounded-xl">
                      <Mail className="h-5 w-5 text-info" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-sm text-foreground">Email</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        General: <a href="mailto:info@sripadahospitals.com" className="hover:underline font-semibold">info@sripadahospitals.com</a><br />
                        Appts: <a href="mailto:appointments@sripadahospitals.com" className="hover:underline font-semibold">appointments@sripadahospitals.com</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="premium-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-success/10 p-3 rounded-xl">
                      <Clock className="h-5 w-5 text-success" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-sm text-foreground">Hours</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        OPD: Mon - Sat, 8 AM - 8 PM<br />
                        Emergency Unit: 24/7 Care<br />
                        Pharmacy Desk: 24/7 Open
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action buttons under cards */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="tel:+919XXXXXXXXX" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Reception Desk
                </a>
                <a 
                  href="https://wa.me/919XXXXXXXXX?text=Hi,%20I%20have%20an%20inquiry%20regarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-success hover:bg-success/90 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Consult
                </a>
              </div>
            </div>

            {/* Right Side: Form Container */}
            <div>
              <Card className="border border-border/80 shadow-md rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-sans font-bold text-foreground">Send us a Message</h2>

                  {isSuccess ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-8 w-8 text-success" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-sans font-bold text-foreground">Message Dispatched!</h3>
                      <p className="text-muted-foreground text-sm">We have received your request and will follow up shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Name Floating label input */}
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          required
                          className="peer block w-full rounded-xl border border-input bg-card px-3.5 pb-3 pt-6 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-3.5 top-2.5 z-10 origin-[0] -translate-y-2 scale-75 transform text-xs text-muted-foreground duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-primary font-semibold"
                        >
                          Full Name
                        </label>
                      </div>

                      {/* Email and Phone Grid */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer block w-full rounded-xl border border-input bg-card px-3.5 pb-3 pt-6 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-3.5 top-2.5 z-10 origin-[0] -translate-y-2 scale-75 transform text-xs text-muted-foreground duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-primary font-semibold"
                          >
                            Email Address
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer block w-full rounded-xl border border-input bg-card px-3.5 pb-3 pt-6 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-3.5 top-2.5 z-10 origin-[0] -translate-y-2 scale-75 transform text-xs text-muted-foreground duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-primary font-semibold"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>

                      {/* Message Floating label textarea */}
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder=" "
                          rows={4}
                          required
                          className="peer block w-full rounded-xl border border-input bg-card px-3.5 pb-3 pt-6 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-3.5 top-2.5 z-10 origin-[0] -translate-y-2 scale-75 transform text-xs text-muted-foreground duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-primary font-semibold"
                        >
                          Your Message / Inquiry
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl py-5 shadow-md transition-all duration-200 hover:scale-[1.02] touch-target"
                      >
                        {isSubmitting ? "Sending..." : (
                          <>
                            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map location frame */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Location
            </span>
            <h2 className="text-3xl font-sans font-bold text-center text-foreground">Find Us on the Map</h2>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card p-2">
            <div className="rounded-xl overflow-hidden h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=17.385044,78.486671&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sripada Hospitals Location Map"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://maps.google.com/?q=17.385044,78.486671"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline touch-target"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps App
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
