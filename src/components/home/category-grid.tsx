import Link from "next/link";
import Image from "next/image";

const PROMO_BANNERS = [
  {
    id: 1,
    subtitle: "بهترین دیجیتال",
    title: "دوربین اچ‌دی",
    description: "شروع از ۸۰۰ هزار تومان",
    buttonText: "خرید کنید",
    href: "/products?category=camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    subtitle: "مد مردانه",
    title: "تجهیزات جانبی",
    description: "۲۵٪ تخفیف ثابت",
    buttonText: "خرید کنید",
    href: "/products?category=accessories",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    subtitle: "ظاهر رسمی",
    title: "کفش مردانه",
    description: "حداقل ۳۵-۷۰٪ تخفیف",
    buttonText: "خرید کنید",
    href: "/products?category=shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { id: 1, name: "زنانه", count: 3, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop", href: "/products?category=women" },
  { id: 2, name: "ساعت", count: 3, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=300&auto=format&fit=crop", href: "/products?category=watches" },
  { id: 3, name: "ورزش‌ها", count: 2, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop", href: "/products?category=sports" },
  { id: 4, name: "کفش", count: 2, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop", href: "/products?category=shoes" },
  { id: 5, name: "مردانه", count: 4, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop", href: "/products?category=men" },
  { id: 6, name: "بچه‌ها", count: 1, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop", href: "/products?category=kids" },
];

export function CategoryGrid() {
  return (
    <section className="space-y-12">
      {/* ۱. بنرهای تبلیغاتی سه‌گانه */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROMO_BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="relative h-64 rounded-md overflow-hidden bg-slate-900 group shadow-sm flex items-center justify-between p-6"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(15,23,42,0.85), rgba(15,23,42,0.2)), url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white space-y-2 z-10 text-right">
              <span className="text-xs text-gray-300 font-light block">{banner.subtitle}</span>
              <h3 className="text-xl font-bold">{banner.title}</h3>
              <p className="text-xs text-gray-300">{banner.description}</p>
              <Link
                href={banner.href}
                className="inline-flex items-center text-xs text-amber-400 group-hover:text-amber-300 transition pt-2 font-medium"
              >
                <span>{banner.buttonText}</span>
                <span className="mr-1 group-hover:-translate-x-1 transition-transform">‹</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ۲. بخش دسته‌بندی‌های ویژه */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-3 border-gray-200">
          <h2 className="text-base font-bold text-gray-800">دسته‌بندی‌های ویژه</h2>
          <Link href="/categories" className="text-xs text-emerald-700 hover:underline">
            مشاهده همه
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="bg-white border border-gray-100 rounded-md p-4 flex flex-col items-center text-center hover:shadow-md hover:border-emerald-600/30 transition group"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative mb-3 overflow-hidden rounded">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition">
                {cat.name}
              </h4>
              <span className="text-[11px] text-gray-400 mt-0.5">
                {cat.count} محصول
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}