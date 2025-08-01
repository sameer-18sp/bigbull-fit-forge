import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ReceiptModal from "./ReceiptModal";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
  trainerName?: string;
}

const BookingModal = ({ isOpen, onClose, serviceType = "General", trainerName }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceType,
    trainer: trainerName || "",
    date: "",
    time: "",
    message: ""
  });
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const { toast } = useToast();

  const generateBookingId = () => {
    return `BB${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
  };

  const getServicePrice = (service: string) => {
    const prices: { [key: string]: number } = {
      "Strength Training": 2000,
      "Cardio Training": 1500,
      "Zumba Classes": 1200,
      "Personal Training": 2500,
      "Group Classes": 1000,
      "Free Trial": 0,
      "Consultation": 0,
      "Membership": 3000
    };
    return prices[service] || 1500;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Generate booking receipt data
    const receiptData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      trainer: formData.trainer,
      date: formData.date || "To be confirmed",
      time: formData.time || "To be confirmed",
      amount: getServicePrice(formData.service),
      bookingId: generateBookingId()
    };
    
    // Simulate API call
    setTimeout(() => {
      setBookingData(receiptData);
      setIsReceiptModalOpen(true);
      
      toast({
        title: "Bull Booking Confirmed! 🔥",
        description: `Your ${formData.service} session is booked. Receipt generated!`,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: serviceType,
        trainer: trainerName || "",
        date: "",
        time: "",
        message: ""
      });
      
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full bg-card border-bull-red/20">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-foreground">
            <Calendar className="h-6 w-6 mr-2 text-primary" />
            Book Your Bull Session
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-input border-bull-gray focus:border-primary"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-input border-bull-gray focus:border-primary"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-foreground">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-input border-bull-gray focus:border-primary"
              required
            />
          </div>
          
          <div>
            <Label className="text-foreground">Bull Service Type</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
              <SelectTrigger className="bg-input border-bull-gray">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Strength Training">Bull Strength Training - ₹2,000</SelectItem>
                <SelectItem value="Cardio Training">Cardio Beast Training - ₹1,500</SelectItem>
                <SelectItem value="Zumba Classes">Bull Zumba Classes - ₹1,200</SelectItem>
                <SelectItem value="Personal Training">Personal Bull Training - ₹2,500</SelectItem>
                <SelectItem value="Group Classes">Group Bull Classes - ₹1,000</SelectItem>
                <SelectItem value="Free Trial">Free Bull Trial - ₹0</SelectItem>
                <SelectItem value="Consultation">Free Bull Consultation - ₹0</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {trainerName && (
            <div>
              <Label htmlFor="trainer" className="text-foreground">Bull Trainer</Label>
              <div className="flex items-center p-3 bg-muted rounded-md border border-bull-red/20">
                <User className="h-4 w-4 mr-2 text-primary" />
                <span className="font-medium text-foreground">{trainerName}</span>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="text-foreground">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
                className="bg-input border-bull-gray focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="time" className="text-foreground">Preferred Time</Label>
              <Select value={formData.time} onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                <SelectTrigger className="bg-input border-bull-gray">
                  <Clock className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:00">6:00 AM - Early Bull</SelectItem>
                  <SelectItem value="07:00">7:00 AM - Morning Power</SelectItem>
                  <SelectItem value="08:00">8:00 AM - Bull Rush</SelectItem>
                  <SelectItem value="09:00">9:00 AM - Power Hour</SelectItem>
                  <SelectItem value="10:00">10:00 AM - Mid Morning</SelectItem>
                  <SelectItem value="17:00">5:00 PM - Evening Beast</SelectItem>
                  <SelectItem value="18:00">6:00 PM - Peak Power</SelectItem>
                  <SelectItem value="19:00">7:00 PM - Bull Prime</SelectItem>
                  <SelectItem value="20:00">8:00 PM - Night Warrior</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-foreground">Bull Goals & Notes</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your bull transformation goals or any special requirements..."
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={3}
              className="bg-input border-bull-gray focus:border-primary"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 border-bull-gray">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1 bg-gradient-bull font-bold">
              🔥 BOOK BULL SESSION
            </Button>
          </div>
        </form>
      </DialogContent>
      
      {/* Receipt Modal */}
      {bookingData && (
        <ReceiptModal
          isOpen={isReceiptModalOpen}
          onClose={() => setIsReceiptModalOpen(false)}
          bookingData={bookingData}
        />
      )}
    </Dialog>
  );
};

export default BookingModal;