import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import VideoModal from "@/components/modals/VideoModal";
import BookingModal from "@/components/modals/BookingModal";
import heroGym from "@/assets/hero-gym.jpg";
import heroZumba from "@/assets/hero-zumba.jpg";
import heroTrainer from "@/assets/hero-trainer.jpg";
import bullHero from "@/assets/bull-hero.jpg";
import bullCircle from "@/assets/bull-circle.jpg";

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
      subtitle: "THE BULL TRANSFORMATION",
      description: "Unleash your inner beast with our intensive training programs. Build unstoppable strength, power, and determination.",
      cta: "START YOUR JOURNEY"
    },
    {
      image: heroZumba,
      titleParts: ["DANCE LIKE A BULL", "FEEL THE RHYTHM"],
      subtitle: "BULL ZUMBA CLASSES",
      description: "High-energy dance workouts that build endurance while having explosive fun. Feel the power in every move.",
      cta: "JOIN BULL ZUMBA"
    },
    {
      image: heroTrainer,
      titleParts: ["TRAIN LIKE ELITE", "BECOME THE CHAMPION"],
      subtitle: "PERSONAL BULL COACHING",
      description: "Work with certified trainers who forge champions. Your personal path to becoming an unstoppable warrior.",
      cta: "BOOK SESSION"
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
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl">
                
                <div className="flex items-center mb-6">
                  <img src={bullCircle} alt="BigBull Logo" className="h-8 w-8 mr-3 rounded-full" />
                  <span className="text-bull-red font-bold tracking-[0.2em] text-lg uppercase">
                    {slide.subtitle}
                  </span>
                </div>
                
                <div className="mb-8">
                  <div className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[0.9] tracking-tight ${
                    animatedText.first ? 'opacity-100 translate-y-0 animate-text-reveal' : 'opacity-0 translate-y-16'
                  } transition-all duration-1000 transform`}>
                    <div className="text-white drop-shadow-2xl font-sans relative">
                      <div className="absolute inset-0 bg-gradient-premium bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                        {slide.titleParts[0]}
                      </div>
                      {slide.titleParts[0]}
                    </div>
                  </div>
                  <div className={`text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight ${
                    animatedText.second ? 'opacity-100 translate-y-0 animate-text-reveal' : 'opacity-0 translate-y-16'
                  } transition-all duration-1000 transform delay-500`}>
                    <div className="text-bull-gold drop-shadow-2xl font-sans relative animate-bull-power">
                      <div className="absolute inset-0 bg-gradient-bull bg-clip-text text-transparent animate-shimmer">
                        {slide.titleParts[1]}
                      </div>
                      {slide.titleParts[1]}
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium max-w-2xl">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="bg-bull-red hover:bg-bull-red/90 text-white font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105 shadow-xl"
                    onClick={() => handleBooking(slide.cta)}
                  >
                    {slide.cta}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300"
                    onClick={() => setIsVideoModalOpen(true)}
                    data-video={currentSlide}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    WATCH VIDEO
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