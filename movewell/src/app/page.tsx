import { CommerceHero } from "@/components/ui/commerce-hero";
import { Marquee } from "@/components/Marquee";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <CommerceHero />
      <Marquee />
      <FeaturedProducts />
      <Process />
      <About />
      <Testimonials />
      <Newsletter />
    </>
  );
}
