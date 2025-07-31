import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Gym Exercises for Beginners",
      excerpt: "Starting your fitness journey? Here are the must-know exercises that will build a solid foundation for your workout routine.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      author: "BigBull Trainers",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Beginner Guide"
    },
    {
      id: 2,
      title: "Benefits of Zumba: Dance Your Way to Fitness",
      excerpt: "Discover how Zumba combines fun and fitness, helping you burn calories while enjoying Latin-inspired dance moves.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      author: "Zumba Instructor",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Zumba"
    },
    {
      id: 3,
      title: "Nutrition Tips for Maximum Muscle Growth",
      excerpt: "Learn what to eat before and after workouts to maximize your muscle-building potential and recovery.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      author: "Nutrition Expert",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Nutrition"
    },
    {
      id: 4,
      title: "How to Build a Home Workout Routine",
      excerpt: "Can't make it to the gym? Here's how to create an effective workout routine using minimal equipment at home.",
      image: "https://images.unsplash.com/photo-1506629905607-4d45a5d3e8b7?auto=format&fit=crop&w=800&q=80",
      author: "Fitness Coach",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Home Fitness"
    },
    {
      id: 5,
      title: "The Science Behind High-Intensity Interval Training",
      excerpt: "Understand why HIIT is so effective for weight loss and cardiovascular health, and how to incorporate it into your routine.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      author: "Exercise Scientist",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Training"
    },
    {
      id: 6,
      title: "Mental Health Benefits of Regular Exercise",
      excerpt: "Explore how regular physical activity can improve your mental wellbeing, reduce stress, and boost confidence.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      author: "Wellness Expert",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Wellness"
    }
  ];

  const categories = ["All", "Beginner Guide", "Zumba", "Nutrition", "Home Fitness", "Training", "Wellness"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fitness <span className="text-bull-gold">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Expert tips, workouts, and insights to fuel your fitness journey
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "hero" : "outline"}
                    size="sm"
                    className={category !== "All" ? "bg-white/10 border-white/20 text-white hover:bg-white/20" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bull-gold text-bull-red px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Fitness Tips
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest workout routines, nutrition advice, and wellness insights.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;