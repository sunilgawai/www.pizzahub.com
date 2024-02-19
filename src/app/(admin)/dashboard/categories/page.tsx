import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { CategoriesColumns } from "@/components/tables/categories-column";
import CategoriesTable from "@/components/tables/categories-table";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Categories",
};

const categories = [
  {
    id: 1,
    name: "Pizzas",
    icon: "🍕",
    isActive: true,
  },
  {
    id: 2,
    name: "Drinks",
    icon: "🍷",
    isActive: true,
  },
  {
    id: 3,
    name: "Snacks",
    icon: "🍟",
    isActive: true,
  },
  {
    id: 4,
    name: "Sea Food",
    icon: "🦞",
    isActive: true,
  },
];

export default async function CategoriesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Categories" text="Create and manage categories.">
        <Button variant="outline">Create Category</Button>
      </DashboardHeader>
      <div>
      <EmptyPlaceholder>
          <CategoriesTable data={categories} columns={CategoriesColumns} />
        </EmptyPlaceholder>
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
