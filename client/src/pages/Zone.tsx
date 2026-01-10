import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Zone() {
  useScrollMemory();
  usePageMeta({
    title: "The Alignment Engine | Vonguulian Design",
    description: "Experience The Alignment Engine - an interactive tool for exploring Human Design concepts and deepening your understanding of your unique design.",
  });

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="text-white hover:text-[#d9a520] gap-2"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <a 
          href="https://vonguul.replit.app" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        </a>
      </div>
      
      <div className="flex-1 w-full h-[calc(100vh-73px)]">
        <iframe
          src="https://vonguul.replit.app"
          className="w-full h-full border-0"
          title="The Alignment Engine"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          loading="lazy"
          data-testid="iframe-alignment-engine"
        />
      </div>
    </div>
  );
}
