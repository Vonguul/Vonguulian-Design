import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const contactFormSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTemplates: Record<string, { service: string; template: string }> = {
    blueprint: {
      service: "consultation-services",
      template: "I'm interested in booking a Blueprint Consultation ($225). This session will provide insight into details of my chart, clarity on alignment of understanding, and answers to any questions I have about my details."
    },
    alignment: {
      service: "consultation-services",
      template: "I'm interested in booking Alignment Coaching ($997). This is a 5-session coaching program focusing on 3 aspects of life: Career, Purpose, and Relationships. I'm ready to work on my design alignment."
    }
  };

  const getServiceFromUrl = () => {
    const hash = window.location.hash;
    const searchParams = new URLSearchParams(hash.split("?")[1]);
    return searchParams.get("service");
  };

  const selectedService = getServiceFromUrl();
  const template = selectedService && selectedService in serviceTemplates 
    ? serviceTemplates[selectedService as keyof typeof serviceTemplates]
    : null;
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      serviceInterest: template?.service || "",
      message: template?.template || "",
    },
  });

  useEffect(() => {
    const handleHashChange = () => {
      const service = getServiceFromUrl();
      if (service && service in serviceTemplates) {
        const tmpl = serviceTemplates[service as keyof typeof serviceTemplates];
        form.setValue("serviceInterest", tmpl.service);
        form.setValue("message", tmpl.template);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "d85adb9d-78ef-4f4b-8793-ddc0c1634515");
      formData.append("from_name", data.fullName);
      formData.append("email", data.email);
      formData.append("service_interest", data.serviceInterest);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black dark:bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          data-testid="text-contact-title"
        >
          Get In Touch
        </h2>
        <p 
          className="text-center text-white/80 mb-12"
          data-testid="text-contact-subtitle"
        >
          Have questions? We'd love to hear from you.
        </p>
        
        <Card className="bg-white dark:bg-card border-primary">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:border-primary px-0"
                          data-testid="input-fullname"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          {...field} 
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:border-primary px-0"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Service Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none focus:border-primary px-0"
                            data-testid="select-service-interest"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="digital-products" data-testid="option-digital-products">Digital Products</SelectItem>
                          <SelectItem value="consultation-services" data-testid="option-consultation">Consultation Services</SelectItem>
                          <SelectItem value="both" data-testid="option-both">Both</SelectItem>
                          <SelectItem value="other" data-testid="option-other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="If submitting an inquiry for a Custom Cheatsheet include your Date of Birth, Place of Birth, and Time of Birth... Otherwise tell us how we can help you" 
                          {...field} 
                          rows={5}
                          className="border-2 focus-visible:border-primary resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full"
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
