import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HomeTrainers from "@/components/HomeTrainers";
import FeeStructure from "@/components/FeeStructure";
import Testimonials from "@/components/Testimonials";
import ProgressTracker from "@/components/ProgressTracker";
import WorkoutPlans from "@/components/WorkoutPlans";
import NutritionCalculator from "@/components/NutritionCalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkoutPlans />
        <HomeTrainers />
        <NutritionCalculator />
        <FeeStructure />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
