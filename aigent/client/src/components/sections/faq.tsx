import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ako funguje AI asistent?",
    answer: "Náš AI asistent využíva pokročilé modely strojového učenia pre prirodzenú konverzáciu so zákazníkmi. Dokáže odpovedať na otázky, kvalifikovať potenciálnych zákazníkov a dohodnúť stretnutia."
  },
  {
    question: "Koľko času trvá implementácia?",
    answer: "Implementácia je rýchla a jednoduchá. Základné nastavenie zvládnete za menej ako hodinu. Pre pokročilé prispôsobenia poskytujeme podporu."
  },
  {
    question: "Podporujete integrácie?",
    answer: "Áno, podporujeme integrácie s populárnymi CRM systémami, chat platformami a ďalšími nástrojmi. Pre špecifické požiadavky kontaktujte náš tím."
  },
  {
    question: "Aká je úspešnosť konverzií?",
    answer: "Úspešnosť konverzií závisí od mnohých faktorov, ale naši klienti hlásia v priemere 2-3 násobné zvýšenie konverzií po implementácii AI asistentov."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Často kladené otázky</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Odpovede na najčastejšie otázky
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
