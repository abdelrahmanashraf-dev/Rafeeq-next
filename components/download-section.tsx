"use client";

import { useRef, type MouseEvent } from "react";

export function DownloadSection() {
  const dialog = useRef<HTMLDialogElement>(null);

  function dismissBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      event.currentTarget.close();
    }
  }

  return (
    <>
      <section id="start" className="cta" data-scroll-cta aria-labelledby="start-title">
        <div className="cta-frame" aria-hidden="true" />
        <h2 id="start-title">مكان لأفكارك. وخطوة ليومك.</h2>
        <p>رفيق على موبايلك، قريبًا. تابع الصفحة عشان تعرف لما التحميل يبقى متاح.</p>
        <button type="button" className="btn" id="availability-button" onClick={() => dialog.current?.showModal()}>
          شوف تحميل رفيق <span aria-hidden="true">←</span>
        </button>
      </section>
      <dialog ref={dialog} id="availability" aria-labelledby="availability-title" aria-describedby="availability-description" onClick={dismissBackdrop}>
        <button type="button" className="close" aria-label="إغلاق" onClick={() => dialog.current?.close()}>×</button>
        <div className="eyebrow">تحميل رفيق</div>
        <h2 id="availability-title">بنجهّز روابط التحميل</h2>
        <p id="availability-description">هتلاقي روابط المتاجر هنا لما تبقى متاحة. تقدر ترجع للصفحة وتجرب مثال الروتين.</p>
        <button type="button" className="btn dismiss" onClick={() => dialog.current?.close()}>كمّل التجربة</button>
      </dialog>
    </>
  );
}
