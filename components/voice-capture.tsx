import type { CSSProperties } from "react";
import { transcript } from "@/lib/content";
import { Phone } from "./phone";
import { VoiceMark } from "./icons";
import { ReminderPreview } from "./reminder-preview";

const bars = [32, 50, 74, 58, 90, 66, 42, 30, 54, 82, 100, 70, 46, 36, 60, 86, 64, 40, 28, 48, 72, 94, 62, 38, 52, 78, 56, 34];
const wordHeights = [55, 72, 89, 63];

function VoiceLane({ recording = false }: { recording?: boolean }) {
  return (
    <div className="voice-lane">
      {transcript.map((line) => (
        <p className="voice-row" key={line}>
          <VoiceMark />
          <span className="voice-caption-text" dir="rtl">
            {recording ? line.split(" ").map((word, index) => (
              <span key={index} style={{ "--word-height": `${wordHeights[index % wordHeights.length]}%` } as CSSProperties}>
                {index ? " " : ""}{word}
              </span>
            )) : line.split(" ").map((word, index) => <span className="transcript-word" key={index} style={{ "--word-index": index } as CSSProperties}>{index ? " " : ""}{word}</span>)}
          </span>
        </p>
      ))}
    </div>
  );
}

export function VoiceCapture() {
  return (
    <section id="capture" className="voice-demo" aria-labelledby="capture-title">
      <div className="wrap voice-intro">
        <h2 id="capture-title">سجّل بصوتك.<br />وارجع له مكتوب.</h2>
        <p>بدل ما تكتب الفكرة، قولها. رفيق يحوّل التسجيل لنص تقدر تقراه وتعدّل عليه.</p>
      </div>
      <div className="voice-track" data-voice-track>
        <div className="wrap voice-scene" data-voice-scene>
          <div className="voice-stage">
            <div className="voice-panel voice-recording" aria-hidden="true">
              <p className="voice-label">تسجيلك الصوتي</p>
              <div className="voice-wave">
                {bars.map((height, index) => (
                  <i key={index} style={{ height: `${height}%`, "--bar": index } as CSSProperties} />
                ))}
              </div>
              <VoiceLane recording />
            </div>
            <div className="voice-panel voice-transcript">
              <p className="voice-label">فكرتك مكتوبة</p>
              <VoiceLane />
            </div>
          </div>
        </div>
      </div>
      <p className="voice-example">من تسجيلك لملاحظة محفوظة — مثال توضيحي.</p>
      <div className="wrap voice-reminder">
        <div className="voice-reminder-copy">
          <span className="eyebrow">من صوتك لتذكير</span>
          <h3>قول هتعمل إيه وإمتى.</h3>
          <p>رفيق يحوّل طلبك لتذكير بالميعاد اللي قلته.</p>
        </div>
        <Phone screen="reminder" className="phone-reminder">
          <div className="reminder-source-slot">
          <div className="reminder-card reminder-source" data-reminder-source>
            <p>فكّرني أكلم الدكتور بكرة الساعة ١٠</p>
          </div>
          </div>
        </Phone>
      </div>
    </section>
  );
}

export function ReminderFlight() {
  return (
    <div className="reminder-card reminder-flight" data-reminder-flight aria-hidden="true">
      <div className="reminder-flight-source"><p>فكّرني أكلم الدكتور بكرة الساعة ١٠</p></div>
      <div className="reminder-flight-destination">
        <ReminderPreview />
      </div>
    </div>
  );
}
