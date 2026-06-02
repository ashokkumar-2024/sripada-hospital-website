"use client"

import { useState } from "react"
import { 
  Stethoscope, Leaf, Activity, Heart, Brain, Bone, Baby, Syringe,
  Wind, Eye, Ear, Scissors, Radiation, TestTube, Pill, Ambulance,
  CheckCircle, ChevronRight, Phone, MessageCircle, HelpCircle,
  ArrowRight, Sparkles
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServicesSectionProps {
  activeService: string
}

const serviceCategories = [
  {
    id: "allopathy",
    name: "Allopathy",
    icon: Stethoscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    description: "Evidence-based modern medical science with advanced diagnostic capabilities, surgical specialties, and critical care units."
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    icon: Leaf,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    description: "Time-tested classical Indian medicine focusing on detoxification, preventative wellness, and lifestyle therapeutics."
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    icon: Activity,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    description: "Comprehensive physical recovery, neurorehabilitation, speech therapies, and mobility training programs."
  },
]

const categorySiblings = {
  allopathy: [
    { name: "Emergency & Trauma", id: "allopathy-emergency" },
    { name: "ICU & Anaesthesia", id: "allopathy-icu" },
    { name: "General Medicine", id: "allopathy-general-medicine" },
    { name: "General Surgery", id: "allopathy-general-surgery" },
    { name: "Gynae & OB/GYN", id: "allopathy-gynae" },
    { name: "Gastroenterology", id: "allopathy-gastro" },
    { name: "Vascular", id: "allopathy-vascular" },
    { name: "Orthopaedics", id: "allopathy-ortho" },
    { name: "Rheumatology", id: "allopathy-rheumatology" },
    { name: "Maxillofacial", id: "allopathy-maxillofacial" },
    { name: "Plastic Surgery", id: "allopathy-plastic" },
    { name: "Surgical Oncology", id: "allopathy-surgical-oncology" },
    { name: "Medical Oncology", id: "allopathy-medical-oncology" },
    { name: "Pulmonology", id: "allopathy-pulmonology" },
    { name: "Neurology", id: "allopathy-neuro" },
    { name: "Urology", id: "allopathy-urology" },
    { name: "Nephrology", id: "allopathy-nephrology" },
    { name: "Radiology", id: "allopathy-radiology" },
    { name: "Pediatrics", id: "allopathy-pediatrics" },
    { name: "ENT", id: "allopathy-ent" },
    { name: "Neurosurgery", id: "allopathy-neurosurgery" },
    { name: "Spine Surgery", id: "allopathy-spine" },
  ],
  ayurveda: [
    { name: "Panchakarma", id: "ayurveda-panchakarma" },
    { name: "Detoxification", id: "ayurveda-detox" },
    { name: "Skin Disease", id: "ayurveda-skin" },
    { name: "Infertility", id: "ayurveda-infertility" },
    { name: "Degenerative Disorders", id: "ayurveda-degenerative" },
    { name: "Autoimmune Disorders", id: "ayurveda-autoimmune" },
    { name: "Lifestyle Management", id: "ayurveda-lifestyle" },
    { name: "Preventive Wellness", id: "ayurveda-preventive" },
    { name: "Rejuvenation", id: "ayurveda-rejuvenation" },
  ],
  rehabilitation: [
    { name: "Physiotherapy", id: "rehab-physio" },
    { name: "Neurorehabilitation", id: "rehab-neuro" },
    { name: "Orthopaedic Rehab", id: "rehab-ortho" },
    { name: "Stroke Recovery", id: "rehab-stroke" },
    { name: "Sports Injury", id: "rehab-sports" },
    { name: "Mobility Training", id: "rehab-mobility" },
    { name: "Post-Surgical Rehab", id: "rehab-post-surgical" },
    { name: "Geriatric Care", id: "rehab-geriatric" },
    { name: "Pain Management", id: "rehab-pain" },
  ]
}

const allServices: Record<string, { title: string; description: string; icon: React.ElementType; features?: string[]; image: string }> = {
  "allopathy-emergency": {
    title: "Emergency & Trauma",
    description: "Our Emergency and Trauma Department operates 24/7, providing immediate medical response led by a team of senior trauma surgeons and emergency specialists. Equipped with modern resuscitation bays, onsite diagnostic imaging, and advanced life-support ambulances, we ensure rapid intervention during critical golden hours.",
    icon: Ambulance,
    features: ["Level-1 Trauma Protocols", "Triage & Resuscitation Bays", "24/7 On-duty Intensivists", "Cardiac Monitor Systems"],
    image: "https://images.unsplash.com/photo-1583307265269-eb9c0c530635?w=800&q=80"
  },
  "allopathy-icu": {
    title: "ICU & Anaesthesia",
    description: "A highly specialized clinical facility for critically ill patients requiring continuous support and multi-parameter monitoring. Our intensive care units are staffed by dedicated critical care physicians (intensivists) and trained ICU nurses. Modular design ensures high sterilization and infection control protocols.",
    icon: Heart,
    features: ["Advanced Ventilators", "Hemodialysis Machines", "24/7 Intensivist Care", "Infection Control Isolation"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
  },
  "allopathy-general-medicine": {
    title: "General Medicine",
    description: "Provides primary diagnostic, preventative, and medical management services for acute and chronic internal illnesses. Our internal medicine experts focus on multi-system diseases, infectious fever panels, autoimmune conditions, and lifestyle disease consultations.",
    icon: Stethoscope,
    features: ["Chronic Illness Panels", "Hypertension & Diabetes OPD", "Preventative Screenings", "Geriatric Clinical Care"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  },
  "allopathy-general-surgery": {
    title: "General Surgery",
    description: "Offers minimally invasive laparoscopic and traditional open surgical procedures. Our surgeons specialize in gastrointestinal operations, hernia repair, gallbladder extraction, and appendectomies, utilizing advanced instrumentation for faster wound healing.",
    icon: Scissors,
    features: ["Keyhole Laparoscopy", "Hernioplasty & Appendectomy", "State-of-the-art OT", "Post-op Pain Management"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
  },
  "allopathy-gynae": {
    title: "Gynecology & Obstetrics",
    description: "Comprehensive healthcare services for women across all stages of life. From routine gynecological checks and fertility evaluations to high-risk pregnancy monitoring, painless labor, and neonatal care units (NICU).",
    icon: Baby,
    features: ["High-Risk Delivery Suite", "NICU and PICU Facilities", "Laparoscopic Gyne Surgery", "Infertility Management"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80"
  },
  "allopathy-gastro": {
    title: "Gastroenterology",
    description: "Dedicated diagnostics and treatment for esophageal, stomach, liver, and bowel disorders. Our modular endoscopy suite performs colonoscopies, ERCP, and therapeutic procedures for gastrointestinal bleeding.",
    icon: TestTube,
    features: ["Video Endoscopy & Colonoscopy", "Liver Cirrhosis Management", "IBD & GERD Therapies", "ERCP Procedures"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
  },
  "allopathy-vascular": {
    title: "Vascular Surgery",
    description: "Comprehensive medical and surgical solutions for arterial and venous blood vessel diseases. We specialize in varicose vein laser treatments, deep vein thrombosis (DVT) clot extractions, and diabetic foot management.",
    icon: Heart,
    features: ["Laser Varicose Vein Clinic", "Arterial Bypass Surgery", "DVT Compression Therapy", "Diabetic Foot Salvage"],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80"
  },
  "allopathy-ortho": {
    title: "Orthopaedics",
    description: "Orthopaedic trauma management, joint replacements, arthroscopic sports surgeries, and pediatric bone care. We utilize advanced knee and hip replacement implants combined with early mobility protocols.",
    icon: Bone,
    features: ["Hip & Knee Replacement", "Arthroscopic Ligament Repair", "Fracture Recovery Units", "Pediatric Orthopaedics"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  "allopathy-rheumatology": {
    title: "Rheumatology",
    description: "Specialized clinical diagnosis and management of systemic autoimmune disorders and joint conditions. Offering treatment for rheumatoid arthritis, gout, vasculitis, and lupus using biologics therapy.",
    icon: Bone,
    features: ["Autoimmune Diagnostics", "Biological Infusions", "Arthritis Care Clinic", "Joint Fluid Injections"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
  },
  "allopathy-maxillofacial": {
    title: "Maxillofacial Surgery",
    description: "Complex surgeries targeting facial trauma, jaw deformities, oral cancers, salivary gland diseases, and temporomandibular joint (TMJ) dysfunction.",
    icon: Scissors,
    features: ["Facial Reconstruction", "Corrective Jaw Surgery", "TMJ Pain Management", "Oral Cancer Screening"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
  },
  "allopathy-plastic": {
    title: "Plastic & Reconstructive",
    description: "Aesthetic and reconstructive procedures post-burn contractures, congenital anomalies like cleft lip, microvascular surgeries, and cosmetic enhancements performed by certified plastic surgeons.",
    icon: Scissors,
    features: ["Reconstructive Microsurgery", "Cleft Lip Repair", "Burn Scar Revision", "Cosmetic Enhancements"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
  },
  "allopathy-surgical-oncology": {
    title: "Surgical Oncology",
    description: "Surgical resection of solid tumors across breast, gastrointestinal, head, and neck regions, following global oncology guidelines with organ preservation goals.",
    icon: Radiation,
    features: ["Tumor Board Consultations", "Breast Conservation Surgery", "GI Tumor Resections", "Minimally Invasive Onco-Surgery"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
  },
  "allopathy-medical-oncology": {
    title: "Medical Oncology",
    description: "Chemotherapeutic regimens, molecular targeted therapies, and modern immunotherapies administered in a sterilized day-care setting, guided by personalized cancer profiles.",
    icon: Pill,
    features: ["Chemotherapy Daycare", "Targeted Therapy Protocols", "Immunotherapy Access", "Palliative Care Units"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  },
  "allopathy-pulmonology": {
    title: "Pulmonology",
    description: "Clinical evaluation of chronic respiratory disorders, asthma, COPD, and sleep apnea. The department is equipped with digital spirometry, sleep labs, and diagnostic bronchoscopy.",
    icon: Wind,
    features: ["Pulmonary Function Testing", "Polysomnography (Sleep Lab)", "Diagnostic Bronchoscopy", "Allergy Desensitization"],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80"
  },
  "allopathy-neuro": {
    title: "Neurology",
    description: "Offers diagnostic and clinical care for strokes, neurological infections, seizures, neuropathy, and movement disorders like Parkinson's. Features EEG and EMG clinical testing.",
    icon: Brain,
    features: ["Thrombolysis for Stroke", "Epilepsy Management", "EEG / EMG Laboratory", "Parkinson's Clinic"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
  },
  "allopathy-urology": {
    title: "Urology",
    description: "Endourological management of kidney stones, prostate hypertrophy, urinary tract infections, and male infertility utilizing advanced laser stone disintegration.",
    icon: TestTube,
    features: ["Laser Lithotripsy (Stone)", "Prostate Laser Surgery (HoLEP)", "Uroflowmetry Testing", "Reconstructive Urology"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
  },
  "allopathy-nephrology": {
    title: "Nephrology",
    description: "Comprehensive care for kidney diseases and acute renal failure. Our hospital features a 24/7 clean dialysis center offering both hemodialysis and peritoneal dialysis setups.",
    icon: TestTube,
    features: ["24/7 Hemodialysis Unit", "Kidney Biopsy Facility", "CKD Management Programs", "Kidney Transplant Registry"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
  },
  "allopathy-radiology": {
    title: "Radiology",
    description: "Advanced diagnostic imaging center offering high-resolution CT scans, digital X-rays, high-frequency ultrasounds, and MRI scanning, processed by senior radiologists.",
    icon: Radiation,
    features: ["Multislice CT Scanners", "Color Doppler Ultrasound", "Digital Mammography", "Interventional Radiology"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
  },
  "allopathy-pediatrics": {
    title: "Pediatrics",
    description: "Complete pediatric services from immunizations, growth monitoring, developmental screenings, and acute pediatric medical management in a kid-friendly clinic setting.",
    icon: Baby,
    features: ["Developmental Milestones", "Pediatric Vaccination", "Childhood Asthma Clinic", "Pediatric Emergency Box"],
    image: "https://i.pravatar.cc/300?img=68"
  },
  "allopathy-ent": {
    title: "ENT",
    description: "Microscopic ear surgeries, functional endoscopic sinus surgeries (FESS), throat disorder clinics, and comprehensive audiology and speech therapy services.",
    icon: Ear,
    features: ["Micro Ear Surgery", "FESS (Sinus Surgery)", "Audiology & Hearing Aid", "Voice Disorder Therapy"],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80"
  },
  "allopathy-neurosurgery": {
    title: "Neurosurgery",
    description: "Microneurosurgical procedures for brain tumors, intracranial bleeds, hydrocephalus, and spinal cord injuries using neuronavigation instrumentation.",
    icon: Brain,
    features: ["Micro Brain Surgery", "Spinal Cord Tumors", "Trauma Neuro Care", "Shunt Placements"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
  },
  "allopathy-spine": {
    title: "Spine Surgery",
    description: "Advanced solutions for herniated discs, spinal stenosis, spine deformities, and spinal fusion procedures utilizing micro-decompression surgical protocols.",
    icon: Bone,
    features: ["Microdiscectomy", "Spinal Fusion Surgery", "Disc Replacement Clinic", "Spine Decompression"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },

  // Ayurveda Services
  "ayurveda-panchakarma": {
    title: "Panchakarma",
    description: "Authentic, five-fold classical Ayurvedic purification therapy (Vamana, Virechana, Basti, Nasya, Raktamokshana). A custom cleansing pathway designed based on personal Prakriti analysis.",
    icon: Leaf,
    features: ["Dosha Detoxification", "Medicated Oil Enemas", "Herbal Steam Cleansing", "Personalized Prakriti Assessment"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
  },
  "ayurveda-detox": {
    title: "Detoxification Therapies",
    description: "Customized natural cleansing programs including herbal paste scrubs (Udwarthana), localized oil pools (Kati/Janu Basti), and specialized herbal steam applications to remove toxins.",
    icon: Leaf,
    features: ["Herbal Scrubbing (Udwarthana)", "Joint Oil Pooling (Basti)", "Total Body Swedana", "Medicated Herbal Oils"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  },
  "ayurveda-skin": {
    title: "Skin Disease Management",
    description: "Holistic treatment of chronic skin ailments like eczema, psoriasis, acne, and allergies. Focuses on blood purification, liver wellness, and natural anti-inflammatory diets.",
    icon: Syringe,
    features: ["Psoriasis Management", "Blood Purifying Decoctions", "Natural Skin Packs", "Dietary Anti-Inflammatories"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  },
  "ayurveda-infertility": {
    title: "Infertility Treatment",
    description: "Fertility enhancement therapies for couples. Includes specialized cleansing (Uttara Basti), custom herbal tonics (Rasayanas), and stress-relief yoga modules for physiological balance.",
    icon: Baby,
    features: ["Uttara Basti (Uterine Care)", "Rasayana Toning Herbs", "Stress Management Modules", "Sperm/Ovum Enrichment Diet"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80"
  },
  "ayurveda-degenerative": {
    title: "Degenerative Disorders",
    description: "Effective traditional treatments for spondylosis, joint cartilage wear, osteoarthritis, and nerve weakness, promoting healing of connective tissues.",
    icon: Bone,
    features: ["Janu Basti (Knee Care)", "Patra Pinda Sweda", "Spinal Oil Pooling", "Cartilage Nourishing Herbs"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
  },
  "ayurveda-autoimmune": {
    title: "Autoimmune Disorders",
    description: "Ayurvedic clinical approach for managing autoimmune conditions like rheumatoid arthritis and fibromyalgia. Focuses on reducing metabolic toxins (Ama) and immune modulation.",
    icon: Activity,
    features: ["Ama Elimination Protocols", "Immunomodulator Herbs", "Gentle Cleansing Oils", "Anti-Rheumatic Diet"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
  },
  "ayurveda-lifestyle": {
    title: "Lifestyle Disease Management",
    description: "Reversal and clinical control of diabetes, fatty liver, obesity, and hyperlipidemia using specialized diets, Prakriti exercises, and daily regimen audits.",
    icon: Heart,
    features: ["Diabetes Control Protocols", "Metabolism Boosting Herbs", "Fat Loss Dry Massages", "Prakriti Wellness Audit"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  },
  "ayurveda-preventive": {
    title: "Preventive Wellness",
    description: "Customized health preservation protocols based on seasonal regimes (Ritucharya) and daily routines (Dinacharya) to boost immune defense mechanisms.",
    icon: Leaf,
    features: ["Seasonal Cleansing Guides", "Daily Regimen Training", "Immune Defense Herbs", "Preventative Wellness Audits"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  },
  "ayurveda-rejuvenation": {
    title: "Rejuvenation Therapies",
    description: "Anti-aging and strength-promoting therapies using Kayakalpa protocols and premium herbal mixtures to enhance mental acuity, stamina, and longevity.",
    icon: Leaf,
    features: ["Kayakalpa Anti-Aging", "Memory-Boosting Tonics", "Vitality Enhancing Massages", "Longevity Consultations"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
  },

  // Rehabilitation Services
  "rehab-physio": {
    title: "Physiotherapy",
    description: "Specialized clinical rehabilitation targeting musculoskeletal pain, sports injuries, and post-operative stiffness, using modern manual manipulation and physical modalities.",
    icon: Activity,
    features: ["Manual Joint Mobilization", "Therapeutic Ultrasound & TENS", "Post-Op Joint Stiffness Exercises", "Kinesiology Taping Clinics"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  "rehab-neuro": {
    title: "Neurorehabilitation",
    description: "Comprehensive recovery programs for patients recovering from strokes, spinal cord injuries, or living with progressive neurological conditions like Parkinson's.",
    icon: Brain,
    features: ["Neurological Gait Training", "Speech & Swallow Therapy", "Cognitive Restoration Exercises", "Balance & Coordination Devices"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
  },
  "rehab-ortho": {
    title: "Orthopaedic Rehabilitation",
    description: "Structured recovery routines post-knee replacement, hip replacement, fractures, and spinal surgeries to restore joint mobility and muscular endurance.",
    icon: Bone,
    features: ["Post-replacement Mobilization", "Muscular Endurance Training", "Spine Flexion Exercises", "Functional Restorations"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  "rehab-stroke": {
    title: "Stroke Recovery",
    description: "A specialized multidisciplinary physical therapy, occupational therapy, and speech therapy clinic focused on helping stroke survivors regain functional autonomy.",
    icon: Brain,
    features: ["Motor Learning Protocols", "Activities of Daily Living (ADL)", "Speech Re-education", "Spasticity Management Clinic"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
  },
  "rehab-sports": {
    title: "Sports Injury Recovery",
    description: "Athletic rehab targeting ligament tears (ACL/MCL), rotator cuff tears, sprains, and muscle pulls to help athletes return to play safely.",
    icon: Activity,
    features: ["Sport-Specific Drills", "Ligament Graft Rehabilitation", "Core Core-stability Training", "Athletic Taping Clinics"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  "rehab-mobility": {
    title: "Mobility Training",
    description: "Instruction in correct transfer mechanisms, wheelchair operations, and training with assistive technology like walkers and braces to enhance independence.",
    icon: Activity,
    features: ["Wheelchair Navigation Skills", "Transfer Safety Training", "Walker & Crutch Mechanics", "Ortho Prosthetic Fitting"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  "rehab-post-surgical": {
    title: "Post-Surgical Rehab",
    description: "Phase-based exercise protocols for patients following major abdominal, thoracic, cardiac, or complex orthopaedic surgical procedures.",
    icon: Activity,
    features: ["Cardiac Conditioning Cycles", "Chest Physiotherapy (Spirometry)", "Early Mobility Ambulation", "Scar Tissue Management"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  "rehab-geriatric": {
    title: "Geriatric Care",
    description: "Dedicated protocols designed for elderly individuals to reduce fall risks, enhance structural balance, maintain joint flexibilities, and boost muscle tone.",
    icon: Heart,
    features: ["Fall Prevention Screenings", "Vestibular Balance Exercises", "Joint Range Optimization", "Elderly Endurance Drills"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  },
  "rehab-pain": {
    title: "Pain Management",
    description: "Drug-free, clinically proven methods for relieving chronic spinal, joint, nerve, and head pain via advanced physical therapies.",
    icon: Activity,
    features: ["TENS/Interferential Therapy", "Dry Needling Clinics", "Myofascial Trigger Release", "Posture Corrective Exercises"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
}

export function ServicesSection({ activeService }: ServicesSectionProps) {
  const isOverview = activeService === "overview" || activeService === "services"
  
  let categoryKey: "allopathy" | "ayurveda" | "rehabilitation" = "allopathy"
  if (activeService.startsWith("ayurveda-")) categoryKey = "ayurveda"
  else if (activeService.startsWith("rehab-")) categoryKey = "rehabilitation"
  
  const service = allServices[activeService]

  const handleSidebarClick = (id: string) => {
    window.location.hash = id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isOverview) {
    return (
      <div>
        {/* Hero */}
        <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-100"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Services
              </span>
              <h1 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight">Our Services</h1>
              <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
                Empowering wellness by combining the diagnostic precision of Allopathy, the natural healing of Ayurveda, and the restorative strength of Rehabilitation.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {serviceCategories.map((category) => (
                <Card key={category.id} className="premium-card text-center border-t-4 border-t-primary/80">
                  <CardContent className="p-8 space-y-4">
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2", category.bgColor)}>
                      <category.icon className={cn("h-8 w-8", category.color)} aria-hidden="true" />
                    </div>
                    <h2 className={cn("text-2xl font-sans font-bold", category.color)}>{category.name}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comprehensive Sub-Services Grids */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {/* Allopathy */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-sans font-bold text-primary mb-6 flex items-center gap-3 pb-3 border-b">
                  <Stethoscope className="h-6 w-6 text-primary" aria-hidden="true" />
                  Allopathy Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Object.entries(allServices)
                    .filter(([key]) => key.startsWith("allopathy-"))
                    .map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => handleSidebarClick(key)}
                        className="bg-background hover:bg-primary/5 border border-border rounded-xl p-4 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 group touch-target"
                      >
                        <value.icon className="h-6 w-6 text-primary/70 group-hover:text-primary mx-auto mb-2.5 transition-colors" aria-hidden="true" />
                        <p className="text-xs font-bold text-foreground leading-tight">{value.title}</p>
                      </button>
                    ))}
                </div>
              </div>

              {/* Ayurveda */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-sans font-bold text-accent mb-6 flex items-center gap-3 pb-3 border-b">
                  <Leaf className="h-6 w-6 text-accent" aria-hidden="true" />
                  Ayurveda Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {Object.entries(allServices)
                    .filter(([key]) => key.startsWith("ayurveda-"))
                    .map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => handleSidebarClick(key)}
                        className="bg-background hover:bg-accent/5 border border-border rounded-xl p-4 text-center transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 group touch-target"
                      >
                        <value.icon className="h-6 w-6 text-accent/70 group-hover:text-accent mx-auto mb-2.5 transition-colors" aria-hidden="true" />
                        <p className="text-xs font-bold text-foreground leading-tight">{value.title}</p>
                      </button>
                    ))}
                </div>
              </div>

              {/* Rehabilitation */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-sans font-bold text-success mb-6 flex items-center gap-3 pb-3 border-b">
                  <Activity className="h-6 w-6 text-success" aria-hidden="true" />
                  Rehabilitation Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {Object.entries(allServices)
                    .filter(([key]) => key.startsWith("rehab-"))
                    .map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => handleSidebarClick(key)}
                        className="bg-background hover:bg-success/5 border border-border rounded-xl p-4 text-center transition-all duration-300 hover:border-success/40 hover:-translate-y-0.5 group touch-target"
                      >
                        <value.icon className="h-6 w-6 text-success/70 group-hover:text-success mx-auto mb-2.5 transition-colors" aria-hidden="true" />
                        <p className="text-xs font-bold text-foreground leading-tight">{value.title}</p>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Individual Service Detail Page
  if (service) {
    const category = activeService.startsWith("allopathy-") 
      ? serviceCategories[0] 
      : activeService.startsWith("ayurveda-") 
        ? serviceCategories[1] 
        : serviceCategories[2]

    const siblings = categorySiblings[categoryKey] || []

    return (
      <div>
        {/* Dynamic Detail Hero Banner */}
        <section className="py-16 relative overflow-hidden bg-slate-900 border-b border-border/80">
          <div className="absolute inset-0 bg-medical-pattern opacity-5" aria-hidden="true" />
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6" aria-label="Breadcrumb">
              <button onClick={() => handleSidebarClick("services")} className="hover:text-white transition-colors touch-target">Services</button>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
              <span className="font-bold text-slate-300">{category.name}</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
              <span className="text-white font-bold">{service.title}</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg bg-white/10 text-white">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-sans font-extrabold text-white">{service.title}</h1>
                  <p className={cn("text-sm font-bold tracking-wider uppercase mt-1", 
                    category.id === "allopathy" ? "text-primary" : category.id === "ayurveda" ? "text-accent" : "text-success"
                  )}>
                    {category.name} Department
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href="tel:+919XXXXXXXXX"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-md touch-target"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Helpline
                </a>
                <a 
                  href="https://wa.me/919XXXXXXXXX?text=Hi, I want to book a consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-success hover:bg-success/90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-md touch-target"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Book
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout: Sidebar + Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-10">
              
              {/* Sibling Services Navigation Sidebar */}
              <aside className="lg:w-72 flex-shrink-0 space-y-6">
                <Card className="border border-border/80 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 text-white font-sans font-bold text-base bg-slate-900 flex items-center gap-2">
                    <category.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    {category.name} Services
                  </div>
                  <CardContent className="p-3">
                    <nav className="space-y-1 max-h-[450px] overflow-y-auto pr-1" aria-label={`${category.name} services`}>
                      {siblings.map((sib) => {
                        const isCurrent = sib.id === activeService
                        return (
                          <button
                            key={sib.id}
                            onClick={() => handleSidebarClick(sib.id)}
                            className={cn(
                              "w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center justify-between group touch-target",
                              isCurrent 
                                ? "bg-primary/5 text-primary border-l-4 border-l-primary" 
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            <span>{sib.name}</span>
                            <ChevronRight className={cn(
                              "h-4 w-4 transition-transform", 
                              isCurrent ? "text-primary translate-x-0.5" : "text-muted-foreground/40 group-hover:translate-x-0.5"
                            )} aria-hidden="true" />
                          </button>
                        )
                      })}
                    </nav>
                  </CardContent>
                </Card>

                {/* FAQ Help card */}
                <Card className="bg-gradient-to-tr from-primary/5 to-accent/5 border border-primary/10 p-6 rounded-xl space-y-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h4 className="font-sans font-bold text-sm text-foreground">Need Consultation?</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our medical board helps coordinate treatment plans across Allopathy, Ayurveda, and Rehabilitation.
                  </p>
                  <button 
                    onClick={() => handleSidebarClick("contact")}
                    className="text-xs font-bold text-accent hover:text-primary transition-colors flex items-center gap-1 touch-target"
                  >
                    Contact Clinical Desk
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </button>
                </Card>
              </aside>

              {/* Main Content Area */}
              <div className="flex-1 space-y-10">
                {/* Visual Image Banner & Detail Description */}
                <div className="space-y-6">
                  <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border shadow-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-sans font-bold text-foreground">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Key Features/Points bullet grid */}
                {service.features && (
                  <div className="space-y-5 bg-background p-6 rounded-2xl border border-border">
                    <h3 className="text-lg font-sans font-bold text-foreground">Department Key Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-sm font-semibold text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Consultation Booking CTA Card */}
                <Card className="border border-border/80 shadow-md rounded-2xl bg-card overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent p-1" aria-hidden="true" />
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-sans font-bold text-foreground">Schedule a Consultation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Consult with our experienced physicians and specialists today. We provide transparent advice and coordinated clinical timelines.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <a 
                        href="tel:+919XXXXXXXXX"
                        className="bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call Medical Desk
                      </a>
                      <a 
                        href="https://wa.me/919XXXXXXXXX?text=Hi,%20I%20want%20to%20schedule%20an%20appointment%20for%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent/95 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2 shadow-md touch-target"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Inquire via WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }

  return null
}
