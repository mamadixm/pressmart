export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating: number;
  description?: string;
  features?: string[];
  specs?: ProductSpec[];
  sizes?: string[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "کت و شلوار مجلسی مردانه مدل کلاسیک",
    price: 3450000,
    originalPrice: 4200000,
    discount: 18,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    category: "men",
    rating: 4.8,
    description: "این کت و شلوار با الگوبرداری از خطوط کلاسیک ایتالیایی و پارچه فاستونی درجه یک طراحی شده است. ایستایی عالی و راحتی در جلسات رسمی و مهمانی‌ها از ویژگی‌های برجسته آن است.",
    features: [
      "دوخت کاملاً صنعتی با الگوهای جذب و منظم",
      "آستر ساتن ضدتعریق و فوق‌العاده نرم",
      "مقاومت بالا در برابر چروکیدگی هنگام نشستن طولانی",
    ],
    specs: [
      { label: "جنس پارچه", value: "فاستونی پشم و پلی‌استر ترک" },
      { label: "نوع دوخت", value: "اسلیم فیت کلاسیک" },
      { label: "نحوه شست‌وشو", value: "فقط خشک‌شویی" },
      { label: "کشور سازنده", value: "ایران (پارچه وارداتی)" },
    ],
    sizes: ["48", "50", "52", "54"],
  },
  {
    id: "2",
    title: "کفش ورزشی نایک مدل Revolution",
    price: 1890000,
    originalPrice: 2200000,
    discount: 14,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "shoes",
    rating: 4.6,
    description: "کتانی فوق‌العاده سبک با فناوری فوم جذب ضربه که فشار وارده به مچ و زانو را در حین دویدن و پیاده‌روی طولانی به حداقل می‌رساند.",
    features: [
      "کفی طبی ارگونومیک با قابلیت گردش هوا",
      "زیره لاستیکی مقاوم در برابر سایش",
      "رویه پارچه‌ای تنفس‌پذیر توری",
    ],
    specs: [
      { label: "جنس رویه", value: "مش (Mesh) تنفس‌پذیر" },
      { label: "جنس زیره", value: "EVA منعطف و آنتی‌شوک" },
      { label: "مناسب برای", value: "دویدن، ورزش و پیاده‌روی روزانه" },
    ],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "3",
    title: "ساعت مچی کرنوگراف چرمی کلاسیک",
    price: 2450000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
    category: "accessories",
    rating: 4.9,
    description: "ساعت مردانه عقربه‌ای مجهز به موتور کرنوگراف ژاپنی با بدنه تمام استیل ضدزنگ و بند چرم طبیعی دست‌دوز.",
    features: [
      "موتور کوارتز ساخت ژاپن با دقت بالا",
      "شیشه معدنی ضدخش با پوشش سافایر",
      "مقاومت در برابر نفوذ آب تا عمق ۳۰ متر",
    ],
    specs: [
      { label: "جنس قاب", value: "استیل ۳۱۶ ضدزنگ" },
      { label: "جنس بند", value: "چرم طبیعی ضدحساسیت" },
      { label: "گارانتی", value: "۲۴ ماه گارانتی شرکتی موتور" },
    ],
    sizes: ["تک سایز"],
  },
];