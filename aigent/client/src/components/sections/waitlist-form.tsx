import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Úspešne pridané!",
        description: "Budeme vás informovať o novinkách.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Chyba",
        description: "Skúste to prosím znova neskôr.",
      });
    },
  });

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Registrácia</h2>
          <p className="text-zinc-400 max-w-[600px] mx-auto">
            Buďte medzi prvými, ktorí vyskúšajú AIgent
          </p>
        </div>

        <div className="max-w-[500px] mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="vas@email.sk" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meno</FormLabel>
                    <FormControl>
                      <Input placeholder="Vaše meno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spoločnosť (voliteľné)</FormLabel>
                    <FormControl>
                      <Input placeholder="Názov spoločnosti" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Správa (voliteľné)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Vaša správa alebo požiadavky" 
                        className="resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? "Registrujem..." : "Registrovať sa"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}