import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, BarChart } from "lucide-react";

const features = [
  {
    title: "Pokročilá AI",
    description: "Využíva najnovšie modely strojového učenia pre prirodzenú konverzáciu",
    icon: Brain
  },
  {
    title: "24/7 Dostupnosť",
    description: "Neustála komunikácia so zákazníkmi bez prestávky",
    icon: MessageSquare
  },
  {
    title: "Rýchle odpovede",
    description: "Okamžité odpovede na otázky zákazníkov",
    icon: Zap
  },
  {
    title: "Detailné analýzy",
    description: "Kompletné štatistiky a prehľady konverzií",
    icon: BarChart
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Funkcie</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Všetko čo potrebujete pre automatizáciu predaja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
