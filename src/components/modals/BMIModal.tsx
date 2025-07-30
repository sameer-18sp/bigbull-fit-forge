import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Scale, TrendingUp } from "lucide-react";
import { useState } from "react";

interface BMIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BMIModal = ({ isOpen, onClose }: BMIModalProps) => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activityLevel: ""
  });
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    description: string;
    color: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100; // Convert cm to meters
    
    if (weight && height) {
      const bmi = weight / (height * height);
      let category = "";
      let description = "";
      let color = "";
      
      if (bmi < 18.5) {
        category = "Underweight";
        description = "You may need to gain some weight. Consider consulting with our nutritionists.";
        color = "text-blue-500";
      } else if (bmi < 25) {
        category = "Normal Weight";
        description = "Great! You're in the healthy weight range. Keep up the good work!";
        color = "text-green-500";
      } else if (bmi < 30) {
        category = "Overweight";
        description = "You may benefit from our weight management programs.";
        color = "text-yellow-500";
      } else {
        category = "Obese";
        description = "Our trainers can help you achieve your weight loss goals safely.";
        color = "text-red-500";
      }
      
      setResult({
        bmi: parseFloat(bmi.toFixed(1)),
        category,
        description,
        color
      });
    }
  };

  const resetForm = () => {
    setFormData({
      gender: "",
      age: "",
      weight: "",
      height: "",
      activityLevel: ""
    });
    setResult(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-foreground">
            <Calculator className="h-6 w-6 mr-2 text-bull-gold" />
            BMI Calculator
          </DialogTitle>
        </DialogHeader>
        
        {!result ? (
          <form onSubmit={calculateBMI} className="space-y-4">
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="70"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="175"
                value={formData.height}
                onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={formData.activityLevel} onValueChange={(value) => setFormData(prev => ({ ...prev, activityLevel: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                  <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="very">Very Active (hard exercise 6-7 days/week)</SelectItem>
                  <SelectItem value="extremely">Extremely Active (physical job + exercise)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="hero" className="flex-1">
                Calculate BMI
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-gradient-hero rounded-2xl p-6 text-white">
              <Scale className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{result.bmi}</div>
              <div className="text-lg opacity-90">Your BMI</div>
            </div>
            
            <div>
              <div className={`text-2xl font-bold mb-2 ${result.color}`}>
                {result.category}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                BMI Categories
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Underweight:</span>
                  <span className="text-blue-500">&lt; 18.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Normal:</span>
                  <span className="text-green-500">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Overweight:</span>
                  <span className="text-yellow-500">25 - 29.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Obese:</span>
                  <span className="text-red-500">&gt; 30</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={resetForm} className="flex-1">
                Calculate Again
              </Button>
              <Button variant="hero" onClick={onClose} className="flex-1">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BMIModal;