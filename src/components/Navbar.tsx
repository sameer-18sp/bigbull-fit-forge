import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/modals/BookingModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleJoinNow = () => {
    setIsBookingModalOpen(true);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Trainers", href: "/trainers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">BigBull</h1>
              <p className="text-xs text-muted-foreground">Fitness & Zumba</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              size="sm"
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