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
    id: "project-01",
    title: "مظلات سيارات — نموذج 1",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-01.webp",
  },
  {
    id: "project-02",
    title: "مظلات سيارات — نموذج 2",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-02.webp",
  },
  {
    id: "project-03",
    title: "مظلات سيارات — نموذج 3",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-03.webp",
  },
  {
    id: "project-04",
    title: "مظلات سيارات — نموذج 4",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-04.webp",
  },
  {
    id: "project-05",
    title: "مظلات سيارات — نموذج 5",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-05.webp",
  },
  {
    id: "project-06",
    title: "مظلات سيارات — نموذج 6",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-06.webp",
  },
  {
    id: "project-07",
    title: "مظلات سيارات — نموذج 7",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-07.webp",
  },
  {
    id: "project-08",
    title: "مظلات سيارات — نموذج 8",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-01.webp",
  },
  {
    id: "project-09",
    title: "مظلات سيارات — نموذج 9",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-02.webp",
  },
  {
    id: "project-10",
    title: "مظلات سيارات — نموذج 10",
    category: "car-shades",
    description: "نموذج مظلة سيارات — من أعمال ركن المقصورة في جدة.",
    image: "/images/car-shades/car-shade-03.webp",
  },
  {
    id: "project-11",
    title: "بيوت شعر وخيام — نموذج 1",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-01.webp",
  },
  {
    id: "project-12",
    title: "بيوت شعر وخيام — نموذج 2",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-02.webp",
  },
  {
    id: "project-13",
    title: "بيوت شعر وخيام — نموذج 3",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-03.webp",
  },
  {
    id: "project-14",
    title: "بيوت شعر وخيام — نموذج 4",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-04.webp",
  },
  {
    id: "project-15",
    title: "بيوت شعر وخيام — نموذج 5",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-01.webp",
  },
  {
    id: "project-16",
    title: "بيوت شعر وخيام — نموذج 6",
    category: "beit-shaar",
    description: "نموذج بيت شعر / خيمة — من أعمال ركن المقصورة في جدة.",
    image: "/images/beit-shaar/beit-shaar-02.webp",
  },
  {
    id: "project-17",
    title: "برجولات — نموذج 1",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-01.webp",
  },
  {
    id: "project-18",
    title: "برجولات — نموذج 2",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-02.webp",
  },
  {
    id: "project-19",
    title: "برجولات — نموذج 3",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-03.webp",
  },
  {
    id: "project-20",
    title: "برجولات — نموذج 4",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-01.webp",
  },
  {
    id: "project-21",
    title: "برجولات — نموذج 5",
    category: "pergolas",
    description: "نموذج برجولة — من أعمال ركن المقصورة في جدة.",
    image: "/images/pergolas/pergola-02.webp",
  },
  {
    id: "project-22",
    title: "سواتر — نموذج 1",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-01.webp",
  },
  {
    id: "project-23",
    title: "سواتر — نموذج 2",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-02.webp",
  },
  {
    id: "project-24",
    title: "سواتر — نموذج 3",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-01.webp",
  },
  {
    id: "project-25",
    title: "سواتر — نموذج 4",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-02.webp",
  },
  {
    id: "project-26",
    title: "سواتر — نموذج 5",
    category: "privacy-screens",
    description: "نموذج ساتر — من أعمال ركن المقصورة في جدة.",
    image: "/images/privacy-screens/privacy-screen-01.webp",
  },
  {
    id: "project-27",
    title: "هناجر ومستودعات — نموذج 1",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-01.webp",
  },
  {
    id: "project-28",
    title: "هناجر ومستودعات — نموذج 2",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-02.webp",
  },
  {
    id: "project-29",
    title: "هناجر ومستودعات — نموذج 3",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-01.webp",
  },
  {
    id: "project-30",
    title: "هناجر ومستودعات — نموذج 4",
    category: "warehouses",
    description: "نموذج هنجر أو مستودع — من أعمال ركن المقصورة في جدة.",
    image: "/images/warehouses/warehouse-02.webp",
  },
  {
    id: "project-31",
    title: "سندوتش بانل — نموذج 1",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-01.webp",
  },
  {
    id: "project-32",
    title: "سندوتش بانل — نموذج 2",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-02.webp",
  },
  {
    id: "project-33",
    title: "سندوتش بانل — نموذج 3",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-01.webp",
  },
  {
    id: "project-34",
    title: "سندوتش بانل — نموذج 4",
    category: "sandwich-panel",
    description: "نموذج سندوتش بانل — من أعمال ركن المقصورة في جدة.",
    image: "/images/sandwich-panel/sandwich-panel-02.webp",
  },
];
