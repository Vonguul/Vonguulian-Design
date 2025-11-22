import ProductCard from '../ProductCard';
import { FileText } from 'lucide-react';

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProductCard
        icon={FileText}
        title="Basic Cheatsheet"
        description="Ideal for individuals who want a foundational understanding of the Human Design System"
        price="$40"
      />
    </div>
  );
}
