import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";

export default function BasicCheatsheets() {
  useScrollMemory();
  usePageMeta({
    title: "Human Design Cheatsheets - Vonguulian Design",
    description: "Purchase premium Human Design cheatsheets including Type, Profile, Authority, and Aura guides. Comprehensive digital products to unlock your unique design.",
  });
  const cheatsheets = [
    { id: 1, title: "Foundational Human Design Cheatsheet", url: "https://vonguul.gumroad.com/l/HumDesCS", price: "$40" },
    { id: 2, title: "Manifestor Cheatsheet", url: "https://vonguul.gumroad.com/l/ManiCS", price: "$40" },
    { id: 3, title: "Generator Cheatsheet", url: "https://vonguul.gumroad.com/l/GenCS", price: "$40" },
    { id: 4, title: "Manifesting Generator Cheatsheet", url: "https://vonguul.gumroad.com/l/MGCS", price: "$40" },
    { id: 5, title: "Projector Cheatsheet", url: "https://vonguul.gumroad.com/l/ProCS", price: "$40" },
    { id: 6, title: "Reflector Cheatsheet", url: "https://vonguul.gumroad.com/l/RefCS", price: "$40" },
    { id: 7, title: "Complete Cheatsheets Bundle", url: "https://vonguul.gumroad.com/l/bundle", price: "$99.99", originalPrice: "$240" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            Basic Cheatsheets
          </h1>
          <p className="text-white/80 text-lg" data-testid="text-page-subtitle">
            Explore our collection of Human Design cheatsheets
          </p>
        </div>
      </div>

      {/* Cheatsheets Grid */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheatsheets.map((cheatsheet) => (
              <Card 
                key={cheatsheet.id}
                className="bg-white dark:bg-card border border-black/10 dark:border-white/10 hover-elevate transition-all"
                data-testid={`card-cheatsheet-${cheatsheet.id}`}
              >
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black dark:text-white">
                    {cheatsheet.title}
                  </CardTitle>
                  <div className="flex items-baseline gap-2 pt-2" data-testid={`text-price-${cheatsheet.id}`}>
                    <span className="text-2xl font-bold text-primary">{cheatsheet.price}</span>
                    {cheatsheet.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{cheatsheet.originalPrice}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={cheatsheet.url} data-testid={`link-cheatsheet-${cheatsheet.id}`}>
                    <Button 
                      className="w-full rounded-full"
                      data-testid={`button-download-${cheatsheet.id}`}
                    >
                      Download Cheatsheet
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
