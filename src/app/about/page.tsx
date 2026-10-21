import { HelpPageLayout } from "@/components/layout/help-page-layout";
import { Award, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <HelpPageLayout
      title="درباره فروشگاه پرس‌مارت"
      subtitle="آشنایی با تاریخچه، اهداف و ماموریت تیم پرس‌مارت"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-6">
        <p className="leading-7">
          پرس‌مارت از سال ۱۴۰۰ با هدف ارائه جدیدترین مدل‌های پوشاک باکیفیت و مد روز متولد شد. تمرکز اصلی ما حذف واسطه‌ها، تضمین کیفیت دوخت و متریال، و ایجاد تجربه خریدی سریع، مطمئن و اقتصادی برای تمامی سلیقه‌ها در سراسر کشور است.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 text-center space-y-1.5">
            <Award className="w-5 h-5 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-gray-900 text-xs">تضمین بالاترین کیفیت</h3>
            <p className="text-[11px] text-gray-500">کنترل کیفی دقیق تمام کالاها پیش از ارسال</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 text-center space-y-1.5">
            <Users className="w-5 h-5 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-gray-900 text-xs">+۵۰ هزار مشتری راضی</h3>
            <p className="text-[11px] text-gray-500">پشتیبانی همه‌روزه و پیگیری لحظه‌ای</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 text-center space-y-1.5">
            <Sparkles className="w-5 h-5 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-gray-900 text-xs">تنوع بی‌نظیر مد روز</h3>
            <p className="text-[11px] text-gray-500">به‌روزرسانی هفتگی بر اساس ترندهای روز دنیا</p>
          </div>
        </div>
      </div>
    </HelpPageLayout>
  );
}
