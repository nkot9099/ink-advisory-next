"use client";

import { useState } from "react";

type Lang = "ru" | "en" | "fr";

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    contact: "Связаться с нами",
    explore: "Смотреть услуги",
    eyebrow: "Investment Banking Boutique",
    heroTitle: "M&A. Corporate Strategy. Wealth Advisory.",
    heroSub: "Clarity. Execution. Results.",
    heroText:
      "ink Advisory — инвестиционно-банковая компания, основанная экспертами с десятилетиями профессионального опыта в США, СНГ и ЕС.",
    aboutLabel: "01 / О компании",
    about: "О компании",
    aboutText:
      "Мы сопровождаем сделки M&A, привлечение капитала, создание совместных предприятий и разработку корпоративных стратегий для собственников бизнеса, инвесторов и управленческих команд.",
    special: "Наша специализация",
    industries: [
      "Медицина и фармацевтика",
      "Упаковка",
      "Потребительские товары",
      "Легкая промышленность",
      "Энергетика",
      "Добыча полезных ископаемых",
      "Пищевая промышленность",
    ],
    solutionsLabel: "02 / Услуги",
    solutions: "Три направления работы",
    cards: [
      {
        title: "M&A и привлечение капитала",
        text: "Продажа и покупка бизнеса, привлечение акционерного капитала, сделки с инвесторами и стратегическими партнерами.",
      },
      {
        title: "Корпоративная стратегия",
        text: "Разработка стратегий роста, финансовое моделирование, анализ рынков и поддержка управленческих решений.",
      },
      {
        title: "Wealth Advisory",
        text: "Стратегия роста частного капитала, инвестиции в private equity и недвижимость, мониторинг портфеля.",
      },
    ],
    contactsLabel: "03 / Контакты",
    contacts: "Контакты",
    city: "Москва",
    rights: "ООО «ИНК Эдвайзори». Все права защищены.",
    disclaimer: "Информация на сайте не является офертой",
    policy: "Политика обработки персональных данных",
    agreement: "Пользовательское соглашение",
    transcription: "* ink Advisory — ИНК Эдвайзори (инвестиционно-банковская компания)",
  },
  en: {
    nav: ["M&A", "Strategy", "Wealth Advisory", "Team", "Media"],
    contact: "Contact Us",
    explore: "Explore services",
    eyebrow: "Investment Banking Boutique",
    heroTitle: "M&A. Corporate Strategy. Wealth Advisory.",
    heroSub: "Clarity. Execution. Results.",
    heroText:
      "ink Advisory is an investment banking group founded by professionals with decades of experience in the US, CIS and the EU.",
    aboutLabel: "01 / About",
    about: "About Us",
    aboutText:
      "We advise clients on M&A transactions, capital raising, joint ventures and corporate strategy for business owners, investors and management teams.",
    special: "Our Specialization",
    industries: [
      "Medicine and Pharmaceutics",
      "Packaging",
      "Consumer goods",
      "Light industry",
      "Energy",
      "Mining",
      "Food industry",
    ],
    solutionsLabel: "02 / Services",
    solutions: "Three Core Areas",
    cards: [
      {
        title: "M&A and Capital Raising",
        text: "Buy-side and sell-side advisory, equity raising, strategic investors and private equity transactions.",
      },
      {
        title: "Corporate Strategy",
        text: "Growth strategy, financial modeling, market analysis and support for strategic decision-making.",
      },
      {
        title: "Wealth Advisory",
        text: "Capital growth strategy, private markets, real estate investments and portfolio performance monitoring.",
      },
    ],
    contactsLabel: "03 / Contacts",
    contacts: "Contacts",
    city: "Moscow",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "The information on the site is not a public offer",
    policy: "Personal data processing policy",
    agreement: "User agreement",
    transcription: "* ink Advisory — investment banking company",
  },
  fr: {
    nav: ["M&A", "Stratégie", "Wealth Advisory", "Équipe", "Médias"],
    contact: "Contactez-nous",
    explore: "Voir les services",
    eyebrow: "Investment Banking Boutique",
    heroTitle: "M&A. Corporate Strategy. Wealth Advisory.",
    heroSub: "Clarity. Execution. Results.",
    heroText:
      "ink Advisory est une banque d’investissement fondée par des experts disposant de décennies d’expérience aux États-Unis, dans la CEI et l’Union européenne.",
    aboutLabel: "01 / À propos",
    about: "À propos",
    aboutText:
      "Nous accompagnons les clients dans les opérations de M&A, les levées de capitaux, les coentreprises et la stratégie d’entreprise.",
    special: "Notre spécialisation",
    industries: [
      "Médecine et pharmacie",
      "Emballage",
      "Biens de consommation",
      "Industrie légère",
      "Énergie",
      "Exploitation minière",
      "Industrie alimentaire",
    ],
    solutionsLabel: "02 / Services",
    solutions: "Trois domaines clés",
    cards: [
      {
        title: "M&A et levée de capitaux",
        text: "Conseil acheteur/vendeur, levées de fonds, investisseurs stratégiques et private equity.",
      },
      {
        title: "Stratégie d’entreprise",
        text: "Stratégie de croissance, modélisation financière, analyse de marché et décisions stratégiques.",
      },
      {
        title: "Wealth Advisory",
        text: "Stratégie de croissance du capital, private markets, immobilier et suivi de performance.",
      },
    ],
    contactsLabel: "03 / Contacts",
    contacts: "Contacts",
    city: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = dict[lang];

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
          <div className="container heroGrid">
            <div className="heroContent">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <div className="goldLine" />
              <p className="heroSub">{t.heroSub}</p>
              <p className="heroText">{t.heroText}</p>

              <div className="heroActions">
                <a href="#contacts" className="primaryBtn">
                  {t.contact}
                </a>
                <a href="#solutions" className="ghostBtn">
                  {t.explore}
                </a>
              </div>
            </div>

            <div className="heroPanel">
              <div>
                <span>2024</span>
                <p>Founded</p>
              </div>
              <div>
                <span>CIS</span>
                <p>Regional focus</p>
              </div>
              <div>
                <span>M&A</span>
                <p>Core expertise</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container aboutGrid">
            <div>
              <p className="sectionLabel">{t.aboutLabel}</p>
              <h2>{t.about}</h2>
            </div>

            <div className="aboutLead">
              <p>{t.aboutText}</p>
            </div>

            <aside className="specialBox">
              <h3>{t.special}</h3>
              <ul>
                {t.industries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="container">
            <p className="sectionLabel">{t.solutionsLabel}</p>
            <h2>{t.solutions}</h2>

            <div className="cards">
              {t.cards.map((card, index) => (
                <article className="card" key={card.title}>
                  <span className="cardNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="container contactCard">
            <div>
              <p className="sectionLabel">{t.contactsLabel}</p>
              <h2>{t.contacts}</h2>

              <div className="contactInfo">
                <h3>Москва, Россия</h3>
                <p>123022, Ходынская улица 2</p>
                <p>Центральная башня, 34 этаж | Офис 928</p>

                <div className="contactDivider" />

                <p>+7 963 784 66 99</p>
                <p>+7 963 784 66 83</p>
                <p>contact@ink-advisory.com</p>
              </div>
            </div>

            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ffff1ce41260d8eea30e891dd462231476ea60ebe91d54424a9ceca07aa4701&source=constructor"
              loading="lazy"
            />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ink Advisory",
            url: "https://ink-advisory.com",
            logo: "https://ink-advisory.com/assets/logo.png",
            description:
              "ink Advisory – инвестиционно-банковая компания, специализирующаяся на сделках M&A, стратегическом консалтинге и инвестиционном консультировании.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+7 963 784 66 99",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ходынская улица, 2, Москва",
              addressLocality: "Москва",
              addressCountry: "RU",
            },
          }),
        }}
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");

        :root {
          --navy: #0f0842;
          --navy-dark: #081525;
          --blue: #1f299c;
          --gold: #d89529;
          --silver: #cfd8e9;
          --bg: #05060d;
          --bg-soft: #0b1020;
          --card: #10182b;
          --text: #f7f7f7;
          --muted: rgba(255, 255, 255, 0.68);
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          background: var(--bg);
          color: var(--text);
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
          height: auto;
          display: block;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav a {
          position: relative;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 0;
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
          position: relative;
          min-height: 88svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(5, 6, 13, 0.96),
              rgba(15, 8, 66, 0.86),
              rgba(5, 6, 13, 0.94)
            ),
            url("/images/background.svg") center / cover no-repeat;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
          pointer-events: none;
        }

        .heroGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr 0.55fr;
          gap: 70px;
          align-items: end;
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

        .hero h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(40px, 5.8vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .goldLine {
          width: 130px;
          height: 2px;
          background: var(--gold);
          margin: 30px 0 24px;
        }

        .heroSub {
          margin: 0;
          font-size: clamp(17px, 1.8vw, 23px);
          color: white;
          font-weight: 500;
        }

        .heroText {
          max-width: 720px;
          margin: 20px 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .ghostBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .primaryBtn {
          background: var(--gold);
          color: var(--bg);
        }

        .ghostBtn {
          color: white;
          border: 1px solid rgba(216, 149, 41, 0.42);
          background: rgba(255, 255, 255, 0.035);
        }

        .heroPanel {
          display: grid;
          gap: 1px;
          background: rgba(216, 149, 41, 0.22);
          border: 1px solid rgba(216, 149, 41, 0.2);
        }

        .heroPanel div {
          padding: 24px;
          background: rgba(8, 21, 37, 0.78);
        }

        .heroPanel span {
          color: white;
          font-size: 26px;
          font-weight: 800;
        }

        .heroPanel p {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .about,
        .solutions,
        .contacts {
          padding: 96px 0;
        }

        .about {
          background: var(--bg-soft);
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr 0.9fr;
          gap: 54px;
          align-items: start;
        }

        h2 {
          margin: 0;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 0.98;
          letter-spacing: -0.05em;
          color: white;
          font-weight: 800;
        }

        .aboutLead p {
          margin: 0;
          font-size: 21px;
          line-height: 1.62;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.82);
        }

        .specialBox {
          background: linear-gradient(145deg, rgba(15, 8, 66, 0.98), rgba(8, 21, 37, 0.96));
          color: white;
          padding: 32px;
          min-height: 400px;
          border: 1px solid rgba(216, 149, 41, 0.18);
        }

        .specialBox h3 {
          margin: 0 0 24px;
          font-size: 23px;
        }

        .specialBox ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .specialBox li {
          position: relative;
          padding: 12px 0 12px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.76);
        }

        .specialBox li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 19px;
          width: 6px;
          height: 6px;
          background: var(--gold);
        }

        .solutions {
          background: var(--bg);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 46px;
        }

        .card {
          min-height: 330px;
          padding: 32px;
          background: linear-gradient(180deg, rgba(16, 24, 43, 0.98), rgba(8, 21, 37, 0.98));
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
        }

        .cardNumber {
          display: block;
          margin-bottom: 72px;
          color: var(--gold);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.22em;
        }

        .card h3 {
          margin: 0 0 18px;
          font-size: 23px;
          line-height: 1.18;
          color: white;
        }

        .card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
        }

        .contacts {
          background: var(--bg-soft);
        }

        .contactCard {
          display: grid;
          grid-template-columns: 0.9fr 1.25fr;
          gap: 34px;
          padding: 32px;
          background: linear-gradient(145deg, rgba(16, 24, 43, 0.96), rgba(8, 21, 37, 0.98));
          border: 1px solid rgba(216, 149, 41, 0.14);
        }

        .contactInfo {
          margin-top: 34px;
        }

        .contactInfo h3 {
          margin: 0 0 18px;
          color: var(--gold);
          font-size: 23px;
        }

        .contactInfo p {
          margin: 8px 0;
          font-size: 16px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.72);
        }

        .contactDivider {
          width: 80px;
          height: 1px;
          background: var(--gold);
          margin: 28px 0;
        }

        iframe {
          width: 100%;
          min-height: 410px;
          border: 0;
          filter: grayscale(0.25) contrast(1.08);
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
          height: auto;
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

        .socialMedia {
          margin-top: 18px;
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

        .politika:hover,
        .footerLink:hover {
          text-decoration: underline;
        }

        @media (max-width: 1080px) {
          .nav {
            display: none;
          }

          .heroGrid,
          .aboutGrid,
          .cards,
          .contactCard {
            grid-template-columns: 1fr;
          }

          .heroPanel {
            grid-template-columns: repeat(3, 1fr);
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

          .heroGrid {
            padding: 125px 0 64px;
          }

          .hero h1 {
            font-size: 36px;
            line-height: 1.04;
          }

          .heroText {
            font-size: 15px;
          }

          .heroPanel {
            grid-template-columns: 1fr;
          }

          .about,
          .solutions,
          .contacts {
            padding: 72px 0;
          }

          .aboutLead p {
            font-size: 18px;
          }

          .card {
            min-height: auto;
          }

          .cardNumber {
            margin-bottom: 50px;
          }

          .contactCard {
            padding: 22px;
          }

          iframe {
            min-height: 320px;
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