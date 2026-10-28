// JobFinder: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "jobfinder",
  "name": "JobFinder",
  "nameParts": [
    "Job",
    "Finder"
  ],
  "logo": "💼",
  "currency": "KGS",
  "theme": {
    "primary": "#16a34a",
    "primaryDark": "#15803d",
    "accent": "#2563eb",
    "dark": "#06210f"
  },
  "heroImage": "https://loremflickr.com/1600/900/office,team?lock=71",
  "heroWiki": "Coworking",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Манас пр. 40",
      "ru": "г. Бишкек, пр. Манаса 40",
      "en": "Bishkek, 40 Manas Ave."
    }
  },
  "text": {
    "tagline": {
      "ky": "Кыргызстандагы жумуш издөө платформасы",
      "ru": "Платформа поиска работы в Кыргызстане",
      "en": "Job search platform in Kyrgyzstan"
    },
    "heroTitle": {
      "ky": "Кыялыңыздагы жумушту бүгүн табыңыз",
      "ru": "Найдите работу мечты сегодня",
      "en": "Find your dream job today"
    },
    "heroText": {
      "ky": "IT, банк, медицина, сатуу, курулуш жана билим берүү тармактарындагы 26 вакансия. Резюме жиберип, маекке онлайн жазылыңыз.",
      "ru": "26 вакансий в IT, банках, медицине, продажах, стройке и образовании. Откликайтесь и записывайтесь на собеседование онлайн.",
      "en": "26 vacancies in IT, banking, healthcare, sales, construction and education. Apply and book interviews online."
    },
    "catalog": {
      "ky": "Вакансиялар",
      "ru": "Вакансии",
      "en": "Vacancies"
    },
    "catalogText": {
      "ky": "Тармак, айлык жана компания боюнча тандаңыз",
      "ru": "Фильтруйте по сфере, зарплате и компании",
      "en": "Filter by field, salary and company"
    },
    "search": {
      "ky": "Вакансия издөө: React, бухгалтер…",
      "ru": "Поиск: React, бухгалтер…",
      "en": "Search: React, accountant…"
    },
    "plans": {
      "ky": "Иш берүүчүлөр үчүн",
      "ru": "Для работодателей",
      "en": "For employers"
    },
    "plansText": {
      "ky": "Вакансия жарыялоо жана резюме базасы",
      "ru": "Размещение вакансий и база резюме",
      "en": "Post jobs and access CVs"
    },
    "booking": {
      "ky": "Маекке жазылуу",
      "ru": "Запись на собеседование",
      "en": "Interview booking"
    },
    "bookingText": {
      "ky": "Вакансияны тандап, маек убактысын брондоңуз",
      "ru": "Выберите вакансию и время собеседования",
      "en": "Pick a vacancy and an interview time"
    },
    "bookBtn": {
      "ky": "Маекке жазылуу",
      "ru": "Записаться на собеседование",
      "en": "Book interview"
    },
    "buy": {
      "ky": "Тандоо",
      "ru": "Выбрать",
      "en": "Select"
    },
    "about": {
      "ky": "JobFinder — 1200дөн ашык компания жана 80 000 талапкер колдонгон жумуш порталы.",
      "ru": "JobFinder — портал вакансий, которым пользуются 1200+ компаний и 80 000 соискателей.",
      "en": "JobFinder is used by 1,200+ companies and 80,000 job seekers."
    }
  },
  "categories": [
    {
      "id": "it",
      "name": {
        "ky": "IT жана технология",
        "ru": "IT и технологии",
        "en": "IT & tech"
      },
      "icon": "💻",
      "wiki": "Programmer",
      "tags": "office,computer"
    },
    {
      "id": "sales",
      "name": {
        "ky": "Сатуу жана сервис",
        "ru": "Продажи и сервис",
        "en": "Sales & service"
      },
      "icon": "🛒",
      "wiki": "Retail",
      "tags": "shop,retail"
    },
    {
      "id": "finance",
      "name": {
        "ky": "Финансы жана банк",
        "ru": "Финансы и банки",
        "en": "Finance & banking"
      },
      "icon": "🏦",
      "wiki": "Bank",
      "tags": "bank,finance"
    },
    {
      "id": "medicine",
      "name": {
        "ky": "Медицина",
        "ru": "Медицина",
        "en": "Healthcare"
      },
      "icon": "🩺",
      "wiki": "Physician",
      "tags": "hospital,doctor"
    },
    {
      "id": "build",
      "name": {
        "ky": "Курулуш жана транспорт",
        "ru": "Стройка и транспорт",
        "en": "Construction & transport"
      },
      "icon": "🏗️",
      "wiki": "Construction worker",
      "tags": "construction"
    },
    {
      "id": "edu",
      "name": {
        "ky": "Билим берүү",
        "ru": "Образование",
        "en": "Education"
      },
      "icon": "🎓",
      "wiki": "Teacher",
      "tags": "school,teacher"
    }
  ],
  "plans": [
    {
      "id": "post",
      "icon": "📢",
      "price": 1500,
      "title": {
        "ky": "1 вакансия — 30 күн",
        "ru": "1 вакансия — 30 дней",
        "en": "1 vacancy — 30 days"
      },
      "desc": {
        "ky": "Каталогдо жарыялоо",
        "ru": "Размещение в каталоге",
        "en": "Listing in the catalogue"
      }
    },
    {
      "id": "premium",
      "icon": "🔥",
      "price": 4500,
      "popular": true,
      "title": {
        "ky": "Премиум вакансия",
        "ru": "Премиум-вакансия",
        "en": "Premium vacancy"
      },
      "desc": {
        "ky": "Башкы бетте + Telegram каналда",
        "ru": "На главной + в Telegram-канале",
        "en": "Homepage + Telegram channel"
      },
      "features": [
        {
          "ky": "Жогорку орун",
          "ru": "Топ-позиция",
          "en": "Top placement"
        },
        {
          "ky": "Логотип",
          "ru": "Логотип",
          "en": "Logo"
        },
        {
          "ky": "Статистика",
          "ru": "Статистика",
          "en": "Stats"
        }
      ]
    },
    {
      "id": "cv",
      "icon": "📂",
      "price": 9900,
      "title": {
        "ky": "Резюме базасы — 1 ай",
        "ru": "База резюме — 1 месяц",
        "en": "CV database — 1 month"
      },
      "desc": {
        "ky": "80 000 резюмеге кирүү",
        "ru": "Доступ к 80 000 резюме",
        "en": "Access to 80,000 CVs"
      }
    }
  ],
  "booking": {
    "slots": [
      "09:30",
      "11:00",
      "12:30",
      "14:30",
      "16:00",
      "17:30"
    ],
    "formats": [
      {
        "id": "office",
        "label": {
          "ky": "Офисте",
          "ru": "В офисе",
          "en": "In office"
        }
      },
      {
        "id": "online",
        "label": {
          "ky": "Онлайн (Google Meet)",
          "ru": "Онлайн (Google Meet)",
          "en": "Online (Google Meet)"
        }
      }
    ],
    "itemLabel": {
      "ky": "Вакансия",
      "ru": "Вакансия",
      "en": "Vacancy"
    },
    "sundayOff": true
  },
  "features": [
    {
      "icon": "✅",
      "title": {
        "ky": "Текшерилген компаниялар",
        "ru": "Проверенные компании",
        "en": "Verified companies"
      },
      "text": {
        "ky": "Ар бир иш берүүчү текшерилет.",
        "ru": "Каждый работодатель проверен.",
        "en": "Every employer verified."
      }
    },
    {
      "icon": "⚡",
      "title": {
        "ky": "Тез жооп",
        "ru": "Быстрый отклик",
        "en": "Fast replies"
      },
      "text": {
        "ky": "Орточо 2 күндө.",
        "ru": "В среднем за 2 дня.",
        "en": "In 2 days on average."
      }
    },
    {
      "icon": "🔔",
      "title": {
        "ky": "Билдирүүлөр",
        "ru": "Уведомления",
        "en": "Alerts"
      },
      "text": {
        "ky": "Жаңы вакансиялар Telegram’га.",
        "ru": "Новые вакансии в Telegram.",
        "en": "New jobs to Telegram."
      }
    },
    {
      "icon": "🆓",
      "title": {
        "ky": "Талапкерлерге бекер",
        "ru": "Бесплатно для соискателей",
        "en": "Free for job seekers"
      },
      "text": {
        "ky": "Резюме жана маек — акысыз.",
        "ru": "Резюме и собеседования бесплатно.",
        "en": "CVs and interviews are free."
      }
    }
  ],
  "stats": [
    {
      "value": "26",
      "label": {
        "ky": "вакансия",
        "ru": "вакансий",
        "en": "vacancies"
      }
    },
    {
      "value": "1 200+",
      "label": {
        "ky": "компания",
        "ru": "компаний",
        "en": "companies"
      }
    },
    {
      "value": "80 000",
      "label": {
        "ky": "талапкер",
        "ru": "соискателей",
        "en": "job seekers"
      }
    },
    {
      "value": "4.8★",
      "label": {
        "ky": "рейтинг",
        "ru": "рейтинг",
        "en": "rating"
      }
    }
  ],
  "specLabels": {
    "company": {
      "ky": "Компания",
      "ru": "Компания",
      "en": "Company"
    },
    "experience": {
      "ky": "Тажрыйба",
      "ru": "Опыт",
      "en": "Experience"
    },
    "schedule": {
      "ky": "График",
      "ru": "График",
      "en": "Schedule"
    },
    "location": {
      "ky": "Жери",
      "ru": "Место",
      "en": "Location"
    },
    "education": {
      "ky": "Билими",
      "ru": "Образование",
      "en": "Education"
    }
  },
  "faq": [
    {
      "keys": [
        "резюме",
        "cv",
        "resume"
      ],
      "answer": {
        "ky": "Вакансияны ачып, \"Маекке жазылуу\" баскычын басыңыз — бул бекер.",
        "ru": "Откройте вакансию и нажмите «Записаться на собеседование» — это бесплатно.",
        "en": "Open a vacancy and press Book interview — it’s free."
      },
      "link": "/booking"
    },
    {
      "keys": [
        "алыстан",
        "удален",
        "remote"
      ],
      "answer": {
        "ky": "Алыстан иштөө вакансияларын издөөгө \"Алыстан\" деп жазыңыз.",
        "ru": "Для удалёнки введите в поиск «Алыстан».",
        "en": "Search for “Алыстан” to find remote jobs."
      },
      "link": "/catalog?q=Алыстан"
    },
    {
      "keys": [
        "жарыяла",
        "размест",
        "post"
      ],
      "answer": {
        "ky": "Иш берүүчүлөр \"Иш берүүчүлөр үчүн\" барагынан пакет тандайт.",
        "ru": "Работодатели выбирают пакет на странице «Для работодателей».",
        "en": "Employers choose a package on the For employers page."
      },
      "link": "/plans"
    }
  ],
  "priceNote": {
    "ky": "Айлыктар компаниялардын жарыяларына негизделген, болжолдуу (салык чегерилгенге чейин).",
    "ru": "Зарплаты по данным объявлений, ориентировочно (до налогов).",
    "en": "Salaries from job ads, approximate (before tax)."
  },
  "dataNote": {
    "ky": "Маалымат болжолдуу (28.10.2026), компаниялар демо максатта көрсөтүлгөн. Сүрөттөр: Wikipedia.",
    "ru": "Данные ориентировочные (28.10.2026), компании указаны для демо. Фото: Wikipedia.",
    "en": "Approximate data (28.10.2026); companies are shown for demo. Photos: Wikipedia."
  },
  "sources": []
};
