"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, UserRound, Phone, Mail, FileText, CheckCircle, ClipboardCheck, Clock, Stethoscope, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Appointment" },
  { id: 3, title: "Confirm" },
]

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setCurrentStep(1)
      setFormData({ name: "", email: "", phone: "", department: "", date: "", time: "", message: "" })
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    if (currentStep === 1) return formData.name && formData.email && formData.phone
    if (currentStep === 2) return formData.department && formData.date
    return true
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-primary to-accent p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-white" />
              </button>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                >
                  <Calendar className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-serif font-bold text-white">Book an Appointment</h2>
                <p className="text-white/80 mt-1">Schedule your visit with our specialists</p>
              </div>
              {!isSuccess && (
                <div className="flex items-center justify-between mt-6">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                        currentStep >= step.id ? "bg-white text-primary" : "bg-white/20 text-white/60"
                      }`}>
                        {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                      </div>
                      <span className={`ml-2 text-sm hidden sm:inline ${currentStep >= step.id ? "text-white" : "text-white/60"}`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div className={`w-8 sm:w-12 h-0.5 mx-2 ${currentStep > step.id ? "bg-white" : "bg-white/20"}`} />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {isSuccess ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-sans font-bold text-foreground">Appointment Requested!</h3>
                  <p className="text-muted-foreground mt-3 max-w-sm mx-auto">
                    {"Thank you, " + formData.name + "! We'll contact you shortly to confirm your appointment."}
                  </p>
                  <div className="mt-6 p-4 bg-muted rounded-xl text-sm text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <Stethoscope className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium text-foreground capitalize">{formData.department}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium text-foreground">{formData.date}</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <UserRound className="h-4 w-4 text-primary" />
                            Full Name
                          </label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="h-12 rounded-xl" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            Email Address
                          </label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="h-12 rounded-xl" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            Phone Number
                          </label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="h-12 rounded-xl" required />
                        </div>
                      </motion.div>
                    )}
                    {currentStep === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="department" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Stethoscope className="h-4 w-4 text-primary" />
                            Department
                          </label>
                          <select id="department" name="department" value={formData.department} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="">Select Department</option>
                            <optgroup label="Allopathy">
                              <option value="emergency">Emergency and Trauma</option>
                              <option value="general-medicine">General Medicine</option>
                              <option value="orthopaedics">Orthopaedics</option>
                              <option value="cardiology">Cardiology</option>
                              <option value="neurology">Neurology</option>
                              <option value="gynecology">Gynecology</option>
                              <option value="pediatrics">Pediatrics</option>
                            </optgroup>
                            <optgroup label="Ayurveda">
                              <option value="panchakarma">Panchakarma</option>
                              <option value="wellness">Preventive Wellness</option>
                            </optgroup>
                            <optgroup label="Rehabilitation">
                              <option value="physiotherapy">Physiotherapy</option>
                              <option value="neuro-rehab">Neurorehabilitation</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-medium text-foreground flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              Date
                            </label>
                            <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} className="h-12 rounded-xl" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="time" className="text-sm font-medium text-foreground flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              Preferred Time
                            </label>
                            <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                              <option value="">Any Time</option>
                              <option value="morning">Morning (9-12)</option>
                              <option value="afternoon">Afternoon (12-4)</option>
                              <option value="evening">Evening (4-8)</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            Message (Optional)
                          </label>
                          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your symptoms or reason for visit..." rows={3} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                      </motion.div>
                    )}
                    {currentStep === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div className="bg-muted rounded-2xl p-5 space-y-4">
                          <h4 className="font-medium text-foreground flex items-center gap-2">
                            <ClipboardCheck className="w-4 h-4 text-primary" />
                            Review Your Details
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="text-muted-foreground">Name</span><p className="font-medium text-foreground">{formData.name}</p></div>
                            <div><span className="text-muted-foreground">Phone</span><p className="font-medium text-foreground">{formData.phone}</p></div>
                            <div><span className="text-muted-foreground">Email</span><p className="font-medium text-foreground">{formData.email}</p></div>
                            <div><span className="text-muted-foreground">Department</span><p className="font-medium text-foreground capitalize">{formData.department}</p></div>
                            <div><span className="text-muted-foreground">Date</span><p className="font-medium text-foreground">{formData.date}</p></div>
                            <div><span className="text-muted-foreground">Time</span><p className="font-medium text-foreground capitalize">{formData.time || "Any Time"}</p></div>
                          </div>
                          {formData.message && <div><span className="text-muted-foreground text-sm">Message</span><p className="text-sm text-foreground mt-1">{formData.message}</p></div>}
                        </div>
                        <p className="text-xs text-muted-foreground text-center">{"By booking, you agree to our terms and privacy policy. We'll contact you to confirm."}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex gap-3 mt-6">
                    {currentStep > 1 && <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl">Back</Button>}
                    {currentStep < 3 ? (
                      <Button type="button" onClick={nextStep} disabled={!canProceed()} className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90">
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting} className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90">
                        {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" /> : "Confirm Booking"}
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
