"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, ArrowLeft } from "lucide-react";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { ALL_PRODUCTS, Product } from "@/lib/products-data";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  // فیلتر آنی محصولات با تایپ هر کاراکتر
  useEffect(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (trimmed.length > 0) {
      const results = ALL_PRODUCTS.filter(
        (product) =>
          product.title.toLowerCase().includes(trimmed) ||
          product.category.toLowerCase().includes(trimmed)
      ).slice(0, 5); // نمایش ۵ نتیجه برتر
      setSearchResults(results);
      setIsDropdownOpen(true);
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  }, [searchQuery]);

  // بستن لیست کشویی با کلیک در بیرون از باکس سرچ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = wishlistItems.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsDropdownOpen(false);
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectProduct = (productId: string) => {
    setIsDropdownOpen(false);
    setSearchQuery("");
    router.push(`/products/${productId}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm text-right">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* لوگو و منوی اصلی دسکتاپ */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black text-gray-900 tracking-tight">
            پرس‌مارت<span className="text-emerald-600">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-600">
            <Link href="/" className="hover:text-emerald-700 transition">
              صفحه اصلی
            </Link>
            <Link href="/products" className="hover:text-emerald-700 transition">
              فروشگاه
            </Link>
            <Link href="/deals" className="hover:text-emerald-700 transition">
              تخفیف‌های ویژه
            </Link>
            <Link href="/about" className="hover:text-emerald-700 transition">
              درباره ما
            </Link>
            <Link href="/contact" className="hover:text-emerald-700 transition">
              تماس با ما
            </Link>
          </nav>
        </div>

        {/* فیلد جستجوی زنده (دسکتاپ) */}
        <div ref={searchContainerRef} className="flex-1 max-w-md hidden sm:block relative">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="جستجوی محصول، برند یا دسته‌بندی..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setIsDropdownOpen(true);
              }}
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pr-10 pl-4 text-xs outline-none focus:border-emerald-600 focus:bg-white transition"
            />
            <button
              type="submit"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-700"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* پنجره نتایج زنده با تایپ کلمه به کلمه */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden z-[100] divide-y divide-gray-50">
              {searchResults.length > 0 ? (
                <>
                  <div className="p-2 space-y-1">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => handleSelectProduct(product.id)}
                        className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition text-right group"
                      >
                        <div className="relative w-10 h-12 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-gray-800 truncate group-hover:text-emerald-700 transition">
                            {product.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                            {product.price.toLocaleString("fa-IR")} تومان
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-full py-2.5 px-4 bg-gray-50/80 hover:bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center gap-1.5 transition"
                  >
                    <span>مشاهده همه نتایج برای «{searchQuery}»</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <div className="p-4 text-center text-xs text-gray-400">
                  محصولی منطبق با «{searchQuery}» پیدا نشد.
                </div>
              )}
            </div>
          )}
        </div>

        {/* دکمه‌های آیکون هدر */}
        <div className="flex items-center gap-2">
          <Link
            href="/wishlist"
            className="relative p-2 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-full transition"
            title="علاقه‌مندی‌ها"
          >
            <Heart className="w-5 h-5" />
            {mounted && totalWishlistCount > 0 && (
              <span className="absolute top-1 -right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center">
                {totalWishlistCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            className="relative p-2 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-full transition"
            title="سبد خرید"
          >
            <ShoppingBag className="w-5 h-5" />
            {mounted && totalCartCount > 0 && (
              <span className="absolute top-1 -right-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative sm:hidden">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-9 pl-3 text-xs outline-none focus:border-emerald-600"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </form>

          <nav className="flex flex-col gap-2 text-xs font-bold text-gray-700 pt-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              فروشگاه
            </Link>
            <Link
              href="/deals"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              تخفیف‌های ویژه
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              تماس با ما
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}