import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/basic-cheatsheets" },
    { label: "Resources", href: "/resources" },
    { label: "Consultation", href: "/about" },
    { label: "Future", href: "/future" },
    { label: "History", href: "/history" },
    { label: "Health", href: "/health" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-40 bg-black dark:bg-black border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-bold text-primary hover:text-primary/80 transition-colors" data-testid="link-home-header">
          Vonguulian
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-1" data-testid="nav-header-menu">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant={isActive(link.href) ? "default" : "ghost"}
              size="sm"
              className="rounded-full"
              asChild
              data-testid={`button-nav-${link.label.toLowerCase()}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu - Simplified */}
        <div className="md:hidden flex gap-2">
          <Button
            variant={isActive("/") ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
            asChild
            data-testid="button-nav-mobile-home"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant={isActive("/basic-cheatsheets") ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
            asChild
            data-testid="button-nav-mobile-products"
          >
            <Link href="/basic-cheatsheets">Products</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
