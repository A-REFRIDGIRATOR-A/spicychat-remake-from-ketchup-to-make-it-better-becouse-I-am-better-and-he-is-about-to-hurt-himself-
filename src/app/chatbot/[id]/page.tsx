import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { MainLayout } from "@/components/layout/main-layout";
import { Suspense } from "react";
import { CharacterLayoutFallback } from "@/components/fallbacks/character-layout-fallback";
import { CharacterLayout } from "@/components/layout/character-layout";

type Props = {
  params: { id: string };
};

export default function CharacterPage({ params }: Props) {
  return (
    <MainLayout className="flex flex-col items-center">
      <MainContainer>
        <Header />

        <Suspense fallback={<CharacterLayoutFallback />}>
          <CharacterLayout id={params.id} />
        </Suspense>

        <Footer />
      </MainContainer>
    </MainLayout>
  );
}
