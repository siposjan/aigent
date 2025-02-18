import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function AudioWaveform() {
  const bars = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="flex justify-center items-center gap-2 h-48 my-12">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-2 bg-primary/60 rounded-full"
          animate={{
            height: [40, 80, 40],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/90 to-background/50" />
      </div>

      <div className="container space-y-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="font-bold tracking-tighter text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Rast s AI: Automatizujte<br />
            pracovné postupy a obsah
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Zrýchlite rast vašej spoločnosti s AI agentmi, ktorí automatizujú opakujúce sa úlohy, 
            zefektívňujú pracovné procesy a pomáhajú s tvorbou obsahu. Menej manuálnej práce, viac času na inovácie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AudioWaveform />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Button size="lg" asChild>
            <a href="#waitlist">Rezervovať konzultáciu</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}