import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Trainers", href: "/trainers" },
    { label: "Pricing", href: "/pricing" },
    { label: "BMI Calculator", href: "/bmi" },
    { label: "Contact", href: "/contact" }
  ];

  const services = [
    { label: "Strength Training", href: "/services#strength" },
    { label: "Cardio Training", href: "/services#cardio" },
    { label: "Zumba Classes", href: "/services#zumba" },
    { label: "Personal Training", href: "/services#personal" },
    { label: "Group Classes", href: "/services#group" },
    { label: "Functional Training", href: "/services#functional" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-bull-dark text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-hero p-3 rounded-xl">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">BigBull</h3>
                <p className="text-bull-gold">Fitness & Zumba</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your lifelong sanctuary for health and fitness. Join our community and transform your life through fitness.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-bull-gray hover:bg-gradient-hero p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-bull-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-bull-gold transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-bull-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-bull-gold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-bull-gold transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-bull-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-bull-gold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-bull-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Fitness Street<br />
                    Gym District, City 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-bull-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-bull-gold transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-bull-gold flex-shrink-0" />
                <a href="mailto:info@bigbullfitness.com" className="text-gray-300 hover:text-bull-gold transition-colors duration-300">
                  info@bigbullfitness.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-bull-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-hero rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for fitness tips, class schedules, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-bull-gold"
              />
              <Button variant="gold" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-bull-gray" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 BigBull Fitness Gym & Zumba. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-bull-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-bull-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-bull-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;