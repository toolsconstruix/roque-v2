import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image?: string;
}

export function TestimonialCard({ name, location, rating, text, service, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-start mb-4">
          <Quote className="h-8 w-8 text-accent/20 mr-2 flex-shrink-0" />
          <div className="flex-1">
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">{service}</p>
            <p className="text-base leading-relaxed mb-6">{text}</p>
            <div className="flex items-center">
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
