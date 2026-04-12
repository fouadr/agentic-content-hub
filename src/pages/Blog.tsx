import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "10 AI Content Strategies That Actually Work in 2026", excerpt: "Discover how leading brands are leveraging AI to create authentic, engaging content at scale.", date: "April 5, 2026", category: "Strategy", readTime: "5 min read" },
  { title: "The Future of Social Media Scheduling", excerpt: "Why traditional scheduling tools are becoming obsolete and what's replacing them.", date: "March 28, 2026", category: "Trends", readTime: "4 min read" },
  { title: "How to Maintain Brand Voice Across 6 Platforms", excerpt: "A practical guide to keeping your brand consistent without burning out your team.", date: "March 15, 2026", category: "Guide", readTime: "7 min read" },
  { title: "GDPR and AI: What Creators Need to Know", excerpt: "Understanding the intersection of AI content generation and European data protection laws.", date: "March 1, 2026", category: "Compliance", readTime: "6 min read" },
  { title: "Case Study: How Bakery Co. Grew 300% with AI Content", excerpt: "A deep dive into how a small bakery chain used BRANDSBAKERY to dominate local social media.", date: "February 20, 2026", category: "Case Study", readTime: "8 min read" },
  { title: "5 Mistakes to Avoid with AI-Generated Content", excerpt: "Common pitfalls and how to ensure your AI content feels human and on-brand.", date: "February 10, 2026", category: "Tips", readTime: "4 min read" },
];

const Blog = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-muted-foreground">Insights, guides, and updates from the BRANDSBAKERY team.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;