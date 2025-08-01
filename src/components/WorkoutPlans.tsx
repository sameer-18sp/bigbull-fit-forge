import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Zap, Trophy, Dumbbell, Heart } from "lucide-react";
import BookingModal from "@/components/modals/BookingModal";

const WorkoutPlans = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const workoutPlans = [
    {
      title: "BULL STRENGTH",
      description: "Build raw power and muscle mass",
      duration: "45 mins",
      intensity: "High",
      participants: "1-4",
      icon: Dumbbell,
      color: "text-primary",
      features: ["Heavy Compound Lifts", "Progressive Overload", "Strength Focus", "Power Building"],
      price: "₹2,000/month"
    },
    {
      title: "CARDIO BEAST",
      description: "Burn fat and boost endurance", 
      duration: "30 mins",
      intensity: "Medium",
      participants: "5-15",
      icon: Heart,
      color: "text-bull-silver",
      features: ["HIIT Training", "Fat Burning", "Endurance Building", "Heart Health"],
      price: "₹1,500/month"
    },
    {
      title: "BULL WARRIOR",
      description: "Complete fitness transformation",
      duration: "60 mins", 
      intensity: "Extreme",
      participants: "1-8",
      icon: Trophy,
      color: "text-primary",
      features: ["Strength + Cardio", "Functional Training", "Athletic Performance", "Total Body"],
      price: "₹2,500/month"
    }
  ];

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-bull w-20" />
            <span className="mx-4 text-primary font-bold tracking-wider">UNLEASH THE BEAST</span>
            <div className="h-px bg-gradient-bull w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            BULL <span className="text-primary">WORKOUT</span> PLANS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to greatness. Every bull needs the right training to dominate.
          </p>
        </div>

        {/* Workout Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workoutPlans.map((plan, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-bull-red/20 hover:shadow-power hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <plan.icon className={`h-16 w-16 mx-auto ${plan.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{plan.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Plan Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="space-y-1">
                    <Clock className="h-5 w-5 text-primary mx-auto" />
                    <div className="text-sm font-semibold text-foreground">{plan.duration}</div>
                  </div>
                  <div className="space-y-1">
                    <Zap className="h-5 w-5 text-primary mx-auto" />
                    <div className="text-sm font-semibold text-foreground">{plan.intensity}</div>
                  </div>
                  <div className="space-y-1">
                    <Users className="h-5 w-5 text-primary mx-auto" />
                    <div className="text-sm font-semibold text-foreground">{plan.participants}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                  <Badge variant="secondary" className="bg-bull-red/10 text-primary border-bull-red/20">
                    Premium Plan
                  </Badge>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleSelectPlan(plan.title)}
                  className="w-full bg-gradient-bull hover:shadow-power hover:scale-105 transition-all duration-300 font-bold"
                >
                  START {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-bull p-8 border-0">
            <div className="text-white space-y-4">
              <Trophy className="h-12 w-12 mx-auto" />
              <h3 className="text-2xl font-bold">Ready to Unleash the Bull?</h3>
              <p className="text-white/80">
                Join thousands of members who've transformed their lives with BigBull Fitness
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-bull-dark hover:bg-bull-silver font-bold px-8 py-3"
                onClick={() => setIsBookingModalOpen(true)}
              >
                GET STARTED TODAY
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={selectedPlan || "Workout Plan"}
      />
    </section>
  );
};

export default WorkoutPlans;