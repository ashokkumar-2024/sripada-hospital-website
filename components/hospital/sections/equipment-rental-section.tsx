"use client"

import { useState } from "react"
import { 
  Wind, Bed, HeartPulse, Activity, Phone, MessageCircle, 
  CheckCircle, Info, ArrowRight, ShieldCheck, Truck, Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const equipmentItems = [
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator",
    icon: Wind,
    description: "Medical-grade oxygen concentrators for home care. Continuous oxygen therapy support available in 5L and 10L output capacities.",
    features: ["5L/10L Flows", "Low Decibel Noise", "Easy Humidifier Box", "Battery & Inverter Ready"],
    availability: "In Stock",
    category: "Respiratory Support"
  },
  {
    id: "bipap",
    name: "BiPAP Machine",
    icon: Wind,
    description: "Bilevel Positive Airway Pressure machines with automated pressure settings, comfortable mask interfaces, and built-in humidification.",
    features: ["Auto-Titrating Mode", "Built-in Humidifier", "Compliance Records", "Full-face Masks"],
    availability: "In Stock",
    category: "Respiratory Support"
  },
  {
    id: "cpap",
    name: "CPAP Machine",
    icon: Wind,
    description: "Continuous Positive Airway Pressure devices for sleep apnea management. Travel-friendly designs with mask leak alerts.",
    features: ["Whisper Quiet", "Auto Ramp Mode", "Leak Detection Alerts", "Travel Bag Included"],
    availability: "In Stock",
    category: "Respiratory Support"
  },
  {
    id: "hospital-cot",
    name: "Hospital Cots / Beds",
    icon: Bed,
    description: "Adjustable 2-function and 5-function electric/manual cots for home patient care. Side railings and orthopedic mattress included.",
    features: ["Electric & Manual", "Height Adjustments", "Side Safety Rails", "Fluid-proof Mattress"],
    availability: "In Stock",
    category: "Patient Mobility"
  },
  {
    id: "ventilator",
    name: "Home Ventilator",
    icon: HeartPulse,
    description: "Advanced mechanical ventilators for home recovery support. Includes delivery, setup calibration, and 24/7 technical on-call assistance.",
    features: ["Portable Form", "Volume & Pressure Modes", "Long Battery Backup", "24/7 Specialist Support"],
    availability: "Limited Stock",
    category: "Respiratory Support"
  },
  {
    id: "dvt-pump",
    name: "DVT Compression Pump",
    icon: Activity,
    description: "Sequential compression devices designed for Deep Vein Thrombosis prevention in post-operative or bed-bound patients.",
    features: ["Sequential Inflation", "Ergonomic Leg Sleeves", "Adjustable Pressure", "Quiet Cycle Motor"],
    availability: "In Stock",
    category: "Circulation Care"
  },
  {
    id: "lymphedema-pump",
    name: "Lymphoedema Pump",
    icon: Activity,
    description: "Pneumatic gradient compression therapy pumps for managing lymphatic drainage issues and limb swelling.",
    features: ["Multi-Chamber Sleeves", "Precision Timer", "Pressure Gauge Controls", "Graduated Compression"],
    availability: "In Stock",
    category: "Circulation Care"
  },
]

export function EquipmentRentalSection() {
  const [selectedEquipment, setSelectedEquipment] = useState<typeof equipmentItems[0] | null>(null)
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleEnquiry = (equipment: typeof equipmentItems[0]) => {
    setSelectedEquipment(equipment)
    setShowEnquiryModal(true)
    setFormSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowEnquiryModal(false)
      setFormSubmitted(false)
    }, 2000)
  }

  const categories = [...new Set(equipmentItems.map(item => item.category))]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[350px] lg:h-[450px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/75" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="max-w-2xl text-white space-y-6">
              <Badge className="bg-white/10 text-white border-none py-1.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider">
                Home Healthcare Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">
                Medical Equipment Rental
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
                Affordable home rental options for professional-grade clinical equipment. We handle sanitization, logistics delivery, installation, and patient caregiver training.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="tel:+919XXXXXXXXX">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-6 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] touch-target">
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    Call to Enquire
                  </Button>
                </a>
                <a 
                  href="https://wa.me/919XXXXXXXXX?text=Hi,%20I%20want%20to%20inquire%20about%20renting%20medical%20equipment%20from%20Sripada%20Hospitals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl px-6 py-6 transition-all duration-200 hover:scale-[1.02] touch-target">
                    <MessageCircle className="h-4 w-4 mr-2 text-success" aria-hidden="true" />
                    WhatsApp Booking
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Info Bar */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3.5">
              <div className="bg-success/10 p-2.5 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-success" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-foreground">Sterilized Assets</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Sanitized under strict ISO policies.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="bg-primary/10 p-2.5 rounded-xl flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-foreground">Same-Day Delivery</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Free doorstep delivery and setup support.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="bg-accent/10 p-2.5 rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-foreground">24/7 Technical On-Call</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Continuous equipment monitoring help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-sans font-bold text-foreground mb-8 flex items-center gap-3 pb-2 border-b">
                <span className="w-2 h-6 bg-primary rounded-full" aria-hidden="true" />
                {category} Equipment
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems
                  .filter(item => item.category === category)
                  .map((equipment) => (
                    <Card key={equipment.id} className="premium-card flex flex-col justify-between">
                      <div>
                        <div className="p-6 bg-gradient-to-tr from-primary/5 to-accent/5 border-b flex items-start justify-between gap-4">
                          <div className="w-12 h-12 bg-white border rounded-xl flex items-center justify-center shadow-sm">
                            <equipment.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          
                          <Badge 
                            variant={equipment.availability === "In Stock" ? "default" : "secondary"}
                            className={cn(
                              "font-bold text-xs px-2.5 py-0.5 rounded-full border",
                              equipment.availability === "In Stock" 
                                ? "bg-success/10 text-success border-success/20" 
                                : "bg-warning/10 text-warning border-warning/20"
                            )}
                          >
                            {equipment.availability}
                          </Badge>
                        </div>
                        
                        <CardHeader className="p-6 space-y-2">
                          <CardTitle className="font-sans text-xl font-bold text-foreground leading-snug">
                            {equipment.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {equipment.description}
                          </CardDescription>
                        </CardHeader>
                      </div>

                      <CardContent className="p-6 pt-0 space-y-6">
                        {/* Features List */}
                        <div className="flex flex-wrap gap-1.5">
                          {equipment.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="text-[10px] font-bold bg-muted text-muted-foreground px-2.5 py-1 rounded-full uppercase"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Booking CTAs */}
                        <div className="grid grid-cols-2 gap-3">
                          <a 
                            href={`https://wa.me/919XXXXXXXXX?text=Hi,%20I%20want%20to%20enquire%20about%20renting%20your%20${encodeURIComponent(equipment.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-success hover:bg-success/90 text-white text-xs font-bold rounded-xl py-3 text-center flex items-center justify-center gap-1 transition-all duration-200 hover:scale-[1.02] touch-target shadow-sm"
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            WhatsApp
                          </a>
                          
                          <Button 
                            onClick={() => handleEnquiry(equipment)}
                            className="bg-primary hover:bg-primary/90 text-xs font-bold rounded-xl py-3 flex items-center justify-center gap-1 transition-all duration-200 hover:scale-[1.02] touch-target"
                          >
                            Request Call
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h3 className="text-xl font-sans font-bold text-center text-foreground mb-8">
            Coordinated In-Home Care Support
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: CheckCircle, title: "Double Sanitized", desc: "Chemical sterilizations before each delivery." },
              { icon: Phone, title: "Continuous Support", desc: "Technical engineers available 24/7." },
              { icon: Activity, title: "Installation Free", desc: "Technicians calibrate the device at home." },
              { icon: Info, title: "Family Training", desc: "Step-by-step guidance for caretakers." },
            ].map((benefit, index) => (
              <div key={index} className="space-y-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h4 className="font-sans font-bold text-sm text-foreground leading-snug">{benefit.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
        <DialogContent className="sm:max-w-md rounded-2xl p-6 border-none bg-card">
          <DialogHeader className="space-y-1.5">
            <DialogTitle className="font-sans text-2xl font-bold text-foreground">
              Equipment Booking Request
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Requesting callback for renting: <span className="font-bold text-primary">{selectedEquipment?.name}</span>
            </DialogDescription>
          </DialogHeader>
          
          {formSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="h-8 w-8 text-success" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-sans font-bold text-foreground">Request Lodged!</h3>
              <p className="text-muted-foreground text-sm">Our medical representative will contact you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="eq-name" className="text-xs font-bold text-foreground">Full Name</Label>
                <Input id="eq-name" placeholder="Enter your full name" required className="rounded-xl border-input" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="eq-phone" className="text-xs font-bold text-foreground">Phone Number</Label>
                  <Input id="eq-phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="rounded-xl border-input" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="eq-duration" className="text-xs font-bold text-foreground">Rental Duration</Label>
                  <Input id="eq-duration" placeholder="e.g., 1 month" required className="rounded-xl border-input" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="eq-email" className="text-xs font-bold text-foreground">Email Address (Optional)</Label>
                <Input id="eq-email" type="email" placeholder="name@email.com" className="rounded-xl border-input" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="eq-message" className="text-xs font-bold text-foreground">Special Delivery Instructions</Label>
                <Textarea id="eq-message" placeholder="Provide any details on patient state or location..." rows={3} className="rounded-xl border-input resize-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowEnquiryModal(false)} className="flex-1 rounded-xl font-semibold border-border touch-target">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-md touch-target">
                  Submit Enquiry
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
