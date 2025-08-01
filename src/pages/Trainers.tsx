import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Clock, Users, Twitter, Facebook, Instagram, Linkedin, Dumbbell } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/modals/BookingModal";
import bullHero from "@/assets/bull-hero.jpg";

const TrainersPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const handleBookSession = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setIsBookingModalOpen(true);
  };

  const trainers = [
    {
      name: "Ranjeet Lama",
      specialty: "Bull Strength Coach",
      image: "./src/assets/trainer1.jpg",
      rating: 4.9,
      experience: "8+ Years",
      certifications: ["NASM-CPT", "Bull Power Certified"],
      bio: "Master of raw strength and power. Turns ordinary humans into unstoppable bulls."
    },
    {
      name: "Manisha Bhattarai",
      specialty: "Zumba Bull Instructor",
      image: "/placeholder.svg",
      rating: 4.8,
      experience: "6+ Years", 
      certifications: ["Zumba Pro", "Bull Dance Certified"],
      bio: "High-energy bull spirit in every dance move. Makes fitness feel like a celebration."
    },
    {
      name: "Manoj Pandey", 
      specialty: "Bull Transformation Coach",
      image: "./src/assets/trainer2.jpg",
      rating: 4.9,
      experience: "10+ Years",
      certifications: ["ACE-CPT", "Bull Body Specialist"],
      bio: "Specializes in complete bull transformations. Your personal metamorphosis expert."
    },
    {
      name: "Deepu Bhatta",
      specialty: "Cardio Bull Master", 
      image: "./src/assets/trainer3.jpg",
      rating: 4.7,
      experience: "7+ Years",
      certifications: ["HIIT Certified", "Bull Endurance Pro"],
      bio: "Cardio beast who builds bulls with unstoppable endurance and heart power."
    }
  ];

  const socialIcons = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section with Bull */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={bullHero} 
              alt="Bull Power" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-power opacity-80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="h-px bg-gradient-bull w-20" />
                <span className="mx-4 text-primary font-bold tracking-wider">MEET THE BULLS</span>
                <div className="h-px bg-gradient-bull w-20" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                BULL <span className="text-primary">TRAINERS</span> ELITE
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet our legendary bull trainers who will transform you into an unstoppable force of nature.
              </p>
            </div>

            {/* Trainers Grid - Circular Layout like Home */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {trainers.map((trainer, index) => (
                <div key={index} className="group text-center">
                  {/* Trainer Avatar */}
                  <div className="relative mb-6">
                    <div className="w-56 h-56 mx-auto relative">
                      <Avatar className="w-full h-full border-4 border-bull-red/20 group-hover:border-primary transition-all duration-300 group-hover:shadow-power">
                        <AvatarImage 
                          src={trainer.image} 
                          alt={trainer.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-3xl font-bold bg-gradient-bull text-white">
                          {trainer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Rating Badge */}
                      <div className="absolute -top-2 -right-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-power">
                        <Star className="h-4 w-4 mr-1" />
                        {trainer.rating}
                      </div>

                      {/* Bull Icon */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-bull p-3 rounded-full shadow-power">
                        <Dumbbell className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Trainer Info Card */}
                  <Card className="bg-card/80 backdrop-blur-sm border border-bull-red/20 group-hover:shadow-power transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{trainer.name}</h3>
                      <p className="text-primary font-bold mb-3">{trainer.specialty}</p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{trainer.bio}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <Badge variant="secondary" className="text-xs bg-bull-red/10 text-foreground">
                            {trainer.experience}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-1">
                          {trainer.certifications.map((cert, certIndex) => (
                            <Badge key={certIndex} variant="outline" className="text-xs border-bull-red/30 text-muted-foreground">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="flex justify-center space-x-3 mb-6">
                        {socialIcons.map((social, socialIndex) => (
                          <a
                            key={socialIndex}
                            href={social.href}
                            className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-power"
                          >
                            <social.icon className="h-4 w-4 text-muted-foreground hover:text-white" />
                          </a>
                        ))}
                      </div>

                      <Button 
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 hover:shadow-power font-semibold"
                        onClick={() => handleBookSession(trainer.name)}
                      >
                        Book Bull Session
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Bull Theme */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Card className="max-w-4xl mx-auto bg-gradient-bull p-12 border-0 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={bullHero} 
                    alt="Bull Power" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 text-white space-y-6">
                  <Dumbbell className="h-16 w-16 mx-auto" />
                  <h3 className="text-3xl md:text-4xl font-bold">Ready to Unleash Your Inner Bull?</h3>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Join the BigBull family and transform into the strongest version of yourself. 
                    Our elite trainers are waiting to guide your journey to greatness.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button 
                      variant="secondary"
                      size="lg" 
                      className="bg-white text-bull-dark hover:bg-bull-silver font-bold px-8 py-6 text-lg"
                      onClick={() => setIsBookingModalOpen(true)}
                    >
                      🔥 START YOUR BULL JOURNEY
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-bull-dark font-bold px-8 py-6 text-lg"
                      onClick={() => setIsBookingModalOpen(true)}
                    >
                      📞 Schedule Consultation
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType="Personal Training"
        trainerName={selectedTrainer}
      />
    </div>
  );
};

export default TrainersPage;