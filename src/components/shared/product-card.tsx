"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { toast } from "sonner";
import { QuickViewModal } from "./quick-view-modal";

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: String(product.id),
      title: product.title,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });
    toast.success("به سبد خرید اضافه شد: " + product.title);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (!isFavorite) {
      toast.success("به لیست علاقه‌مندی‌ها افزوده شد");
    } else {
      toast.info("از لیست علاقه‌مندی‌ها حذف شد");
    }
  };

  const handleOpenQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <div className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
          {product.discount && (
            <span className="absolute top-2.5 right-2.5 z-10 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
              {product.discount}٪-
            </span>
          )}

          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-9 h-9 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white shadow transition-all duration-200"
              title="افزودن به سبد خرید"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleToggleWishlist}
              className={"w-9 h-9 rounded-full flex items-center justify-center shadow transition-all duration-200 " + (isFavorite ? "bg-rose-600 text-white" : "bg-white text-gray-800 hover:bg-rose-600 hover:text-white")}
              title="افزودن به علاقه‌مندی"
            >
              <Heart className={"w-4 h-4 " + (isFavorite ? "fill-white" : "")} />
            </button>
            <button
              type="button"
              onClick={handleOpenQuickView}
              className="w-9 h-9 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white shadow transition-all duration-200"
              title="مشاهده سریع"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-1.5 text-right">
          <span className="text-[11px] text-gray-400 font-medium">
            {product.category}
          </span>

          <Link
            href={"/products/" + product.id}
            className="text-sm font-semibold text-gray-800 hover:text-emerald-700 transition line-clamp-1"
          >
            {product.title}
          </Link>

          <div className="flex items-center gap-1 text-amber-400 my-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={"w-3.5 h-3.5 " + (i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200")}
              />
            ))}
            <span className="text-[11px] text-gray-400 mr-1">
              ({product.rating})
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">
                {product.price.toLocaleString("fa-IR")} تومان
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.originalPrice.toLocaleString("fa-IR")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
