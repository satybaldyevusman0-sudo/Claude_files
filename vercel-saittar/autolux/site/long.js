// Толук сүрөттөмөлөр (kg / ru / en)
const L = (ky, ru, en) => ({ ky, ru, en });
const tail = {
  ky: '\n\nАвтосалондо тест-драйв акысыз. Насыя (10% алгачкы төлөм), лизинг жана эски унааны алмаштыруу (trade-in) мүмкүн. Ар бир унаа сатуудан мурун 120 пункт боюнча текшерилет, каттоо жана номер алууга жардам беребиз.',
  ru: '\n\nТест-драйв в салоне бесплатно. Возможны кредит (первый взнос 10%), лизинг и обмен старого авто (trade-in). Каждая машина проходит проверку по 120 пунктам перед продажей, помогаем с постановкой на учёт.',
  en: '\n\nFree test drives at the showroom. Financing (10% down), leasing and trade-in are available. Every car passes a 120-point inspection before sale, and we help with registration.'
};
const C = (ky, ru, en) => L(ky + tail.ky, ru + tail.ru, en + tail.en);
export default {
  'toyota-camry-25-xv70': C(
    'Toyota Camry XV70 — Кыргызстанда эң көп сатылган бизнес-седан. 2.5 литрлик 181 а.к. мотору жана 8 баскычтуу автомат жумшак, үнөмдүү жүрөт (100 км ге 7.5–8 л). Кенен арткы катар, тынч салон жана жогорку калыбына келүү баасы — кайра сатканда да баасын жоготпойт.',
    'Toyota Camry XV70 — самый продаваемый бизнес-седан в Кыргызстане. Мотор 2,5 л (181 л.с.) и 8-ступенчатый автомат дают плавную и экономичную езду (7,5–8 л/100 км). Просторный задний ряд, тихий салон и высокая остаточная стоимость.',
    'The Toyota Camry XV70 is Kyrgyzstan’s best-selling business sedan. Its 2.5 L 181 hp engine and 8-speed automatic are smooth and economical (7.5–8 L/100 km). Roomy rear seats, a quiet cabin and strong resale value.'
  ),
  'hyundai-sonata-dn8': C(
    'Hyundai Sonata DN8 — агрессивдүү дизайн жана бай комплектация: 10.25" экран, сандык приборлор, желдетилген отургучтар жана Smart Sense коопсуздук системасы. 2.5 литрлик мотор ишенимдүү, запчасттары Бишкекте арзан жана оңой табылат.',
    'Hyundai Sonata DN8 — выразительный дизайн и богатая комплектация: экран 10,25", цифровая приборка, вентиляция сидений и система безопасности Smart Sense. Мотор 2,5 л надёжен, запчасти в Бишкеке доступны и недороги.',
    'The Hyundai Sonata DN8 pairs bold styling with rich equipment: a 10.25" screen, digital cluster, ventilated seats and Smart Sense safety. The 2.5 L engine is reliable and parts are cheap and easy to find in Bishkek.'
  ),
  'kia-k5': C(
    'Kia K5 — спорттук силуэттеги заманбап седан. Адаптивдүү круиз-контроль, тилкеде кармоо, 360° камера жана индукциялык заряддоо бар. 2.0 литрлик мотор шаарда да, трассада да ишенимдүү.',
    'Kia K5 — современный седан со спортивным силуэтом. Адаптивный круиз, удержание в полосе, камера 360° и беспроводная зарядка. Мотор 2,0 л уверен и в городе, и на трассе.',
    'The Kia K5 is a modern sedan with a sporty silhouette, adaptive cruise, lane keeping, a 360° camera and wireless charging. The 2.0 L engine is confident in town and on the highway.'
  ),
  'hyundai-elantra-cn7': C(
    'Hyundai Elantra CN7 — шаар үчүн эң үнөмдүү жана практикалуу седан: 100 км ге 6.5 л гана. 1.6 литрлик мотор, CVT вариатор, CarPlay/Android Auto жана 3 жылдык заводдук кепилдик.',
    'Hyundai Elantra CN7 — самый экономичный и практичный городской седан: всего 6,5 л/100 км. Мотор 1,6 л, вариатор, CarPlay/Android Auto и 3 года заводской гарантии.',
    'The Hyundai Elantra CN7 is a frugal, practical city sedan at just 6.5 L/100 km, with a 1.6 L engine, CVT, CarPlay/Android Auto and a 3-year factory warranty.'
  ),
  'chevrolet-malibu': C(
    'Chevrolet Malibu — жумшак асмасы жана кенен салону бар америкалык седан. 1.5 турбо мотор 163 а.к. берет, ал эми чыгым шаарда 8 л тегерегинде. 28 000 км жүргөн, сервистик тарыхы толук.',
    'Chevrolet Malibu — американский седан с мягкой подвеской и просторным салоном. Турбомотор 1,5 л выдаёт 163 л.с., расход в городе около 8 л. Пробег 28 000 км, полная сервисная история.',
    'The Chevrolet Malibu is an American sedan with a soft ride and roomy cabin. The 1.5 turbo makes 163 hp and uses about 8 L/100 km in town. 28,000 km with full service history.'
  ),
  'changan-eado-plus': C(
    'Changan Eado Plus — арзан баада бай жабдылган седан: 1.4 турбо мотор, 7 баскычтуу робот, артка көрүү камерасы, климат-контроль жана CarPlay. Расмий дилерден 5 жыл кепилдик.',
    'Changan Eado Plus — хорошо оснащённый седан по доступной цене: турбомотор 1,4 л, 7-ступенчатый робот, камера заднего вида, климат-контроль и CarPlay. Гарантия официального дилера 5 лет.',
    'The Changan Eado Plus is a well-equipped sedan at a low price: 1.4 turbo, 7-speed DCT, reversing camera, climate control and CarPlay, with a 5-year dealer warranty.'
  ),
  'toyota-rav4-xa50': C(
    'Toyota RAV4 XA50 — тоо жана шаар үчүн универсалдуу кроссовер. Толук привод, 21 см клиренс жана 2.5 литрлик 203 а.к. мотор кыштын карлуу жолунда да ишенимдүү. Багажы 580 литр.',
    'Toyota RAV4 XA50 — универсальный кроссовер для гор и города. Полный привод, клиренс 21 см и мотор 2,5 л (203 л.с.) уверенны даже на зимней дороге. Багажник 580 л.',
    'The Toyota RAV4 XA50 is an all-rounder for city and mountains: AWD, 21 cm ground clearance and a 2.5 L 203 hp engine that handles snowy roads. 580 L boot.'
  ),
  'hyundai-tucson-nx4': C(
    'Hyundai Tucson NX4 — футуристтик дизайн, панорамалык люк жана 4WD. Ичинде 10.25" эки экран, жылытылган руль жана отургучтар. Үй-бүлөлүк саякатка ыңгайлуу.',
    'Hyundai Tucson NX4 — футуристичный дизайн, панорамная крыша и полный привод. Внутри два экрана по 10,25", подогрев руля и сидений. Удобен для семейных поездок.',
    'The Hyundai Tucson NX4 offers futuristic styling, a panoramic roof and AWD, with twin 10.25" screens and heated wheel and seats. Great for family trips.'
  ),
  'kia-sportage-nq5': C(
    'Kia Sportage NQ5 — Kia’нын эң популярдуу модели. Ийри панорамалык экран, кенен салон, 2.0 мотор жана толук привод. Кышкы пакет: жылытылган айнек, руль жана арткы отургучтар.',
    'Kia Sportage NQ5 — самая популярная модель Kia. Изогнутый панорамный экран, просторный салон, мотор 2,0 и полный привод. Зимний пакет: подогрев стекла, руля и задних сидений.',
    'The Kia Sportage NQ5 is Kia’s most popular model, with a curved panoramic display, roomy cabin, 2.0 engine and AWD. Winter pack: heated windscreen, wheel and rear seats.'
  ),
  'changan-cs55-plus': C(
    'Changan CS55 Plus — Кыргызстанда тез популярдуулукка ээ болгон кроссовер. 1.5 турбо 188 а.к. жана 7 баскычтуу робот динамикалуу жүрөт, ал эми 10" экран, 360° камера жана электр багаж стандартта.',
    'Changan CS55 Plus — быстро ставший популярным в Кыргызстане кроссовер. Турбомотор 1,5 л (188 л.с.) и 7-ступенчатый робот дают хорошую динамику, а экран 10", камера 360° и электробагажник — в базе.',
    'The Changan CS55 Plus has become a hit in Kyrgyzstan. Its 188 hp 1.5 turbo and 7-speed DCT are lively, and a 10" screen, 360° camera and power tailgate are standard.'
  ),
  'changan-cs75-plus': C(
    'Changan CS75 Plus — чоң үй-бүлөлүк кроссовер: 2.0 турбо 233 а.к., 8 баскычтуу автомат, 360° камера, электр багаж жана эки 12.3" экран. Салону кенен, арткы катарда үч чоң адам ыңгайлуу отурат.',
    'Changan CS75 Plus — большой семейный кроссовер: турбо 2,0 л (233 л.с.), 8-ступенчатый автомат, камера 360°, электробагажник и два экрана 12,3". Сзади свободно сидят трое взрослых.',
    'The Changan CS75 Plus is a large family SUV with a 233 hp 2.0 turbo, 8-speed automatic, 360° camera, power tailgate and twin 12.3" screens. Three adults fit comfortably in the back.'
  ),
  'haval-jolion': C(
    'Haval Jolion — компакттуу, бирок жабдылган кроссовер: 1.5 турбо, робот куту, 10.25" экран, адаптивдүү круиз. Заводдук кепилдик 5 жыл же 150 000 км, сервис борбору Бишкекте.',
    'Haval Jolion — компактный, но хорошо оснащённый кроссовер: турбо 1,5, робот, экран 10,25", адаптивный круиз. Гарантия 5 лет или 150 000 км, сервис в Бишкеке.',
    'The Haval Jolion is a compact but well-equipped SUV: 1.5 turbo, DCT, 10.25" screen and adaptive cruise. 5-year/150,000 km warranty with service in Bishkek.'
  ),
  'chery-tiggo-7-pro': C(
    'Chery Tiggo 7 Pro — жеткиликтүү баадагы ыңгайлуу кроссовер: эки экран, панорамалык люк, жылытылган отургучтар жана 6 аба жаздык. 1.5 турбо мотор шаар жана трасса үчүн жетиштүү.',
    'Chery Tiggo 7 Pro — комфортный кроссовер по доступной цене: два экрана, панорамная крыша, подогрев сидений и 6 подушек безопасности. Турбо 1,5 достаточно для города и трассы.',
    'The Chery Tiggo 7 Pro is an affordable, comfortable SUV with twin screens, a panoramic roof, heated seats and 6 airbags. The 1.5 turbo is enough for town and highway.'
  ),
  'toyota-land-cruiser-300': C(
    'Toyota Land Cruiser 300 — тоолуу жолдордун падышасы. Рамалык кузов, 3.5 V6 эки турбо (415 а.к.), 10 баскычтуу автомат жана блокировкалар менен Суусамыр, Тоо-Ашуу жана Нарын жолдорун оңой басат. Люкс салон жана 7 орун.',
    'Toyota Land Cruiser 300 — король горных дорог. Рамный кузов, V6 3,5 битурбо (415 л.с.), 10-ступенчатый автомат и блокировки легко справляются с Суусамыром, Тоо-Ашуу и Нарыном. Люкс-салон, 7 мест.',
    'The Toyota Land Cruiser 300 is king of mountain roads: body-on-frame, a 415 hp 3.5 twin-turbo V6, 10-speed automatic and locking diffs for Suusamyr, Too-Ashuu and Naryn. Luxury cabin with 7 seats.'
  ),
  'toyota-land-cruiser-prado-250': C(
    'Жаңы Prado 250 классикалык чарчы дизайнга кайтты. 2.4 турбо гибрид 282 а.к., туруктуу толук привод жана Multi-Terrain режимдери. Салону заманбап: 12.3" экран, сандык приборлор.',
    'Новый Prado 250 вернулся к классическому угловатому дизайну. Турбогибрид 2,4 л (282 л.с.), постоянный полный привод и режимы Multi-Terrain. Современный салон: экран 12,3" и цифровая приборка.',
    'The new Prado 250 returns to classic boxy styling with a 282 hp 2.4 turbo hybrid, permanent 4WD and Multi-Terrain modes, plus a modern 12.3" screen and digital cluster.'
  ),
  'lexus-lx-600': C(
    'Lexus LX 600 — Land Cruiser’дин премиум версиясы. Mark Levinson аудиосистемасы, массаждуу отургучтар, адаптивдүү пневмоасма жана 3.5 V6 эки турбо. Ишенимдүүлүк жана люкс бир унаада.',
    'Lexus LX 600 — премиальная версия Land Cruiser. Аудиосистема Mark Levinson, массажные кресла, адаптивная пневмоподвеска и V6 3,5 битурбо. Надёжность и роскошь в одной машине.',
    'The Lexus LX 600 is the luxury Land Cruiser: Mark Levinson audio, massage seats, adaptive air suspension and a 3.5 twin-turbo V6 — reliability and luxury in one.'
  ),
  'mitsubishi-pajero-sport': C(
    'Mitsubishi Pajero Sport — чыдамкай рамалык SUV, 2.4 дизель мотору үнөмдүү (100 км ге 8 л). Super Select 4WD-II жана арткы блокировка тоо жолдорунда, жайлоого барууда чоң жардам.',
    'Mitsubishi Pajero Sport — выносливый рамный SUV с экономичным дизелем 2,4 (8 л/100 км). Super Select 4WD-II и блокировка заднего моста выручают в горах и на джайлоо.',
    'The Mitsubishi Pajero Sport is a tough body-on-frame SUV with a frugal 2.4 diesel (8 L/100 km). Super Select 4WD-II and a rear locker help in the mountains and on summer pastures.'
  ),
  'tank-300': C(
    'Tank 300 — кытай брендинин эң белгилүү офф-роудери. Рамалык кузов, алдыңкы жана арткы блокировкалар, 9 офф-роуд режими жана 2.0 турбо 220 а.к. Ретро дизайн жана заманбап салон.',
    'Tank 300 — самый известный внедорожник китайского бренда. Рама, блокировки обоих мостов, 9 режимов бездорожья и турбо 2,0 (220 л.с.). Ретро-дизайн и современный салон.',
    'The Tank 300 is a body-on-frame off-roader with front and rear lockers, 9 terrain modes and a 220 hp 2.0 turbo, combining retro looks with a modern cabin.'
  ),
  'byd-song-plus-ev': C(
    'BYD Song Plus EV — 520 км жүрүшү бар электр кроссовер. Бир км жол бензинге караганда 5 эсе арзан, салык жана бажы жеңилдиктери бар. Blade батареясы коопсуз жана узак мөөнөттүү.',
    'BYD Song Plus EV — электрокроссовер с запасом хода 520 км. Километр в 5 раз дешевле, чем на бензине, есть таможенные льготы. Батарея Blade безопасна и долговечна.',
    'The BYD Song Plus EV is an electric SUV with 520 km of range. Each kilometre costs about a fifth of petrol, with customs incentives, and the Blade battery is safe and long-lasting.'
  ),
  'byd-han-ev': C(
    'BYD Han EV — премиум электр седан: 517 а.к., 0–100 км/с 3.9 секунд, толук привод жана 600 км га чейин жүрүш. Nappa булгаары, Dynaudio үн системасы жана 15.6" бурулган экран.',
    'BYD Han EV — премиальный электроседан: 517 л.с., 0–100 км/ч за 3,9 с, полный привод и до 600 км хода. Кожа Nappa, акустика Dynaudio и поворотный экран 15,6".',
    'The BYD Han EV is a premium electric sedan: 517 hp, 0–100 km/h in 3.9 s, AWD and up to 600 km of range, with Nappa leather, Dynaudio sound and a rotating 15.6" screen.'
  ),
  'zeekr-001': C(
    'Zeekr 001 — шутинг-брейк стилиндеги электромобиль, 650 км жүрүш, 544 а.к. жана пневмоасма. Багажы чоң, салону премиум. Geely тобунун технологиялары менен курулган.',
    'Zeekr 001 — электромобиль в стиле шутинг-брейк: 650 км хода, 544 л.с. и пневмоподвеска. Большой багажник и премиальный салон, технологии группы Geely.',
    'The Zeekr 001 is a shooting-brake EV with 650 km range, 544 hp and air suspension, a big boot and premium cabin, built on Geely group technology.'
  ),
  'tesla-model-y': C(
    'Tesla Model Y — дүйнөдөгү эң көп сатылган электромобиль. Толук привод, 351 а.к., 500 км жүрүш жана Autopilot. Абадан программалык жаңыртуулар келет. 12 000 км жүргөн, батареясы 98%.',
    'Tesla Model Y — самый продаваемый электромобиль в мире. Полный привод, 351 л.с., 500 км хода и Autopilot. Обновления «по воздуху». Пробег 12 000 км, батарея 98%.',
    'The Tesla Model Y is the world’s best-selling EV: AWD, 351 hp, 500 km range, Autopilot and over-the-air updates. 12,000 km with 98% battery health.'
  ),
  'mercedes-benz-e-class-w214': C(
    'Жаңы Mercedes-Benz E-Class W214: MBUX Superscreen (үч экран), жумшак гибрид 2.0 турбо 258 а.к. жана 9G-Tronic автомат. Тынч, ыңгайлуу жана коопсуз — бизнес класстын стандарты.',
    'Новый Mercedes-Benz E-Class W214: MBUX Superscreen (три экрана), мягкий гибрид 2,0 турбо (258 л.с.) и автомат 9G-Tronic. Тихий, комфортный и безопасный — эталон бизнес-класса.',
    'The new Mercedes-Benz E-Class W214 brings the MBUX Superscreen, a 258 hp 2.0 turbo mild hybrid and the 9G-Tronic gearbox — quiet, comfortable and safe, the business-class benchmark.'
  ),
  'bmw-x5-g05': C(
    'BMW X5 G05 — спорттук мүнөздөгү премиум SUV. 3.0 турбо (381 а.к.), xDrive толук приводу, адаптивдүү пневмоасма жана Harman Kardon үнү. Жолдо ишенимдүү, бурулуштарда так.',
    'BMW X5 G05 — премиальный SUV со спортивным характером. Турбо 3,0 (381 л.с.), полный привод xDrive, адаптивная пневмоподвеска и звук Harman Kardon.',
    'The BMW X5 G05 is a sporty premium SUV with a 381 hp 3.0 turbo, xDrive AWD, adaptive air suspension and Harman Kardon sound.'
  ),
  'lexus-rx-350': C(
    'Lexus RX 350 — тынч жана ыңгайлуу премиум кроссовер, Toyota’нын ишенимдүүлүгү менен. 2.4 турбо 279 а.к., толук привод, 14" экран жана Mark Levinson аудио.',
    'Lexus RX 350 — тихий и комфортный премиум-кроссовер с надёжностью Toyota. Турбо 2,4 (279 л.с.), полный привод, экран 14" и аудио Mark Levinson.',
    'The Lexus RX 350 is a quiet, comfortable premium SUV with Toyota reliability: 279 hp 2.4 turbo, AWD, 14" screen and Mark Levinson audio.'
  ),
  'porsche-cayenne': C(
    'Porsche Cayenne — спорткардын мүнөзү SUV кузовунда. 3.0 V6 турбо 353 а.к., 0–100 км/с 6 секундда, пневмоасма жана Sport Chrono пакети. Үй-бүлө үчүн да, айдоо ырахаты үчүн да.',
    'Porsche Cayenne — характер спорткара в кузове SUV. V6 3,0 турбо (353 л.с.), 0–100 км/ч за 6 с, пневмоподвеска и пакет Sport Chrono.',
    'The Porsche Cayenne puts sports-car character in an SUV: 353 hp 3.0 V6 turbo, 0–100 km/h in 6 s, air suspension and the Sport Chrono pack.'
  )
};
