export const BOT_TAGS = ["Female", "Male", "NSFW", "SFW"] as const;

export type Tag = (typeof BOT_TAGS)[number];
