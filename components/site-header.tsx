"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/content";
import { PlusIcon } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const close = () => setOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    const destination = document.getElementById(href.slice(1));
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
  }

  return (
    <div className="hero-header">
      <div className="wrap">
        <header
          className="site-header"
          id="top"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          <a className="logo" href="#top" aria-label="رفيق، ارجع لأول الصفحة">
            رفيق<span>RAFEEQ</span>
          </a>
          <nav aria-label="روابط الصفحة">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="btn small" href="#start">تحميل رفيق</a>
          <div className="mobile-menu">
            <button
              ref={toggle}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              القائمة <PlusIcon />
            </button>
            <nav id="mobile-navigation" aria-label="روابط الصفحة على الموبايل" hidden={!open}>
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => navigate(item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
