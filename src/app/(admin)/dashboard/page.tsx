
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Orders",
};

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Orders" text="Create and manage orders.">
        <Button variant="outline">Create Orders</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No orders availabled</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any order yet.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Create Orders</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}
