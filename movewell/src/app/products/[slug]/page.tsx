import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getCategoryBySlug, getProductsByCategory } from "@/lib/products";
import { ProductDetail } from "@/components/ProductDetail";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id);

  return <ProductDetail product={product} category={category} related={related} />;
}
