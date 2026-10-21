"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const { items, addItem, removeItem, clearCart } = useCartStore();

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = totalPrice > 1000000 || totalPrice === 0 ? 0 : 65000;
  const finalPrice = totalPrice + shippingFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 text-right">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-700" />
          <span>سبد خرید شما</span>
        </h1>
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => {
              clearCart();
              toast.info("سبد خرید خالی شد");
            }}
            className="text-xs text-rose-600 hover:underline font-bold"
          >
            حذف همه کالاها
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center space-y-4 shadow-sm">
          <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto stroke-1" />
          <h2 className="text-base font-bold text-gray-800">سبد خرید شما در حال حاضر خالی است</h2>
          <p className="text-xs text-gray-500">برای مشاهده محصولات و انتخاب سایز به فروشگاه بروید.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition"
          >
            <span>رفتن به فروشگاه</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* لیست اقلام سبد */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 p-6 space-y-4 shadow-sm divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-4">
                <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <div className="flex-1 space-y-1">
                  <Link
                    href={`/products/${item.id}`}
                    className="text-xs sm:text-sm font-bold text-gray-800 hover:text-emerald-700 transition line-clamp-1"
                  >
                    {item.title}
                  </Link>
                  <div className="text-xs font-black text-gray-900">
                    {item.price.toLocaleString("fa-IR")} تومان
                  </div>
                </div>

                {/* کنترل تعداد */}
                <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    className="p-1 hover:bg-white rounded transition text-gray-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2.5 text-xs font-bold text-gray-800">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => addItem({ ...item, quantity: -1 })}
                    className="p-1 hover:bg-white rounded transition text-gray-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    removeItem(item.id);
                    toast.info("کالا از سبد حذف شد");
                  }}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                  title="حذف"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* خلاصه فاکتور */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-6 space-y-4 shadow-sm">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3">
              خلاصه صورت‌حساب
            </h2>
            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>قیمت کالاها ({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
                <span className="font-bold text-gray-900">{totalPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>هزینه ارسال</span>
                <span>{shippingFee === 0 ? "رایگان" : `${shippingFee.toLocaleString("fa-IR")} تومان`}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100 text-sm font-black text-gray-900">
                <span>مبلغ قابل پرداخت</span>
                <span className="text-emerald-700">{finalPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm flex items-center justify-center gap-2"
            >
              <span>ادامه فرآیند خرید و پرداخت</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>پرداخت امن از درگاه شاپرک با کلیه کارت‌های عضو شتاب</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}