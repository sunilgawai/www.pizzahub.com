
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Products",
};

export default async function ProductsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Products" text="Create and manage products.">
        <Button variant="outline">Create Products</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No Category created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any category yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Create Products</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}
