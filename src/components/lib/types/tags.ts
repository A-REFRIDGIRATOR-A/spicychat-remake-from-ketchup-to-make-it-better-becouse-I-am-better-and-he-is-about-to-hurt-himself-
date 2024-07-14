export const BOT_TAGS = [
  "Female",
  "Male",
  "NSFW",
  "SFW",
  "Tsundere",
  "Drama",
  "Scenario",
] as const;

export type Tag = (typeof BOT_TAGS)[number];
