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

async function ShowcaseBots() {
  const data = await getBots();

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
  // if (typeof window === "undefined") {
  //   console.log("we are a sever component");
  // } else console.log("we are a client component");

  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header />

        <OnboardingBanner />

        <Suspense fallback={<FilterOptionsFallback />}>
          <FilterOptions />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <ShowcaseBots />
        </Suspense>

        <Footer />
      </MainContainer>
    </MainLayout>
  );
}
