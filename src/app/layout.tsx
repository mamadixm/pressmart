import type { Metadata } from "next";
import "@/app/globals.css"; // یا "@/styles/globals.css" بسته به مسیر پروژه شما
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی پرس‌مارت",
  description: "خرید آنلاین انواع پوشاک، کفش و اکسسوری مد روز با بهترین قیمت",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 antialiased selection:bg-emerald-500 selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <Toaster position="bottom-left" richColors closeButton />
      </body>
    </html>
  );
}