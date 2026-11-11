import { questions } from "@/lib/content";
import { PlusIcon } from "./icons";

export function Faq() {
  return (
    <div className="wrap">
      <section id="faq" className="faq">
        <div className="section-heading"><h2>قبل ما تستخدم رفيق</h2></div>
        {questions.map((item) => (
          <details key={item.question}>
            <summary>{item.question}<PlusIcon circle /></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
