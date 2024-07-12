import { Suspense } from "react";
import { Footer } from "../components/common/footer";
import { MainContainer } from "../components/common/main-container";
import { OnboardingBanner } from "../components/home/onboarding-banner";
import { FilterOptions } from "../components/home/filter-options";
import { Header } from "../components/common/header";
import { MainLayout } from "../components/layout/main-layout";
import { BotsContainer } from "../components/home/bots-container";
import { BotCard } from "../components/bot/bot-card";
import { FilterOptionsFallback } from "@/components/fallbacks/filter-options-fallback";

export default function Home() {
  function DummyBots(): JSX.Element {
    return (
      <>
        {Array.from({ length: 16 }, (_, index) => (
          <BotCard
            key={index}
            src="/assets/harley.png"
            name="Harley Quinn"
            description={`Harley Quinn (Harleen Frances Quinzel) is a character appearing in
                            American comic books published by DC Comics.`}
            messages={123}
            recommended
          />
        ))}
      </>
    );
  }

  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header sticky />

        <OnboardingBanner />

        <Suspense fallback={<FilterOptionsFallback />}>
          <FilterOptions />
        </Suspense>

        <BotsContainer className="mt-10">
          <DummyBots />
        </BotsContainer>
      </MainContainer>
      <Footer />
    </MainLayout>
  );
}
