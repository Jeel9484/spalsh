import {
  HomeHashtag,
  EmojiHappy,
  User,
  Notepad,
  Setting2,
} from "iconsax-reactjs";

export const NAV_ITEMS = [
  { label: "Dashboard", icon: HomeHashtag, href: "/dashboard" },
  { label: "Snaps", icon: EmojiHappy, href: "/dashboard/snaps" },
  { label: "Users", icon: User, href: "/dashboard/user" },
  { label: "Custom Fields", icon: Notepad, href: "/dashboard/customfield" },
  { label: "Integrations", icon: Setting2, href: "/dashboard/integration" },
];


export const SIDEBAR_LOGO = "/assets/sidebar-logo.svg";

export const USER = {
  name: "Marie Claire",
  image: "/assets/user-1.png",
};
