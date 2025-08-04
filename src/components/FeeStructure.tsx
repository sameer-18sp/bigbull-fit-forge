import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    <section className="py-20 bg-bull-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-bull-silver/70 text-lg font-medium tracking-wider mb-4">GET INTO SHAPE</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">
            FEE <span className="text-bull-red">STRUCTURE</span>
          </h2>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-bull-dark to-bull-gray/50 border-2 border-bull-gold/30 hover:border-bull-gold transition-all duration-700 cursor-pointer h-80 flex flex-col items-center justify-center rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-premium"
            >
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-bull opacity-0 group-hover:opacity-5 transition-opacity duration-700 transform group-hover:scale-110"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bull-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              </div>

              {/* Icon with enhanced animation */}
              <div className="mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <pkg.icon className="h-20 w-20 text-white group-hover:text-bull-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>
              
              {/* Title always visible */}
              <div className="relative z-10 text-center">
                <h3 className="text-white text-xl font-bold group-hover:text-bull-gold transition-colors duration-500">{pkg.title}</h3>
              </div>
              
              {/* Enhanced Hover Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-bull-dark/95 to-bull-bronze/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                <div className="text-center relative z-10">
                  <h3 className="text-bull-gold text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-white text-lg mb-3">{pkg.duration}</p>
                  <div className="relative overflow-hidden mb-4">
                    <p className="text-bull-gold text-4xl font-black animate-pulse">{pkg.price}/-</p>
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <p key={featureIndex} className="text-white/90 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{transitionDelay: `${featureIndex * 100}ms`}}>
                        ✓ {feature}
                      </p>
                    ))}
                  </div>
                  {pkg.popular && (
                    <div className="mt-4 bg-gradient-bull text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      MOST POPULAR
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-bull-red to-red-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="text-red-200 font-medium tracking-wider mb-2">GET INTO SHAPE</p>
                <h3 className="text-3xl font-bold mb-2">APPOINTMENT <span className="text-red-200">FORM</span></h3>
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
                  className="w-full bg-black/20 border-white text-white hover:bg-white hover:text-bull-red transition-all duration-300"
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

        {/* Bottom CTA Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Come Train With Us */}
          <div className="bg-gradient-to-r from-bull-red to-red-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">COME TRAIN</h3>
              <h4 className="text-4xl font-bold mb-4">WITH US</h4>
              <div className="bg-white text-bull-red w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">Save</div>
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-xs">Now</div>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-bull-red"
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
              <h4 className="text-3xl font-bold mb-4">BOOK A <span className="text-bull-red">VISIT</span></h4>
              <p className="text-gray-300 mb-6">Know About Special Offers & New Training Regime</p>
              <Button 
                variant="outline"
                className="bg-bull-red border-bull-red text-white hover:bg-red-700"
                onClick={() => setIsBookingModalOpen(true)}
              >
                VISIT NOW
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-bull-red/20 rounded-full translate-y-16 translate-x-16" />
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