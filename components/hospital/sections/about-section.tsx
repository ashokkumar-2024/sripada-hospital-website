"use client"

import { Users, Award, Heart, Stethoscope, Leaf, Activity, ArrowRight, Sparkles, Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const managementTeam = [
  {
    name: "Dr. Sripada Rao",
    role: "Founder & Chairman",
    image: "https://i.pravatar.cc/300?img=68",
    bio: "Visionary healthcare leader with 35+ years of experience in cardiology administration and active clinical practice."
  },
  {
    name: "Dr. Anitha Sripada",
    role: "Medical Director",
    image: "https://i.pravatar.cc/300?img=49",
    bio: "Renowned internal medicine physician specializing in integrative therapies and critical care coordination."
  },
  {
    name: "Mr. Kiran Kumar",
    role: "Chief Administrator",
    image: "https://i.pravatar.cc/300?img=33",
    bio: "Healthcare operations administrator ensuring seamless outpatient flows, billing transparency, and compliance."
  },
]

const clinicalTeam = [
  { name: "Dr. Rajesh Kumar", department: "Cardiology", role: "Chief Cardiologist" },
  { name: "Dr. Priya Sharma", department: "Neurology", role: "Senior Neurologist" },
  { name: "Dr. Arun Menon", department: "Orthopaedics", role: "Lead Joint Surgeon" },
  { name: "Dr. Lakshmi Nair", department: "Ayurveda", role: "BAMS Consultant" },
  { name: "Dr. Suresh Reddy", department: "General Surgery", role: "Laparoscopic Specialist" },
  { name: "Dr. Kavitha Iyer", department: "Gynecology", role: "OB/GYN Consultant" },
  { name: "Dr. Mohan Das", department: "Pulmonology", role: "Chest Specialist" },
  { name: "Dr. Shalini Rao", department: "Pediatrics", role: "Neonatal Care Lead" },
  { name: "Dr. Venkat Prasad", department: "Rehabilitation", role: "Chief Physio" },
  { name: "Dr. Meera Krishnan", department: "Oncology", role: "Surgical Oncologist" },
]

const advisoryBoard = [
  {
    name: "Prof. Dr. S. Ramaswamy",
    credentials: "MBBS, MD, FRCP (London)",
    expertise: "Former clinical director at AIIMS Delhi. Over 40 years of expertise in cardiac research and teaching."
  },
  {
    name: "Dr. K. Vasudevan",
    credentials: "BAMS, MD (Ayurveda), PhD",
    expertise: "National award-winning research scholar focusing on Panchakarma detox protocols for rheumatoid conditions."
  },
  {
    name: "Dr. Elizabeth Thomas",
    credentials: "MD, DNB, FICS",
    expertise: "International board member in minimally invasive surgeries and advanced robotic surgical procedures."
  },
]

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "300+", label: "Hospital Beds" },
  { value: "50+", label: "Senior Specialists" },
  { value: "100K+", label: "Patients Treated" },
]

export function AboutSection() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-100"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">About Sripada Hospitals</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Serving the community with clinical excellence and medical integrity since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary text-white" aria-label="Hospital statistics">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-sans font-bold">{stat.value}</p>
                <p className="text-sm text-white/80 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  <Target className="h-3 w-3" aria-hidden="true" />
                  Purpose
                </span>
              </div>
              <h2 className="text-2xl font-sans font-bold text-foreground flex items-center gap-2.5">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver accessible, ethical, and high-quality healthcare that leverages the diagnostics of modern Allopathy, the natural balancing systems of Ayurveda, and the mobility restoration of Rehabilitation. We treat each patient with dignity and care.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                  <Eye className="h-3 w-3" aria-hidden="true" />
                  Future
                </span>
              </div>
              <h2 className="text-2xl font-sans font-bold text-foreground flex items-center gap-2.5">
                <div className="bg-accent/10 p-2.5 rounded-xl">
                  <Award className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To stand as the country's most trusted hospital for integrative medicine, establishing standards in clinical outcomes, safety protocols, and personalized patient care plans that lead to lifelong wellness.
              </p>
            </div>
          </div>

          {/* History Story */}
          <div className="mt-16 bg-card p-8 md:p-10 rounded-2xl border border-border shadow-sm space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Our Journey
            </span>
            <h2 className="text-2xl font-sans font-bold text-foreground">Our History & Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Established in 2005 by Dr. Sripada Rao, Sripada Multi-Speciality Hospitals was founded as a 50-bed inpatient ward with a unique mission: bridging the clinical divide between standard modern Allopathy and ancient traditional Indian healing systems. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the last two decades, the complex has grown into a 300-bed multi-speciality medical campus. We are proud of our high recovery success rates across neuro-rehab, bypass surgeries, and custom panchakarma therapies, making us a beacon of holistic healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="h-3 w-3" aria-hidden="true" />
              Leadership
            </span>
            <h2 className="text-3xl font-sans font-bold text-foreground">Management & Leadership</h2>
            <p className="text-muted-foreground mt-2 font-medium">Directing our healthcare operations and standards.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <Card key={index} className="premium-card">
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center p-6 pb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <CardContent className="p-6 text-center space-y-3">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground">{member.name}</h3>
                    <p className="text-accent font-bold text-xs mt-0.5">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Team Grid */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <Stethoscope className="h-3 w-3" aria-hidden="true" />
              Clinical Team
            </span>
            <h2 className="text-3xl font-sans font-bold text-foreground">Our Active Clinical Team</h2>
            <p className="text-muted-foreground mt-2 font-medium">Over 50 experts leading specialized inpatient and OPD care.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {clinicalTeam.map((doctor, index) => (
              <div key={index} className="bg-card rounded-xl p-5 text-center border border-border/80 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3.5 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-foreground text-sm leading-tight">{doctor.name}</h3>
                <p className="text-xs font-bold text-accent mt-1">{doctor.department}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-primary text-white relative overflow-hidden" aria-labelledby="advisory-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="h-3 w-3" aria-hidden="true" />
              Advisors
            </span>
            <h2 id="advisory-heading" className="text-3xl font-sans font-bold text-center text-white">
              Medical Advisory Board
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="font-sans font-bold text-lg text-white leading-snug">{advisor.name}</h3>
                  <p className="text-xs font-bold text-success mt-1">{advisor.credentials}</p>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrative Clinical Board */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider mb-4">
              <Activity className="h-3 w-3" aria-hidden="true" />
              Integration
            </span>
            <h2 className="text-3xl font-sans font-bold text-foreground">Integrative Clinical Board</h2>
            <p className="text-muted-foreground mt-2 font-medium">Coordinated diagnostics and therapies for superior care pathways.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary premium-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-sans font-bold text-primary">Allopathy Department</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Evidence-based modern diagnostics, ICU support, surgical specialties, and 24/7 emergency critical care capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent premium-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-7 w-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-sans font-bold text-accent">Ayurveda Department</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Purification Panchakarma techniques, natural internal cleansing, and daily regimen audits based on personal constitution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-success premium-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Activity className="h-7 w-7 text-success" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-sans font-bold text-success">Rehabilitation Board</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Advanced physical therapies, speech coordination training, occupational modules, and gait lab analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
