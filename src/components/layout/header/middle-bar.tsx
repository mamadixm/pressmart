"use client";

import Link from "next/link";
import { User, Heart } from "lucide-react";
import { CartSheet } from "@/components/shared/cart-sheet";
import { SearchBar } from "./search-bar";
import { useWishlistStore } from "@/lib/store";

export function MiddleBar() {
  const wishlistItems = useWishlistStore((state) => state.items);

  return (
    <div className="border-b border-gray-100 bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* لوگو */}
        <Link href="/" className="text-xl font-black text-gray-900 tracking-tight shrink-0">
          Press<span className="text-emerald-700">Mart.</span>
        </Link>

        {/* سرچ‌بار */}
        <SearchBar />

        {/* اکشن‌های کاربر */}
        <div className="flex items-center gap-5 shrink-0">
          <Link
            href="/account"
            className="flex flex-col items-center gap-1 text-xs text-gray-700 hover:text-emerald-700 transition"
          >
            <User className="w-5 h-5" />
            <span>حساب کاربری</span>
          </Link>

          <Link
            href="/wishlist"
            className="relative flex flex-col items-center gap-1 text-xs text-gray-700 hover:text-emerald-700 transition"
          >
            <Heart className="w-5 h-5" />
            <span>علاقه‌مندی‌ها</span>
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <CartSheet />
        </div>
      </div>
    </div>
  );
}