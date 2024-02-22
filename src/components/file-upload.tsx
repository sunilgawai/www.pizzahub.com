"use client";

import { Trash } from "lucide-react";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
	onChange?: any;
	// @ts-ignore
	onRemove?: (value: UploadFileResponse[]) => void;
	// @ts-ignore
	value?: UploadFileResponse[];
}

const FileUpload = ({ value, onChange, onRemove }: FileUploadProps) => {
	const { toast } = useToast();

	const handleDelete = (key: string) => {
		if (!value) return;
		const files = value;
		const filteredFiles = files.filter((item) => item.key !== key);
		onRemove(filteredFiles);
	};

	// @ts-ignore
	const handleUpload = (newFiles: UploadFileResponse[]) => {
		onChange([...value, ...newFiles]);
	};

	const IMG_MAX_LIMIT = 1;
	console.log("values", value);

	return (
		<div>
			<div className="flex items-center gap-4 mb-4">
				{value &&
					!!value.length &&
					value?.map((item) => (
						<div
							key={item.key}
							className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
						>
							<div className="z-10 absolute top-2 right-2">
								<Button
									type="button"
									onClick={() => handleDelete(item.key)}
									variant="destructive"
									size="sm"
								>
									<Trash className="h-4 w-4" />
								</Button>
							</div>
							<div>
								<Image
									fill
									className="object-cover"
									alt="Image"
									src={item.url || ""}
								/>
							</div>
						</div>
					))}
			</div>
			<div>
				{value?.length < IMG_MAX_LIMIT && (
					<UploadDropzone<OurFileRouter>
						className="dark:bg-zinc-800 h-52 py-2 ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300"
						endpoint="imageUploader"
						config={{ mode: "auto", appendOnPaste: true }}
						content={{
							allowedContent({ isUploading }) {
								if (isUploading)
									return (
										<p className="mt-2 text-sm text-slate-400 animate-pulse">
											Image Uploading...
										</p>
									);
							},
						}}
						onClientUploadComplete={(res) => {
							// Do something with the response
							const data: UploadFileResponse[] | undefined = res;
							if (data) {
								handleUpload(data);
							}
							console.log("complete", res);
						}}
						onUploadError={(error: Error) => {
							toast({
								title: "Something went wrong while image upload",
								variant: "destructive",
								description: error.message,
							});
						}}
						onUploadBegin={() => {
							// Do something once upload begins
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default FileUpload;
