"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "ru" | "en" | "fr";

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    contact: "Связаться с нами",
    eyebrow: "Corporate Strategy",
    heroTitle: "Стратегия развития компании",
    heroText:
      "Стратегия развития компании — комплект ключевых документов, лежащих в основе процесса привлечения инвестора.",
    heroItems: ["Описательный документ стратегии", "Финансовая модель", "Анализ рынка и ВЭД"],
    introLabel: "01 / Анализ",
    introTitle: "Ключевые аспекты корпоративной стратегии",
    investorTitle: "Как инвестор оценивает компанию?",
    investorText:
      "Инвесторы всесторонне анализируют компанию и ее планы развития, чтобы убедиться в следующем:",
    investorList: [
      "Бизнес-модель понятна, планы развития проработаны",
      "Стратегия позволяет использовать рыночные возможности",
      "Топ-менеджмент обладает необходимыми компетенциями",
      "Целевые рынки четко обозначены",
      "Бизнес основан на конкурентных преимуществах",
      "Финансовые прогнозы реалистичны",
      "Инвестор может получить требуемую доходность",
    ],
    whyTitle: "Почему стратегия важна?",
    whyText: [
      "На основании анализа стратегии и финансовой модели инвестор принимает решение об инвестировании и условиях сделки.",
      "Важно, чтобы стратегия и другие документы были тщательно проработаны до выхода на рынки капитала.",
      "ink Advisory помогает компаниям формулировать и тестировать стратегию при привлечении капитала или росте через M&A.",
      "Правильно сформулированная стратегия служит основой для роста эффективности и акционерной стоимости.",
    ],
    questionsLabel: "02 / Вопросы",
    questionsTitle: "Три ключевых вопроса стратегии",
    questions: [
      "В каком положении компания находится сейчас?",
      "Где компания хочет быть через три, пять и десять лет?",
      "Каким способом компания планирует достичь желаемого положения?",
    ],
    usersLabel: "03 / Пользователи",
    usersTitle: "Пользователи стратегии развития",
    users: [
      ["Топ-менеджмент", ["Понимание целей развития", "Привлечение нужных специалистов", "Операционные планы", "Мотивация на основе KPI"]],
      ["Владельцы бизнеса", ["Оценка возможностей и угроз", "Стратегические цели", "Потребность в финансировании", "Оценка топ-менеджмента"]],
      ["Кредиторы и инвесторы", ["Понимание бизнеса", "Оценка качества управления", "Оценка доходности", "Оценка ликвидности и риска"]],
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
    eyebrow: "Corporate Strategy",
    heroTitle: "Corporate Strategy",
    heroText:
      "Corporate Strategy is a key document in any capital raising process and a foundation for strategic decision-making.",
    heroItems: ["Strategy description document", "Financial model", "Market research"],
    introLabel: "01 / Analysis",
    introTitle: "Key Aspects of Corporate Strategy",
    investorTitle: "How do investors evaluate a company?",
    investorText:
      "Investors allocate time and resources to analyze investment opportunities and generally focus on:",
    investorList: [
      "Clear business model and competitive strengths",
      "Formalized and detailed growth strategy",
      "Qualified top management",
      "Clearly defined target markets",
      "Realistic yet ambitious financial projections",
      "Return on investment potential",
    ],
    whyTitle: "Why is strategy important?",
    whyText: [
      "Investors make final decisions based on strategy, financial model and discussions with founders and managers.",
      "Founders should approach investors with polished and structured materials.",
      "ink Advisory assists companies with formulating and testing strategy.",
      "A properly designed strategy also supports performance improvement and shareholder value growth.",
    ],
    questionsLabel: "02 / Questions",
    questionsTitle: "Key Questions in Strategy Formulation",
    questions: [
      "Where is the company now?",
      "Where does the company want to be in three, five and ten years?",
      "How does the company plan to reach the desired position?",
    ],
    usersLabel: "03 / Stakeholders",
    usersTitle: "Users and Stakeholders",
    users: [
      ["Top Managers", ["Understanding ultimate goals", "Recruitment of needed personnel", "Operational plans", "KPI-based motivation"]],
      ["Owners", ["Assessment of opportunities and threats", "Strategic goals", "Financing needs", "Management performance assessment"]],
      ["Investors and Creditors", ["Understanding the business", "Management quality assessment", "Return assessment", "Liquidity and risk assessment"]],
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
    eyebrow: "Corporate Strategy",
    heroTitle: "Stratégie d’entreprise",
    heroText:
      "La stratégie d’entreprise est un document clé qui constitue la base du processus de levée de capitaux.",
    heroItems: ["Document descriptif de la stratégie", "Modèle financier", "Analyse du marché"],
    introLabel: "01 / Analyse",
    introTitle: "Aspects clés de la stratégie d’entreprise",
    investorTitle: "Comment les investisseurs évaluent-ils une entreprise ?",
    investorText:
      "Les investisseurs analysent l’entreprise et ses plans de développement afin de s’assurer que :",
    investorList: [
      "Le modèle économique est clair",
      "La stratégie permet de saisir de nouvelles opportunités",
      "L’équipe dirigeante dispose des compétences nécessaires",
      "Les marchés cibles sont précisément identifiés",
      "Les prévisions financières sont réalistes",
      "L’investissement peut générer le rendement attendu",
    ],
    whyTitle: "Pourquoi la stratégie est-elle importante ?",
    whyText: [
      "L’investisseur prend sa décision finale sur la base de la stratégie et du modèle financier.",
      "La stratégie doit être soigneusement élaborée avant l’accès aux marchés de capitaux.",
      "ink Advisory accompagne les entreprises dans la formulation et la validation de leur stratégie.",
      "Une stratégie bien formulée sert de base à l’amélioration de la performance et de la valeur actionnariale.",
    ],
    questionsLabel: "02 / Questions",
    questionsTitle: "Trois questions clés",
    questions: [
      "Où se trouve l’entreprise actuellement ?",
      "Où souhaite-t-elle être dans trois, cinq et dix ans ?",
      "Comment prévoit-elle d’atteindre cette position ?",
    ],
    usersLabel: "03 / Utilisateurs",
    usersTitle: "Utilisateurs de la stratégie",
    users: [
      ["Top-management", ["Compréhension des objectifs", "Recrutement de spécialistes", "Plans opérationnels", "Motivation basée sur des KPI"]],
      ["Propriétaires", ["Opportunités et menaces", "Objectifs stratégiques", "Besoins de financement", "Évaluation du management"]],
      ["Investisseurs et créanciers", ["Compréhension de l’activité", "Qualité du management", "Rendement de l’investissement", "Liquidité et risque"]],
    ],
    city: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

export default function StrategyPage() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = dict[lang];

  return (
    <>
      <header className="header">
        <div className="container headerInner">
          <Link className="logo" href="/">
            <img src="/images/logo.svg" alt="ink Advisory" />
          </Link>
          <nav className="nav">
            <Link href="/ma">{t.nav[0]}</Link>
            <Link href="/strategy">{t.nav[1]}</Link>
            <Link href="/ia">{t.nav[2]}</Link>
            <Link href="/team">{t.nav[3]}</Link>
            <Link href="/media">{t.nav[4]}</Link>
          </nav>
          <div className="langs">
            {(["ru", "en", "fr"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? "active" : ""}>
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
              <p className="heroText">{t.heroText}</p>
              <a href="#intro" className="primaryBtn">{t.contact}</a>
            </div>

            <div className="heroPanel">
              {t.heroItems.map((item, i) => (
                <div key={item}>
                  <span>0{i + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="intro" id="intro">
          <div className="container">
            <p className="sectionLabel">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>

            <div className="twoCols">
              <article className="box">
                <h3>{t.investorTitle}</h3>
                <p>{t.investorText}</p>
                <ul>{t.investorList.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>

              <article className="box">
                <h3>{t.whyTitle}</h3>
                {t.whyText.map((x) => <p key={x}>{x}</p>)}
              </article>
            </div>
          </div>
        </section>

        <section className="questions">
          <div className="container">
            <p className="sectionLabel">{t.questionsLabel}</p>
            <h2>{t.questionsTitle}</h2>

            <div className="questionGrid">
              {t.questions.map((q, i) => (
                <article className="questionBox" key={q}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{q}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="users">
          <div className="container">
            <p className="sectionLabel">{t.usersLabel}</p>
            <h2>{t.usersTitle}</h2>

            <div className="userGrid">
              {t.users.map(([title, list]) => (
                <article className="userBox" key={title as string}>
                  <h3>{title}</h3>
                  <ul>{(list as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="transcriptionWrapper"><p>{t.transcription}</p></div>
        <div className="container footerGrid">
          <div className="footerLogo"><img src="/images/logo.svg" alt="ink Advisory logo" /></div>
          <div className="footerContent">
            <p className="textf">© {new Date().getFullYear()} {t.rights}</p>
            <p className="textf">{t.city}</p>
            <p className="textf">M&A | Corporate Strategy | Wealth Advisory</p>
            <p className="textf">contact@ink-advisory.com</p>
            <div className="socialMedia">
              <a href="https://t.me/+wrZefU4rfWU5N2Ey" target="_blank" rel="noopener noreferrer" className="footerLink">Telegram</a>
            </div>
            <p className="textdisc">{t.disclaimer}</p>
            <a href="/personal_data_policy" className="politika">{t.policy}</a>
            <a href="/user_agreement" className="politika">{t.agreement}</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");
        :root{--gold:#d89529;--bg:#05060d;--soft:#0b1020;--card:#10182b;--muted:rgba(255,255,255,.68)}
        *{box-sizing:border-box} html,body{margin:0;font-family:Montserrat,sans-serif;background:var(--bg);color:white;overflow-x:hidden;scroll-behavior:smooth}
        .container{width:min(1180px,calc(100% - 40px));margin:0 auto}
       .header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 10px 0;
  background: rgba(5, 6, 13, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transform: translateZ(0);
  will-change: transform;
}
        .headerInner{display:flex;align-items:center;justify-content:space-between;gap:28px}.logo img{width:76px}.nav{display:flex;gap:28px}.nav a{color:rgba(255,255,255,.82);text-decoration:none;font-size:13px}.nav a:hover{color:var(--gold)}
        .langs{display:flex;gap:6px}.langs button{background:rgba(255,255,255,.04);color:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.14);padding:7px 9px;font-size:11px;font-weight:600;cursor:pointer}.langs .active,.langs button:hover{background:var(--gold);color:var(--bg);border-color:var(--gold)}
        .hero{min-height:82svh;display:flex;align-items:center;background:linear-gradient(90deg,rgba(5,6,13,.96),rgba(15,8,66,.86),rgba(5,6,13,.94)),url("/images/background_strategy.svg") center/cover no-repeat;position:relative}
        .hero:after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:80px 80px}
        .heroGrid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .55fr;gap:70px;align-items:end;padding:145px 0 76px}
        .eyebrow,.sectionLabel{text-transform:uppercase;letter-spacing:.2em;font-size:12px;font-weight:700;color:var(--gold);margin:0 0 22px}
        h1,h2{margin:0;color:white;font-weight:800;letter-spacing:-.05em;line-height:.98} h1{max-width:820px;font-size:clamp(40px,5.6vw,76px)} h2{max-width:880px;font-size:clamp(34px,4vw,58px)}
        .goldLine{width:130px;height:2px;background:var(--gold);margin:30px 0 24px}.heroText,.box p{max-width:760px;margin:20px 0 0;font-size:16px;line-height:1.75;color:var(--muted);font-weight:300}
        .primaryBtn{display:inline-flex;margin-top:34px;align-items:center;justify-content:center;min-height:50px;padding:0 24px;text-decoration:none;background:var(--gold);color:var(--bg);font-size:12px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}
        .heroPanel{display:grid;gap:1px;background:rgba(216,149,41,.22);border:1px solid rgba(216,149,41,.2)}.heroPanel div{padding:24px;background:rgba(8,21,37,.78)}.heroPanel span{color:var(--gold);font-size:13px;font-weight:800;letter-spacing:.2em}.heroPanel p{margin:18px 0 0;color:white;font-size:18px;line-height:1.35}
        .intro,.questions,.users{padding:96px 0}.intro,.users{background:var(--soft)}.questions{background:var(--bg)}
        .twoCols{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:46px}.box,.questionBox,.userBox{background:linear-gradient(180deg,rgba(16,24,43,.98),rgba(8,21,37,.98));border:1px solid rgba(216,149,41,.14);padding:32px}
        .box h3,.userBox h3{font-size:26px;margin:0 0 22px}.box ul,.userBox ul{padding-left:0;list-style:none}.box li,.userBox li{position:relative;padding:12px 0 12px 22px;color:var(--muted);border-bottom:1px solid rgba(255,255,255,.08);line-height:1.5}.box li:before,.userBox li:before{content:"";position:absolute;left:0;top:20px;width:6px;height:6px;background:var(--gold)}
        .questionGrid,.userGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:46px}.questionBox{min-height:220px}.questionBox span{color:var(--gold);font-size:13px;font-weight:800;letter-spacing:.2em}.questionBox p{margin:64px 0 0;font-size:20px;line-height:1.35}
        .footer{background:#030407;border-top:1px solid rgba(216,149,41,.14);padding:28px 0 38px}.transcriptionWrapper{width:min(1180px,calc(100% - 40px));margin:0 auto 18px}.transcriptionWrapper p{margin:0;font-size:11px;color:rgba(255,255,255,.42)}.footerGrid{display:flex;justify-content:space-between;align-items:center;gap:32px}.footerLogo img{width:100px}.footerContent{text-align:right}.textf{font-size:14px;margin:5px 0;color:rgba(255,255,255,.78)}.textdisc{font-size:10px;margin:16px 0 8px;color:rgba(255,255,255,.48)}.footerLink,.politika{display:block;margin-top:6px;text-decoration:none}.footerLink{font-size:15px;font-weight:600;color:var(--gold)}.politika{font-size:10px;color:rgba(255,255,255,.62)}
        @media(max-width:1080px){.nav{display:none}.heroGrid,.twoCols,.questionGrid,.userGrid{grid-template-columns:1fr}}
        @media(max-width:680px){.container{width:min(100% - 28px,1180px)}.logo img{width:64px}.hero{min-height:auto}.heroGrid{padding:125px 0 64px}h1{font-size:36px;line-height:1.04}.intro,.questions,.users{padding:72px 0}.footerGrid{flex-direction:column;align-items:flex-start}.footerContent{text-align:left}}
      `}</style>
    </>
  );
}