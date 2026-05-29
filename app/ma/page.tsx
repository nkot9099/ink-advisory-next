"use client";

import { useState } from "react";

type Lang = "ru" | "en" | "fr";

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    contact: "Связаться с нами",
    eyebrow: "Investment Banking Services",
    heroTitle: "Сделки M&A и привлечение капитала",
    heroSub: "Buy Side | Sell Side | Equity Raising",
    heroText:
      "ink Advisory предоставляет полный спектр услуг по организации M&A сделок на стороне покупателя, продавца и при привлечении инвестора. Команда сопровождает клиентов от формирования идеи до закрытия сделки.",
    servicesLabel: "01 / Услуги",
    servicesTitle: "Виды инвестиционно-банковских услуг",
    servicesIntro:
      "Системный подход в подготовке и реализации сделки и координация ее участников позволяют обеспечить оптимальные для клиента сроки и условия сделки.",
    mnaTitle: "Сделки M&A",
    mnaText: [
      "Сделка M&A — приобретение или продажа бизнеса посредством купли-продажи акций, долей и/или активов компании.",
      "Успех сделки предполагает тесное сотрудничество клиента и M&A-консультанта на этапах подготовки, переговоров, структурирования и подписания юридически обязывающих документов.",
      "Подготовка и реализация сделки M&A — длительный процесс, требующий правильной поэтапной структуризации и эффективного выполнения каждого этапа.",
    ],
    equityTitle: "Привлечение акционерного капитала",
    equityText: [
      "Private Placement — эффективный инструмент привлечения долгосрочного капитала без увеличения долговой нагрузки.",
      "Акционерное финансирование помогает обеспечить инвестиции для долгосрочного роста компании с сохранением финансовой устойчивости.",
      "Успех частного размещения зависит от эффективного выполнения всех этапов — от повышения инвестиционной привлекательности до закрытия сделки.",
    ],
    advLabel: "02 / Ценность",
    advTitle: "Ценность ink Advisory в сделках M&A",
    reasons: [
      ["Экспертиза", "Профессиональная экспертиза во всех аспектах сделки."],
      ["Условия сделки", "Помощь в достижении лучших условий: цена, структура оплаты, условия закрытия."],
      ["Координация", "Организация работы due diligence, юристов, оценщиков и других экспертов."],
      ["Конфиденциальность", "Сохранение конфиденциальности на всех этапах сделки."],
      ["Объективность", "Независимое мнение и поддержка переговорной позиции клиента."],
      ["Снижение рисков", "Помощь в снижении юридических, налоговых и оценочных рисков."],
    ],
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
    eyebrow: "Investment Banking Services",
    heroTitle: "M&A & Equity Raising",
    heroSub: "Buy Side | Sell Side | Equity Raising",
    heroText:
      "ink Advisory provides a full range of buy-side, sell-side M&A advisory and equity raising services. The team supports clients throughout the transaction process — from inception to closing.",
    servicesLabel: "01 / Services",
    servicesTitle: "Investment Banking Services",
    servicesIntro:
      "A structured approach to deal execution and continuous coordination help clients attain the best possible deal terms.",
    mnaTitle: "M&A Deals",
    mnaText: [
      "M&A means acquisition or divestiture of a business through a share purchase agreement or an agreement to purchase company assets.",
      "Successful transactions require close cooperation between the client and M&A advisor during preparation, negotiations, documentation and closing.",
      "Preparation and execution of an M&A deal is a lengthy process requiring careful planning and a stage-by-stage approach.",
    ],
    equityTitle: "Equity Raising",
    equityText: [
      "Private Placement is an effective tool for sourcing long-term capital without increasing debt.",
      "Equity financing supports sustainable company growth while preserving financial stability and creditworthiness.",
      "A successful placement requires efficient execution of every step — from investment appeal preparation to structuring and closing.",
    ],
    advLabel: "02 / Value",
    advTitle: "Reasons to Engage ink Advisory in M&A Transactions",
    reasons: [
      ["Expertise", "Professional expertise across all aspects of the transaction."],
      ["Deal Terms", "Support in securing the best transaction terms: price, conditions and payment structure."],
      ["Coordination", "Coordination of due diligence, lawyers, appraisers and other experts."],
      ["Confidentiality", "Complete confidentiality throughout the transaction process."],
      ["Objectivity", "Independent view and support in shaping the client’s negotiation position."],
      ["Risk Reduction", "Support in reducing valuation, legal and tax risks."],
    ],
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
    eyebrow: "Investment Banking Services",
    heroTitle: "M&A et levée de capitaux",
    heroSub: "Buy Side | Sell Side | Equity Raising",
    heroText:
      "ink Advisory propose une gamme complète de services pour l’organisation de transactions M&A côté acheteur, côté vendeur et pour la levée de capitaux.",
    servicesLabel: "01 / Services",
    servicesTitle: "Services de banque d’investissement",
    servicesIntro:
      "Une approche structurée et une coordination efficace permettent d’assurer des délais et conditions optimaux pour chaque transaction.",
    mnaTitle: "Transactions M&A",
    mnaText: [
      "Une transaction M&A consiste en l’acquisition ou la vente d’une entreprise, de parts ou d’actifs.",
      "La réussite repose sur une coopération étroite entre le client et le conseiller M&A pendant la préparation, la négociation, la documentation et la clôture.",
      "La préparation et la réalisation d’une transaction M&A exigent une structuration rigoureuse étape par étape.",
    ],
    equityTitle: "Levée de capitaux propres",
    equityText: [
      "Le placement privé est un outil efficace pour lever des capitaux à long terme sans alourdir l’endettement.",
      "La levée de capital permet de soutenir une croissance durable tout en préservant la solidité financière.",
      "Le succès dépend de l’exécution efficace de chaque étape, de l’attractivité de l’entreprise à la clôture.",
    ],
    advLabel: "02 / Valeur",
    advTitle: "Raisons de choisir ink Advisory pour vos transactions M&A",
    reasons: [
      ["Expertise", "Expertise professionnelle à toutes les étapes de la transaction."],
      ["Conditions", "Aide à l’obtention des meilleures conditions de transaction."],
      ["Coordination", "Coordination de la due diligence, des avocats, évaluateurs et experts."],
      ["Confidentialité", "Confidentialité complète tout au long du processus."],
      ["Objectivité", "Regard indépendant et soutien à la position de négociation du client."],
      ["Réduction des risques", "Réduction des risques juridiques, fiscaux et d’évaluation."],
    ],
    city: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

export default function MAPage() {
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
                <a href="#services" className="primaryBtn">
                  {t.contact}
                </a>
                <a href="#services" className="ghostBtn">
                  Services
                </a>
              </div>
            </div>

            <div className="dealPanel">
              <div>
                <span>Buy Side</span>
                <p>Acquisition advisory</p>
              </div>
              <div>
                <span>Sell Side</span>
                <p>Business divestiture</p>
              </div>
              <div>
                <span>Equity</span>
                <p>Capital raising</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <p className="sectionLabel">{t.servicesLabel}</p>
            <h2>{t.servicesTitle}</h2>
            <p className="sectionIntro">{t.servicesIntro}</p>

            <div className="serviceGrid">
              <article className="serviceBox">
                <span className="boxNumber">01</span>
                <h3>{t.mnaTitle}</h3>
                {t.mnaText.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>

              <article className="serviceBox">
                <span className="boxNumber">02</span>
                <h3>{t.equityTitle}</h3>
                {t.equityText.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section className="advantages">
          <div className="container">
            <p className="sectionLabel">{t.advLabel}</p>
            <h2>{t.advTitle}</h2>

            <div className="advGrid">
              {t.reasons.map(([title, text], index) => (
                <article className="advBox" key={title}>
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
          --navy: #0f0842;
          --navy-dark: #081525;
          --blue: #1f299c;
          --gold: #d89529;
          --bg: #05060d;
          --bg-soft: #0b1020;
          --card: #10182b;
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
          height: auto;
          display: block;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
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
          background:
            linear-gradient(90deg, rgba(5, 6, 13, 0.96), rgba(15, 8, 66, 0.86), rgba(5, 6, 13, 0.94)),
            url("/images/background_ma.svg") center / cover no-repeat;
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

        .hero h1,
        h2 {
          margin: 0;
          color: white;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.98;
        }

        .hero h1 {
          max-width: 820px;
          font-size: clamp(40px, 5.6vw, 76px);
        }

        h2 {
          max-width: 860px;
          font-size: clamp(34px, 4vw, 58px);
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
          font-weight: 500;
        }

        .heroText,
        .sectionIntro {
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

        .dealPanel {
          display: grid;
          gap: 1px;
          background: rgba(216, 149, 41, 0.22);
          border: 1px solid rgba(216, 149, 41, 0.2);
        }

        .dealPanel div {
          padding: 24px;
          background: rgba(8, 21, 37, 0.78);
        }

        .dealPanel span {
          color: white;
          font-size: 24px;
          font-weight: 800;
        }

        .dealPanel p {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .services,
        .advantages {
          padding: 96px 0;
        }

        .services {
          background: var(--bg-soft);
        }

        .advantages {
          background: var(--bg);
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 46px;
        }

        .serviceBox {
          padding: 34px;
          background: linear-gradient(180deg, rgba(16, 24, 43, 0.98), rgba(8, 21, 37, 0.98));
          border: 1px solid rgba(216, 149, 41, 0.14);
          min-height: 500px;
        }

        .boxNumber {
          display: block;
          margin-bottom: 72px;
          color: var(--gold);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.22em;
        }

        .serviceBox h3 {
          margin: 0 0 22px;
          font-size: 28px;
          line-height: 1.15;
        }

        .serviceBox p {
          margin: 0 0 18px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
        }

        .advGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 46px;
        }

        .advBox {
          padding: 28px;
          background: rgba(16, 24, 43, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.07);
          min-height: 240px;
        }

        .advBox span {
          color: var(--gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .advBox h3 {
          margin: 42px 0 14px;
          font-size: 22px;
        }

        .advBox p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
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

        @media (max-width: 1080px) {
          .nav {
            display: none;
          }

          .heroGrid,
          .serviceGrid,
          .advGrid {
            grid-template-columns: 1fr;
          }

          .footerGrid {
            align-items: flex-start;
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

          .services,
          .advantages {
            padding: 72px 0;
          }

          .serviceBox {
            min-height: auto;
            padding: 26px;
          }

          .boxNumber {
            margin-bottom: 48px;
          }

          .advBox h3 {
            margin-top: 32px;
          }

          .footerGrid {
            flex-direction: column;
          }

          .footerContent {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}