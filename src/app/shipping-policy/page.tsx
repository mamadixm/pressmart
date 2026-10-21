import { HelpPageLayout } from "@/components/layout/help-page-layout";

export default function ShippingPolicyPage() {
  return (
    <HelpPageLayout
      title="رویه ارسال سفارش"
      subtitle="راهنمای کامل شیوه‌ها، زمان‌بندی و هزینه‌های ارسال در فروشگاه پرس‌مارت"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۱. شیوه ارسال سریع (اکسپرس)</h2>
          <p>
            سفارش‌های ثبت‌شده در شهر تهران تا قبل از ساعت ۱۶، در همان روز کاری و از طریق پیک اختصاصی تحویل داده می‌شوند.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۲. ارسال به سراسر کشور</h2>
          <p>
            سفارش‌های خارج از تهران توسط شرکت پست پیشتاز و تیپاکس ارسال شده و بین ۲ الی ۴ روز کاری به دست مشتریان گرامی می‌رسد.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۳. هزینه ارسال</h2>
          <p>
            برای خریدهای بالاتر از ۱ میلیون تومان، ارسال کالا به سراسر کشور کاملاً رایگان خواهد بود.
          </p>
        </section>
      </div>
    </HelpPageLayout>
  );
}