import ServiceCard from '../ServiceCard';
import { Lightbulb } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-secondary">
      <ServiceCard
        icon={Lightbulb}
        title="Blueprint Consultation"
        description="This session is for insight, clarity and questions. Insight into details of their chart, clarity on alignment of understanding, and any questions you may have in reference to your details."
        price="$225"
      />
    </div>
  );
}
