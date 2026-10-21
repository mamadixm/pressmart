"use client";

import { useState } from "react";
import { HelpPageLayout } from "@/components/layout/help-page-layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    toast.success("پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس خواهیم گرفت.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <HelpPageLayout
      title="تماس با ما"
      subtitle="راه‌های ارتباطی و ارسال پیام مستقیم به کارشناسان پشتیبانی پرس‌مارت"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-center text-center gap-2">
            <Phone className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-gray-800">شماره تماس</span>
            <span className="text-gray-500 font-sans text-xs">۰۲۱ - ۸۸۸۸ ۹۹۹۹</span>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-center text-center gap-2">
            <Mail className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-gray-800">پست الکترونیک</span>
            <span className="text-gray-500 font-sans text-xs">support@pressmart.ir</span>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-center text-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-gray-800">آدرس فروشگاه</span>
            <span className="text-gray-500 text-xs">تهران، خیابان ولیعصر، برج تجارت</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">ارسال پیام به پشتیبانی</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">نام و نام خانوادگی *</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: علی رضایی"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">ایمیل یا شماره موبایل</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@domain.com"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">متن پیام *</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="دیدگاه، پرسش یا پیگیری سفارش خود را اینجا بنویسید..."
              className="w-full border border-gray-200 rounded-lg p-3 text-xs outline-none focus:border-emerald-600"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-lg text-xs flex items-center justify-center gap-2 transition shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>ثبت و ارسال پیام</span>
          </button>
        </form>
      </div>
    </HelpPageLayout>
  );
}
