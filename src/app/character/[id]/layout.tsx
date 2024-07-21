import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with a character | Spicychat (Unofficial Fan Remake)",
  description: "Chatbot With AI Characters | Spicychat (Unofficial Fan Remake)",
};

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
