import { Shield, Award, Clock, Users } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed MA contractor",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We respect your schedule",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Excellence in every detail",
  },
  {
    icon: Users,
    title: "100+ Happy Clients",
    description: "Massachusetts homeowners trust us",
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge) => (
        <div key={badge.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
          <div className="rounded-full bg-accent/10 p-4 mb-4">
            <badge.icon className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
          <p className="text-sm text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
