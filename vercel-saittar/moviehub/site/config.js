// MovieHub: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "moviehub",
  "name": "MovieHub",
  "nameParts": [
    "Movie",
    "Hub"
  ],
  "logo": "🎬",
  "currency": "KGS",
  "theme": {
    "primary": "#be123c",
    "primaryDark": "#9f1239",
    "accent": "#facc15",
    "dark": "#14060a"
  },
  "heroImage": "https://loremflickr.com/1600/900/cinema,theater?lock=91",
  "heroWiki": "Movie theater",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Манас пр. 2 (кинотеатр)",
      "ru": "г. Бишкек, пр. Манаса 2 (кинотеатр)",
      "en": "Bishkek, 2 Manas Ave. (cinema)"
    }
  },
  "text": {
    "tagline": {
      "ky": "Кинотеатр жана онлайн кино",
      "ru": "Кинотеатр и онлайн-кино",
      "en": "Cinema and online movies"
    },
    "heroTitle": {
      "ky": "Эң жаңы кинолор — чоң экранда",
      "ru": "Новейшие фильмы — на большом экране",
      "en": "The latest films on the big screen"
    },
    "heroText": {
      "ky": "IMAX жана 4DX залдары, кыргыз кинолору, мультфильмдер жана классика. Билетти онлайн сатып алып, ордуңузду брондоңуз.",
      "ru": "Залы IMAX и 4DX, кыргызское кино, мультфильмы и классика. Покупайте билеты онлайн и бронируйте места.",
      "en": "IMAX and 4DX halls, Kyrgyz cinema, animation and classics. Buy tickets and book seats online."
    },
    "catalog": {
      "ky": "Афиша",
      "ru": "Афиша",
      "en": "Now showing"
    },
    "catalogText": {
      "ky": "Жанр, баа жана рейтинг боюнча тандаңыз",
      "ru": "Выбирайте по жанру, цене и рейтингу",
      "en": "Filter by genre, price and rating"
    },
    "search": {
      "ky": "Кино издөө: Dune, Oppenheimer…",
      "ru": "Поиск: Dune, Oppenheimer…",
      "en": "Search: Dune, Oppenheimer…"
    },
    "plans": {
      "ky": "Жазылуу жана попкорн",
      "ru": "Подписка и попкорн",
      "en": "Subscriptions & snacks"
    },
    "plansText": {
      "ky": "Онлайн кинотеатр жана комбо",
      "ru": "Онлайн-кинотеатр и комбо",
      "en": "Online cinema and combos"
    },
    "booking": {
      "ky": "Орун брондоо",
      "ru": "Бронь мест",
      "en": "Seat booking"
    },
    "bookingText": {
      "ky": "Сеансты жана залды тандаңыз",
      "ru": "Выберите сеанс и зал",
      "en": "Pick a session and hall"
    },
    "bookBtn": {
      "ky": "Орун брондоо",
      "ru": "Забронировать место",
      "en": "Book a seat"
    },
    "buy": {
      "ky": "Билет сатып алуу",
      "ru": "Купить билет",
      "en": "Buy ticket"
    },
    "about": {
      "ky": "MovieHub — 8 залы бар заманбап кинотеатр жана онлайн кино платформасы.",
      "ru": "MovieHub — современный кинотеатр с 8 залами и онлайн-платформа.",
      "en": "MovieHub is a modern 8-screen cinema and an online platform."
    }
  },
  "categories": [
    {
      "id": "action",
      "name": {
        "ky": "Экшн жана укмуштуу окуялар",
        "ru": "Боевики и приключения",
        "en": "Action & adventure"
      },
      "icon": "💥",
      "wiki": "Cinema",
      "tags": "cinema,movie"
    },
    {
      "id": "scifi",
      "name": {
        "ky": "Фантастика",
        "ru": "Фантастика",
        "en": "Sci-fi"
      },
      "icon": "🚀",
      "wiki": "Science fiction film",
      "tags": "space,galaxy"
    },
    {
      "id": "drama",
      "name": {
        "ky": "Драма",
        "ru": "Драма",
        "en": "Drama"
      },
      "icon": "🎭",
      "wiki": "Drama (film and television)",
      "tags": "theatre,stage"
    },
    {
      "id": "animation",
      "name": {
        "ky": "Мультфильмдер",
        "ru": "Мультфильмы",
        "en": "Animation"
      },
      "icon": "🧸",
      "wiki": "Animation",
      "tags": "animation,cartoon"
    },
    {
      "id": "kyrgyz",
      "name": {
        "ky": "Кыргыз кинолору",
        "ru": "Кыргызское кино",
        "en": "Kyrgyz cinema"
      },
      "icon": "🇰🇬",
      "wiki": "Cinema of Kyrgyzstan",
      "tags": "kyrgyzstan,mountains"
    },
    {
      "id": "comedy",
      "name": {
        "ky": "Комедия",
        "ru": "Комедия",
        "en": "Comedy"
      },
      "icon": "😂",
      "wiki": "Comedy film",
      "tags": "popcorn,cinema"
    }
  ],
  "plans": [
    {
      "id": "online",
      "icon": "📺",
      "price": 299,
      "title": {
        "ky": "Онлайн — 1 ай",
        "ru": "Онлайн — 1 месяц",
        "en": "Online — 1 month"
      },
      "desc": {
        "ky": "Бардык кинолор HD сапатта",
        "ru": "Все фильмы в HD",
        "en": "All films in HD"
      }
    },
    {
      "id": "premium",
      "icon": "👑",
      "price": 1490,
      "popular": true,
      "title": {
        "ky": "Premium — 1 ай",
        "ru": "Premium — 1 месяц",
        "en": "Premium — 1 month"
      },
      "desc": {
        "ky": "4 билет + онлайн 4K",
        "ru": "4 билета + онлайн 4K",
        "en": "4 tickets + online 4K"
      }
    },
    {
      "id": "combo",
      "icon": "🍿",
      "price": 390,
      "title": {
        "ky": "Попкорн комбо",
        "ru": "Комбо попкорн",
        "en": "Popcorn combo"
      },
      "desc": {
        "ky": "Чоң попкорн + 2 суусундук",
        "ru": "Большой попкорн + 2 напитка",
        "en": "Large popcorn + 2 drinks"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:30",
      "13:00",
      "15:40",
      "18:20",
      "21:00",
      "23:30"
    ],
    "formats": [
      {
        "id": "standard",
        "label": {
          "ky": "Стандарт зал",
          "ru": "Стандартный зал",
          "en": "Standard hall"
        }
      },
      {
        "id": "imax",
        "label": "IMAX"
      },
      {
        "id": "4dx",
        "label": "4DX"
      },
      {
        "id": "vip",
        "label": {
          "ky": "VIP зал",
          "ru": "VIP-зал",
          "en": "VIP hall"
        }
      }
    ],
    "itemLabel": {
      "ky": "Кино",
      "ru": "Фильм",
      "en": "Film"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "🎞️",
      "title": "IMAX & 4DX",
      "text": {
        "ky": "Борбор Азиядагы эң чоң экран.",
        "ru": "Крупнейший экран в Центральной Азии.",
        "en": "The largest screen in Central Asia."
      }
    },
    {
      "icon": "🗣️",
      "title": {
        "ky": "Кыргызча дубляж",
        "ru": "Дубляж на кыргызском",
        "en": "Kyrgyz dubbing"
      },
      "text": {
        "ky": "Мультфильмдер кыргыз тилинде.",
        "ru": "Мультфильмы на кыргызском.",
        "en": "Animation in Kyrgyz."
      }
    },
    {
      "icon": "📱",
      "title": {
        "ky": "Электрондук билет",
        "ru": "Электронный билет",
        "en": "E-ticket"
      },
      "text": {
        "ky": "QR код менен кириңиз.",
        "ru": "Вход по QR-коду.",
        "en": "Enter with a QR code."
      }
    },
    {
      "icon": "🎓",
      "title": {
        "ky": "Студенттерге −20%",
        "ru": "Студентам −20%",
        "en": "Students −20%"
      },
      "text": {
        "ky": "Дүйшөмбү–бейшемби.",
        "ru": "Пн–Чт.",
        "en": "Mon–Thu."
      }
    }
  ],
  "stats": [
    {
      "value": "26",
      "label": {
        "ky": "кино",
        "ru": "фильмов",
        "en": "films"
      }
    },
    {
      "value": "8",
      "label": {
        "ky": "зал",
        "ru": "залов",
        "en": "halls"
      }
    },
    {
      "value": "1 200",
      "label": {
        "ky": "орун",
        "ru": "мест",
        "en": "seats"
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
    "year": {
      "ky": "Жылы",
      "ru": "Год",
      "en": "Year"
    },
    "duration": {
      "ky": "Узактыгы",
      "ru": "Длительность",
      "en": "Length"
    },
    "age": {
      "ky": "Жаш чеги",
      "ru": "Возраст",
      "en": "Age rating"
    },
    "genre": {
      "ky": "Жанры",
      "ru": "Жанр",
      "en": "Genre"
    },
    "imdb": "IMDb"
  },
  "faq": [
    {
      "keys": [
        "билет",
        "ticket"
      ],
      "answer": {
        "ky": "Билетти кинонун барагынан сатып алып, \"Орун брондоо\" аркылуу орун тандаңыз.",
        "ru": "Купите билет на странице фильма и выберите место в «Бронь мест».",
        "en": "Buy on the film page and choose a seat in Seat booking."
      },
      "link": "/booking"
    },
    {
      "keys": [
        "студент",
        "student",
        "арзан"
      ],
      "answer": {
        "ky": "Студенттерге дүйшөмбүдөн бейшембиге чейин −20%.",
        "ru": "Студентам −20% с понедельника по четверг.",
        "en": "Students get 20% off Mon–Thu."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "кыргыз",
        "kyrgyz",
        "кыргызча"
      ],
      "answer": {
        "ky": "Кыргыз кинолору өзүнчө категорияда.",
        "ru": "Кыргызское кино — отдельная категория.",
        "en": "Kyrgyz films have their own category."
      },
      "link": "/catalog?category=kyrgyz"
    }
  ],
  "priceNote": {
    "ky": "Билет баалары Бишкектеги кинотеатрлардын орточо баасына жакын.",
    "ru": "Цены билетов близки к средним по кинотеатрам Бишкека.",
    "en": "Ticket prices close to Bishkek cinema averages."
  },
  "dataNote": {
    "ky": "Афиша демо максатта (28.10.2026). Сүрөттөр: Wikipedia (постерлер тиешелүү студияларга таандык).",
    "ru": "Афиша демонстрационная (28.10.2026). Изображения: Wikipedia (постеры принадлежат правообладателям).",
    "en": "Demo schedule (28.10.2026). Images: Wikipedia (posters belong to their studios)."
  },
  "sources": []
};
