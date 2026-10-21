"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { User, Eye } from "lucide-react";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex flex-col items-center gap-1 text-xs text-gray-700 hover:text-emerald-700 transition">
          <User className="w-5 h-5" />
          <span>حساب من</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center space-y-4 text-right">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">نام کاربری / آدرس ایمیل</label>
              <input
                type="text"
                placeholder="نام کاربری یا ایمیل خود را وارد کنید"
                className="w-full text-xs p-2.5 border rounded focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">رمز عبور</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="رمز عبور را وارد کنید"
                  className="w-full text-xs p-2.5 pl-8 border rounded focus:outline-none focus:border-emerald-600"
                />
                <Eye className="w-4 h-4 text-gray-400 absolute left-2.5 top-3 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="accent-emerald-600" />
                <span>مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="hover:underline">فراموشی رمز؟</a>
            </div>

            <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded text-sm transition">
              ورود
            </button>

            <button className="w-full border border-emerald-700 text-emerald-700 hover:bg-emerald-50 py-2.5 rounded text-xs transition">
              کاربر جدید هستید؟ ثبت نام
            </button>
          </div>

          <div className="bg-emerald-700 text-white p-8 hidden md:flex flex-col justify-center items-center text-center space-y-3">
            <h3 className="text-2xl font-bold">ورود</h3>
            <p className="text-xs leading-6 text-emerald-100">
              به بخش سفارشات، لیست علاقه‌مندی‌ها و پیشنهادات خود دسترسی پیدا کنید.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}