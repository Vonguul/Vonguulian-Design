import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/basic-cheatsheets" },
    { label: "Future", href: "/future" },
    { label: "History", href: "/history" },
    { label: "Health", href: "/health" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-40 bg-black dark:bg-black border-b border-primary/20">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-bold text-primary hover:text-primary/80 transition-colors" data-testid="link-home-header">Vonguul</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1" data-testid="nav-header-menu">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant={isActive(link.href) ? "default" : "ghost"}
              size="sm"
              className={`rounded-full hover-elevate transition-colors ${!isActive(link.href) ? "hover:bg-primary hover:text-primary-foreground" : ""}`}
              asChild
              data-testid={`button-nav-${link.label.toLowerCase()}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-primary/20 bg-black dark:bg-black" data-testid="mobile-nav-menu">
          <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start rounded-md"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`button-mobile-nav-${link.label.toLowerCase()}`}
                >
                  <span>{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
