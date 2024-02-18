import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Orders",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: "post",
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: "post",
    },
    {
      title: "Featured",
      href: "/dashboard/featured",
      icon: "post",
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
