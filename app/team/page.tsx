"use client";

import { useState } from "react";

type Lang = "ru" | "en" | "fr";

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    eyebrow: "Team & Expertise",
    heroTitle: "Команда и наша экспертиза",
    heroText:
      "Наша команда состоит из профессионалов с десятилетиями опыта в корпоративных финансах, M&A, привлечении капитала и стратегиях роста. Мы обладаем глубокой экспертизой — от инвестиционного анализа и структурирования сделок до создания инвестиционных портфелей.",
    teamLabel: "01 / Команда",
    teamTitle: "Ключевая команда",
    teamIntro:
      "Ключевые сотрудники ink Advisory ранее составляли команду Lead Advisory, работавшую в Crowe CRS и Русаудит.",
    experience: "Профессиональный опыт",
    education: "Образование",
    city: "Москва",
    rights: "ООО «ИНК Эдвайзори». Все права защищены.",
    disclaimer: "Информация на сайте не является офертой",
    policy: "Политика обработки персональных данных",
    agreement: "Пользовательское соглашение",
    transcription:
      "* ink Advisory — ИНК Эдвайзори (инвестиционно-банковская компания)",
  },
  en: {
    nav: ["M&A", "Strategy", "Wealth Advisory", "Team", "Media"],
    eyebrow: "Team & Expertise",
    heroTitle: "Our Team and Expertise",
    heroText:
      "Our team comprises experienced professionals with decades of experience in corporate finance, M&A, capital raising and growth strategies. Our expertise spans from investment analysis and M&A execution to portfolio creation.",
    teamLabel: "01 / Team",
    teamTitle: "Key Team Members",
    teamIntro:
      "Prior to establishing ink Advisory, the team had been known in the investment banking market as Lead Advisory division of Crowe CRS (Russaudit).",
    experience: "Professional Experience",
    education: "Education",
    city: "Moscow",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "The information on the site is not a public offer",
    policy: "Personal data processing policy",
    agreement: "User agreement",
    transcription: "* ink Advisory — investment banking company",
  },
  fr: {
    nav: ["M&A", "Stratégie", "Wealth Advisory", "Équipe", "Médias"],
    eyebrow: "Team & Expertise",
    heroTitle: "Notre équipe et expertise",
    heroText:
      "Notre équipe est composée de professionnels expérimentés possédant des décennies d’expérience en finance d’entreprise, M&A, levée de capitaux et stratégies de croissance.",
    teamLabel: "01 / Équipe",
    teamTitle: "Équipe clé",
    teamIntro:
      "Les principaux membres de l’équipe d’ink Advisory formaient auparavant l’équipe Lead Advisory au sein de Crowe CRS et Russaudit.",
    experience: "Expérience professionnelle",
    education: "Formation",
    city: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

const people = {
  ru: [
    {
      name: "Кудрат Нурматов",
      role: "Управляющий партнер",
      img: "/images/kudrat.jpg",
      exp: [
        "26-летний опыт в корпоративных финансах.",
        "12 лет был одним из со-руководителей практики M&A в Crowe Russaudit и Baker Tilly Russaudit.",
        "Опыт в M&A и корпоративных финансах включает руководящие роли в фонде прямых инвестиций и текстильном подразделении крупной ФПГ.",
        "Опыт работы включает Россию, Узбекистан и США.",
      ],
      edu: [
        "BBA in Finance and Accounting",
        "1999 Goizueta Business School of Emory University",
        "Atlanta, USA",
      ],
    },
    {
      name: "Руслан Измайлов",
      role: "Управляющий партнер",
      img: "/images/ruslan.jpg",
      exp: [
        "26-летний опыт в корпоративных финансах.",
        "12 лет был одним из со-руководителей практики M&A в Crowe Russaudit и Baker Tilly Russaudit.",
        "Опыт включает руководящие роли в инвестиционно-банковском бутике и департаменте коммерческого банка.",
        "Опыт работы включает Россию и Узбекистан.",
      ],
      edu: [
        "Бакалавр по банковскому делу",
        "1999 Ташкентский финансовый институт",
        "Ташкент, Узбекистан",
      ],
    },
    {
      name: "Никита Катиев, CFA",
      role: "Старший менеджер",
      img: "/images/nikita.jpg",
      exp: [
        "11 лет в финансах и инвестициях.",
        "Начинал карьеру в аудиторской компании Большой Четверки в Москве.",
        "Работал в подразделении ЦБ РФ по надзору за профессиональными участниками рынка ценных бумаг.",
        "Экспертиза в финансовом анализе, моделировании и инвестиционной оценке.",
        "Опыт работы включает Россию и Францию.",
      ],
      edu: [
        "CFA® charterholder, 2024, CFA Institute",
        "Диплом о высшем образовании",
        "2014 Орловский государственный университет",
      ],
    },
  ],
  en: [
    {
      name: "Kudrat Nurmatov",
      role: "Managing Partner",
      img: "/images/kudrat.jpg",
      exp: [
        "26 years in Corporate Finance / Investment Banking.",
        "Co-led M&A advisory practice at Crowe Russaudit and Baker Tilly Russaudit for 12 years.",
        "Track record includes senior roles at a private equity fund and textile arm of a large conglomerate.",
        "Work experience in Russia, Uzbekistan and the United States.",
      ],
      edu: [
        "BBA in Finance and Accounting",
        "1999 Goizueta Business School of Emory University",
        "Atlanta, USA",
      ],
    },
    {
      name: "Ruslan Izmaylov",
      role: "Managing Partner",
      img: "/images/ruslan.jpg",
      exp: [
        "26 years in Corporate Finance / Investment Banking.",
        "Co-led M&A advisory practice at Crowe Russaudit and Baker Tilly Russaudit for 12 years.",
        "Track record includes senior roles at an investment banking boutique and commercial bank.",
        "Work experience in Russia and Uzbekistan.",
      ],
      edu: [
        "Bachelor’s Degree in Banking",
        "1999 Tashkent Financial Institute",
        "Tashkent, Uzbekistan",
      ],
    },
    {
      name: "Nikita Katiev, CFA",
      role: "Senior Manager",
      img: "/images/nikita.jpg",
      exp: [
        "11 years in finance and investments.",
        "Started his career at a Big 4 audit firm in Moscow.",
        "Worked at the Central Bank of Russia overseeing the mutual funds market.",
        "Expertise in financial analysis, financial modeling and valuation.",
        "Work experience in Russia and France.",
      ],
      edu: [
        "CFA® charterholder, 2024, CFA Institute",
        "Diploma",
        "2014 Orel State University",
      ],
    },
  ],
  fr: [
    {
      name: "Kudrat Nurmatov",
      role: "Associé gérant",
      img: "/images/kudrat.jpg",
      exp: [
        "26 ans d’expérience en finance d’entreprise.",
        "A co-dirigé la pratique M&A chez Crowe Russaudit et Baker Tilly Russaudit pendant 12 ans.",
        "Expérience incluant des fonctions dirigeantes dans un fonds de capital-investissement et un grand groupe industriel.",
        "Expérience en Russie, en Ouzbékistan et aux États-Unis.",
      ],
      edu: [
        "BBA en finance et comptabilité",
        "1999 Goizueta Business School of Emory University",
        "Atlanta, États-Unis",
      ],
    },
    {
      name: "Ruslan Izmaylov",
      role: "Associé gérant",
      img: "/images/ruslan.jpg",
      exp: [
        "26 ans d’expérience en finance d’entreprise.",
        "A co-dirigé la pratique M&A chez Crowe Russaudit et Baker Tilly Russaudit pendant 12 ans.",
        "Expérience incluant des postes de direction dans une banque d’affaires boutique et une banque commerciale.",
        "Expérience en Russie et en Ouzbékistan.",
      ],
      edu: [
        "Licence en banque",
        "1999 Institut financier de Tachkent",
        "Tachkent, Ouzbékistan",
      ],
    },
    {
      name: "Nikita Katiev, CFA",
      role: "Manager senior",
      img: "/images/nikita.jpg",
      exp: [
        "11 ans d’expérience en finance et investissement.",
        "A débuté sa carrière dans un cabinet d’audit Big Four à Moscou.",
        "A travaillé à la Banque centrale de Russie.",
        "Expertise en analyse financière, modélisation et valorisation.",
        "Expérience en Russie et en France.",
      ],
      edu: [
        "CFA® charterholder, 2024, CFA Institute",
        "Diplôme d’enseignement supérieur",
        "2014 Université d’État d’Orel",
      ],
    },
  ],
};

export default function TeamPage() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = dict[lang];
  const team = people[lang];

  return (
    <>
      <header className="header">
        <div className="container headerInner">
          <a className="logo" href="/">
            <img src="/images/logo.svg" alt="ink Advisory" />
          </a>

          <nav className="nav">
            <a href="/ma">{t.nav[0]}</a>
            <a href="/strategy">{t.nav[1]}</a>
            <a href="/ia">{t.nav[2]}</a>
            <a href="/team">{t.nav[3]}</a>
            <a href="/media">{t.nav[4]}</a>
          </nav>

          <div className="langs">
            {(["ru", "en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={lang === l ? "active" : ""}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroContent">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <div className="goldLine" />
            <p className="heroText">{t.heroText}</p>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <p className="sectionLabel">{t.teamLabel}</p>
            <h2>{t.teamTitle}</h2>
            <p className="teamIntro">{t.teamIntro}</p>

            <div className="teamGrid">
              {team.map((person) => (
                <article className="member" key={person.name}>
                  <div className="photoWrap">
                    <img src={person.img} alt={person.name} />
                  </div>

                  <div className="memberBody">
                    <p className="role">{person.role}</p>
                    <h3>{person.name}</h3>

                    <h4>{t.experience}</h4>
                    <ul>
                      {person.exp.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h4>{t.education}</h4>
                    <ul>
                      {person.edu.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="transcriptionWrapper">
          <p>{t.transcription}</p>
        </div>

        <div className="container footerGrid">
          <div className="footerLogo">
            <img src="/images/logo.svg" alt="ink Advisory logo" />
          </div>

          <div className="footerContent">
            <p className="textf">
              © {new Date().getFullYear()} {t.rights}
            </p>
            <p className="textf">{t.city}</p>
            <p className="textf">M&A | Corporate Strategy | Wealth Advisory</p>
            <p className="textf">contact@ink-advisory.com</p>

            <div className="socialMedia">
              <a
                href="https://t.me/+wrZefU4rfWU5N2Ey"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink"
              >
                Telegram
              </a>
            </div>

            <p className="textdisc">{t.disclaimer}</p>
            <a href="/personal_data_policy" className="politika">
              {t.policy}
            </a>
            <a href="/user_agreement" className="politika">
              {t.agreement}
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");

        :root {
          --gold: #d89529;
          --bg: #05060d;
          --soft: #0b1020;
          --card: #10182b;
          --muted: rgba(255, 255, 255, 0.68);
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          font-family: Montserrat, sans-serif;
          background: var(--bg);
          color: white;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .header {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          padding: 12px 0;
          background: rgba(5, 6, 13, 0.7);
          backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .headerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .logo img {
          width: 76px;
          display: block;
        }

        .nav {
          display: flex;
          gap: 28px;
        }

        .nav a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 13px;
        }

        .nav a:hover {
          color: var(--gold);
        }

        .langs {
          display: flex;
          gap: 6px;
        }

        .langs button {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 7px 9px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
        }

        .langs button.active,
        .langs button:hover {
          background: var(--gold);
          color: var(--bg);
          border-color: var(--gold);
        }

        .hero {
          min-height: 72svh;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(5, 6, 13, 0.96),
              rgba(15, 8, 66, 0.86),
              rgba(5, 6, 13, 0.94)
            ),
            url("/images/background_team.svg") center / cover no-repeat;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          padding: 145px 0 76px;
        }

        .eyebrow,
        .sectionLabel {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 12px;
          font-weight: 700;
          color: var(--gold);
          margin: 0 0 22px;
        }

        h1,
        h2 {
          margin: 0;
          color: white;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.98;
        }

        h1 {
          max-width: 860px;
          font-size: clamp(40px, 5.6vw, 76px);
        }

        h2 {
          max-width: 880px;
          font-size: clamp(34px, 4vw, 58px);
        }

        .goldLine {
          width: 130px;
          height: 2px;
          background: var(--gold);
          margin: 30px 0 24px;
        }

        .heroText,
        .teamIntro {
          max-width: 820px;
          margin: 20px 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
        }

        .team {
          background: var(--soft);
          padding: 96px 0;
        }

        .teamGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-top: 46px;
        }

        .member {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 34px;
          background: linear-gradient(
            180deg,
            rgba(16, 24, 43, 0.98),
            rgba(8, 21, 37, 0.98)
          );
          border: 1px solid rgba(216, 149, 41, 0.14);
          padding: 28px;
        }

        .photoWrap {
          min-height: 430px;
          background: #05060d;
          overflow: hidden;
        }

        .photoWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.1) contrast(1.05);
          display: block;
        }

        .memberBody {
          padding: 8px 0;
        }

        .role {
          margin: 0 0 10px;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          font-weight: 700;
        }

        .member h3 {
          margin: 0 0 28px;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .member h4 {
          margin: 24px 0 12px;
          font-size: 15px;
          color: white;
        }

        .member ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .member li {
          position: relative;
          padding: 10px 0 10px 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .member li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 18px;
          width: 6px;
          height: 6px;
          background: var(--gold);
        }

        .footer {
          background: #030407;
          color: white;
          border-top: 1px solid rgba(216, 149, 41, 0.14);
          padding: 28px 0 38px;
        }

        .transcriptionWrapper {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto 18px;
        }

        .transcriptionWrapper p {
          margin: 0;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.42);
        }

        .footerGrid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .footerLogo img {
          width: 100px;
        }

        .footerContent {
          text-align: right;
        }

        .textf {
          font-size: 14px;
          margin: 5px 0;
          color: rgba(255, 255, 255, 0.78);
        }

        .textdisc {
          font-size: 10px;
          margin: 16px 0 8px;
          color: rgba(255, 255, 255, 0.48);
        }

        .footerLink,
        .politika {
          color: white;
          text-decoration: none;
          display: block;
          margin-top: 6px;
        }

        .footerLink {
          font-size: 15px;
          font-weight: 600;
          color: var(--gold);
        }

        .politika {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.62);
        }

        @media (max-width: 1080px) {
          .nav {
            display: none;
          }

          .member {
            grid-template-columns: 1fr;
          }

          .photoWrap {
            max-width: 420px;
          }
        }

        @media (max-width: 680px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .logo img {
            width: 64px;
          }

          .hero {
            min-height: auto;
          }

          .heroContent {
            padding: 125px 0 64px;
          }

          h1 {
            font-size: 36px;
            line-height: 1.04;
          }

          .team {
            padding: 72px 0;
          }

          .member {
            padding: 22px;
          }

          .photoWrap {
            min-height: 360px;
          }

          .footerGrid {
            flex-direction: column;
            align-items: flex-start;
          }

          .footerContent {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}