# حسین شیردل · Hossein Shirdel

سایت و رزومه‌ی دوزبانه (فارسی و انگلیسی).

| فایل | چیست |
| --- | --- |
| `حسین شیردل _ Hossein Shirdel.html` | سایت کامل، در یک فایل. همین فایل روی لینک claude.ai منتشر می‌شود. |
| `حسین شیردل _ Hossein Shirdel.md` | متن سایت به فارسی و انگلیسی، بدون بخش‌های تعاملی |
| `رزومه_حسین_شیردل.pdf` | رزومه‌ی فارسی، سه برگ A4 |
| `Hossein_Shirdel_Resume.pdf` | رزومه‌ی انگلیسی، سه برگ A4 |
| `resume/` | منبع پی‌دی‌اف‌ها: `fa.html`، `en.html`، `resume.css`، `charts.js`، کد QR و فونت‌ها |

## ساخت دوباره‌ی پی‌دی‌اف‌ها

متن را در `resume/fa.html` یا `resume/en.html` ویرایش کنید و بعد:

```sh
npm i -D playwright
node resume/build.cjs        # هر دو
node resume/build.cjs fa     # فقط فارسی
```

فونت‌ها داخل `resume/fonts` هستند، پس ساخت به اینترنت نیاز ندارد. اسکریپت برای هر برگ فضای خالی پایین صفحه را به میلی‌متر چاپ می‌کند؛ عدد منفی یعنی متن به پاورقی رسیده است.

## Rebuilding the PDFs

Edit `resume/fa.html` or `resume/en.html`, then run `node resume/build.cjs` (needs `playwright`). Fonts are bundled in `resume/fonts` (SIL Open Font License, from Google Fonts), so the build works offline.
