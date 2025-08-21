import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

const EstateQuiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "confidence",
      question: "How confident are you that everything you own will avoid probate? (1-10)",
      type: "range",
      required: true
    },
    {
      id: "pods_tods",
      question: "Do you have PODs and/or TODs on all bank accounts and titles?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "wealth_transfer",
      question: "Have you done wealth transfer planning to minimize or avoid taxes at distribution?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "retirement_taxes",
      question: "Would you like to minimize taxes in retirement?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "asset_protection",
      question: "Would you like to protect assets from a nursing home?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "investment_fees",
      question: "Do you know your internal fees on your current investments?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "wealth_distribution",
      question: "Would you like to establish wealth distribution guidelines for preservation purposes?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "simplify_retirement",
      question: "Would you like to simplify your retirement?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    },
    {
      id: "minimize_risk",
      question: "Would you minimize risk in your investments while improving potential returns and gains?",
      type: "select",
      options: ["Yes", "No", "Not Sure"],
      required: true
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Quiz Completed!",
      description: "Thank you for completing the estate planning assessment. Our team will review your responses.",
    });
  };

  const canProceed = answers[questions[currentQuestion]?.id];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Estate Planning Quiz</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Help us understand your financial planning needs
            </p>
          </div>

          <Card className="shadow-elegant-lg border-primary/10 animate-slide-in-left">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <HelpCircle className="w-5 h-5" />
                  <span className="font-medium">Question {currentQuestion + 1} of {questions.length}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Question */}
                <div className="animate-slide-in-right">
                  <Label className="text-xl font-medium text-foreground leading-relaxed block mb-6">
                    {questions[currentQuestion]?.question}
                  </Label>

                  {/* Answer Input */}
                  {questions[currentQuestion]?.type === "range" ? (
                    <div className="space-y-4">
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="Enter a number from 1-10"
                        className="h-14 text-lg border-primary/20 focus:border-primary/50 shadow-elegant-sm"
                        value={answers[questions[currentQuestion].id] || ""}
                        onChange={(e) => handleAnswer(e.target.value)}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground px-2">
                        <span>1 - Not confident</span>
                        <span>10 - Very confident</span>
                      </div>
                    </div>
                  ) : (
                    <Select 
                      value={answers[questions[currentQuestion].id] || ""} 
                      onValueChange={handleAnswer}
                    >
                      <SelectTrigger className="h-14 text-lg border-primary/20 focus:border-primary/50 shadow-elegant-sm">
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/10 shadow-elegant-lg">
                        {questions[currentQuestion]?.options?.map((option, index) => (
                          <SelectItem 
                            key={index} 
                            value={option}
                            className="text-lg py-3 focus:bg-primary/10 focus:text-primary"
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>

                  <Button
                    variant="hero"
                    onClick={nextQuestion}
                    disabled={!canProceed}
                    className="min-w-[120px]"
                  >
                    {currentQuestion === questions.length - 1 ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Complete
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 pt-4">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index <= currentQuestion 
                          ? "bg-primary shadow-glow" 
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EstateQuiz;