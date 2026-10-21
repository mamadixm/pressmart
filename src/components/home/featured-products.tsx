import Link from "next/link";
import { ProductCard, Product } from "@/components/shared/product-card";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "کت و شلوار مجلسی مردانه مدل کلاسیک",
    price: 3450000,
    originalPrice: 4200000,
    discount: 18,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    category: "پوشاک مردانه",
    rating: 4.8,
  },
  {
    id: "2",
    title: "ساعت مچی عقربه‌ای ضدآب چرمی",
    price: 1890000,
    discount: 25,
    originalPrice: 2500000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600&auto=format&fit=crop",
    category: "اکسسوری",
    rating: 4.5,
  },
  {
    id: "3",
    title: "کفش ورزشی سبک مخصوص دویدن",
    price: 2150000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    category: "کفش و کتانی",
    rating: 4.9,
  },
  {
    id: "4",
    title: "کیف دوشی چرم طبیعی دست‌دوز زنانه",
    price: 1650000,
    originalPrice: 1900000,
    discount: 12,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
    category: "زنانه",
    rating: 4.7,
  },
  {
    id: "5",
    title: "عینک آفتابی فریم مشکی کلاسیک UV400",
    price: 850000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop",
    category: "اکسسوری",
    rating: 4.2,
  },
  {
    id: "6",
    title: "هودی اورسایز پنبه‌ای زمستانه",
    price: 980000,
    originalPrice: 1200000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
    category: "پوشاک راحتی",
    rating: 4.6,
  },
  {
    id: "7",
    title: "کوله پشتی اسپرت روزمره لپ‌تاپ",
    price: 1320000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    category: "کیف و کوله",
    rating: 4.4,
  },
  {
    id: "8",
    title: "نیم‌بوت چرم مردانه طبی عسلی",
    price: 2790000,
    originalPrice: 3100000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600&auto=format&fit=crop",
    category: "کفش و کتانی",
    rating: 4.8,
  },
];

export function FeaturedProducts() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b pb-3 border-gray-200">
        <div>
          <h2 className="text-lg font-black text-gray-800">محصولات ویژه و جدید</h2>
          <p className="text-xs text-gray-500 mt-1">محبوب‌ترین و پرفروش‌ترین اقلام منتخب این هفته</p>
        </div>
        <Link
          href="/products"
          className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold"
        >
          مشاهده تمام کالاها ‹
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}