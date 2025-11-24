import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (emailValue: string) => {
      return await apiRequest("POST", "/api/subscribe", { email: emailValue });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
        duration: 5000,
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    mutation.mutate(email);
  };

  return (
    <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8" data-testid="section-newsletter">
      <h3 className="font-serif text-2xl font-bold mb-6 text-primary" data-testid="text-newsletter-title">
        Stay Connected
      </h3>
      <p className="text-muted-foreground mb-6" data-testid="text-newsletter-description">
        Keeping you connected to everything Vonguul-related. Updates, News, Educational Updates, and even Special Offers can be found in the newsletter. It isn't released on a set schedule so you don't have to worry about being spammed. The only automation is the welcome letter, other than that, every email received will be meaningful and worth your valuable time.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid="form-newsletter">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={mutation.isPending}
          className="flex-1"
          data-testid="input-newsletter-email"
        />
        <Button
          type="submit"
          disabled={mutation.isPending}
          className="sm:min-w-[120px]"
          data-testid="button-newsletter-subscribe"
        >
          {mutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
