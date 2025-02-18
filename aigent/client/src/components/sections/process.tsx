import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Registrácia",
    description: "Vytvorte si účet a nastavte preferencie"
  },
  {
    number: "02",
    title: "Konfigurácia",
    description: "Prispôsobte AI podľa vašich potrieb"
  },
  {
    number: "03",
    title: "Integrácia",
    description: "Pripojte AI k vašim kanálom"
  },
  {
    number: "04",
    title: "Spustenie",
    description: "Začnite automatizovať predaj"
  }
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Ako to funguje</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Jednoduchý proces implementácie v 4 krokoch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
