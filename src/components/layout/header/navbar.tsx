import Link from "next/link";
import { CategoryDropdown } from "./category-dropdown";

const NAV_LINKS = [
  { title: "صفحه اصلی", href: "/" },
  { title: "فروشگاه", href: "/products" },
  { title: "صفحات", href: "/pages" },
  { title: "وبلاگ", href: "/blog" },
  { title: "المان‌ها", href: "/elements" },
  { title: "خرید", href: "/shop" },
];

export function Navbar() {
  return (
    <div className="bg-emerald-700 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <nav className="flex items-center space-x-reverse space-x-6 py-3 font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-emerald-200 transition"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* دراپ‌داون دسته‌بندی‌ها */}
        <CategoryDropdown />
      </div>
    </div>
  );
}