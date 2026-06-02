"use client"

import { useState } from "react"
import { X, Share2, Filter, ZoomIn, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", category: "infrastructure", title: "Hospital Main Entrance" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", category: "infrastructure", title: "Neonatal Intensive Care Unit" },
  { src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80", category: "infrastructure", title: "Modular Operation Theatre" },
  { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80", category: "infrastructure", title: "Pathology & Diagnostics Lab" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", category: "infrastructure", title: "Traditional Ayurveda Therapy Room" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", category: "infrastructure", title: "Advanced Rehabilitation Gym" },
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80", category: "infrastructure", title: "Patient Help & Reception Desk" },
  { src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80", category: "infrastructure", title: "Deluxe Single Inpatient Room" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", category: "events", title: "Community Wellness Camp 2026" },
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80", category: "events", title: "Doctor Consultations Workshop" },
  { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80", category: "events", title: "Annual Clinical Synergy Seminar" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", category: "camps", title: "Free Cardiac Checkup Camp" },
  { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80", category: "camps", title: "Blood Donation Drive" },
  { src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80", category: "camps", title: "Diabetes Awareness & Testing Camp" },
]

const categories = [
  { id: "all", name: "All Images" },
  { id: "infrastructure", name: "Infrastructure" },
  { id: "events", name: "Events" },
  { id: "camps", name: "Health Camps" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const shareImage = (image: typeof galleryImages[0]) => {
    const shareUrl = `https://wa.me/?text=Check%20out%20${encodeURIComponent(image.title)}%20at%20Sripada%20Multi-Speciality%20Hospitals%20-%20${encodeURIComponent(image.src)}`
    window.open(shareUrl, "_blank")
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[320px] lg:h-[420px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Photo Gallery</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
              Visual tour of Sripada Hospital's clinical infrastructure, equipment resources, and social health outreach events.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar (Sticky) */}
      <section className="py-6 bg-card border-b sticky top-[64px] lg:top-[72px] z-30 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold mr-2 uppercase tracking-wider">
              <Filter className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 hover:scale-[1.02] touch-target",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Masonry Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images available in this category.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm group cursor-pointer relative transition-all duration-300 hover:shadow-md hover:border-primary/20"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full object-cover max-h-[450px]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white px-4 space-y-2">
                      <ZoomIn className="h-8 w-8 mx-auto text-primary bg-white/10 p-1.5 rounded-full backdrop-blur-sm" aria-hidden="true" />
                      <h3 className="font-sans font-bold text-sm leading-tight">{image.title}</h3>
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Accessible Zoom Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightboxImage.title}`}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm touch-target"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Main Lightbox Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden py-4">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Footer with Title and Share Link */}
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-2">
              <div>
                <h4 className="font-sans font-bold text-base text-white">{lightboxImage.title}</h4>
                <p className="text-xs text-slate-400 capitalize font-medium">{lightboxImage.category} Collection</p>
              </div>
              <Button 
                size="sm" 
                onClick={() => shareImage(lightboxImage)}
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-4 flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.02] touch-target"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
