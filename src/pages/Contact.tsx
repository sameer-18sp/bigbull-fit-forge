import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BookingModal from "@/components/modals/BookingModal";

const ContactPage = () => {
  const { toast } = useToast();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  const handleBooking = (service: string) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

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
                <span className="mx-4 text-bull-gold font-semibold tracking-wider">GET IN TOUCH</span>
                <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact
                <span className="text-transparent bg-clip-text bg-gradient-hero"> BigBull Fitness Gym and Zumba</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to start your fitness journey? Get in touch with us today to book a session or ask any questions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-glow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                        <Input 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                        <Input 
                          placeholder="Enter your last name" 
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Service Interest</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gym">Gym Membership</SelectItem>
                          <SelectItem value="zumba">Zumba Classes</SelectItem>
                          <SelectItem value="personal">Personal Training</SelectItem>
                          <SelectItem value="group">Group Classes</SelectItem>
                          <SelectItem value="nutrition">Nutrition Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Tell us about your fitness goals or any questions you have..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Booking */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-hero p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            Lotus Galli, Attariya<br />
                            Kailali, Sudurpaschim, Nepal
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-hero p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-muted-foreground">+977 9867793743</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-hero p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground">info@bigbullfitness.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-hero p-3 rounded-lg">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                          <p className="text-muted-foreground">
                            Mon - Fri: 5:00 AM - 11:00 PM<br />
                            Sat - Sun: 6:00 AM - 10:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Booking */}
                <Card className="bg-gradient-power text-white">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Quick Booking</h2>
                    <p className="mb-6 opacity-90">
                      Book a free consultation or trial session today!
                    </p>
                    
                    <div className="space-y-4">
                      <Button 
                        variant="gold" 
                        size="lg" 
                        className="w-full"
                        onClick={() => handleBooking("Free Trial")}
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Free Trial
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full border-white text-white hover:bg-white hover:text-black"
                        onClick={() => handleBooking("Schedule Tour")}
                      >
                        Schedule Tour
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Find Us</h2>
                    <div className="w-full h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-bull-gold mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive map coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={selectedService}
      />
    </div>
  );
};

export default ContactPage;