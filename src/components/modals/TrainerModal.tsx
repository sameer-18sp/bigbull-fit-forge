import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Award, Calendar, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Video1 from "@/assets/videos/Video1.mp4";

interface TrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: {
    name: string;
    image: string;
    specialty: string;
    experience: string;
    certifications: string[];
    achievements: string[];
    achievementImages: string[];
    bio: string;
  };
}

const TrainerModal = ({ isOpen, onClose, trainer }: TrainerModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-bull-dark border-bull-gold/20">
        <div className="flex items-center justify-between p-6 border-b border-bull-gold/20">
          <DialogTitle className="text-2xl font-orbitron font-bold text-bull-gold">
            {trainer.name} - Profile
          </DialogTitle>
          <button
            onClick={onClose}
            className="text-bull-silver hover:text-bull-gold transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-80 object-cover rounded-lg border-2 border-bull-gold/30"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-bull-gold">{trainer.name}</h3>
              <p className="text-bull-silver font-rajdhani text-lg">{trainer.bio}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-bull-gold" />
                  <span className="text-bull-silver">Specialty: {trainer.specialty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-bull-gold" />
                  <span className="text-bull-silver">Experience: {trainer.experience}</span>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-orbitron font-bold text-bull-gold mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-bull-gold text-bull-gold">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-bull-gold mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2" />
              Achievements
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {trainer.achievements.map((achievement, index) => (
                <div key={index} className="bg-bull-gray/20 p-4 rounded-lg border border-bull-gold/20">
                  <p className="text-bull-silver font-rajdhani">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Images */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-bull-gold mb-4">Achievement Gallery</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {trainer.achievementImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-bull-gold/30 hover:border-bull-gold transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Training Videos */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-bull-gold mb-4 flex items-center">
              <Play className="h-6 w-6 mr-2" />
              Training Videos
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bull-gray/20 p-4 rounded-lg border border-bull-gold/20">
                <video 
                  className="w-full h-48 object-cover rounded-lg mb-3" 
                  controls
                  src={Video1}
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-bull-silver font-rajdhani">Strength Training Session</p>
              </div>
              <div className="bg-bull-gray/20 p-4 rounded-lg border border-bull-gold/20">
                <video 
                  className="w-full h-48 object-cover rounded-lg mb-3" 
                  controls
                  src={Video1}
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-bull-silver font-rajdhani">Personal Training Techniques</p>
              </div>
            </div>
          </div>

          {/* Book Session */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-gradient-bull hover:shadow-power font-orbitron font-bold"
              onClick={onClose}
            >
              Book Session with {trainer.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainerModal;