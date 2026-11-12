export function ReminderPreview() {
  return (
    <div className="reminder-preview">
      <div className="reminder-date" aria-hidden="true"><span>غدًا</span><strong>١٠</strong><span>صباحًا</span></div>
      <div className="reminder-details">
        <span className="reminder-tag">تذكير من رفيق</span>
        <strong className="reminder-title">أكلم الدكتور</strong>
        <span className="reminder-time">غدًا، الساعة ١٠ صباحًا</span>
      </div>
      <span className="reminder-bell" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
      </span>
    </div>
  );
}
