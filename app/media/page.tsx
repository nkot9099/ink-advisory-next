"use client";

import { useMemo, useState } from "react";
import { articles } from "@/data/articles";

type Lang = "ru" | "en" | "fr";

type Article = {
  title: string;
  date: string;
  authors?: string;
  type: string;
  image: string;
  url: string;
  file?: string;
};

const dict = {
  ru: {
    nav: ["M&A", "Стратегия", "Wealth Advisory", "Команда", "Медиа"],
    eyebrow: "Media & Thought Leadership",
    title: "Статьи и экспертные материалы",
    subtitle:
      "Исследования, аналитика, практические кейсы и материалы по M&A, привлечению капитала, стратегии и private equity.",
    read: "Читать материал",
    download: "Скачать PDF",
    filters: [
      { key: "all", label: "Все материалы" },
      { key: "ma", label: "M&A Insights" },
      { key: "equity", label: "Private Equity" },
      { key: "news", label: "Новости и мероприятия" },
    ],
    empty: "Материалы по выбранному фильтру не найдены.",
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
    eyebrow: "Media & Thought Leadership",
    title: "Articles and Expert Insights",
    subtitle:
      "Research, insights, practical cases and materials on M&A, capital raising, strategy and private equity.",
    read: "Read article",
    download: "Download PDF",
    filters: [
      { key: "all", label: "All Materials" },
      { key: "ma", label: "M&A Insights" },
      { key: "equity", label: "Equity Raising" },
      { key: "news", label: "Conferences" },
    ],
    empty: "No materials found for the selected filter.",
    city: "Moscow",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "The information on the site is not a public offer",
    policy: "Personal data processing policy",
    agreement: "User agreement",
    transcription: "* ink Advisory — investment banking company",
  },
  fr: {
    nav: ["M&A", "Stratégie", "Wealth Advisory", "Équipe", "Médias"],
    eyebrow: "Media & Thought Leadership",
    title: "Articles et analyses d'experts",
    subtitle:
      "Recherches, analyses, cas pratiques et matériaux sur les M&A, la levée de capitaux, la stratégie et le private equity.",
    read: "Lire l’article",
    download: "Télécharger PDF",
    filters: [
      { key: "all", label: "Tous les matériaux" },
      { key: "ma", label: "M&A" },
      { key: "equity", label: "Equity" },
      { key: "news", label: "Conférences" },
    ],
    empty: "Aucun matériau trouvé pour le filtre sélectionné.",
    city: "Moscou",
    rights: "ink Advisory LLC, All rights reserved",
    disclaimer: "Les informations sur le site ne sont pas une offre publique",
    policy: "Politique de traitement des données personnelles",
    agreement: "Conditions d'utilisation",
    transcription: "* ink Advisory — société de banque d’investissement",
  },
};

function normalizeArticle(article: Article) {
  return {
    ...article,
    type: article.type === "М&A" ? "M&A" : article.type,
    url: article.url
      .replace(/^media\//, "/media/")
      .replace(/\.php$/, ""),
    image: article.image
      .replace(/^\/?styles\/assets\/articles\//, "/images/media/")
      .replace("spb_ma/title.jpg", "spb_ma.jpg")
      .replace("opertr1/opertr1.png", "opertr1.png")
      .replace("str_tr1/str_logo.jpg", "str_logo.jpg"),
    file: article.file
      ? article.file.replace(/^\/?styles\/assets\/articles\/PDF\//, "/articles/")
      : undefined,
  };
}

function matchFilter(articleType: string, filter: string) {
  if (filter === "all") return true;

  if (filter === "ma") {
    return articleType === "M&A" || articleType === "M&A Insights";
  }

  if (filter === "equity") {
    return articleType === "Equity" || articleType === "Private Equity";
  }

  if (filter === "news") {
    return articleType === "News & Conferences" || articleType === "Conference";
  }

  return true;
}

export default function MediaPage() {
  const [lang, setLang] = useState<Lang>("ru");
  const [filter, setFilter] = useState("all");

  const t = dict[lang];

  const currentArticles = useMemo(() => {
    return ((articles[lang] || []) as Article[]).map(normalizeArticle);
  }, [lang]);

  const filteredArticles = useMemo(() => {
    return currentArticles.filter((article) => matchFilter(article.type, filter));
  }, [currentArticles, filter]);

  const featured = currentArticles[0];
  const regular =
    filter === "all" && featured
      ? filteredArticles.filter((article) => article.title !== featured.title)
      : filteredArticles;

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
                onClick={() => {
                  setLang(l);
                  setFilter("all");
                }}
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
              <h1>{t.title}</h1>
              <div className="goldLine" />
              <p className="heroText">{t.subtitle}</p>
            </div>

            <div className="heroPanel">
              <div>
                <span>Research</span>
                <p>M&A insights and strategic cases</p>
              </div>
              <div>
                <span>Capital</span>
                <p>Equity raising and private markets</p>
              </div>
              <div>
                <span>Events</span>
                <p>Conferences and expert discussions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="media">
          <div className="container">
            <div className="filters">
              {t.filters.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setFilter(item.key)}
                  className={filter === item.key ? "active" : ""}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {filter === "all" && featured && (
              <article className="featured">
                <div className="featuredImage">
                  <img src={featured.image} alt={featured.title} />
                </div>

                <div className="featuredContent">
                  <p className="category">{featured.type}</p>
                  <h2>{featured.title}</h2>
                  <p className="meta">
                    {featured.date}
                    {featured.authors ? ` · ${featured.authors}` : ""}
                  </p>

                  <div className="articleActions">
                    <a href={featured.url}>{t.read}</a>
                    {featured.file && <a href={featured.file}>{t.download}</a>}
                  </div>
                </div>
              </article>
            )}

            {filteredArticles.length === 0 ? (
              <p className="empty">{t.empty}</p>
            ) : (
              <div className="articleGrid">
                {regular.map((article, index) => (
                  <article className="articleCard" key={`${article.title}-${index}`}>
                    <div className="articleImage">
                      <img src={article.image} alt={article.title} />
                    </div>

                    <div className="articleBody">
                      <span className="number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="category">{article.type}</p>
                      <h3>{article.title}</h3>

                      <p className="meta">
                        {article.date}
                        {article.authors ? ` · ${article.authors}` : ""}
                      </p>

                      <div className="articleActions">
                        <a href={article.url}>{t.read}</a>
                        {article.file && <a href={article.file}>{t.download}</a>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
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
          position: relative;
          background:
            linear-gradient(
              90deg,
              rgba(5, 6, 13, 0.96),
              rgba(15, 8, 66, 0.86),
              rgba(5, 6, 13, 0.94)
            ),
            url("/images/background_media.webp") center / cover no-repeat;
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

        .eyebrow {
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
          max-width: 900px;
          font-size: clamp(42px, 6vw, 84px);
        }

        .goldLine {
          width: 130px;
          height: 2px;
          background: var(--gold);
          margin: 30px 0 24px;
        }

        .heroText {
          max-width: 760px;
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
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
          line-height: 1.5;
        }

        .media {
          background: var(--soft);
          padding: 96px 0;
        }

        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 46px;
        }

        .filters button {
          min-height: 46px;
          padding: 0 18px;
          background: rgba(16, 24, 43, 0.92);
          color: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .filters button.active,
        .filters button:hover {
          background: var(--gold);
          color: var(--bg);
          border-color: var(--gold);
        }

        .featured {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1px;
          margin-bottom: 34px;
          background: rgba(216, 149, 41, 0.22);
          border: 1px solid rgba(216, 149, 41, 0.16);
        }

        .featuredImage {
          min-height: 460px;
          background: #05060d;
          overflow: hidden;
        }

        .featuredImage img,
        .articleImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(0.12) contrast(1.05);
          transition: transform 0.4s ease;
        }

        .featuredContent {
          padding: 42px;
          background: linear-gradient(
            180deg,
            rgba(16, 24, 43, 0.98),
            rgba(8, 21, 37, 0.98)
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .featured:hover img,
        .articleCard:hover img {
          transform: scale(1.04);
        }

        .featured h2 {
          font-size: clamp(30px, 3.6vw, 48px);
          line-height: 1.04;
          margin-top: 18px;
        }

        .category {
          margin: 0;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          font-weight: 800;
        }

        .meta {
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .articleActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .articleActions a {
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 6px;
        }

        .articleActions a:hover {
          color: var(--gold);
        }

        .articleGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .articleCard {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          background: linear-gradient(
            180deg,
            rgba(16, 24, 43, 0.98),
            rgba(8, 21, 37, 0.98)
          );
          border: 1px solid rgba(255, 255, 255, 0.07);
          min-height: 340px;
          transition: transform 0.25s ease, border-color 0.25s ease;
          overflow: hidden;
        }

        .articleCard:hover {
          transform: translateY(-6px);
          border-color: rgba(216, 149, 41, 0.42);
        }

        .articleImage {
          min-height: 340px;
          background: #05060d;
          overflow: hidden;
        }

        .articleBody {
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .number {
          display: block;
          margin-bottom: auto;
          color: var(--gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .articleBody h3 {
          margin: 14px 0 0;
          color: white;
          font-size: 21px;
          line-height: 1.22;
          letter-spacing: -0.025em;
        }

        .empty {
          color: var(--muted);
          font-size: 16px;
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
          .featured,
          .articleGrid,
          .articleCard {
            grid-template-columns: 1fr;
          }

          .articleImage,
          .featuredImage {
            min-height: 320px;
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
            font-size: 38px;
            line-height: 1.04;
          }

          .media {
            padding: 72px 0;
          }

          .featuredContent,
          .articleBody {
            padding: 24px;
          }

          .featuredImage,
          .articleImage {
            min-height: 250px;
          }

          .articleCard {
            min-height: auto;
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