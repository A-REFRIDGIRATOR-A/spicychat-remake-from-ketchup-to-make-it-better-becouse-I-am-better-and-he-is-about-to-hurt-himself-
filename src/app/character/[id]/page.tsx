"use client";

import { getBot } from "@/actions/get-bot";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { MainLayout } from "@/components/layout/main-layout";
import { NextImage } from "@/components/ui/next-image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Bot } from "@/components/lib/types/bot";

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

        {loading ? (
          <span>Loading...</span>
        ) : !bot ? (
          <span>Bot not found</span>
        ) : (
          <div className="flex flex-row gap-3">
            <div className="relative h-96 w-full">
              <NextImage src={src} alt={bot.id} layout="fill" useSkeleton />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5">
                <h1 className="text-3xl font-semibold">{bot.name}</h1>
              </div>
            </div>
          </div>
        )}
      </MainContainer>
      <Footer />
    </MainLayout>
  );
}
