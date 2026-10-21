"use client";

import Link from "next/link";
import { useWishlistStore } from "@/lib/store";
import { ProductCard } from "@/components/shared/product-card";
import { Heart, ArrowLeft } from "lucide-react";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 text-right">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <span>لیست علاقه‌مندی‌های من</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            کالاهایی که نشان کرده‌اید تا بعداً بررسی یا خریداری کنید
          </p>
        </div>
        <span className="text-xs bg-gray-100 text-gray-700 font-bold px-3 py-1.5 rounded-full">
          {items.length} کالا
        </span>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center space-y-4 shadow-sm">
          <Heart className="w-12 h-12 text-gray-300 mx-auto stroke-1" />
          <h2 className="text-base font-bold text-gray-800">لیست علاقه‌مندی‌های شما خالی است</h2>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            می‌توانید با کلیک روی آیکون قلب روی هر محصول، آن را برای خرید بعدی ذخیره کنید.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition"
          >
            <span>مشاهده فروشگاه و محصولات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
