"use client"

import { useState } from "react"
import { Shield, FileText, HeartPulse, ChevronRight, Clock, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const policyTabs = [
  { id: "privacy", name: "Privacy Policy", icon: Shield, desc: "Data protection guidelines" },
  { id: "terms", name: "Terms & Conditions", icon: FileText, desc: "Use of services rules" },
  { id: "health-safety", name: "Health & Safety", icon: HeartPulse, desc: "Inpatient safety procedures" },
]

const policyContent: Record<string, { title: string; lastUpdated: string; sections: { heading: string; content: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        content: "At Sripada Multi-Speciality Hospitals, we collect personal and medical information necessary to provide you with high-quality healthcare services. This includes your name, contact details, date of birth, medical history, clinical diagnostics, health insurance credentials, and any other data required for diagnosis and treatment plans."
      },
      {
        heading: "2. How We Use Your Information",
        content: "Your personal and medical information is processed solely for healthcare delivery, scheduling clinical appointments, processing secure payments, cross-consultations among departments, and communicating critical updates. Anonymized aggregate clinical data may occasionally be used for internal quality research audits."
      },
      {
        heading: "3. Information Sharing",
        content: "We do not sell, rent, or trade patient personal information to third parties. Medical records are shared only with other authorized healthcare practitioners directly involved in your care, insurance companies processing claims, or as required under governmental regulatory laws."
      },
      {
        heading: "4. Data Security & Encryption",
        content: "We implement robust security measures, including end-to-end data encryption, access controls, firewalls, and secure medical servers, to protect clinical records from unauthorized access. Our administrative staff undergo regular data privacy compliance training."
      },
      {
        heading: "5. Patient Rights",
        content: "Patients hold the right to inspect, copy, or request amendments to their medical records. You may request copies of clinical summaries by contacting our Patient Support desk during operational hours."
      }
    ]
  },
  terms: {
    title: "Terms and Conditions",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: "By accessing Sripada Hospital's physical facilities, renting medical equipment, or using our digital booking services, you agree to be bound by these clinical terms and conditions."
      },
      {
        heading: "2. Medical Services Information Disclaimer",
        content: "All educational articles, blogs, and facility descriptions provided on our digital platforms are meant for general guidance and do not constitute substitute professional medical advice. Always seek doctor consultations for clinical diagnosis."
      },
      {
        heading: "3. Appointment Confirmations",
        content: "Online appointment requests are subject to clinical availability. The hospital reserves the right to adjust OPD timings if urgent clinical surgeries arise. Patients are requested to report to the reception desk 15 minutes before their scheduled time slot."
      },
      {
        heading: "4. Payment & Cashless Settlements",
        content: "Payments are due at the time of OPD consultation or inpatient discharge. Cashless insurance claims are subject to approval by the respective TPAs. Patients are responsible for resolving co-payments or non-covered items with the billing desk."
      },
      {
        heading: "5. Intellectual Property",
        content: "All clinical systems, medical illustrations, custom branding logos, and code on Sripada Hospital platforms are proprietary properties of the hospital and protected under intellectual property acts."
      }
    ]
  },
  "health-safety": {
    title: "Health and Safety Guidelines",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        heading: "1. Infection Control Protocols",
        content: "Sripada Hospital maintains a sterile medical environment. All wards, surgery rooms, and diagnostic facilities undergo regular decontamination. Staff strictly follow sanitization procedures, and sterile equipment guidelines are enforced by our infection-control board."
      },
      {
        heading: "2. Inpatient Visitor Regulations",
        content: "To assist patient recovery and rest, visitor entry is strictly limited to 10:00 AM - 12:00 PM and 5:00 PM - 7:00 PM. A maximum of two visitors are permitted per ward room. Children under 12 years of age are not allowed in critical wards or ICU lobbies."
      },
      {
        heading: "3. Emergency Evacuation & Drills",
        content: "The hospital is fully equipped with fire exits, emergency alarms, and independent power generators. Clear routing maps are displayed on each floor. Staff regularly participate in mock code drills to ensure rapid patient evacuation if needed."
      },
      {
        heading: "4. Bio-Medical Waste Segregation",
        content: "We adhere strictly to Bio-Medical Waste Management Rules. Solid and liquid medical wastes are segregated at source in color-coded bins and disposed of safely through authorized pollution control agencies."
      },
      {
        heading: "5. Patient Safety and Fall Alerts",
        content: "Inpatients are provided identification wristbands matching their medical charts. Fall prevention support, bed-side rails, and nurse call buttons are active 24/7 in all rooms."
      }
    ]
  }
}

export function PoliciesSection() {
  const [activeTab, setActiveTab] = useState("privacy")
  const policy = policyContent[activeTab]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[250px] lg:h-[350px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Policies
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Policies & Guidelines</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Our clinical and administrative commitment to transparency, safety, and data privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabbed Grid Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <Card className="border border-border/80 shadow-sm sticky top-[150px]">
                <CardContent className="p-4 space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3.5 py-2">
                    Policy Categories
                  </div>
                  
                  <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0" aria-label="Policy categories">
                    {policyTabs.map((tab) => {
                      const isCurrent = tab.id === activeTab
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            "w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 flex flex-col lg:flex-row lg:items-center gap-3 border flex-shrink-0 max-w-[200px] lg:max-w-none touch-target",
                            isCurrent
                              ? "bg-primary text-white border-primary shadow-md"
                              : "bg-card text-muted-foreground border-border hover:bg-muted/50 hover:text-foreground"
                          )}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          <tab.icon className={cn("h-5 w-5", isCurrent ? "text-white" : "text-primary")} aria-hidden="true" />
                          <div className="flex flex-col items-start">
                            <span className="leading-snug">{tab.name}</span>
                            <span className={cn("text-[10px] font-medium leading-none mt-0.5", isCurrent ? "text-white/80" : "text-muted-foreground")}>
                              {tab.desc}
                            </span>
                          </div>
                          {isCurrent && <ChevronRight className="h-4 w-4 ml-auto hidden lg:block" aria-hidden="true" />}
                        </button>
                      )
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Policy Display Board */}
            <div className="flex-1">
              <Card className="border border-border/80 shadow-md rounded-2xl overflow-hidden bg-card">
                {/* Visual header */}
                <div className="p-6 md:p-8 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b">
                  <div className="space-y-1.5">
                    <CardTitle className="font-sans text-2xl font-bold text-white">{policy.title}</CardTitle>
                    <CardDescription className="text-xs text-white/60 font-medium flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Last Updated: {policy.lastUpdated}
                    </CardDescription>
                  </div>
                  <span className="text-[10px] bg-primary/20 text-white border border-primary/30 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider self-start sm:self-center">
                    Official Document
                  </span>
                </div>

                {/* Body details */}
                <CardContent className="p-6 md:p-8 space-y-8 max-w-none">
                  {policy.sections.map((section, index) => (
                    <div 
                      key={index} 
                      className="border-b border-border/50 last:border-b-0 pb-6 last:pb-0 space-y-3"
                    >
                      <h3 className="font-sans font-bold text-lg text-foreground">{section.heading}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
