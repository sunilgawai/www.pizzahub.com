import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { CategoriesColumns } from "@/components/tables/categories-column";
import CategoriesTable from "@/components/tables/categories-table";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Categories",
};

const categories: {
  id: number;
  name: string;
  image: string;
  status: boolean;
}[] = [
  {
    id: 1,
    name: "Pizzas",
    image: "🍕",
    status: true,
  },
  {
    id: 2,
    name: "Drinks",
    image: "🍷",
    status: true,
  },
  {
    id: 3,
    name: "Snacks",
    image: "🍟",
    status: true,
  },
  {
    id: 4,
    name: "Sea Food",
    image: "🦞",
    status: false,
  },
];

export default async function CategoriesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Categories"
        text="You can create and manage categories directly through the table."
      >
        <Button variant="outline">Create Category</Button>
      </DashboardHeader>
      {categories.length ? (
        <CategoriesTable columns={CategoriesColumns} data={categories} />
      ) : (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No Category created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any category yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Create Category</Button>
        </EmptyPlaceholder>
      )}
    </DashboardShell>
  );
}
