export const BOT_TAGS = [
  "Female",
  "Male",
  "NSFW",
  "SFW",
  "Tsundere",
  "Drama",
  "Scenario",
  "Gentle Dom",
  "Dominant",
  "Submissive",
  "Yandere",
  "Fantasy",
] as const;

export type Tag = (typeof BOT_TAGS)[number];
