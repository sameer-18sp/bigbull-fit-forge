import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Target, Calendar, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProgressTracker = () => {
  const { toast } = useToast();
  const [goals, setGoals] = useState({
    weight: { current: 70, target: 65, unit: "kg" },
    muscle: { current: 15, target: 20, unit: "%" },
    workouts: { current: 12, target: 20, unit: "sessions" }
  });

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const handleUpdateProgress = () => {
    toast({
      title: "Progress Updated! 🔥",
      description: "Your fitness journey is tracked. Keep pushing forward, Bull!",
    });
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-bull w-20" />
            <span className="mx-4 text-primary font-bold tracking-wider">TRACK YOUR POWER</span>
            <div className="h-px bg-gradient-bull w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            BULL <span className="text-primary">PROGRESS</span> TRACKER
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your transformation journey. Every rep counts, every goal matters.
          </p>
        </div>

        {/* Progress Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Weight Progress */}
          <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20 hover:shadow-power transition-all duration-300">
            <CardHeader className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-foreground">Weight Goal</CardTitle>
              <CardDescription>Target: {goals.weight.target}{goals.weight.unit}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{goals.weight.current}{goals.weight.unit}</div>
                <div className="text-sm text-muted-foreground">Current Weight</div>
              </div>
              <Progress 
                value={calculateProgress(goals.weight.current, goals.weight.target)} 
                className="h-3"
              />
              <div className="text-center text-sm font-semibold text-primary">
                {calculateProgress(goals.weight.current, goals.weight.target).toFixed(1)}% Complete
              </div>
            </CardContent>
          </Card>

          {/* Muscle Progress */}
          <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20 hover:shadow-power transition-all duration-300">
            <CardHeader className="text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-foreground">Muscle Mass</CardTitle>
              <CardDescription>Target: {goals.muscle.target}{goals.muscle.unit}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{goals.muscle.current}{goals.muscle.unit}</div>
                <div className="text-sm text-muted-foreground">Body Fat %</div>
              </div>
              <Progress 
                value={calculateProgress(goals.muscle.current, goals.muscle.target)} 
                className="h-3"
              />
              <div className="text-center text-sm font-semibold text-primary">
                {calculateProgress(goals.muscle.current, goals.muscle.target).toFixed(1)}% Complete
              </div>
            </CardContent>
          </Card>

          {/* Workout Progress */}
          <Card className="bg-card/80 backdrop-blur-sm border-bull-red/20 hover:shadow-power transition-all duration-300">
            <CardHeader className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-foreground">Monthly Workouts</CardTitle>
              <CardDescription>Target: {goals.workouts.target} {goals.workouts.unit}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{goals.workouts.current}</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
              <Progress 
                value={calculateProgress(goals.workouts.current, goals.workouts.target)} 
                className="h-3"
              />
              <div className="text-center text-sm font-semibold text-primary">
                {calculateProgress(goals.workouts.current, goals.workouts.target).toFixed(1)}% Complete
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Update Progress Form */}
        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-bull-red/20">
          <CardHeader className="text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-2xl text-foreground">Update Your Progress</CardTitle>
            <CardDescription>Keep your journey tracked and stay motivated</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="weight" className="text-foreground">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  placeholder="70"
                  className="bg-input border-bull-gray focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="muscle" className="text-foreground">Body Fat %</Label>
                <Input 
                  id="muscle" 
                  type="number" 
                  placeholder="15"
                  className="bg-input border-bull-gray focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="workouts" className="text-foreground">Workouts This Month</Label>
                <Input 
                  id="workouts" 
                  type="number" 
                  placeholder="12"
                  className="bg-input border-bull-gray focus:border-primary"
                />
              </div>
            </div>
            <Button 
              onClick={handleUpdateProgress}
              className="w-full bg-gradient-bull hover:shadow-power hover:scale-105 transition-all duration-300 font-bold text-lg py-6"
            >
              UPDATE PROGRESS 🏆
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressTracker;