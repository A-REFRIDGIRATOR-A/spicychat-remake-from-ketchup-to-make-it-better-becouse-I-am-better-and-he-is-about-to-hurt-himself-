"use client";

import Image from "next/image";
import { useState } from "react";
import { CustomIcon } from "../ui/custom-icon";

export function OnboardingBanner(): JSX.Element {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setHidden(true);

  if (hidden) return <></>;

  return (
    <div className="w-full h-72 xs:h-48 px-5">
      <div className="overflow-hidden rounded-2xl relative w-full h-full shadow-[0px_2px_6px_rgba(250,250,250,0.5)_inset]">
        <Image
          className="object-cover absolute inset-0 scale-125 pointer-events-none"
          src="/assets/onboardingBannerDark.svg" // Credit Spicychat: https://spicychat.ai/Assets/onboardingBannerDark.svg
          alt="oboarding-banner"
          fill
          priority
        />

        <div className="w-full h-full px-4 xs:px-20 py-2 flex flex-col xs:items-start [&_*]:z-10">
          <span className="text-sm xs:text-[22px] text- font-semibold text-center xs:text-left mb-3 xs:mb-0">
            Welcome to your ultimate destination for personalized, uncensored
            roleplaying
          </span>

          <span className="text-sm">
            Chat instantly, or join over 2 million registered users to gain
            access to:
          </span>

          <ul
            className="text-sm *:list-disc xs:grid-cols-2 grid grid-cols-1
                      max-w-[700px] text-white list-disc pl-4 mt-5 whitespace-nowrap -space-y-1"
          >
            <li>Library of 200,000+ chatbots</li>
            <li>NSFW content</li>
            <li>Fully uncensored chats</li>
            <li>Save chats, and favorite chatbots</li>
            <li>Create your own character</li>
          </ul>

          <button
            className="xs:absolute xs:right-10 xs:top-[40%] xs:border rounded-full xs:px-5 px-0 py-1 text-xl font-bold xs:bg-black/5
                      xs:mt-0 mt-auto bg-white text-black xs:text-white"
          >
            Create Free Account
          </button>

          <button
            className="absolute top-2.5 right-2.5 z-[10]"
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
