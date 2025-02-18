import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "AImate kompletne zmenil náš predajný proces. Konverzie sa zvýšili o 150%.",
    author: "Martin K.",
    role: "CEO, TechStart",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"
  },
  {
    text: "Najlepšia investícia pre náš predajný tím. AI asistenti pracujú non-stop.",
    author: "Jana M.",
    role: "Sales Manager, DataCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
  }
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Referencie</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Čo o nás hovoria naši klienti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <p className="mb-6 text-lg italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
