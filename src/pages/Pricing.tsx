import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      duration: "3 Months",
      price: "₹5,000",
      originalPrice: "₹9,000",
      popular: false,
      features: [
        "Gym access during off-peak hours",
        "Basic equipment usage",
        "Locker facility",
        "Weekly progress tracking",
        "Basic nutrition guidance"
      ]
    },
    {
      name: "Premium", 
      duration: "6 Months",
      price: "₹9,000",
      originalPrice: "₹12,000",
      popular: true,
      features: [
        "24/7 gym access",
        "All equipment access",
        "Zumba classes included",
        "Personal trainer consultation",
        "Nutrition & diet planning",
        "Progress tracking & analysis",
        "Steam & sauna access"
      ]
    },
    {
      name: "Elite",
      duration: "12 Months", 
      price: "₹17,000",
      originalPrice: "₹24,000",
      popular: false,
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Advanced body composition analysis",
        "Supplement consultation",
        "Guest pass (2 per month)",
        "Priority booking for classes",
        "Massage therapy sessions"
      ]
    },
    {
      name: "Ultra-Premium",
      duration: "Lifetime",
      price: "₹50,000",
      popular: true,
      features: [
        "Lifetime access to all facilities",
        "Free nutrition and supplement guidance",
        "Family nutrition workshops",
        "Monthly family fitness challenges",
        "Free family fitness assessment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
                <span className="mx-4 text-bull-gold font-semibold tracking-wider">PRICING PLANS</span>
                <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Choose Your
                <span className="text-transparent bg-clip-text bg-gradient-hero"> Fitness Plan</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Flexible membership plans designed to fit your lifestyle and fitness goals. Start your transformation today!
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'border-bull-gold border-2' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        plan.popular ? 'bg-gradient-hero' : 'bg-gradient-subtle'
                      }`}>
                        {plan.name === 'Elite' ? (
                          <Crown className="h-8 w-8 text-white" />
                        ) : (
                          <Star className="h-8 w-8 text-white" />
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.duration}</p>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-bull-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-subtle border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose BigBull?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span className="text-muted-foreground">No hidden fees or charges</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span className="text-muted-foreground">Cancel anytime with 30-day notice</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span className="text-muted-foreground">Free trial available for new members</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span className="text-muted-foreground">Family discounts available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-power text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span>20% off for students with valid ID</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span>Corporate membership discounts</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span>Refer a friend and get 1 month free</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bull-gold rounded-full mr-3" />
                      <span>Senior citizen discounts (60+)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-card border border-border rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of satisfied members who have transformed their lives with BigBull
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;