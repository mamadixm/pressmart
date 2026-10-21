"use client";

import { useState } from "react";
import { HelpPageLayout } from "@/components/layout/help-page-layout";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
    a: "پس از ثبت و ارسال سفارش، کد رهگیری پستی از طریق پیامک برای شما ارسال می‌شود. همچنین از بخش حساب کاربری می‌توانید وضعیت لحظه‌ای مرسوله را دنبال کنید.",
  },
  {
    q: "شرایط مرجوعی کالا چیست؟",
    a: "تمامی کالاها تا ۷ روز پس از دریافت توسط مشتری، در صورت عدم استفاده، سالم بودن اتیکت‌ها و حفظ بسته‌بندی اولیه بدون هیچ قید و شرطی قابل بازگشت هستند.",
  },
  {
    q: "هزینه ارسال چقدر است؟",
    a: "برای خریدهای بالای ۱ میلیون تومان ارسال به سراسر کشور کاملاً رایگان است. برای مبالغ کمتر، هزینه ثابت بر اساس تعرفه پست پیشتاز اعمال می‌شود.",
  },
  {
    q: "آیا امکان پرداخت در محل وجود دارد؟",
    a: "در حال حاضر جهت تسریع در فرآیند آماده‌سازی و ارسال سفارش‌ها، پرداخت تنها به صورت آنلاین از طریق درگاه‌های امن بانکی انجام می‌گیرد.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <HelpPageLayout
      title="پرسش‌های متداول"
      subtitle="پاسخ به سوالات متداول کاربران پیرامون سفارش، پرداخت و خدمات پس از فروش"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/40"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 text-right font-bold text-gray-800 text-xs hover:text-emerald-700 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-emerald-700" : "text-gray-400"
                  }`}
                />
              </button>
              {isOpen && (
                <div className="p-4 pt-1 text-gray-600 text-xs leading-6 border-t border-gray-100 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </HelpPageLayout>
  );
}
