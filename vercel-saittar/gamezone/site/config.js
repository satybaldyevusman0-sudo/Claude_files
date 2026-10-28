// GameZone: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "gamezone",
  "name": "GameZone",
  "nameParts": [
    "Game",
    "Zone"
  ],
  "logo": "🎮",
  "currency": "KGS",
  "theme": {
    "primary": "#7c3aed",
    "primaryDark": "#5b21b6",
    "accent": "#22d3ee",
    "dark": "#0d0620"
  },
  "heroImage": "https://loremflickr.com/1600/900/gaming,esports?lock=101",
  "heroWiki": "Esports",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Киев көч. 148 (киберклуб)",
      "ru": "г. Бишкек, ул. Киевская 148 (киберклуб)",
      "en": "Bishkek, 148 Kiev St. (cyber club)"
    }
  },
  "text": {
    "tagline": {
      "ky": "Оюндар дүкөнү жана киберклуб",
      "ru": "Магазин игр и киберклуб",
      "en": "Game store and cyber club"
    },
    "heroTitle": {
      "ky": "Ойно. Жеңиш. Кайталан.",
      "ru": "Играй. Побеждай. Повторяй.",
      "en": "Play. Win. Repeat."
    },
    "heroText": {
      "ky": "PC жана консоль оюндары, PS5, Xbox, Switch, геймер аксессуарлары жана мобилдик донат. RTX 4080 компьютерлери бар киберклубда ордуңузду брондоңуз.",
      "ru": "Игры для ПК и консолей, PS5, Xbox, Switch, аксессуары и мобильный донат. Бронируйте место в киберклубе с RTX 4080.",
      "en": "PC and console games, PS5, Xbox, Switch, gear and mobile top-ups. Book a seat at our RTX 4080 cyber club."
    },
    "catalog": {
      "ky": "Дүкөн",
      "ru": "Магазин",
      "en": "Store"
    },
    "catalogText": {
      "ky": "Платформа, жанр жана баа боюнча тандаңыз",
      "ru": "Выбирайте по платформе, жанру и цене",
      "en": "Filter by platform, genre and price"
    },
    "search": {
      "ky": "Оюн издөө: CS2, Dota, PS5…",
      "ru": "Поиск: CS2, Dota, PS5…",
      "en": "Search: CS2, Dota, PS5…"
    },
    "plans": {
      "ky": "Киберклуб тарифтери",
      "ru": "Тарифы киберклуба",
      "en": "Cyber club rates"
    },
    "plansText": {
      "ky": "Саатына, түнкү пакет жана VIP",
      "ru": "Почасово, ночной пакет и VIP",
      "en": "Hourly, night pack and VIP"
    },
    "booking": {
      "ky": "Киберклуб",
      "ru": "Киберклуб",
      "en": "Cyber club"
    },
    "bookingText": {
      "ky": "PC же PS5 ордун брондоңуз",
      "ru": "Забронируйте ПК или PS5",
      "en": "Book a PC or PS5 seat"
    },
    "bookBtn": {
      "ky": "Орун брондоо",
      "ru": "Забронировать место",
      "en": "Book a seat"
    },
    "buy": {
      "ky": "Себетке",
      "ru": "В корзину",
      "en": "Add to cart"
    },
    "about": {
      "ky": "GameZone — 2019-жылдан бери иштеген оюн дүкөнү жана 40 орундуу киберклуб.",
      "ru": "GameZone — магазин игр и киберклуб на 40 мест с 2019 года.",
      "en": "GameZone is a game store and 40-seat cyber club since 2019."
    }
  },
  "categories": [
    {
      "id": "pc",
      "name": {
        "ky": "PC оюндары",
        "ru": "Игры для ПК",
        "en": "PC games"
      },
      "icon": "🖥️",
      "wiki": "Gaming computer",
      "tags": "gaming,pc"
    },
    {
      "id": "console",
      "name": {
        "ky": "Консоль оюндары",
        "ru": "Игры для консолей",
        "en": "Console games"
      },
      "icon": "🎮",
      "wiki": "PlayStation 5",
      "tags": "playstation,gaming"
    },
    {
      "id": "hardware",
      "name": {
        "ky": "Консолдор",
        "ru": "Консоли",
        "en": "Consoles"
      },
      "icon": "🕹️",
      "wiki": "Xbox Series X and Series S",
      "tags": "console,gaming"
    },
    {
      "id": "gear",
      "name": {
        "ky": "Геймер аксессуарлары",
        "ru": "Аксессуары",
        "en": "Gaming gear"
      },
      "icon": "🎧",
      "wiki": "Gaming keyboard",
      "tags": "keyboard,gaming"
    },
    {
      "id": "mobile",
      "name": {
        "ky": "Мобилдик оюндар",
        "ru": "Мобильные игры",
        "en": "Mobile games"
      },
      "icon": "📱",
      "wiki": "Mobile game",
      "tags": "smartphone,game"
    }
  ],
  "plans": [
    {
      "id": "hour",
      "icon": "⏱️",
      "price": 120,
      "title": {
        "ky": "Стандарт PC — 1 саат",
        "ru": "Стандарт ПК — 1 час",
        "en": "Standard PC — 1 hour"
      },
      "desc": {
        "ky": "RTX 4070, 240 Гц монитор",
        "ru": "RTX 4070, монитор 240 Гц",
        "en": "RTX 4070, 240 Hz monitor"
      }
    },
    {
      "id": "night",
      "icon": "🌙",
      "price": 600,
      "popular": true,
      "title": {
        "ky": "Түнкү пакет",
        "ru": "Ночной пакет",
        "en": "Night pack"
      },
      "desc": {
        "ky": "22:00дөн 08:00гө чейин",
        "ru": "С 22:00 до 08:00",
        "en": "10 pm to 8 am"
      }
    },
    {
      "id": "vip",
      "icon": "👑",
      "price": 250,
      "title": {
        "ky": "VIP бөлмө — 1 саат",
        "ru": "VIP-комната — 1 час",
        "en": "VIP room — 1 hour"
      },
      "desc": {
        "ky": "RTX 4080, жеке бөлмө 5 PC",
        "ru": "RTX 4080, отдельная комната на 5 ПК",
        "en": "RTX 4080, private room for 5"
      }
    },
    {
      "id": "ps5",
      "icon": "🎮",
      "price": 200,
      "title": {
        "ky": "PS5 + 65\" ТВ — 1 саат",
        "ru": "PS5 + ТВ 65\" — 1 час",
        "en": "PS5 + 65\" TV — 1 hour"
      },
      "desc": {
        "ky": "FC 25, MK1, GTA V",
        "ru": "FC 25, MK1, GTA V",
        "en": "FC 25, MK1, GTA V"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "13:00",
      "16:00",
      "19:00",
      "22:00",
      "01:00"
    ],
    "formats": [
      {
        "id": "pc",
        "label": {
          "ky": "Стандарт PC",
          "ru": "Стандарт ПК",
          "en": "Standard PC"
        }
      },
      {
        "id": "vip",
        "label": {
          "ky": "VIP PC",
          "ru": "VIP ПК",
          "en": "VIP PC"
        }
      },
      {
        "id": "ps5",
        "label": "PS5"
      }
    ],
    "itemLabel": {
      "ky": "Оюн",
      "ru": "Игра",
      "en": "Game"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "⚡",
      "title": {
        "ky": "Ыкчам активация",
        "ru": "Мгновенная активация",
        "en": "Instant activation"
      },
      "text": {
        "ky": "Ачкычтар 5 мүнөттө.",
        "ru": "Ключи за 5 минут.",
        "en": "Keys in 5 minutes."
      }
    },
    {
      "icon": "🛡️",
      "title": {
        "ky": "Расмий кепилдик",
        "ru": "Официальная гарантия",
        "en": "Official warranty"
      },
      "text": {
        "ky": "Консолдорго 12 ай.",
        "ru": "12 месяцев на консоли.",
        "en": "12 months on consoles."
      }
    },
    {
      "icon": "🏆",
      "title": {
        "ky": "Турнирлер",
        "ru": "Турниры",
        "en": "Tournaments"
      },
      "text": {
        "ky": "Ар жумада CS2 жана Dota 2.",
        "ru": "Каждую неделю CS2 и Dota 2.",
        "en": "Weekly CS2 and Dota 2."
      }
    },
    {
      "icon": "🍕",
      "title": {
        "ky": "Клубда тамак",
        "ru": "Еда в клубе",
        "en": "Food in the club"
      },
      "text": {
        "ky": "Пицца жана энергетиктер.",
        "ru": "Пицца и энергетики.",
        "en": "Pizza and energy drinks."
      }
    }
  ],
  "stats": [
    {
      "value": "27",
      "label": {
        "ky": "товар",
        "ru": "товаров",
        "en": "products"
      }
    },
    {
      "value": "40",
      "label": {
        "ky": "PC орун",
        "ru": "мест ПК",
        "en": "PC seats"
      }
    },
    {
      "value": "24/7",
      "label": {
        "ky": "киберклуб",
        "ru": "киберклуб",
        "en": "cyber club"
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
    "platform": {
      "ky": "Платформа",
      "ru": "Платформа",
      "en": "Platform"
    },
    "genre": {
      "ky": "Жанры",
      "ru": "Жанр",
      "en": "Genre"
    },
    "age": {
      "ky": "Жаш чеги",
      "ru": "Возраст",
      "en": "Age"
    },
    "players": {
      "ky": "Оюнчулар",
      "ru": "Игроки",
      "en": "Players"
    },
    "language": {
      "ky": "Тили",
      "ru": "Язык",
      "en": "Language"
    },
    "brand": {
      "ky": "Бренд",
      "ru": "Бренд",
      "en": "Brand"
    },
    "warranty": {
      "ky": "Кепилдик",
      "ru": "Гарантия",
      "en": "Warranty"
    },
    "connection": {
      "ky": "Туташуу",
      "ru": "Подключение",
      "en": "Connection"
    }
  },
  "faq": [
    {
      "keys": [
        "ачкыч",
        "ключ",
        "key",
        "активац"
      ],
      "answer": {
        "ky": "Оюн ачкычы төлөмдөн кийин 5 мүнөттө почтаңызга келет.",
        "ru": "Ключ приходит на почту через 5 минут после оплаты.",
        "en": "Your key arrives by email 5 minutes after payment."
      },
      "link": "/catalog"
    },
    {
      "keys": [
        "клуб",
        "club",
        "брон"
      ],
      "answer": {
        "ky": "Киберклубда ордуңузду \"Киберклуб\" барагынан брондоңуз. Иштөө убактысы 24/7.",
        "ru": "Забронируйте место на странице «Киберклуб». Работаем 24/7.",
        "en": "Book a seat on the Cyber club page. Open 24/7."
      },
      "link": "/booking"
    },
    {
      "keys": [
        "турнир",
        "tournament"
      ],
      "answer": {
        "ky": "Ар ишемби CS2 жана Dota 2 турнирлери, байге фонду 50 000 сом.",
        "ru": "Каждую субботу турниры по CS2 и Dota 2, призовой 50 000 сом.",
        "en": "CS2 and Dota 2 tournaments every Saturday, 50,000 KGS prize pool."
      },
      "link": "/contact"
    }
  ],
  "priceNote": {
    "ky": "Баалар Бишкектеги дүкөндөрдүн орточо баасына жакын, болжолдуу.",
    "ru": "Цены ориентировочные, близки к средним по Бишкеку.",
    "en": "Approximate prices, close to Bishkek averages."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia (оюн мукабалары тиешелүү компанияларга таандык).",
    "ru": "Цены ориентировочные (28.10.2026). Изображения: Wikipedia (обложки принадлежат правообладателям).",
    "en": "Approximate prices (28.10.2026). Images: Wikipedia (cover art belongs to its owners)."
  },
  "sources": []
};
