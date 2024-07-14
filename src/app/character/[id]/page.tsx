"use client";

import { getBot } from "@/actions/get-bot";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { OnboardingBanner } from "@/components/home/onboarding-banner";
import { MainLayout } from "@/components/layout/main-layout";
import { Bot } from "@/components/lib/types/bot";
import { NextImage } from "@/components/ui/next-image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { id } = useParams();

  const [bot, setBot] = useState<Bot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBot() {
      const { data } = await getBot(id as string);

      setBot(data);

      setLoading(false);
    }

    fetchBot();
  }, [id]);

  const src =
    bot?.avatar_url !== "/assets/harley.png"
      ? "https://ndsc.b-cdn.net/" + bot?.avatar_url
      : "/assets/harley.png";

  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header />

        <OnboardingBanner />

        {loading ? (
          <span>Loading...</span>
        ) : !bot ? (
          <span>Bot not found</span>
        ) : (
          <div className="flex flex-row gap-3 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-96 h-96 relative">
                <NextImage
                  imgClassName="z-30 rounded-2xl overflow-hidden"
                  src={src}
                  alt={bot.id}
                  layout="fill"
                  useSkeleton
                />

                <div className="absolute inset-0 rounded-2xl blur-lg">
                  <NextImage src={src} alt={bot.id} layout="fill" useSkeleton />
                </div>
              </div>

              <h1 className="text-3xl text-center p-3 bg-dark-border/50 rounded-2xl font-semibold">
                {bot.name}
              </h1>

              <p className="p-3 bg-dark-border/50 rounded-2xl">{bot.title}</p>
            </div>
          </div>
        )}
      </MainContainer>
      <Footer />
    </MainLayout>
  );
}
