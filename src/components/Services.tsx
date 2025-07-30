import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Heart, 
  Music, 
  User, 
  Users, 
  Timer,
  Target,
  Flame,
  Zap,
  Trophy
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle, increase strength, and improve bone density with our comprehensive weight training programs.",
      features: [
        "Free weights & machines",
        "Progressive overload programs",
        "Strength assessments",
        "Form correction"
      ],
      benefits: ["Muscle Growth", "Bone Health", "Metabolism Boost"],
      color: "bg-gradient-to-br from-bull-red to-bull-red/80"
    },
    {
      icon: Heart,
      title: "Cardio Training",
      description: "Improve cardiovascular health, burn calories, and boost endurance with our varied cardio programs.",
      features: [
        "Treadmills & ellipticals",
        "HIIT workouts",
        "Cycling classes",
        "Heart rate monitoring"
      ],
      benefits: ["Heart Health", "Calorie Burn", "Endurance"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Music,
      title: "Zumba Fitness",
      description: "Dance your way to fitness with high-energy Zumba classes that combine Latin music with cardio exercise.",
      features: [
        "Beginner to advanced levels",
        "Latin & international music",
        "Group choreography",
        "Fun atmosphere"
      ],
      benefits: ["Calorie Burn", "Coordination", "Mental Health"],
      color: "bg-gradient-to-br from-bull-gold to-orange-500"
    },
    {
      icon: User,
      title: "Personal Training",
      description: "Get one-on-one attention with certified personal trainers who create customized workout plans.",
      features: [
        "Customized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Goal-specific training"
      ],
      benefits: ["Faster Results", "Expert Guidance", "Accountability"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Stay motivated with group fitness classes including yoga, pilates, boot camp, and functional training.",
      features: [
        "Variety of class types",
        "All fitness levels",
        "Social environment",
        "Expert instructors"
      ],
      benefits: ["Motivation", "Community", "Variety"],
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Functional Training",
      description: "Train movements that help you perform better in daily activities with functional fitness programs.",
      features: [
        "Real-world movements",
        "Core stability focus",
        "Injury prevention",
        "Athletic performance"
      ],
      benefits: ["Daily Function", "Injury Prevention", "Athletic Performance"],
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { icon: Trophy, number: "500+", label: "Happy Members" },
    { icon: Flame, number: "10k+", label: "Calories Burned Daily" },
    { icon: Timer, number: "50+", label: "Classes Per Week" },
    { icon: Zap, number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-bull-red to-transparent w-20" />
            <span className="mx-4 text-bull-red font-semibold tracking-wider">OUR SERVICES</span>
            <div className="h-px bg-gradient-to-r from-transparent via-bull-red to-transparent w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Fitness
            <span className="text-transparent bg-clip-text bg-gradient-hero"> Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From high-intensity strength training to energetic Zumba classes, we offer diverse programs 
            designed to meet every fitness goal and preference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-hero w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-power transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-bull-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-bull-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-bull-red group-hover:text-white group-hover:border-bull-red transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                Choose your program and begin your transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                  View All Programs
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black">
                  Book Free Consultation
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;