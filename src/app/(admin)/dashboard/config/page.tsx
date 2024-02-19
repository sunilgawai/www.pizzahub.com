import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import ConfigurationTable from "@/components/tables/configuration-table";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Settings",
  description: "Manage account, website and product settings.",
};

export default async function ConfigPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Configure Products."
        text="Manage product configurations."
      />
      <ConfigurationTable />
    </DashboardShell>
  );
}
