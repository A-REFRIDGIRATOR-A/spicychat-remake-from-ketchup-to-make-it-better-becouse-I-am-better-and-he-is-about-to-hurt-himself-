import { Suspense } from "react";
import { Footer } from "../components/common/footer";
import { MainContainer } from "../components/common/main-container";
import { OnboardingBanner } from "../components/home/onboarding-banner";
import { FilterOptions } from "../components/home/filter-options";
import { Header } from "../components/common/header";
import { MainLayout } from "../components/layout/main-layout";
import { BotsContainer } from "../components/home/bots-container";
import { BotCard } from "../components/bot/card/bot-card";
import { FilterOptionsFallback } from "@/components/fallbacks/filter-options-fallback";
import { getBots } from "@/actions/get-bots";
import { ShowcaseBotsFallback } from "@/components/fallbacks/showcase-bots-fallback";

async function ShowcaseBots() {
  const data = await getBots(49);

  function DummyBots(): JSX.Element {
    return (
      <>
        {data.data.map((bot, index) => (
          <BotCard key={index} bot={bot} />
        ))}
      </>
    );
  }

  return (
    <BotsContainer className="mt-5 xs:mt-10">
      <DummyBots />
    </BotsContainer>
  );
}

export default function Home() {
  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header />

        <OnboardingBanner />

        <Suspense fallback={<FilterOptionsFallback />}>
          <FilterOptions />
        </Suspense>

        <Suspense fallback={<ShowcaseBotsFallback />}>
          <ShowcaseBots />
        </Suspense>

        <Footer />
      </MainContainer>
    </MainLayout>
  );
}
