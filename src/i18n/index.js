import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    flag: './Flag_of_the_UK.webp',
    lang: 'English',

    myCV: 'My CV',

    Home: 'Home',
    AboutMe: 'About Me',
    MyWorks: 'My Works',
    Contact: 'Contact',
    toggleTheme_light: 'Change the theme to dark',
    toggleTheme_dark: 'Change the theme to light',
    toggleLangTip: 'Change the language',

    homeH11: 'Crafting Digital Solutions',
    homeH12: 'Excellence in Every Detail.',

    homeB1: 'EXPLORE WORKS',
    homeH211:'Let’s get to',
    homeH212:'know me',
    homeH213:'closer',
    homeP1: 'Hello, I am Vadim Chervoniak, a Full-stack developer based in Ukraine. My expertise includes HTML, CSS, JavaScript, Vue, React, Node.js, various databases, cloud computing, and integrating with different APIs, helping me to deliver complex web development solutions.',
    homeB2: 'Discover More About Me',
    homeH22: 'My Projects Highlight',
    homeB3: 'EXPLORE MORE',
    homeH23: 'Technologies I like to use and keep diving in deeper',

    aboutH21: 'About Me',
    aboutT1: 'Little Brief About Myself',
    aboutH221: 'My mission is',
    aboutH222: 'to make',
    aboutH223: 'development',
    aboutH224: 'easier.',
    aboutT21: 'As individuals, we are all born developers, constantly shaping our neural networks as we journey through life. Some of us, including myself, have chosen to transform this passion for development into a fulfilling career in web development. For me, it\'s not just a job but a calling that allows me to express my creativity and make a meaningful impact through technology.',
    aboutT22: 'We each have our own unique story to tell, and through the language of technology, we code our autobiographies, breathing life into our ideas on the digital canvas. I am deeply dedicated to creating user-friendly web applications and continually enhancing my skills to stay ahead in this ever-evolving industry.',

    worksH2: 'My Works',
    worksT1: 'Showcase About Works',
    worksMore: 'load more works',
    worksDetails: 'View more details about',

    projectH21: 'Project Detail',
    projectT1: 'Details About The Project',
    projectP1: 'Tech area',
    projectP2: 'Tech stack',
    projectP3: 'Source',
    projectP4: 'Demo',
    projectP5: 'Libraries',
    projectP5_default: 'The project does not utilize any external libraries and relies solely on the standard built-in HTML, CSS, and JavaScript processing capabilities of modern browsers.',
    projectP6: 'Description',
    projectP6_default: 'It seems that there is no description attached, so let\'s suppose that this project is self-descriptive and needs no explicit descriptional words.',
    projectPrev: 'PREVIOUS WORK',
    projectNext: 'NEXT WORK',
    projectH22: 'Other Projects',

    contactH21: 'Contact Me',
    contactT1: 'Hire Me For Your Awesome Project',
    contactH221: 'Get in',
    contactH222: 'Touch With',
    contactH223: 'Me',

    footerGIT: 'Get in Touch With Me',
    footerA1: 'Ivana Franka St',
    footerA2: 'Boiarka, Kyivs\'ka oblast',
    location: 'Location of my integrated home-office web development studio',

    emailMe: 'E-mail me',
    chatMe: 'Message me on Telegram',
    callMe: 'Call me',
    gitHub: 'My GitHub profile',

    copyright: 'All rights reserved',

    name: 'NAME',
    email: 'EMAIL',
    project: 'PROJECT',
    comment: 'COMMENT',
    send: 'SEND',

    notFoundT11: 'In the vast realm of possibilities,',
    notFoundT12: 'the route ',
    notFoundT13: ' exists',
    notFoundT14: 'in the twilight between creation and nonexistence.',
    notFoundT15: '...It is a path not yet traveled or, perhaps, already forgotten...',
    notFoundB: 'go back',

    loading: 'Loading'
  },
  uk: {
    flag: './Flag_of_Ukraine.webp',
    lang: 'Ukrainian',

    myCV: 'Моє резюме',

    Home: 'Головна',
    AboutMe: 'Про мене',
    MyWorks: 'Мої роботи',
    Contact: 'Контакти',
    toggleTheme_light: 'Змінити тему на темну',
    toggleTheme_dark: 'Змінити тему на світлу',
    toggleLangTip: 'Змінити мову',

    homeH11: 'Розробка Цифрових Рішень',
    homeH12: 'Досконалість у Кожній Деталі.',
    homeB1: "ПЕРЕГЛЯНУТИ РОБОТИ",
    homeH211:'Давайте',
    homeH212:'знайомитись',
    homeH213:'ближче',
    homeP1: 'Привіт, я Вадім Червоняк, Full-stack розробник з України. Моя експертиза включає HTML, CSS, JavaScript, Vue, React, Node.js, різні бази даних, хмарні технології та інтеграцію з різними API, що дозволяє мені надавати комплексні рішення для веб-розробки.',
    homeB2: 'Дізнатись Про Мене Більше',
    homeH22: 'Огляд Моїх Проєктів',
    homeB3: 'ВІДКРИТИ БІЛЬШЕ',
    homeH23: 'Технології, які я люблю використовувати, і в котрих продовжую поглиблюватись',

    aboutH21: 'Про Мене',
    aboutT1: 'Коротко Про Мою Особистість',
    aboutH221: 'Моя місія —',
    aboutH222: 'робити',
    aboutH223: 'розробку',
    aboutH224: 'простішою.',
    aboutT21: 'Як окремі особистості, ми всі народжуємося розробниками, постійно формуючи наші нейронні мережі протягом життя. Деякі з нас, включаючи мене, обрали шлях перетворення цієї пристрасті до розвитку на успішну кар’єру у веб-розробці. Для мене це не просто робота, а покликання, яке дозволяє виражати творчість і робити значущий внесок через технології.',
    aboutT22: 'У кожного з нас є своя унікальна історія, що хочеться розповісти, і мовою технологій ми пишемо свої автобіографії, оживляючи ідеї на цифровому полотні. Я глибоко відданий створенню зручних для користувачів веб-застосунків і постійно вдосконалюю свої навички, щоб залишатися попереду в цій постійно змінюваній індустрії.',

    worksH2: 'Мої Роботи',
    worksT1: 'Огляд Мої Робіт',
    worksMore: 'завантажити ще',
    worksDetails: 'Переглянути деталі про',

    projectH21: 'Деталі Проєкту',
    projectT1: 'Інформація Про Проєкт',
    projectP1: 'Тех. область',
    projectP2: 'Техстек',
    projectP3: 'Код',
    projectP4: 'Демо',
    projectP5: 'Бібліотеки',
    projectP5_default: 'Цей проєкт не використовує жодних зовнішніх бібліотек і спирається виключно на стандартні вбудовані можливості обробки HTML, CSS та JavaScript у сучасних браузерах.',
    projectP6: 'Опис',
    projectP6_default: 'Схоже, що опис не додано, тому припустімо, що цей проєкт є самодостатнім і не потребує явних описових слів.',
    projectPrev: 'ПОПЕРЕДНЯ РОБОТА',
    projectNext: 'НАСТУПНА РОБОТА',
    projectH22: 'Інші Проєкти',

    contactH21: 'Зв’язатися зі Мною',
    contactT1: 'Найміть Мене Для Вашого Чудового Проєкту',
    contactH221: 'Зв’яжіться',
    contactH222: 'Зі Мною',
    contactH223: 'Зараз',

    footerGIT: 'Зв’яжіться Зі Мною',
    footerA1: 'Вул. Івана Франка',
    footerA2: 'м. Боярка, Київська область',
    location: 'Розташування моєї інтегрованої домашньої студії веб-розробки',

    emailMe: 'Написати e-mail',
    chatMe: 'Написати в Telegram',
    callMe: 'Зателефонувати мені',
    gitHub: 'Мій GitHub профіль',

    copyright: 'Усі права захищено',

    name: 'ІМ’Я',
    email: 'ПОШТА',
    project: 'ПРОЕКТ',
    comment: 'КОМЕНТАР',
    send: 'НАДІСЛАТИ',

    notFoundT11: 'У безмежному світі можливостей,',
    notFoundT12: 'шлях ',
    notFoundT13: ' існує',
    notFoundT14: 'у сутінках між створенням та небуттям.',
    notFoundT15: '...Це шлях, який ще не пройдено, або, можливо, вже забуто...',
    notFoundB: 'повернутися',

    loading: 'Грузимо'
  },
}

const i18n = createI18n({
  locale: sessionStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n