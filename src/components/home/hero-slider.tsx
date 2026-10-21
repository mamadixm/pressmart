"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    title: "مجموعه جدید",
    highlight: "لباس‌های مردانه",
    subtitle: "بین ۴۵٪ تا ۶۰٪ تخفیف",
    primaryBtn: { text: "الان بخرید", href: "/products" },
    secondaryBtn: { text: "اطلاعات بیشتر", href: "/products" },
    bgGradient: "from-slate-900 via-slate-800 to-slate-900",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "فروش ویژه فصل",
    highlight: "اکسسوری و ساعت",
    subtitle: "تا ۵۰٪ تخفیف اختصاصی",
    primaryBtn: { text: "مشاهده محصولات", href: "/products" },
    secondaryBtn: { text: "کاتالوگ جدید", href: "/products" },
    bgGradient: "from-emerald-950 via-slate-900 to-slate-950",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white select-none">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className={`relative flex-[0_0_100%] min-w-0 h-[420px] md:h-[500px] lg:h-[560px] flex items-center justify-between px-8 md:px-20 bg-cover bg-center`}
              style={{ backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4)), url(${slide.image})` }}
            >
              {/* متن و اکشن‌ها */}
              <div className="max-w-xl space-y-4 text-right z-10 mr-auto md:mr-16">
                <span className="text-lg md:text-2xl font-light text-gray-200 block">
                  {slide.title}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  {slide.highlight}
                </h2>
                <p className="text-sm md:text-lg text-emerald-400 font-medium">
                  {slide.subtitle}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={slide.primaryBtn.href}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded transition"
                  >
                    {slide.primaryBtn.text}
                  </Link>
                  <Link
                    href={slide.secondaryBtn.href}
                    className="border border-white/70 hover:bg-white hover:text-gray-900 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded transition"
                  >
                    {slide.secondaryBtn.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* کلید قبلی */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition text-white"
        aria-label="قبلی"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* کلید بعدی */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition text-white"
        aria-label="بعدی"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* نقطه‌های نشانگر (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              selectedIndex === index ? "bg-amber-500 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}