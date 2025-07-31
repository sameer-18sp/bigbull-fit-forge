import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/modals/BookingModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinNow = () => {
    setIsBookingModalOpen(true);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Trainers", href: "/trainers" },
    { label: "Packages", href: "/pricing" },
    { label: "Programs", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-purple-400/20 shadow-2xl shadow-purple-400/10" 
        : "bg-gradient-to-r from-background/90 via-background/80 to-background/90 backdrop-blur-md"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-hero p-3 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
              <Dumbbell className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-2xl bg-gradient-hero bg-clip-text text-transparent">BigBull</h1>
              <p className="text-sm text-muted-foreground font-medium">Fitness & Zumba</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-purple-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-hero after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              size="lg"
              className="bg-gradient-hero hover:shadow-glow hover:scale-105 transition-all duration-300 px-6 py-2 rounded-xl font-semibold"
              onClick={handleJoinNow}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              className="w-full mt-4"
              onClick={handleJoinNow}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType="Membership"
      />
    </nav>
  );
};

export default Navbar;