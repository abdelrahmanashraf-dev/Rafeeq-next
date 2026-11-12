import { features } from "@/lib/content";
import { AppScreen, PhoneFrame } from "./phone";
import { ReminderPreview } from "./reminder-preview";

export function FeatureStory() {
  return (
    <div className="wrap">
      <section id="features" className="story-section" aria-labelledby="features-title">
        <div className="story-heading story-heading-with-reminder">
          <div className="story-heading-copy">
            <span className="eyebrow">بعد ما تسجّل</span>
            <h2 id="features-title">الفكرة بقت قدامك.<br />خد الخطوة اللي بعدها.</h2>
            <p>ملاحظة ترجع لها، تذكير في معاده، أو مهمة تبدأ فيها.</p>
          </div>
          <div className="reminder-card reminder-destination" data-reminder-destination>
            <ReminderPreview />
          </div>
        </div>
        <div className="story-layout">
          <div className="story-preview" aria-hidden="true">
            <PhoneFrame className="story-phone">
              {features.map((feature, index) => (
                <div className="story-screen" data-story-screen data-active={index === 0 ? "" : undefined} key={feature.screen}>
                  <AppScreen screen={feature.screen} alt={feature.alt} />
                </div>
              ))}
            </PhoneFrame>
          </div>
          <ol className="story-steps" role="list">
            {features.map((feature) => (
              <li className="story-step" data-story-step key={feature.screen}>
                <div className="story-copy">
                  <span className="eyebrow">{feature.number} / {feature.label}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <PhoneFrame className="story-inline story-phone">
                  <AppScreen screen={feature.screen} alt={feature.alt} />
                </PhoneFrame>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
