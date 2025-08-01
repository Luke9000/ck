export const PROGRAMS = [
  {
    id: 1,
    title: "Web-дизайн",
    description:
      "полный цикл разработки — от проектирования пользовательского опыта (UX) и разработки визуальных решений (UI) до вёрстки адаптивных сайтов и добавления интерактивных элементов с помощью JavaScript",
    thesis: "РАЗРАБОТКА САЙТА",
    skills: [
      "Разработка макетов веб-страниц",
      "Работа с текстом, композицией и графическими элементами",
      "Оформление интерактивных прототипов многостраничного сайта",
      "Вёрстка сайта — создание программного кода",
      "Изучение методов анализа целевой аудитории и построения пути пользователя",
    ],
    videos: ["/videos/promo.mp4","/videos/courses/slavnikova.mp4"],
    institutes: [
      "ВШТЭ ИТ",
      "ВШТЭ ИЭиА",
      "ИИТА",
      "ИПИ",
      "ИПХЭ",
      "ИТМ",
      "ВШПМ ИПТиО",
    ],
    previews:["/images/previews/web_1.png","/images/previews/web_2.png"],
    link: "",
    fields: [
      { code: "18.03.01", name: "Химическая технология" },
      { code: "29.03.01", name: "Технология изделий легкой промышленности" },
      { code: "04.05.01", name: "Фундаментальная и прикладная химия" },
      { code: "15.03.02", name: "Технологические машины и оборудование" },
      {
        code: "18.03.02",
        name: "Энерго-и ресурсосберегающие процессы в химической технологии, нефтехимии и биотехнологии",
      },
      {
        code: "29.03.02",
        name: "Технологии и проектирование текстильных изделий",
      },
      {
        code: "29.03.03",
        name: "Технология полиграфического и упаковочного производства",
      },
      {
        code: "15.03.04",
        name: "Автоматизация технологических процессов и производств",
      },
      {
        code: "29.03.05",
        name: "Конструирование изделий легкой промышленности",
      },
      {
        code: "29.03.04",
        name: "Технология художественной обработки материалов",
      },
    ],
    modules: [
      {
        title: "Модуль 1. Основы дизайн-проектирования",
        content: [
          "Основы дизайн-проектирования веб-ресурсов. Виды ресурсов. Структуры ресурсов.",
          "Основы UX-проектирования. Определение, персона-модели, CJM, User Flow.",
          "Основы UI-проектирования. Определение. Ui kit и дизайн-система.",
        ],
      },
      {
        title: "Модуль 2. Прототипирование",
        content: [
          "Основы прототипирования веб-ресурсов. Wireframe.",
          "Основы прототипирования в Figma. Статичный макет.",
          "Основы прототипирования в Figma. Интерактивный макет.",
        ],
      },
      {
        title: "Модуль 3. Верстка сайта",
        content: [
          "Программное обеспечение для верстки сайта",
          "Использование специального модуля Flexible Box Layout для компоновки элементов веб-страницы.",
          "Использование специального модуля Grid Layout для компоновки элементов веб-страницы.",
        ],
      },
      {
        title: "Модуль 4. Программирование на языке JavaScript",
        content: [
          "Введение в язык JavaScript. Взаимодействие с HTML. Подключение. Переменные. Типы данных. Операторы. Условные и циклические конструкции.",
          "Основы работы с динамическими элементами. Изменение содержимого элементов. Свойства элементов.",
          "Взаимодействие с веб-страницей и браузером. Формы, валидация данных.",
          "Функции. Объекты-классы (ООП). Синхронные и асинхронные запросы.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Алгоритмизация и программирование на языке Python",
    thesis: "IT-ПРОЕКТ",
    description:
      "от основ программирования до применения объектно-ориентированных методов для моделирования и автоматизации инженерных процессов",
    skills: [
      "Современные технологии разработки программного обеспечения",
      "Жизненный цикл программного обеспечения",
      "Стандартизация процесса разработки программного обеспечения",
      "Современные методы разработки программного обеспечения",
      "Инструментальные средства программирования",
      "Риск процесса разработки программного обеспечения",
      "Тестирование программного обеспечения",
    ],
    videos: ["/videos/promo.mp4","/videos/courses/mykkel.mp4"],
    institutes: ["ВШТЭ ИЭиА"],
    previews:["/images/previews/web_1.png","/images/previews/web_2.png"],
    link: "",
    fields: [
      { code: "13.03.01", name: "Теплоэнергетика и теплотехника" },
      { code: "13.03.02", name: "Электроэнергетика и электротехника" },
    ],
    modules: [
      {
        title:
          "Модуль 1. Современные технологии разработки программного обеспечения",
        content: [
          "Жизненный цикл программного обеспечения",
          "Стандартизация процесса разработки программного обеспечения",
          "Современные методы разработки программного обеспечения",
          "Инструментальные средства программирования",
          "Риск процесса разработки программного обеспечения",
          "Тестирование программного обеспечения",
        ],
      },
      {
        title: "Модуль 2. Основы алгоритмизации",
        content: [
          "Введение в алгоритмизацию. Свойства и формы представления алгоритмов",
          "Основные алгоритмические конструкции. Алгоритмы линейной и разветвляющейся структуры. Алгоритмы циклических структур",
          "Логические основы алгоритмизации. Логические высказывания и операции в алгоритмических конструкциях",
        ],
      },
      {
        title: "Модуль 3. Программирование на языке Python",
        content: [
          "Основные понятия программирования на языке Python. Принципы работы с интерпретатором языка",
          "Основные сведения о языке Python, переменные, типы переменных, операторы.",
          "Основные алгоритмические конструкции языка Python. Обработка исключений",
          "Основные операторы циклического выполнения в языке Python. Вложенные циклические структуры. Операторы прерывания цикла",
          "Функция в языке Python. Определение пользовательских функций. Принципы императивного и функционального программирования. Модули и пакеты в Python",
        ],
      },
      {
        title:
          "Модуль 4. Объектно-ориентированное программирование в профессиональной деятельности",
        content: [
          "Структуры данных в языке Python. Коллекции. Списки, кортежи, множества, словари",
          "Работа с файлами. Особенности вывода разных видов данных",
          "Классы, дата и время в Python",
          "Обработка растровых изображений Python",
          "Создание приложений с GUI в Python. Обзор графических библиотек",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Продвижение бренда на веб-пространстве",
    description:
      "от проектирования контентных решений и визуальной структуры сайта до создания живого, вовлекающего пользовательского интерфейса",
    thesis: "РАЗРАБОТКА САЙТА",
    skills: [
      "Контент-стратегия продвижения бренда",
      "Прототипирование в веб-пространстве",
      "Основы верстки сайта",
      "Разработка интерактивного веб-контента с помощью языка JavaScript",
    ],
    videos: ["/videos/promo.mp4","/videos/courses/savenkova.mp4"],
    institutes: [
      "ВШПМ ИМ",
      "ВШТЭ ИЭиА",
      "ИБК",
      "ИГД",
      "ИДИ",
      "ИДК",
      "ИДПС",
      "ИПИ",
      "ИТМ",
    ],
    previews:["/images/previews/web_1.png","/images/previews/web_2.png"],
    link: "",
    fields: [
      { code: "43.03.02", name: "Туризм" },
      { code: "50.03.04", name: "Теория и история искусств" },
      { code: "54.03.01", name: "Дизайн" },
      {
        code: "54.03.02",
        name: "Декоративно-прикладное искусство и народные промыслы",
      },
      { code: "54.03.03", name: "Искусство костюма и текстиля" },
      { code: "54.05.01", name: "Монументально-декоративное искусство" },
      { code: "54.05.02", name: "Живопись" },
      { code: "54.05.03", name: "Графика" },
    ],
    modules: [
    {
      title: "Модуль 1. Контент-стратегия продвижения бренда",
      content: [
        "Определение бренда и брендинга, классификация брендов. Основные этапы брендинга. Регистрация бренда и авторское право.",
        "Стратегический подход к развитию бренда",
        "Основы цифровых коммуникаций. Коммуникационные особенности SMM.",
      ],
    },
    {
      title: "Модуль 2. Прототипирование в веб-пространстве",
      content: [
        "Основы прототипирования веб-ресурсов. Wireframe.",
        "Основы прототипирования в Figma. Статичный макет.",
        "Основы прототипирования в Figma. Интерактивный макет.",
      ],
    },
    {
      title: "Модуль 3. Основы верстки сайта",
      content: [
        "Программное обеспечение для верстки сайта",
        "Использование специального модуля Flexible Box Layout для компоновки элементов веб-страницы.",
        "Использование специального модуля Grid Layout для компоновки элементов веб-страницы.",
      ],
    },
    {
      title:
        "Модуль 4. Разработка интерактивного веб-контента с помощью языка JavaScript",
      content: [
        "Введение в язык JavaScript. Взаимодействие с HTML. Подключение. Переменные. Типы данных. Операторы. Условные и циклические конструкции.",
        "Основы работы с динамическими элементами. Изменение содержимого элементов. Свойства элементов.",
        "Взаимодействие с веб-страницей и браузером. Формы, валидация данных.",
        "Функции. Объекты-классы (ООП). Синхронные и асинхронные запросы.",
      ],
    },
  ],
  },
  {
    id: 4,
    title: "Основы построения интеллектуальных агентов",
    description:
      "современные цифровые инструменты для анализа и автоматизации — от программирования на Python и работы с данными до создания интеллектуальных решений на основе генеративных технологий",
    thesis: "IT-ПРОЕКТ",
    skills: [
      "Изучение стандартов и методик бизнес-процессов",
      "Описание бизнес-процессов на основе анализа данных",
      "Практическое применение языков программирования, искусственного интеллекта и машинного обучения",
      "Работа в интегрированных средах разработки с инструментами отладки и проверки синтаксиса",
    ],
    videos: ["/videos/promo.mp4","/videos/courses/volkov.mp4"],
    institutes: ["ВШПМ ИПТиО", "ВШТЭ ИЗиВО", "ВШТЭ ИУиЭ", "ИБК", "ИЭСТ"],
    previews:["/images/previews/web_1.png","/images/previews/web_2.png"],
    link: "",
    fields: [
      { code: "38.03.02", name: "Менеджмент" },
      { code: "38.03.01", name: "Экономика" },
    ],
    modules: [
      {
        title: "Модуль 1. Моделирование и анализ бизнес-процессов",
        content: [
          "Понятие бизнес-процесса. Методы управления бизнес-процессами. Цели и задачи анализа бизнес-процессов. Основные методы анализа бизнес-процессов. Интерпретация результатов анализа бизнес-процессов",
          "Функциональный, процессный и ментальный подходы к моделированию бизнес-процессов организации. Автоматизация бизнес-процессов. Программные решения для автоматизации бизнес-процессов организации.",
        ],
      },
      {
        title:
          "Модуль 2. Основы программирования и анализа данных на языке Python",
        content: [
          "Типы данных. Основные алгоритмические конструкции языка Python. Основные операторы циклического выполнения в языке Python. Вложенные циклические структуры. Операторы прерывания цикла.",
          "Функция в языке Python. Определение пользовательских функций. Модули и пакеты в Python.  Основы обработки данных. Библиотеки pandas, numpy, matplotlib. Взаимодействие с API. HTTP. REST. JSON. Библиотеки request, BeautifulSoup",
        ],
      },
      {
        title:
          "Модуль 3. От генерации текста к интеллектуальным агентам",
        content: [
          "История развития и текущее состояние отрасли искусственного интеллекта",
          "Линейная регрессия, функция потерь, градиентный спуск",
          "Искусственный нейрон, функция активации, полносвязная нейронная сеть",
          "Векторные представления текста. Реккурентные нейронные сети. SimpleRNN, GRU, LTSM ",
          `SequenceToSequence, Механизм Attention, архитектура "трансформер"`,
          "Параметры LLM и способы их запуска, эталонное оценивание. ollama, prompt-инжиниринг, AUTOMAT Framework",
          "Фреймворки создания интеллектуальных агентов: Llama Index, LangChain, Hugging Face agents. Распознавание (Whisper) и генерация (Coqui.ai) голоса",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Визуализация бренда в цифровой среде",
    description:
      "формирование выразительного визуального языка бренда: от понимания его фундаментальных характеристик до воплощения айдентики на веб-ресурсах с помощью современных цифровых инструментов",
    thesis: "РАЗРАБОТКА САЙТА",
    skills: [
      "Фундаментальные основы бренда",
      "Инструментальные средства визуализации айдентики",
      "Оформление веб-ресурса в фирменном стиле",
      "Разработка динамических элементов веб-ресурсов с использованием языка JavaScript",
    ],
    videos: ["/videos/promo.mp4","/videos/courses/kolmykova.mp4"],
    institutes: ["ВШТЭ ИУиЭ", "ИБК", "ВШПМ ИМ"],
    previews:["/images/previews/web_1.png","/images/previews/web_2.png"],
    link: "",
    fields: [{ code: "42.03.01", name: "Реклама и связи с общественностью" }],
    modules: [
      {
        title: "Модуль 1. Фундаментальные основы бренда",
        content: [
          "Дизайн коммуникации бренда. Определение бренда и брендинга, классификация брендов. Основные этапы брендинга. Регистрация бренда и авторское право.",
          "Основы композиции. Композиция: основные понятия, базовые элементы, виды.",
          "Основные законы композиции.",
          "Композиционные приемы. Принципы гештальта и другие особенности восприятия визуальной информации.",
          "Теория и психология цвета. Цветовые круги и цветовые модели. Психология цвета и цветовые ассоциации.",
          "Цвет в фирменном стиле. Влияние цвета на маркетинг. Стратегии выбора цвета.",
        ],
      },
      {
        title: "Модуль 2. Инструментальные средства визуализации айдентики",
        content: [
          "Цифровая графика. Основы работы в Adobe Illustrator. Создание и редактирование фигур. Эффекты.",
          "Типографика. Работа с текстом в Adobe Illustrator. Правила верстки текста.",
          "Растровая графика. Основы работы в Adobe Photoshop. Редактирование растровых изображений: коллажирование, ретушь, цветокоррекция, фильтры и эффекты.",
        ],
      },
      {
        title: "Модуль 3. Оформление веб-ресурса в фирменном стиле",
        content: [
          "Дизайн коммуникации бренда. Определение и принципы разработки фирменного стиля. Элементы фирменного стиля.",
          "Основы дизайн-проектирования. Основы UI-проектирования. Определение. Ui kit и дизайн-система.",
          "Прототипирование. Основы прототипирования веб-ресурсов. Wireframe. Основы прототипирования в Figma. Статичный макет.",
        ],
      },
      {
        title:
          "Модуль 4. Разработка динамических элементов веб-ресурсов с использованием языка JavaScript",
        content: [
          "Программирование на языке JavaScript. Введение в язык JavaScript. Взаимодействие с HTML. Подключение. Переменные. Типы данных. Операторы. Условные и циклические конструкции.",
          "Основы работы с динамическими элементами. Изменение содержимого элементов. Свойства элементов.",
          "Взаимодействие с веб-страницей и браузером. Формы, валидация данных.",
          "Функции. Объекты-классы (ООП). Синхронные и асинхронные запросы.",
        ],
      },
    ],
  },
];

// export const PROGRAMS = [
//   {
//     title: "Web-дизайн",
//     skills: [
//       "Разработка макетов веб-страниц",
//       "Работа с текстом, композицией и графическими элементами",
//       "Оформление интерактивных прототипов многостраничного сайта",
//       "Вёрстка сайта — создание программного кода",
//       "Изучение методов анализа целевой аудитории и построения пути пользователя",
//     ],
//     institutes: [
//       "ВШТЭ ИТ",
//       "ВШТЭ ИЭиА",
//       "ИИТА",
//       "ИПИ",
//       "ИПХЭ",
//       "ИТМ",
//       "ВШПМ ИПТиО",
//     ],
//     link: "",
//     fields: [
//       {
//         code: "18.03.01",
//         name: "Химическая технология",
//       },
//       {
//         code: "29.03.01",
//         name: "Технология изделий легкой промышленности",
//       },
//       {
//         code: "04.05.01",
//         name: "Фундаментальная и прикладная химия",
//       },
//     ],
//     modules: [
//       {
//         title: "Модуль 1. Основы дизайн-проектирования",
//         content: [
//           "Основы дизайн-проектирования веб-ресурсов. Виды ресурсов. Структуры ресурсов.",
//           "Основы UX-проектирования. Определение, персона-модели, CJM, User Flow.",
//           "Основы UI-проектирования. Определение. Ui kit и дизайн-система.",
//         ],
//       },
//       {
//         title: "Модуль 1. Основы дизайн-проектирования",
//         content: [
//           "Основы дизайн-проектирования веб-ресурсов. Виды ресурсов. Структуры ресурсов.",
//           "Основы UX-проектирования. Определение, персона-модели, CJM, User Flow.",
//           "Основы UI-проектирования. Определение. Ui kit и дизайн-система.",
//         ],
//       },
//       {
//         title: "Модуль 1. Основы дизайн-проектирования",
//         content: [
//           "Основы дизайн-проектирования веб-ресурсов. Виды ресурсов. Структуры ресурсов.",
//           "Основы UX-проектирования. Определение, персона-модели, CJM, User Flow.",
//           "Основы UI-проектирования. Определение. Ui kit и дизайн-система.",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Алгоритмизация и программирование на языке Python",
//     skills: [
//       "Современные технологии разработки программного обеспечения",
//       "Основы алгоритмизации: разработка вычислительных, диалоговых и графических алгоритмов",
//       "Основы программирования на языке Python",
//       "Объектно-ориентированное программирование в профессиональной деятельности",
//     ],
//     institutes: ["ВШТЭ ИЭиА"],
//     link: "",
//   },
//   {
//     title: "Продвижение бренда на веб-пространстве",
//     skills: [
//       "Контент-стратегия продвижения бренда",
//       "Прототипирование в веб-пространстве",
//       "Основы верстки сайта",
//       "Разработка интерактивного веб-контента с помощью языка JavaScript",
//     ],
//     institutes: [
//       "ВШПМ ИМ",
//       "ВШТЭ ИЭиА",
//       "ИБК",
//       "ИГД",
//       "ИДИ",
//       "ИДК",
//       "ИДПС",
//       "ИПИ",
//       "ИТМ",
//     ],
//     link: "",
//   },
//   {
//     title: "Основы построения интеллектуальных агентов",
//     skills: [
//       "Изучение стандартов и методик бизнес-моделирования",
//       "Описание бизнес-процессов на основе анализа данных",
//       "Практическое применение языков программирования, искусственного интеллекта и машинного обучения",
//       "Работа в интегрированных средах разработки с инструментами отладки и проверки синтаксиса",
//     ],
//     institutes: ["ВШПМ ИПТиО", "ВШТЭ ИЗиВО", "ВШТЭ ИУиЭ", "ИБК", "ИЭСТ"],
//     link: "",
//   },
//   {
//     title: "Визуализация бренда в цифровой среде",
//     skills: [
//       "Фундаментальные основы бренда",
//       "Инструментальные средства визуализации айдентики",
//       "Оформление веб-ресурса в фирменном стиле",
//       "Разработка динамических элементов веб-ресурсов с использованием языка JavaScript",
//     ],
//     institutes: ["ВШТЭ ИУиЭ", "ИБК", "ВШПМ ИМ"],
//     link: "",
//   },
//   {
//     title: "Цифровой брендинг: визуальная стратегия",
//     skills: [
//       "Фундаментальные основы бренда",
//       "Инструментальные средства визуализации айдентики",
//       "Оформление веб-ресурса в фирменном стиле",
//       "Разработка динамических элементов веб-ресурсов с использованием языка JavaScript",
//     ],
//     institutes: ["ВШПМ ИМ"],
//     link: "",
//   },
// ];
