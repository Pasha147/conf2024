// export const links = [
//   { name: "Про конференцію", nameEn: "About conference" },
//   { name: "Напрямки", nameEn: "Research fields" },
//   { name: "Щодо участі", nameEn: "To participate in" },
//   { name: "Вимоги", nameEn: "Requirements" },
//   { name: "Співголови", nameEn: "Co-chairs" },
// ];

// export const headerInter = {
//   Ukr: {
//     h1: "Механіка",
//     h2: "сучасність і перспективи",
//   },
//   En: {
//     h1: "Mechanics",
//     h2: "Contemporary Approaches and Future Directions",
//   },
// };

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
        { name: "Завантаження" },
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
        { name: "Downloads" },
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
      Організатори запрошують Вас взяти участь у роботі {` `}
      <br />
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
      АкадемікНАН України, Докторфізико-математичних наук, В.Л.Богданов, <br />
      АкадемікНАН України, Доктортехнічних наук, В.М.Назаренко<br />
    </p>
    <p>Вчений секретар:<br /> 
    Кандидатфізико-математичних наук, Ю.О.Чорноіван<br />
    </p>
    <p>
      Співголови напрямків конференції: <br />
    </p>
    <ul>
      <li>
        Механіка композитних та неоднорідних середовищ: <br />
        Докторфізико-математичних наук, В.А.Декрет,<br />
        Член-кореспондент НАН України, Докторфізико-математичних наук, Я.Я.Рущицький,<br />
        Докторфізико-математичних наук, Є.А.Сторожук <br /><br />
      </li>

      <li>Механіка оболонкових систем:<br />
      Член-кореспондент НАН України, Докторфізико-математичних наук, О.Я.Григоренко,<br />
      Доктортехнічних наук, П.З.Луговий<br /><br />
        </li>
      <li>
        Механіка зв'язних полів у матеріалах та елементах конструкцій:<br />
        Доктортехнічних наук, О.З.Галішин, <br /> 
        Докторфізико-математичних наук, В.Г.Карнаухов<br /><br />
      </li>
      <li>
        Механіка руйнування та втома:<br />
        Доктортехнічних наук, В.П.Голуб,<br /> 
        Член-кореспондент НАН України, Докторфізико-математичних наук, М.Ф.Селіванов<br /><br />
        {/* <span style={{ whiteSpace: 'nowrap' }}> М.Ф.Селіванов </span> */}
      </li>
      <li>
        Динаміка та стійкість руху механічних систем:<br />
        Академік НАН України, Докторфізико-математичних наук, В.Д.Кубенко,<br />
        Академік НАН України, Докторфізико-математичних наук, А.А.Мартинюк<br /><br />
      </li>
    </ul>
  </>
);
text.Ukr.main.articles[5] = (
  <>
    <h2 style={{ textAlign: "start" }}>Завантаження</h2>
    <ul className="ul_downloads">
      <li>
        <a
          href="./files/announcement_uk.docx"
          download="./files/announcement_uk.docx"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>Інформаційний лист</p>
        </a>
      </li>
      <li>
        <a
          href="./files/form_uk.doc"
          download="./files/form_uk.doc"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>Реєстраційна форма</p>
        </a>
      </li>
      <li>
        <a
          href="./files/sample_uk.pdf"
          download="./files/sample_uk.pdf"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>Зразок оформлення доповідей</p>
        </a>
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
        International Scientific Conference "Mechanics: Contemporary Approaches
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
      Academicianof NAS of Ukraine, Doctor of Physical and Mathematical Sciences V.L.Bohdanov,<br />
      Academicianof NAS of Ukraine, Doctor of Technical Sciences V.M.Nazarenko<br />
    </p>
    <p>Scientific secretary:<br /> CandidateofPhysical and Mathematical Sciences, Yu.O.Chornoivan</p>
    <p>
      Co-chairs of the conference areas: <br />
    </p>
    <ul>
      <li>
        Mechanics of composite and heterogeneous media:<br />
        Doctor of Physical and Mathematical Sciences, V.A.Dekret,<br />
        Corresponding Memberof NAS of Ukraine, Doctor of Physical and Mathematical Sciences, J.J.Rushchitsky,<br />
        Doctor of Physical and Mathematical Sciences, Ye.A.Storozhuk<br /><br />
      </li>

      <li>Mechanics of shell systems:<br />
      Corresponding Member of NAS of Ukraine, Doctor of Physical and Mathematical Sciences, O.Ya.Grigorenko,<br />
      Doctor of Technical Sciences, P.Z.Lugovoy<br /><br />
        </li>
      <li>
        Mechanics of coherent fields in materials and structural elements:<br />
        Doctor of Technical Sciences, O.Z.Galishyn,<br />
        Doctor of Physical and Mathematical Sciences , V.G.Karnaukhov<br /><br />
      </li>
      <li>Fracture and Fatigue Mechanics:<br />
      Doctor of Technical Sciences, V.P.Golub,<br />
      Corresponding Member of NAS of Ukraine, Doctor of Physical and Mathematical Sciences, M.F.Selivanov<br /><br />
        </li>
      <li>
        Dynamics and stability of movement of mechanical systems:<br />
        Academician of NAS of Ukraine, Doctor Physical and Mathematical Sciences, V.D.Kubenko,<br />
        Academician of NAS of Ukraine, Doctor Physical and Mathematical Sciences, A.A.Martyniuk<br />
      </li>
    </ul>
  </>
);
text.En.main.articles[5] = (
  <>
    <h2 style={{ textAlign: "start" }}>Downloads</h2>
    <ul className="ul_downloads">
      <li>
        <a
          href="./files/announcement_uk.docx"
          download="./files/announcement_uk.docx"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>information letter-message</p>
        </a>
      </li>
      <li>
        <a
          href="./files/form_en.doc"
          download="./files/form_en.doc"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>Registration form</p>
        </a>
      </li>
      <li>
        <a
          href="./files/sample_en.pdf"
          download="./files/sample_en.pdf"
        >
          <img src="./img/file.svg" alt="file"></img>
          <p>Report design sample</p>
        </a>
      </li>

    </ul>
  </>
);
