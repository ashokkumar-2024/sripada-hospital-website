"use client"

import {
  HeartPulse, Scissors, Zap, BedDouble, Microscope, FlaskConical,
  Pill, Ambulance, PersonStanding, Armchair, Sparkles
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const facilities = [
  {
    name: "ICU & Critical Care",
    description: "Equipped to provide continuous monitoring and specialized medical support for patients requiring intensive care and critical treatment.",
    icon: HeartPulse,
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&q=80",
  },
  {
    name: "Operation Theatre",
    description: "Modern operation theatres designed to support a wide range of surgical procedures while maintaining high standards of safety and efficiency.",
    icon: Scissors,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80",
  },
  {
    name: "Emergency Ward",
    description: "Rapid triage and immediate treatment, available 24 hours a day.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80",
  },
  {
    name: "Patient Rooms",
    description: "Comfortable and well-maintained patient rooms designed to support rest, recovery, and quality inpatient care.",
    icon: BedDouble,
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&q=80",
  },
  {
    name: "Diagnostic Center",
    description: "A dedicated diagnostic facility offering essential tests and evaluations that assist doctors in accurate diagnosis and treatment planning.",
    icon: Microscope,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  },
  {
    name: "Laboratory",
    description: "Reliable laboratory services providing timely and accurate diagnostic testing to support effective patient care.",
    icon: FlaskConical,
    color: "from-cyan-500 to-sky-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80",
  },
  {
    name: "Pharmacy",
    description: "An in-house pharmacy that ensures convenient access to prescribed medications and healthcare essentials.",
    icon: Pill,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80",
  },
  {
    name: "Ambulance Services",
    description: "Emergency transportation services available to facilitate timely medical assistance and patient transfers when required.",
    icon: Ambulance,
    color: "from-red-500 to-red-700",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
  {
    name: "Rehabilitation Center",
    description: "A dedicated rehabilitation facility equipped to support physical recovery, mobility improvement, and functional rehabilitation programs.",
    icon: PersonStanding,
    color: "from-indigo-500 to-blue-700",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
  },
  {
    name: "Waiting Lounge & Patient Support",
    description: "Comfortable waiting areas and patient support services designed to assist patients and their families throughout their healthcare experience.",
    icon: Armchair,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80",
  },
]

export function GallerySection() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4a]/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              Facilities
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Our Facility</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Built for Healing & Recovery
            </p>
            <p className="text-sm text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              Purpose-designed spaces that support every stage of care — from emergency treatment to rehabilitation and long-term recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className="bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                >
                  <div className={cn("h-1.5 w-full bg-gradient-to-r", facility.color)} />
                  
                  {/* Facility Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon if image fails */}
                    <div className={cn("hidden w-full h-full items-center justify-center", facility.bg)}>
                      <facility.icon className={cn("h-12 w-12", facility.iconColor)} />
                    </div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/90 shadow-lg", facility.bg)}>
                        <facility.icon className={cn("h-5 w-5", facility.iconColor)} />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-base font-sans font-bold text-[#0b1f4a] mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
