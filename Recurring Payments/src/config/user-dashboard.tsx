import type { UserConfig } from "../types/user";

export const userConfig: UserConfig = {
  mainNav: [
    {
      title: "User",
      href: "/dashboard/user",
    },
    {
      title: "Consulate",
      href: "/dashboard/admin",
    },
  ],
  userSidebarNav: [
    {
      title: "Dashboard",
      href: "/user-dashboard",
      icon: "home",
    },
    {
      title: "Organizations Joined",
      href: "/users-organizations",
      icon: "home",
    },
    {
      title: "Payment Received",
      href: "/user-payment-history",
      icon: "home",
    },
    {
      title: "User Profile",
      href: "/user-profile",
      icon: "home",
    },
  ],
  adminSidebarNav: [
    {
      title: "Organization",
      href: "/dashboard/user/visa",
      icon: "home",
    },
  ],
  sidebarNav: [],
  sidebarNavBidder: [],
};
