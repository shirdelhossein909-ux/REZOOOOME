# حسین شیردل · Hossein Shirdel

سایت و رزومه‌ی دوزبانه (فارسی و انگلیسی).

آدرس سایت: **https://shirdelhossein909-ux.github.io/REZOOOOME/**

| فایل | چیست |
| --- | --- |
| `index.html` | سایت کامل؛ صفحه‌ای که GitHub Pages نشان می‌دهد |
| `حسین شیردل _ Hossein Shirdel.html` | همان سایت با نام قبلی (دقیقاً یکسان با `index.html`) |
| `حسین شیردل _ Hossein Shirdel.md` | متن سایت به فارسی و انگلیسی، بدون بخش‌های تعاملی |
| `رزومه_حسین_شیردل.pdf` | رزومه‌ی فارسی، دو برگ A4 |
| `Hossein_Shirdel_Resume.pdf` | رزومه‌ی انگلیسی، دو برگ A4 |
| `resume/` | منبع پی‌دی‌اف‌ها: `fa.html`، `en.html`، `resume.css`، `charts.js`، کدهای QR (سایت و آزمایشگاه محک) و فونت‌ها |
| `.nojekyll` | به GitHub Pages می‌گوید فایل‌ها را بدون پردازش منتشر کند |

## روشن کردن GitHub Pages (یک بار)

1. در همین مخزن به **Settings ← Pages** بروید.
2. در بخش **Build and deployment**، گزینه‌ی **Source** را روی **Deploy from a branch** بگذارید.
3. **Branch** را `main` و پوشه را `/ (root)` انتخاب کنید و **Save** را بزنید.

حدود یک دقیقه بعد، سایت روی آدرس بالا باز می‌شود. در هر دو پی‌دی‌اف، آدرس سایت‌ها، کدهای QR و ایمیل کلیک‌خورند (در گوشی و کامپیوتر). کد QR بالای هر دو پی‌دی‌اف به همین آدرس اشاره می‌کند و کد QR بخش محک به آزمایشگاه زنده‌ی محک (https://shirdelhossein909-ux.github.io/mahak-lab/). فونت‌ها از داخل همین مخزن بارگذاری می‌شوند، پس سایت به Google Fonts وابسته نیست.

## تم روشن و تاریک

سایت همیشه با تم روشن باز می‌شود و تم تاریک فقط با دکمه‌ی بالای صفحه انتخاب می‌شود. انتخاب هر بیننده در مرورگر خودش به خاطر می‌ماند.

## ساخت دوباره‌ی پی‌دی‌اف‌ها

متن را در `resume/fa.html` یا `resume/en.html` ویرایش کنید و بعد:

```sh
npm i -D playwright
node resume/build.cjs        # هر دو
node resume/build.cjs fa     # فقط فارسی
```

فونت‌ها داخل `resume/fonts` هستند، پس ساخت به اینترنت نیاز ندارد. اسکریپت برای هر برگ فضای خالی پایین صفحه را به میلی‌متر چاپ می‌کند؛ عدد منفی یعنی متن به پاورقی رسیده است.

## English

Site: https://shirdelhossein909-ux.github.io/REZOOOOME/ (GitHub Pages from `main`, root folder). `index.html` and `حسین شیردل _ Hossein Shirdel.html` are the same file. The site opens in the light theme; dark is picked with the switch in the header. To rebuild the PDFs, edit `resume/fa.html` or `resume/en.html` and run `node resume/build.cjs` (needs `playwright`). Fonts are bundled (SIL Open Font License, from Google Fonts), so neither the site nor the build depends on Google.
