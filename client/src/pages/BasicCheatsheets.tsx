import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BasicCheatsheets() {
  const cheatsheets = [
    { id: 1, title: "Foundational Human Design Cheatsheet", url: "#" },
    { id: 2, title: "Manifestor Cheatsheet", url: "#" },
    { id: 3, title: "Generator Cheatsheet", url: "#" },
    { id: 4, title: "Manifesting Generator Cheatsheet", url: "#" },
    { id: 5, title: "Projector Cheatsheet", url: "#" },
    { id: 6, title: "Reflector Cheatsheet", url: "#" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
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
    </div>
  );
}
