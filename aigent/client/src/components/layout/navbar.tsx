import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <a href="#features" className="text-sm font-medium hover:text-primary">Funkcie</a>
      <a href="#process" className="text-sm font-medium hover:text-primary">Ako to funguje</a>
      <a href="#pricing" className="text-sm font-medium hover:text-primary">Cenník</a>
      <a href="#faq" className="text-sm font-medium hover:text-primary">FAQ</a>
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-bold text-xl">AIgent</a>
          {!isMobile && <div className="flex gap-6"><NavLinks /></div>}
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <Button asChild>
            <a href="#waitlist">Kontakt</a>
          </Button>
        )}
      </div>
    </nav>
  );
}