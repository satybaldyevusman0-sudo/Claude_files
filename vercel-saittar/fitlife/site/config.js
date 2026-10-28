// FitLife: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "fitlife",
  "name": "FitLife",
  "nameParts": [
    "Fit",
    "Life"
  ],
  "logo": "💪",
  "currency": "KGS",
  "theme": {
    "primary": "#ea580c",
    "primaryDark": "#c2410c",
    "accent": "#16a34a",
    "dark": "#1f0d03"
  },
  "heroImage": "https://loremflickr.com/1600/900/gym,fitness?lock=121",
  "heroWiki": "Gym",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Ахунбаев көч. 120",
      "ru": "г. Бишкек, ул. Ахунбаева 120",
      "en": "Bishkek, 120 Akhunbaev St."
    }
  },
  "text": {
    "tagline": {
      "ky": "Бишкектеги фитнес-клуб жана спорт дүкөнү",
      "ru": "Фитнес-клуб и спортмагазин в Бишкеке",
      "en": "Fitness club and sports shop in Bishkek"
    },
    "heroTitle": {
      "ky": "Күчтүү дене — бактылуу жашоо",
      "ru": "Сильное тело — счастливая жизнь",
      "en": "Strong body, happy life"
    },
    "heroText": {
      "ky": "Йога, CrossFit, бокс, сүзүү, жеке машыктыруучулар жана спорттук тамак. Абонемент алып, машыгууга онлайн жазылыңыз.",
      "ru": "Йога, CrossFit, бокс, бассейн, персональные тренеры и спортпит. Покупайте абонемент и записывайтесь онлайн.",
      "en": "Yoga, CrossFit, boxing, swimming, personal trainers and nutrition. Buy a membership and book classes online."
    },
    "catalog": {
      "ky": "Машыгуулар жана дүкөн",
      "ru": "Занятия и магазин",
      "en": "Classes & shop"
    },
    "catalogText": {
      "ky": "Багыт, баа жана деңгээл боюнча тандаңыз",
      "ru": "Выбирайте по направлению, цене и уровню",
      "en": "Filter by type, price and level"
    },
    "search": {
      "ky": "Издөө: йога, бокс, протеин…",
      "ru": "Поиск: йога, бокс, протеин…",
      "en": "Search: yoga, boxing, protein…"
    },
    "plans": {
      "ky": "Абонементтер",
      "ru": "Абонементы",
      "en": "Memberships"
    },
    "plansText": {
      "ky": "Залга, бассейнге жана топтук сабактарга",
      "ru": "Тренажёрный зал, бассейн и групповые занятия",
      "en": "Gym, pool and group classes"
    },
    "booking": {
      "ky": "Машыгууга жазылуу",
      "ru": "Запись на тренировку",
      "en": "Book a class"
    },
    "bookingText": {
      "ky": "Убакытты жана залды тандаңыз",
      "ru": "Выберите время и зал",
      "en": "Choose time and studio"
    },
    "bookBtn": {
      "ky": "Жазылуу",
      "ru": "Записаться",
      "en": "Book"
    },
    "buy": {
      "ky": "Себетке",
      "ru": "В корзину",
      "en": "Add to cart"
    },
    "about": {
      "ky": "FitLife — 2500 м² аянттагы фитнес-клуб: заманбап зал, бассейн жана 20 машыктыруучу.",
      "ru": "FitLife — фитнес-клуб на 2500 м²: современный зал, бассейн и 20 тренеров.",
      "en": "FitLife is a 2,500 m² club with a modern gym, pool and 20 coaches."
    }
  },
  "categories": [
    {
      "id": "classes",
      "name": {
        "ky": "Топтук машыгуулар",
        "ru": "Групповые занятия",
        "en": "Group classes"
      },
      "icon": "🧘",
      "wiki": "Yoga",
      "tags": "yoga,fitness"
    },
    {
      "id": "combat",
      "name": {
        "ky": "Мушташ спорту",
        "ru": "Единоборства",
        "en": "Combat sports"
      },
      "icon": "🥊",
      "wiki": "Boxing",
      "tags": "boxing"
    },
    {
      "id": "personal",
      "name": {
        "ky": "Жеке машыктыруучу",
        "ru": "Персональный тренер",
        "en": "Personal training"
      },
      "icon": "🏋️",
      "wiki": "Personal trainer",
      "tags": "gym,trainer"
    },
    {
      "id": "equipment",
      "name": {
        "ky": "Спорт шаймандары",
        "ru": "Инвентарь",
        "en": "Equipment"
      },
      "icon": "🏀",
      "wiki": "Dumbbell",
      "tags": "dumbbell,gym"
    },
    {
      "id": "nutrition",
      "name": {
        "ky": "Спорттук тамак",
        "ru": "Спортпит",
        "en": "Sports nutrition"
      },
      "icon": "🥤",
      "wiki": "Whey protein",
      "tags": "protein,nutrition"
    }
  ],
  "plans": [
    {
      "id": "month",
      "icon": "📅",
      "price": 3500,
      "title": {
        "ky": "Абонемент — 1 ай",
        "ru": "Абонемент — 1 месяц",
        "en": "Membership — 1 month"
      },
      "desc": {
        "ky": "Зал + топтук сабактар",
        "ru": "Зал + групповые",
        "en": "Gym + group classes"
      }
    },
    {
      "id": "quarter",
      "icon": "🔥",
      "price": 9000,
      "popular": true,
      "title": {
        "ky": "Абонемент — 3 ай",
        "ru": "Абонемент — 3 месяца",
        "en": "Membership — 3 months"
      },
      "desc": {
        "ky": "Зал + бассейн + 1 жеке машыгуу",
        "ru": "Зал + бассейн + 1 персональная",
        "en": "Gym + pool + 1 PT session"
      },
      "features": [
        {
          "ky": "Бассейн",
          "ru": "Бассейн",
          "en": "Pool"
        },
        {
          "ky": "Сауна",
          "ru": "Сауна",
          "en": "Sauna"
        },
        {
          "ky": "Фитнес-тест",
          "ru": "Фитнес-тест",
          "en": "Fitness test"
        }
      ]
    },
    {
      "id": "year",
      "icon": "🏆",
      "price": 29000,
      "title": {
        "ky": "Абонемент — 1 жыл",
        "ru": "Абонемент — 1 год",
        "en": "Membership — 1 year"
      },
      "desc": {
        "ky": "Баары кошулган + 2 ай тоңдуруу",
        "ru": "Всё включено + 2 месяца заморозки",
        "en": "All-inclusive + 2 months freeze"
      }
    },
    {
      "id": "student",
      "icon": "🎓",
      "price": 2500,
      "title": {
        "ky": "Студенттик — 1 ай",
        "ru": "Студенческий — 1 месяц",
        "en": "Student — 1 month"
      },
      "desc": {
        "ky": "07:00–16:00 чейин",
        "ru": "С 07:00 до 16:00",
        "en": "7 am to 4 pm"
      }
    }
  ],
  "booking": {
    "slots": [
      "07:00",
      "09:00",
      "12:00",
      "17:00",
      "19:00",
      "20:30"
    ],
    "formats": [
      {
        "id": "gym",
        "label": {
          "ky": "Негизги зал",
          "ru": "Основной зал",
          "en": "Main gym"
        }
      },
      {
        "id": "studio",
        "label": {
          "ky": "Студия",
          "ru": "Студия",
          "en": "Studio"
        }
      },
      {
        "id": "pool",
        "label": {
          "ky": "Бассейн",
          "ru": "Бассейн",
          "en": "Pool"
        }
      }
    ],
    "itemLabel": {
      "ky": "Машыгуу",
      "ru": "Тренировка",
      "en": "Class"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "🏊",
      "title": {
        "ky": "Бассейн 25 м",
        "ru": "Бассейн 25 м",
        "en": "25 m pool"
      },
      "text": {
        "ky": "Сауна жана хаммам.",
        "ru": "Сауна и хаммам.",
        "en": "Sauna and hammam."
      }
    },
    {
      "icon": "👨‍🏫",
      "title": {
        "ky": "20 машыктыруучу",
        "ru": "20 тренеров",
        "en": "20 coaches"
      },
      "text": {
        "ky": "Сертификатталган.",
        "ru": "Сертифицированные.",
        "en": "Certified."
      }
    },
    {
      "icon": "🕐",
      "title": {
        "ky": "06:00–24:00",
        "ru": "06:00–24:00",
        "en": "6 am – midnight"
      },
      "text": {
        "ky": "Жумасына 7 күн.",
        "ru": "7 дней в неделю.",
        "en": "7 days a week."
      }
    },
    {
      "icon": "🅿️",
      "title": {
        "ky": "Бекер паркинг",
        "ru": "Бесплатная парковка",
        "en": "Free parking"
      },
      "text": {
        "ky": "100 орун.",
        "ru": "100 мест.",
        "en": "100 spaces."
      }
    }
  ],
  "stats": [
    {
      "value": "26",
      "label": {
        "ky": "кызмат жана товар",
        "ru": "услуг и товаров",
        "en": "services & goods"
      }
    },
    {
      "value": "2 500 м²",
      "label": {
        "ky": "аянт",
        "ru": "площадь",
        "en": "area"
      }
    },
    {
      "value": "20",
      "label": {
        "ky": "машыктыруучу",
        "ru": "тренеров",
        "en": "coaches"
      }
    },
    {
      "value": "4.9★",
      "label": {
        "ky": "рейтинг",
        "ru": "рейтинг",
        "en": "rating"
      }
    }
  ],
  "specLabels": {
    "duration": {
      "ky": "Узактыгы",
      "ru": "Длительность",
      "en": "Duration"
    },
    "level": {
      "ky": "Деңгээл",
      "ru": "Уровень",
      "en": "Level"
    },
    "kcal": {
      "ky": "Калория",
      "ru": "Калории",
      "en": "Calories"
    },
    "coach": {
      "ky": "Машыктыруучу",
      "ru": "Тренер",
      "en": "Coach"
    },
    "brand": {
      "ky": "Бренд",
      "ru": "Бренд",
      "en": "Brand"
    },
    "weight": {
      "ky": "Салмагы",
      "ru": "Вес",
      "en": "Weight"
    },
    "feature": {
      "ky": "Өзгөчөлүгү",
      "ru": "Особенность",
      "en": "Feature"
    }
  },
  "faq": [
    {
      "keys": [
        "абонемент",
        "membership",
        "баа"
      ],
      "answer": {
        "ky": "Абонемент 1 айга 3500 сом, 3 айга 9000 сом. \"Абонементтер\" барагын караңыз.",
        "ru": "Абонемент: 1 месяц — 3500 сом, 3 месяца — 9000 сом.",
        "en": "Membership: 3,500 KGS per month, 9,000 for 3 months."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "сыноо",
        "пробн",
        "trial",
        "бекер"
      ],
      "answer": {
        "ky": "Биринчи машыгуу бекер — жазылыңыз!",
        "ru": "Первая тренировка бесплатно — записывайтесь!",
        "en": "Your first class is free — book now!"
      },
      "link": "/booking"
    },
    {
      "keys": [
        "бассейн",
        "pool",
        "сүзүү"
      ],
      "answer": {
        "ky": "25 метрлик бассейн 06:00дөн 23:00гө чейин иштейт.",
        "ru": "Бассейн 25 м работает с 06:00 до 23:00.",
        "en": "The 25 m pool is open 6 am–11 pm."
      },
      "link": "/catalog?category=classes"
    }
  ],
  "priceNote": {
    "ky": "Баалар Бишкектеги фитнес-клубдардын орточо баасына жакын.",
    "ru": "Цены близки к средним по фитнес-клубам Бишкека.",
    "en": "Prices close to Bishkek fitness club averages."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026). Фото: Wikipedia.",
    "en": "Approximate prices (28.10.2026). Photos: Wikipedia."
  },
  "sources": []
};
