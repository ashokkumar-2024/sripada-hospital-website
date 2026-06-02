"use client"

import { useState } from "react"
import { Calendar, User, X, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    id: 1,
    title: "Benefits of Integrative Medicine: Why Combining Allopathy and Ayurveda Works",
    date: "May 15, 2024",
    author: "Dr. Anitha Sripada",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    excerpt: "Discover how combining traditional and modern approaches leads to better outcomes for patients.",
    content: `Integrative medicine represents a paradigm shift in healthcare, combining the best of modern allopathic medicine with time-tested traditional healing practices like Ayurveda. At Sripada Hospitals, we've witnessed remarkable outcomes when these two systems work in harmony.

Modern medicine excels in acute care, diagnostics, and surgical interventions. Allopathic treatments are evidence-based, standardized, and effective for emergencies and specific diseases. However, they sometimes fall short in addressing chronic conditions, preventive care, and holistic well-being.

Ayurveda, with its 5,000-year history, offers a personalized approach based on individual constitution (Prakriti). It addresses root causes, emphasizes lifestyle modifications, and uses natural remedies with minimal side effects. Ayurvedic treatments excel in chronic disease management, stress reduction, and overall vitality enhancement.

When we integrate both systems, patients benefit from: accurate modern diagnostics combined with personalized Ayurvedic treatments, surgical expertise backed by natural post-operative recovery protocols, chronic disease management that addresses both symptoms and root causes, and preventive health programs that combine screening with lifestyle optimization.

Case Study: A 55-year-old diabetic patient came to us with poorly controlled blood sugar despite multiple medications. Our integrated approach included continuing essential allopathic medications, adding Ayurvedic formulations for metabolic support, implementing dietary changes based on Prakriti analysis, and introducing yoga and meditation for stress management. Within six months, his HbA1c dropped from 9.2 to 6.8, and we reduced his medication dosage by 40%.

This is the future of healthcare - not choosing between systems, but intelligently combining them for optimal patient outcomes.`
  },
  {
    id: 2,
    title: "Managing Diabetes with Ayurveda: A Complementary Approach",
    date: "May 10, 2024",
    author: "Dr. Lakshmi Nair",
    category: "Ayurveda",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    excerpt: "Learn about natural approaches to blood sugar management alongside conventional care.",
    content: `Diabetes mellitus, known as Madhumeha in Ayurveda, has been recognized and treated in traditional Indian medicine for millennia. While modern insulin and oral hypoglycemics are essential for many patients, Ayurvedic approaches can significantly complement conventional treatment.

Understanding Diabetes in Ayurveda: According to Ayurveda, diabetes results from an imbalance of Kapha dosha, leading to impaired digestive fire (Agni) and accumulation of toxins (Ama). This explains why Ayurvedic treatment focuses not just on blood sugar but on overall metabolic health.

Key Ayurvedic Interventions:
1. Dietary Modifications (Pathya): Emphasis on bitter vegetables (bitter gourd, fenugreek), whole grains, and avoiding sweets and processed foods. Meals are timed according to digestive capacity.

2. Herbal Formulations: Herbs like Gudmar (Gymnema sylvestre), Jamun (Eugenia jambolana), and Turmeric have demonstrated anti-diabetic properties. Our physicians prescribe these based on individual Prakriti.

3. Panchakarma Therapies: Detoxification procedures help reset metabolism. Virechana (therapeutic purgation) and Basti (medicated enemas) are particularly effective.

4. Yoga and Pranayama: Specific asanas like Mandukasana, Ardha Matsyendrasana, and breathing exercises improve insulin sensitivity and stress management.

Important Considerations:
- Never discontinue prescribed medications without consulting your doctor
- Ayurvedic treatment works best as a complement, not replacement
- Regular monitoring of blood sugar remains essential
- Results vary based on disease duration and individual factors

At Sripada, our diabetologists and Ayurveda physicians work together to create personalized treatment plans. Many patients have reduced their medication dosages and improved their quality of life through this integrated approach.`
  },
  {
    id: 3,
    title: "Post-Surgery Rehabilitation: Your Guide to Faster Recovery",
    date: "May 5, 2024",
    author: "Dr. Venkat Prasad",
    category: "Rehabilitation",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    excerpt: "Expert tips for optimal recovery after surgery with structured rehabilitation.",
    content: `Surgery is often just the beginning of the healing journey. What happens in the days and weeks after surgery significantly impacts long-term outcomes. At Sripada's Rehabilitation Center, we've developed evidence-based protocols that help patients recover faster and better.

Why Post-Surgical Rehabilitation Matters:
After surgery, your body undergoes significant changes. Muscles weaken from disuse, joints stiffen, and overall function declines. Without proper rehabilitation, you risk prolonged disability, chronic pain, and even surgery failure in some cases.

Early Mobilization - The Key to Recovery:
Gone are the days of prolonged bed rest after surgery. Research shows that early, supervised movement speeds recovery. For most surgeries, we begin gentle exercises within 24-48 hours. This prevents blood clots, maintains muscle strength, and improves psychological well-being.

Phase-wise Rehabilitation Approach:
Phase 1 (Days 1-7): Focus on pain management, gentle range of motion, and basic mobility. Breathing exercises prevent lung complications.

Phase 2 (Weeks 2-4): Progressive strengthening, improved mobility, and gradual return to daily activities. We address any compensatory movement patterns.

Phase 3 (Weeks 4-12): Advanced strengthening, sport-specific or occupation-specific training, and full functional restoration.

Special Considerations for Different Surgeries:
- Joint Replacement: Focus on range of motion and weight-bearing exercises
- Cardiac Surgery: Carefully graded aerobic conditioning
- Spine Surgery: Core strengthening with strict precautions
- Abdominal Surgery: Breathing exercises and gradual core reactivation

Tips for Optimal Recovery:
1. Follow your rehabilitation schedule religiously
2. Don't push through severe pain - communicate with your team
3. Nutrition matters - protein and vitamins support healing
4. Sleep well - most tissue repair happens during sleep
5. Stay positive - mental attitude affects physical recovery

Our rehabilitation team works closely with surgeons to ensure seamless post-operative care. Remember, rehabilitation isn't optional - it's an essential part of your surgical treatment.`
  },
]

export function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
              Health Insights & Blog
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Expert articles on health, wellness, and medical advances
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogs.map((blog) => (
              <Card key={blog.id} className="premium-card overflow-hidden group cursor-pointer" onClick={() => setSelectedBlog(blog)}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                    {blog.category}
                  </span>
                  <h2 className="text-lg font-sans font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" aria-hidden="true" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 group-hover:text-primary touch-target">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4"
          onClick={() => setSelectedBlog(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedBlog.title}
        >
          <div 
            className="bg-card rounded-2xl shadow-2xl w-full max-w-3xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 bg-foreground/50 text-primary-foreground p-2 rounded-full hover:bg-foreground/70 touch-target"
                aria-label="Close article"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-8">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                {selectedBlog.category}
              </span>
              
              <h1 className="text-2xl md:text-3xl font-sans font-bold text-foreground mt-4 mb-4">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>{selectedBlog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{selectedBlog.date}</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none text-muted-foreground">
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Have questions about this topic? <a href="#contact" className="text-primary hover:underline font-semibold">Contact our specialists</a> for personalized advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
