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
      icon: "orders",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: "dashboard",
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: "pizza",
    },
    {
      title: "Featured",
      href: "/dashboard/featured",
      icon: "categories",
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: "users",
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
