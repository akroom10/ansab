# منيو حلويات فاخر — QR Ready

مشروع منيو إلكتروني عربي RTL، Mobile First، بدون تسجيل أو طلبات أو سلة أو دفع.

## التشغيل

افتح `index.html` مباشرة في المتصفح، أو ارفعه على أي استضافة Static مثل:
- GitHub Pages
- Netlify
- Vercel
- أي استضافة تدعم HTML/CSS/JS

بعد الرفع، استخدم رابط الصفحة لإنشاء QR Code.

## تعديل المنتجات

جميع المنتجات والأسعار والوصف والصور موجودة في:
`js/app.js`

عدّل عناصر `products` فقط:

```js
{
  id: 1,
  name: "اسم المنتج",
  price: 24,
  category: "cheesecake",
  description: "وصف المنتج",
  image: "assets/images/product.jpg"
}
```

الأقسام المتاحة:
- `popular`
- `cheesecake`
- `cakes`
- `cookies`
- `crepe-waffle`
- `other`

## استبدال الصور

حاليًا الصور تستخدم روابط صور طعام خارجية لتعمل المعاينة فورًا.
للاستخدام النهائي الأفضل تحميل صور متجرك إلى:
`assets/images/`

ثم تغيير `image` إلى مسار محلي مثل:
`assets/images/lotus-cheesecake.webp`

يفضل WebP/AVIF مع عرض مناسب للجوال.

## الهوية

الاسم الحالي تجريبي: `سُكّر`
يمكن تغييره من `index.html` في:
- الهيدر
- الفوتر
- title

الخطوط العربية محملة من Google Fonts. إذا أردت أقصى سرعة، يمكن استضافتها محليًا لاحقًا.

## ملاحظات

- لا يوجد نظام طلبات.
- لا يوجد واتساب.
- لا يوجد Checkout أو حساب مستخدم.
- Product Details تفتح كـ Bottom Sheet على الجوال.
- التصميم يدعم Desktop وTablet وMobile.
- يوجد احترام لـ `prefers-reduced-motion`.
