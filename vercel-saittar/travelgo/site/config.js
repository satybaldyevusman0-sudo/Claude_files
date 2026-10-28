// TravelGo: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "travelgo",
  "name": "TravelGo",
  "nameParts": [
    "Travel",
    "Go"
  ],
  "logo": "✈️",
  "currency": "KGS",
  "theme": {
    "primary": "#0891b2",
    "primaryDark": "#0e7490",
    "accent": "#f97316",
    "dark": "#082f3a"
  },
  "heroImage": "https://loremflickr.com/1600/900/travel,beach?lock=51",
  "heroWiki": "Phi Phi Islands",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Киев көч. 77",
      "ru": "г. Бишкек, ул. Киевская 77",
      "en": "Bishkek, 77 Kiev St."
    }
  },
  "text": {
    "tagline": {
      "ky": "Кыргызстандан дүйнө жүзүнө турлар",
      "ru": "Туры из Кыргызстана по всему миру",
      "en": "Tours from Kyrgyzstan worldwide"
    },
    "heroTitle": {
      "ky": "Дүйнөнү TravelGo менен ачыңыз",
      "ru": "Откройте мир с TravelGo",
      "en": "Discover the world with TravelGo"
    },
    "heroText": {
      "ky": "Таиланд, Дубай, Түркия, Италия, Ысык-Көл жана дагы 20дан ашык багыт. Авиабилет, мейманкана жана трансфер — бир пакетте.",
      "ru": "Таиланд, Дубай, Турция, Италия, Иссык-Куль и ещё 20+ направлений. Авиабилет, отель и трансфер — в одном пакете.",
      "en": "Thailand, Dubai, Turkey, Italy, Issyk-Kul and 20+ more. Flights, hotel and transfer in one package."
    },
    "catalog": {
      "ky": "Турлар",
      "ru": "Туры",
      "en": "Tours"
    },
    "catalogText": {
      "ky": "Аймак, баа жана күн боюнча тандаңыз",
      "ru": "Выбирайте по региону, цене и длительности",
      "en": "Filter by region, price and length"
    },
    "search": {
      "ky": "Тур издөө: Дубай, Бали, Ысык-Көл…",
      "ru": "Поиск: Дубай, Бали, Иссык-Куль…",
      "en": "Search: Dubai, Bali, Issyk-Kul…"
    },
    "plans": {
      "ky": "Кошумча кызматтар",
      "ru": "Доп. услуги",
      "en": "Extras"
    },
    "plansText": {
      "ky": "Камсыздандыруу, виза жана трансфер",
      "ru": "Страховка, виза и трансфер",
      "en": "Insurance, visa and transfer"
    },
    "booking": {
      "ky": "Консультация",
      "ru": "Консультация",
      "en": "Consultation"
    },
    "bookingText": {
      "ky": "Менеджер менен жолугушууга жазылыңыз",
      "ru": "Запишитесь на встречу с менеджером",
      "en": "Book a meeting with a manager"
    },
    "bookBtn": {
      "ky": "Жазылуу",
      "ru": "Записаться",
      "en": "Book"
    },
    "buy": {
      "ky": "Турду брондоо",
      "ru": "Забронировать тур",
      "en": "Book tour"
    },
    "about": {
      "ky": "TravelGo — 2016-жылдан бери 25 000ден ашык саякатчыны эс алдырган туристтик компания.",
      "ru": "TravelGo — туркомпания, с 2016 года отправившая в путешествия более 25 000 туристов.",
      "en": "TravelGo has sent 25,000+ travellers on holiday since 2016."
    }
  },
  "categories": [
    {
      "id": "asia",
      "name": {
        "ky": "Азия",
        "ru": "Азия",
        "en": "Asia"
      },
      "icon": "🏯",
      "wiki": "Phi Phi Islands",
      "tags": "thailand,beach"
    },
    {
      "id": "europe",
      "name": {
        "ky": "Европа",
        "ru": "Европа",
        "en": "Europe"
      },
      "icon": "🏰",
      "wiki": "Colosseum",
      "tags": "europe,city"
    },
    {
      "id": "middleeast",
      "name": {
        "ky": "Жакынкы Чыгыш",
        "ru": "Ближний Восток",
        "en": "Middle East"
      },
      "icon": "🕌",
      "wiki": "Burj Khalifa",
      "tags": "dubai,desert"
    },
    {
      "id": "kg",
      "name": {
        "ky": "Кыргызстан",
        "ru": "Кыргызстан",
        "en": "Kyrgyzstan"
      },
      "icon": "🏔️",
      "wiki": "Issyk-Kul",
      "tags": "kyrgyzstan,mountains"
    },
    {
      "id": "beach",
      "name": {
        "ky": "Деңиз жээги",
        "ru": "Пляжный отдых",
        "en": "Beach holidays"
      },
      "icon": "🏖️",
      "wiki": "Maldives",
      "tags": "beach,sea"
    },
    {
      "id": "cis",
      "name": {
        "ky": "КМШ өлкөлөрү",
        "ru": "Страны СНГ",
        "en": "CIS countries"
      },
      "icon": "🚆",
      "wiki": "Registan",
      "tags": "samarkand,city"
    }
  ],
  "plans": [
    {
      "id": "insurance",
      "icon": "🛡️",
      "price": 1200,
      "title": {
        "ky": "Саякат камсыздандыруусу",
        "ru": "Туристическая страховка",
        "en": "Travel insurance"
      },
      "desc": {
        "ky": "$30 000 чейин медициналык жардам",
        "ru": "Медпомощь до $30 000",
        "en": "Medical cover up to $30,000"
      }
    },
    {
      "id": "visa",
      "icon": "🛂",
      "price": 6500,
      "popular": true,
      "title": {
        "ky": "Шенген виза жардамы",
        "ru": "Помощь с визой Шенген",
        "en": "Schengen visa support"
      },
      "desc": {
        "ky": "Документтер, жазылуу, котормо",
        "ru": "Документы, запись, перевод",
        "en": "Documents, appointment, translation"
      }
    },
    {
      "id": "transfer",
      "icon": "🚐",
      "price": 2500,
      "title": {
        "ky": "VIP трансфер",
        "ru": "VIP-трансфер",
        "en": "VIP transfer"
      },
      "desc": {
        "ky": "Аэропорт ↔ мейманкана",
        "ru": "Аэропорт ↔ отель",
        "en": "Airport ↔ hotel"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "11:30",
      "13:00",
      "15:00",
      "16:30",
      "18:00"
    ],
    "formats": [
      {
        "id": "office",
        "label": {
          "ky": "Офисте",
          "ru": "В офисе",
          "en": "At the office"
        }
      },
      {
        "id": "online",
        "label": {
          "ky": "WhatsApp видео",
          "ru": "Видео в WhatsApp",
          "en": "WhatsApp video"
        }
      }
    ],
    "itemLabel": {
      "ky": "Тур",
      "ru": "Тур",
      "en": "Tour"
    },
    "sundayOff": true
  },
  "features": [
    {
      "icon": "✈️",
      "title": {
        "ky": "Түз рейстер",
        "ru": "Прямые рейсы",
        "en": "Direct flights"
      },
      "text": {
        "ky": "Бишкек жана Ош шаарларынан.",
        "ru": "Из Бишкека и Оша.",
        "en": "From Bishkek and Osh."
      }
    },
    {
      "icon": "💳",
      "title": {
        "ky": "Бөлүп төлөө",
        "ru": "Рассрочка",
        "en": "Instalments"
      },
      "text": {
        "ky": "3 айга 0%.",
        "ru": "0% на 3 месяца.",
        "en": "0% for 3 months."
      }
    },
    {
      "icon": "🕐",
      "title": {
        "ky": "24/7 колдоо",
        "ru": "Поддержка 24/7",
        "en": "24/7 support"
      },
      "text": {
        "ky": "Саякат учурунда байланыштабыз.",
        "ru": "На связи во время поездки.",
        "en": "We stay in touch during the trip."
      }
    },
    {
      "icon": "🔥",
      "title": {
        "ky": "Акыркы мүнөттөгү турлар",
        "ru": "Горящие туры",
        "en": "Last-minute deals"
      },
      "text": {
        "ky": "−30%ке чейин арзандатуу.",
        "ru": "Скидки до −30%.",
        "en": "Up to 30% off."
      }
    }
  ],
  "stats": [
    {
      "value": "27",
      "label": {
        "ky": "багыт",
        "ru": "направлений",
        "en": "destinations"
      }
    },
    {
      "value": "25 000+",
      "label": {
        "ky": "турист",
        "ru": "туристов",
        "en": "travellers"
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
      "value": "4.9★",
      "label": {
        "ky": "рейтинг",
        "ru": "рейтинг",
        "en": "rating"
      }
    }
  ],
  "specLabels": {
    "days": {
      "ky": "Узактыгы",
      "ru": "Длительность",
      "en": "Duration"
    },
    "hotel": {
      "ky": "Мейманкана",
      "ru": "Отель",
      "en": "Hotel"
    },
    "flight": {
      "ky": "Авиабилет",
      "ru": "Перелёт",
      "en": "Flight"
    },
    "meals": {
      "ky": "Тамак",
      "ru": "Питание",
      "en": "Meals"
    },
    "visa": {
      "ky": "Виза",
      "ru": "Виза",
      "en": "Visa"
    }
  },
  "faq": [
    {
      "keys": [
        "виза",
        "visa"
      ],
      "answer": {
        "ky": "Таиланд, Түркия, БАЭ жана Грузия кыргыз жарандарына визасыз. Шенгенге жардам беребиз.",
        "ru": "Таиланд, Турция, ОАЭ и Грузия — без визы для граждан КР. Поможем с Шенгеном.",
        "en": "Thailand, Turkey, UAE and Georgia are visa-free for Kyrgyz citizens. We help with Schengen."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "бөлүп",
        "рассроч",
        "кредит"
      ],
      "answer": {
        "ky": "3 айга 0% менен бөлүп төлөсөңүз болот.",
        "ru": "Рассрочка 0% на 3 месяца.",
        "en": "0% instalments for 3 months."
      },
      "link": "/contact"
    },
    {
      "keys": [
        "арзан",
        "дешев",
        "cheap",
        "горящ"
      ],
      "answer": {
        "ky": "Эң арзан турлар — Ысык-Көл жана Өзбекстан. Каталогду баа боюнча иреттеңиз.",
        "ru": "Самые бюджетные — Иссык-Куль и Узбекистан. Отсортируйте каталог по цене.",
        "en": "Cheapest: Issyk-Kul and Uzbekistan. Sort the catalogue by price."
      },
      "link": "/catalog?sort=price_asc"
    }
  ],
  "priceNote": {
    "ky": "Баалар бир адамга, эки кишилик бөлмөдө, болжолдуу; учуу күнүнө жараша өзгөрөт.",
    "ru": "Цены за человека при двухместном размещении, ориентировочные.",
    "en": "Per person, twin share, approximate."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026). Фото: Wikipedia.",
    "en": "Approximate prices (28.10.2026). Photos: Wikipedia."
  },
  "sources": []
};
