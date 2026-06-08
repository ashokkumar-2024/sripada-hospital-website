"use client"

import { Phone, Ambulance, Clock, MapPin, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ambulanceFeatures = [
  {
    icon: ShieldCheck,
    title: "ACLS Equipped",
    description: "Advanced Cardiac Life Support with defibrillators, ventilators, and cardiac monitors"
  },
  {
    icon: HeartHandshake,
    title: "Trained Paramedics",
    description: "Critical care paramedics and EMTs trained in emergency response"
  },
  {
    icon: MapPin,
    title: "GPS Enabled",
    description: "Real-time tracking for fastest route to hospital"
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock ambulance services for emergencies"
  },
]

export function AmbulanceSection() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/90 to-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Emergency
            </span>
            <Ambulance className="h-16 w-16 mx-auto" aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
              24/7 Ambulance Services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every second counts in an emergency. Our fleet of advanced life support ambulances 
              ensures you get critical care from the moment we reach you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="tel:108">
                <Button size="lg" className="bg-white text-destructive hover:bg-white/90 text-lg font-semibold rounded-xl px-8 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] touch-target">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call 108
                </Button>
              </a>
              <a href="tel:+919XXXXXXXXX">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-lg font-semibold rounded-xl px-8 py-6 transition-all duration-200 hover:scale-[1.02] touch-target">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Hospital Helpline
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="h-3 w-3" aria-hidden="true" />
              Features
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
              Our Ambulance Fleet Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ambulanceFeatures.map((feature, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-destructive" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Info */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                <Ambulance className="h-3 w-3" aria-hidden="true" />
                Fleet
              </span>
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                Our Ambulance Fleet
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <h3 className="text-lg font-sans font-bold text-primary mb-4">ACLS Ambulances</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cardiac monitors with defibrillators</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Portable ventilators</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />IV pumps and infusion sets</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Advanced airway management</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Emergency medications</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <h3 className="text-lg font-sans font-bold text-accent mb-4">BLS Ambulances</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Basic life support equipment</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Oxygen cylinders</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Stretchers and splints</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />First aid supplies</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Patient transfer services</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-primary text-white rounded-xl p-8">
              <h3 className="text-xl font-sans font-bold mb-4">Emergency Contact Numbers</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-white/70 text-sm">Government Emergency</p>
                  <a href="tel:108" className="text-2xl font-bold hover:underline">108</a>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Hospital Emergency</p>
                  <a href="tel:+919XXXXXXXXX" className="text-2xl font-bold hover:underline">+91 9XXX XXX XXX</a>
                </div>
                <div>
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <a href="https://wa.me/919XXXXXXXXX" className="text-2xl font-bold hover:underline">Chat Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
