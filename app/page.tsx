import { LandingMotion } from "@/components/landing-motion";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VoiceCapture, ReminderFlight } from "@/components/voice-capture";
import { FeatureStory } from "@/components/feature-story";
import { RoutineDemo } from "@/components/routine-demo";
import { Faq } from "@/components/faq";
import { DownloadSection } from "@/components/download-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <LandingMotion>
      <a className="skip" href="#main">روح للمحتوى</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <VoiceCapture />
        <FeatureStory />
        <RoutineDemo />
        <Faq />
        <DownloadSection />
      </main>
      <ReminderFlight />
      <SiteFooter />
    </LandingMotion>
  );
}
