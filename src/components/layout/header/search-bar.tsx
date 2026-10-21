"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { ALL_PRODUCTS } from "@/lib/products-data";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? ALL_PRODUCTS.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex-1 max-w-lg mx-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="جستجوی نام کالا، دسته‌بندی یا برند..."
          className="w-full bg-gray-100 hover:bg-gray-50 focus:bg-white text-gray-800 text-xs rounded-full py-2.5 pr-10 pl-10 border border-transparent focus:border-emerald-600 transition outline-none"
        />
        <Search className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute left-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* پنجره نتایج آنی */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 text-right space-y-1">
          {results.length === 0 ? (
            <div className="p-4 text-center text-xs text-gray-400">
              هیچ محصولی مطابق «{query}» یافت نشد.
            </div>
          ) : (
            <>
              <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 border-b border-gray-50">
                نتایج جستجو ({results.length})
              </div>
              <div className="divide-y divide-gray-50">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="relative w-10 h-10 rounded border bg-gray-50 overflow-hidden shrink-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 truncate">
                      <div className="text-xs font-medium text-gray-800 truncate">
                        {product.title}
                      </div>
                      <div className="text-[11px] text-emerald-700 font-bold mt-0.5">
                        {product.price.toLocaleString("fa-IR")} تومان
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href={`/products?q=${encodeURIComponent(query)}`}
                onClick={() => setIsOpen(false)}
                className="block text-center text-[11px] font-bold text-emerald-700 hover:bg-emerald-50 py-2 rounded-lg transition border-t border-gray-50 mt-1"
              >
                مشاهده تمام نتایج
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
