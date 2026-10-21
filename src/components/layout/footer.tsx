import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  Send 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20 border-t border-slate-800 text-right">
      {/* ردیف مزایای خرید */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Truck className="w-6 h-6 text-emerald-400" />
            <span className="text-xs font-bold text-white">ارسال سریع و مطمئن</span>
            <span className="text-[11px] text-gray-400">به سراسر کشور</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <RotateCcw className="w-6 h-6 text-emerald-400" />
            <span className="text-xs font-bold text-white">۷ روز ضمانت بازگشت</span>
            <span className="text-[11px] text-gray-400">در صورت عدم رضایت</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span className="text-xs font-bold text-white">ضمانت اصالت کالا</span>
            <span className="text-[11px] text-gray-400">۱۰۰٪ تضمین کیفیت</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Headphones className="w-6 h-6 text-emerald-400" />
            <span className="text-xs font-bold text-white">پشتیبانی همه‌روزه</span>
            <span className="text-[11px] text-gray-400">پاسخگویی سریع</span>
          </div>
        </div>
      </div>

      {/* ستون‌های اصلی فوتر */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* درباره فروشگاه */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white tracking-tight">
                پرس‌مارت<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-6 max-w-sm">
              فروشگاه اینترنتی پرس‌مارت با هدف ارائه برترین پوشاک و مد روز، تجربه خریدی لذت‌بخش و باکیفیت را با بهترین قیمت و ارسال اکسپرس برای شما فراهم ساخته است.
            </p>
            <div className="space-y-2 text-xs text-gray-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تهران، خیابان ولیعصر، تقاطع بهشتی، برج تجارت</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">۰۲۱ - ۸۸۸۸ ۹۹۹۹</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@pressmart.ir</span>
              </div>
            </div>
          </div>

          {/* دسته‌بندی‌ها */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white flex items-center gap-2 border-r-2 border-emerald-500 pr-2">
              دسته‌بندی محصولات
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/products?category=men" className="hover:text-emerald-400 transition">
                  پوشاک مردانه
                </Link>
              </li>
              <li>
                <Link href="/products?category=women" className="hover:text-emerald-400 transition">
                  پوشاک زنانه
                </Link>
              </li>
              <li>
                <Link href="/products?category=shoes" className="hover:text-emerald-400 transition">
                  کفش و کتانی
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="hover:text-emerald-400 transition">
                  اکسسوری و ساعت
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition">
                  همه محصولات
                </Link>
              </li>
            </ul>
          </div>

          {/* خدمات مشتریان */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white flex items-center gap-2 border-r-2 border-emerald-500 pr-2">
              خدمات مشتریان
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition">
                  پرسش‌های متداول
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-emerald-400 transition">
                  رویه ارسال سفارش
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-emerald-400 transition">
                  شیوه‌های بازگرداندن کالا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition">
                  حفظ حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* عضویت در خبرنامه */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white flex items-center gap-2 border-r-2 border-emerald-500 pr-2">
              خبرنامه تخفیف‌ها
            </h3>
            <p className="text-xs text-gray-400 leading-5">
              از جدیدترین تخفیف‌ها و حراج‌های فصلی زودتر از دیگران باخبر شوید:
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>عضویت در خبرنامه</span>
              </button>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] text-gray-400">ما را دنبال کنید:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-600 hover:text-white transition text-gray-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* خط کپی‌رایت پایین فوتر */}
      <div className="border-t border-slate-800/80 py-4 text-center text-[11px] text-gray-500">
        <p>تمامی حقوق مادی و معنوی این وب‌سایت متعلق به فروشگاه آنلاین پرس‌مارت می‌باشد.</p>
      </div>
    </footer>
  );
}