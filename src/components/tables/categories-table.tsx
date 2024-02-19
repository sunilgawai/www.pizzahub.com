"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

// const categories = [
//   {
//     id: 1,
//     name: "Pizzas",
//     icon: "🍕",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Drinks",
//     icon: "🍷",
//     isActive: true,
//   },
//   {
//     id: 3,
//     name: "Snacks",
//     icon: "🍟",
//     isActive: true,
//   },
//   {
//     id: 4,
//     name: "Sea Food",
//     icon: "🦞",
//     isActive: true,
//   },
// ];
// export type Category = {
//   id: number;
//   name: string;
//   email: string;
//   status: string;
// };
// const columns = [
//   {
//     accessorKey: "id",
//     header: "ID",
//     cell: (props: any) => <div>{props.getValue()}</div>,
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//     cell: (props: any) => <div>{props.getValue()}</div>,
//   },
//   {
//     accessorKey: "icon",
//     header: "Icon",
//     cell: (props: any) => <div>{props.getValue()}</div>,
//   },
//   {
//     accessorKey: "is Active",
//     header: "isActive",
//     cell: (props: any) => (
//       <div>
//         {props.getValue() === true ? (
//           <span className="py-2 px-4 rounded-sm text-xs">Active</span>
//         ) : (
//           <span className="py-2 px-4 rounded-sm text-xs">Not Active</span>
//         )}
//       </div>
//     ),
//   },
// ];

interface CategoriesTableProps<TableData, TableValue> {
  columns: ColumnDef<TableData, TableValue>[];
  data: TableData[];
}
const CategoriesTable = ({
  columns,
  data,
}: CategoriesTableProps<TableData, TableValue>) => {
//   const [list, setList] = useState(categories);
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      {table.getHeaderGroups().map((group, index) => (
        <div
          className="flex flex-row gap-6 font-semibold border py-2 px-4"
          key={group.id}
        >
          {group.headers.map((header, key) => (
            <div className="flex flex-row gap-6 font-medium" key={header.id}>
              {header.column.columnDef.header?.toString()}
            </div>
          ))}
        </div>
      ))}
      {table.getRowModel().rows.map((row) => (
        <div
          className="flex flex-row gap-6 font-semibold border py-2 px-4"
          key={row.id}
        >
          {row.getVisibleCells().map((cell) => (
            <div className="flex flex-row gap-6 font-medium" key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoriesTable;
