import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { PopularRestaurants } from "@/components/sections/popular-restaurants";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <PopularRestaurants />
      <CTA />
      <Footer />
    </div>
  );
}
