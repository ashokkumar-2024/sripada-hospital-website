"use client"

import { useCallback, useEffect, useState } from "react"
import { 
  Heart, Shield, Clock, Users, Award, Stethoscope, Activity, Brain, 
  Bone, Baby, Syringe, ChevronLeft, ChevronRight, Star, Plus, Minus,
  UserCheck, HeartPulse, Phone, MapPin, Mail, Quote, CheckCircle, Info,
  ArrowRight, Calendar, Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface HomeSectionProps {
  onNavigate: (section: string) => void
  onBookAppointment: () => void
}

const heroSlides = [
  {
    title: "Advanced Multi-Speciality Care Under One Roof",
    subtitle: "Experience world-class clinical excellence integrated with compassionate care. Your health is our priority.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
  },
  {
    title: "Allopathy, Ayurveda & Rehabilitation Combined",
    subtitle: "Pioneering holistic recovery protocols that treat the root cause, not just symptoms.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80",
  },
  {
    title: "24/7 Emergency & Trauma Services",
    subtitle: "State-of-the-art trauma bays and senior specialists always ready when minutes count.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1920&q=80",
  },
]

const quickInfo = [
  { icon: Users, question: "Who", answer: "A multidisciplinary team of 50+ senior doctors and medical experts.", label: "Our Experts" },
  { icon: Stethoscope, question: "What", answer: "Comprehensive treatments spanning modern surgery, Ayurveda, and post-op rehab.", label: "Medical Care" },
  { icon: Clock, question: "When", answer: "24/7 emergency trauma care, round-the-clock pharmacy, and OPD from 8 AM - 8 PM daily.", label: "Operations" },
  { icon: MapPin, question: "Where", answer: "Centrally located medical complex in Hyderabad with ample parking and accessibility.", label: "Location" },
  { icon: Heart, question: "Why", answer: "Proven patient outcomes, transparent billing, and a compassionate healing ecosystem.", label: "Why Sripada" },
  { icon: Activity, question: "How", answer: "Personalized care pathways combining diagnostics, therapies, and regular follow-ups.", label: "Care Pathways" },
]

const treatments = [
  { icon: HeartPulse, name: "Cardiac Care", description: "Comprehensive diagnostics, therapy, and cardiac rehabilitation.", color: "text-primary bg-primary/10 border-primary/20" },
  { icon: Bone, name: "Orthopaedics", description: "Advanced joint replacements, spine surgery, and sports medicine.", color: "text-accent bg-accent/10 border-accent/20" },
  { icon: Brain, name: "Neurosciences", description: "Stroke emergency response, neuro-surgery, and nerve therapies.", color: "text-info bg-info/10 border-info/20" },
  { icon: Syringe, name: "Panchakarma", description: "Traditional Ayurvedic detoxification and therapeutic rejuvenation.", color: "text-success bg-success/10 border-success/20" },
  { icon: Activity, name: "Stroke Rehab", description: "Multidisciplinary physical, speech, and occupational recovery.", color: "text-primary bg-primary/10 border-primary/20" },
  { icon: Baby, name: "Maternity Care", description: "High-risk pregnancy management and safe neonatology units.", color: "text-accent bg-accent/10 border-accent/20" },
]

const recoveryProcess = [
  { step: 1, title: "Consultation", description: "Comprehensive multi-specialist medical evaluation" },
  { step: 2, title: "Diagnosis", description: "Advanced labs, digital imaging, and Prakriti analysis" },
  { step: 3, title: "Integrated Plan", description: "Custom blend of Allopathy, Ayurveda & Rehab therapies" },
  { step: 4, title: "Care Delivery", description: "Surgeries, medical management, or cleansing therapies" },
  { step: 5, title: "Rehabilitation", description: "Guided physiotherapy and post-op mobility training" },
  { step: 6, title: "Follow-up", description: "Periodic monitoring and long-term wellness checks" },
]

const whyChooseUs = [
  { icon: Clock, title: "24/7 Emergency & ICU", description: "ICU intensivist on-duty 24 hours a day, 365 days a year." },
  { icon: Users, title: "50+ Senior Specialists", description: "Consulting experts with decades of hospital experience." },
  { icon: Shield, title: "Integrative Protocols", description: "Synergy of modern and traditional healing under one roof." },
  { icon: Award, title: "Accredited Quality", description: "Strict NABH standards for medical safety and hygiene." },
  { icon: Heart, title: "Compassionate Care", description: "Patient-first attitude with absolute transparency." },
]

const facilities = [
  { name: "Intensive Care Unit (ICU)", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
  { name: "Modular Operation Theatres", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  { name: "Ayurveda Panchakarma Center", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { name: "Modern Rehabilitation Gym", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
]

const doctors = [
  { 
    name: "Dr. Rajesh Kumar", 
    specialty: "Chief Cardiologist", 
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Dr. Rajesh Kumar is a pioneering cardiologist with 15+ years of experience. He specializes in interventional cardiology and has performed over 5,000 successful procedures. He is dedicated to patient recovery and heart health education."
  },
  { 
    name: "Dr. Priya Sharma", 
    specialty: "Senior Neurologist", 
    image: "https://i.pravatar.cc/300?img=32",
    bio: "Dr. Priya Sharma is a senior neurologist with expertise in stroke management and epilepsy. She holds a fellowship in neurodiagnostics and is passionate about neurorehabilitation therapies."
  },
  { 
    name: "Dr. Arun Menon", 
    specialty: "Orthopaedic Surgeon", 
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Dr. Arun Menon is a highly skilled orthopaedic surgeon specializing in joint replacements and sports medicine. He utilizes minimally invasive techniques to ensure faster recovery times."
  },
  { 
    name: "Dr. Lakshmi Nair", 
    specialty: "Ayurveda Physician", 
    image: "https://i.pravatar.cc/300?img=45",
    bio: "Dr. Lakshmi Nair is an experienced Ayurvedic physician specializing in Panchakarma and lifestyle medicine. She has helped thousands of patients manage chronic conditions naturally."
  },
]

const testimonials = [
  { name: "Ramesh Patel", location: "Hyderabad", rating: 5, text: "The cardiac team saved my life. Dr. Rajesh Kumar performing the bypass surgery was a blessing. Forever grateful for their expertise and compassion." },
  { name: "Sunita Devi", location: "Vijayawada", rating: 5, text: "Panchakarma therapy under Dr. Lakshmi transformed my health. My chronic skin condition is completely resolved. The Ayurveda department is exceptional." },
  { name: "Vikram Singh", location: "Guntur", rating: 5, text: "After my accident, the rehabilitation team worked tirelessly. Today, I am walking again. Truly miraculous care and support." },
]

const faqs = [
  { question: "What are the visiting hours for inpatients?", answer: "General visiting hours are from 10:00 AM - 12:00 PM and 5:00 PM - 7:00 PM daily. ICU visiting is strictly limited to 11:00 AM and 6:00 PM for 15 minutes, with one visitor per patient." },
  { question: "Do you accept health insurance and cashless claims?", answer: "Yes, we are empaneled with all major public and private TPA insurance providers, corporate panels, and government welfare schemes like Ayushman Bharat." },
  { question: "How does the integrative medicine model work?", answer: "Our specialists cross-consult. For example, a post-stroke patient receives emergency Allopathic care, followed by intensive Physiotherapy and Ayurvedic therapies to speed up neurological recovery." },
  { question: "How can I book a doctor appointment?", answer: "You can book directly by clicking 'Book Appointment', calling our reception helpline, or walking in. Online bookings receive priority confirmation codes." },
  { question: "Are emergency and ambulance services available 24/7?", answer: "Yes, our Level-1 Trauma Center and ACLS (Advanced Cardiac Life Support) ambulances operate 24 hours a day, 7 days a week, 365 days a year." },
]

const blogs = [
  { title: "Benefits of Integrative Medicine in Post-Stroke Recovery", date: "May 15, 2026", excerpt: "How combining neurological rehab, physical exercises, and traditional Ayurvedic oils yields faster recovery rates...", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { title: "Managing Chronic Arthritis: The Ayurveda & Physio Synergy", date: "May 10, 2026", excerpt: "Discover natural anti-inflammatory protocols alongside specialized joint-strengthening routines...", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
]

const certifications = [
  { name: "NABH Accredited", description: "National Accreditation Board for Hospitals & Healthcare" },
  { name: "ISO 9001:2015", description: "Certified Medical Quality Management System" },
  { name: "NABL Certified", description: "National Accreditation Board for Testing and Calibration Laboratories" },
  { name: "Green Hospital", description: "Eco-friendly, energy-efficient healthcare environment" },
]

const successStories = [
  { title: "Heart Bypass Recovery", patient: "Mr. Rajan (Age 58)", story: "Underwent a complex double bypass surgery and returned to active walking within 6 weeks using cardiac rehab." },
  { title: "Stroke Paralysis Reversal", patient: "Mrs. Kamala (Age 62)", story: "Regained 90% motor control of her right side through a 3-month physical therapy and Ayurvedic Rasayana protocol." },
  { title: "Chronic Psoriasis Healing", patient: "Ms. Deepa (Age 35)", story: "Experienced complete remission of severe skin patches after 28 days of guided Panchakarma and herbal detox." },
]

export function HomeSection({ onNavigate, onBookAppointment }: HomeSectionProps) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [openStory, setOpenStory] = useState<number | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null)

  // Autoplay Hero Banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  return (
    <div className="bg-medical-pattern">
      {/* Hero Crossfade Slider - Accessible */}
      <section className="relative h-[550px] lg:h-[650px] overflow-hidden bg-slate-950" aria-label="Hero banner">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center",
              index === currentHeroSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentHeroSlide}
          >
            {/* Gradient Overlay - Medical Teal */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl text-white space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight text-balance drop-shadow-sm">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-slate-100/90 font-medium max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button 
                      size="lg" 
                      onClick={onBookAppointment}
                      className="bg-success hover:bg-success/90 text-white font-semibold rounded-xl px-7 py-6 shadow-lg shadow-success/20 transition-all duration-200 hover:scale-[1.02] touch-target"
                    >
                      <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                      Book Appointment
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      onClick={() => onNavigate("services")}
                      className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl px-7 py-6 transition-all duration-200 hover:scale-[1.02] touch-target"
                    >
                      Our Services
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Slider Controls */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 p-3 rounded-full text-white backdrop-blur-md transition-all duration-200 hover:scale-105 z-20 touch-target"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 p-3 rounded-full text-white backdrop-blur-md transition-all duration-200 hover:scale-105 z-20 touch-target"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Custom Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20" role="tablist" aria-label="Hero slides">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 touch-target",
                index === currentHeroSlide ? "w-8 bg-success" : "w-2.5 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentHeroSlide}
              role="tab"
            />
          ))}
        </div>
      </section>

      {/* Quick Overview (5W & 1H) */}
      <section className="py-20 bg-background border-y border-border reveal-on-scroll" aria-labelledby="quick-info-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              At a Glance
            </span>
            <h2 id="quick-info-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Hospital Quick Overview
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Everything you need to know about Sripada Multi-Speciality Hospitals at a glance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickInfo.map((item, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3.5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {item.question}
                      </span>
                      <h3 className="font-sans text-lg font-bold text-foreground">{item.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Programmes */}
      <section className="py-20 reveal-on-scroll" aria-labelledby="treatments-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <Stethoscope className="h-3 w-3" aria-hidden="true" />
              Specializations
            </span>
            <h2 id="treatments-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Key Medical Programmes
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Specialized clinical programs integrating modern medicine with physical restoration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <Card 
                key={index} 
                className="premium-card group cursor-pointer border-l-4 border-l-transparent hover:border-l-current transition-all duration-300"
                style={{ borderLeftColor: 'transparent' }}
                onClick={() => onNavigate("services")}
              >
                <CardContent className="p-8">
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 border", treatment.color)}>
                    <treatment.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              onClick={() => onNavigate("services")} 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold px-6 py-5 transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 bg-primary text-white relative overflow-hidden reveal-on-scroll" aria-labelledby="recovery-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Activity className="h-3 w-3" aria-hidden="true" />
              Our Process
            </span>
            <h2 id="recovery-heading" className="text-3xl lg:text-4xl font-sans font-bold text-center">
              Our Recovery Pathway
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {recoveryProcess.map((step, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 relative">
                <div className="w-12 h-12 rounded-full bg-success text-white flex items-center justify-center mx-auto mb-4 font-sans font-bold text-lg shadow-md">
                  {step.step}
                </div>
                <h3 className="font-sans font-bold text-base mb-2">{step.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 reveal-on-scroll" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="h-3 w-3" aria-hidden="true" />
              Excellence
            </span>
            <h2 id="why-choose-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Clinical Excellence & Safety
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              We stand apart in quality, integration, and round-the-clock availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group bg-card p-6 rounded-xl border border-border/80 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background border-y border-border reveal-on-scroll" aria-labelledby="facility-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-info/10 text-info text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Infrastructure
            </span>
            <h2 id="facility-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Modern Hospital Facilities
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Equipped with state-of-the-art diagnostics and patient care settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-sm border border-border/50 aspect-square">
                <img
                  src={facility.image}
                  alt={facility.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-sans font-bold text-lg">{facility.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              onClick={() => onNavigate("gallery")} 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold px-6 py-5 transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 reveal-on-scroll" aria-labelledby="team-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="h-3 w-3" aria-hidden="true" />
              Experts
            </span>
            <h2 id="team-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Meet Our Leading Specialists
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Highly credentialed clinical leaders dedicated to your wellness.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x max-w-6xl mx-auto scrollbar-thin">
            {doctors.map((doctor, index) => (
              <Card 
                key={index} 
                className="min-w-[280px] md:min-w-[300px] max-w-[300px] flex-shrink-0 snap-start premium-card group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center p-6 pb-2">
                  <img
                    src={doctor.image}
                    alt={`Dr. ${doctor.name}`}
                    loading="lazy"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center space-y-4">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-accent font-semibold mt-0.5">{doctor.specialty}</p>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full bg-primary hover:bg-primary/90 rounded-lg text-xs font-semibold py-4 touch-target"
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button 
              onClick={() => onNavigate("about")} 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold px-6 py-5 transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              View Full Medical Team
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-primary text-white relative overflow-hidden reveal-on-scroll" aria-labelledby="testimonials-heading">
        <div className="absolute inset-0 bg-medical-pattern opacity-5" aria-hidden="true" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="h-3 w-3" aria-hidden="true" />
              Patient Stories
            </span>
            <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-sans font-bold text-white">
              Patient Stories & Reviews
            </h2>
          </div>
          
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-2xl shadow-xl">
            <Quote className="absolute top-6 right-8 h-20 w-20 text-white/10 pointer-events-none" aria-hidden="true" />
            
            <div className="space-y-6 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1" aria-label={`Rating: ${testimonials[currentTestimonial].rating} out of 5 stars`}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-success text-success" aria-hidden="true" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-white italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>
              
              <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="font-sans font-bold text-lg text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-xs text-white/70 font-medium">{testimonials[currentTestimonial].location}</p>
                </div>
                
                <span className="text-xs bg-success/25 text-success border border-success/30 px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  {testimonials[currentTestimonial].name === "Sunita Devi" ? "Ayurveda" : testimonials[currentTestimonial].name === "Ramesh Patel" ? "Cardiology" : "Rehabilitation"}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
              <button
                onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="bg-white/15 hover:bg-white/25 p-2.5 rounded-lg text-white transition-colors touch-target"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                className="bg-white/15 hover:bg-white/25 p-2.5 rounded-lg text-white transition-colors touch-target"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 reveal-on-scroll" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-info/10 text-info text-xs font-bold uppercase tracking-wider mb-4">
              <Info className="h-3 w-3" aria-hidden="true" />
              Help Center
            </span>
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-sans font-bold text-center text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border bg-card rounded-xl overflow-hidden shadow-sm transition-all hover:border-primary/40">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left bg-card hover:bg-muted/50 transition-colors touch-target"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-sans font-bold text-base text-foreground leading-snug pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out border-t border-transparent",
                    openFaq === index ? "max-h-[300px] border-border bg-muted/30 p-5" : "max-h-0"
                  )}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background border-t border-border" aria-labelledby="blog-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Health Insights
            </span>
            <h2 id="blog-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Latest Health Insights & Articles
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Read educational material authored by Sripada clinical staff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogs.map((blog, index) => (
              <Card key={index} className="premium-card group cursor-pointer" onClick={() => onNavigate("blogs")}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs font-bold text-accent uppercase mb-2">{blog.date}</p>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{blog.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              onClick={() => onNavigate("blogs")} 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold px-6 py-5 transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Quick Details */}
      <section className="py-20 bg-primary text-white" aria-labelledby="contact-preview-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 shadow-sm">
              <div className="bg-white/15 p-3.5 rounded-xl">
                <Phone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-bold uppercase tracking-wider">Emergency 24/7</p>
                <a href="tel:+919XXXXXXXXX" className="font-sans text-lg font-bold text-white hover:text-white/90 transition-colors">
                  +91 9XXX XXX XXX
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 shadow-sm">
              <div className="bg-white/15 p-3.5 rounded-xl">
                <Mail className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-bold uppercase tracking-wider">Email Inquiry</p>
                <a href="mailto:info@sripadahospitals.com" className="font-sans text-lg font-bold text-white hover:text-white/90 transition-colors">
                  info@sripadahospitals.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 shadow-sm">
              <div className="bg-white/15 p-3.5 rounded-xl">
                <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-bold uppercase tracking-wider">Our Location</p>
                <button onClick={() => onNavigate("contact")} className="font-sans text-lg font-bold text-white hover:text-white/90 text-left transition-colors">
                  Hyderabad, India
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background border-t border-border" aria-labelledby="certifications-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="certifications-heading" className="sr-only">Certifications and Accreditations</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-xl border border-border/60 shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 shadow shadow-primary/5">
                  <Award className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <p className="font-sans font-bold text-foreground text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1 max-w-[200px] mx-auto leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20" aria-labelledby="success-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="h-3 w-3" aria-hidden="true" />
              Outcomes
            </span>
            <h2 id="success-heading" className="text-3xl lg:text-4xl font-sans font-bold text-foreground">
              Patient Recovery Success Stories
            </h2>
            <p className="text-muted-foreground mt-3 font-medium">
              Real outcomes from our integrative treatment protocols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="premium-card group cursor-pointer"
                onClick={() => setOpenStory(openStory === index ? null : index)}
              >
                <CardContent className="p-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-success/10 p-2 rounded-lg">
                      <UserCheck className="h-5 w-5 text-success" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{story.patient}</span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground group-hover:text-primary transition-colors">{story.title}</h3>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out text-sm text-muted-foreground leading-relaxed",
                    openStory === index ? "max-h-[300px] mt-4 pt-4 border-t border-border" : "max-h-0"
                  )}>
                    {story.story}
                  </div>
                  <p className="text-xs font-bold text-primary flex items-center gap-1 group-hover:underline pt-2">
                    {openStory === index ? "Close details" : "Read recovery story"}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-6 max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            Book Now
          </span>
          <h2 id="cta-heading" className="text-3xl lg:text-5xl font-sans font-bold leading-tight">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Consult with our integrative clinical board to design a personalized treatment pathway.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={onBookAppointment} 
              className="bg-success hover:bg-success/90 text-white font-semibold rounded-xl px-8 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => onNavigate("contact")} 
              className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-6 transition-all duration-200 hover:scale-[1.02] touch-target"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Profile Modal */}
      <Dialog open={!!selectedDoctor} onOpenChange={(open) => !open && setSelectedDoctor(null)}>
        <DialogContent className="sm:max-w-lg rounded-2xl overflow-hidden p-0 border-none bg-card">
          {selectedDoctor && (
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-primary to-accent" aria-hidden="true" />
              
              <div className="px-6 pb-6 relative">
                <div className="absolute -top-16 left-6">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
                
                <div className="pt-14 space-y-4">
                  <div>
                    <DialogTitle className="font-sans text-2xl font-bold text-foreground">
                      {selectedDoctor.name}
                    </DialogTitle>
                    <p className="text-accent font-bold text-sm">{selectedDoctor.specialty}</p>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-sans font-bold text-sm text-foreground mb-1.5">Biography & Expertise</h4>
                    <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                      {selectedDoctor.bio}
                    </DialogDescription>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-xl border border-border/60 flex items-center justify-between gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold text-foreground">Integrative Consult Board</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => {
                        setSelectedDoctor(null)
                        onBookAppointment()
                      }}
                      className="bg-primary hover:bg-primary/90 text-xs font-semibold rounded-lg touch-target"
                    >
                      Book Consult
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
