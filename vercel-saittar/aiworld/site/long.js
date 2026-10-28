// Толук сүрөттөмөлөр (kg / ru / en)
const L = (ky, ru, en) => ({ ky, ru, en });
export default {
  'claude-pro': L(
    'Claude Pro — Anthropic компаниясынын AI жардамчысынын төлөнүүчү тарифи. Узун документтерди (жүздөгөн барак), PDF жана таблицаларды окуп, кыскача мазмун, анализ жана жооп берет. Код жазууда, текст түзөтүүдө жана кыргыз тилинде жазууда күчтүү.\n\nPro тарифи бекер версияга караганда 5 эсе көп суроо берүүгө, Projects (долбоорлор) жана Claude Code колдонууга мүмкүндүк берет. Биз аккаунт ачууга, төлөмгө жана биринчи жөндөөлөргө жардам беребиз.',
    'Claude Pro — платный тариф AI-ассистента от Anthropic. Читает длинные документы (сотни страниц), PDF и таблицы, делает выжимки, анализ и отвечает на вопросы. Силён в коде, редактуре и текстах на кыргызском.\n\nPro даёт примерно в 5 раз больше сообщений, чем бесплатная версия, а также Projects и Claude Code. Поможем с регистрацией, оплатой и первичной настройкой.',
    'Claude Pro is the paid plan for Anthropic’s AI assistant. It reads long documents (hundreds of pages), PDFs and spreadsheets, then summarises, analyses and answers questions. Strong at coding, editing and writing in Kyrgyz.\n\nPro gives about 5× more usage than the free tier plus Projects and Claude Code. We help with sign-up, payment and setup.'
  ),
  'chatgpt-plus': L(
    'ChatGPT Plus — OpenAI’дин эң популярдуу чатботунун кеңейтилген тарифи. Текст жазуу, котормо, сүрөт жаратуу жана үн менен сүйлөшүү режимдери бар.\n\nPlus тарифинде жаңы моделдер биринчи болуп жеткиликтүү, чектөөлөр азыраак, GPTs дүкөнүн колдонсоңуз болот. Кыргызстандан төлөө кыйын болсо — биз жардам беребиз.',
    'ChatGPT Plus — расширенный тариф самого популярного чат-бота OpenAI. Тексты, переводы, генерация изображений и голосовой режим.\n\nВ Plus новые модели доступны первыми, лимиты выше, есть магазин GPTs. Если оплатить из Кыргызстана сложно — поможем.',
    'ChatGPT Plus is the upgraded plan for OpenAI’s popular chatbot: writing, translation, image generation and voice mode.\n\nPlus users get new models first, higher limits and the GPT store. If paying from Kyrgyzstan is tricky, we can help.'
  ),
  'google-ai-pro-gemini': L(
    'Google AI Pro — Gemini’дин эң күчтүү моделдерине жана Google Drive’да 2 ТБ орунга жетүү. Gemini Gmail, Docs жана Sheets ичинде иштейт: катты кыскартып, таблицаны талдап, презентация түзөт.\n\nДоклад, курстук жумуш жана офис иштери үчүн ыңгайлуу. Үй-бүлө мүчөлөрү менен 2 ТБ орунду бөлүшсө болот.',
    'Google AI Pro — доступ к самым мощным моделям Gemini и 2 ТБ в Google Drive. Gemini работает внутри Gmail, Docs и Sheets: сокращает письма, анализирует таблицы, создаёт презентации.\n\nУдобно для докладов, курсовых и офисной работы. 2 ТБ можно разделить с семьёй.',
    'Google AI Pro unlocks Gemini’s most capable models plus 2 TB of Google Drive. Gemini works inside Gmail, Docs and Sheets — summarising emails, analysing sheets and drafting slides.\n\nHandy for reports, coursework and office work; share the 2 TB with family.'
  ),
  'perplexity-pro': L(
    'Perplexity Pro — интернеттен издеп, ар бир жоопко булак шилтемесин көрсөткөн AI издөө системасы. Изилдөө, макала жазуу жана жаңылыктарды текшерүү үчүн ыңгайлуу.\n\nPro версиясында бир нече AI моделди тандайсыз, PDF жүктөп суроо бересиз жана терең изилдөө (Deep Research) режимин колдоносуз.',
    'Perplexity Pro — AI-поисковик, который ищет в интернете и даёт ссылки на источники к каждому ответу. Удобен для исследований, статей и проверки новостей.\n\nВ Pro можно выбирать модели, загружать PDF и использовать режим Deep Research.',
    'Perplexity Pro is an AI search engine that cites a source for every answer — great for research, articles and fact-checking.\n\nPro lets you pick models, upload PDFs and run Deep Research.'
  ),
  'microsoft-copilot-pro': L(
    'Microsoft Copilot Pro Word, Excel, PowerPoint жана Outlook’ко AI кошот. Word’до доклад жазып берет, Excel’де формула түзүп, графиктерди талдайт, PowerPoint’то бир сүйлөмдөн презентация жасайт.\n\nOffice менен көп иштеген студенттерге, бухгалтерлерге жана менеджерлерге убакытты үнөмдөйт.',
    'Microsoft Copilot Pro добавляет AI в Word, Excel, PowerPoint и Outlook: пишет доклады, строит формулы и анализирует графики, делает презентацию из одной фразы.\n\nЭкономит время студентам, бухгалтерам и менеджерам.',
    'Microsoft Copilot Pro brings AI to Word, Excel, PowerPoint and Outlook — drafting documents, writing formulas, analysing charts and turning a sentence into a slide deck.\n\nA big time-saver for students, accountants and managers.'
  ),
  'midjourney-standard': L(
    'Midjourney — тексттик сүрөттөмөдөн көркөм, фотореалисттик сүрөттөрдү жараткан эң белгилүү AI. Дизайнерлер, SMM адистери жана сүрөтчүлөр логотип идеясы, постер жана концепт-арт үчүн колдонушат.\n\nStandard тарифинде айына 15 саат тез генерация жана чексиз жай режим бар. Промпт жазууну үйрөтүп беребиз.',
    'Midjourney — самый известный AI для создания художественных и фотореалистичных изображений по описанию. Им пользуются дизайнеры, SMM-специалисты и художники.\n\nТариф Standard: 15 часов быстрой генерации в месяц и безлимитный медленный режим. Научим писать промпты.',
    'Midjourney is the best-known AI for turning text into artistic or photorealistic images, used by designers, SMM pros and artists.\n\nThe Standard plan includes 15 fast GPU hours a month plus unlimited relaxed mode. We’ll teach you prompting.'
  ),
  'elevenlabs-creator': L(
    'ElevenLabs табигый угулган AI үнүн жаратат: видео озвучкасы, аудиокитеп жана жарнама үчүн. Өз үнүңүздү клондоп, текстти сиздин үнүңүз менен окутсаңыз болот.\n\nCreator тарифинде айына 100 000 белги жана коммерциялык лицензия бар. 30дан ашык тилде сүйлөйт.',
    'ElevenLabs создаёт естественные AI-голоса: озвучка видео, аудиокниги и реклама. Можно клонировать собственный голос.\n\nТариф Creator: 100 000 символов в месяц и коммерческая лицензия. Более 30 языков.',
    'ElevenLabs produces natural-sounding AI voices for video voice-overs, audiobooks and ads — you can even clone your own voice.\n\nThe Creator plan includes 100,000 characters a month and a commercial licence, in 30+ languages.'
  ),
  'runway-standard': L(
    'Runway — тексттен же сүрөттөн кыска видео жараткан AI студия. Клиптер, жарнама жана социалдык тармактар үчүн эффекттерди мүнөттө жасайт.\n\nStandard тарифи айына 625 кредит берет, водяной белгисиз экспорт. Видеомонтаждоочулар үчүн сонун курал.',
    'Runway — AI-студия, создающая короткие видео из текста или картинки. Клипы, реклама и эффекты для соцсетей за минуты.\n\nТариф Standard: 625 кредитов в месяц, экспорт без водяного знака.',
    'Runway is an AI studio that turns text or images into short videos — clips, ads and social effects in minutes.\n\nThe Standard plan gives 625 credits a month and watermark-free exports.'
  ),
  'adobe-firefly': L(
    'Adobe Firefly Photoshop’ко киргизилген: «Generative Fill» менен сүрөттөн керексиз нерсени өчүрүп, фонду кеңейтип же жаңы объект кошосуз — болгону сөз менен жазып.\n\nFirefly лицензиясы таза сүрөттөрдө үйрөтүлгөн, ошондуктан коммерциялык долбоорлордо коопсуз колдонулат.',
    'Adobe Firefly встроен в Photoshop: «Generative Fill» убирает лишнее, расширяет фон или добавляет объекты по текстовому описанию.\n\nОбучен на лицензионных изображениях, поэтому безопасен для коммерческих проектов.',
    'Adobe Firefly is built into Photoshop: Generative Fill removes objects, extends backgrounds or adds new elements from a text prompt.\n\nTrained on licensed images, so it’s safe for commercial work.'
  ),
  'stable-diffusion': L(
    'Stable Diffusion — ачык булактуу сүрөт модели, аны өз компьютериңизде интернетсиз жана акысыз иштетсеңиз болот. Биз ComfyUI же Automatic1111’ди орнотуп, моделдерди жүктөп, видеокартаңызга жөндөп беребиз.\n\nКеминде 8 ГБ видео эстутуму бар NVIDIA карта сунушталат. Орнотуудан кийин 1 саат онлайн сабак берилет.',
    'Stable Diffusion — открытая модель для изображений, которую можно запускать на своём компьютере бесплатно и без интернета. Установим ComfyUI или Automatic1111, скачаем модели и настроим под вашу видеокарту.\n\nРекомендуется NVIDIA от 8 ГБ видеопамяти. После установки — 1 час онлайн-урока.',
    'Stable Diffusion is an open-source image model you can run on your own PC for free, offline. We install ComfyUI or Automatic1111, download models and tune them for your GPU.\n\nAn NVIDIA card with 8 GB+ VRAM is recommended; includes a 1-hour online lesson.'
  ),
  'github-copilot-pro': L(
    'GitHub Copilot VS Code’до сиз жазып жатканда кийинки саптарды сунуштап, функцияны толук жазып берет. Чат режиминде катаны түшүндүрөт жана тест жазат.\n\nСтуденттер GitHub Student Pack аркылуу бекер ала алышат — каттоого жардам беребиз.',
    'GitHub Copilot в VS Code подсказывает следующие строки и пишет функции целиком. В чате объясняет ошибки и пишет тесты.\n\nСтуденты получают его бесплатно через GitHub Student Pack — поможем оформить.',
    'GitHub Copilot suggests the next lines and whole functions as you type in VS Code; in chat it explains errors and writes tests.\n\nStudents can get it free through the GitHub Student Pack — we’ll help you apply.'
  ),
  'claude-code': L(
    'Claude Code — терминалда иштеген AI программист. Долбооруңуздун файлдарын окуп, жаңы функция кошот, катаны оңдойт, тест иштетет жана git коммит жасайт.\n\nReact, Node.js, Python долбоорлорунда өзгөчө пайдалуу. Claude Pro же Max жазылуусу менен иштейт; орнотуп, биринчи долбоордо кантип колдонууну көрсөтөбүз.',
    'Claude Code — AI-программист в терминале. Читает файлы проекта, добавляет функции, исправляет баги, запускает тесты и делает git-коммиты.\n\nОсобенно полезен в React, Node.js и Python. Работает с подпиской Claude Pro или Max; установим и покажем на вашем проекте.',
    'Claude Code is an AI programmer in your terminal. It reads your project, adds features, fixes bugs, runs tests and makes git commits.\n\nGreat for React, Node.js and Python work. Requires Claude Pro or Max; we’ll set it up and walk you through your first project.'
  ),
  'cursor-pro': L(
    'Cursor — VS Code’го окшош, бирок AI менен курулган код редактору. Бүтүндөй долбоорду түшүнүп, бир нече файлды бир убакта өзгөртөт.\n\nPro тарифинде күчтүү моделдер жана чексиз автотолуктоо бар. VS Code кеңейтүүлөрү да иштейт.',
    'Cursor — редактор кода в духе VS Code, построенный вокруг AI. Понимает весь проект и правит сразу несколько файлов.\n\nВ Pro — мощные модели и безлимитное автодополнение. Расширения VS Code тоже работают.',
    'Cursor is a VS Code-style editor built around AI: it understands your whole codebase and edits several files at once.\n\nPro adds top models and unlimited autocomplete, and VS Code extensions still work.'
  ),
  'hugging-face-pro': L(
    'Hugging Face — миңдеген ачык AI моделдердин жана датасеттердин «GitHub’у». Spaces’те демо тиркеме жарыялап, моделдерди браузерде сынайсыз.\n\nPro аккаунт ZeroGPU’ну көбүрөөк колдонууга жана жеке Inference API лимиттерин көбөйтүүгө мүмкүндүк берет.',
    'Hugging Face — «GitHub» для тысяч открытых AI-моделей и датасетов. В Spaces можно опубликовать демо и тестировать модели в браузере.\n\nPro увеличивает лимиты ZeroGPU и Inference API.',
    'Hugging Face is the “GitHub” of open AI models and datasets; publish demos on Spaces and try models in the browser.\n\nPro raises your ZeroGPU and Inference API limits.'
  ),
  'prompt-engineering-from-zero': L(
    'Бул курста ChatGPT, Claude жана Gemini менен туура сүйлөшүүнү үйрөнөсүз: так тапшырма берүү, мисал көрсөтүү, ролдорду колдонуу жана жоопту текшерүү.\n\n12 практикалык сабак: резюме, бизнес кат, контент-план, Excel формулалары жана сүрөт промпттары. Курстун аягында сертификат жана 100 даяр промпттун китепканасы берилет.',
    'На курсе научитесь правильно общаться с ChatGPT, Claude и Gemini: чёткие задачи, примеры, роли и проверка ответов.\n\n12 практических уроков: резюме, деловые письма, контент-план, формулы Excel и промпты для изображений. В конце — сертификат и библиотека из 100 готовых промптов.',
    'Learn to work with ChatGPT, Claude and Gemini properly: clear instructions, examples, roles and checking answers.\n\n12 hands-on lessons covering CVs, business emails, content plans, Excel formulas and image prompts. Finish with a certificate and a library of 100 ready prompts.'
  ),
  'python-machine-learning': L(
    'Python негиздеринен баштап, pandas, NumPy жана scikit-learn менен машиналык окутууга чейин. Регрессия, классификация, кластерлөө жана нейрон тармактарды практикада үйрөнөсүз.\n\n5 айдын ичинде 3 Kaggle долбоору жана бир дипломдук долбоор жасайсыз. Мыкты студенттерди өнөктөш IT компанияларга стажировкага сунуштайбыз.',
    'От основ Python до машинного обучения с pandas, NumPy и scikit-learn. Регрессия, классификация, кластеризация и нейросети на практике.\n\nЗа 5 месяцев — 3 проекта Kaggle и дипломный проект. Лучших рекомендуем на стажировку в IT-компании-партнёры.',
    'From Python basics to machine learning with pandas, NumPy and scikit-learn — regression, classification, clustering and neural networks in practice.\n\nOver 5 months you complete 3 Kaggle projects and a capstone. Top students are referred to partner IT companies for internships.'
  ),
  'business-automation-with-ai': L(
    'Бизнесиңиздеги кайталанган иштерди AI менен автоматташтырууну үйрөнөсүз: Telegram чатбот, Make жана n8n аркылуу заказдарды CRM’ге жөнөтүү, катка автоматтык жооп.\n\nПрограммалоону билбесеңиз да болот. Курстун аягында өз бизнесиңиз үчүн иштеп турган автоматташтыруу даяр болот.',
    'Научитесь автоматизировать рутину в бизнесе с AI: Telegram-бот, передача заказов в CRM через Make и n8n, автоответы на письма.\n\nПрограммирование не нужно. К концу курса у вас будет работающая автоматизация для вашего бизнеса.',
    'Automate routine business tasks with AI: a Telegram bot, sending orders to your CRM via Make and n8n, and automatic email replies.\n\nNo coding required — you finish with a working automation for your own business.'
  ),
  'ai-robotics-for-kids': L(
    '10–15 жаштагы балдар оюн аркылуу AI жана робототехниканын негиздерин үйрөнүшөт: LEGO Spike роботторун курушат, Scratch’та программа жазышат жана камера менен объект таанууну сынашат.\n\nТоптордо 8 баладан ашпайт, сабактар жумасына 2 жолу. Курстун аягында ата-энелер үчүн долбоорлордун көргөзмөсү өтөт.',
    'Дети 10–15 лет через игру изучают основы AI и робототехники: собирают роботов LEGO Spike, программируют в Scratch и пробуют распознавание объектов камерой.\n\nГруппы до 8 детей, 2 занятия в неделю. В конце курса — выставка проектов для родителей.',
    'Kids aged 10–15 learn AI and robotics through play: building LEGO Spike robots, coding in Scratch and trying camera object recognition.\n\nGroups of up to 8, twice a week, ending with a project showcase for parents.'
  ),
  'computer-vision-opencv': L(
    'OpenCV жана Python менен компьютердик көрүүнү үйрөнөсүз: сүрөттү иштетүү, жүздү таануу, YOLO менен объекттерди аныктоо жана видеодо кыймылды көзөмөлдөө.\n\nДолбоорлор: машинанын номерин окуу, дүкөндө кардарларды саноо жана маска текшерүүчү камера. Python’ду орто деңгээлде билүү талап кылынат.',
    'Компьютерное зрение с OpenCV и Python: обработка изображений, распознавание лиц, детекция объектов YOLO и трекинг движения на видео.\n\nПроекты: распознавание номеров авто, подсчёт покупателей и камера контроля масок. Нужен Python на среднем уровне.',
    'Learn computer vision with OpenCV and Python: image processing, face recognition, YOLO object detection and video motion tracking.\n\nProjects include licence-plate reading, customer counting and a mask-check camera. Intermediate Python required.'
  ),
  'nvidia-geforce-rtx-5090': L(
    'RTX 5090 — NVIDIA’нын эң күчтүү керектөөчү видеокартасы. 32 ГБ GDDR7 эстутуму 30–70 миллиард параметрлүү LLM моделдерди локалдык иштетүүгө, Stable Diffusion’ду секунддарда генерациялоого жана 3D рендерге жетет.\n\nКубаттуулугу 575 Вт, ошондуктан кеминде 1000 Вт блок питание керек. Компьютерге орнотуп, драйвер жана CUDA жөндөп беребиз.',
    'RTX 5090 — самая мощная потребительская видеокарта NVIDIA. 32 ГБ GDDR7 хватает для локального запуска LLM на 30–70 млрд параметров, генерации Stable Diffusion за секунды и 3D-рендера.\n\nПотребление 575 Вт — нужен блок питания от 1000 Вт. Установим в ПК и настроим драйверы и CUDA.',
    'The RTX 5090 is NVIDIA’s most powerful consumer GPU. 32 GB of GDDR7 runs 30–70B-parameter LLMs locally, generates Stable Diffusion images in seconds and handles 3D rendering.\n\nIt draws 575 W, so a 1000 W+ PSU is needed. We install it and set up drivers and CUDA.'
  ),
  'nvidia-geforce-rtx-4070-super': L(
    'RTX 4070 Super — AI менен иштей баштагандар үчүн баа/сапат жагынан эң мыкты тандоо. 12 ГБ эстутум Stable Diffusion XL, 7–13B LLM моделдерди жана оюндарды 2K сапатта иштетет.\n\n220 Вт гана керектейт, 650 Вт блок жетиштүү. Тынч жана муздак иштейт.',
    'RTX 4070 Super — лучший выбор по цене/качеству для старта в AI. 12 ГБ памяти тянут Stable Diffusion XL, LLM на 7–13B и игры в 2K.\n\nПотребляет всего 220 Вт, хватит блока на 650 Вт. Тихая и холодная.',
    'The RTX 4070 Super is the best value card for getting into AI. 12 GB runs Stable Diffusion XL, 7–13B LLMs and 2K gaming.\n\nOnly 220 W — a 650 W PSU is enough — and it runs cool and quiet.'
  ),
  'nvidia-jetson-orin-nano': L(
    'Jetson Orin Nano — алакандай AI компьютер: роботтор, акылдуу камералар жана дрондор үчүн. Нейрон тармактарды 15 Вт гана энергия менен реалдуу убакытта иштетет.\n\nUbuntu жана JetPack орнотулган. Студенттик долбоорлорго жана IoT стартаптарга ылайыктуу.',
    'Jetson Orin Nano — AI-компьютер размером с ладонь для роботов, умных камер и дронов. Запускает нейросети в реальном времени при 15 Вт.\n\nUbuntu и JetPack предустановлены. Для студенческих проектов и IoT-стартапов.',
    'Jetson Orin Nano is a palm-sized AI computer for robots, smart cameras and drones, running neural networks in real time at 15 W.\n\nShips with Ubuntu and JetPack — ideal for student projects and IoT start-ups.'
  ),
  'raspberry-pi-5-ai-kit': L(
    'Raspberry Pi 5 жана Hailo-8L AI ылдамдаткычы (13 TOPS) — камера менен объект таанууну үйрөнүүгө эң арзан жол. Топтомдо корпус, муздаткыч, 27 Вт кубаттагыч жана 64 ГБ microSD бар.\n\nМектеп жана университет долбоорлоруна, акылдуу үй системасына ылайыктуу.',
    'Raspberry Pi 5 с AI-ускорителем Hailo-8L (13 TOPS) — самый доступный способ освоить распознавание объектов с камерой. В комплекте корпус, кулер, блок 27 Вт и microSD 64 ГБ.\n\nДля школьных и университетских проектов и умного дома.',
    'Raspberry Pi 5 with the Hailo-8L AI accelerator (13 TOPS) is the cheapest way to learn camera-based object detection. Includes case, cooler, 27 W supply and 64 GB microSD.\n\nGreat for school and university projects or a smart home.'
  ),
  'mac-mini-m4-pro': L(
    'Mac mini M4 Pro — кичинекей, тынч жана абдан үнөмдүү компьютер. 24 ГБ бирдиктүү эстутум локалдык LLM моделдерди (Llama, Qwen) Ollama же LM Studio аркылуу ылдам иштетет.\n\nПрограммисттерге, дизайнерлерге жана видеомонтажга ылайыктуу. Ollama’ну орнотуп, моделдерди жүктөп беребиз.',
    'Mac mini M4 Pro — компактный, тихий и очень экономичный компьютер. 24 ГБ единой памяти быстро запускают локальные LLM (Llama, Qwen) через Ollama или LM Studio.\n\nДля программистов, дизайнеров и видеомонтажа. Установим Ollama и модели.',
    'The Mac mini M4 Pro is small, silent and very efficient. Its 24 GB of unified memory runs local LLMs (Llama, Qwen) quickly via Ollama or LM Studio.\n\nGreat for developers, designers and video editing; we’ll install Ollama and models for you.'
  ),
  'ai-chatbot-for-your-website': L(
    'Сайтыңызга, Telegram’га жана WhatsApp’ка кардарларга 24/7 жооп берген AI чатбот орнотобуз. Бот товарларыңызды, бааларды жана жеткирүү шарттарын билет, кыргыз жана орус тилинде сүйлөйт.\n\nЗаказдарды CRM’ге же Telegram’га жөнөтөт, татаал суроону менеджерге өткөрөт. Иштеп чыгуу 2 жума, 1 ай акысыз колдоо.',
    'Установим AI-чатбот на сайт, в Telegram и WhatsApp, отвечающий клиентам 24/7. Бот знает ваши товары, цены и условия доставки, говорит на кыргызском и русском.\n\nПередаёт заказы в CRM или Telegram, сложные вопросы — менеджеру. Разработка 2 недели, месяц бесплатной поддержки.',
    'We build an AI chatbot for your website, Telegram and WhatsApp that answers customers 24/7 in Kyrgyz and Russian, knowing your products, prices and delivery terms.\n\nIt forwards orders to your CRM or Telegram and hands tricky questions to a manager. Two weeks to build, one month of free support.'
  ),
  'ai-document-analysis': L(
    'Келишимдер, эсеп-фактуралар жана накладнойлор AI менен автоматтык окулат: сумма, дата, контрагент жана тобокелдүү пункттар таблицага чыгарылат. Бухгалтерия жана юристтердин убактысын 70% га чейин үнөмдөйт.\n\nМаалымат коопсуз сакталат, системаңызга API аркылуу туташтырабыз.',
    'Договоры, счета-фактуры и накладные автоматически читаются AI: суммы, даты, контрагенты и рискованные пункты выносятся в таблицу. Экономит до 70% времени бухгалтерии и юристов.\n\nДанные хранятся безопасно, подключаем к вашей системе через API.',
    'Contracts, invoices and waybills are read automatically by AI, with amounts, dates, counterparties and risky clauses extracted into a table — saving accountants and lawyers up to 70% of their time.\n\nData is stored securely and connected to your systems via API.'
  ),
  'ai-consultation-1-hour': L(
    'Бир сааттык консультацияда бизнесиңизди талдап, AI кайсы жерде акча жана убакыт үнөмдөй турганын көрсөтөбүз: маркетинг, сатуу, кардар кызматы же документ иштетүү.\n\nКонсультациядан кийин кадам-кадам план жана ылайыктуу куралдардын тизмеси берилет. Офлайн (Бишкек) же Zoom аркылуу.',
    'За час консультации разберём ваш бизнес и покажем, где AI сэкономит деньги и время: маркетинг, продажи, поддержка клиентов или документооборот.\n\nПосле — пошаговый план и список подходящих инструментов. Офлайн (Бишкек) или Zoom.',
    'In a one-hour session we review your business and show where AI can save time and money — marketing, sales, customer support or paperwork.\n\nYou get a step-by-step plan and a list of suitable tools. In person in Bishkek or via Zoom.'
  )
};
