import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Star, Award, Calendar } from "lucide-react";
import TrainerModal from "@/components/modals/TrainerModal";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";

const HomeTrainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);

  const trainers = [
    {
      name: "Mike Johnson",
      image: trainer1,
      specialty: "Strength Training",
      experience: "8 Years",
      rating: 4.9,
      certifications: ["NASM-CPT", "CrossFit Level 2", "Nutrition Specialist"],
      achievements: [
        "Regional Powerlifting Champion 2023",
        "Trained 500+ successful transformations",
        "Certified Nutrition Specialist",
        "Featured in Fitness Magazine"
      ],
      achievementImages: [trainer1, trainer2, trainer3],
      bio: "Mike is a dedicated strength training specialist who has helped hundreds of clients achieve their fitness goals through scientifically-backed training methods."
    },
    {
      name: "Sarah Williams",
      image: trainer2,
      specialty: "Zumba & Cardio",
      experience: "6 Years",
      rating: 4.8,
      certifications: ["Zumba Certified", "ACSM-CPT", "Group Fitness"],
      achievements: [
        "Zumba Master Trainer Certification",
        "Led 1000+ group fitness classes",
        "International Zumba Convention Speaker",
        "Community Fitness Award Winner"
      ],
      achievementImages: [trainer2, trainer1, trainer3],
      bio: "Sarah brings energy and passion to every Zumba class, helping clients fall in love with fitness through dance and movement."
    },
    {
      name: "David Chen",
      image: trainer3,
      specialty: "Functional Training",
      experience: "10 Years",
      rating: 4.9,
      certifications: ["FMS Certified", "TRX Instructor", "Olympic Lifting"],
      achievements: [
        "Former Olympic Training Team Member",
        "Functional Movement Specialist",
        "Published Fitness Research",
        "Master Trainer Certification"
      ],
      achievementImages: [trainer3, trainer1, trainer2],
      bio: "David specializes in functional movement patterns that translate to real-world strength and mobility improvements."
    }
  ];

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
    setIsTrainerModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-bull-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-bull w-20" />
            <span className="mx-4 text-bull-gold font-orbitron font-bold tracking-wider text-sm">MEET THE BULLS</span>
            <div className="h-px bg-gradient-bull w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-bull-gold mb-6">
            WORLD CLASS <span className="text-bull-silver">BULL TRAINERS</span>
          </h2>
          <p className="text-xl text-bull-silver/90 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            Meet our expert trainers who will guide you through your fitness journey with personalized attention and professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleTrainerClick(trainer)}
            >
              <div className="w-48 h-48 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-bull-gold/30 group-hover:border-bull-gold transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-power opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-orbitron font-bold text-bull-gold mb-1 group-hover:text-yellow-400 transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-bull-silver text-sm font-rajdhani">{trainer.specialty}</p>
                <div className="flex items-center justify-center mt-2 space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-bull-silver text-sm font-rajdhani">{trainer.rating}</span>
                </div>
                <p className="text-bull-silver/70 text-xs font-rajdhani mt-1">{trainer.experience} Experience</p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-bull opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="bg-gradient-bull hover:shadow-power font-orbitron font-bold px-8 py-6"
          >
            <Users className="h-5 w-5 mr-2" />
            View All Trainers
          </Button>
        </div>
      </div>
      
      {selectedTrainer && (
        <TrainerModal
          isOpen={isTrainerModalOpen}
          onClose={() => setIsTrainerModalOpen(false)}
          trainer={selectedTrainer}
        />
      )}
    </section>
  );
};

export default HomeTrainers;