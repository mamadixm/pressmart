import { ALL_PRODUCTS } from "@/lib/products-data";
import { ProductCard } from "@/components/shared/product-card";
import { Flame } from "lucide-react";

export default function DealsPage() {
  const discountedProducts = ALL_PRODUCTS.filter((p) => Boolean(p.discount));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 text-right">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-600 fill-rose-600" />
            <span>تخفیف‌ها و حراج‌های ویژه</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            جدیدترین محصولات حراج‌شده با بالاترین درصد تخفیف پرس‌مارت
          </p>
        </div>
        <span className="text-xs bg-rose-50 text-rose-600 font-bold px-3 py-1.5 rounded-full">
          {discountedProducts.length} محصول تخفیف‌دار
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {discountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
