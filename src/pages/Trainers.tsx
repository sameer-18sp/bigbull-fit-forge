import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "@/components/modals/BookingModal";

const TrainersPage = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleBookSession = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setSelectedService("Personal Training");
    setIsBookingModalOpen(true);
  };

  const handleBookNow = () => {
    setSelectedService("Membership");
    setIsBookingModalOpen(true);
  };

  const handleViewSchedule = () => {
    navigate('/schedule');
  };

  const trainers = [
    {
      name: "Mike Johnson",
      specialty: "Strength Training",
      experience: "8 years",
      certifications: ["NASM-CPT", "CSCS"],
      image: "/placeholder.svg",
      bio: "Expert in powerlifting and strength conditioning with proven results."
    },
    {
      name: "Sarah Martinez",
      specialty: "Zumba Instructor",
      experience: "6 years",
      certifications: ["Zumba Basic", "Zumba Gold"],
      image: "/placeholder.svg",
      bio: "High-energy Zumba instructor who makes fitness fun and accessible."
    },
    {
      name: "David Chen",
      specialty: "Personal Training",
      experience: "10 years",
      certifications: ["ACE-CPT", "TRX"],
      image: "/placeholder.svg",
      bio: "Specializes in weight loss and functional movement patterns."
    },
    {
      name: "Lisa Rodriguez",
      specialty: "Cardio & HIIT",
      experience: "5 years",
      certifications: ["ACSM-CPT", "HIIT"],
      image: "/placeholder.svg",
      bio: "Creates challenging cardio workouts that burn calories and build endurance."
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
                <span className="mx-4 text-bull-gold font-semibold tracking-wider">OUR TEAM</span>
                <div className="h-px bg-gradient-to-r from-transparent via-bull-gold to-transparent w-20" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Our Expert
                <span className="text-transparent bg-clip-text bg-gradient-hero"> Trainers</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our certified trainers are passionate about helping you achieve your fitness goals with personalized guidance and expertise.
              </p>
            </div>

            {/* Trainers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {trainers.map((trainer, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-32 h-32 mx-auto md:mx-0 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-16 w-16 text-white" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{trainer.name}</h3>
                        <div className="text-bull-gold font-semibold mb-3">{trainer.specialty}</div>
                        <p className="text-muted-foreground mb-4">{trainer.bio}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-center md:justify-start">
                            <Clock className="h-4 w-4 text-bull-gold mr-2" />
                            <span className="text-sm text-muted-foreground">{trainer.experience} experience</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <Award className="h-4 w-4 text-bull-gold mr-2" />
                            <span className="text-sm text-muted-foreground">
                              {trainer.certifications.join(", ")}
                            </span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <Star className="h-4 w-4 text-bull-gold mr-2" />
                            <span className="text-sm text-muted-foreground">5.0 rating</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="hero" 
                          size="sm"
                          onClick={() => handleBookSession(trainer.name)}
                        >
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-power rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Start Training?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Book a session with our expert trainers and begin your transformation today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="text-lg px-8 py-6"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
                    onClick={handleViewSchedule}
                  >
                    View Schedule
                  </Button>
                </div>
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
        trainerName={selectedTrainer}
      />
    </div>
  );
};

export default TrainersPage;