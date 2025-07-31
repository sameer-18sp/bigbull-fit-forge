import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      location: "Bengaluru",
      rating: 5,
      text: "Joining BigBull Fitness has been a game-changer for me. The expert trainers and top-notch facilities helped me achieve my fitness goals faster than I ever imagined. The supportive environment makes every workout enjoyable and effective!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Marathahalli",
      rating: 5,
      text: "I've tried many gyms, but BigBull Fitness stands out with its personalized training programs and outstanding Zumba classes. The results speak for themselves – I've never felt better or more confident in my body!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Arjun Malhotra",
      location: "Kundalahalli",
      rating: 5,
      text: "BigBull Fitness offers the best gym experience in Bangalore. From their cutting-edge equipment to their dedicated trainers, every aspect of the gym is designed to help you succeed. I highly recommend it to anyone serious about fitness.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Anita Reddy",
      location: "Nellore",
      rating: 5,
      text: "The community and resources at BigBull Fitness are incredible. I've lost weight, gained muscle, and improved my overall health thanks to their holistic approach to fitness and wellness. It's truly a place where transformation happens.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Electronic City",
      rating: 5,
      text: "The Zumba classes at BigBull are absolutely amazing! The instructors are energetic and motivating. I've been coming here for 8 months and have seen incredible improvements in my stamina and overall fitness.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Meera Patel",
      location: "Whitefield",
      rating: 5,
      text: "BigBull Fitness has the perfect balance of strength training and fun activities like Zumba. The trainers are knowledgeable and create personalized workout plans. I've achieved my weight loss goals and gained so much confidence!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-bull-gold font-semibold mb-2">Getting into Shape</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What do our clients <span className="text-primary">Say about us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at BigBull Fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`relative bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? 'hover:scale-105' : 'lg:-translate-y-4 hover:scale-105'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-bull-gold/20"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-bull-gold text-bull-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-8 w-8 text-bull-gold/20" />
                  <blockquote className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`w-3 h-3 rounded-full transition-all ${
                dot === 1 ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;