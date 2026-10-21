"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/components/shared/product-card";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";
import { Star, ShoppingBag, Plus, Minus, ArrowLeft } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: String(product.id),
      title: product.title,
      price: Number(product.price),
      image: product.image,
      quantity,
    });
    toast.success("به سبد خرید اضافه شد: " + product.title);
    onClose();
  };

  const SIZES = ["S", "M", "L", "XL"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-[760px] w-[95vw] bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-2xl z-[150] text-right overflow-hidden"
      >
        <DialogTitle className="sr-only">{product.title}</DialogTitle>

        <div className="flex flex-col md:flex-row gap-6 items-stretch pt-2">
          {/* ستون تصویر کالا */}
          <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-3">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              {product.discount && (
                <span className="absolute top-2.5 right-2.5 z-10 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                  {product.discount}٪ تخفیف
                </span>
              )}
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            
            <Link
              href={`/products/${product.id}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100/70 py-2.5 rounded-lg transition"
            >
              <span>مشاهده صفحه کامل محصول</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ستون مشخصات و خرید */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                  {product.category === "men" ? "پوشاک مردانه" : product.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {product.title}
              </h3>

              {/* امتیاز */}
              <div className="flex items-center gap-1 text-amber-400">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400 mr-1 font-semibold">
                  ({product.rating}) امتیاز
                </span>
              </div>

              {/* قیمت */}
              <div className="flex items-baseline gap-2 py-2 border-y border-gray-100">
                <span className="text-xl sm:text-2xl font-black text-gray-900">
                  {product.price.toLocaleString("fa-IR")}
                </span>
                <span className="text-xs text-gray-500 font-medium">تومان</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through mr-2">
                    {product.originalPrice.toLocaleString("fa-IR")} تومان
                  </span>
                )}
              </div>

              {/* سایز */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-gray-700">انتخاب سایز:</span>
                <div className="flex items-center gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-9 h-9 rounded-lg border text-xs font-bold transition ${
                        selectedSize === size
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700 font-black shadow-sm"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* کنترل تعداد و دکمه خرید در یک ردیف */}
            <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
              <div className="flex items-center justify-between border border-gray-200 rounded-xl p-1 bg-gray-50 w-28 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1.5 hover:bg-white rounded-lg transition text-gray-600"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-gray-800">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="p-1.5 hover:bg-white rounded-lg transition text-gray-600"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
