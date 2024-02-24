"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { categorySchema } from "@/schemas";
import { Trash } from "lucide-react";
import FileUpload from "../file-upload";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Separator } from "../ui/separator";
import { Toggle } from "../ui/toggle";

type FormData = z.infer<typeof categorySchema>;

interface CategoryFormProps extends React.HTMLAttributes<HTMLFormElement> {
	form_data?: any;
	form_mode?: "create" | "update";
}

const CategoryForm = ({
	form_data,
	form_mode,
	className,
	...props
}: CategoryFormProps) => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const router = useRouter();
	const categoriesForm = useForm<FormData>({
		resolver: zodResolver(categorySchema),
		defaultValues: {
			name: form_data?.name || "",
			image: form_data?.image || "",
			status: form_data?.status || false,
		},
	});
	const [isSaving, setIsSaving] = React.useState<boolean>(false);

	async function onSubmit(data: FormData) {
		console.log("saving category", data);

		setIsSaving(true);

		const response = await fetch(`/api/users/${1}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				status: data.status,
			}),
		});

		setIsSaving(false);

		if (!response?.ok) {
			return toast({
				title: "Something went wrong.",
				description: "Your category was not updated. Please try again.",
				variant: "destructive",
			});
		}

		toast({
			description: "Your category has been updated.",
		});

		router.refresh();
	}

	return (
		<>
			<div className="flex items-center justify-between">
				{/* <Heading title={title} description={description} /> */}
				{form_data && (
					<Button
						disabled={loading}
						variant="destructive"
						size="sm"
						// onClick={() => setOpen(true)}
					>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...categoriesForm}>
				<form
					onSubmit={categoriesForm.handleSubmit(onSubmit)}
					className="space-y-8 w-full"
				>
					<div className="md:grid grid-rows-2 gap-2">
						<FormField
							control={categoriesForm.control}
							name="image"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image</FormLabel>
									<FormControl>
										<FileUpload {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						
						<div className="md:grid md:grid-cols-2 gap-8 h-full">
							<FormField
								control={categoriesForm.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												className="w-full border border-gray-200 py-2 px-4 font-light leading-tight"
												disabled={loading}
												placeholder="Category name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={categoriesForm.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Select Status</FormLabel>
										<FormControl>
											{/* <Input type="checkbox" disabled={loading} {...field} /> */}
											{/* <Checkbox {...field} /> */}
											<Toggle
												aria-label="Toggle italic"
												className="w-full border border-gray-200"
												variant="outline"
												size="sm"
											>
												{/* <FontBoldIcon className="h-4 w-4" /> */}
												Active now
											</Toggle>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					{form_mode && form_mode === "create" ? (
						<Button disabled={loading} className="ml-auto" type="submit">
							Create Category
						</Button>
					) : (
						<Button
							className="ml-4"
							disabled={loading}
							variant="default"
							// onClick={() => setOpen(true)}
							type="button"
						>
							<Trash className="h-4 w-4 mr-2" />
							Update Category
						</Button>
					)}
				</form>
			</Form>
		</>
	);
};

export default CategoryForm;
