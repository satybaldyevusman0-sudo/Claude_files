// FoodExpress: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "foodexpress",
  "name": "FoodExpress",
  "nameParts": [
    "Food",
    "Express"
  ],
  "logo": "🍽️",
  "currency": "KGS",
  "theme": {
    "primary": "#dc2626",
    "primaryDark": "#b91c1c",
    "accent": "#f59e0b",
    "dark": "#2a0b0b"
  },
  "heroImage": "https://loremflickr.com/1600/900/food,restaurant?lock=61",
  "heroWiki": "Pilaf",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Токтогул көч. 125",
      "ru": "г. Бишкек, ул. Токтогула 125",
      "en": "Bishkek, 125 Toktogul St."
    }
  },
  "text": {
    "tagline": {
      "ky": "Бишкек боюнча тез тамак жеткирүү",
      "ru": "Быстрая доставка еды по Бишкеку",
      "en": "Fast food delivery in Bishkek"
    },
    "heroTitle": {
      "ky": "Ысык тамак — 40 мүнөттө эшигиңизде",
      "ru": "Горячая еда у двери за 40 минут",
      "en": "Hot food at your door in 40 minutes"
    },
    "heroText": {
      "ky": "Ош палоосу, бешбармак, лагман, пицца, суши жана десерттер. 1000 сомдон ашса жеткирүү бекер. Үстөлдү да брондосоңуз болот.",
      "ru": "Ошский плов, бешбармак, лагман, пицца, суши и десерты. Доставка бесплатно от 1000 сом. Можно забронировать стол.",
      "en": "Osh plov, beshbarmak, lagman, pizza, sushi and desserts. Free delivery over 1000 KGS. Table booking available."
    },
    "catalog": {
      "ky": "Меню",
      "ru": "Меню",
      "en": "Menu"
    },
    "catalogText": {
      "ky": "Ашкана, баа жана рейтинг боюнча тандаңыз",
      "ru": "Выбирайте по кухне, цене и рейтингу",
      "en": "Filter by cuisine, price and rating"
    },
    "search": {
      "ky": "Тамак издөө: палоо, пицца, суши…",
      "ru": "Поиск: плов, пицца, суши…",
      "en": "Search: plov, pizza, sushi…"
    },
    "plans": {
      "ky": "Комбо жана жазылуу",
      "ru": "Комбо и подписка",
      "en": "Combos & subscription"
    },
    "plansText": {
      "ky": "Үнөмдүү топтомдор жана бекер жеткирүү",
      "ru": "Выгодные наборы и бесплатная доставка",
      "en": "Value sets and free delivery"
    },
    "booking": {
      "ky": "Үстөл брондоо",
      "ru": "Бронь стола",
      "en": "Table booking"
    },
    "bookingText": {
      "ky": "Ресторандагы үстөлдү алдын ала брондоңуз",
      "ru": "Забронируйте стол в ресторане заранее",
      "en": "Reserve a table in advance"
    },
    "bookBtn": {
      "ky": "Үстөл брондоо",
      "ru": "Забронировать стол",
      "en": "Book a table"
    },
    "buy": {
      "ky": "Себетке",
      "ru": "В корзину",
      "en": "Add to cart"
    },
    "about": {
      "ky": "FoodExpress — Бишкектеги 3 ашкана жана 60 курьер менен иштеген жеткирүү кызматы.",
      "ru": "FoodExpress — служба доставки с 3 кухнями и 60 курьерами в Бишкеке.",
      "en": "FoodExpress is a delivery service with 3 kitchens and 60 couriers in Bishkek."
    }
  },
  "categories": [
    {
      "id": "national",
      "name": {
        "ky": "Улуттук тамактар",
        "ru": "Национальная кухня",
        "en": "National cuisine"
      },
      "icon": "🍲",
      "wiki": "Beshbarmak",
      "tags": "plov,food"
    },
    {
      "id": "fastfood",
      "name": {
        "ky": "Фаст-фуд",
        "ru": "Фастфуд",
        "en": "Fast food"
      },
      "icon": "🍔",
      "wiki": "Hamburger",
      "tags": "burger,food"
    },
    {
      "id": "pizza",
      "name": {
        "ky": "Пицца",
        "ru": "Пицца",
        "en": "Pizza"
      },
      "icon": "🍕",
      "wiki": "Pizza Margherita",
      "tags": "pizza"
    },
    {
      "id": "asian",
      "name": {
        "ky": "Азия ашканасы",
        "ru": "Азиатская кухня",
        "en": "Asian food"
      },
      "icon": "🍣",
      "wiki": "Sushi",
      "tags": "sushi,food"
    },
    {
      "id": "dessert",
      "name": {
        "ky": "Десерттер",
        "ru": "Десерты",
        "en": "Desserts"
      },
      "icon": "🍰",
      "wiki": "Cheesecake",
      "tags": "dessert,cake"
    },
    {
      "id": "drinks",
      "name": {
        "ky": "Суусундуктар",
        "ru": "Напитки",
        "en": "Drinks"
      },
      "icon": "🥤",
      "wiki": "Lemonade",
      "tags": "drink,juice"
    }
  ],
  "plans": [
    {
      "id": "family",
      "icon": "👨‍👩‍👧",
      "price": 1890,
      "popular": true,
      "title": {
        "ky": "Үй-бүлөлүк комбо",
        "ru": "Семейное комбо",
        "en": "Family combo"
      },
      "desc": {
        "ky": "Палоо 1 кг + 4 самса + 2 л кымыз",
        "ru": "Плов 1 кг + 4 самсы + 2 л кумыса",
        "en": "Plov 1 kg + 4 samsa + 2 L kumis"
      }
    },
    {
      "id": "student",
      "icon": "🎒",
      "price": 450,
      "title": {
        "ky": "Студенттик ланч",
        "ru": "Студенческий ланч",
        "en": "Student lunch"
      },
      "desc": {
        "ky": "Лагман + самса + чай",
        "ru": "Лагман + самса + чай",
        "en": "Lagman + samsa + tea"
      }
    },
    {
      "id": "prime",
      "icon": "⭐",
      "price": 390,
      "title": {
        "ky": "Food Prime — 1 ай",
        "ru": "Food Prime — 1 месяц",
        "en": "Food Prime — 1 month"
      },
      "desc": {
        "ky": "Бардык заказга бекер жеткирүү",
        "ru": "Бесплатная доставка всех заказов",
        "en": "Free delivery on every order"
      }
    }
  ],
  "booking": {
    "slots": [
      "12:00",
      "13:30",
      "15:00",
      "18:00",
      "19:30",
      "21:00"
    ],
    "formats": [
      {
        "id": "hall",
        "label": {
          "ky": "Жалпы зал",
          "ru": "Общий зал",
          "en": "Main hall"
        }
      },
      {
        "id": "vip",
        "label": {
          "ky": "VIP бөлмө",
          "ru": "VIP-кабинка",
          "en": "VIP room"
        }
      },
      {
        "id": "terrace",
        "label": {
          "ky": "Терраса",
          "ru": "Терраса",
          "en": "Terrace"
        }
      }
    ],
    "itemLabel": {
      "ky": "Тамак (алдын ала заказ)",
      "ru": "Блюдо (предзаказ)",
      "en": "Dish (pre-order)"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "⚡",
      "title": {
        "ky": "40 мүнөттө",
        "ru": "За 40 минут",
        "en": "In 40 minutes"
      },
      "text": {
        "ky": "Кечиксе — кийинки заказ бекер.",
        "ru": "Опоздали — следующий заказ бесплатно.",
        "en": "Late? Next order is free."
      }
    },
    {
      "icon": "🧑‍🍳",
      "title": {
        "ky": "Өз ашканабыз",
        "ru": "Своя кухня",
        "en": "Own kitchen"
      },
      "text": {
        "ky": "Ар күнү жаңы азыктар.",
        "ru": "Свежие продукты каждый день.",
        "en": "Fresh ingredients daily."
      }
    },
    {
      "icon": "🆓",
      "title": {
        "ky": "Бекер жеткирүү",
        "ru": "Бесплатная доставка",
        "en": "Free delivery"
      },
      "text": {
        "ky": "1000 сомдон жогору.",
        "ru": "От 1000 сом.",
        "en": "Over 1000 KGS."
      }
    },
    {
      "icon": "💳",
      "title": {
        "ky": "Онлайн төлөм",
        "ru": "Онлайн-оплата",
        "en": "Online payment"
      },
      "text": {
        "ky": "Карта, Элсом, MBank же накталай.",
        "ru": "Карта, Элсом, MBank или наличные.",
        "en": "Card, Elsom, MBank or cash."
      }
    }
  ],
  "stats": [
    {
      "value": "28",
      "label": {
        "ky": "тамак",
        "ru": "блюд",
        "en": "dishes"
      }
    },
    {
      "value": "40 мүн",
      "label": {
        "ky": "жеткирүү",
        "ru": "доставка",
        "en": "delivery"
      }
    },
    {
      "value": "150 000+",
      "label": {
        "ky": "заказ",
        "ru": "заказов",
        "en": "orders"
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
    "weight": {
      "ky": "Салмагы",
      "ru": "Вес",
      "en": "Weight"
    },
    "kcal": {
      "ky": "Калория",
      "ru": "Калории",
      "en": "Calories"
    },
    "time": {
      "ky": "Даярдоо",
      "ru": "Готовка",
      "en": "Cook time"
    },
    "spicy": {
      "ky": "Ачуулугу",
      "ru": "Острота",
      "en": "Spiciness"
    }
  },
  "faq": [
    {
      "keys": [
        "жеткир",
        "доставк",
        "delivery"
      ],
      "answer": {
        "ky": "Бишкек ичинде 40 мүнөт, 1000 сомдон ашса бекер, андан аз болсо 150 сом.",
        "ru": "По Бишкеку 40 минут, от 1000 сом бесплатно, иначе 150 сом.",
        "en": "Within Bishkek in 40 min; free over 1000 KGS, otherwise 150 KGS."
      },
      "link": "/catalog"
    },
    {
      "keys": [
        "брон",
        "үстөл",
        "стол",
        "table"
      ],
      "answer": {
        "ky": "Үстөлдү \"Үстөл брондоо\" барагынан брондоңуз.",
        "ru": "Стол можно забронировать на странице «Бронь стола».",
        "en": "Reserve a table on the Table booking page."
      },
      "link": "/booking"
    },
    {
      "keys": [
        "халал",
        "halal"
      ],
      "answer": {
        "ky": "Бардык эт азыктарыбыз халал.",
        "ru": "Всё мясо у нас халяль.",
        "en": "All our meat is halal."
      },
      "link": "/contact"
    }
  ],
  "priceNote": {
    "ky": "Баалар Бишкектеги кафелердин орточо баасына жакын.",
    "ru": "Цены близки к средним по кафе Бишкека.",
    "en": "Prices close to Bishkek café averages."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026). Фото: Wikipedia.",
    "en": "Approximate prices (28.10.2026). Photos: Wikipedia."
  },
  "sources": []
};
