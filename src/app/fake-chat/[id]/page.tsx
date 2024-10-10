import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { MainLayout } from "@/components/layout/main-layout";
import { Suspense } from "react";
import { CharacterChat } from "@/components/chat/character-chat";

type Props = {
  params: { id: string };
};

export default function FakeChatPage({ params }: Props): JSX.Element {
  return (
    <MainLayout>
      <MainContainer className="items-center">
        <Header />

        <Suspense>
          <CharacterChat id={params.id} />
        </Suspense>
      </MainContainer>
    </MainLayout>
  );
}
