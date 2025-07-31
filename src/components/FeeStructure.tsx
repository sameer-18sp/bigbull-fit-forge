import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Heart, Trophy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BookingModal from "@/components/modals/BookingModal";

const FeeStructure = () => {
  const { toast } = useToast();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    months: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAppointment = () => {
    if (!formData.name || !formData.mobile || !formData.email || !formData.months) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: "We'll contact you soon to confirm your appointment details.",
    });
    
    setFormData({ name: "", mobile: "", email: "", months: "" });
  };

  const packages = [
    {
      icon: Dumbbell,
      title: "Basic Plan",
      duration: "3 Months",
      price: "$1200",
      features: ["Gym Access", "Basic Equipment", "Group Classes"]
    },
    {
      icon: Heart,
      title: "Premium Plan", 
      duration: "6 Months",
      price: "$2500",
      features: ["Full Gym Access", "Personal Training", "Nutrition Plan", "Zumba Classes"],
      popular: true
    },
    {
      icon: Trophy,
      title: "Elite Plan",
      duration: "12 Months", 
      price: "$4500",
      features: ["VIP Access", "Personal Trainer", "Meal Plans", "All Classes", "Supplements"]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Fee Structure */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-20" />
                <span className="mx-4 text-purple-400 font-semibold tracking-wider">GET INTO SHAPE</span>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-20" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                FEE <span className="text-purple-400">STRUCTURE</span>
              </h2>
            </div>

            {/* Package Cards */}
            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`group hover:shadow-glow transition-all duration-300 ${pkg.popular ? 'border-purple-400 shadow-lg' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                          <pkg.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{pkg.title}</h3>
                          <p className="text-muted-foreground">{pkg.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-purple-400">{pkg.price}</div>
                        {pkg.popular && (
                          <span className="text-xs bg-purple-400 text-black px-2 py-1 rounded-full">POPULAR</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-purple-200 font-semibold tracking-wider">GET INTO SHAPE</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">APPOINTMENT <span className="text-purple-200">FORM</span></h3>
                </div>

                <div className="space-y-6">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
                  />
                  
                  <Input
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
                  />
                  
                  <Input
                    placeholder="E-Mail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
                  />
                  
                  <Select value={formData.months} onValueChange={(value) => handleInputChange("months", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-white">
                      <SelectValue placeholder="No. of Months" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Months</SelectItem>
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">12 Months</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full bg-black/20 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
                    onClick={handleAppointment}
                  >
                    APPOINTMENT
                  </Button>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Come Train With Us */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">COME TRAIN</h3>
              <h4 className="text-4xl font-bold mb-4">WITH US</h4>
              <div className="bg-white text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">Save</div>
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-xs">Now</div>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Join Now
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
          </div>

          {/* Book a Visit */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">MEET THE TRAINERS</h3>
              <h4 className="text-3xl font-bold mb-4">BOOK A <span className="text-purple-400">VISIT</span></h4>
              <p className="text-gray-300 mb-6">Know About Special Offers & New Training Regime</p>
              <Button 
                variant="outline"
                className="bg-purple-600 border-purple-600 text-white hover:bg-purple-700"
                onClick={() => setIsBookingModalOpen(true)}
              >
                VISIT NOW
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full translate-y-16 translate-x-16" />
          </div>
        </div>
      </div>
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType="Membership"
      />
    </section>
  );
};

export default FeeStructure;