export function DownloadSection() {
  return (
    <section id="start" className="cta" data-scroll-cta aria-labelledby="start-title">
      <div className="cta-frame" aria-hidden="true" />
      <h2 id="start-title">مكان لأفكارك. وخطوة ليومك.</h2>
      <p>حمّل رفيق على أندرويد. وقريبًا على iPhone.</p>
      <div className="store-buttons">
        <a className="store-badge"
          href="https://play.google.com/store/apps/details?id=com.abdelrahman.rafeeq&pcampaignid=web_share"
          target="_blank" rel="noopener noreferrer"
          aria-label="تحميل رفيق من Google Play — يفتح في تبويب جديد">
          <svg className="store-icon" width="30" height="34" viewBox="0 0 30 34" aria-hidden="true" focusable="false">
            <path fill="#32BBFF" d="M1 1 17 17 1 33Z" />
            <path fill="#00D26A" d="M1 1 21 12 17 17Z" />
            <path fill="#FFCE00" d="m21 12 7 4a1.2 1.2 0 0 1 0 2l-7 4-5-5Z" />
            <path fill="#FF4B55" d="M1 33 17 17l4 5Z" />
          </svg>
          <span className="store-badge-copy"><span>حمّله من</span><strong>جوجل بلاي</strong></span>
        </a>
        <div className="store-badge store-badge-soon" role="group" aria-label="رفيق على App Store قريبًا">
          <svg className="store-icon" width="32" height="34" viewBox="0 0 32 34" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="m13 5 12 22M19 5 7 27M4 22h15M23 22h5" />
          </svg>
          <span className="store-badge-copy"><span>قريبًا على</span><strong>آب ستور</strong></span>
        </div>
      </div>
    </section>
  );
}
