"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShoppingBag
} from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("تهران");
  const [city, setCity] = useState("تهران");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"online" | "cod">("online");
  const [isSuccess, setIsSuccess] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = totalPrice > 1000000 || totalPrice === 0 ? 0 : 65000;
  const finalPrice = totalPrice + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error("سبد خرید شما خالی است!");
      return;
    }

    if (!fullName || !phone || !address) {
      toast.error("لطفاً تمامی فیلدهای الزامی را تکمیل کنید.");
      return;
    }

    // تولید کد پیگیری رندوم
    const generatedCode = "PRM-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingCode(generatedCode);
    setIsSuccess(true);
    clearCart();
    toast.success("سفارش شما با موفقیت ثبت شد!");
  };

  // نمای پیام تایید نهایی ثبت سفارش
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6 text-right">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-black text-gray-900">
              سفارش شما با موفقیت ثبت و تایید شد!
            </h1>
            <p className="text-xs text-gray-500 leading-6 max-w-md mx-auto">
              پیامک تایید سفارش به همراه جزئیات ارسال به شماره <span className="font-bold text-gray-800">{phone}</span> ارسال گردید.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl max-w-sm mx-auto space-y-2 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>کد پیگیری مرسوله:</span>
              <span className="font-mono font-bold text-emerald-700 text-sm tracking-wider">{trackingCode}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>مبلغ پرداختی:</span>
              <span className="font-bold text-gray-900">{finalPrice.toLocaleString("fa-IR")} تومان</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>شیوه پرداخت:</span>
              <span className="font-bold text-gray-900">
                {paymentMethod === "online" ? "درگاه پرداخت آنلاین شاپرک" : "پرداخت در محل"}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition"
            >
              بازگشت به صفحه اصلی
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs py-2.5 px-6 rounded-xl transition"
            >
              مشاهده سایر محصولات
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
        <h2 className="text-base font-bold text-gray-800">سبد خرید شما برای تسویه خالی است</h2>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-emerald-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl"
        >
          <span>رفتن به فروشگاه</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 text-right">
      <div className="border-b border-gray-100 pb-4">
        <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
          <Truck className="w-5 h-5 text-emerald-700" />
          <span>تکمیل اطلاعات و ثبت سفارش</span>
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          آدرس پستی و شیوه ارسال سفارش خود را تعیین کنید.
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* فرم مشخصات گیرنده و شیوه پرداخت (۸ ستون) */}
        <div className="lg:col-span-8 space-y-6">
          {/* باکس مشخصات و آدرس */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>مشخصات گیرنده و نشانی تحویل</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">نام و نام خانوادگی *</label>
                <input
                  required
                  type="text"
                  placeholder="مثال: رضا احمدی"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">شماره تلفن همراه *</label>
                <input
                  required
                  type="tel"
                  dir="ltr"
                  placeholder="09123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600 text-right"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">استان *</label>
                <input
                  required
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">شهر *</label>
                <input
                  required
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">آدرس دقیق پستی *</label>
              <textarea
                required
                rows={2}
                placeholder="نام خیابان، کوچه، پلاک، واحد..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 text-xs outline-none focus:border-emerald-600"
              />
            </div>

            <div className="sm:w-1/2 space-y-1">
              <label className="text-xs font-bold text-gray-700">کد پستی (۱۰ رقمی)</label>
              <input
                type="text"
                dir="ltr"
                placeholder="1234567890"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-600 text-right"
              />
            </div>
          </div>

          {/* باکس انتخاب شیوه پرداخت */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>انتخاب شیوه پرداخت</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                onClick={() => setPaymentMethod("online")}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                  paymentMethod === "online"
                    ? "border-emerald-600 bg-emerald-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="mt-1 accent-emerald-600"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-900 block">پرداخت اینترنتی (شاپرک)</span>
                  <span className="text-[11px] text-gray-500 block">
                    تسویه با تمامی کارت‌های بانکی عضو شتاب
                  </span>
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod("cod")}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                  paymentMethod === "cod"
                    ? "border-emerald-600 bg-emerald-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mt-1 accent-emerald-600"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-900 block">پرداخت در محل</span>
                  <span className="text-[11px] text-gray-500 block">
                    پرداخت توسط کارتخوان هنگام تحویل
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* پیش‌فاکتور و ثبت نهایی (۴ ستون) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3">
            اقلام سفارش ({items.length})
          </h2>

          <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto space-y-2">
            {items.map((item) => (
              <div key={item.id} className="pt-2 first:pt-0 flex items-center gap-3">
                <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-gray-800 truncate">{item.title}</h3>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {item.quantity} عدد × {item.price.toLocaleString("fa-IR")} تومان
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>مجموع اقلام:</span>
              <span className="font-bold text-gray-900">{totalPrice.toLocaleString("fa-IR")} تومان</span>
            </div>
            <div className="flex justify-between">
              <span>هزینه بسته‌بندی و ارسال:</span>
              <span>{shippingFee === 0 ? "رایگان" : `${shippingFee.toLocaleString("fa-IR")} تومان`}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-100 text-sm font-black text-gray-900">
              <span>مبلغ نهایی:</span>
              <span className="text-emerald-700">{finalPrice.toLocaleString("fa-IR")} تومان</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm mt-4"
          >
            <span>پرداخت و ثبت نهایی سفارش</span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ضمانت بازگشت وجه در صورت مغایرت کالا</span>
          </div>
        </div>
      </form>
    </div>
  );
}
