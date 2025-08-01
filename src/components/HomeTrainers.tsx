import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/modals/BookingModal";

const HomeTrainers = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const handleBookSession = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setIsBookingModalOpen(true);
  };

  const trainers = [
    {
      name: "Ranjeet Lama",
      specialty: "Gym Trainer",
      image: "./src/assets/trainer1.jpg",
      rating: 4.9,
      experience: "8+ Years",
      certifications: ["NASM-CPT", "Strength Training"]
    },
    {
      name: "Manoj Pandey", 
      specialty: "Aerobics Instructor",
      image: "./src/assets/trainer2.jpg",
      rating: 4.8,
      experience: "6+ Years", 
      certifications: ["ACE Certified", "Aerobics Specialist"]
    },
    {
      name: "Deepu Bhatta",
      specialty: "Weights Trainer", 
      image: "./src/assets/trainer3.jpg",
      rating: 4.9,
      experience: "10+ Years",
      certifications: ["CSCS", "Olympic Lifting"]
    }
  ];

  const socialIcons = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20" />
            <span className="mx-4 text-emerald-400 font-semibold tracking-wider">GETTING INTO SHAPE</span>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WORLD CLASS <span className="text-emerald-400">TRAINERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our expert trainers who will guide you through your fitness journey with personalized attention and professional expertise.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <div key={index} className="group text-center">
              {/* Trainer Avatar */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto relative">
                  <Avatar className="w-full h-full border-4 border-emerald-400/20 group-hover:border-emerald-400 transition-all duration-300">
                    <AvatarImage 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-hero text-white">
                      {trainer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Rating Badge */}
                  <div className="absolute -top-2 -right-2 bg-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {trainer.rating}
                  </div>
                </div>
              </div>

              {/* Trainer Info Card */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 group-hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-emerald-400 font-semibold mb-4">{trainer.specialty}</p>
                
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {trainer.experience}
                  </Badge>
                  {trainer.certifications.map((cert, certIndex) => (
                    <Badge key={certIndex} variant="outline" className="text-xs mx-1">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3 mb-6">
                  {socialIcons.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="w-10 h-10 bg-muted hover:bg-emerald-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="h-4 w-4 text-muted-foreground hover:text-black" />
                    </a>
                  ))}
                </div>

                <Button 
                  variant="outline"
                  className="w-full group-hover:bg-emerald-400 group-hover:text-black group-hover:border-emerald-400 transition-all duration-300"
                  onClick={() => handleBookSession(trainer.name)}
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType="Personal Training"
        trainerName={selectedTrainer}
      />
    </section>
  );
};

export default HomeTrainers;