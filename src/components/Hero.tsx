import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star, Dumbbell } from "lucide-react";
import VideoModal from "@/components/modals/VideoModal";
import BookingModal from "@/components/modals/BookingModal";
import heroGym from "@/assets/hero-gym.jpg";
import heroZumba from "@/assets/hero-zumba.jpg";
import heroTrainer from "@/assets/hero-trainer.jpg";
import bullHero from "@/assets/bull-hero.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [animatedText, setAnimatedText] = useState({ first: false, second: false });

  const slides = [
    {
      image: bullHero,
      titleParts: ["TRAIN LIKE A BULL", "WALK LIKE A BEAST"],
      subtitle: "BIGBULL FITNESS POWER",
      description: "Transform into an unstoppable force. Where ordinary humans become legendary bulls through pure strength and determination.",
      cta: "🔥 START BULL TRANSFORMATION"
    },
    {
      image: heroZumba,
      titleParts: ["DANCE LIKE A BULL", "FEEL THE RHYTHM"],
      subtitle: "BULL ZUMBA CLASSES",
      description: "High-energy bull rhythm sessions that build endurance while having explosive fun. Feel the power in every move.",
      cta: "Join Bull Zumba"
    },
    {
      image: heroTrainer,
      titleParts: ["TRAIN LIKE ELITE", "BECOME THE CHAMPION"],
      subtitle: "PERSONAL BULL COACHING",
      description: "Work with certified bull trainers who forge champions. Your personal path to becoming an unstoppable bull warrior.",
      cta: "Book Bull Session"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Reset and start text animation when slide changes
  useEffect(() => {
    setAnimatedText({ first: false, second: false });
    
    const firstTimer = setTimeout(() => {
      setAnimatedText(prev => ({ ...prev, first: true }));
    }, 500);

    const secondTimer = setTimeout(() => {
      setAnimatedText(prev => ({ ...prev, second: true }));
    }, 1500);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleBooking = (service: string) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slide Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-power opacity-70" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div className="flex items-center mb-4">
                  <Dumbbell className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-bold tracking-wider text-sm">
                    {slide.subtitle}
                  </span>
                </div>
                
                <div className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-6 leading-tight min-h-[160px] md:min-h-[200px]">
                  <div className={`transition-all duration-1000 transform bg-gradient-to-r from-bull-gold via-yellow-400 to-bull-gold bg-clip-text text-transparent drop-shadow-2xl ${
                    animatedText.first ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.titleParts[0]}
                  </div>
                  <div className={`transition-all duration-1000 transform bg-gradient-to-r from-bull-silver via-white to-bull-silver bg-clip-text text-transparent drop-shadow-2xl ${
                    animatedText.second ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.titleParts[1]}
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-bull-silver/90 mb-8 leading-relaxed font-rajdhani font-medium tracking-wide backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-bull-gold/20">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-bull hover:shadow-power font-bold"
                    onClick={() => handleBooking(slide.cta)}
                  >
                    {slide.cta}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 text-bull-silver border-bull-silver hover:bg-bull-silver hover:text-bull-dark font-bold"
                    onClick={() => setIsVideoModalOpen(true)}
                    data-video={currentSlide}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Bull Power
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-bull-red/30 hover:bg-bull-red/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-power"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-bull-red/30 hover:bg-bull-red/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-power"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary scale-125 shadow-power" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-sm">
        <div className="flex items-center space-x-2 animate-bounce">
          <span>Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </div>
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="BigBull Fitness Bull Power Experience"
        videoIndex={currentSlide}
      />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={selectedService}
      />
    </section>
  );
};

export default Hero;