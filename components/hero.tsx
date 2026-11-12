import { Phone } from "./phone";

export function Hero() {
  return (
    <section className="hero-shell" data-scroll-hero aria-labelledby="hero-title">
      <svg className="hero-wordmark" viewBox="0 0 1200 256" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="hero-wordmark-fade" x2="0" y2="1">
            <stop stopOpacity=".27" />
            <stop offset="1" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <text x="14" y="214" textLength="1172" lengthAdjust="spacingAndGlyphs">RAFEEQ</text>
      </svg>
      <div className="wrap hero">
        <div className="hero-copy">
          <h1 id="hero-title">قول اللي في بالك.<br /><span className="hero-line">وخليه مع رفيق.</span></h1>
          <p>أفكار كتير وحاجات عايز تفتكرها؟ رفيق يساعدك تسجّلها، ترجع لها، وتنظّم يومك. معمول للناس اللي عندهم ADHD.</p>
          <div className="actions">
            <a href="https://play.google.com/store/apps/details?id=com.abdelrahman.rafeeq&amp;pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn">حمّل رفيق <span aria-hidden="true">←</span></a>
            <a href="#try" className="btn outline">جرّب الروتين</a>
          </div>
        </div>
        <div className="hero-art"><Phone priority /></div>
      </div>
    </section>
  );
}
