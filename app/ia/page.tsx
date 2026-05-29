"use client";

import { useState } from "react";

type Lang = "ru" | "en" | "fr";

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    contact: "Связаться с нами",
    eyebrow: "Wealth Advisory",
    heroTitle: "Стратегия роста частного капитала",
    heroSub:
      "Стратегическое распределение активов | Инвестиции в частные активы | Корпоративное управление и контроль",
    heroText:
      "ink Advisory помогает владельцам частного капитала эффективно структурировать активы, инвестировать в непубличные компании и недвижимость. Основная цель — максимизация стоимости активов клиента и обеспечение мониторинга за инвестициями.",
    basisLabel: "01 / Подход",
    basisTitle: "Стратегия строится на четырёх принципах",
    icons: [
      ["Цели и профиль инвестора", "Формализация целей, горизонта, ограничений, риск-профиля и требований к ликвидности."],
      ["Ожидания рынков капитала", "Анализ ожидаемой доходности, риска, корреляций и макроэкономических предпосылок."],
      ["Параметры классов активов", "Построение стратегической аллокации с учётом публичных и частных активов."],
      ["Мониторинг состояния активов", "Контроль структуры, рисков, эффективности и соответствия стратегии целям клиента."],
    ],
    processLabel: "02 / Процесс",
    processTitle: "Как мы работаем с частным капиталом",
    process: [
      ["Диагностика", "Анализ текущей структуры активов, целей, обязательств и инвестиционного горизонта."],
      ["Стратегия", "Формирование стратегической аллокации активов и инвестиционной политики."],
      ["Реализация", "Подбор инструментов, private deals, недвижимости и других инвестиционных возможностей."],
      ["Контроль", "Мониторинг портфеля, рисков, доходности и соответствия долгосрочным целям."],
    ],
    footerCity: "Москва",
    rights: "ООО «ИНК Эдвайзори». Все права защищены.",
    disclaimer: "Информация на сайте не является офертой",
    policy: "Политика обработки персональных данных",
    agreement: "Пользовательское соглашение",
    transcription: "* ink Advisory — ИНК Эдвайзори (инвестиционно-банковская компания)",
  },

  en: {
    nav: ["M&A", "Strategy", "Wealth Advisory", "Team", "Media"],
    contact: "Contact Us",
    eyebrow: "Wealth Advisory",
    heroTitle: "Wealth Advisory",
    heroSub:
      "Strategic asset allocation | Private asset investments | Corporate governance & control",
    heroText:
      "ink Advisory assists high net worth individuals with effective asset structuring and investing in private companies and real estate. The key objectives are maximizing performance and proper investment monitoring.",
    basisLabel: "01 / Approach",
    basisTitle: "Strategy is based on four principles",
    icons: [
      ["Investor goals and profile", "Formalization of goals, horizon, constraints, risk profile and liquidity requirements."],
      ["Capital market expectations", "Analysis of expected returns, risks, correlations and macroeconomic assumptions."],
      ["Asset class parameters", "Strategic asset allocation across public and private asset classes."],
      ["Asset activity control", "Monitoring structure, risks, performance and alignment with the client’s objectives."],
    ],
    processLabel: "02 / Process",
    processTitle: "How we work with private capital",
    process: [
      ["Diagnostics", "Analysis of current assets, goals, liabilities and investment horizon."],
      ["Strategy", "Strategic asset allocation and investment policy design."],
      ["Implementation", "Selection of instruments, private deals, real estate and other opportunities."],
      ["Control", "Portfolio monitoring, risk control, performance analysis and long-term alignment."],
    ],
    footerCity: "Moscow",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "The information on the site is not a public offer",
    policy: "Personal data processing policy",
    agreement: "User agreement",
    transcription: "* ink Advisory — investment banking company",
  },

  fr: {
    nav: ["M&A", "Stratégie", "Wealth Advisory", "Équipe", "Médias"],
    contact: "Contactez-nous",
    eyebrow: "Wealth Advisory",
    heroTitle: "Stratégie de croissance du capital privé",
    heroSub:
      "Répartition stratégique des actifs | Investissements en actifs privés | Gouvernance et contrôle d'entreprise",
    heroText:
      "ink Advisory accompagne les détenteurs de capital privé dans la structuration efficace de leurs actifs et l’investissement dans des entreprises non cotées et dans l’immobilier.",
    basisLabel: "01 / Approche",
    basisTitle: "La stratégie repose sur quatre principes",
    icons: [
      ["Objectifs et profil de l’investisseur", "Formalisation des objectifs, de l’horizon, des contraintes et du profil de risque."],
      ["Attentes des marchés de capitaux", "Analyse des rendements attendus, risques, corrélations et hypothèses macroéconomiques."],
      ["Paramètres des classes d’actifs", "Allocation stratégique entre actifs publics et privés."],
      ["Contrôle des actifs", "Suivi de la structure, des risques, de la performance et de l’alignement stratégique."],
    ],
    processLabel: "02 / Processus",
    processTitle: "Comment nous travaillons avec le capital privé",
    process: [
      ["Diagnostic", "Analyse des actifs actuels, objectifs, passifs et horizon d’investissement."],
      ["Stratégie", "Construction de l’allocation stratégique et de la politique d’investissement."],
      ["Mise en œuvre", "Sélection d’instruments, transactions privées, immobilier et opportunités."],
      ["Contrôle", "Suivi du portefeuille, des risques, de la performance et des objectifs à long terme."],
    ],
    footerCity: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

export default function WealthAdvisoryPage() {
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
            <div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <div className="goldLine" />
              <p className="heroSub">{t.heroSub}</p>
              <p className="heroText">{t.heroText}</p>

              <div className="heroActions">
                <a href="#approach" className="primaryBtn">
                  {t.contact}
                </a>
                <a href="#approach" className="ghostBtn">
                  Approach
                </a>
              </div>
            </div>

            <div className="heroPanel">
              <div>
                <span>SAA</span>
                <p>Strategic asset allocation</p>
              </div>
              <div>
                <span>PE</span>
                <p>Private equity & real estate</p>
              </div>
              <div>
                <span>Risk</span>
                <p>Monitoring & control</p>
              </div>
            </div>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="container">
            <p className="sectionLabel">{t.basisLabel}</p>
            <h2>{t.basisTitle}</h2>

            <div className="cards">
              {t.icons.map(([title, text], index) => (
                <article className="card" key={title}>
                  <span className="cardNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <p className="sectionLabel">{t.processLabel}</p>
            <h2>{t.processTitle}</h2>

            <div className="timeline">
              {t.process.map(([title, text], index) => (
                <article className="step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
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
            <p className="textf">{t.footerCity}</p>
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
          min-height: 82svh;
          display: flex;
          align-items: center;
          position: relative;
          background:
            linear-gradient(
              90deg,
              rgba(5, 6, 13, 0.96),
              rgba(15, 8, 66, 0.86),
              rgba(5, 6, 13, 0.94)
            ),
            url("/images/background_ia.svg") center / cover no-repeat;
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

        h1,
        h2 {
          margin: 0;
          color: white;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.98;
        }

        h1 {
          max-width: 840px;
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

        .heroSub {
          max-width: 820px;
          margin: 0;
          font-size: clamp(16px, 1.6vw, 22px);
          line-height: 1.55;
          font-weight: 500;
        }

        .heroText {
          max-width: 760px;
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
          font-size: 24px;
          font-weight: 800;
        }

        .heroPanel p {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .approach,
        .process {
          padding: 96px 0;
        }

        .approach {
          background: var(--soft);
        }

        .process {
          background: var(--bg);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 46px;
        }

        .card {
          min-height: 320px;
          padding: 28px;
          background: linear-gradient(
            180deg,
            rgba(16, 24, 43, 0.98),
            rgba(8, 21, 37, 0.98)
          );
          border: 1px solid rgba(216, 149, 41, 0.14);
        }

        .cardNumber {
          display: block;
          margin-bottom: 72px;
          color: var(--gold);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.22em;
        }

        .card h3,
        .step h3 {
          margin: 0 0 18px;
          font-size: 22px;
          line-height: 1.18;
        }

        .card p,
        .step p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
          font-weight: 300;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin-top: 46px;
          background: rgba(216, 149, 41, 0.22);
          border: 1px solid rgba(216, 149, 41, 0.14);
        }

        .step {
          padding: 30px;
          min-height: 280px;
          background: rgba(16, 24, 43, 0.92);
        }

        .step span {
          display: block;
          margin-bottom: 70px;
          color: var(--gold);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.22em;
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

          .heroGrid,
          .cards,
          .timeline {
            grid-template-columns: 1fr;
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

          h1 {
            font-size: 36px;
            line-height: 1.04;
          }

          .approach,
          .process {
            padding: 72px 0;
          }

          .card,
          .step {
            min-height: auto;
          }

          .cardNumber,
          .step span {
            margin-bottom: 48px;
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