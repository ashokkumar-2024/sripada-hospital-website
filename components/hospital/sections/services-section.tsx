"use client"

import { useState } from "react"
import {
  Stethoscope, Leaf, Activity, Heart, Brain, Bone, Baby, Syringe,
  Wind, Ear, Scissors, Radiation, TestTube2, Pill, Ambulance,
  CheckCircle, ChevronRight, Phone, MessageCircle,
  Zap, Clock, Shield, MapPin, Mail, Calendar,
  Facebook, Instagram, Youtube, FlaskConical, PersonStanding,
  Eye, ClipboardList, Flame, HelpCircle, Gem, UserCheck,
  Microscope, Building2, HeartPulse
} from "lucide-react"
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
    accent: "from-[#0b1f4a] to-[#1a3a7c]",
    iconColor: "text-[#0b1f4a]",
    iconBg: "bg-blue-50",
    border: "border-[#0b1f4a]/20",
    tag: "bg-blue-50 text-[#0b1f4a] border-blue-100",
    description: "Evidence-based modern medicine across 22+ specialties with 24/7 emergency, ICU support, and advanced surgical care."
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    icon: Leaf,
    accent: "from-[#0d9488] to-[#0b7c72]",
    iconColor: "text-[#0d9488]",
    iconBg: "bg-teal-50",
    border: "border-[#0d9488]/20",
    tag: "bg-teal-50 text-[#0d9488] border-teal-100",
    description: "Traditional healing principles with personalized Panchakarma therapies, detox, rejuvenation, and lifestyle programs."
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    icon: Activity,
    accent: "from-[#7c3aed] to-[#6d28d9]",
    iconColor: "text-[#7c3aed]",
    iconBg: "bg-violet-50",
    border: "border-[#7c3aed]/20",
    tag: "bg-violet-50 text-[#7c3aed] border-violet-100",
    description: "Physiotherapy, neuro rehab, stroke recovery, mobility training, and post-surgical programs for complete recovery."
  },
]

const allopathyServices = [
  { name: "Emergency & Trauma Care", id: "allopathy-emergency" },
  { name: "ICU & Intensive Care", id: "allopathy-icu" },
  { name: "General Medicine", id: "allopathy-general-medicine" },
  { name: "General Surgery", id: "allopathy-general-surgery" },
  { name: "Obstetrics & Gynecology", id: "allopathy-gynae" },
  { name: "Gastroenterology", id: "allopathy-gastro" },
  { name: "Vascular Surgery", id: "allopathy-vascular" },
  { name: "Orthopedic Surgery", id: "allopathy-ortho" },
  { name: "Plastic & Reconstructive Surgery", id: "allopathy-plastic" },
  { name: "Surgical Oncology", id: "allopathy-surgical-oncology" },
  { name: "Pulmonology", id: "allopathy-pulmonology" },
  { name: "Neurology", id: "allopathy-neuro" },
  { name: "Urology", id: "allopathy-urology" },
  { name: "Nephrology", id: "allopathy-nephrology" },
  { name: "Radiology", id: "allopathy-radiology" },
  { name: "Pediatrics", id: "allopathy-pediatrics" },
  { name: "ENT", id: "allopathy-ent" },
  { name: "Neuro Surgery", id: "allopathy-neurosurgery" },
  { name: "Spine Surgery", id: "allopathy-spine" },
  { name: "Anaesthesia", id: "allopathy-anaesthesia" },
  { name: "Preventive Healthcare", id: "allopathy-preventive" },
  { name: "Internal Medicine", id: "allopathy-internal-medicine" },
  { name: "Laparoscopic Surgery", id: "allopathy-laparoscopic" },
  { name: "GI & Hepatobiliary Surgery", id: "allopathy-gi-hepatobiliary" },
  { name: "Gastro Surgery", id: "allopathy-gastro-surgery" },
  { name: "Liver & Hepatobiliary Care", id: "allopathy-liver-care" },
  { name: "Spine Care", id: "allopathy-spine-care" },
  { name: "Cardiology", id: "allopathy-cardiology" },
  { name: "Laboratory Services", id: "allopathy-lab" },
]

const ayurvedaServices = [
  { name: "Panchakarma", id: "ayurveda-panchakarma" },
  { name: "Detoxification Therapies", id: "ayurveda-detox" },
  { name: "Preventive Wellness", id: "ayurveda-preventive" },
  { name: "Rejuvenation Therapies", id: "ayurveda-rejuvenation" },
  { name: "Stress Management", id: "ayurveda-stress" },
  { name: "Pain Relief Therapies", id: "ayurveda-pain" },
  { name: "Spine & Joint Wellness", id: "ayurveda-spine-joint" },
  { name: "Lifestyle Disease Management", id: "ayurveda-lifestyle" },
  { name: "Ayurvedic Consultation", id: "ayurveda-consultation" },
  { name: "Infertility Treatment", id: "ayurveda-infertility" },
  { name: "Skin Disease Care", id: "ayurveda-skin" },
  { name: "Degenerative Disorders", id: "ayurveda-degenerative" },
  { name: "Autoimmune Disorders", id: "ayurveda-autoimmune" },
]

const rehabServices = [
  { name: "Physiotherapy", id: "rehab-physio" },
  { name: "Neuro Rehabilitation", id: "rehab-neuro" },
  { name: "Orthopedic Rehabilitation", id: "rehab-ortho" },
  { name: "Stroke Recovery", id: "rehab-stroke" },
  { name: "Sports Injury Recovery", id: "rehab-sports" },
  { name: "Mobility Training", id: "rehab-mobility" },
  { name: "Post-Surgical Rehabilitation", id: "rehab-post-surgical" },
  { name: "Elderly Rehabilitation", id: "rehab-geriatric" },
  { name: "Pain Management Programs", id: "rehab-pain" },
]

const categorySiblings: Record<string, { name: string; id: string }[]> = {
  allopathy: allopathyServices,
  ayurveda: ayurvedaServices,
  rehabilitation: rehabServices,
}

const allServices: Record<string, { title: string; description: string | string[]; icon: React.ElementType; features?: string[]; image: string }> = {
  "allopathy-emergency": { title: "Emergency & Trauma Care", description: "Prompt medical attention for accidents, injuries, and emergency health conditions, supported by trained healthcare professionals and emergency response systems.", icon: Ambulance, features: ["24/7 Emergency Response", "Trauma Bay Resuscitation", "ACLS Ambulance Support", "Golden Hour Protocols"], image: "https://images.unsplash.com/photo-1583307265269-eb9c0c530635?w=800&q=80" },
  "allopathy-icu": { title: "ICU & Intensive Care", description: "Dedicated intensive care services for critically ill patients requiring continuous monitoring, advanced medical support, and specialized treatment.", icon: Heart, features: ["Advanced Ventilators", "Hemodialysis Machines", "24/7 Intensivist Care", "Infection Control Isolation"], image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
  "allopathy-general-medicine": { title: "General Medicine", description: "Comprehensive medical care for the diagnosis, treatment, and management of acute and chronic health conditions.", icon: Stethoscope, features: ["Chronic Illness Panels", "Hypertension & Diabetes OPD", "Preventative Screenings", "Geriatric Clinical Care"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "allopathy-general-surgery": { title: "General Surgery", description: "Surgical treatment for a variety of conditions involving the abdomen, digestive system, soft tissues, and more.", icon: Scissors, features: ["Keyhole Laparoscopy", "Hernioplasty & Appendectomy", "State-of-the-art OT", "Post-op Pain Management"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-gynae": { title: "Obstetrics & Gynecology", description: "Comprehensive care for women's health, including pregnancy, childbirth, reproductive health, and gynecological conditions.", icon: Baby, features: ["High-Risk Delivery Suite", "NICU and PICU Facilities", "Laparoscopic Gyne Surgery", "Infertility Management"], image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" },
  "allopathy-vascular": { title: "Vascular Surgery", description: "Diagnosis and surgical treatment of diseases affecting blood vessels including arteries, veins, and the lymphatic system.", icon: HeartPulse, features: ["Varicose Vein Treatment", "Arterial Bypass Surgery", "Aneurysm Repair", "Peripheral Artery Disease Care"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-gastro": { title: "Gastroenterology", description: "Diagnosis and treatment of disorders affecting the digestive system, including the stomach, intestines, liver, and pancreas.", icon: TestTube2, features: ["Video Endoscopy & Colonoscopy", "Liver Cirrhosis Management", "IBD & GERD Therapies", "ERCP Procedures"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  "allopathy-ortho": { title: "Orthopedic Surgery", description: "Diagnosis and surgical treatment of bone, joint, muscle, ligament, and sports-related injuries.", icon: Bone, features: ["Hip & Knee Replacement", "Arthroscopic Ligament Repair", "Fracture Recovery Units", "Pediatric Orthopaedics"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "allopathy-plastic": { title: "Plastic & Reconstructive Surgery", description: "Procedures aimed at restoring appearance and function following injury, illness, congenital conditions, or surgery.", icon: Scissors, features: ["Reconstructive Microsurgery", "Cleft Lip Repair", "Burn Scar Revision", "Cosmetic Enhancements"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-surgical-oncology": { title: "Surgical Oncology", description: "Surgical management of cancer, focused on diagnosis, treatment, and improving patient outcomes.", icon: Radiation, features: ["Tumor Board Consultations", "Breast Conservation Surgery", "GI Tumor Resections", "Minimally Invasive Onco-Surgery"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  "allopathy-pulmonology": { title: "Pulmonology", description: "Specialized care for respiratory disorders affecting the lungs and breathing function.", icon: Wind, features: ["Pulmonary Function Testing", "Polysomnography (Sleep Lab)", "Diagnostic Bronchoscopy", "Allergy Desensitization"], image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80" },
  "allopathy-neuro": { title: "Neurology", description: "Medical management of disorders affecting the brain, spinal cord, nerves, and muscles.", icon: Brain, features: ["Thrombolysis for Stroke", "Epilepsy Management", "EEG / EMG Laboratory", "Parkinson's Clinic"], image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
  "allopathy-urology": { title: "Urology", description: "Diagnosis and treatment of conditions affecting the urinary tract and male reproductive system.", icon: TestTube2, features: ["Laser Lithotripsy (Stone)", "Prostate Laser Surgery (HoLEP)", "Uroflowmetry Testing", "Reconstructive Urology"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  "allopathy-nephrology": { title: "Nephrology", description: "Expert care for kidney-related disorders, including chronic kidney disease and other renal conditions.", icon: TestTube2, features: ["24/7 Hemodialysis Unit", "Kidney Biopsy Facility", "CKD Management Programs", "Kidney Transplant Registry"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  "allopathy-radiology": { title: "Radiology", description: "Advanced imaging services that assist in accurate diagnosis, treatment planning, and ongoing patient care.", icon: Radiation, features: ["Multislice CT Scanners", "Color Doppler Ultrasound", "Digital Mammography", "Interventional Radiology"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  "allopathy-pediatrics": { title: "Pediatrics", description: "Medical care focused on the health, growth, and development of infants, children, and adolescents.", icon: Baby, features: ["Developmental Milestones", "Pediatric Vaccination", "Childhood Asthma Clinic", "Pediatric Emergency Box"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  "allopathy-ent": { title: "ENT", description: "Evaluation and treatment of conditions affecting the ear, nose, throat, head, and neck region.", icon: Ear, features: ["Micro Ear Surgery", "FESS (Sinus Surgery)", "Audiology & Hearing Aid", "Voice Disorder Therapy"], image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80" },
  "allopathy-neurosurgery": { title: "Neuro Surgery", description: "Advanced surgical care for conditions affecting the brain, spine, and nervous system.", icon: Brain, features: ["Micro Brain Surgery", "Spinal Cord Tumors", "Trauma Neuro Care", "Shunt Placements"], image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
  "allopathy-spine": { title: "Spine Surgery", description: "Specialized surgical treatments for spinal disorders, injuries, and conditions affecting mobility and quality of life.", icon: Bone, features: ["Microdiscectomy", "Spinal Fusion Surgery", "Disc Replacement Clinic", "Spine Decompression"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "allopathy-anaesthesia": { title: "Anaesthesia", description: "Safe and effective anaesthesia services for surgical and medical procedures, managed by qualified anaesthesiology specialists.", icon: Syringe, features: ["General Anaesthesia", "Regional Anaesthesia", "Sedation Services", "Pain Control Protocols"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-preventive": { title: "Preventive Healthcare", description: "Health screenings, risk assessments, and preventive care services aimed at identifying and addressing potential health concerns early.", icon: Shield, features: ["Annual Health Checkups", "Vaccination Programs", "Lifestyle Risk Assessments", "Corporate Health Camps"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "allopathy-internal-medicine": { title: "Internal Medicine", description: "Specialized care focused on adult health, including the prevention, diagnosis, and treatment of complex medical conditions.", icon: Stethoscope, features: ["Adult Health Management", "Complex Diagnosis", "Multi-System Disorders", "Geriatric Internal Medicine"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "allopathy-laparoscopic": { title: "Laparoscopic Surgery", description: "Minimally invasive surgical procedures designed to reduce recovery time, discomfort, and hospital stay.", icon: Scissors, features: ["Keyhole Procedures", "Laparoscopic Cholecystectomy", "Hernia Repair", "Diagnostic Laparoscopy"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-gi-hepatobiliary": { title: "GI & Hepatobiliary Surgery", description: "Specialized surgical care for disorders affecting the gastrointestinal tract, liver, gallbladder, and biliary system.", icon: Scissors, features: ["Liver Resection", "Biliary Reconstruction", "Pancreatic Surgery", "GI Cancer Surgery"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-gastro-surgery": { title: "Gastro Surgery", description: "Specialized surgical interventions for gastrointestinal conditions requiring operative care.", icon: Scissors, features: ["Upper GI Surgery", "Colorectal Surgery", "Minimal Access Surgery", "Emergency GI Procedures"], image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
  "allopathy-liver-care": { title: "Liver & Hepatobiliary Care", description: "Evaluation and treatment of liver diseases and conditions affecting the gallbladder and biliary tract.", icon: HeartPulse, features: ["Liver Function Testing", "Hepatitis Management", "Cirrhosis Care", "Biliary Disease Treatment"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
  "allopathy-spine-care": { title: "Spine Care", description: "Comprehensive evaluation and treatment of spinal conditions affecting movement, posture, and daily activities.", icon: Bone, features: ["Non-Surgical Spine Care", "Spinal Injections", "Posture Correction", "Rehabilitation Programs"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "allopathy-cardiology": { title: "Cardiology", description: "Diagnosis, treatment, and management of heart-related conditions with a focus on cardiovascular health.", icon: Heart, features: ["ECG & Echo Services", "Cardiac Catheterization", "Heart Failure Management", "Preventive Cardiology"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "allopathy-lab": { title: "Laboratory Services", description: "Reliable diagnostic testing and pathology services that support informed medical decision-making and effective treatment planning.", icon: TestTube2, features: ["Clinical Pathology", "Biochemistry", "Microbiology", "Histopathology"], image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80" },
  "ayurveda-infertility": { title: "Infertility Treatment", description: [
    "Ayurveda offers a holistic approach to infertility by focusing on the overall health and reproductive well-being of both partners. Treatment is individualized based on the underlying factors and may include Ayurvedic medicines, dietary guidance, lifestyle modifications, stress management, and selected Panchakarma therapies.",
    "The approach aims to support healthy digestion and metabolism, balance the doshas, improve reproductive health, and promote overall well-being. At our hospital, infertility care is planned after a detailed assessment of both partners and may be integrated with appropriate modern medical evaluation and treatment when required.",
    "Our goal is to provide personalized, compassionate, and evidence-informed Ayurvedic care to support couples on their journey towards parenthood.",
  ], icon: Leaf, features: ["Hormonal Balance Therapies", "Uttar Basti Treatment", "Herbal Formulations", "Lifestyle & Diet Guidance"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-skin": { title: "Skin Disease Care", description: [
    "Skin Disease or Charma roga is one of the most chronic illness which affects majority of people both physically and mentally and doesn't go away with only external applications.",
    "At the Ayurveda division of our hospital, our Skin specialist Vaidyas have treated and cured all kinds of Skin diseases including PSORIASIS, ECZEMA, URTICARIA, VITILIGO and all other types of Skin affecting diseases by addressing the underlying imbalances in the body, along with the symptoms of the skin condition. Our Ayurvedic treatment programs are personalized based on the individual's constitution, lifestyle, diet, and nature of the condition.",
  ], icon: Leaf, features: ["Raktamokshana Therapy", "Herbal Lepam Applications", "Panchakarma Detox", "Dietary & Lifestyle Plans"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "ayurveda-degenerative": { title: "Degenerative Disorders", description: [
    "Ayurveda helps in managing degenerative disorders by focusing on maintaining strength, supporting healthy ageing, improving functional capacity, and promoting overall well-being.",
    "Ayurvedic care in degenerative disorders include medicines, therapeutic procedures, Panchakarma, dietary modifications, exercise, yoga, and lifestyle guidance. The aim is to support healthy tissues and body functions, improve mobility and vitality, and help individuals maintain a better quality of life.",
    "At our hospital, we provide personalized Ayurvedic care designed to support long-term health, functional well-being, and healthy ageing.",
  ], icon: Leaf, features: ["Kizhi & Pizhichil Therapies", "Nourishing Herbal Oils", "Vata Pacifying Treatments", "Neuro-Regenerative Herbs"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "ayurveda-autoimmune": { title: "Autoimmune Disorders", description: [
    "Ayurveda approaches autoimmune disorders through a holistic understanding of health, with special emphasis on improving digestion, metabolism, and eliminating accumulated toxins, known as Ama, which are considered to play an important role in the development of many chronic illnesses. The treatment aims to restore balance within the body, support healthy immune function, and promote overall well-being.",
    "Detoxification procedures are selected based on the patient's condition and are intended to help remove metabolic waste, support tissue health, and improve bodily functions.",
    "At our hospital, we provide personalized and integrative Ayurvedic care for autoimmune disorders, focusing on detoxification, strengthening the body's natural healing processes through Lifestyle modifications, Yoga and stress management practices and enhancing quality of life.",
    "Note: Autoimmune disorders are complex conditions that require proper medical evaluation and ongoing care. Ayurvedic treatment is best undertaken under the guidance of qualified healthcare professionals.",
  ], icon: Leaf, features: ["Immune Modulation Herbs", "Virechana Detox", "Anti-inflammatory Diet", "Rasayana Rejuvenation"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-panchakarma": { title: "Panchakarma", description: [
    "Panchakarma is one of the premium classical treatment procedure practised in Ayurveda.",
    "It is a combination of 5 types of treatments viz VAMANA, VIRECHANA, ANUVASANA BASTI, AASTHAPANA BASTI AND NASYA which are designed to support the body's natural processes of elimination, restoration, and balance of Doshas in our body.",
    "At SRIPADA MULTI-SPECIALITY HOSPITAL, we customise and design the procedure according to each and every person and their body constitution under the supervision of well experienced Vaidyas at our hospital.",
  ], icon: Leaf, features: ["Dosha Detoxification", "Medicated Oil Enemas", "Herbal Steam Cleansing", "Personalized Prakriti Assessment"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "ayurveda-detox": { title: "Detoxification Therapies", description: [
    "With its literal meaning, DETOXIFICATION is a unique treatment done at SRIPADA MULTI-SPECIALITY HOSPITAL, focussing on supporting the body's natural processes of elimination and restoring balance among the Doshas, Agni (digestive and metabolic function), and Dhatus (body tissues). At our hospital, detoxification programs are individualized according to each person's constitution, health condition, and treatment needs.",
    "At our hospital, we make it easily accessible for you to undergo the procedure in both In patient as well as Outpatient facility at your convenience and decided by your Vaidya.",
  ], icon: Leaf, features: ["Herbal Scrubbing (Udwarthana)", "Joint Oil Pooling (Basti)", "Total Body Swedana", "Medicated Herbal Oils"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-stress": { title: "Stress Management", description: "Ayurvedic stress management therapies help promote relaxation and mental well-being through personalized treatments and lifestyle recommendations.", icon: Heart, features: ["Shirodhara Therapy", "Meditation Guidance", "Herbal Calming Teas", "Lifestyle Recommendations"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-pain": { title: "Pain Relief Therapies", description: "These therapies focus on relieving discomfort caused by musculoskeletal conditions, chronic pain, and lifestyle-related issues with customized treatment plans.", icon: Flame, features: ["Herbal Poultices", "Oil Pooling Therapies", "Steam Therapy", "Anti-Inflammatory Diet"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "ayurveda-spine-joint": { title: "Spine & Joint Wellness", description: "Designed to support mobility and joint health, these therapies help manage stiffness, discomfort, and movement-related concerns while promoting flexibility.", icon: Bone, features: ["Kati Basti (Back Care)", "Janu Basti (Knee Care)", "Herbal Oil Massages", "Joint Mobility Exercises"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "ayurveda-lifestyle": { title: "Lifestyle Disease Management", description: [
    "Ayurveda emphasizes a balanced lifestyle as the foundation of good health and disease prevention. Lifestyle management focuses on maintaining harmony between the body, mind, diet, daily routines, sleep, activity, and seasonal changes according to an individual's unique constitution (Prakriti).",
    "At our hospital, Ayurvedic lifestyle management provides personalized guidance on Ahara (diet), Vihara (daily activities), Dinacharya (daily routine), Ritucharya (seasonal regimen), sleep, exercise, stress management, and healthy habits.",
  ], icon: Heart, features: ["Diabetes Control Protocols", "Metabolism Boosting Herbs", "Fat Loss Dry Massages", "Prakriti Wellness Audit"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "ayurveda-preventive": { title: "Preventive Wellness", description: "Ayurveda emphasizes on Swasthasya Swasthya Rakshanam meaning, protecting the Health of Healthy person. Our Preventive Wellness approach focuses on maintaining balance in the body and mind through personalized diet, daily routines, seasonal care, yoga, and appropriate Ayurvedic therapies. By identifying and addressing early imbalances, Ayurveda aims to support natural immunity, healthy digestion, restful sleep, mental well-being, and overall vitality—helping individuals stay healthy and enjoy a better quality of life.", icon: Leaf, features: ["Seasonal Cleansing Guides", "Daily Regimen Training", "Immune Defense Herbs", "Preventative Wellness Audits"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-consultation": { title: "Ayurvedic Consultation", description: "Our Ayurvedic consultations provide individualized assessments to understand a person's health profile, concerns, and wellness goals for suitable treatment plans.", icon: Stethoscope, features: ["Prakriti Analysis", "Dosha Assessment", "Personalized Diet Plans", "Treatment Recommendations"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  "ayurveda-rejuvenation": { title: "Rejuvenation Therapies", description: "Ayurvedic Rejuvenation, or Rasayana therapy, is a holistic approach aimed at restoring vitality, supporting healthy ageing, and promoting overall well-being. Our rejuvenation programs are personalized to strengthen the body, nourish tissues, support digestion and immunity, and enhance physical and mental resilience. Through carefully selected Ayurvedic therapies, nutrition, lifestyle practices, and Rasayana medicines, the goal is to help individuals regain energy, maintain wellness, and support a healthier, more balanced life.", icon: Leaf, features: ["Kayakalpa Anti-Aging", "Memory-Boosting Tonics", "Vitality Enhancing Massages", "Longevity Consultations"], image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
  "rehab-physio": { title: "Physiotherapy", description: "Physiotherapy services help improve movement, reduce pain, and restore physical function through guided exercises, manual therapy, and personalized treatment plans.", icon: Activity, features: ["Manual Joint Mobilization", "Therapeutic Ultrasound & TENS", "Post-Op Joint Stiffness Exercises", "Kinesiology Taping Clinics"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
  "rehab-neuro": { title: "Neuro Rehabilitation", description: "Designed for individuals recovering from neurological conditions, neuro rehabilitation focuses on improving mobility, coordination, balance, and daily functional abilities.", icon: Brain, features: ["Neurological Gait Training", "Speech & Swallow Therapy", "Cognitive Restoration Exercises", "Balance & Coordination Devices"], image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
  "rehab-ortho": { title: "Orthopedic Rehabilitation", description: "Orthopedic rehabilitation supports recovery from bone, joint, muscle, and ligament injuries, helping patients regain strength and movement safely.", icon: Bone, features: ["Post-replacement Mobilization", "Muscular Endurance Training", "Spine Flexion Exercises", "Functional Restorations"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "rehab-stroke": { title: "Stroke Recovery", description: "Our stroke rehabilitation programs help patients improve mobility, communication, balance, and daily living skills through structured therapy and ongoing support.", icon: Brain, features: ["Motor Learning Protocols", "Activities of Daily Living (ADL)", "Speech Re-education", "Spasticity Management Clinic"], image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
  "rehab-sports": { title: "Sports Injury Recovery", description: "Focused rehabilitation programs designed to help athletes and active individuals recover from sports-related injuries and safely return to their activities.", icon: Activity, features: ["Sport-Specific Drills", "Ligament Graft Rehabilitation", "Core Stability Training", "Athletic Taping Clinics"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "rehab-mobility": { title: "Mobility Training", description: "Mobility training helps individuals improve movement, balance, coordination, and confidence in performing everyday activities.", icon: Activity, features: ["Wheelchair Navigation Skills", "Transfer Safety Training", "Walker & Crutch Mechanics", "Ortho Prosthetic Fitting"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  "rehab-post-surgical": { title: "Post-Surgical Rehabilitation", description: "These programs support recovery after surgery by improving physical function, reducing discomfort, and promoting a safe return to daily life.", icon: Activity, features: ["Cardiac Conditioning Cycles", "Chest Physiotherapy (Spirometry)", "Early Mobility Ambulation", "Scar Tissue Management"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
  "rehab-geriatric": { title: "Elderly Rehabilitation", description: "Specialized rehabilitation services designed to address age-related mobility challenges, improve independence, and enhance overall quality of life.", icon: Heart, features: ["Fall Prevention Screenings", "Vestibular Balance Exercises", "Joint Range Optimization", "Elderly Endurance Drills"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
  "rehab-pain": { title: "Pain Management Programs", description: "Our pain management programs focus on helping patients manage chronic or recurring pain through therapy, rehabilitation techniques, and individualized care plans.", icon: Flame, features: ["TENS/Interferential Therapy", "Dry Needling Clinics", "Myofascial Trigger Release", "Posture Corrective Exercises"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
}

const departmentGroups = [
  {
    category: "Emergency & Critical Care",
    icon: Zap,
    services: ["Emergency & Trauma Care", "ICU & Intensive Care", "Anaesthesia", "24/7 Emergency Services", "Ambulance Services"],
  },
  {
    category: "General Medicine",
    icon: Stethoscope,
    services: ["General Medicine", "Preventive Healthcare", "Internal Medicine"],
  },
  {
    category: "Surgical Sciences",
    icon: Scissors,
    services: ["General Surgery", "Laparoscopic Surgery", "GI & Hepatobiliary Surgery", "Surgical Oncology", "Plastic & Reconstructive Surgery", "Neuro Surgery", "Spine Surgery", "Orthopedic Surgery", "Pediatric Surgery"],
  },
  {
    category: "Gastro Sciences",
    icon: FlaskConical,
    services: ["Gastroenterology", "Gastro Surgery", "Liver & Hepatobiliary Care"],
  },
  {
    category: "Neuro Sciences",
    icon: Brain,
    services: ["Neurology", "Neuro Surgery", "Spine Care"],
  },
  {
    category: "Women & Child Care",
    icon: Baby,
    services: ["Obstetrics & Gynecology", "Pediatrics", "Pediatric Surgery"],
  },
  {
    category: "Heart & Lung Care",
    icon: HeartPulse,
    services: ["Cardiology", "Pulmonology"],
  },
  {
    category: "Renal & Urology",
    icon: TestTube2,
    services: ["Nephrology", "Urology"],
  },
  {
    category: "ENT & Sensory Care",
    icon: Ear,
    services: ["ENT"],
  },
  {
    category: "Diagnostics",
    icon: Microscope,
    services: ["Radiology", "Laboratory Services"],
  },
]

const ayurvedaList = [
  "Panchakarma", "Detoxification Therapies", "Stress Management", "Pain Relief Therapies",
  "Spine & Joint Wellness", "Lifestyle Disease Management", "Preventive Wellness",
  "Ayurvedic Consultation", "Rejuvenation Therapies",
]

const rehabList = [
  "Physiotherapy", "Neuro Rehabilitation", "Orthopedic Rehabilitation", "Stroke Recovery",
  "Sports Injury Recovery", "Mobility Training", "Post-Surgical Rehabilitation",
  "Elderly Rehabilitation", "Pain Management Programs",
]

// ─── Unified Service Card ────────────────────────────────────────────────────
function ServiceCard({ name, description }: { name: string; description?: string }) {
  return (
    <div className="group bg-white rounded-2xl border border-[#e8eef6] p-5 hover:-translate-y-1 hover:border-[#0b1f4a]/20 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#0d9488] mt-2 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-[#0b1f4a] leading-snug">{name}</h4>
          {description && <p className="text-xs text-[#64748b] leading-relaxed mt-1">{description}</p>}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection({ activeService }: ServicesSectionProps) {
  const isOverview = activeService === "overview" || activeService === "services"
  let categoryKey: "allopathy" | "ayurveda" | "rehabilitation" = "allopathy"
  if (activeService.startsWith("ayurveda-")) categoryKey = "ayurveda"
  else if (activeService.startsWith("rehab-")) categoryKey = "rehabilitation"
  const service = allServices[activeService]

  const handleSidebarClick = (id: string) => {
    window.location.hash = id
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isOverview) {
    return (
      <div>
        {/* ── Hero ── */}
        <section className="relative h-[380px] lg:h-[460px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/Sripada Hospital.png')" }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060f26]/90 via-[#0b1f4a]/80 to-[#0d9488]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse" />
                  Our Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] tracking-tight mb-5">
                  Healthcare That<br />
                  <span className="text-[#0d9488]">Works for You</span>
                </h1>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  Allopathy, Ayurveda, and Rehabilitation — three specialties working as one to deliver complete care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three Pillars ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
                Our Departments
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Three Pillars of Integrated Care</h2>
              <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
                Each department is designed to work in harmony — coordinated care for better outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((cat) => (
                <div key={cat.id} className={cn("group bg-white rounded-3xl border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4", cat.border)}>
                  <div className={cn("h-28 bg-gradient-to-br flex items-center justify-center", cat.accent)}>
                    <cat.icon className="h-14 w-14 text-white/20" />
                  </div>
                  <div className="p-8">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-5 -mt-14 relative z-10 border-4 border-white shadow-lg", cat.iconBg)}>
                      <cat.icon className={cn("h-7 w-7", cat.iconColor)} />
                    </div>
                    <h3 className="text-xl font-sans font-bold text-[#0b1f4a] mb-3">{cat.name}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Allopathy Specialities ── */}
        <section className="py-24 bg-[#f0f4f8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0b1f4a] mb-5">
                Allopathy
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Medical Specialities & Departments</h2>
              <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
                Our team of experienced specialists covers a wide range of medical disciplines for comprehensive patient care.
              </p>
            </div>
            <div className="space-y-10">
              {departmentGroups.map((group, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#e8eef6]">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] flex items-center justify-center flex-shrink-0">
                      <group.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-[#0b1f4a]">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {group.services.map((name, j) => (
                      <ServiceCard key={j} name={name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ayurveda ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold tracking-widest uppercase text-[#0d9488] mb-5">
                Ayurveda
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">The Wisdom of Ayurveda</h2>
              <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
                Personalized therapies and wellness programs designed to restore balance and support the body's natural healing processes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {ayurvedaList.map((name, i) => (
                <ServiceCard key={i} name={name} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Rehabilitation ── */}
        <section className="py-24 bg-[#f0f4f8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-xs font-bold tracking-widest uppercase text-[#7c3aed] mb-5">
                Rehabilitation
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0b1f4a]">Rebuild Strength. Restore Independence.</h2>
              <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
                Tailored recovery programs for injury, illness, surgery, or neurological conditions — focused on your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {rehabList.map((name, i) => (
                <ServiceCard key={i} name={name} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (service) {
    const category = activeService.startsWith("allopathy-")
      ? serviceCategories[0]
      : activeService.startsWith("ayurveda-")
      ? serviceCategories[1]
      : serviceCategories[2]
    const siblings = categorySiblings[categoryKey] || []

    return (
      <div>
        {/* ── Detail Hero ── */}
        <section className="relative h-[320px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: activeService.startsWith("ayurveda-") ? "url('/Sripada Hospital (1).png')" : activeService.startsWith("rehab-") ? "url('/Sripada Hospital (2).png')" : "url('/Sripada Hospital.png')" }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060f26]/90 via-[#0b1f4a]/80 to-[#0d9488]/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
              <nav className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6">
                <button onClick={() => handleSidebarClick("services")} className="hover:text-white transition-colors">Services</button>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white/80">{category.name}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white font-bold">{service.title}</span>
              </nav>
              <div className="flex items-center gap-4">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white/20", category.iconBg)}>
                  <service.icon className={cn("h-7 w-7", category.iconColor)} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-sans font-bold text-white">{service.title}</h1>
                  <span className={cn("inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mt-2", category.tag)}>
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Detail Body ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="bg-white rounded-2xl border border-[#e8eef6] overflow-hidden shadow-sm sticky top-6">
                  <div className={cn("px-5 py-4 text-white font-sans font-semibold text-sm bg-gradient-to-r flex items-center gap-2", category.accent)}>
                    <category.icon className="h-4 w-4" /> {category.name} Services
                  </div>
                  <nav className="p-3 space-y-1 max-h-[480px] overflow-y-auto">
                    {siblings.map((sib) => {
                      const isCurrent = sib.id === activeService
                      return (
                        <button key={sib.id} onClick={() => handleSidebarClick(sib.id)}
                          className={cn(
                            "w-full text-left px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center justify-between group",
                            isCurrent
                              ? "bg-[#f0f4f8] text-[#0b1f4a] font-bold border-l-4 border-l-[#0b1f4a]"
                              : "text-[#64748b] hover:text-[#0b1f4a] hover:bg-[#f8fafc]"
                          )}
                        >
                          <span>{sib.name}</span>
                          <ChevronRight className={cn("h-3.5 w-3.5 flex-shrink-0", isCurrent ? "text-[#0b1f4a]" : "text-[#cbd5e1]")} />
                        </button>
                      )
                    })}
                  </nav>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 space-y-8">
                {/* Description */}
                <div className="bg-white rounded-2xl border border-[#e8eef6] p-8">
                  <h2 className="text-xl font-sans font-bold text-[#0b1f4a] mb-4">Overview</h2>
                  {Array.isArray(service.description) ? (
                    <div className="space-y-4">
                      {service.description.map((para, i) => (
                        <p key={i} className="text-[#475569] leading-relaxed text-base">{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#475569] leading-relaxed text-base">{service.description}</p>
                  )}
                </div>

                {/* Features */}
                {service.features && (
                  <div className="bg-[#f0f4f8] rounded-2xl border border-[#e8eef6] p-8">
                    <h3 className="text-lg font-sans font-bold text-[#0b1f4a] mb-6">Key Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="bg-white rounded-xl border border-[#e8eef6] px-5 py-4 flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#0d9488] flex-shrink-0" />
                          <span className="text-sm font-semibold text-[#0b1f4a]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-white rounded-2xl border border-[#e8eef6] p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b1f4a] to-[#1a3a7c] flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-bold text-[#0b1f4a]">Schedule a Consultation</h3>
                      <p className="text-sm text-[#475569] mt-1">Connect with our specialists to discuss your care options.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href="tel:+919XXXXXXXXX" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0b1f4a] to-[#1a3a7c] text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-md">
                      <Phone className="h-4 w-4" /> Call Medical Desk
                    </a>
                    <a href="https://wa.me/919XXXXXXXXX?text=Hi,%20I%20want%20to%20schedule%20an%20appointment" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0d9488] to-[#0b7c72] text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-md">
                      <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return null
}
