import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import heroZumba from "@/assets/hero-zumba.jpg";
import heroTrainer from "@/assets/hero-trainer.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroGym,
      title: "Transform Your Body",
      subtitle: "BIGBULL FITNESS GYM",
      description: "Your lifelong sanctuary for health and fitness. Build strength, endurance, and confidence.",
      cta: "Start Your Journey"
    },
    {
      image: heroZumba,
      title: "Dance Your Way to Fitness",
      subtitle: "ZUMBA CLASSES",
      description: "Burn calories while having fun! High-energy Zumba sessions that boost your mood and health.",
      cta: "Join Zumba"
    },
    {
      image: heroTrainer,
      title: "Expert Personal Training",
      subtitle: "PROFESSIONAL GUIDANCE",
      description: "Work with certified trainers who will help you achieve your fitness goals safely and effectively.",
      cta: "Book Session"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-bull-gold mr-2" />
                  <span className="text-bull-gold font-semibold tracking-wider text-sm">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    {slide.cta}
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-black">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Video
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
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
                ? "bg-bull-gold scale-125" 
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
    </section>
  );
};

export default Hero;