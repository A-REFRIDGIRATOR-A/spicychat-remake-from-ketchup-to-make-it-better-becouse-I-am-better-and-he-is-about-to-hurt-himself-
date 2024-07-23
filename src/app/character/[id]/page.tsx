"use client";

import { getBot } from "@/actions/get-bot";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { MainLayout } from "@/components/layout/main-layout";
import { NextImage } from "@/components/ui/next-image";
import { useEffect, useState } from "react";
import { calculateScore } from "@/components/lib/utils";
import { CharacterLayoutFallback } from "@/components/fallbacks/character-layout-fallback";
import type { Bot } from "@/components/lib/types/bot";

type Props = {
  params: { id: string };
};

export default function CharacterPage({ params }: Props) {
  const [bot, setBot] = useState<Bot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBot() {
      const { data } = await getBot(params.id as string);

      setBot(data);

      setLoading(false);
    }

    fetchBot();
  }, [params]);

  const src =
    bot?.avatar_url !== "/assets/harley.png"
      ? "https://ndsc.b-cdn.net/" + bot?.avatar_url
      : "/assets/harley.png";

  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header />

        {loading ? (
          <CharacterLayoutFallback />
        ) : !bot ? (
          <span>Bot not found</span>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="relative h-96 w-full">
              <NextImage src={src} alt={bot.id} layout="fill" useSkeleton />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <div
                className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between
                  gap-3 p-5"
              >
                <h1 className="text-3xl font-semibold">{bot.name}</h1>

                <span className="text-4xl font-bold">
                  {calculateScore(bot.rating_score)}
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 px-6">
              <p>{bot.title}</p>
            </div>
          </div>
        )}
        <Footer />
      </MainContainer>
    </MainLayout>
  );
}
