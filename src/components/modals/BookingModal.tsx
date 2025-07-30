import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: `Your ${formData.service} session has been scheduled. We'll contact you soon to confirm details.`,
      });
      onClose();
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
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-foreground">
            <Calendar className="h-6 w-6 mr-2 text-bull-gold" />
            Book Your Session
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="service">Service Type</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Strength Training">Strength Training</SelectItem>
                <SelectItem value="Cardio Training">Cardio Training</SelectItem>
                <SelectItem value="Zumba Classes">Zumba Classes</SelectItem>
                <SelectItem value="Personal Training">Personal Training</SelectItem>
                <SelectItem value="Group Classes">Group Classes</SelectItem>
                <SelectItem value="Free Trial">Free Trial</SelectItem>
                <SelectItem value="Consultation">Free Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {trainerName && (
            <div>
              <Label htmlFor="trainer">Trainer</Label>
              <div className="flex items-center p-3 bg-muted rounded-md">
                <User className="h-4 w-4 mr-2 text-bull-gold" />
                <span className="font-medium">{trainerName}</span>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <Select value={formData.time} onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                <SelectTrigger>
                  <Clock className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:00">6:00 AM</SelectItem>
                  <SelectItem value="07:00">7:00 AM</SelectItem>
                  <SelectItem value="08:00">8:00 AM</SelectItem>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                  <SelectItem value="19:00">7:00 PM</SelectItem>
                  <SelectItem value="20:00">8:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="message">Additional Notes</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your fitness goals or any special requirements..."
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={3}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Book Session
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;