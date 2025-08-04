import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HomeTrainers from "@/components/HomeTrainers";
import Gallery from "@/components/Gallery";
import FeeStructure from "@/components/FeeStructure";
import Testimonials from "@/components/Testimonials";
import WorkoutPlans from "@/components/WorkoutPlans";
import NutritionCalculator from "@/components/NutritionCalculator";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <Hero />
        <ParallaxSection speed={0.3}>
          <About />
        </ParallaxSection>
        <Services />
        <WorkoutPlans />
        <ParallaxSection speed={0.2}>
          <HomeTrainers />
        </ParallaxSection>
        <Gallery />
        <NutritionCalculator />
        <ParallaxSection speed={0.1}>
          <FeeStructure />
        </ParallaxSection>
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
