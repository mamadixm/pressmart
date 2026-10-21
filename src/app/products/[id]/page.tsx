"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_PRODUCTS } from "@/lib/products-data";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";
import { ProductCard } from "@/components/shared/product-card";
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ChevronLeft,
  MessageSquare,
  User,
  Send
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = ALL_PRODUCTS.find((p) => String(p.id) === String(resolvedParams.id));

  if (!product) {
    notFound();
  }

  // سایزهای داینامیک محصول
  const availableSizes = product.sizes && product.sizes.length > 0 ? product.sizes : ["Free Size"];
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  // نظرات تستی
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      author: "محمدرضا سلیمانی",
      rating: 5,
      date: "۱۴ مهر ۱۴۰۳",
      comment: "کیفیت دوخت و متریال واقعاً عالی بود. دقیقاً مطابق عکس و جدول سایزها.",
    },
    {
      id: "2",
      author: "الهام کریمی",
      rating: 4,
      date: "۲۸ شهریور ۱۴۰۳",
      comment: "ارسال سریع بود و بسته‌بندی تمیزی داشت. سایزش هم کاملاً استاندارد بود.",
    },
  ]);

  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: String(product.id),
      title: product.title,
      price: Number(product.price),
      image: product.image,
      quantity,
    });
    toast.success("به سبد خرید اضافه شد: " + product.title);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newReviewItem: Review = {
      id: String(Date.now()),
      author: newAuthor.trim(),
      rating: newRating,
      date: "امروز",
      comment: newComment.trim(),
    };

    setReviews([newReviewItem, ...reviews]);
    setNewAuthor("");
    setNewComment("");
    setNewRating(5);
    toast.success("دیدگاه شما با موفقیت ثبت شد!");
  };

  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.category === product.category && String(p.id) !== String(product.id)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* مسیر ناوبری */}
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-emerald-700">خانه</Link>
        <ChevronLeft className="w-3.5 h-3.5" />
        <Link href="/products" className="hover:text-emerald-700">فروشگاه</Link>
        <ChevronLeft className="w-3.5 h-3.5" />
        <span className="text-gray-900 font-medium">{product.title}</span>
      </nav>

      {/* بخش بالای صفحه: تصویر و فرم خرید */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          {product.discount && (
            <span className="absolute top-4 right-4 z-10 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
              {product.discount}٪ تخفیف
            </span>
          )}
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between space-y-6 text-right">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
              {product.category === "men" ? "پوشاک مردانه" : product.category}
            </span>

            <h1 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={"w-4 h-4 " + (i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200")}
                  />
                ))}
                <span className="text-gray-500 mr-1 font-bold">({product.rating})</span>
              </div>
              <span className="text-gray-200">|</span>
              <span className="text-emerald-700 font-bold">موجود در انبار پرس‌مارت</span>
            </div>

            <div className="flex items-baseline gap-2 pt-2">
              <span className="text-2xl font-black text-gray-900">
                {product.price.toLocaleString("fa-IR")}
              </span>
              <span className="text-xs text-gray-500 font-medium">تومان</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through mr-2">
                  {product.originalPrice.toLocaleString("fa-IR")} تومان
                </span>
              )}
            </div>

            {/* سایزبندی داینامیک */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-gray-700">انتخاب سایز:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={"px-3.5 h-9 rounded-lg border text-xs font-bold transition " + (selectedSize === size ? "border-emerald-600 bg-emerald-50 text-emerald-700 font-black shadow-sm" : "border-gray-200 text-gray-700 hover:border-gray-300")}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* شمارنده تعداد و دکمه خرید */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50 w-28 shrink-0 justify-between">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="p-1.5 hover:bg-white rounded-lg transition text-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs font-black text-gray-800">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="p-1.5 hover:bg-white rounded-lg transition text-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-[11px] text-gray-500 text-center">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>ارسال سریع</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>اصالت کالا</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-emerald-600" />
              <span>۷ روز ضمانت بازگشت</span>
            </div>
          </div>
        </div>
      </div>

      {/* بخش تب‌ها: توضیحات داینامیک / مشخصات داینامیک / نظرات */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-right">
        <div className="flex border-b border-gray-100 px-6 gap-6 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("desc")}
            className={"py-4 border-b-2 transition " + (activeTab === "desc" ? "border-emerald-700 text-emerald-700" : "border-transparent text-gray-400 hover:text-gray-700")}
          >
            توضیحات و نقد و بررسی
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("specs")}
            className={"py-4 border-b-2 transition " + (activeTab === "specs" ? "border-emerald-700 text-emerald-700" : "border-transparent text-gray-400 hover:text-gray-700")}
          >
            مشخصات فنی و جدول سایز
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={"py-4 border-b-2 transition flex items-center gap-1.5 " + (activeTab === "reviews" ? "border-emerald-700 text-emerald-700" : "border-transparent text-gray-400 hover:text-gray-700")}
          >
            <span>دیدگاه کاربران</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">
              {reviews.length}
            </span>
          </button>
        </div>

        <div className="p-6 md:p-8 text-xs leading-7 text-gray-600">
          {/* تب توضیحات و ویژگی‌های داینامیک محصول */}
          {activeTab === "desc" && (
            <div className="space-y-4">
              <p className="text-gray-700 leading-7">
                {product.description || "توضیحات کاملی برای این کالا ثبت نشده است."}
              </p>

              {product.features && product.features.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="font-bold text-gray-800 text-xs">ویژگی‌های برجسته محصول:</span>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-600 pr-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* تب جدول مشخصات فنی داینامیک محصول */}
          {activeTab === "specs" && (
            <div className="max-w-lg divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
              <div className="flex justify-between p-3.5 bg-gray-50/60">
                <span className="font-bold text-gray-700">دسته‌بندی اصلی</span>
                <span className="text-gray-600">{product.category}</span>
              </div>

              {product.specs && product.specs.length > 0 ? (
                product.specs.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between p-3.5 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                  >
                    <span className="font-bold text-gray-700">{item.label}</span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-400">
                  مشخصات فنی برای این کالا ثبت نشده است.
                </div>
              )}
            </div>
          )}

          {/* تب نظرات */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                {reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-gray-900">{rev.author}</span>
                          <span className="text-[10px] text-gray-400 mr-2">{rev.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={"w-3.5 h-3.5 " + (i < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200")}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs leading-6 pr-10">{rev.comment}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 bg-gray-50/60 p-5 rounded-xl border border-gray-100 space-y-4">
                <div className="flex items-center gap-2 font-bold text-gray-800 text-sm border-b border-gray-200/60 pb-3">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>ثبت دیدگاه برای این کالا</span>
                </div>

                <form onSubmit={handleAddReview} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-gray-700 font-semibold text-[11px]">نام شما *</label>
                    <input
                      required
                      type="text"
                      placeholder="مثال: علی رضایی"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-700 font-semibold text-[11px]">امتیاز شما:</label>
                    <div className="flex items-center gap-1.5 text-amber-400 pt-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="hover:scale-110 transition"
                        >
                          <Star
                            className={"w-5 h-5 " + (star <= newRating ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200")}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-700 font-semibold text-[11px]">متن نظر *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="تجربه خرید یا کیفیت محصول را بنویسید..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>ارسال دیدگاه</span>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* بخش محصولات مرتبط */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-gray-200/70 pb-4">
            <h2 className="text-lg font-black text-gray-900">محصولات مرتبط و مشابه</h2>
            <Link
              href="/products"
              className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
            >
              <span>مشاهده همه محصولات</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}