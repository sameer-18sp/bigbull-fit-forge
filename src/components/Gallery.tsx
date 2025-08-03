import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import gym images
import heroGym from "@/assets/hero-gym.jpg";
import heroZumba from "@/assets/hero-zumba.jpg";
import heroTrainer from "@/assets/hero-trainer.jpg";
import bullHero from "@/assets/bull-hero.jpg";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: bullHero, title: "Bull Power Training", category: "Strength" },
    { src: heroGym, title: "Modern Equipment", category: "Equipment" },
    { src: heroZumba, title: "Zumba Classes", category: "Cardio" },
    { src: heroTrainer, title: "Personal Training", category: "Training" },
    { src: trainer1, title: "Expert Trainers", category: "Team" },
    { src: trainer2, title: "Group Sessions", category: "Classes" },
    { src: trainer3, title: "Functional Training", category: "Training" },
    { src: bullHero, title: "Bull Transformation", category: "Results" }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="py-20 bg-bull-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-bull w-20" />
            <span className="mx-4 text-bull-gold font-orbitron font-bold tracking-wider text-sm">OUR ENVIRONMENT</span>
            <div className="h-px bg-gradient-bull w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-bull-gold mb-6">
            GALLERY <span className="text-bull-silver">SHOWCASE</span>
          </h2>
          <p className="text-xl text-bull-silver/90 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            Take a look at our state-of-the-art facilities, equipment, and the amazing transformations happening at BigBull Fitness.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-rajdhani font-medium">{image.category}</p>
                  <p className="text-xs text-bull-gold">{image.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-bull-gold/50 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="bg-gradient-bull hover:shadow-power font-orbitron font-bold px-8 py-6"
          >
            <Dumbbell className="h-5 w-5 mr-2" />
            View More Photos
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-bull-gold transition-colors z-60"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-bull-gold transition-colors z-60"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-bull-gold transition-colors z-60"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh] mx-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-orbitron font-bold">{selectedImage.title}</h3>
              <p className="text-bull-gold text-sm font-rajdhani">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;