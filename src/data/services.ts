export type ServiceItem = {
  name: string;
  description: string;
  usage?: string;
  materials?: string;
  features?: string;
  image: string;
};

export type Service = {
  /** المعرّف = مسار الصفحة */
  slug:
    | "car-shades"
    | "beit-shaar"
    | "pergolas"
    | "privacy-screens"
    | "warehouses"
    | "sandwich-panel";
  /** عنوان مختصر للبطاقات والقوائم */
  title: string;
  /** عنوان الصفحة H1 */
  heading: string;
  /** عنوان SEO */
  seoTitle: string;
  seoDescription: string;
  short: string;
  intro: string;
  image: string;
  gallery: string[];
  whatsappMessage: string;
  items: ServiceItem[];
};

export const services: Service[] = [
  {
    slug: "car-shades",
    title: "مظلات سيارات",
    heading: "مظلات سيارات في جدة",
    seoTitle: "مظلات سيارات في جدة | ركن المقصورة",
    seoDescription:
      "مظلات سيارات في جدة بتصاميم متعددة: فرنسية، هرمية، مخروطية، قوسية، وشد إنشائي، مع خيارات خامات وتشطيبات حسب المشروع. تواصل عبر واتساب لطلب عرض سعر.",
    short:
      "خيارات متنوعة من مظلات السيارات بتصاميم وأشكال متعددة تناسب المساحات والاستخدامات المختلفة.",
    intro:
      "نوفر خيارات متنوعة من مظلات السيارات بتصاميم وأشكال متعددة تناسب الاستخدامات والمساحات المختلفة، مع إمكانية اختيار الخامات والتشطيبات وفق طبيعة المشروع والمتاح من المنتجات.",
    image: "/images/car-shades/car-shade-01.webp",
    gallery: [
      "/images/car-shades/car-shade-01.webp",
      "/images/car-shades/car-shade-02.webp",
      "/images/car-shades/car-shade-03.webp",
      "/images/car-shades/car-shade-04.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن مظلات السيارات وطلب عرض سعر.",
    items: [
      {
        name: "مظلات سيارات فرنسية",
        description:
          "تصميم انسيابي بشكل مائل أنيق يمنح مدخل المنزل مظهرًا حديثًا.",
        usage: "مداخل المنازل والفلل",
        materials: "هيكل حديد أو مواسير مع قماش مظلات",
        features: "شكل عصري، تصريف مياه جيد",
        image: "/images/car-shades/car-shade-01.webp",
      },
      {
        name: "مظلات سيارات هرمية",
        description: "أشكال هرمية مشدودة تناسب المساحات الواسعة والمواقف.",
        usage: "مواقف المنشآت والمساحات الكبيرة",
        materials: "هيكل معدني مع قماش مشدود",
        features: "تغطية مساحات أكبر بعدد أعمدة أقل",
        image: "/images/car-shades/car-shade-02.webp",
      },
      {
        name: "مظلات سيارات مخروطية",
        description: "تصميم مخروطي بارز يعطي شكلًا مميزًا للمواقف.",
        usage: "المواقف التجارية والحدائق",
        materials: "هيكل معدني مع قماش مظلات",
        features: "مظهر مميز وتهوية جيدة",
        image: "/images/car-shades/car-shade-02.webp",
      },
      {
        name: "مظلات سيارات قوسية",
        description: "شكل قوسي كلاسيكي مريح للعين ومناسب لمعظم المداخل.",
        usage: "المنازل والفلل",
        materials: "مواسير معدنية مقوسة مع قماش أو صاج",
        features: "تصميم عملي وسهل التركيب",
        image: "/images/car-shades/car-shade-03.webp",
      },
      {
        name: "مظلات شد إنشائي",
        description:
          "منشآت قماش مشدود بأشكال معمارية للمساحات الكبيرة والمشاريع.",
        usage: "المنشآت والمشاريع والمساحات الواسعة",
        materials: "أعمدة معدنية وكابلات مع قماش شد إنشائي",
        features: "قدرة على تغطية مساحات واسعة بشكل معماري",
        image: "/images/car-shades/car-shade-04.webp",
      },
      {
        name: "مظلات سيارات حديثة",
        description: "تصاميم حديثة بخطوط بسيطة تناسب الطراز المعاصر.",
        usage: "الفلل والمنازل الحديثة",
        materials: "خيارات متعددة حسب التصميم",
        features: "خطوط نظيفة ومظهر أنيق",
        image: "/images/car-shades/car-shade-01.webp",
      },
      {
        name: "مظلات مواقف السيارات",
        description: "حلول تغطية لمواقف متعددة السيارات حسب المساحة المتاحة.",
        usage: "المجمعات والمنشآت",
        materials: "هيكل معدني مع قماش أو صاج",
        features: "تنظيم المواقف وتغطية أكبر عدد من السيارات",
        image: "/images/car-shades/car-shade-04.webp",
      },
      {
        name: "مظلات سيارات للمنازل",
        description: "مقاسات وتصاميم مناسبة لمداخل المنازل والأحواش.",
        usage: "المنازل",
        materials: "خيارات حسب الطلب",
        features: "استغلال جيد للمساحة",
        image: "/images/car-shades/car-shade-03.webp",
      },
      {
        name: "مظلات سيارات للفلل",
        description: "تصاميم أكثر فخامة تتناسب مع واجهات الفلل.",
        usage: "الفلل والقصور",
        materials: "خيارات حسب التصميم المطلوب",
        features: "تناسق مع الواجهة والتشطيب",
        image: "/images/car-shades/car-shade-01.webp",
      },
      {
        name: "مظلات مواقف للمنشآت حسب الطلب",
        description:
          "تنفيذ مظلات مواقف بمقاسات وتصاميم تُحدد حسب طبيعة المنشأة.",
        usage: "الشركات والمنشآت والجهات",
        materials: "تُحدد بعد معرفة تفاصيل المشروع",
        features: "مرونة في التصميم والمقاسات",
        image: "/images/car-shades/car-shade-02.webp",
      },
    ],
  },
  {
    slug: "beit-shaar",
    title: "بيوت شعر ملكي وخيام",
    heading: "بيوت شعر ملكي وخيام في جدة",
    seoTitle: "بيوت شعر ملكي وخيام في جدة | ركن المقصورة",
    seoDescription:
      "بيوت شعر ملكي وخيام في جدة بتصاميم متعددة للمجالس والجلسات الخارجية، مع خيارات في التصميم والخامات حسب المشروع. تواصل عبر واتساب لطلب التفاصيل.",
    short:
      "خيارات متنوعة من بيوت الشعر والخيام بتصاميم مختلفة للاستخدامات الخارجية والمجالس والجلسات.",
    intro:
      "خيارات متنوعة من بيوت الشعر والخيام بتصاميم وأشكال مختلفة للاستخدامات الخارجية والمجالس والجلسات، مع إمكانية اختيار التصميم والخامات حسب طبيعة المشروع والمتوفر.",
    image: "/images/beit-shaar/beit-shaar-03.webp",
    gallery: [
      "/images/beit-shaar/beit-shaar-01.webp",
      "/images/beit-shaar/beit-shaar-02.webp",
      "/images/beit-shaar/beit-shaar-03.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن بيوت الشعر والخيام وطلب عرض سعر.",
    items: [
      {
        name: "بيوت شعر ملكي",
        description:
          "تصاميم بيوت شعر بمظهر ملكي للمجالس الخارجية مع تشطيب داخلي حسب الطلب.",
        usage: "المجالس والاستقبال الخارجي",
        materials: "أقمشة بيوت الشعر مع هيكل معدني",
        image: "/images/beit-shaar/beit-shaar-03.webp",
      },
      {
        name: "بيوت شعر حديثة",
        description: "خطوط أبسط وتصاميم عصرية مع خيارات إضاءة وتشطيب.",
        usage: "الحدائق والاستراحات",
        materials: "خيارات حسب التصميم",
        image: "/images/beit-shaar/beit-shaar-02.webp",
      },
      {
        name: "خيام",
        description: "خيام بمقاسات وأشكال مختلفة للاستخدامات المتعددة.",
        usage: "المناسبات والاستراحات والرحلات",
        materials: "أقمشة خيام مع هيكل مناسب",
        image: "/images/beit-shaar/beit-shaar-02.webp",
      },
      {
        name: "جلسات خارجية",
        description:
          "تنفيذ جلسات خارجية مغطاة تناسب الحدائق والأسطح والمساحات المفتوحة.",
        usage: "الحدائق والأسطح",
        materials: "خيارات حسب المساحة والتصميم",
        image: "/images/beit-shaar/beit-shaar-01.webp",
      },
    ],
  },
  {
    slug: "pergolas",
    title: "برجولات حدائق",
    heading: "برجولات حدائق في جدة",
    seoTitle: "برجولات حدائق في جدة | ركن المقصورة",
    seoDescription:
      "برجولات حدائق في جدة بتصاميم حديثة للحدائق والأسطح والمساحات الخارجية، مع خيارات خامات متعددة حسب المشروع. تواصل عبر واتساب.",
    short:
      "برجولات للحدائق والمساحات الخارجية بتصاميم حديثة وخيارات خامات متعددة حسب المشروع.",
    intro:
      "نوفر برجولات للحدائق والمساحات الخارجية بتصاميم وخيارات متعددة، مع اختيار الخامة والشكل بما يناسب طبيعة المكان والاستخدام المطلوب.",
    image: "/images/pergolas/pergola-01.webp",
    gallery: [
      "/images/pergolas/pergola-01.webp",
      "/images/pergolas/pergola-02.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن برجولات الحدائق وطلب عرض سعر.",
    items: [
      {
        name: "برجولات حدائق",
        description: "تغطية جزء من الحديقة لإنشاء جلسة مظللة ومريحة.",
        usage: "الحدائق المنزلية",
        materials: "خشب، ألمنيوم، أو حديد حسب الاختيار",
        image: "/images/pergolas/pergola-02.webp",
      },
      {
        name: "برجولات منزلية",
        description: "برجولات لمداخل المنازل والأسطح والمساحات الصغيرة.",
        usage: "المنازل والأسطح",
        materials: "خيارات متعددة",
        image: "/images/pergolas/pergola-01.webp",
      },
      {
        name: "برجولات خارجية بتصاميم حديثة",
        description: "تصاميم حديثة بخطوط بسيطة مع إمكانية إضافة إضاءة.",
        usage: "الحدائق والمقاهي والمساحات الخارجية",
        materials: "ألمنيوم أو حديد مع تشطيب مناسب",
        image: "/images/pergolas/pergola-01.webp",
      },
    ],
  },
  {
    slug: "privacy-screens",
    title: "سواتر منازل",
    heading: "سواتر منازل في جدة",
    seoTitle: "سواتر منازل في جدة | ركن المقصورة",
    seoDescription:
      "سواتر منازل وحدائق في جدة لزيادة الخصوصية بتصاميم حديثة وخيارات خامات متعددة. تواصل عبر واتساب لطلب عرض سعر.",
    short:
      "سواتر للمنازل والحدائق والأسطح لزيادة الخصوصية بتصاميم وخامات مختلفة.",
    intro:
      "نوفر سواتر للمنازل والحدائق والأسطح تساعد على زيادة الخصوصية وتحسين مظهر المكان، مع خيارات في الخامات والتصاميم حسب الاستخدام والمساحة.",
    image: "/images/privacy-screens/privacy-screen-01.webp",
    gallery: [
      "/images/privacy-screens/privacy-screen-01.webp",
      "/images/privacy-screens/privacy-screen-02.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن سواتر المنازل وطلب عرض سعر.",
    items: [
      {
        name: "سواتر للمنازل",
        description: "سواتر لأسوار المنازل والمداخل بمقاسات حسب الموقع.",
        usage: "أسوار ومداخل المنازل",
        materials: "خيارات معدنية أو خشبية حسب المتوفر",
        image: "/images/privacy-screens/privacy-screen-01.webp",
      },
      {
        name: "سواتر للحدائق",
        description: "فصل مساحات الحديقة وتوفير خصوصية للجلسات.",
        usage: "الحدائق والجلسات الخارجية",
        materials: "خيارات متعددة",
        image: "/images/privacy-screens/privacy-screen-02.webp",
      },
      {
        name: "سواتر للخصوصية بتصاميم حديثة",
        description: "تصاميم شرائح حديثة تسمح بالتهوية مع حجب الرؤية.",
        usage: "الأسطح والشرفات",
        materials: "شرائح ألمنيوم أو خشب مركب",
        image: "/images/privacy-screens/privacy-screen-02.webp",
      },
    ],
  },
  {
    slug: "warehouses",
    title: "هناجر ومستودعات",
    heading: "هناجر ومستودعات في جدة",
    seoTitle: "هناجر ومستودعات في جدة | ركن المقصورة",
    seoDescription:
      "هناجر ومستودعات في جدة وحلول تغطية وتخزين بمقاسات وتصاميم حسب المشروع. تواصل عبر واتساب لطلب عرض سعر.",
    short: "هناجر ومستودعات وحلول تغطية وتخزين بمقاسات وتصاميم حسب المشروع.",
    intro:
      "نوفر حلول هناجر ومستودعات وتغطية للمساحات الكبيرة، بمقاسات وتصاميم تُحدد حسب طبيعة المشروع والاستخدام المطلوب.",
    image: "/images/warehouses/warehouse-01.webp",
    gallery: [
      "/images/warehouses/warehouse-01.webp",
      "/images/warehouses/warehouse-02.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن الهناجر والمستودعات وطلب عرض سعر.",
    items: [
      {
        name: "هناجر",
        description: "هياكل معدنية مغطاة للمساحات الواسعة والاستخدامات المختلفة.",
        usage: "الورش والمصانع والمخازن",
        materials: "هيكل حديد مع صاج أو سندوتش بانل",
        image: "/images/warehouses/warehouse-01.webp",
      },
      {
        name: "مستودعات",
        description: "مستودعات تخزين بمقاسات مختلفة حسب الاحتياج.",
        usage: "التخزين وحفظ المواد",
        materials: "خيارات حسب المشروع",
        image: "/images/warehouses/warehouse-02.webp",
      },
      {
        name: "حلول تغطية حسب المشروع",
        description: "تغطية ساحات ومساحات عمل بحسب المتاح ونوع الموقع.",
        usage: "الساحات ومناطق العمل",
        materials: "تُحدد بعد معرفة تفاصيل الموقع",
        image: "/images/warehouses/warehouse-01.webp",
      },
    ],
  },
  {
    slug: "sandwich-panel",
    title: "سندوتش بانل",
    heading: "سندوتش بانل في جدة",
    seoTitle: "سندوتش بانل في جدة | ركن المقصورة",
    seoDescription:
      "سندوتش بانل في جدة للجدران والأسقف مع استخدامات متعددة في الغرف والمستودعات والمشاريع. تواصل عبر واتساب لطلب التفاصيل.",
    short: "سندوتش بانل للجدران والأسقف باستخدامات متعددة حسب المشروع.",
    intro:
      "نوفر ألواح سندوتش بانل للجدران والأسقف باستخدامات متعددة في الغرف والمستودعات والمشاريع، مع اختيار السماكة والنوع بحسب المتاح وطبيعة الاستخدام.",
    image: "/images/sandwich-panel/sandwich-panel-01.webp",
    gallery: [
      "/images/sandwich-panel/sandwich-panel-01.webp",
      "/images/sandwich-panel/sandwich-panel-02.webp",
    ],
    whatsappMessage:
      "السلام عليكم، أرغب في الاستفسار عن السندوتش بانل وطلب عرض سعر.",
    items: [
      {
        name: "سندوتش بانل للجدران",
        description: "ألواح للجدران والقواطع الداخلية والخارجية.",
        usage: "الغرف والمستودعات والقواطع",
        materials: "ألواح بسماكات مختلفة حسب المتوفر",
        image: "/images/sandwich-panel/sandwich-panel-01.webp",
      },
      {
        name: "سندوتش بانل للأسقف",
        description: "ألواح تغطية للأسقف بحسب المساحة والميل المطلوب.",
        usage: "أسقف الهناجر والمستودعات والغرف",
        materials: "ألواح أسقف بسماكات مختلفة",
        image: "/images/sandwich-panel/sandwich-panel-02.webp",
      },
    ],
  },
];

export function getService(slug: Service["slug"]): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
