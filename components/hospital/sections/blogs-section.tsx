"use client"

import { Newspaper, CalendarDays, ArrowRight, UserRound, Clock, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    title: "Why Integrated Healthcare Matters: The Role of Allopathy, Ayurveda & Rehabilitation",
    date: "June 01, 2026",
    readTime: "5 min read",
    author: "Dr. Anitha Sripada",
    excerpt: "Healthcare is most effective when it addresses not only the illness but also the recovery process. At Sripada Hospital, we bring together Allopathy, Ayurveda, and Rehabilitation services to provide patients with a well-rounded approach to care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "Integrated Care"
  },
  {
    title: "The Importance of Rehabilitation in Recovery",
    date: "May 25, 2026",
    readTime: "4 min read",
    author: "Dr. Venkat Prasad",
    excerpt: "Recovery does not always end when medical treatment is complete. For many patients, regaining strength, mobility, and independence requires structured rehabilitation and ongoing support.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    category: "Rehabilitation"
  },
  {
    title: "Understanding Panchakarma and Its Benefits",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Dr. Lakshmi Nair",
    excerpt: "Panchakarma is one of the most recognized therapies in Ayurveda, known for its focus on cleansing, rejuvenation, and restoring balance within the body.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    category: "Ayurveda"
  },
]

export function BlogsSection() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[280px] lg:h-[360px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80)" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488]/95 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              <Newspaper className="h-3 w-3" />
              Health Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Blogs & Events</h1>
            <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto">Weekly blog posts on related health topics, treatments, and wellness tips.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="space-y-10 max-w-5xl mx-auto">
            {blogs.map((blog, index) => (
              <Card key={index} className="premium-card overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
                    <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold rounded-full uppercase tracking-wider">{blog.category}</span>
                      <span className="flex items-center gap-1 text-xs text-[#64748B]"><CalendarDays className="h-3 w-3" />{blog.date}</span>
                      <span className="flex items-center gap-1 text-xs text-[#64748B]"><Clock className="h-3 w-3" />{blog.readTime}</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-sans font-semibold text-[#0F172A] mb-3 leading-snug">{blog.title}</h2>
                    <p className="text-[#475569] text-sm leading-relaxed mb-6">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#EFF6FF] rounded-full flex items-center justify-center">
                          <UserRound className="h-4 w-4 text-[#2563EB]" />
                        </div>
                        <span className="text-sm font-medium text-[#0F172A]">{blog.author}</span>
                      </div>
                      <Button variant="outline" size="sm" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white rounded-xl font-semibold text-xs transition-all">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
