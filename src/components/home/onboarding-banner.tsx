"use client";

import Image from "next/image";
import { useState } from "react";
import { CustomIcon } from "../ui/custom-icon";

export function OnboardingBanner(): JSX.Element {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setHidden(true);

  if (hidden) return <></>;

  return (
    <div className="h-72 w-full px-5 xs:h-48">
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl
          shadow-[0px_2px_6px_rgba(250,250,250,0.5)_inset]"
      >
        <Image
          className="pointer-events-none absolute inset-0 scale-125 object-cover"
          src="/assets/onboardingBannerDark.svg" // Credit Spicychat: https://spicychat.ai/Assets/onboardingBannerDark.svg
          alt="oboarding-banner"
          fill
          priority
        />

        <div className="flex h-full w-full flex-col px-4 py-2 xs:items-start xs:px-20 [&_*]:z-10">
          <span className="text- mb-3 text-center text-sm font-semibold xs:mb-0 xs:text-left xs:text-[22px]">
            Welcome to your ultimate destination for personalized, uncensored
            roleplaying
          </span>

          <span className="text-sm">
            Chat instantly, or join over 2 million registered users to gain
            access to:
          </span>

          <ul
            className="*:list-disc mt-5 grid max-w-[700px] list-disc grid-cols-1 -space-y-1
              whitespace-nowrap pl-4 text-sm text-white xs:grid-cols-2"
          >
            <li>Library of 200,000+ chatbots</li>
            <li>NSFW content</li>
            <li>Fully uncensored chats</li>
            <li>Save chats, and favorite chatbots</li>
            <li>Create your own character</li>
          </ul>

          <button
            className="mt-auto rounded-full bg-white px-0 py-1 text-xl font-bold text-black xs:absolute
              xs:right-10 xs:top-[40%] xs:mt-0 xs:border xs:bg-black/5 xs:px-5 xs:text-white"
            type="button"
          >
            Create Free Account
          </button>

          <button
            className="absolute right-2.5 top-2.5 z-[10]"
            type="button"
            onClick={handleClick}
            aria-label="close-banner"
          >
            <CustomIcon iconName="XMarkIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
