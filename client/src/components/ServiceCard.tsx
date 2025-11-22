import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  bookingLink?: string;
  bulletPoints?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, price, bookingLink = "#", bulletPoints }: ServiceCardProps) {
  const handleBookingClick = () => {
    console.log(`Booking clicked for ${title}`);
    if (bookingLink !== "#") {
      window.open(bookingLink, '_blank');
    }
  };

  return (
    <Card 
      className="hover-elevate transition-all duration-300 hover:translate-y-[-4px] border-primary bg-card h-full flex flex-col"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="w-10 h-10 text-primary" data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`} />
        </div>
        <CardTitle className="font-serif text-2xl" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2 mb-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="-mb-2.5">
        <Button 
          onClick={handleBookingClick}
          className="w-full rounded-full"
          variant="default"
          data-testid={`button-book-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Book Now - {price}
        </Button>
      </CardFooter>
    </Card>
  );
}
