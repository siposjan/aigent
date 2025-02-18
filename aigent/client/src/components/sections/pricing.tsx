import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "499€",
    description: "Pre malé firmy",
    features: [
      "1 AI asistent",
      "100 konverzácií mesačne",
      "Základné analýzy",
      "Email podpora"
    ]
  },
  {
    name: "Pro",
    price: "1499€",
    description: "Pre rastúce tímy",
    features: [
      "3 AI asistenti",
      "500 konverzácií mesačne",
      "Pokročilé analýzy",
      "Prioritná podpora"
    ]
  },
  {
    name: "Enterprise",
    price: "Individuálne",
    description: "Pre veľké spoločnosti",
    features: [
      "Neobmedzení asistenti",
      "Neobmedzené konverzácie",
      "Custom funkcie",
      "24/7 podpora"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Cenník</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Vyberte si plán, ktorý najlepšie vyhovuje vašim potrebám
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className="relative">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-2xl font-bold">{plan.price}</p>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                  Vybrať plán
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}