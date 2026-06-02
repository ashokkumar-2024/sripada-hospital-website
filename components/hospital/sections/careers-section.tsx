"use client"

import { useState } from "react"
import { Briefcase, MapPin, Clock, Upload, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const jobOpenings = [
  {
    id: 1,
    title: "Staff Nurse",
    department: "Nursing",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-5 years",
    description: "We are looking for experienced Staff Nurses to join our growing team. The ideal candidate should have a GNM or B.Sc Nursing degree with valid registration. Experience in ICU/Emergency preferred.",
    requirements: [
      "GNM or B.Sc Nursing degree",
      "Valid Nursing Council registration",
      "2+ years of hospital experience",
      "ICU/Emergency experience preferred",
      "Good communication skills",
    ]
  },
  {
    id: 2,
    title: "Physiotherapist",
    department: "Rehabilitation",
    location: "Hyderabad",
    type: "Full-time",
    experience: "1-3 years",
    description: "Join our rehabilitation department to help patients recover and regain mobility. We seek physiotherapists passionate about patient care with experience in orthopaedic and neurological rehabilitation.",
    requirements: [
      "BPT or MPT degree",
      "Valid IAP registration",
      "Experience in neuro/ortho rehab",
      "Knowledge of modern therapy techniques",
      "Patient-friendly approach",
    ]
  },
  {
    id: 3,
    title: "Front Office Executive",
    department: "Administration",
    location: "Hyderabad",
    type: "Full-time",
    experience: "1-2 years",
    description: "Be the first point of contact for our patients. We need friendly, efficient front office executives who can manage patient registrations, appointments, and queries professionally.",
    requirements: [
      "Graduate in any discipline",
      "Excellent communication skills",
      "Computer proficiency",
      "Previous healthcare experience preferred",
      "Multilingual ability (Telugu, Hindi, English)",
    ]
  },
]

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setSelectedJob(null)
      setFormData({ name: "", email: "", phone: "", position: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Careers
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
              Careers at Sripada
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join our team of healthcare professionals making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Benefits
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
              Why Join Sripada Hospitals?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Growth Opportunities", desc: "Continuous learning and career advancement" },
              { title: "Work-Life Balance", desc: "Flexible schedules and leave policies" },
              { title: "Competitive Pay", desc: "Market-leading compensation packages" },
              { title: "Inclusive Culture", desc: "Diverse, supportive work environment" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="h-3 w-3" aria-hidden="true" />
              Openings
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
              Current Openings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-sans font-bold text-foreground">{job.title}</h3>
                      <p className="text-sm text-primary font-semibold">{job.department}</p>
                    </div>
                    <Briefcase className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{job.type} · {job.experience}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <Button 
                    className="w-full touch-target"
                    onClick={() => {
                      setSelectedJob(job)
                      setFormData({ ...formData, position: job.title })
                    }}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div 
          className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${selectedJob.title}`}
        >
          <div 
            className="bg-card rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-sans font-bold text-foreground">Apply for {selectedJob.title}</h2>
              <p className="text-sm text-muted-foreground">{selectedJob.department} · {selectedJob.location}</p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-success" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">We&apos;ll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <h3 className="font-sans font-bold text-foreground mb-3">Requirements</h3>
                  <ul className="space-y-1">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="font-sans font-bold text-foreground mb-3">Your Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-bold text-foreground block mb-1">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-bold text-foreground block mb-1">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-bold text-foreground block mb-1">Phone</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9XXX XXX XXX"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cv" className="text-sm font-bold text-foreground block mb-1">Upload CV</label>
                      <div className="border-2 border-dashed border-input rounded-lg p-4 text-center cursor-pointer hover:border-primary transition-colors">
                        <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PDF, DOC up to 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" className="flex-1 touch-target" onClick={() => setSelectedJob(null)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 touch-target" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
