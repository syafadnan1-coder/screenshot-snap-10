export type ProjectCategory =
  | "car-shades"
  | "beit-shaar"
  | "pergolas"
  | "privacy-screens"
  | "warehouses"
  | "sandwich-panel";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  /** ضع صورتك في /public/images/projects/ ثم ضع مسارها هنا */
  image: string;
  /** المدينة أو المنطقة — اختياري */
  area?: string;
  /** تاريخ المشروع — اختياري */
  date?: string;
  /** صور إضافية — اختياري */
  extraImages?: string[];
};

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "car-shades", label: "مظلات سيارات" },
  { value: "beit-shaar", label: "بيوت شعر" },
  { value: "pergolas", label: "برجولات" },
  { value: "privacy-screens", label: "سواتر" },
  { value: "warehouses", label: "هناجر" },
  { value: "sandwich-panel", label: "سندوتش بانل" },
];

/**
 * معرض الأعمال.
 * * لإضافة مشروع: ضع الصورة في /public/images/projects/ وأضف عنصرًا جديدًا هنا.
 */
export const projects: Project[] = [
  {
    id: "car-shade-01",
    title: "مظلات سيارات — نموذج 1",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-01.webp",
  },
  {
    id: "car-shade-02",
    title: "مظلات سيارات — نموذج 2",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-02.webp",
  },
  {
    id: "car-shade-03",
    title: "مظلات سيارات — نموذج 3",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-03.webp",
  },
  {
    id: "car-shade-04",
    title: "مظلات سيارات — نموذج 4",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-04.webp",
  },
  {
    id: "car-shade-05",
    title: "مظلات سيارات — نموذج 5",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-05.webp",
  },
  {
    id: "car-shade-06",
    title: "مظلات سيارات — نموذج 6",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-06.webp",
  },
  {
    id: "car-shade-07",
    title: "مظلات سيارات — نموذج 7",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-07.webp",
  },
  {
    id: "car-shade-08",
    title: "مظلات سيارات — نموذج 8",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-08.webp",
  },
  {
    id: "car-shade-09",
    title: "مظلات سيارات — نموذج 9",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-09.webp",
  },
  {
    id: "car-shade-10",
    title: "مظلات سيارات — نموذج 10",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-10.webp",
  },
  {
    id: "car-shade-11",
    title: "مظلات سيارات — نموذج 11",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-11.webp",
  },
  {
    id: "car-shade-12",
    title: "مظلات سيارات — نموذج 12",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-12.webp",
  },
  {
    id: "car-shade-13",
    title: "مظلات سيارات — نموذج 13",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-13.webp",
  },
  {
    id: "car-shade-14",
    title: "مظلات سيارات — نموذج 14",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-14.webp",
  },
  {
    id: "beit-shaar-01",
    title: "بيوت شعر وخيام — نموذج 1",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-01.webp",
  },
  {
    id: "beit-shaar-02",
    title: "بيوت شعر وخيام — نموذج 2",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-02.webp",
  },
  {
    id: "beit-shaar-03",
    title: "بيوت شعر وخيام — نموذج 3",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-03.webp",
  },
  {
    id: "beit-shaar-04",
    title: "بيوت شعر وخيام — نموذج 4",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-04.webp",
  },
  {
    id: "beit-shaar-05",
    title: "بيوت شعر وخيام — نموذج 5",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-05.webp",
  },
  {
    id: "beit-shaar-06",
    title: "بيوت شعر وخيام — نموذج 6",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-06.webp",
  },
  {
    id: "pergola-01",
    title: "برجولات — نموذج 1",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-01.webp",
  },
  {
    id: "pergola-02",
    title: "برجولات — نموذج 2",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-02.webp",
  },
  {
    id: "pergola-03",
    title: "برجولات — نموذج 3",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-03.webp",
  },
  {
    id: "pergola-04",
    title: "برجولات — نموذج 4",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-04.webp",
  },
  {
    id: "pergola-05",
    title: "برجولات — نموذج 5",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-05.webp",
  },
  {
    id: "pergola-06",
    title: "برجولات — نموذج 6",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-06.webp",
  },
  {
    id: "pergola-07",
    title: "برجولات — نموذج 7",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-07.webp",
  },
  {
    id: "pergola-08",
    title: "برجولات — نموذج 8",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-08.webp",
  },
  {
    id: "pergola-09",
    title: "برجولات — نموذج 9",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-09.webp",
  },
  {
    id: "pergola-10",
    title: "برجولات — نموذج 10",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-10.webp",
  },
  {
    id: "privacy-screen-01",
    title: "سواتر — نموذج 1",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-01.webp",
  },
  {
    id: "privacy-screen-02",
    title: "سواتر — نموذج 2",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-02.webp",
  },
  {
    id: "privacy-screen-03",
    title: "سواتر — نموذج 3",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-03.webp",
  },
  {
    id: "privacy-screen-04",
    title: "سواتر — نموذج 4",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-04.webp",
  },
  {
    id: "privacy-screen-05",
    title: "سواتر — نموذج 5",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-05.webp",
  },
  {
    id: "warehouse-01",
    title: "هناجر ومستودعات — نموذج 1",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-01.webp",
  },
  {
    id: "warehouse-02",
    title: "هناجر ومستودعات — نموذج 2",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-02.webp",
  },
  {
    id: "sandwich-panel-01",
    title: "سندوتش بانل — نموذج 1",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-01.webp",
  },
  {
    id: "sandwich-panel-02",
    title: "سندوتش بانل — نموذج 2",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-02.webp",
  },
];
