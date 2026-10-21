import { HeroSlider } from "@/components/home/hero-slider";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturesBar } from "@/components/home/features-bar";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 w-full space-y-12">
        <CategoryGrid />
        <FeaturedProducts />
        <FeaturesBar />
      </div>
    </div>
  );
}