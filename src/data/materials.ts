export type Material = {
  name: string;
  image: string;
  description: string;
  usage: string;
  features: string;
  note?: string;
};

/**
 * خامات ومواد التركيب — يمكن التعديل والإضافة بحرية.
 * لم تُذكر أي مواصفات (مثل بلد الصنع أو الدرجة) لأنها تحتاج تأكيدًا من صاحب النشاط.
 */
export const materials: Material[] = [
  {
    name: "قماش مظلات PVC",
    image: "/images/car-shades/car-shade-01.webp",
    description:
      "قماش مخصص للمظلات يُستخدم في التغطية، ويتوفر بألوان وسماكات مختلفة.",
    usage: "مظلات السيارات والمظلات المشدودة",
    features: "تظليل جيد وسهولة التشكيل حسب التصميم",
    note: "تُحدد المواصفة والنوع عند طلب عرض السعر.",
  },
  {
    name: "قماش شد إنشائي",
    image: "/images/car-shades/car-shade-04.webp",
    description: "قماش يُستخدم في منشآت الشد للمساحات الكبيرة بأشكال معمارية.",
    usage: "مواقف المنشآت والمساحات الواسعة",
    features: "تغطية مساحات أكبر بشكل معماري",
  },
  {
    name: "هياكل ومواسير حديد",
    image: "/images/warehouses/warehouse-01.webp",
    description: "هياكل ومواسير معدنية تُستخدم كأساس للمظلات والهناجر.",
    usage: "المظلات والهناجر والبرجولات",
    features: "قوة تحمل مع إمكانية الدهان والتشطيب",
  },
  {
    name: "ألمنيوم وشرائح",
    image: "/images/privacy-screens/privacy-screen-01.webp",
    description: "شرائح ألمنيوم تُستخدم في السواتر والبرجولات الحديثة.",
    usage: "السواتر والبرجولات",
    features: "مظهر حديث ومقاومة جيدة للصدأ",
  },
  {
    name: "خشب مركب (WPC)",
    image: "/images/privacy-screens/privacy-screen-02.webp",
    description: "بديل خشبي يُستخدم في السواتر والبرجولات والتشطيبات الخارجية.",
    usage: "السواتر والبرجولات والجلسات",
    features: "شكل خشبي مع عناية أقل من الخشب الطبيعي",
  },
  {
    name: "أقمشة بيوت الشعر",
    image: "/images/beit-shaar/beit-shaar-03.webp",
    description: "أقمشة تُستخدم في بيوت الشعر والخيام بتصاميم متعددة.",
    usage: "بيوت الشعر والخيام والمجالس",
    features: "خيارات متنوعة في الشكل والتشطيب الداخلي",
  },
  {
    name: "ألواح سندوتش بانل",
    image: "/images/sandwich-panel/sandwich-panel-01.webp",
    description: "ألواح للجدران والأسقف بسماكات مختلفة حسب المتوفر.",
    usage: "الغرف والمستودعات والهناجر",
    features: "تركيب سريع وعزل حسب نوع اللوح وسماكته",
  },
];
