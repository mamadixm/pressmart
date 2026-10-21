import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HelpPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const HELP_LINKS = [
  { title: "پرسش‌های متداول", href: "/faq" },
  { title: "رویه ارسال سفارش", href: "/shipping-policy" },
  { title: "شیوه‌های بازگرداندن کالا", href: "/returns" },
  { title: "حفظ حریم خصوصی", href: "/privacy" },
  { title: "تماس با ما", href: "/contact" },
];

export function HelpPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: HelpPageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 text-right">
      {/* هدر صفحه */}
      <div className="border-b border-gray-100 pb-6 space-y-2">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <Link href="/" className="hover:text-emerald-700">خانه</Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>خدمات مشتریان</span>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-gray-800 font-medium">{title}</span>
        </nav>
        <h1 className="text-2xl font-black text-gray-900">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        {lastUpdated && (
          <span className="text-[11px] text-gray-400 block pt-1">
            آخرین به‌روزرسانی: {lastUpdated}
          </span>
        )}
      </div>

      {/* بدنه دو ستونه: سایدبار دسترسی سریع + محتوای اصلی */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* منوی سریع خدمات مشتریان */}
        <aside className="md:col-span-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
          <h2 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-emerald-600 rounded-full inline-block" />
            سایر بخش‌های خدمات مشتریان
          </h2>
          <nav className="flex flex-col gap-1 text-xs">
            {HELP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 px-3 rounded-lg text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* محتوای اختصاصی صفحه */}
        <main className="md:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm leading-8 text-xs text-gray-700">
          {children}
        </main>
      </div>
    </div>
  );
}