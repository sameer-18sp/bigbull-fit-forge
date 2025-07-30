import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Target, Users, Zap, Shield } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/modals/BookingModal";

const About = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBooking = (service: string) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Heart & Lung Health",
      description: "Improve cardiovascular health and increase lung capacity through our cardio programs."
    },
    {
      icon: Zap,
      title: "Boost Energy Levels",
      description: "Regular exercise increases energy levels and reduces fatigue throughout the day."
    },
    {
      icon: Target,
      title: "Weight Management",
      description: "Achieve and maintain your ideal weight with our structured fitness programs."
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Reduce risk of chronic diseases and strengthen your immune system."
    },
    {
      icon: Trophy,
      title: "Mental Wellness",
      description: "Combat stress, anxiety, and depression while boosting self-confidence."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a supportive community of fitness enthusiasts on similar journeys."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
            <span className="mx-4 text-bull-gold font-semibold tracking-wider">ABOUT US</span>
            <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Lifelong Sanctuary for 
            <span className="text-transparent bg-clip-text bg-gradient-hero"> Health & Fitness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At BigBull Fitness Gym & Zumba, we believe fitness is not just about building muscles—it's about building a better life. 
            Our state-of-the-art facility combines traditional strength training with the joy of Zumba dance fitness.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16 shadow-power">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower individuals to achieve their fitness goals through expert guidance, 
                cutting-edge equipment, and a supportive community atmosphere. We make fitness 
                accessible, enjoyable, and sustainable for everyone.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                  Professional certified trainers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                  State-of-the-art equipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                  Personalized workout plans
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                  Supportive community environment
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Why Choose BigBull?</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 mr-3" />
                    <span>Award-winning fitness programs</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 mr-3" />
                    <span>Inclusive community for all levels</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 mr-3" />
                    <span>High-energy Zumba classes</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    <span>Goal-oriented training approach</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-bull-gold rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-bull-red rounded-full opacity-20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            The BigBull <span className="text-transparent bg-clip-text bg-gradient-hero">Advantage</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-power rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands who have already started their fitness journey with BigBull
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gold" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => handleBooking("Free Trial")}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
                onClick={() => handleBooking("Schedule Tour")}
              >
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={selectedService}
      />
    </section>
  );
};

export default About;