import { Youtube, Instagram, Twitter, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface SocialLink {
  icon: typeof Youtube | typeof SiTiktok;
  href: string;
  label: string;
}

export default function SocialFooter() {
  const socialLinks: SocialLink[] = [
    { icon: Youtube, href: "https://www.youtube.com/@offbarvonguul", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/offbar1/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/OffBar1", label: "Twitter" },
    { icon: SiTiktok, href: "http://tiktok.com/@offbahrvonguul", label: "TikTok" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const handleSocialClick = (label: string, href: string) => {
    console.log(`${label} clicked`);
    if (href !== "#") {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="py-12 bg-black dark:bg-black border-t border-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <button
                key={social.label}
                onClick={() => handleSocialClick(social.label, social.href)}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary hover-elevate active-elevate-2 transition-all duration-200 hover:scale-110"
                aria-label={social.label}
                data-testid={`button-social-${social.label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
        <p className="text-center text-white/60 text-sm" data-testid="text-copyright">
          © 2024 Vonguulian Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
