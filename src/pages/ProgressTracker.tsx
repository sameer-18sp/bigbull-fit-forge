import Navbar from "@/components/Navbar";
import ProgressTracker from "@/components/ProgressTracker";
import Footer from "@/components/Footer";

const ProgressTrackerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProgressTracker />
      </main>
      <Footer />
    </div>
  );
};

export default ProgressTrackerPage;