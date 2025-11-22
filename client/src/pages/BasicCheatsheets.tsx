import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ChevronUp, Home } from "lucide-react";
import { useEffect } from "react";
import { useNavigation } from "@/hooks/useNavigation";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function BasicCheatsheets() {
  const { goBack, scrollToTop } = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cheatsheets = [
    { id: 1, title: "Foundational Human Design Cheatsheet", url: "https://vonguulian.gumroad.com/l/HumDesCS" },
    { id: 2, title: "Manifestor Cheatsheet", url: "https://vonguulian.gumroad.com/l/ManiCS" },
    { id: 3, title: "Generator Cheatsheet", url: "https://vonguulian.gumroad.com/l/GenCS" },
    { id: 4, title: "Manifesting Generator Cheatsheet", url: "https://vonguulian.gumroad.com/l/MGCS" },
    { id: 5, title: "Projector Cheatsheet", url: "https://vonguulian.gumroad.com/l/ProCS" },
    { id: 6, title: "Reflector Cheatsheet", url: "https://vonguulian.gumroad.com/l/RefCS" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 mb-6">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10" 
              onClick={goBack}
              data-testid="button-back-history"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Link href="/">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                data-testid="button-go-home"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={scrollToTop}
              data-testid="button-scroll-top"
            >
              <ChevronUp className="w-4 h-4 mr-2" />
              Top
            </Button>
          </div>
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
      <ScrollToTopButton />
    </div>
  );
}
