/**
 * الإعدادات المركزية للموقع.
 * عدّل هذا الملف فقط لتغيير بيانات النشاط، الهاتف، واتساب، الخريطة، وبيانات SEO.
 */

export const siteConfig = {
  /** اسم النشاط المختصر */
  shortName: "ركن المقصورة",
  /** اسم النشاط الكامل */
  name: "ركن المقصورة للخيام والمظلات وبيوت الشعر الحديثة",
  tagline: "للخيام والمظلات وبيوت الشعر الحديثة",
  city: "جدة",
  country: "المملكة العربية السعودية",
  /** رقم الهاتف بصيغة دولية */
  phone: "+966543172671",
  /** رقم واتساب بدون رموز (للاستخدام في الرابط) */
  whatsapp: "966543172671",
  mapsUrl: "https://maps.app.goo.gl/xKybM5n7qdorjCDT7?g_st=iwb",
  /** ضع رابط الموقع النهائي بعد النشر (يستخدم في canonical و sitemap) */
  siteUrl: "https://ruknalmaqsoora.com",
  seo: {
    title: "مظلات وسواتر وبيوت شعر| ركن المقصورة",
    description:
      "ركن المقصورة للخيام والمظلات وبيوت الشعر الحديثة في جدة: مظلات سيارات، بيوت شعر ملكي، خيام، برجولات حدائق، سواتر منازل، هناجر ومستودعات، وسندوتش بانل. تواصل عبر واتساب لطلب عرض سعر.",
  },
} as const;

/** رقم الهاتف بصيغة قابلة للعرض */
export const phoneDisplay = "0543172671";

/** إنشاء رابط واتساب مع رسالة جاهزة */
export function whatsappLink(message?: string): string {
  const text = message ?? "السلام عليكم، أرغب في الاستفسار وطلب عرض سعر.";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${siteConfig.phone}`;
