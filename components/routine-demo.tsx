"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { PhoneFrame } from "./phone";
import { routines } from "@/lib/content";

export function RoutineDemo() {
  const [selected, setSelected] = useState(0);
  const [progress, setProgress] = useState(() =>
    routines.map((routine) => routine.items.map(() => false)),
  );
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const routine = routines[selected];
  const completed = progress[selected].filter(Boolean).length;
  const total = routine.items.length.toLocaleString("ar-EG");
  const feedback = completed === routine.items.length
    ? `الروتين خلص. ${total} من ${total}.`
    : completed
      ? `${completed.toLocaleString("ar-EG")} من ${total} خطوات خلصت.`
      : "علّم على أي خطوة لما تخلّصها.";

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = {
      ArrowLeft: (index + 1) % routines.length,
      ArrowRight: (index + routines.length - 1) % routines.length,
      Home: 0,
      End: routines.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  function toggleTask(index: number) {
    setProgress((previous) =>
      previous.map((items, routineIndex) =>
        routineIndex === selected
          ? items.map((done, taskIndex) => taskIndex === index ? !done : done)
          : items,
      ),
    );
  }

  return (
    <div className="routine-band">
      <div className="wrap">
        <section id="try" className="demo-section">
          <div className="demo-copy">
            <div className="eyebrow">جرّبها هنا</div>
            <h2>يومك أبسط،<br />خطوة بخطوة.</h2>
            <p>دي أمثلة لروتينك في أوقات مختلفة. اختار وقت، وعلّم على الخطوات كأنك خلّصتها.</p>
            <div className="tab-buttons" role="tablist" aria-label="اختار روتين" style={{ "--selected": selected } as CSSProperties}>
              <span className="tab-highlight" aria-hidden="true" />
              {routines.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => { tabs.current[index] = element; }}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={index === selected}
                  aria-controls="routine-panel"
                  tabIndex={index === selected ? 0 : -1}
                  onClick={() => setSelected(index)}
                  onKeyDown={(event) => handleTabKey(event, index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="demo-stage">
            <PhoneFrame className="demo-phone" id="routine-panel" role="tabpanel" aria-labelledby={`tab-${routine.id}`} tabIndex={0}>
              <div className="routine-screen">
              <div className="phone-top">
                <span>9:41</span>

                <span aria-hidden="true">● ▰</span>
              </div>
              <div className="phone-greeting">روتيني</div>
              <div className="routine-content" key={routine.id}>
                <h3 id="routine-title">{routine.title}</h3>
                <div className="routine-progress" aria-hidden="true">
                  {routine.items.map((_, index) => (
                    <span key={index} className={index < completed ? "complete" : undefined} />
                  ))}
                </div>
                <div id="routine-tasks">
                  {routine.items.map((item, index) => (
                    <button
                      className={`task${progress[selected][index] ? " done" : ""}`}
                      type="button"
                      aria-pressed={progress[selected][index]}
                      aria-label={item}
                      key={index}
                      onClick={() => toggleTask(index)}
                    >
                      <span className="task-check" aria-hidden="true">{progress[selected][index] ? "✓" : ""}</span>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
              <p className="demo-feedback" id="demo-feedback" aria-live="polite" aria-atomic="true">{feedback}</p>
              <div className="home-indicator" aria-hidden="true" />
              </div>
            </PhoneFrame>
          </div>
        </section>
      </div>
    </div>
  );
}
