"use client";

import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Shirt,
  Footprints,
  Watch,
  Glasses,
  ShoppingBag,
  Sparkles,
  Baby,
  Layers,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const CATEGORIES = [
  { name: "پوشاک مردانه", href: "/products?category=men", icon: Shirt, badge: "جدید" },
  { name: "پوشاک زنانه", href: "/products?category=women", icon: Sparkles },
  { name: "کفش و کتانی", href: "/products?category=shoes", icon: Footprints },
  { name: "ساعت و مچ‌بند", href: "/products?category=watches", icon: Watch },
  { name: "عینک و اکسسوری", href: "/products?category=accessories", icon: Glasses },
  { name: "کیف و کوله‌پشتی", href: "/products?category=bags", icon: ShoppingBag },
  { name: "کودک و نوجوان", href: "/products?category=kids", icon: Baby },
];

export function CategoryDropdown() {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-3 transition select-none outline-none font-medium text-xs">
          <Menu className="w-4 h-4" />
          <span>دسته‌بندی محصولات</span>
          <ChevronDown className="w-3.5 h-3.5 mr-1" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-56 bg-white shadow-xl rounded-md border border-gray-100 p-1.5 z-50 text-right"
      >
        {CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <DropdownMenuItem key={idx} asChild>
              <Link
                href={cat.href}
                className="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded cursor-pointer transition"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{cat.name}</span>
                </div>
                {cat.badge && (
                  <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded font-semibold">
                    {cat.badge}
                  </span>
                )}
              </Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator className="my-1 bg-gray-100" />

        <DropdownMenuItem asChild>
          <Link
            href="/categories"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 rounded cursor-pointer transition"
          >
            <Layers className="w-4 h-4" />
            <span>مشاهده همه دسته‌بندی‌ها</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}