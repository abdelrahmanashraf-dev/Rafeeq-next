import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function AppScreen({ screen, alt, priority = false }: { screen: string; alt: string; priority?: boolean }) {
  return <Image src={`/screens/${screen}.png`} width={402} height={874} alt={alt} priority={priority}
    sizes="(max-width: 767px) 255px, 338px" />;
}

export function PhoneFrame({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`device-frame ${className}`} {...props}>
      <div className="device-screen hero-device-screen">{children}</div>
      <img className="device-artwork" src="/phone-frame.png" width="899" height="1816" alt="" aria-hidden="true" draggable="false" decoding="async" />
      <img className="device-camera" src="/phone-frame.png" width="899" height="1816" alt="" aria-hidden="true" draggable="false" />
    </div>
  );
}

export function Phone({ children, priority = false, screen = "home", className = "" }: {
  children?: ReactNode; priority?: boolean; screen?: string; className?: string;
}) {
  return (
    <PhoneFrame className={`hero-device ${className}`}>
      <AppScreen screen={screen} alt="شاشة رفيق الرئيسية بتعرض آخر فكرة وتذكيرات اليوم وزر التسجيل" priority={priority} />
      {children}
    </PhoneFrame>
  );
}
