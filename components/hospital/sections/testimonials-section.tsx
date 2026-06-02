"use client"

import { Star, Quote, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ramesh Patel",
    location: "Hyderabad",
    rating: 5,
    department: "Cardiology",
    text: "I was rushed to Sripada after a severe heart attack. The emergency trauma team was incredibly fast and professional. Dr. Rajesh performed my bypass surgery, and here I am, fully recovered. The cardiac rehab program helped me get back to normal life. Forever grateful!"
  },
  {
    name: "Sunita Devi",
    location: "Vijayawada",
    rating: 5,
    department: "Ayurveda",
    text: "For 10 years I suffered from psoriasis with no relief from conventional treatments. The Ayurveda department here changed my life. After 21 days of Panchakarma therapy, my skin cleared up significantly. Dr. Lakshmi Nair is truly a healer."
  },
  {
    name: "Vikram Singh",
    location: "Guntur",
    rating: 5,
    department: "Rehabilitation",
    text: "After my road accident, doctors said I might never walk again. The rehabilitation team at Sripada proved them wrong. Six months of dedicated physiotherapy and neurorehabilitation, and I walked out of this hospital on my own feet."
  },
  {
    name: "Lakshmi Narayana",
    location: "Warangal",
    rating: 5,
    department: "Orthopaedics",
    text: "My knee replacement surgery was flawless. Dr. Arun Menon explained everything clearly and made me feel comfortable. The post-op care was excellent, and I was walking within days. Highly recommend their orthopaedic department."
  },
  {
    name: "Priya Reddy",
    location: "Hyderabad",
    rating: 5,
    department: "Obstetrics",
    text: "Had a high-risk pregnancy due to gestational diabetes. The OB/GYN team monitored me closely throughout. My delivery was smooth, and both me and my baby are healthy. The maternity ward is clean and the nurses are so caring."
  },
  {
    name: "Mohammed Ismail",
    location: "Secunderabad",
    rating: 4,
    department: "Neurology",
    text: "My father had a stroke and was brought here unconscious. The neurology team acted quickly and started treatment immediately. After rehabilitation, he has regained most of his functions. Good hospital with skilled doctors."
  },
  {
    name: "Anitha Kumari",
    location: "Nellore",
    rating: 5,
    department: "Ayurveda",
    text: "I came for infertility treatment after trying conventional medicine for 3 years. The Ayurvedic approach with Uttara Basti and Rasayana therapy worked wonders. I'm now a proud mother of twins! Thank you, Sripada Ayurveda team."
  },
  {
    name: "Suresh Babu",
    location: "Kurnool",
    rating: 5,
    department: "General Surgery",
    text: "Got my gallbladder removed laparoscopically. Minimal pain, tiny scars, and I was discharged the next day. The surgeon was experienced and the nursing staff very attentive. Affordable pricing compared to corporate hospitals."
  },
  {
    name: "Kavitha Sharma",
    location: "Hyderabad",
    rating: 5,
    department: "Oncology",
    text: "Diagnosed with breast cancer, I was devastated. But Dr. Meera and her team gave me hope. The treatment plan combined surgery with chemotherapy seamlessly. Two years cancer-free now. This hospital gave me a second life."
  },
  {
    name: "Rajendra Prasad",
    location: "Tirupati",
    rating: 4,
    department: "Pulmonology",
    text: "Suffered from severe COPD for years. The pulmonology department here helped me manage my condition much better with proper medication and breathing exercises. The doctors take time to explain everything. Recommended."
  },
]

export function TestimonialsSection() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-100"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Patient Testimonials</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Real recovery stories and medical outcomes from patients whose lives we've had the privilege to touch.
            </p>
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="premium-card relative group">
                <CardContent className="p-8 space-y-6">
                  <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none" aria-hidden="true" />
                  
                  {/* Star Rating */}
                  <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4.5 w-4.5 ${i < testimonial.rating ? "fill-success text-success" : "text-muted"}`} 
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed italic relative z-10">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="pt-5 border-t border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-sans font-bold text-foreground text-base">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground font-semibold mt-0.5">{testimonial.location}</p>
                    </div>
                    
                    <span className="text-[10px] font-bold bg-accent/10 text-accent border border-accent/25 px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {testimonial.department}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share testimonial CTA */}
      <section className="py-20 bg-background border-t border-border" aria-labelledby="share-story-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-14 h-14 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow shadow-primary/5">
              <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h2 id="share-story-heading" className="text-3xl font-sans font-bold text-foreground">
              Share Your Recovery Journey
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Had a positive healing experience under our clinical teams? We would love to hear from you. Your feedback helps families search for trustworthy care.
            </p>
            <a 
              href="https://wa.me/919XXXXXXXXX?text=I%20would%20like%20to%20share%20my%20testimonial%20about%20Sripada%20Hospitals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-success hover:bg-success/90 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md touch-target"
            >
              Share Testimonial via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
