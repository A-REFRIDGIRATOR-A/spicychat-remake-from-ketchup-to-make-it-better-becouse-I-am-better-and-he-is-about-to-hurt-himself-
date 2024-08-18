export type Bot = {
  id: string;
  avatar_url: string;
  creator_username: string;
  definition_visible: boolean;
  is_nsfw: boolean;
  name: string;
  num_messages: number;
  num_messages_24h: number;
  rating_score: number;
  tags: string[];
  title: string;
  greeting: string;
  persona: string;
  token_count: number;
  updatedAt: number;
  createdAt: number;
};
