import Link from "next/link";

const socialLinks = [
  {
    linkName: "Join us on Discord",
    link: "",
    iconName: "",
  },
  {
    linkName: "Follow us on Discord",
    link: "",
    iconName: "",
  },
  {
    linkName: "Reddit Community",
    link: "",
    iconName: "",
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
    <footer className="w-full py-5 flex flex-col gap-2 items-center bg-gray-dark mt-5">
      <span className="tetx-[10px] text-accent-red mb-2">
        Remember, this is not the real site (obviously). Please check out the
        real site{" "}
        <Link className="font-bold" href="https://spicychat.ai/">
          here
        </Link>
        .
      </span>

      <div className="flex flex-row gap-10 items-center">
        {socialLinks.map((link, index) => (
          <Link key={index} className="font-bold text-sm" href={link.link}>
            {link.linkName}
          </Link>
        ))}
      </div>

      <div className="flex flex-row gap-3 items-center">
        {links.map((link, index) => (
          <Link key={index} className="text-xs" href={link.link}>
            {link.linkName}
          </Link>
        ))}
      </div>

      <Link href="#" className="text-xs mt-5">
        18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement.
      </Link>

      <span className="text-[10px] mt-8">
        SpicyChat.ai is a site owned and operated by NextDay AI USA Inc. 2915
        Ogletown Road, Suite 4642, DE, 19713, USA
      </span>
    </footer>
  );
}
