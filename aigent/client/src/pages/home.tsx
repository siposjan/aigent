import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { WaitlistForm } from "@/components/sections/waitlist-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <WaitlistForm />
      </main>
    </>
  );
}
