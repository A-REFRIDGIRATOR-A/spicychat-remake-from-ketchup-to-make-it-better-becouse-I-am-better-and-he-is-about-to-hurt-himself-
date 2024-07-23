import { getBot } from "@/actions/get-bot";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const { data } = await getBot(id as string);

  return {
    title: `${data?.name ?? "Character"} | Spicychat (Unofficial Fan Remake)`,
    description: `${data?.name ?? "Character"} | Spicychat (Unofficial Fan Remake)`,
  };
}

export default function CharacterPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
