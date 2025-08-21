import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const MeetingsOverview = () => {
  const { toast } = useToast();
  const [responses, setResponses] = useState<Record<string, string>>({});

  const meetings = [
    {
      id: "legal",
      number: 2,
      title: "Legal Strategy Session",
      description: "This session will educate you on different legal strategies that can help you and your family",
      prompt: "Please describe what you would like to accomplish in this session",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      id: "tax",
      number: 3,
      title: "Tax Strategy Session", 
      description: "In this session, we'll review your current tax strategy and future opportunities for tax reduction.",
      prompt: "What would you like to accomplish in this area?",
      icon: Calculator,
      color: "bg-green-500"
    },
    {
      id: "financial",
      number: 4,
      title: "Financial Strategy Session",
      description: "This session will focus on income strategy, investments, and your overall retirement financial picture.",
      prompt: "What goals do you have for financial planning?",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  const handleResponseChange = (meetingId: string, value: string) => {
    setResponses({
      ...responses,
      [meetingId]: value
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Responses Submitted!",
      description: "Your meeting preferences have been saved. Todd will prepare accordingly.",
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Upcoming Meetings Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Prepare for your personalized strategy sessions with Todd Civiello
            </p>
          </div>

          {/* Meetings Cards */}
          <div className="space-y-8 mb-12">
            {meetings.map((meeting, index) => (
              <Card 
                key={meeting.id} 
                className="shadow-elegant-lg border-primary/10 animate-slide-in-left hover:shadow-elegant-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${meeting.color} flex items-center justify-center text-white font-bold text-lg shadow-elegant-sm`}>
                      {meeting.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                        {meeting.title}
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <Calendar className="w-3 h-3 mr-1" />
                          Upcoming
                        </Badge>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {meeting.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="text-primary font-medium">
                      {meeting.prompt}
                    </div>
                    
                    <Textarea
                      placeholder="Share your thoughts and goals..."
                      className="min-h-[120px] border-primary/20 focus:border-primary/50 shadow-elegant-sm resize-none"
                      value={responses[meeting.id] || ""}
                      onChange={(e) => handleResponseChange(meeting.id, e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Submit Section */}
          <Card className="shadow-elegant-lg border-primary/10 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="max-w-md mx-auto space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ready to Submit Your Preferences?
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Your responses will help Todd prepare personalized strategies for each session.
                </p>

                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleSubmit}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  Submit Your Responses to Todd
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Takes 2 minutes
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    Personalized sessions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Import the missing icons
import { Calculator, TrendingUp } from "lucide-react";

export default MeetingsOverview;