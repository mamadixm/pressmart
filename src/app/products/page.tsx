"use client";

import { useState, useMemo } from "react";
import { ALL_PRODUCTS } from "@/lib/products-data";
import { ProductCard } from "@/components/shared/product-card";
import { SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { label: "همه دسته‌بندی‌ها", value: "all" },
  { label: "پوشاک مردانه", value: "men" },
  { label: "پوشاک زنانه", value: "women" },
  { label: "کفش و کتانی", value: "shoes" },
  { label: "ساعت", value: "watches" },
  { label: "اکسسوری", value: "accessories" },
  { label: "کیف و کوله", value: "bags" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [maxPrice, setMaxPrice] = useState(5000000);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchPrice = item.price <= maxPrice;
      return matchCategory && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return Number(b.id) - Number(a.id);
    });
  }, [selectedCategory, sortBy, maxPrice]);

  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* هدر صفحه */}
      <div className="border-b pb-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">فروشگاه و آرشیو محصولات</h1>
          <p className="text-xs text-gray-500 mt-1">
            نمایش {filteredProducts.length} کالا بر اساس فیلترهای انتخابی
          </p>
        </div>

        {/* منوی مرتب‌سازی */}
        <div className="flex items-center gap-2 text-xs">
          <label className="text-gray-500">مرتب‌سازی:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-200 rounded px-2.5 py-1.5 bg-white text-gray-700 outline-none focus:border-emerald-600"
          >
            <option value="newest">جدیدترین</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* سایدبار فیلترها */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b pb-3 font-semibold text-gray-800 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>فیلتر پیشرفته</span>
            </div>

            {/* فیلتر دسته‌بندی */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-700">دسته‌بندی</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.value}
                    className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-emerald-700 transition"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.value}
                      onChange={() => setSelectedCategory(cat.value)}
                      className="accent-emerald-600"
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* فیلتر محدوده قیمت */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-700">حداکثر قیمت:</span>
                <span className="text-emerald-700 font-semibold">
                  {maxPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>
              <input
                type="range"
                min={500000}
                max={5000000}
                step={100000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>
        </aside>

        {/* لیست کارت‌های محصولات */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg border border-dashed border-gray-200 p-12 text-center space-y-3">
              <p className="text-gray-500 text-sm">هیچ کالایی با فیلترهای انتخابی پیدا نشد!</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setMaxPrice(5000000);
                }}
                className="text-xs text-emerald-700 underline font-medium"
              >
                پاک کردن فیلترها
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
    
  );
  
}
