import Image from "next/image";
import type { ReactNode } from "react";

export function AppScreen({
  screen,
  alt,
  priority = false,
}: {
  screen: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/screens/${screen}.png`}
      width={402}
      height={874}
      alt={alt}
      priority={priority}
      sizes="(max-width: 767px) 224px, 320px"
    />
  );
}

export function Phone({
  children,
  priority = false,
}: {
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <div className="hero-device">
      <div className="hero-device-screen">
        <AppScreen
          screen="home"
          alt="شاشة رفيق الرئيسية بتعرض آخر فكرة وتذكيرات اليوم وزر التسجيل"
          priority={priority}
        />
        {children}
      </div>
    </div>
  );
}
