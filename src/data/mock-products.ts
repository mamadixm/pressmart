export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  ratingCount: number;
  image: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "ساعت مچی آنالوگ و دیجیتال مردانه",
    category: "ساعت های دیجیتال",
    price: 500000,
    originalPrice: 650000,
    discountBadge: "۲۳٪ حراج",
    rating: 5,
    ratingCount: 5,
    image: "/images/watch.png",
  },
  {
    id: "2",
    title: "کوله پشتی لپ تاپ اسپرت",
    category: "کوله پشتی",
    price: 150000,
    discountBadge: "ویژه",
    rating: 4,
    ratingCount: 12,
    image: "/images/backpack.png",
  },
  {
    id: "3",
    title: "ژاکت چرم قهوه ای مردانه",
    category: "ژاکت و کت",
    price: 110000,
    rating: 4,
    ratingCount: 3,
    image: "/images/jacket.png",
  },
  {
    id: "4",
    title: "تی‌شرت یقه گرد مردانه طرح‌دار",
    category: "تی شرت و پیراهن",
    price: 50000,
    rating: 5,
    ratingCount: 8,
    image: "/images/tshirt.png",
  },
];