
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Categories",
};

export default async function CategoriesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Categories" text="Create and manage categories.">
        <Button variant="outline">Create Category</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No Category created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any category yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Create</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}
