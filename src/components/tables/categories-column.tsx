"use client";
export const CategoriesColumns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props: any) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props: any) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "icon",
    header: "Icon",
    cell: (props: any) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "is Active",
    header: "isActive",
    cell: (props: any) => (
      <div>
        {props.getValue() === true ? (
          <span className="py-2 px-4 rounded-sm text-xs">Active</span>
        ) : (
          <span className="py-2 px-4 rounded-sm text-xs">Not Active</span>
        )}
      </div>
    ),
  },
];
