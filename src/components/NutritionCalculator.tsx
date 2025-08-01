import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Apple, Zap, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NutritionCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "",
    activity: "",
    goal: ""
  });
  const [results, setResults] = useState<any>(null);

  const calculateNutrition = () => {
    if (!formData.age || !formData.weight || !formData.height || !formData.gender || !formData.activity || !formData.goal) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your nutrition needs.",
        variant: "destructive"
      });
      return;
    }

    // Basic BMR calculation
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseFloat(formData.age);
    
    let bmr;
    if (formData.gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Activity multiplier
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      extreme: 1.9
    };

    const tdee = bmr * activityMultipliers[formData.activity];
    
    // Goal adjustment
    let calories = tdee;
    if (formData.goal === "lose") calories -= 500;
    if (formData.goal === "gain") calories += 500;

    // Macronutrients
    const protein = (calories * 0.3) / 4; // 30% of calories, 4 cal/g
    const carbs = (calories * 0.4) / 4;   // 40% of calories, 4 cal/g
    const fats = (calories * 0.3) / 9;    // 30% of calories, 9 cal/g

    setResults({
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
      bmr: Math.round(bmr)
    });

    toast({
      title: "Nutrition Plan Calculated! 🔥",
      description: "Your personalized bull nutrition plan is ready!",
    });
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-bull w-20" />
            <span className="mx-4 text-primary font-bold tracking-wider">FUEL THE BULL</span>
            <div className="h-px bg-gradient-bull w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            NUTRITION <span className="text-primary">CALCULATOR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your perfect nutrition plan. Feed the beast within with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20">
            <CardHeader className="text-center">
              <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-2xl text-foreground">Bull Nutrition Calculator</CardTitle>
              <CardDescription>Enter your details for personalized nutrition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-foreground">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="bg-input border-bull-gray focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="text-foreground">Weight (kg)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    className="bg-input border-bull-gray focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="height" className="text-foreground">Height (cm)</Label>
                <Input 
                  id="height" 
                  type="number" 
                  placeholder="175"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                  className="bg-input border-bull-gray focus:border-primary"
                />
              </div>

              <div>
                <Label className="text-foreground">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                  <SelectTrigger className="bg-input border-bull-gray">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground">Activity Level</Label>
                <Select value={formData.activity} onValueChange={(value) => setFormData({...formData, activity: value})}>
                  <SelectTrigger className="bg-input border-bull-gray">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (desk job)</SelectItem>
                    <SelectItem value="light">Light exercise (1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate exercise (3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                    <SelectItem value="extreme">Extreme (2x/day, intense)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground">Goal</Label>
                <Select value={formData.goal} onValueChange={(value) => setFormData({...formData, goal: value})}>
                  <SelectTrigger className="bg-input border-bull-gray">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose">Lose weight</SelectItem>
                    <SelectItem value="maintain">Maintain weight</SelectItem>
                    <SelectItem value="gain">Gain muscle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateNutrition}
                className="w-full bg-gradient-bull hover:shadow-power hover:scale-105 transition-all duration-300 font-bold text-lg py-6"
              >
                CALCULATE BULL NUTRITION 🔥
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results ? (
            <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20">
              <CardHeader className="text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-2xl text-foreground">Your Bull Nutrition Plan</CardTitle>
                <CardDescription>Daily targets for maximum gains</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Daily Calories */}
                <div className="text-center p-6 bg-gradient-bull rounded-xl">
                  <div className="text-white">
                    <Zap className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-3xl font-bold">{results.calories}</div>
                    <div className="text-sm">Daily Calories</div>
                  </div>
                </div>

                {/* Macronutrients */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-bull-red/10 rounded-lg border border-bull-red/20">
                    <div className="text-2xl font-bold text-primary">{results.protein}g</div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center p-4 bg-bull-silver/10 rounded-lg border border-bull-silver/20">
                    <div className="text-2xl font-bold text-foreground">{results.carbs}g</div>
                    <div className="text-sm text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center p-4 bg-bull-gray/20 rounded-lg border border-bull-gray/40">
                    <div className="text-2xl font-bold text-foreground">{results.fats}g</div>
                    <div className="text-sm text-muted-foreground">Fats</div>
                  </div>
                </div>

                {/* BMR */}
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-lg font-semibold text-foreground">Base Metabolic Rate</div>
                  <div className="text-xl font-bold text-primary">{results.bmr} calories</div>
                </div>

                {/* Nutrition Tips */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Apple className="h-4 w-4 text-primary mr-2" />
                    Bull Nutrition Tips
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Eat protein with every meal for muscle growth</li>
                    <li>• Stay hydrated - aim for 3-4 liters daily</li>
                    <li>• Time carbs around workouts for energy</li>
                    <li>• Include healthy fats for hormone production</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20 flex items-center justify-center">
              <CardContent className="text-center p-12">
                <Calculator className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Calculate?</h3>
                <p className="text-muted-foreground">
                  Fill in your details to get your personalized bull nutrition plan
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default NutritionCalculator;