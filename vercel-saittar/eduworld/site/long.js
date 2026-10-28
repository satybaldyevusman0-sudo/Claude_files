// Толук сүрөттөмөлөр (kg / ru / en)
const tail = {
  ky: '\n\nКурс кантип өтөт: топтор 8–12 адамдан, сабактар жумасына 2–3 жолу (кечки же дем алыш күнү). Ар бир сабактан кийин үй тапшырма жана мугалимдин текшерүүсү, жабык Telegram топ жана сабактардын видео жазуусу бар. Биринчи сабак — акысыз сынак сабак. Курстун аягында сертификат берилет; акыны бөлүп төлөсө болот.',
  ru: '\n\nКак проходит курс: группы по 8–12 человек, 2–3 занятия в неделю (вечером или в выходные). После каждого урока — домашнее задание с проверкой, закрытый Telegram-чат и видеозаписи занятий. Первое занятие — бесплатное пробное. По окончании выдаётся сертификат; оплату можно разбить на части.',
  en: '\n\nHow it works: groups of 8–12, 2–3 classes a week (evenings or weekends). Every lesson comes with homework checked by the teacher, a private Telegram chat and recordings. The first class is a free trial. You receive a certificate at the end, and fees can be paid in instalments.'
};
const C = (ky, ru, en) => ({ ky: ky + tail.ky, ru: ru + tail.ru, en: en + tail.en });
export default {
  'frontend-html-css-javascript': C(
    'Нөлдөн баштап сайт жасоону үйрөнөсүз: HTML менен структура, CSS (Flexbox, Grid, анимациялар) менен дизайн, JavaScript менен интерактивдүүлүк, API менен иштөө жана Git. 5 портфолио долбоор жасап, GitHub жана Vercel’ге жүктөйсүз.',
    'С нуля научитесь делать сайты: структура на HTML, дизайн на CSS (Flexbox, Grid, анимации), интерактив на JavaScript, работа с API и Git. Сделаете 5 проектов в портфолио и опубликуете их на GitHub и Vercel.',
    'Learn to build websites from scratch: HTML structure, CSS (Flexbox, Grid, animations), JavaScript interactivity, APIs and Git. You’ll build 5 portfolio projects and publish them on GitHub and Vercel.'
  ),
  'reactjs-pro': C(
    'React’ти тереңдетип үйрөнөсүз: компоненттер, хуктар, Context, React Router, API менен иштөө, JWT авторизация, корзина жана админ панель. Экзамендик чоң долбоорду Vercel’ге жүктөп, жумушка интервьюга даярданасыз.',
    'Углублённый React: компоненты, хуки, Context, React Router, работа с API, JWT-авторизация, корзина и админ-панель. Большой экзаменационный проект на Vercel и подготовка к собеседованиям.',
    'In-depth React: components, hooks, Context, React Router, APIs, JWT auth, a cart and an admin panel. You deploy a large exam project to Vercel and prepare for job interviews.'
  ),
  'python-data-science': C(
    'Python негиздеринен баштап pandas, NumPy, Matplotlib жана Seaborn менен маалымат талдоону, андан кийин scikit-learn менен машиналык окутууга киришүүнү үйрөнөсүз. Реалдуу маалыматтар менен 4 долбоор.',
    'От основ Python до анализа данных с pandas, NumPy, Matplotlib и Seaborn, затем введение в машинное обучение на scikit-learn. 4 проекта на реальных данных.',
    'From Python basics to data analysis with pandas, NumPy, Matplotlib and Seaborn, then an introduction to machine learning with scikit-learn. Four projects on real data.'
  ),
  'java-backend': C(
    'Java, ООП, Spring Boot, PostgreSQL, REST API, Spring Security жана Docker. Курстун ичинде банк тиркемесинин backend бөлүгүн толугу менен жасайсыз. Банктарда жана IT компанияларда эң көп суралган тил.',
    'Java, ООП, Spring Boot, PostgreSQL, REST API, Spring Security и Docker. В процессе курса создадите полноценный backend банковского приложения. Один из самых востребованных языков в банках и IT-компаниях.',
    'Java, OOP, Spring Boot, PostgreSQL, REST APIs, Spring Security and Docker. You build the full backend of a banking app — Java is among the most in-demand languages at banks and IT firms.'
  ),
  'flutter': C(
    'Dart жана Flutter менен бир код аркылуу iOS жана Android тиркемелерин жасайсыз: дизайн, навигация, Firebase, API жана төлөм. Курстун аягында тиркемеңизди Google Play’ге жарыялайсыз.',
    'На Dart и Flutter одним кодом создадите приложения для iOS и Android: дизайн, навигация, Firebase, API и оплата. В конце опубликуете приложение в Google Play.',
    'Build iOS and Android apps from one codebase with Dart and Flutter: UI, navigation, Firebase, APIs and payments. You’ll publish your app on Google Play at the end.'
  ),
  'cybersecurity-basics': C(
    'Тармактар кантип иштейт, Linux, Wireshark, Nmap, веб-кемчиликтер (OWASP Top 10) жана коргонуу ыкмалары. Бардык практика мыйзамдуу лабораторияда (CTF) өтөт. Этикалык хакерликтин негиздери.',
    'Как работают сети, Linux, Wireshark, Nmap, веб-уязвимости (OWASP Top 10) и методы защиты. Вся практика — в легальной лаборатории (CTF). Основы этичного хакинга.',
    'How networks work, Linux, Wireshark, Nmap, web vulnerabilities (OWASP Top 10) and defence techniques, with all practice in a legal CTF lab — the basics of ethical hacking.'
  ),
  'ielts-70': C(
    'IELTS’тин 4 бөлүгү (Listening, Reading, Writing, Speaking) боюнча стратегиялар. Ар жумада толук сынак тест, эссени мугалим баллы менен текшерет, Speaking’ди чет элдик мугалим менен машыгасыз.',
    'Стратегии по 4 частям IELTS (Listening, Reading, Writing, Speaking). Каждую неделю — полный пробный тест, эссе проверяются с баллами, Speaking — с иностранным преподавателем.',
    'Strategies for all four IELTS sections. A full mock test every week, essays graded with band scores, and Speaking practice with a native teacher.'
  ),
  'english-from-zero': C(
    'Англис тилин алфавиттен баштап A2 деңгээлине чейин үйрөнөсүз: күнүмдүк сүйлөшүү, грамматика, 1500 сөз жана угуу. Сабактар коммуникативдик ыкма менен — көп сүйлөйсүз.',
    'Английский с алфавита до уровня A2: разговорная речь, грамматика, 1500 слов и аудирование. Коммуникативная методика — много разговорной практики.',
    'English from the alphabet up to A2: everyday conversation, grammar, 1,500 words and listening, taught communicatively so you speak a lot.'
  ),
  'korean-topik': C(
    'Хангылдан баштап күнүмдүк сүйлөшүүгө жана TOPIK I–II сынагына даярдык. Кореяда окуу (GKS) жана иштөө (EPS-TOPIK) үчүн негиз. Корей маданияты жана K-drama аркылуу сабактар.',
    'От хангыля до разговорной речи и подготовки к TOPIK I–II. Основа для учёбы (GKS) и работы (EPS-TOPIK) в Корее. Уроки с элементами культуры и K-drama.',
    'From Hangul to everyday conversation and TOPIK I–II prep — the foundation for studying (GKS) or working (EPS-TOPIK) in Korea, with culture and K-drama in class.'
  ),
  'german-a1b1': C(
    'Немис тилин A1ден B1ге чейин үйрөнүп, Goethe-Zertifikat сынагына даярданасыз. Германияда окуу, Ausbildung жана жумуш үчүн милдеттүү деңгээл. Ар бир деңгээлдин аягында сынак тест.',
    'Немецкий с A1 до B1 и подготовка к Goethe-Zertifikat. Обязательный уровень для учёбы, Ausbildung и работы в Германии. Пробный экзамен в конце каждого уровня.',
    'German from A1 to B1 with Goethe-Zertifikat preparation — the level needed for study, Ausbildung and work in Germany, with a mock exam after each level.'
  ),
  'chinese-hsk': C(
    'Кытай тилинин тондору, пиньинь, 600 иероглиф жана HSK 1–3 сынагына даярдык. Кытайда стипендия менен окуу жана бизнес үчүн пайдалуу.',
    'Тоны, пиньинь, 600 иероглифов и подготовка к HSK 1–3. Полезно для учёбы в Китае по стипендии и для бизнеса.',
    'Tones, pinyin, 600 characters and HSK 1–3 preparation — useful for scholarship study in China and for business.'
  ),
  'turkish': C(
    'Түрк тили кыргыз тилине жакын, ошондуктан 3 айда эркин сүйлөй баштайсыз. Грамматика, күнүмдүк сөздөр, сериалдар аркылуу угуу жана Түркияда окуу үчүн TÖMER сынагына даярдык.',
    'Турецкий близок к кыргызскому, поэтому уже через 3 месяца вы заговорите свободно. Грамматика, лексика, аудирование по сериалам и подготовка к TÖMER для учёбы в Турции.',
    'Turkish is close to Kyrgyz, so you’ll speak freely within 3 months: grammar, everyday vocabulary, listening through TV series and TÖMER prep for study in Turkey.'
  ),
  'uiux-figma': C(
    'Колдонуучуну изилдөө, wireframe, прототип, дизайн-система жана адаптивдүү интерфейстер Figma’да. 3 кейс менен портфолио жасап, Behance’ке жарыялайсыз.',
    'Исследование пользователей, wireframe, прототипы, дизайн-система и адаптивные интерфейсы в Figma. Портфолио из 3 кейсов с публикацией на Behance.',
    'User research, wireframes, prototypes, design systems and responsive UI in Figma. You build a 3-case portfolio and publish it on Behance.'
  ),
  'adobe-photoshop-illustrator': C(
    'Photoshop’то сүрөт оңдоо жана коллаж, Illustrator’до логотип, иконка жана вектордук графика. SMM пост, баннер жана визитка жасоону практикада үйрөнөсүз.',
    'Ретушь и коллажи в Photoshop, логотипы, иконки и векторная графика в Illustrator. На практике — посты для SMM, баннеры и визитки.',
    'Photo retouching and collages in Photoshop; logos, icons and vector art in Illustrator — with hands-on SMM posts, banners and business cards.'
  ),
  '3d-modelling-blender': C(
    'Blender’де моделдөө, текстуралар, жарык, анимация жана рендер. Интерьер, продукт жана оюн каармандарынын 3D моделдерин жасайсыз.',
    'Моделирование, текстуры, свет, анимация и рендер в Blender. Создадите 3D-модели интерьеров, продуктов и игровых персонажей.',
    'Modelling, texturing, lighting, animation and rendering in Blender — interiors, products and game characters.'
  ),
  'video-editing': C(
    'Premiere Pro жана CapCut’та монтаж, түс түзөтүү, үн, субтитр жана эффекттер. Reels, YouTube видео жана жарнама роликтерин жасап, кардар табууну үйрөнөсүз.',
    'Монтаж, цветокоррекция, звук, субтитры и эффекты в Premiere Pro и CapCut. Reels, YouTube и рекламные ролики, плюс как находить клиентов.',
    'Editing, colour grading, sound, subtitles and effects in Premiere Pro and CapCut — Reels, YouTube and ad videos, plus how to find clients.'
  ),
  'smm-target': C(
    'Instagram жана TikTok үчүн контент-план, Reels сценарийи, таргет жарнама (Meta Ads) жана аналитика. Курс учурунда реалдуу бизнестин аккаунтун алып барасыз.',
    'Контент-план для Instagram и TikTok, сценарии Reels, таргетированная реклама (Meta Ads) и аналитика. В ходе курса ведёте аккаунт реального бизнеса.',
    'Content planning for Instagram and TikTok, Reels scripts, Meta Ads targeting and analytics — you’ll run a real business account during the course.'
  ),
  'accounting-1c': C(
    'Кыргызстандын салык мыйзамдары, баштапкы документтер, айлык акы эсептөө, отчеттор жана 1С: Бухгалтерия программасында практика. Бүтүрүүчүлөргө жумуш табууга жардам беребиз.',
    'Налоговое законодательство КР, первичные документы, расчёт зарплаты, отчётность и практика в 1С: Бухгалтерия. Помогаем выпускникам с трудоустройством.',
    'Kyrgyz tax law, source documents, payroll, reporting and hands-on practice in 1C: Accounting, with job placement help for graduates.'
  ),
  'entrepreneurship-startup': C(
    'Идеяны текшерүү, кардар менен интервью, MVP жасоо, бизнес-модель, финансы жана инвесторго питч. Курс Demo Day менен бүтөт — мыкты долбоорлор инвесторлорго көрсөтүлөт.',
    'Проверка идеи, интервью с клиентами, MVP, бизнес-модель, финансы и питч инвестору. Курс завершается Demo Day — лучшие проекты увидят инвесторы.',
    'Idea validation, customer interviews, MVP, business model, finance and investor pitching, ending with a Demo Day where the best projects meet investors.'
  ),
  'project-management-pmp': C(
    'Agile, Scrum, Kanban, Jira жана PMBOK стандарты. PMP сертификатына керектүү 35 сааттык окуу далилин аласыз жана сынак суроолорун машыгасыз.',
    'Agile, Scrum, Kanban, Jira и стандарт PMBOK. Получите 35 часов обучения, необходимых для сертификации PMP, и потренируетесь на экзаменационных вопросах.',
    'Agile, Scrum, Kanban, Jira and the PMBOK standard. You earn the 35 contact hours required for PMP and practise exam questions.'
  ),
  'ort-prep-maths': C(
    'ЖРТнын математика жана логика бөлүмдөрү: ар бир тема боюнча түшүндүрмө, ар жумада сынак тест жана каталар менен иштөө. Мурунку бүтүрүүчүлөрүбүздүн орточо баллы 180+.',
    'Разделы ОРТ по математике и логике: объяснение каждой темы, еженедельные пробные тесты и работа над ошибками. Средний балл наших выпускников — 180+.',
    'ORT maths and logic sections: every topic explained, weekly mock tests and error review. Our past students average 180+.'
  ),
  'ort-kyrgyz-language': C(
    'ЖРТнын «Окуу жана түшүнүү» жана «Тилдик практика» бөлүмдөрү: текст талдоо, грамматика, сөз байлыгы жана убакытты туура пайдалануу.',
    'Разделы ОРТ «Чтение и понимание» и «Практическая грамматика»: анализ текста, грамматика, словарный запас и тайм-менеджмент.',
    'ORT “Reading comprehension” and “Language practice”: text analysis, grammar, vocabulary and time management.'
  ),
  'robotics-for-kids': C(
    'LEGO Education жана Arduino менен 8–14 жаштагы балдар роботторду куруп, программалашат. Логика, математика жана командада иштөө көндүмдөрү өнүгөт, мыкты окуучулар олимпиадага катышат.',
    'Дети 8–14 лет собирают и программируют роботов на LEGO Education и Arduino. Развиваются логика, математика и командная работа, лучшие участвуют в олимпиадах.',
    'Kids aged 8–14 build and program robots with LEGO Education and Arduino, developing logic, maths and teamwork; top students enter olympiads.'
  ),
  'chess-school': C(
    'Шахматтын эрежелеринен баштап комбинацияларга чейин. Балдардын логикасы, көңүл бурушу жана чыдамдуулугу өнүгөт. Ай сайын ички турнир, мыктылар шаардык мелдештерге барышат.',
    'От правил шахмат до комбинаций. Развивает логику, внимание и усидчивость. Ежемесячный внутренний турнир, лучшие едут на городские соревнования.',
    'From the rules of chess to combinations — building logic, focus and patience, with a monthly in-house tournament and city competitions for the best.'
  ),
  'free-study-in-italy-dsu-grant': C(
    'Италиянын мамлекеттик университеттеринде дээрлик бекер окуу жана DSU грантын (жылына €5000–7000 жана жатакана) алуу. Университет тандоо, Universitaly каттоосу, документ котормосу, ISEE жана студенттик виза — баарына коштоп жүрөбүз.',
    'Почти бесплатная учёба в государственных вузах Италии и получение гранта DSU (€5000–7000 в год плюс общежитие). Выбор вуза, Universitaly, перевод документов, ISEE и студенческая виза — сопровождаем на всех этапах.',
    'Near-free study at Italian public universities and the DSU grant (€5,000–7,000 a year plus housing). We guide you through choosing a university, Universitaly, translations, ISEE and the student visa.'
  ),
  'study-in-germany': C(
    'Германиядагы акысыз мамлекеттик университеттерге тапшыруу: Studienkolleg, uni-assist, блокировкаланган эсеп (Sperrkonto) жана улуттук виза боюнча толук жардам.',
    'Поступление в бесплатные государственные вузы Германии: Studienkolleg, uni-assist, блокированный счёт (Sperrkonto) и национальная виза — полное сопровождение.',
    'Admission to tuition-free German public universities with full support for Studienkolleg, uni-assist, the blocked account (Sperrkonto) and the national visa.'
  ),
  'study-in-korea-gks': C(
    'GKS — Корея өкмөтүнүн толук стипендиясы: окуу, жатакана, айлык стипендия жана авиабилет. Мотивациялык кат, сунуш каттар жана интервьюга даярдайбыз.',
    'GKS — полная стипендия правительства Кореи: обучение, общежитие, ежемесячная стипендия и авиабилет. Готовим мотивационное письмо, рекомендации и к интервью.',
    'GKS is the Korean government’s full scholarship covering tuition, housing, a monthly stipend and flights. We prepare your motivation letter, recommendations and interview.'
  )
};
