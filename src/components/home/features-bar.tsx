import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "ارسال رایگان و سریع",
    description: "برای سفارش‌های بالای ۵۰۰ هزار تومان",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت و سلامت",
    description: "تضمین بازگشت وجه تا ۷ روز کاری",
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴ ساعته",
    description: "پاسخگویی در تمام روزهای هفته",
  },
  {
    icon: CreditCard,
    title: "پرداخت امن و مطمئن",
    description: "پشتیبانی از کلیه کارت‌های عضو شتاب",
  },
];

export function FeaturesBar() {
  return (
    <div className="border border-gray-100 bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-4 text-right">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">{item.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}