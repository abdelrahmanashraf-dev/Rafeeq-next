"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { transcript } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function LandingMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = scope.current;
    if (!root) return;
    const media = gsap.matchMedia();

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        pin: "(min-width: 768px) and (min-height: 570px)",
        story: "(min-width: 901px) and (min-height: 650px)",
      },
      (context) => {
        const conditions = context.conditions!;
        if (!conditions.motion) return;

        root.setAttribute("data-landing-motion", "");
        const hero = root.querySelector<HTMLElement>("[data-scroll-hero]");
        const demo = root.querySelector<HTMLElement>(".voice-demo");
        const cta = root.querySelector<HTMLElement>("[data-scroll-cta]");
        const track = root.querySelector<HTMLElement>("[data-voice-track]");
        const scene = root.querySelector<HTMLElement>("[data-voice-scene]");

        if (hero) {
          gsap.fromTo(
            hero.querySelector(".hero-device"),
            { opacity: 0.45, y: 18, rotationY: -9, rotation: -3 },
            { opacity: 1, y: 0, rotationY: 0, rotation: 0, duration: 0.85, ease: "power2.out" },
          );
          gsap.fromTo(hero, { "--hero-exit": 0 }, {
            "--hero-exit": 1,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "bottom bottom", end: "bottom 20%", scrub: true },
          });
        }
        if (demo) {
          gsap.fromTo(demo, { "--voice-enter": 0 }, {
            "--voice-enter": 1,
            ease: "none",
            scrollTrigger: { trigger: demo, start: "top bottom", end: "top 20%", scrub: true },
          });
        }
        if (cta) {
          gsap.fromTo(cta, { "--cta-open": 0 }, {
            "--cta-open": 1,
            ease: "power1.inOut",
            scrollTrigger: { trigger: cta, start: "top 95%", end: "clamp(top 35%)", scrub: true },
          });
        }

        if (track && scene) {
          track.setAttribute("data-motion", "");
          gsap.set(scene, {
            "--voice-frame": 0,
            "--voice-progress": 0,
            ...Object.fromEntries(transcript.map((_, index) => [`--voice-row-${index}`, 0])),
          });

          if (conditions.pin) ScrollTrigger.create({
            id: "voice-pin",
            trigger: scene,
            start: "top top",
            end: () => `+=${window.innerHeight * 1.5}`,
            pin: scene,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 2,
          });

          // Start transcription only after the recording reaches the pinned position.
          const voice = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "voice-story",
              trigger: track,
              start: conditions.pin ? "top top" : "top 55%",
              end: conditions.pin ? () => `+=${window.innerHeight * 1.5}` : "bottom 35%",
              scrub: true,
              invalidateOnRefresh: true,
              refreshPriority: 1,
            },
          });
          if (conditions.pin) voice.to(scene, { "--voice-frame": 1, duration: 0.65, ease: "power1.inOut" }, 0);
          voice.fromTo(scene, { "--voice-progress": 0 }, { "--voice-progress": 1, duration: 1.14, immediateRender: false }, 0.65);
          transcript.forEach((_, index) => {
            voice.fromTo(scene, { [`--voice-row-${index}`]: 0 }, {
              [`--voice-row-${index}`]: 1,
              duration: 0.4,
              ease: "power1.inOut",
              immediateRender: false,
            }, 0.65 + index * 0.28);
          });
          if (conditions.pin) voice.to(scene, { "--voice-frame": 0.38, duration: 0.36, ease: "power2.inOut" }, 1.79);
        }

        const source = root.querySelector<HTMLElement>("[data-reminder-source]");
        const destination = root.querySelector<HTMLElement>("[data-reminder-destination]");
        const flight = root.querySelector<HTMLElement>("[data-reminder-flight]");

        if (source && destination && flight) {
          const sourceBox = () => source.getBoundingClientRect();
          const destinationBox = () => destination.getBoundingClientRect();
          const rootBox = () => root.getBoundingClientRect();
          const phase = (progress: number) => {
            root.dataset.reminderPhase = progress <= 0 ? "source" : progress >= 1 ? "destination" : "travel";
          };
          const reminder = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "reminder-transfer",
              trigger: source,
              start: () => sourceBox().top + window.scrollY + sourceBox().height / 2 - window.innerHeight * 0.42,
              end: () => destinationBox().top + window.scrollY + destinationBox().height / 2 - window.innerHeight * 0.58,
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => phase(self.progress),
              onRefresh: (self) => phase(self.progress),
            },
          });

          // Animate in document coordinates, so scroll and reverse scroll share the same path.
          reminder.fromTo(flight, {
            x: () => sourceBox().left - rootBox().left,
            y: () => sourceBox().top - rootBox().top,
            width: () => sourceBox().width,
            height: () => sourceBox().height,
            "--reminder-progress": 0,
          }, {
            x: () => destinationBox().left - rootBox().left,
            y: () => destinationBox().top - rootBox().top,
            width: () => destinationBox().width,
            height: () => destinationBox().height,
            "--reminder-progress": 1,
            duration: 1,
          }, 0);
          reminder.to(flight.querySelector(".reminder-flight-source"), {
            opacity: 0, duration: 0.22, ease: "sine.inOut",
          }, 0.57);
          reminder.to(flight.querySelector(".reminder-flight-destination"), {
            opacity: 1, duration: 0.22, ease: "sine.inOut",
          }, 0.57);
        }

        if (conditions.story) {
          const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-story-step]"));
          const screens = Array.from(root.querySelectorAll<HTMLElement>("[data-story-screen]"));
          gsap.set(screens, { autoAlpha: 0 });
          gsap.set(screens[0], { autoAlpha: 1 });
          steps.slice(1).forEach((step, index) => {
            gsap.timeline({
              scrollTrigger: { trigger: step, start: "top 60%", end: "top 40%", scrub: 0.2 },
            })
              .fromTo(screens[index], { autoAlpha: 1 }, { autoAlpha: 0, duration: 1, immediateRender: false }, 0)
              .fromTo(screens[index + 1], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, immediateRender: false }, 0);
          });
        }

        return () => {
          root.removeAttribute("data-landing-motion");
          delete root.dataset.reminderPhase;
          track?.removeAttribute("data-motion");
        };
      },
    );

    let mounted = true;
    document.fonts.ready.then(() => {
      if (mounted) ScrollTrigger.refresh();
    });
    const header = root.querySelector(".hero-header");
    const headerResize = new ResizeObserver(() => ScrollTrigger.refresh());
    if (header) headerResize.observe(header);

    return () => {
      mounted = false;
      headerResize.disconnect();
      media.revert();
    };
  }, { scope });

  return <div className="landing-root" ref={scope}>{children}</div>;
}
