# ركن المقصورة للخيام والمظلات وبيوت الشعر الحديثة — جدة

موقع تعريفي احترافي (عربي RTL) لنشاط المظلات والخيام وبيوت الشعر والبرجولات والسواتر والهناجر وسندوتش بانل في مدينة جدة.
الموقع ثابت بالكامل (بدون قاعدة بيانات وبدون تسجيل مستخدمين) وقابل للنشر على Netlify أو Vercel أو Cloudflare Pages أو أي استضافة ثابتة.

- الهاتف / واتساب: **+966 54 317 2671**
- خرائط جوجل: https://maps.app.goo.gl/xKybM5n7qdorjCDT7?g_st=iwb

---

## 1) التقنيات

- React 19 + TypeScript
- TanStack Start / TanStack Router (توليد صفحات ثابتة + SEO)
- Tailwind CSS v4 + مكوّنات shadcn/ui
- خط Cairo من Google Fonts

## 2) التثبيت والتشغيل محليًا

المتطلبات: Node.js 20+ أو Bun.

```bash
# تثبيت الحزم
npm install       # أو: bun install

# تشغيل بيئة التطوير
npm run dev       # الموقع على http://localhost:8080

# بناء نسخة الإنتاج
npm run build

# معاينة نسخة الإنتاج
npm run start
```

## 3) الصفحات

| المسار | الصفحة |
| --- | --- |
| `/` | الرئيسية |
| `/car-shades` | مظلات السيارات |
| `/beit-shaar` | بيوت الشعر والخيام |
| `/pergolas` | برجولات الحدائق |
| `/privacy-screens` | سواتر المنازل |
| `/warehouses` | هناجر ومستودعات |
| `/sandwich-panel` | سندوتش بانل |
| `/projects` | أعمالنا (فلاتر + معرض) |
| `/about` | من نحن |
| `/contact` | تواصل معنا |
| `/privacy-policy` | سياسة الخصوصية |
| `/terms` | الشروط والأحكام |
| أي رابط آخر | صفحة 404 |

## 4) استبدال الصور بصورك الحقيقية

جميع الصور موجودة في مجلد `public/images/` مرتبة كالتالي:

```
public/images/
├── logo/                 ← ضع شعارك هنا باسم logo.png
├── hero/                 ← hero-01.webp ... (صور الواجهة)
├── car-shades/           ← car-shade-01.webp ...
├── beit-shaar/           ← beit-shaar-01.webp ...
├── pergolas/             ← pergola-01.webp ...
├── privacy-screens/      ← privacy-screen-01.webp ...
├── warehouses/           ← warehouse-01.webp ...
├── sandwich-panel/       ← sandwich-panel-01.webp ...
└── projects/             ← project-01.webp ...
```

**طريقة الاستبدال (الأسهل):** احذف الصورة القديمة وضع صورتك مكانها **بنفس الاسم ونفس المسار** — لا حاجة لتعديل أي كود.
يعمل هذا قبل البناء وبعده أيضًا: بعد `npm run build` تُنسخ الصور كما هي، ويمكنك استبدال الملف في مجلد النشر بنفس الاسم.

**تحويل صورك إلى WebP** (اختياري لتحسين السرعة):

```bash
ffmpeg -i my-photo.jpg -q:v 75 public/images/car-shades/car-shade-01.webp
```

**إضافة صورة جديدة:** ضع الملف في المجلد المناسب ثم أضف مساره في ملف البيانات المناسب داخل `src/data/`.

### الشعار

- ضع الشعار في `public/images/logo/logo.png`.
- افتح `src/components/site/Logo.tsx` واستبدل الشعار المؤقت بـ:
  ```tsx
  <img src="/images/logo/logo.png" alt="ركن المقصورة" width={44} height={44} />
  ```

## 5) تعديل البيانات والنصوص

كل المحتوى في ملفات مستقلة سهلة التعديل:

| الملف | المحتوى |
| --- | --- |
| `src/config/siteConfig.ts` | اسم النشاط، الهاتف، واتساب، رابط الخريطة، رابط الموقع، عنوان ووصف SEO |
| `src/data/services.ts` | الخدمات الستة وأنواعها وأوصافها وصورها ورسائل واتساب |
| `src/data/projects.ts` | صور الأعمال وتصنيفاتها |
| `src/data/materials.ts` | الخامات ومواد التركيب |
| `src/data/faqs.ts` | الأسئلة الشائعة العامة وأسئلة كل خدمة |
| `src/components/site/navigation.ts` | روابط القائمة العلوية |

## 6) تغيير رقم الواتساب والهاتف والخريطة

كل شيء في ملف واحد: `src/config/siteConfig.ts`

```ts
phone: "+966543172671",     // رقم الاتصال
whatsapp: "966543172671",   // رقم الواتساب بدون + وبدون أصفار
mapsUrl: "https://maps.app.goo.gl/...",
siteUrl: "https://roknalmaqsora.com",  // مهم لـ SEO
```

رسائل الواتساب الجاهزة لكل خدمة موجودة في `src/data/services.ts` داخل الحقل `whatsappMessage`، مثال:

```
السلام عليكم، أرغب في الاستفسار عن مظلات السيارات وطلب عرض سعر.
```

## 7) إعدادات SEO

- عنوان ووصف مستقل لكل صفحة + Canonical + Open Graph + Twitter Card.
- بيانات منظمة JSON-LD: LocalBusiness، Organization، Service، BreadcrumbList، FAQPage.
- `public/robots.txt` و`public/sitemap.xml`.
- بعد ربط النطاق النهائي: عدّل `siteUrl` في `src/config/siteConfig.ts` **وبدّل** رابط الموقع في `public/sitemap.xml`.

## 8) النشر

### Netlify

1. ارفع المشروع إلى مستودع GitHub.
2. في Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist` (أو المجلد الذي يظهر بعد البناء).
5. Deploy.

### Vercel

1. **New Project** واختر المستودع.
2. Framework Preset: Vite / Other.
3. Build command: `npm run build` — Output: `dist`.
4. Deploy.

### Cloudflare Pages

**Workers & Pages → Create → Pages → Connect to Git**، ثم Build command: `npm run build`.

### ربط النطاق وHTTPS

1. في لوحة الاستضافة: **Domains → Add custom domain** وأدخل نطاقك.
2. أضف سجلات DNS التي تظهر لك عند مزوّد النطاق (عادة سجل `A` أو `CNAME`).
3. شهادة HTTPS تُصدر تلقائيًا (Let's Encrypt) خلال دقائق، وفعّل **Force HTTPS**.

## 9) Google Search Console وإرسال Sitemap

1. افتح https://search.google.com/search-console وأضف **Domain property** بنطاقك.
2. أكّد الملكية عبر سجل TXT في DNS.
3. من **Sitemaps** أضف: `sitemap.xml` ثم **Submit**.
4. استخدم **URL Inspection** لطلب فهرسة الصفحات المهمة.
5. أنشئ/حدّث ملف نشاطك على **Google Business Profile** لجدة، وضع فيه نفس رقم الجوال ورابط الموقع.

## 10) ملاحظات مهمة عن المحتوى

- لا يحتوي الموقع على أي تقييمات أو أعداد عملاء أو مشاريع أو سنوات خبرة أو جوائز أو أسعار أو فروع أو حسابات تواصل اجتماعي — لأنها غير مؤكدة.
- الصور الحالية **تجريبية للعرض فقط** وليست أعمالًا حقيقية؛ استبدلها بصور أعمالك.
- لا توجد قاعدة بيانات ولا مفاتيح API في الواجهة، ولا يعتمد الموقع على أي منصة محددة.
