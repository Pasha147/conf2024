export const links = [
  { name: "Про конференцію", nameEn: "About conference" },
  { name: "Напрямки", nameEn: "Research fields" },
  { name: "Щодо участі", nameEn: "To participate in" },
  { name: "Вимоги", nameEn: "Requirements" },
  { name: "Співголови", nameEn: "Co-chairs" },
];

export const headerInter = {
  Ukr: {
    h1: "Механіка",
    h2: "сучасність і перспективи",
  },
  En: {
    h1: "Mechanics",
    h2: "Contemporary Approaches and Future Directions",
  },
};

export const text = {
  Ukr: {
    header: {
      h1: "Механіка",
      h2: "сучасність і перспективи",
    },
    menu: {
      links: [
        { name: "Про конференцію" },
        { name: "Напрямки" },
        { name: "Щодо участі" },
        { name: "Вимоги" },
        { name: "Співголови" },
      ],
    },
    main: {
      articles: [],
    },
    footer: {
      p1: " Інститут механіки ім.С.П.Тимошенко НАН України.",
      p2: " 03057 Київ, Україна, вул. Нестерова, 3.",
      em: "Email: conference@inmech.kyiv.ua",
      phone: "Тел: +380(63) 369-38-97",
    },
  },
  En: {
    header: {
      h1: "Mechanics",
      h2: "Contemporary Approaches and Future Directions",
    },
    menu: {
      links: [
        { name: "About conference" },
        { name: "Research fields" },
        { name: "To participate in" },
        { name: "Requirements" },
        { name: "Co-chairs" },
      ],
    },
    main: {
      articles: [],
    },
    footer: {
      p1: " S.P.Timoshenko Institute of Mechanics, National Academy of Sciences of Ukraine",
      p2: " 03057 Kyiv, Ukraine, str. Nesterova, 3.",
      em: "Email: conference@inmech.kyiv.ua",
      phone: "Phone: +380(63) 369-38-97",
    },
  },
};

//-- Articles Ukr----------------------------------------------
text.Ukr.main.articles[0] = (
  <>
    <h2>Вельмишановні колеги!</h2>
    <p style={{ textAlign: "center" }}>
      Організатори запрошують Вас взяти 
      участь у роботі {` `}<br />
      <b>
         Міжнародної наукової <br />
        конференції «Механіка: сучасність і перспективи»,
      </b>
      <br />
      Конференція відбуватиметься в<br />
      Інституті механіки ім. С.П Тимошенка <br />
      НАН України
      <br />
      7–11 жовтня 2024 р.
    </p>
  </>
);

text.Ukr.main.articles[1] = (
  <>
    <p>На конференції передбачаються доповіді з таких напрямків:</p>
    <ol>
      <li>Механіка композитних та неоднорідних середовищ</li>
      <li>Механіка оболонкових систем</li>
      <li>Механіка зв'язних полів у матеріалах та елементах конструкцій</li>
      <li>Механіка руйнування та втома</li>
      <li>Динаміка та стійкість руху механічних систем</li>
    </ol>
  </>
);

text.Ukr.main.articles[2] = (
  <>
    <h2 style={{ textAlign: "start" }}>
      Для участі у роботі конференції необхідно:
    </h2>
    <p style={{ textAlign: "justify" }}>
      До 1 вересня 2024 р. надіслати на адресу Оргкомітету оформлені згідно з
      вимогами матеріали доповіді та заповнені реєстраційні форми на кожного
      учасника.
    </p>
    <p>
      Участь у конференції{" "}
      <em>
        <b>безкоштовна</b>
      </em>
      .
    </p>
    <p>
      Матеріали конференції буде опубліковано на сайті Інституту механіки ім.
      С.П. Тимошенка. Кожен учасник, який виступить із доповіддю, отримає
      сертифікат із зазначенням загальної кількості академічних годин: 12 год
      (0,4 кредита ECTS).
    </p>
    <p>Доповіді будуть рецензовані комітетом конференції.</p>
  </>
);

text.Ukr.main.articles[3] = (
  <>
    <h2 style={{ textAlign: "start" }}>
      Вимоги до оформлення матеріалів доповіді:
    </h2>
    <p style={{ textAlign: "justify" }}>
      Текст доповіді обсягом 1–3 повністю заповнених сторінки слід підготувати у
      вигляді файла формату
      <b> PDF</b> за розміщеними на сторінці конференції шаблонами.
      <br />
      Анкети та тексти доповідей, які стосуються напрямків розвитку механіки
      (1–5), просимо надсилати за адресою conference@inmech.kyiv.ua. До розгляду
      буде прийматися не більше 2-х доповідей одного учасника. Додаткова
      інформація, електронна версія реєстраційної форми, а також зразки
      оформлення матеріалів доповіді розміщено на вебсторінці конференції за
      адресою: {`  `}
      <a href="https://inmech.kyiv.ua/l/ua/conferences/">
        https://inmech.kyiv.ua...
      </a>{" "}
    </p>
  </>
);

text.Ukr.main.articles[4] = (
  <>
    <p>
      Співголови оргкомітету:
      <br />
      В.Л.Богданов, В.М.Назаренко
    </p>
    <p>Вчений секретар: Ю.О.Чорноіван</p>
    <p>
      Співголови напрямків конференції: <br />
    </p>
    <ul>
      <li>
        Механіка композитних та неоднорідних середовищ: Я.Я.Рущицький,
        Є.А.Сторожук, В.А.Декрет
      </li>

      <li>Механіка оболонкових систем: О.Я.Григоренко, П.З.Луговий</li>
      <li>
        Механіка зв'язних полів у матеріалах та елементах конструкцій:
        О.З.Галішин, В.Г.Карнаухов
      </li>
      <li>
        Механіка руйнування та втома: В.П.Голуб, М.Ф.Селіванов
        {/* <span style={{ whiteSpace: 'nowrap' }}> М.Ф.Селіванов </span> */}
      </li>
      <li>
        Динаміка та стійкість руху механічних систем: В.Д.Кубенко, А.А.Мартинюк
      </li>
    </ul>
  </>
);
//-------------========--------------------

//-- Articles En----------------------------------------------

text.En.main.articles[0] = (
  <>
    <h2>Dear colleagues!</h2>
    <p style={{ textAlign: "center" }}>
      The organizers invite you to take <br />
      part in the work of the <br />
      <b>
         International Scientific 
        Conference "Mechanics: Contemporary Approaches
        and Future Directions",
      </b>
      <br />
      The conference will take place at the
      <br />
      S.P. Timoshenko Institute of Mechanics, <br />
      National Academy of Sciences of Ukraine
      <br />
      October 7-11, 2024
    </p>
  </>
);

text.En.main.articles[1] = (
  <>
    <p>
      The conference anticipates receiving reports from the following
      specialized research fields:
    </p>
    <ol>
      <li>Mechanics of composite and heterogeneous media</li>
      <li>Mechanics of shell systems</li>
      <li>Mechanics of coherent fields in materials and structural elements</li>
      <li>Mechanics of fracture and fatigue</li>
      <li>Dynamics and stability of movement of mechanical systems</li>
    </ol>
  </>
);

text.En.main.articles[2] = (
  <>
    <h2 style={{ textAlign: "start" }}>
      To participate in the work of the conference, you have to
    </h2>
    <p style={{ textAlign: "justify" }}>
      By September 1, 2024, send report materials and completed registration
      forms for each participant to the address of the Organizing Committee.
    </p>
    <p>
      Participation in the conference is
      <em>
        <b> free</b>
      </em>
      .
    </p>
    <p>
      The materials of the conference will be published on the website of the
      S.P. Timoshenko Institute of Mechanics. Each participant who presents an
      oral report will receive a certificate indicating the total number of
      academic hours: 12 hours (0.4 ECTS credits).
    </p>
    <p>Reports will be reviewed by the Conference commitee.</p>
  </>
);

text.En.main.articles[3] = (
  <>
    <h2 style={{ textAlign: "start" }}>
      Requirements for preparation of report materials:
    </h2>
    <p style={{ textAlign: "justify" }}>
      The text of the report with the volume of 1–3 pages should be prepared in
      the form of a<b> PDF</b> file according to the templates posted on the
      conference page.
      <br />
      Questionnaires and texts of reports to the branches of mechanics (1–5)
      should be sent to the address conference@inmech.kyiv.ua. No more than 2
      reports from one participant will be considered. Additional information,
      an electronic version of the registration form, as well as samples of
      presentation materials are available on the conference website at {` `}
      <a href="https://inmech.kyiv.ua/l/ua/conferences/">
         https://inmech.kyiv.ua...
      </a>
    </p>
  </>
);

text.En.main.articles[4] = (
  <>
    <p>
      Co-chairs of the organizing committee:
      <br />
      V.L.Bohdanov, V.M.Nazarenko
    </p>
    <p>Scientific secretary: Yu.O.Chornoivan</p>
    <p>
      Co-chairs of the conference areas: <br />
    </p>
    <ul>
      <li>
        Mechanics of composite and heterogeneous media: J.J.Rushchitsky,
        Ye.A.Storozhuk, V.A.Dekret
      </li>

      <li>Mechanics of shell systems: O.Ya.Grigorenko, P.Z.Lugovoy</li>
      <li>
        Mechanics of coherent fields in materials and structural elements:
        O.Z.Galishyn, V.G.Karnaukhov
      </li>
      <li>Fracture and Fatigue Mechanics: V.P.Golub, M.F.Selivanov</li>
      <li>
        Dynamics and stability of movement of mechanical systems: V.D.Kubenko,
        A.A.Martyniuk
      </li>
    </ul>
  </>
);
//-------------------------------------------
// links[0].cont = (
//   <>
//     <h2>Вельмишановні колеги!</h2>
//     <p style={{ textAlign: "center" }}>
//       Організатори запрошують Вас взяти <br />
//       участь у роботі{" "}
//       <b>
//         Міжнародної наукової <br />
//         конференції «Механіка: сучасність <br />і перспективи»,
//       </b>
//       <br />
//       Конференція відбуватиметься в<br />
//       Інституті механіки ім. С.П Тимошенка <br />
//       НАН України
//       <br />
//       7–11 жовтня 2024 р.
//     </p>
//   </>
// );

// links[0].contEn = (
//   <>
//     <h2>Dear colleagues!</h2>
//     <p style={{ textAlign: "center" }}>
//       The organizers invite you to take <br />
//       part in the work of the
//       <b>
//         International Scientific <br />
//         Conference "Mechanics: Contemporary Approaches <br />
//         and Future Directions",
//       </b>
//       <br />
//       The conference will take place at the
//       <br />
//       S.P. Timoshenko Institute of Mechanics, <br />
//       National Academy of Sciences of Ukraine
//       <br />
//       October 7-11, 2024
//     </p>
//   </>
// );

// links[1].cont = (
//   <>
//     <p>На конференції передбачаються доповіді з таких напрямків:</p>
//     <ol>
//       <li>Механіка композитних та неоднорідних середовищ</li>
//       <li>Механіка оболонкових систем</li>
//       <li>Механіка зв'язних полів у матеріалах та елементах конструкцій</li>
//       <li>Механіка руйнування та втома</li>
//       <li>Динаміка та стійкість руху механічних систем</li>
//     </ol>
//   </>
// );

// links[2].cont = (
//   <>
//     <h2 style={{ textAlign: "start" }}>
//       Для участі у роботі конференції необхідно:
//     </h2>
//     <p style={{ textAlign: "justify" }}>
//       До 1 вересня 2024 р. надіслати на адресу Оргкомітету оформлені згідно з
//       вимогами матеріали доповіді та заповнені реєстраційні форми на кожного
//       учасника.
//     </p>
//     <p>
//       Участь у конференції{" "}
//       <em>
//         <b>безкоштовна</b>
//       </em>
//       .
//     </p>
//     <p>
//       Матеріали конференції буде опубліковано на сайті Інституту механіки ім.
//       С.П. Тимошенка. Кожен учасник, який виступить із доповіддю, отримає
//       сертифікат із зазначенням загальної кількості академічних годин: 12 год
//       (0,4 кредита ECTS).
//     </p>
//     <p>Доповіді будуть рецензовані комітетом конференції.</p>
//   </>
// );

// links[3].cont = (
//   <>
//     <h2 style={{ textAlign: "start" }}>
//       Вимоги до оформлення матеріалів доповіді:
//     </h2>
//     <p style={{ textAlign: "justify" }}>
//       Текст доповіді обсягом 1–3 повністю заповнених сторінки слід підготувати у
//       вигляді файла формату
//       <b> PDF</b> за розміщеними на сторінці конференції шаблонами.
//       <br />
//       Анкети та тексти доповідей, які стосуються напрямків розвитку механіки
//       (1–5), просимо надсилати за адресою conference@inmech.kyiv.ua. До розгляду
//       буде прийматися не більше 2-х доповідей одного учасника. Додаткова
//       інформація, електронна версія реєстраційної форми, а також зразки
//       оформлення матеріалів доповіді розміщено на вебсторінці конференції за
//       адресою:
//       <a href="https://inmech.kyiv.ua/l/ua/conferences/">
//         https://inmech.kyiv.ua...
//       </a>{" "}
//     </p>
//   </>
// );

// links[4].cont = (
//   <>
//     <p>
//       Співголови оргкомітету:
//       <br />
//       В.Л.Богданов, В.М.Назаренко
//     </p>
//     <p>Вчений секретар: Ю.О.Чорноіван</p>
//     <p>
//       Співголови напрямків конференції: <br />
//     </p>
//     <ul>
//       <li>
//         Механіка композитних та неоднорідних середовищ: Я.Я.Рущицький,
//         Є.А.Сторожук, В.А.Декрет
//       </li>

//       <li>Механіка оболонкових систем: О.Я.Григоренко, П.З.Луговий</li>
//       <li>
//         Механіка зв'язних полів у матеріалах та елементах конструкцій:
//         О.З.Галішин, В.Г.Карнаухов
//       </li>
//       <li>
//         Механіка руйнування та втома: В.П.Голуб, М.Ф.Селіванов
//         {/* <span style={{ whiteSpace: 'nowrap' }}> М.Ф.Селіванов </span> */}
//       </li>
//       <li>
//         Динаміка та стійкість руху механічних систем: В.Д.Кубенко, А.А.Мартинюк
//       </li>
//     </ul>
//   </>
// );
