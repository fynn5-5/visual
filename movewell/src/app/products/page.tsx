import { Suspense } from "react";
import { ProductsGrid } from "@/components/ProductsGrid";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-sm text-muted">Laden...</div>
      }
    >
      <ProductsGrid />
    </Suspense>
  );
}
