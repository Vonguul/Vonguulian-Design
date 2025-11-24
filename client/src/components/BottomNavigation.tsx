import { useEffect, useState } from "react";
import { ChevronUp, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/useNavigation";

export default function BottomNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { goBack } = useNavigation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 flex gap-2 transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      data-testid="nav-bottom-navigation"
    >
      <Button
        size="icon"
        variant="default"
        className="rounded-full"
        onClick={goBack}
        data-testid="button-back-floating"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>
      <Button
        size="icon"
        variant="default"
        className="rounded-full"
        asChild
        data-testid="button-home-floating"
        aria-label="Go to home page"
      >
        <Link href="/">
          <Home className="w-5 h-5" />
        </Link>
      </Button>
      <Button
        size="icon"
        variant="default"
        className="rounded-full"
        onClick={scrollToTop}
        data-testid="button-scroll-to-top-floating"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
