"use client";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import ProductForm from "@/components/forms/product-form";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// export const metadata = {
// 	title: "Admin Products",
// };

export default async function ProductsPage() {
	const [form_mode, setFormMode] = useState<"create" | "update">("create");
	const [form_visible, setFormVisible] = useState<boolean>(true);
	return (
		<DashboardShell>
			<DashboardHeader heading="Products" text="Create and manage products.">
				{!form_visible ? (
					<Button onClick={() => setFormVisible(!form_visible)}>
						Create Product
					</Button>
				) : (
					<Button onClick={() => setFormVisible(!form_visible)}>
						Cancel Operation
					</Button>
				)}
			</DashboardHeader>
            {form_visible && <ProductForm form_mode={form_mode} />}
			<div>
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="post" />
					<EmptyPlaceholder.Title>No Product added</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any category yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button
						onClick={() => setFormVisible(!form_visible)}
						variant="outline"
					>
						Create Products
					</Button>
				</EmptyPlaceholder>
			</div>
		</DashboardShell>
	);
}
