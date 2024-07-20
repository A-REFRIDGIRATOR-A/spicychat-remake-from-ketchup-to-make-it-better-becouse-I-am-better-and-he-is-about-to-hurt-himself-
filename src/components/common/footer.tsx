import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";
import { Fragment } from "react";
import type { IconName } from "../ui/custom-icon";

type SocialLink = {
  linkName: string;
  link: string;
  iconName: IconName;
};

const socialLinks: SocialLink[] = [
  {
    linkName: "Join us on Discord",
    link: "",
    iconName: "DiscordIcon",
  },
  {
    linkName: "Follow us on Twitter",
    link: "",
    iconName: "TwitterIcon",
  },
  {
    linkName: "Reddit Community",
    link: "",
    iconName: "RedditIcon",
  },
];

const links = [
  {
    linkName: "Terms & Conditions",
    link: "",
  },
  {
    linkName: "Privacy Policy",
    link: "",
  },
  {
    linkName: "Refund Policy",
    link: "",
  },
  {
    linkName: "Report Content",
    link: "",
  },
  {
    linkName: "Community Guidelines",
    link: "",
  },
  {
    linkName: "Support",
    link: "",
  },
  {
    linkName: "Affiliates",
    link: "",
  },
];

export function Footer(): JSX.Element {
  return (
    <footer className="w-full py-5 flex flex-col gap-2 items-center justify-center bg-gray-dark mt-5">
      <span className="text-[10px] xs:text-sm text-accent-red mb-2">
        Remember, this is not the real site (obviously). Please check out the
        real site{" "}
        <Link
          className="font-bold"
          href="https://spicychat.ai/"
          aria-label="spicychat"
        >
          here
        </Link>
        .
      </span>

      <div className="flex flex-row gap-7 items-center mb-3">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            className="font-bold text-[10px] xs:text-xs flex flex-row items-center gap-3"
            href={link.link}
          >
            <CustomIcon className="w-5 h-5" iconName={link.iconName} />

            {link.linkName}
          </Link>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-3 items-center justify-center whitespace-pre-wrap">
        {links.map((link, index) => (
          <Link
            key={index}
            className="text-[10px] xs:text-xs whitespace-nowrap"
            href={link.link}
          >
            {link.linkName}
          </Link>
        ))}
      </div>

      <Link href="#" className="text-[10px] xs:text-xs mt-5 text-accent-blue">
        18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement.
      </Link>

      <span className="text-[9px] mt-8 px-10">
        SpicyChat.ai is a site owned and operated by NextDay AI USA Inc. 2915
        Ogletown Road, Suite 4642, DE, 19713, USA
      </span>
    </footer>
  );
}
