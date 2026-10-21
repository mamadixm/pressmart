"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Lock, Mail, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // حالت ورود موفق تستی
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">به پرس‌مارت خوش آمدید!</h1>
        <p className="text-xs text-gray-500">شما با موفقیت وارد حساب کاربری خود شدید.</p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/products"
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition"
          >
            مشاهده محصولات
          </Link>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium px-4 py-2.5 rounded-lg transition"
          >
            خروج از حساب
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6 text-right">
        {/* تب‌های جابه‌جایی ورود / ثبت‌نام */}
        <div className="grid grid-cols-2 border-b border-gray-100 pb-3 text-center text-sm font-bold">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={"pb-2 transition " + (mode === "login" ? "text-emerald-700 border-b-2 border-emerald-700" : "text-gray-400 hover:text-gray-700")}
          >
            ورود به حساب
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={"pb-2 transition " + (mode === "register" ? "text-emerald-700 border-b-2 border-emerald-700" : "text-gray-400 hover:text-gray-700")}
          >
            عضویت جدید
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {mode === "register" && (
            <div className="space-y-1.5">
              <label className="text-gray-700 font-medium">نام و نام خانوادگی</label>
              <div className="relative">
                <input
                  required
                  type="text"
                  placeholder="مثال: سارا محمدی"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-9 outline-none focus:border-emerald-600"
                />
                <User className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-gray-700 font-medium">
              {mode === "login" ? "شماره موبایل یا ایمیل" : "شماره موبایل"}
            </label>
            <div className="relative">
              <input
                required
                type="text"
                placeholder={mode === "login" ? "۰۹۱۲... یا email@domain.com" : "۰۹۱۲xxxxxxx"}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-9 outline-none focus:border-emerald-600 text-right"
              />
              {mode === "login" ? (
                <Mail className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
              ) : (
                <Phone className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">رمز عبور</label>
              {mode === "login" && (
                <a href="#" className="text-[11px] text-emerald-700 hover:underline">
                  فراموشی رمز؟
                </a>
              )}
            </div>
            <div className="relative">
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-9 outline-none focus:border-emerald-600"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg transition shadow-sm mt-2 flex items-center justify-center gap-2"
          >
            <span>{mode === "login" ? "ورود به حساب کاربری" : "تکمیل ثبت‌نام"}</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[11px] text-center text-gray-400">
          با ورود یا ثبت‌نام در پرس‌مارت، قوانین و حریم خصوصی آن را می‌پذیرید.
        </p>
      </div>
    </div>
  );
}
