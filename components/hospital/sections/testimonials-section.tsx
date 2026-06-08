"use client"

import { useState } from "react"
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, UserRound, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  { name: "Ramesh Patel", location: "Hyderabad", rating: 5, text: "The cardiac team saved my life. Dr. Rajesh Kumar performing the bypass surgery was a blessing. Forever grateful for their expertise and compassion.", department: "Cardiology" },
  { name: "Sunita Devi", location: "Vijayawada", rating: 5, text: "Panchakarma therapy under Dr. Lakshmi transformed my health. My chronic skin condition is completely resolved. The Ayurveda department is exceptional.", department: "Ayurveda" },
  { name: "Vikram Singh", location: "Guntur", rating: 5, text: "After my accident, the rehabilitation team worked tirelessly. Today, I am walking again. Truly miraculous care and support.", department: "Rehabilitation" },
  { name: "Ananya Reddy", location: "Hyderabad", rating: 5, text: "The maternity care at Sripada Hospital was outstanding. From prenatal checkups to delivery, every step was handled with utmost care and professionalism.", department: "Obstetrics" },
  { name: "Mohammed Ali", location: "Secunderabad", rating: 5, text: "My father received excellent neurorehabilitation after his stroke. The therapists were patient, skilled, and genuinely caring throughout his recovery.", department: "Neurorehabilitation" },
  { name: "Lakshmi Prasad", location: "Warangal", rating: 5, text: "The orthopedic team performed a successful knee replacement for my mother. She is now pain-free and walking confidently. Highly recommended.", department: "Orthopaedics" },
  { name: "Suresh Babu", location: "Hyderabad", rating: 5, text: "I was impressed by the integrated approach at Sripada. My diabetes management combined allopathy with Ayurvedic dietary guidance for lasting results.", department: "General Medicine" },
  { name: "Kavitha Menon", location: "Chennai", rating: 5, text: "The emergency response was incredibly fast when my son had an accident. The trauma team stabilized him within minutes. We are forever thankful.", department: "Emergency" },
  { name: "Ravi Teja", location: "Visakhapatnam", rating: 5, text: "Sports injury recovery here was world-class. The physiotherapy team got me back on the cricket field in record time with personalized training.", department: "Sports Rehab" },
  { name: "Padmaja Rao", location: "Hyderabad", rating: 5, text: "The geriatric rehabilitation program helped my father regain his mobility after a fall. The patience and dedication of the staff was remarkable.", department: "Geriatric Rehab" },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[280px] lg:h-[360px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              Patient Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Testimonials</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto">Feedback from our valued patients and their families.</p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card border-0 shadow-xl bg-[#F8FAFC]">
              <CardContent className="p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <MessageSquareQuote className="h-10 w-10 text-[#2563EB]/20 mb-4" />
                <blockquote className="text-xl md:text-2xl font-medium text-[#0F172A] leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                      <UserRound className="h-6 w-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[#0F172A]">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-[#64748B]">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-[#EFF6FF] text-[#2563EB] px-4 py-2 rounded-full font-semibold uppercase tracking-wider w-fit">
                    {testimonials[currentIndex].department}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentIndex(idx)}
                    className={cn("h-2.5 rounded-full transition-all duration-300", idx === currentIndex ? "w-8 bg-[#2563EB]" : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]")}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={prevTestimonial} className="bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] p-3 rounded-xl text-[#64748B] transition-all touch-target" aria-label="Previous review">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={nextTestimonial} className="bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] p-3 rounded-xl text-[#64748B] transition-all touch-target" aria-label="Next review">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-sm font-semibold text-[#2563EB] tracking-wide mb-4">
              All Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0F172A]">Feedback From Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
                  <div>
                    <p className="font-sans font-semibold text-sm text-[#0F172A]">{testimonial.name}</p>
                    <p className="text-xs text-[#64748B]">{testimonial.location}</p>
                  </div>
                  <span className="text-xs bg-[#EFF6FF] text-[#2563EB] px-3 py-1 rounded-full font-semibold">{testimonial.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
