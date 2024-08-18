import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";
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
    <footer className="flex w-full flex-1 flex-col items-center">
      <div
        className="mt-auto flex max-h-96 w-full flex-col items-center justify-center gap-2
          bg-gray-dark py-5 xs:border-t xs:border-t-dark-border xs:bg-transparent"
      >
        <span className="mb-2 text-[10px] text-accent-red xs:text-sm">
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

        <div className="mb-3 flex flex-row items-center gap-7">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              className="flex flex-row items-center gap-3 text-[10px] font-bold xs:text-xs"
              href={link.link}
            >
              <CustomIcon
                className="h-4 w-4 xs:h-5 xs:w-5"
                iconName={link.iconName}
              />

              <span className="hidden xs:block">{link.linkName}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-3 whitespace-pre-wrap">
          {links.map((link, index) => (
            <Link
              key={index}
              className="whitespace-nowrap text-[10px] xs:text-xs"
              href={link.link}
            >
              {link.linkName}
            </Link>
          ))}
        </div>

        <Link href="#" className="mt-5 text-[10px] text-accent-blue xs:text-xs">
          18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement.
        </Link>

        <span className="mt-8 px-10 text-[9px]">
          SpicyChat.ai is a site owned and operated by NextDay AI USA Inc. 2915
          Ogletown Road, Suite 4642, DE, 19713, USA
        </span>
      </div>
    </footer>
  );
}
