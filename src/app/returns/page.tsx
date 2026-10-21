import { HelpPageLayout } from "@/components/layout/help-page-layout";

export default function ReturnsPage() {
  return (
    <HelpPageLayout
      title="شیوه‌های بازگرداندن کالا"
      subtitle="راهنمای شرایط، نحوه تعویض و بازگرداندن سفارش‌ها در پرس‌مارت"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۱. مهلت ۷ روزه بازگشت کالا</h2>
          <p>
            رضایت مشتریان اولویت اصلی ماست. در صورتی که کالای خریداری‌شده با سفارش شما مغایرت داشته باشد یا دارای نقص ظاهری باشد، تا ۷ روز پس از دریافت امکان ثبت درخواست مرجوعی وجود دارد.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۲. شرایط تایید مرجوعی</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 pr-1">
            <li>محصول نباید مورد استفاده قرار گرفته یا شسته شده باشد.</li>
            <li>برچسب‌ها، بارکد و جعبه اصلی کالا باید کاملاً دست‌نخورده باقی بمانند.</li>
            <li>پوشاک زیر به دلایل بهداشتی شامل ضمانت بازگشت نمی‌شوند.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۳. نحوه واریز وجه</h2>
          <p>
            پس از دریافت کالا در انبار مرکزی و تایید سلامت آن توسط کارشناسان، مبلغ سفارش ظرف مدت ۲۴ الی ۴۸ ساعت کاری به شماره شبای حساب خریدار واریز خواهد شد.
          </p>
        </section>
      </div>
    </HelpPageLayout>
  );
}
