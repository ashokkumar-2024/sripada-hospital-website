"use client"

import { useState } from "react"
import { TestTube, Pill, Clock, Home, FileText, Truck, Phone, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const labServices = [
  "Complete Blood Count (CBC)",
  "Blood Sugar (Fasting/PP/Random)",
  "Lipid Profile",
  "Liver Function Tests",
  "Kidney Function Tests",
  "Thyroid Profile",
  "Urine Analysis",
  "Stool Examination",
  "Cardiac Markers",
  "Tumor Markers",
  "Hormone Assays",
  "Culture & Sensitivity",
]

const labFeatures = [
  { icon: Clock, title: "Quick Results", description: "Most reports within 24 hours" },
  { icon: Home, title: "Home Collection", description: "Sample collection at your doorstep" },
  { icon: FileText, title: "Online Reports", description: "Access reports via WhatsApp/Email" },
  { icon: TestTube, title: "NABL Standards", description: "Quality assured testing" },
]

const pharmacyFeatures = [
  { icon: Clock, title: "24/7 Open", description: "Round-the-clock medicine availability" },
  { icon: Pill, title: "Genuine Medicines", description: "Only authentic pharmaceuticals" },
  { icon: Truck, title: "Home Delivery", description: "Medicines delivered to your home" },
  { icon: FileText, title: "Prescription Records", description: "Digital prescription management" },
]

export function LabPharmacySection() {
  const [activeTab, setActiveTab] = useState<"lab" | "pharmacy">("lab")

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Diagnostics
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
              Laboratory & Pharmacy
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Accurate diagnostics and genuine medicines under one roof
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("lab")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 touch-target ${
                activeTab === "lab" 
                  ? "bg-accent text-white shadow-md" 
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
              aria-pressed={activeTab === "lab"}
            >
              Laboratory
            </button>
            <button
              onClick={() => setActiveTab("pharmacy")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 touch-target ${
                activeTab === "pharmacy" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
              aria-pressed={activeTab === "pharmacy"}
            >
              Pharmacy
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {activeTab === "lab" ? (
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                  <TestTube className="h-3 w-3" aria-hidden="true" />
                  Diagnostics
                </span>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                  In-House Diagnostic Laboratory
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our NABL-accredited pathology laboratory offers a comprehensive range of diagnostic tests 
                with state-of-the-art analyzers and quality control measures. With experienced pathologists 
                and technicians, we ensure accurate results that help in precise diagnosis and treatment monitoring.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {labFeatures.map((feature, index) => (
                  <Card key={index} className="premium-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-accent/5 rounded-xl p-8 border border-accent/10">
                <h3 className="text-xl font-sans font-bold text-foreground mb-6">Tests Available</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {labServices.map((service, index) => (
                    <div key={index} className="bg-card rounded-lg p-3 text-sm text-foreground border border-border">
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">Lab Timings</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Monday - Saturday: 7:00 AM - 9:00 PM</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Sunday: 8:00 AM - 2:00 PM</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-destructive rounded-full" />Emergency: 24/7</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">Home Collection</h3>
                  <p className="text-muted-foreground mb-4">
                    Can&apos;t visit the lab? We&apos;ll come to you! Book a home sample collection.
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 touch-target">
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Book Home Collection
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Pill className="h-3 w-3" aria-hidden="true" />
                  Medicines
                </span>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                  24-Hour Pharmacy
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our in-house pharmacy operates round the clock, ensuring you have access to genuine medicines 
                whenever you need them. We stock a wide range of pharmaceuticals, surgical supplies, and 
                healthcare products, all sourced directly from authorized distributors.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pharmacyFeatures.map((feature, index) => (
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
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">Products Available</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Prescription medicines</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />OTC medications</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Surgical supplies</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Ayurvedic medicines</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Medical devices</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Health supplements</li>
                  </ul>
                </div>
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/10">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-4">Home Delivery</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get your medicines delivered to your doorstep. Send your prescription via WhatsApp 
                    and we&apos;ll deliver within the city.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 touch-target">
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    WhatsApp Prescription
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
