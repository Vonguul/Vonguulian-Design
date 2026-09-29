import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface NotifyMeFormProps {
  tag: string;
  testId: string;
  buttonLabel?: string;
}

export default function NotifyMeForm({ tag, testId, buttonLabel = "Notify Me" }: NotifyMeFormProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (emailValue: string) => {
      return await apiRequest("POST", "/api/subscribe", { email: emailValue, tags: [tag] });
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll email you the moment this launches.",
        duration: 5000,
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to sign up. Please try again.",
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid={`form-${testId}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={mutation.isPending}
        className="flex-1"
        data-testid={`input-${testId}-email`}
      />
      <Button
        type="submit"
        disabled={mutation.isPending}
        variant="outline"
        className="sm:min-w-[140px]"
        data-testid={`button-${testId}-submit`}
      >
        {mutation.isPending ? "Signing up..." : buttonLabel}
      </Button>
    </form>
  );
}
