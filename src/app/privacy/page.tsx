import { HelpPageLayout } from "@/components/layout/help-page-layout";

export default function PrivacyPage() {
  return (
    <HelpPageLayout
      title="حفظ حریم خصوصی"
      subtitle="تعهدات و استانداردهای امنیتی پرس‌مارت در حفظ و نگهداری اطلاعات کاربران"
      lastUpdated="مهر ۱۴۰۵"
    >
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۱. جمع‌آوری و استفاده از اطلاعات</h2>
          <p>
            پرس‌مارت برای پردازش سفارش‌ها، ارسال فاکتور و اطلاع‌رسانی پیامکی، اطلاعاتی نظیر نام، شماره تلفن، آدرس پستی و ایمیل را دریافت می‌کند. این اطلاعات نزد ما محرمانه بوده و در اختیار اشخاص ثالث قرار نخواهد گرفت.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۲. امنیت درگاه‌های پرداخت</h2>
          <p>
            تمامی پرداخت‌ها در بستر شاپرک و با پروتکل‌های رمزنگاری شده استاندارد انجام می‌گیرد. پرس‌مارت هیچ‌گونه دسترسی به اطلاعات کارت بانکی کاربران ندارد.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-gray-900">۳. ارتباط با پشتیبانی امنیتی</h2>
          <p>
            در صورت مشاهده هرگونه مورد مشکوک یا نیاز به ویرایش و حذف حساب کاربری، می‌توانید مراتب را مستقیماً از طریق ایمیل پشتیبانی با ما در میان بگذارید.
          </p>
        </section>
      </div>
    </HelpPageLayout>
  );
}
