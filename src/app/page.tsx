import { Suspense } from "react";
import { BotCard } from "./components/bot/bot-card";
import { Footer } from "./components/common/footer";
import { MainContainer } from "./components/common/main-container";
import { OnboardingBanner } from "./components/common/onboarding-banner";
import { FilterOptions } from "./components/home/filter-options";
import { Header } from "./components/home/header";
import { MainLayout } from "./components/layout/main-layout";

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
            creator="User123"
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

        <Suspense>
          <FilterOptions />
        </Suspense>

        <div className="flex flex-col items-center gap-20 w-full h-full mt-10">
          <div
            className="grid grid-flow-row grid-cols-2 grid-rows-2 items-center
                      2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 w-full xs:gap-x-0 gap-y-8 gap-x-8 h-full
                      px-6 xs:px-0 mb-10 place-items-center"
          >
            <DummyBots />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </MainLayout>
  );
}
