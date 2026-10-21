import { Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="border-b border-gray-100 bg-white py-2 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>به فروشگاه ما خوش آمدید</div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 hover:text-emerald-700 transition cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-emerald-700 transition cursor-pointer">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>support@pressmart.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}