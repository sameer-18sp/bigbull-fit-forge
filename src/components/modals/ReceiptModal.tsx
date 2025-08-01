import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Printer, Calendar, User, MapPin, CreditCard, Receipt } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bullLogo from "@/assets/bull-circle.jpg";

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    trainer?: string;
    date: string;
    time: string;
    amount: number;
    bookingId: string;
  };
}

const ReceiptModal = ({ isOpen, onClose, bookingData }: ReceiptModalProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReceiptId = () => {
    return `BB${Date.now().toString().slice(-8)}`;
  };

  const handleDownloadReceipt = async () => {
    setIsGenerating(true);
    
    // Simulate receipt generation
    setTimeout(() => {
      const receiptContent = generateReceiptHTML();
      const blob = new Blob([receiptContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `BigBull_Receipt_${bookingData.bookingId}.html`;
      link.click();
      URL.revokeObjectURL(url);
      
      setIsGenerating(false);
      toast({
        title: "Receipt Downloaded! 📄",
        description: "Your BigBull Fitness receipt has been downloaded successfully.",
      });
    }, 1500);
  };

  const handlePrintReceipt = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(generateReceiptHTML());
      printWindow.document.close();
      printWindow.print();
      
      toast({
        title: "Receipt Ready to Print! 🖨️",
        description: "Your BigBull Fitness receipt is ready for printing.",
      });
    }
  };

  const generateReceiptHTML = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>BigBull Fitness - Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #e53e3e; padding-bottom: 20px; margin-bottom: 20px; }
        .logo { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 10px; }
        .company-name { font-size: 24px; font-weight: bold; color: #e53e3e; margin: 0; }
        .tagline { color: #666; margin: 5px 0; }
        .receipt-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .row { display: flex; justify-content: space-between; margin: 10px 0; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; }
        .total { border-top: 2px solid #e53e3e; padding-top: 10px; margin-top: 20px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        .bull-theme { color: #e53e3e; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 class="company-name">BIGBULL FITNESS</h1>
        <p class="tagline">Gym • Fitness • Zumba</p>
        <div style="margin-top: 15px;">
          <strong class="bull-theme">BOOKING RECEIPT</strong>
        </div>
      </div>
      
      <div class="receipt-details">
        <div class="row">
          <span class="label">Receipt ID:</span>
          <span class="value bull-theme">${generateReceiptId()}</span>
        </div>
        <div class="row">
          <span class="label">Booking ID:</span>
          <span class="value">${bookingData.bookingId}</span>
        </div>
        <div class="row">
          <span class="label">Date:</span>
          <span class="value">${new Date().toLocaleDateString()}</span>
        </div>
        <div class="row">
          <span class="label">Customer Name:</span>
          <span class="value">${bookingData.name}</span>
        </div>
        <div class="row">
          <span class="label">Email:</span>
          <span class="value">${bookingData.email}</span>
        </div>
        <div class="row">
          <span class="label">Phone:</span>
          <span class="value">${bookingData.phone}</span>
        </div>
        <div class="row">
          <span class="label">Service:</span>
          <span class="value">${bookingData.service}</span>
        </div>
        ${bookingData.trainer ? `
        <div class="row">
          <span class="label">Trainer:</span>
          <span class="value">${bookingData.trainer}</span>
        </div>
        ` : ''}
        <div class="row">
          <span class="label">Date & Time:</span>
          <span class="value">${bookingData.date} at ${bookingData.time}</span>
        </div>
        
        <div class="total">
          <div class="row">
            <span class="label bull-theme">Total Amount:</span>
            <span class="value bull-theme">₹${bookingData.amount}</span>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>BigBull Fitness Gym & Zumba</strong></p>
        <p>Contact: +91-9876543210 | Email: info@bigbullfitness.com</p>
        <p>Thank you for choosing BigBull Fitness! 💪</p>
      </div>
    </body>
    </html>
    `;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-bull-red/20">
        <DialogHeader>
          <DialogTitle className="text-center text-foreground flex items-center justify-center gap-2">
            <Receipt className="h-5 w-5 text-primary" />
            Booking Receipt
          </DialogTitle>
        </DialogHeader>
        
        <Card className="bg-gradient-subtle border-bull-red/20">
          <CardContent className="p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-bull flex items-center justify-center">
                <Receipt className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-primary text-lg">BIGBULL FITNESS</h3>
              <p className="text-sm text-muted-foreground">Booking Confirmation</p>
            </div>

            <Separator className="my-4 bg-bull-red/20" />

            {/* Booking Details */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Customer:
                </span>
                <span className="text-sm font-semibold text-foreground">{bookingData.name}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Service:
                </span>
                <span className="text-sm font-semibold text-foreground">{bookingData.service}</span>
              </div>

              {bookingData.trainer && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Trainer:</span>
                  <span className="text-sm font-semibold text-primary">{bookingData.trainer}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date & Time:
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {bookingData.date} at {bookingData.time}
                </span>
              </div>

              <Separator className="my-3 bg-bull-red/20" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Total Amount:
                </span>
                <span className="text-lg font-bold text-primary">₹{bookingData.amount}</span>
              </div>
            </div>

            <Separator className="my-4 bg-bull-red/20" />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleDownloadReceipt}
                disabled={isGenerating}
                className="w-full bg-gradient-bull hover:shadow-power font-semibold"
              >
                <Download className="h-4 w-4 mr-2" />
                {isGenerating ? "Generating..." : "Download Receipt"}
              </Button>
              
              <Button
                onClick={handlePrintReceipt}
                variant="outline"
                className="w-full border-bull-red/50 hover:bg-bull-red/10"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Receipt
              </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Receipt ID: {generateReceiptId()}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptModal;