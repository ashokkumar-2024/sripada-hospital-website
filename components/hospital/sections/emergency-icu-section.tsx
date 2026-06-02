"use client"

import { useState } from "react"
import { Clock, Shield, Heart, Users, Activity, Bed, Phone, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const emergencyFeatures = [
  { icon: Clock, title: "24/7 Availability", description: "Emergency services round the clock, 365 days" },
  { icon: Shield, title: "Trauma Bay", description: "Fully equipped trauma resuscitation area" },
  { icon: Users, title: "Expert Team", description: "Emergency physicians and surgeons on call" },
  { icon: Activity, title: "Golden Hour", description: "Rapid response for critical interventions" },
]

const icuFeatures = [
  { icon: Bed, title: "50 ICU Beds", description: "Medical, Surgical, Cardiac & Neonatal ICUs" },
  { icon: Heart, title: "Monitoring", description: "Multi-parameter continuous monitoring" },
  { icon: Shield, title: "Isolation", description: "Negative pressure isolation rooms" },
  { icon: Users, title: "Intensivists", description: "Round-the-clock critical care specialists" },
]

export function EmergencyICUSection() {
  const [activeTab, setActiveTab] = useState<"emergency" | "icu">("emergency")

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/90 to-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Critical Care
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
              Emergency & Intensive Care
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Critical care expertise when every moment matters
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("emergency")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 touch-target ${
                activeTab === "emergency" 
                  ? "bg-destructive text-white shadow-md" 
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
              aria-pressed={activeTab === "emergency"}
            >
              Emergency Care
            </button>
            <button
              onClick={() => setActiveTab("icu")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 touch-target ${
                activeTab === "icu" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
              aria-pressed={activeTab === "icu"}
            >
              Intensive Care
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {activeTab === "emergency" ? (
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider mb-4">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  Emergency
                </span>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                  Emergency & Trauma Care
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our Emergency Department is designed to handle all types of medical emergencies, from minor injuries 
                to life-threatening trauma. With ATLS-trained staff, advanced equipment, and a dedicated trauma bay, 
                we ensure rapid assessment and treatment during the critical &quot;golden hour&quot;. Our seamless coordination 
                with surgical teams, ICU, and diagnostic services enables comprehensive emergency care under one roof.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {emergencyFeatures.map((feature, index) => (
                  <Card key={index} className="premium-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="h-6 w-6 text-destructive" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-destructive/5 rounded-xl p-8 border border-destructive/10">
                <h3 className="text-xl font-sans font-bold text-foreground mb-4">Emergency Services Include</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Trauma and polytrauma care</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Cardiac emergencies (heart attack, arrhythmia)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Stroke and neurological emergencies</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Respiratory emergencies</li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Poisoning and overdose management</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Burns and wound care</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Pediatric emergencies</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Obstetric emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Bed className="h-3 w-3" aria-hidden="true" />
                  ICU
                </span>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                  Intensive Care Units
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our state-of-the-art ICUs provide the highest level of care for critically ill patients. 
                With dedicated units for medical, surgical, cardiac, and neonatal intensive care, we offer 
                specialized monitoring and treatment protocols. Our ICUs feature the latest ventilators, 
                multi-parameter monitors, and life support systems, staffed by trained intensivists 24/7.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {icuFeatures.map((feature, index) => (
                  <Card key={index} className="premium-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">ICU Facilities</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Medical ICU - 15 beds</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Surgical ICU - 15 beds</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cardiac ICU - 10 beds</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Neonatal ICU - 10 beds</li>
                  </ul>
                </div>
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/10">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">Visiting Hours</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Morning: 11:00 AM - 11:30 AM</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Evening: 6:00 PM - 6:30 PM</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />One visitor at a time</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Doctor updates: After rounds</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-sans font-bold mb-4">24/7 Emergency Helpline</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-xl px-8 py-6 transition-all duration-200 hover:scale-[1.02] touch-target">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Emergency: 108
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-6 transition-all duration-200 hover:scale-[1.02] touch-target">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Hospital: +91 9XXX XXX XXX
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
