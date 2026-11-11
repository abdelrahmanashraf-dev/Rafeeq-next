export function PlusIcon({ circle = false }: { circle?: boolean }) {
  const size = circle ? 28 : 16;
  const center = size / 2;
  return (
    <svg
      className={circle ? "faq-toggle-icon" : undefined}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      focusable="false"
    >
      {circle && <circle cx={center} cy={center} r={13.5} />}
      <path d={`M${center - 6} ${center}H${center + 6}`} />
      <path
        className="icon-vertical"
        d={`M${center} ${center - 6}V${center + 6}`}
      />
    </svg>
  );
}

export function VoiceMark() {
  return (
    <span className="voice-caption-mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
