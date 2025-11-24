import ServiceCard from "./ServiceCard";
import { Lightbulb, Target } from "lucide-react";
import { Link } from "wouter";

export default function ConsultationSection() {
  return (
    <section id="consultation" className="py-24 px-4 bg-secondary dark:bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-[#ffc534]"
          data-testid="text-consultation-title"
        >
          Consultation Services
        </h2>
        <p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          data-testid="text-consultation-subtitle"
        >
          Expert <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-guidance-resources">guidance</Link> tailored to your unique journey
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={Lightbulb}
            title="Blueprint Consultation"
            description="This session is for insight, clarity and questions. Insight into details of their chart, clarity on alignment of understanding, and any questions you may have in reference to your details."
            price="$225"
            bookingLink="#"
          />
          <ServiceCard
            icon={Target}
            title="Alignment Coaching"
            description="This is a 5-session coaching, designed to focus on 3 aspects of life. Career, Purpose, and Relationships."
            price="$997"
            bookingLink="#"
            bulletPoints={[
              "Session 1: Getting to know your goals and decision making",
              "Session 2: Tweaking the Vonguulian Design Blueprint to your preference",
              "Sessions 3-5: Continued support, accountability, and progress tracking"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
