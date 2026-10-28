# 🎓 Экзамен: 16 чоң сайт (React + API + Vercel)

Бардык сайттар бир кыймылдаткычта курулган: **React 18 + Vite** (frontend), **Node.js серверсиз API** (`/api/*`), **Vercel Blob** (туруктуу база). Тексттер кыргыз, орус жана англис тилинде.

| № | Сайт | Тема | Дарек | Код |
|---|---|---|---|---|
| 1 | 🛍️ MegaShop | Универсалдуу дүкөн | https://megashop-neon.vercel.app | репо `megashop` |
| 2 | 🚗 AutoLux | Автосалон | https://autolux-kg.vercel.app | `vercel-saittar/autolux` |
| 3 | 🎓 EduWorld | Курстар | https://eduworld-kg.vercel.app | `vercel-saittar/eduworld` |
| 4 | 🇮🇹 ItaliaEdu | Италиядагы университеттер | https://italiaedu.vercel.app | репо `italiaedu` |
| 5 | ✈️ TravelGo | Турлар | https://travelgo-kg.vercel.app | `vercel-saittar/travelgo` |
| 6 | ✈️ FlyKG | Авиабилеттер | https://flykg.vercel.app | репо `flykg` |
| 7 | 🍽️ FoodExpress | Тамак жеткирүү | https://foodexpress-kg.vercel.app | `vercel-saittar/foodexpress` |
| 8 | 💼 JobFinder | Вакансиялар | https://jobfinder-kg.vercel.app | `vercel-saittar/jobfinder` |
| 9 | 🏠 RealEstate KG | Кыймылсыз мүлк | https://realestate-kg.vercel.app | `vercel-saittar/realestatekg` |
| 10 | 🎬 MovieHub | Кинотеатр | https://moviehub-kg.vercel.app | `vercel-saittar/moviehub` |
| 11 | 🎮 GameZone | Оюндар + киберклуб | https://gamezone-kg.vercel.app | `vercel-saittar/gamezone` |
| 12 | 👗 StyleMarket | Кийим-кече | https://stylemarket-alpha.vercel.app | репо `stylemarket` |
| 13 | 📱 TechStore | Электроника | https://techstore-kg.vercel.app | `vercel-saittar/techstore` |
| 14 | 💪 FitLife | Фитнес-клуб | https://fitlife-kg.vercel.app | `vercel-saittar/fitlife` |
| 15 | 🧑‍💻 FreelancePro | Фриланс биржасы | https://freelancepro-kg.vercel.app | `vercel-saittar/freelancepro` |
| 16 | 🤖 AI World | Жасалма интеллект | https://aiworld-kg.vercel.app | `vercel-saittar/aiworld` |

## 🔑 Демо аккаунт (бардык сайттарда)
👑 Админ: `admin@site.kg` / `Admin12345!` → `/admin`
👤 Колдонуучу: өзүңүз катталыңыз (`/register`).
💳 DEMO төлөм картасы: `4242 4242 4242 4242`

## ✅ Функциялар
Корзина · бронь · катталуу/кирүү (JWT httpOnly cookie + private routes) · заказ/төлөм (Stripe/DEMO) · админ панель (толук CRUD, заказ/бронь статусу, колдонуучулар, recharts статистика) · товардын толук барагы (галерея, мүнөздөмөлөр, окшош товарлар) · издөө, категория/баа фильтри, иреттөө, пагинация · kg-ru-en котормо (i18n) · адаптивдүү дизайн, бургер меню · күн/түн темасы · сүйүктүүлөр · пикир/рейтинг · ролдор admin/user · Google/GitHub OAuth (ачкыч коюлса) · skeleton loading · error boundary · Cloudinary сүрөт жүктөө · Telegram-бот жана почтага заказ (ачкыч коюлса) · чатбот · жандуу (realtime) админ статистикасы · ачык API (валюта курсу) · сүрөттөр Wikipedia API аркылуу.

## ▶️ Локалдык иштетүү
```bash
cd vercel-saittar/autolux   # же каалаган сайт
npm install
npm run dev                 # http://localhost:5173
npm run test:api            # API тести (30 текшерүү)
```

## 🛠️ Текшерүү
`_tools/checkall.mjs` — бардык сайттардын бети, API, базасы жана админ логини:
```bash
node _tools/checkall.mjs https://autolux-kg.vercel.app https://eduworld-kg.vercel.app
```
