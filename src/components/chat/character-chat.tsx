import { getBot } from "@/actions/get-bot";
import { ChatLayout } from "./chat-layout";
import type { Bot } from "../lib/types/bot";

type CharacterChatProps = {
  id: string;
};

export async function CharacterChat({ id }: CharacterChatProps) {
  const data = await getBot(id);

  if (!data) return <></>;

  const bot: Bot = data.data as Bot;

  return <ChatLayout bot={bot} />;
}
