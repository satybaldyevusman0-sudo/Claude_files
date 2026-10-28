// AutoLux: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "autolux",
  "name": "AutoLux",
  "nameParts": [
    "Auto",
    "Lux"
  ],
  "logo": "🚗",
  "currency": "USD",
  "theme": {
    "primary": "#0f4c81",
    "primaryDark": "#0b3a63",
    "accent": "#e11d48",
    "dark": "#0a1626"
  },
  "heroImage": "https://loremflickr.com/1600/900/car,showroom?lock=31",
  "heroWiki": "Toyota Land Cruiser (J300)",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Ахунбаев көч. (автосалон)",
      "ru": "г. Бишкек, ул. Ахунбаева (автосалон)",
      "en": "Bishkek, Akhunbaev St. (showroom)"
    }
  },
  "text": {
    "tagline": {
      "ky": "Бишкектеги премиум автосалон",
      "ru": "Премиальный автосалон в Бишкеке",
      "en": "Premium car dealer in Bishkek"
    },
    "heroTitle": {
      "ky": "Кыялыңыздагы унаа — кепилдик жана лизинг менен",
      "ru": "Автомобиль мечты — с гарантией и лизингом",
      "en": "Your dream car — with warranty and leasing"
    },
    "heroText": {
      "ky": "Жаңы жана текшерилген унаалар: Toyota, Lexus, Hyundai, Kia, Changan, BYD жана башкалар. Тест-драйвга жазылыңыз, онлайн брондоңуз.",
      "ru": "Новые и проверенные авто: Toyota, Lexus, Hyundai, Kia, Changan, BYD и другие. Запишитесь на тест-драйв, бронируйте онлайн.",
      "en": "New and certified cars: Toyota, Lexus, Hyundai, Kia, Changan, BYD and more. Book a test drive online."
    },
    "catalog": {
      "ky": "Унаалар",
      "ru": "Автомобили",
      "en": "Cars"
    },
    "catalogText": {
      "ky": "Кузов, баа жана бренд боюнча тандаңыз",
      "ru": "Выбирайте по кузову, цене и бренду",
      "en": "Filter by body, price and brand"
    },
    "search": {
      "ky": "Унаа издөө: Camry, RAV4, BYD…",
      "ru": "Поиск: Camry, RAV4, BYD…",
      "en": "Search: Camry, RAV4, BYD…"
    },
    "plans": {
      "ky": "Кызматтар",
      "ru": "Услуги",
      "en": "Services"
    },
    "plansText": {
      "ky": "Лизинг, камсыздандыруу жана тейлөө пакеттери",
      "ru": "Лизинг, страхование и пакеты обслуживания",
      "en": "Leasing, insurance and service packages"
    },
    "booking": {
      "ky": "Тест-драйв",
      "ru": "Тест-драйв",
      "en": "Test drive"
    },
    "bookingText": {
      "ky": "Ыңгайлуу күн жана убакытты тандаңыз",
      "ru": "Выберите удобные дату и время",
      "en": "Pick a convenient date and time"
    },
    "bookBtn": {
      "ky": "Тест-драйвга жазылуу",
      "ru": "Записаться на тест-драйв",
      "en": "Book a test drive"
    },
    "buy": {
      "ky": "Брондоо",
      "ru": "Забронировать",
      "en": "Reserve"
    },
    "about": {
      "ky": "AutoLux — 2015-жылдан бери иштеген автосалон: жаңы унаалар, trade-in, лизинг жана сервис бир жерде.",
      "ru": "AutoLux — автосалон с 2015 года: новые авто, trade-in, лизинг и сервис в одном месте.",
      "en": "AutoLux has been a car dealer since 2015: new cars, trade-in, leasing and service in one place."
    }
  },
  "categories": [
    {
      "id": "sedan",
      "name": {
        "ky": "Седандар",
        "ru": "Седаны",
        "en": "Sedans"
      },
      "icon": "🚘",
      "wiki": "Toyota Camry",
      "tags": "sedan,car"
    },
    {
      "id": "crossover",
      "name": {
        "ky": "Кроссоверлер",
        "ru": "Кроссоверы",
        "en": "Crossovers"
      },
      "icon": "🚙",
      "wiki": "Toyota RAV4",
      "tags": "crossover,car"
    },
    {
      "id": "suv",
      "name": {
        "ky": "Жол тандабастар",
        "ru": "Внедорожники",
        "en": "SUVs"
      },
      "icon": "🛻",
      "wiki": "Toyota Land Cruiser",
      "tags": "suv,offroad"
    },
    {
      "id": "electric",
      "name": {
        "ky": "Электромобилдер",
        "ru": "Электромобили",
        "en": "Electric cars"
      },
      "icon": "⚡",
      "wiki": "BYD Song Plus",
      "tags": "electric,car"
    },
    {
      "id": "premium",
      "name": {
        "ky": "Премиум",
        "ru": "Премиум",
        "en": "Premium"
      },
      "icon": "💎",
      "wiki": "Mercedes-Benz S-Class",
      "tags": "luxury,car"
    }
  ],
  "plans": [
    {
      "id": "leasing",
      "icon": "🏦",
      "price": 0,
      "priceLabel": {
        "ky": "Акысыз консультация",
        "ru": "Бесплатная консультация",
        "en": "Free consultation"
      },
      "title": {
        "ky": "Лизинг 0%",
        "ru": "Лизинг 0%",
        "en": "0% leasing"
      },
      "desc": {
        "ky": "Алгачкы төлөм 20%тен, 36 айга чейин",
        "ru": "Первый взнос от 20%, до 36 месяцев",
        "en": "From 20% down, up to 36 months"
      },
      "popular": true
    },
    {
      "id": "kasko",
      "icon": "🛡️",
      "price": 450,
      "title": {
        "ky": "КАСКО камсыздандыруу",
        "ru": "Страхование КАСКО",
        "en": "Comprehensive insurance"
      },
      "desc": {
        "ky": "1 жылга толук коргоо",
        "ru": "Полная защита на 1 год",
        "en": "Full cover for 1 year"
      }
    },
    {
      "id": "service",
      "icon": "🔧",
      "price": 290,
      "title": {
        "ky": "Тейлөө пакети",
        "ru": "Пакет ТО",
        "en": "Service package"
      },
      "desc": {
        "ky": "3 техникалык тейлөө + май алмаштыруу",
        "ru": "3 ТО + замена масла",
        "en": "3 services + oil change"
      }
    },
    {
      "id": "tradein",
      "icon": "🔄",
      "price": 0,
      "priceLabel": {
        "ky": "Бекер",
        "ru": "Бесплатно",
        "en": "Free"
      },
      "title": {
        "ky": "Trade-in баалоо",
        "ru": "Оценка trade-in",
        "en": "Trade-in valuation"
      },
      "desc": {
        "ky": "Эски унааңызды 30 мүнөттө баалайбыз",
        "ru": "Оценим ваш авто за 30 минут",
        "en": "We value your car in 30 min"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "11:30",
      "13:00",
      "14:30",
      "16:00",
      "17:30"
    ],
    "formats": [
      {
        "id": "showroom",
        "label": {
          "ky": "Автосалондо",
          "ru": "В автосалоне",
          "en": "At the showroom"
        }
      },
      {
        "id": "home",
        "label": {
          "ky": "Үйгө алып барабыз",
          "ru": "С выездом к вам",
          "en": "We bring the car to you"
        }
      }
    ],
    "itemLabel": {
      "ky": "Унаа",
      "ru": "Автомобиль",
      "en": "Car"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "✅",
      "title": {
        "ky": "Расмий кепилдик",
        "ru": "Официальная гарантия",
        "en": "Official warranty"
      },
      "text": {
        "ky": "Жаңы унааларга 3–5 жыл.",
        "ru": "На новые авто 3–5 лет.",
        "en": "3–5 years on new cars."
      }
    },
    {
      "icon": "🏦",
      "title": {
        "ky": "Лизинг жана кредит",
        "ru": "Лизинг и кредит",
        "en": "Leasing & credit"
      },
      "text": {
        "ky": "5 банк менен өнөктөшпүз.",
        "ru": "Партнёрство с 5 банками.",
        "en": "Partnered with 5 banks."
      }
    },
    {
      "icon": "🔍",
      "title": {
        "ky": "120 пункттук текшерүү",
        "ru": "Проверка по 120 пунктам",
        "en": "120-point inspection"
      },
      "text": {
        "ky": "Ар бир унаа текшерилет.",
        "ru": "Каждый авто проверен.",
        "en": "Every car inspected."
      }
    },
    {
      "icon": "🚚",
      "title": {
        "ky": "Жеткирүү",
        "ru": "Доставка",
        "en": "Delivery"
      },
      "text": {
        "ky": "Кыргызстан боюнча унаа жеткирүү.",
        "ru": "Доставка авто по Кыргызстану.",
        "en": "Delivery across Kyrgyzstan."
      }
    }
  ],
  "stats": [
    {
      "value": "26+",
      "label": {
        "ky": "модель",
        "ru": "моделей",
        "en": "models"
      }
    },
    {
      "value": "10 жыл",
      "label": {
        "ky": "тажрыйба",
        "ru": "опыта",
        "en": "experience"
      }
    },
    {
      "value": "4 500+",
      "label": {
        "ky": "сатылган унаа",
        "ru": "проданных авто",
        "en": "cars sold"
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
    "engine": {
      "ky": "Кыймылдаткыч",
      "ru": "Двигатель",
      "en": "Engine"
    },
    "power": {
      "ky": "Кубаттуулук",
      "ru": "Мощность",
      "en": "Power"
    },
    "drive": {
      "ky": "Привод",
      "ru": "Привод",
      "en": "Drive"
    },
    "year": {
      "ky": "Жылы",
      "ru": "Год",
      "en": "Year"
    },
    "fuel": {
      "ky": "Күйүүчү май",
      "ru": "Топливо",
      "en": "Fuel"
    },
    "mileage": {
      "ky": "Жүрүшү",
      "ru": "Пробег",
      "en": "Mileage"
    }
  },
  "faq": [
    {
      "keys": [
        "лизинг",
        "кредит",
        "leasing",
        "credit"
      ],
      "answer": {
        "ky": "Лизинг: алгачкы төлөм 20%тен, 36 айга чейин. \"Кызматтар\" барагын караңыз.",
        "ru": "Лизинг: первый взнос от 20%, до 36 месяцев. См. раздел «Услуги».",
        "en": "Leasing: from 20% down, up to 36 months. See Services."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "тест",
        "test",
        "драйв"
      ],
      "answer": {
        "ky": "Тест-драйвга онлайн жазылсаңыз болот — бекер.",
        "ru": "На тест-драйв можно записаться онлайн — бесплатно.",
        "en": "Book a free test drive online."
      },
      "link": "/booking"
    },
    {
      "keys": [
        "кепил",
        "гарант",
        "warrant"
      ],
      "answer": {
        "ky": "Жаңы унааларга 3–5 жыл расмий кепилдик.",
        "ru": "На новые авто официальная гарантия 3–5 лет.",
        "en": "New cars have a 3–5 year warranty."
      },
      "link": "/contact"
    }
  ],
  "priceNote": {
    "ky": "Баалар Бишкектеги расмий дилерлердин жана жарнамалардын болжолдуу баасы (USD).",
    "ru": "Цены ориентировочные, по данным дилеров и объявлений Бишкека (USD).",
    "en": "Approximate prices based on Bishkek dealers and listings (USD)."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026). Фото: Wikipedia / Wikimedia Commons.",
    "en": "Approximate prices (28.10.2026). Photos: Wikipedia / Wikimedia Commons."
  },
  "sources": []
};
