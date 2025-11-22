import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function VitalStatsSection() {
  const handleVitalCheckClick = () => {
    window.open("https://www.vitalchek.com/", "_blank");
  };

  return (
    <section id="vital-stats" className="py-24 px-4 bg-black dark:bg-black">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white dark:bg-card border-primary">
          <CardHeader>
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="w-10 h-10 text-primary" data-testid="icon-vital-stats" />
            </div>
            <CardTitle className="font-serif text-3xl text-center mb-4" data-testid="text-vital-stats-title">
              Don't Know Your Time of Birth?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground text-lg" data-testid="text-vital-stats-message">
              Your time of birth is essential for an accurate Human Design chart. If you don't have this information, you can obtain your vital statistics from the county in which you were born.
            </p>
            <p className="text-center text-muted-foreground" data-testid="text-vital-stats-note">
              VitalChek provides a convenient way to request certified vital records from vital statistics offices across the United States.
            </p>
            <div className="pt-4">
              <Button 
                onClick={handleVitalCheckClick}
                className="w-full rounded-full"
                size="lg"
                data-testid="button-vitalchek"
              >
                Visit VitalChek
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
