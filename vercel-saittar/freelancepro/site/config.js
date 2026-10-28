// FreelancePro: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "freelancepro",
  "name": "FreelancePro",
  "nameParts": [
    "Freelance",
    "Pro"
  ],
  "logo": "🧑‍💻",
  "currency": "KGS",
  "theme": {
    "primary": "#0d9488",
    "primaryDark": "#0f766e",
    "accent": "#8b5cf6",
    "dark": "#04201d"
  },
  "heroImage": "https://loremflickr.com/1600/900/freelancer,laptop?lock=131",
  "heroWiki": "Coworking",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Ибраимов көч. 103 (коворкинг)",
      "ru": "г. Бишкек, ул. Ибраимова 103 (коворкинг)",
      "en": "Bishkek, 103 Ibraimov St. (coworking)"
    }
  },
  "text": {
    "tagline": {
      "ky": "Кыргызстандын фриланс биржасы",
      "ru": "Фриланс-биржа Кыргызстана",
      "en": "Kyrgyzstan’s freelance marketplace"
    },
    "heroTitle": {
      "ky": "Ар кандай тапшырма — мыкты адиске",
      "ru": "Любая задача — лучшему специалисту",
      "en": "Every task, the right expert"
    },
    "heroText": {
      "ky": "Сайт, дизайн, SMM, котормо, видео жана бизнес кызматтары. Текшерилген фрилансерлер, коопсуз төлөм жана жыйынтыкка кепилдик.",
      "ru": "Сайты, дизайн, SMM, переводы, видео и бизнес-услуги. Проверенные фрилансеры, безопасная оплата и гарантия результата.",
      "en": "Websites, design, SMM, translation, video and business services. Verified freelancers, safe payment and guaranteed results."
    },
    "catalog": {
      "ky": "Кызматтар",
      "ru": "Услуги",
      "en": "Services"
    },
    "catalogText": {
      "ky": "Категория, баа жана мөөнөт боюнча тандаңыз",
      "ru": "Выбирайте по категории, цене и сроку",
      "en": "Filter by category, price and delivery time"
    },
    "search": {
      "ky": "Издөө: сайт, логотип, котормо…",
      "ru": "Поиск: сайт, логотип, перевод…",
      "en": "Search: website, logo, translation…"
    },
    "plans": {
      "ky": "Фрилансерлер үчүн",
      "ru": "Для фрилансеров",
      "en": "For freelancers"
    },
    "plansText": {
      "ky": "Профилди көтөрүү жана PRO статус",
      "ru": "Продвижение профиля и PRO-статус",
      "en": "Profile boosts and PRO status"
    },
    "booking": {
      "ky": "Консультация",
      "ru": "Консультация",
      "en": "Consultation"
    },
    "bookingText": {
      "ky": "Фрилансер менен видео-жолугушуу брондоңуз",
      "ru": "Забронируйте видеовстречу с фрилансером",
      "en": "Book a video call with a freelancer"
    },
    "bookBtn": {
      "ky": "Жолугушууну брондоо",
      "ru": "Забронировать встречу",
      "en": "Book a call"
    },
    "buy": {
      "ky": "Заказ берүү",
      "ru": "Заказать",
      "en": "Order"
    },
    "about": {
      "ky": "FreelancePro — 5000ден ашык фрилансер жана 20 000 аткарылган заказ.",
      "ru": "FreelancePro — более 5000 фрилансеров и 20 000 выполненных заказов.",
      "en": "FreelancePro has 5,000+ freelancers and 20,000 completed orders."
    }
  },
  "categories": [
    {
      "id": "dev",
      "name": {
        "ky": "Программалоо",
        "ru": "Разработка",
        "en": "Development"
      },
      "icon": "👨‍💻",
      "wiki": "Web development",
      "tags": "code,laptop"
    },
    {
      "id": "design",
      "name": {
        "ky": "Дизайн",
        "ru": "Дизайн",
        "en": "Design"
      },
      "icon": "🎨",
      "wiki": "Logo",
      "tags": "design,illustration"
    },
    {
      "id": "marketing",
      "name": {
        "ky": "Маркетинг",
        "ru": "Маркетинг",
        "en": "Marketing"
      },
      "icon": "📣",
      "wiki": "Social media marketing",
      "tags": "marketing,phone"
    },
    {
      "id": "text",
      "name": {
        "ky": "Текст жана котормо",
        "ru": "Тексты и переводы",
        "en": "Writing & translation"
      },
      "icon": "✍️",
      "wiki": "Translation",
      "tags": "writing,books"
    },
    {
      "id": "video",
      "name": {
        "ky": "Видео жана фото",
        "ru": "Видео и фото",
        "en": "Video & photo"
      },
      "icon": "🎬",
      "wiki": "Videography",
      "tags": "camera,video"
    },
    {
      "id": "business",
      "name": {
        "ky": "Бизнес кызматтары",
        "ru": "Бизнес-услуги",
        "en": "Business services"
      },
      "icon": "📊",
      "wiki": "Consultant",
      "tags": "business,meeting"
    }
  ],
  "plans": [
    {
      "id": "pro",
      "icon": "⭐",
      "price": 990,
      "popular": true,
      "title": {
        "ky": "PRO статус — 1 ай",
        "ru": "PRO-статус — 1 месяц",
        "en": "PRO status — 1 month"
      },
      "desc": {
        "ky": "Комиссия 5% (ордуна 10%) жана PRO белги",
        "ru": "Комиссия 5% вместо 10% и значок PRO",
        "en": "5% fee instead of 10% and a PRO badge"
      }
    },
    {
      "id": "boost",
      "icon": "🚀",
      "price": 490,
      "title": {
        "ky": "Профилди көтөрүү — 7 күн",
        "ru": "Поднятие профиля — 7 дней",
        "en": "Profile boost — 7 days"
      },
      "desc": {
        "ky": "Издөөдө биринчи орунда",
        "ru": "Первые места в поиске",
        "en": "Top of search results"
      }
    },
    {
      "id": "safe",
      "icon": "🔒",
      "price": 300,
      "title": {
        "ky": "Коопсуз бүтүм",
        "ru": "Безопасная сделка",
        "en": "Safe deal"
      },
      "desc": {
        "ky": "Акча иш бүткөндө гана которулат",
        "ru": "Деньги переводятся после сдачи работы",
        "en": "Funds released after delivery"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "11:00",
      "13:00",
      "15:00",
      "17:00",
      "19:00"
    ],
    "formats": [
      {
        "id": "meet",
        "label": "Google Meet"
      },
      {
        "id": "zoom",
        "label": "Zoom"
      },
      {
        "id": "office",
        "label": {
          "ky": "Коворкингде",
          "ru": "В коворкинге",
          "en": "At the coworking"
        }
      }
    ],
    "itemLabel": {
      "ky": "Кызмат",
      "ru": "Услуга",
      "en": "Service"
    },
    "sundayOff": true
  },
  "features": [
    {
      "icon": "🔒",
      "title": {
        "ky": "Коопсуз төлөм",
        "ru": "Безопасная оплата",
        "en": "Safe payment"
      },
      "text": {
        "ky": "Акча иш кабыл алынганда которулат.",
        "ru": "Оплата после приёмки работы.",
        "en": "Paid on acceptance."
      }
    },
    {
      "icon": "✅",
      "title": {
        "ky": "Текшерилген адистер",
        "ru": "Проверенные специалисты",
        "en": "Verified pros"
      },
      "text": {
        "ky": "Портфолио жана пикирлер.",
        "ru": "Портфолио и отзывы.",
        "en": "Portfolios and reviews."
      }
    },
    {
      "icon": "⚡",
      "title": {
        "ky": "Тез аткаруу",
        "ru": "Быстрое выполнение",
        "en": "Fast delivery"
      },
      "text": {
        "ky": "Көп кызматтар 1–5 күндө.",
        "ru": "Большинство услуг за 1–5 дней.",
        "en": "Most services in 1–5 days."
      }
    },
    {
      "icon": "💬",
      "title": {
        "ky": "Чат жана колдоо",
        "ru": "Чат и поддержка",
        "en": "Chat & support"
      },
      "text": {
        "ky": "Талаш болсо — арбитраж.",
        "ru": "Арбитраж при спорах.",
        "en": "Arbitration in disputes."
      }
    }
  ],
  "stats": [
    {
      "value": "26",
      "label": {
        "ky": "кызмат",
        "ru": "услуг",
        "en": "services"
      }
    },
    {
      "value": "5 000+",
      "label": {
        "ky": "фрилансер",
        "ru": "фрилансеров",
        "en": "freelancers"
      }
    },
    {
      "value": "20 000",
      "label": {
        "ky": "заказ",
        "ru": "заказов",
        "en": "orders"
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
    "freelancer": {
      "ky": "Аткаруучу",
      "ru": "Исполнитель",
      "en": "Freelancer"
    },
    "delivery": {
      "ky": "Мөөнөтү",
      "ru": "Срок",
      "en": "Delivery"
    },
    "revisions": {
      "ky": "Оңдоолор",
      "ru": "Правки",
      "en": "Revisions"
    },
    "level": {
      "ky": "Деңгээли",
      "ru": "Уровень",
      "en": "Level"
    },
    "orders": {
      "ky": "Аткарылган заказ",
      "ru": "Выполнено заказов",
      "en": "Orders done"
    }
  },
  "faq": [
    {
      "keys": [
        "коопсуз",
        "безопас",
        "safe",
        "төлөм"
      ],
      "answer": {
        "ky": "Акча биздин системада сакталып, сиз ишти кабыл алганда фрилансерге которулат.",
        "ru": "Деньги хранятся у нас и переводятся после приёмки работы.",
        "en": "We hold the funds and release them when you accept the work."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "фрилансер",
        "freelancer",
        "катталуу"
      ],
      "answer": {
        "ky": "Фрилансер болуу үчүн катталып, профилиңизди толтуруңуз.",
        "ru": "Зарегистрируйтесь и заполните профиль, чтобы стать исполнителем.",
        "en": "Register and complete your profile to become a freelancer."
      },
      "link": "/register"
    },
    {
      "keys": [
        "сайт",
        "website",
        "лендинг"
      ],
      "answer": {
        "ky": "Сайт жасоо кызматтары \"Программалоо\" категориясында.",
        "ru": "Услуги по сайтам — в категории «Разработка».",
        "en": "Website services are in Development."
      },
      "link": "/catalog?category=dev"
    }
  ],
  "priceNote": {
    "ky": "Баалар фрилансерлердин башталгыч баасы, тапшырмага жараша өзгөрөт.",
    "ru": "Указаны стартовые цены, итог зависит от задачи.",
    "en": "Starting prices; final price depends on the task."
  },
  "dataNote": {
    "ky": "Профилдер демо максатта (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Профили демонстрационные (28.10.2026). Фото: Wikipedia.",
    "en": "Demo profiles (28.10.2026). Photos: Wikipedia."
  },
  "sources": []
};
