import React, { FC } from "react";

interface ProductFormProps {
	form_data?: any;
	form_mode?: "create" | "update";
}
const ProductForm: FC<ProductFormProps> = ({ form_mode, form_data }) => {
	return <div>ProductForm</div>;
};

export default ProductForm;
