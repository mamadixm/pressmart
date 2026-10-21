"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export function CartSheet() {
  const { items, removeItem, addItem } = useCartStore();

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger>
        <button className="relative flex flex-col items-center gap-1 text-xs text-gray-700 hover:text-emerald-700 transition">
          <ShoppingBag className="w-5 h-5" />
          <span>سبد خرید</span>
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:max-w-md bg-white border-r border-gray-200 p-0 flex flex-col h-full shadow-2xl z-[100]"
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white text-right">
          <SheetTitle className="text-sm font-bold text-gray-800">
            سبد خرید شما ({items.length} کالا)
          </SheetTitle>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center space-y-3 bg-white">
            <ShoppingBag className="w-14 h-14 text-gray-300 stroke-1" />
            <p className="text-xs font-medium text-gray-500">
              سبد خرید شما در حال حاضر خالی است!
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                <div className="relative w-16 h-16 rounded-md border border-gray-200 bg-gray-50 overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 text-right space-y-1">
                  <h4 className="text-xs font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="text-xs text-emerald-700 font-bold">
                    {item.price.toLocaleString("fa-IR")} تومان
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center border border-gray-200 rounded bg-white">
                      <button
                        type="button"
                        onClick={() => addItem({ ...item, quantity: 1 })}
                        className="p-1 hover:bg-gray-100 text-gray-600 transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.quantity > 1) {
                            addItem({ ...item, quantity: -1 });
                          } else {
                            removeItem(item.id);
                          }
                        }}
                        className="p-1 hover:bg-gray-100 text-gray-600 transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-rose-600 p-1 transition"
                      title="حذف کالا"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">مجموع پرداختی:</span>
              <span className="text-sm font-bold text-gray-900">
                {totalAmount.toLocaleString("fa-IR")} تومان
              </span>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-2.5 rounded-lg text-xs font-semibold shadow-sm transition"
            >
              تکمیل سفارش و تسویه‌حساب
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
