import { Phone, Lightbulb, FileText, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Consultation",
    description: "We listen to your goals and assess your space.",
  },
  {
    icon: Lightbulb,
    title: "Design Support",
    description: "Clear guidance on materials, finishes, and layout options.",
  },
  {
    icon: FileText,
    title: "Detailed Estimate",
    description: "Transparent pricing with no unexpected costs.",
  },
  {
    icon: Hammer,
    title: "On-Time Execution",
    description: "Organized job sites and punctual completion.",
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "Ensuring every detail meets your expectations.",
  },
];

export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Connection line for desktop */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ marginLeft: '10%', marginRight: '10%' }} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="rounded-full bg-accent p-6 mb-4 shadow-md relative z-10">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-20">
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
